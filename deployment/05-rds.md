# 05 - RDS PostgreSQL

Create an RDS PostgreSQL database.

## Subnet group

Use:

```text
Private-DB-A
Private-DB-B
```

## Connectivity

Set:

```text
Public access: No
Security group: RDS-SG
Port: 5432
```

Create database:

```text
Database name: cloudtasks
```

Use a strong password and do not commit it.

## Initialize schema

From an authorized application/admin environment, run:

```bash
psql "host=<RDS_ENDPOINT> port=5432 dbname=cloudtasks user=<DB_USER> sslmode=require" -f database/schema.sql
```

If your RDS configuration does not require SSL, adjust `sslmode` accordingly.

## Interview points

Know:

- Why RDS instead of PostgreSQL installed on EC2?
- What is Multi-AZ?
- What are automated backups?
- What is a DB subnet group?
- Why is public access disabled?
