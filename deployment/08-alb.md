# 08 - Application Load Balancer

Create an internet-facing Application Load Balancer.

## Subnets

Select:

```text
Public-A
Public-B
```

## Security group

Use:

```text
ALB-SG
```

## Target group

Create an IP/instance target group for:

```text
EC2-1
EC2-2
```

Port:

```text
3000
```

Health check:

```text
Protocol: HTTP
Path: /health
Port: traffic-port
```

Listener:

```text
HTTP :80 → target group
```

After registration, both targets should become healthy.

Open the ALB DNS name in a browser.

## Failure test

Stop the application on EC2-1:

```bash
sudo systemctl stop cloud-task-manager
```

Wait for the ALB health check to mark it unhealthy.

Traffic should continue through EC2-2.

Restart it:

```bash
sudo systemctl start cloud-task-manager
```
