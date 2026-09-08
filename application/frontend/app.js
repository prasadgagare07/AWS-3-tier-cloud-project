const $ = (id) => document.getElementById(id);

async function loadTasks() {
  $("status").textContent = "Loading...";
  try {
    const response = await fetch("/api/tasks");
    if (!response.ok) throw new Error("API request failed");
    const tasks = await response.json();

    $("tasks").innerHTML = tasks.length
      ? tasks.map(t => `<li><strong>${escapeHtml(t.title)}</strong><br>
          <span class="muted">${escapeHtml(t.description || "")}</span>
          <br>Status: ${escapeHtml(t.status)}</li>`).join("")
      : "<li>No tasks yet.</li>";

    $("status").textContent = "API connected";
  } catch (error) {
    $("status").textContent = "Unable to load tasks";
    $("status").className = "error";
  }
}

$("taskForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: $("title").value,
      description: $("description").value
    })
  });

  if (!response.ok) {
    alert("Could not create task");
    return;
  }

  $("taskForm").reset();
  loadTasks();
});

$("refresh").addEventListener("click", loadTasks);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[c]));
}

loadTasks();