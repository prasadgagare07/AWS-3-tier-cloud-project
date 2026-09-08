# 11 - Failure Testing

Document every test with a screenshot and result.

## Test 1: EC2 instance failure

Stop EC2-1.

Expected:

```text
EC2-1 → unhealthy
EC2-2 → healthy
ALB → sends traffic to EC2-2
```

## Test 2: Application failure

Stop the service on EC2-2.

Expected ALB behavior:

```text
Target becomes unhealthy
```

## Test 3: RDS connectivity

Temporarily remove the EC2-SG → RDS-SG rule.

Expected:

```text
/health → 503
database → unavailable
```

Restore the rule and verify recovery.

## Test 4: High CPU

Generate a controlled CPU load in the lab.

Watch:

```text
top
CloudWatch CPUUtilization
```

Stop the load after the test.

## Test 5: Troubleshoot ALB

If a target is unhealthy, check:

1. EC2 service status
2. Listening port
3. EC2 security group
4. Target group port
5. Health-check path
6. Application logs
7. Network routing
