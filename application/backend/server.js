const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || "cloudtasks",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
});

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected", server: process.env.SERVER_ID || "unknown" });
  } catch (error) {
    res.status(503).json({ status: "degraded", database: "unavailable", error: error.message });
  }
});

app.get("/api/tasks", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, description, status, created_at, updated_at FROM tasks ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve tasks" });
  }
});

app.post("/api/tasks", async (req, res) => {
  const { title, description = "" } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "title is required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO tasks (title, description)
       VALUES ($1, $2)
       RETURNING id, title, description, status, created_at, updated_at`,
      [title.trim(), description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Unable to create task" });
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const result = await pool.query(
      `UPDATE tasks
       SET title = COALESCE($1, title),
           description = COALESCE($2, description),
           status = COALESCE($3, status),
           updated_at = NOW()
       WHERE id = $4
       RETURNING id, title, description, status, created_at, updated_at`,
      [title ?? null, description ?? null, status ?? null, req.params.id]
    );

    if (!result.rowCount) return res.status(404).json({ error: "Task not found" });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Unable to update task" });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING id", [req.params.id]);
    if (!result.rowCount) return res.status(404).json({ error: "Task not found" });
    res.json({ deleted: true, id: result.rows[0].id });
  } catch (error) {
    res.status(500).json({ error: "Unable to delete task" });
  }
});

app.get("/api/storage-info", (_req, res) => {
  res.json({
    storage: "Amazon S3",
    configured: Boolean(process.env.S3_BUCKET),
    bucket: process.env.S3_BUCKET || null
  });
});

app.listen(PORT, () => {
  console.log(`Cloud Task Manager API listening on port ${PORT}`);
});