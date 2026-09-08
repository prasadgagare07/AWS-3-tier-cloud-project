# 09 - Route 53 + HTTPS

This section requires a domain you control.

## ACM

Request a public certificate for:

```text
example.com
www.example.com
```

Use DNS validation.

Important: ACM certificates for an Application Load Balancer must be requested in the same AWS region as the ALB.

## Route 53

Create/host the DNS zone if you use Route 53.

Create an alias record:

```text
example.com → ALB
```

## ALB HTTPS

Add:

```text
HTTPS :443 → target group
```

Attach the ACM certificate.

Optionally redirect HTTP :80 to HTTPS :443.

Final path:

```text
User
 ↓
HTTPS
 ↓
Route 53
 ↓
ALB
 ↓
EC2
```
