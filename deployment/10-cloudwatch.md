# 10 - CloudWatch

Monitor:

## EC2

- CPUUtilization
- NetworkIn/NetworkOut
- StatusCheckFailed

## ALB

- RequestCount
- HTTPCode_ELB_5XX_Count
- HTTPCode_Target_5XX_Count
- HealthyHostCount
- UnHealthyHostCount

## RDS

- CPUUtilization
- DatabaseConnections
- FreeStorageSpace
- FreeableMemory

Create alarms for meaningful thresholds.

## Logs

For application logs, use journald locally:

```bash
sudo journalctl -u cloud-task-manager
```

For a stronger implementation, install/configure the CloudWatch Agent and send application/system logs to CloudWatch Logs.
