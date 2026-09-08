# Production-Style 3-Tier AWS Cloud Application

A Cloud Engineer portfolio project demonstrating a production-style 3-tier architecture on AWS.

## Architecture

Internet → Route 53 → ACM/HTTPS → Application Load Balancer → EC2 instances → RDS PostgreSQL

The application also uses S3 for object/file storage and CloudWatch for monitoring.

### AWS services

- VPC
- Public/private subnets
- Internet Gateway
- NAT Gateway
- Route Tables
- Security Groups
- EC2
- Application Load Balancer
- Target Groups
- RDS PostgreSQL
- S3
- IAM
- Route 53
- ACM
- CloudWatch

## Project goals

1. Keep the load balancer internet-facing.
2. Keep application servers private.
3. Keep PostgreSQL private.
4. Allow only required network paths.
5. Use IAM roles instead of hard-coded AWS credentials.
6. Demonstrate load-balancer health checks and failure testing.
7. Monitor the infrastructure with CloudWatch.

## Repository structure

```text
aws-3-tier-cloud-project/
├── application/
│   ├── backend/
│   └── frontend/
├── database/
├── deployment/
├── architecture/
├── screenshots/
└── README.md
```

## Application

The included demo is a simple Cloud Task Manager.

API endpoints:

- GET `/health`
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`
- GET `/api/storage-info`

## Important

This repository intentionally does not contain AWS credentials, private keys, `.env` files, production passwords, or domain-specific values.

The AWS infrastructure is designed to be created from the AWS Console first so that a beginner Cloud Engineer can understand every component. Optional Infrastructure-as-Code can be added later.

See `deployment/` for the complete build sequence.

## Security notes

- RDS should not be publicly accessible.
- EC2 should not be directly exposed to the internet.
- S3 should not be made public just to make uploads work.
- Use an EC2 IAM role for S3 access.
- Use Secrets Manager or another secure secret-management approach for production database credentials.
- Restrict SSH access instead of opening port 22 to the whole internet.

## Interview story

> I built a production-style three-tier application on AWS. I designed a VPC across two Availability Zones with public subnets for the Application Load Balancer and private subnets for EC2 and RDS. Security groups restrict communication between the tiers. The application uses PostgreSQL on Amazon RDS and S3 for object storage. I configured health checks, CloudWatch monitoring, DNS with Route 53, and HTTPS with ACM. I also tested instance and application failures and troubleshot connectivity using AWS and Linux tools.
