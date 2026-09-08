# Architecture

Create your final architecture diagram here.

Recommended final diagram:

```text
                         INTERNET
                            |
                         Route 53
                            |
                       ACM / HTTPS
                            |
                 Application Load Balancer
                    /               \
                   /                 \
              Public-A            Public-B
                   |                 |
                   +--------+--------+
                            |
                   Private-App-A/B
                    |           |
                  EC2-1       EC2-2
                    \           /
                     \         /
                    Private-DB-A/B
                           |
                    RDS PostgreSQL

                 EC2 --------> S3

                    CloudWatch
                 monitors ALB/EC2/RDS
```
