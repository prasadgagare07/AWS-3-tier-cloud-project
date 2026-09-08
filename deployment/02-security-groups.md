# 02 - Security Groups

Create three security groups.

## ALB-SG

Inbound:

```text
TCP 80  from 0.0.0.0/0
TCP 443 from 0.0.0.0/0
```

Outbound can remain the default while learning.

## EC2-SG

Inbound:

```text
TCP 3000 from ALB-SG
TCP 22 from YOUR_ADMIN_IP/32
```

Do not use `0.0.0.0/0` for SSH in a real deployment.

## RDS-SG

Inbound:

```text
TCP 5432 from EC2-SG
```

This is the important security relationship:

```text
Internet → ALB-SG → EC2-SG → RDS-SG
```

Do not allow:

```text
Internet → RDS
Internet → EC2 application port
```
