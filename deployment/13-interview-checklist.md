# Interview Checklist

You should be able to explain each item without reading notes.

## AWS fundamentals

- Region
- Availability Zone
- VPC
- CIDR
- Subnet
- Public vs private subnet

## Networking

- Route table
- Internet Gateway
- NAT Gateway
- Security group
- TCP/UDP
- Port 80
- Port 443
- Port 5432
- DNS

## EC2

- AMI
- Instance type
- EBS
- SSH/Session Manager
- Linux processes
- systemd
- logs
- CPU/memory troubleshooting

## ALB

- Listener
- Target group
- Health check
- Layer 7 load balancing
- Unhealthy target behavior

## RDS

- Managed database
- DB subnet group
- Multi-AZ
- Backups
- Public vs private access

## IAM

- User
- Role
- Policy
- Instance profile
- Least privilege

## S3

- Bucket
- Object
- Encryption
- Versioning
- Block Public Access
- IAM access

## Monitoring

- CloudWatch metrics
- Alarms
- Logs
- Basic troubleshooting

## Project questions

1. Why are EC2 instances private?
2. Why is the ALB public?
3. Why is RDS private?
4. How does EC2 reach RDS?
5. How does EC2 reach the internet for package updates?
6. What happens if EC2-1 fails?
7. How does the ALB know EC2-1 failed?
8. Why use RDS instead of PostgreSQL on EC2?
9. Why use S3 for files?
10. Why use an IAM role?
11. How would you troubleshoot an unhealthy ALB target?
12. How would you troubleshoot an EC2 CPU spike?
13. How would you troubleshoot an application that cannot connect to RDS?
14. What is Multi-AZ?
15. What would you improve for production?
