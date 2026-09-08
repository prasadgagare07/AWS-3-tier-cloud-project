# 00 - Prerequisites

## Accounts/tools

You need:

- AWS account
- GitHub account (recommended)
- Optional domain name for Route 53/ACM
- SSH client
- Git
- Node.js/npm for local application testing

## AWS Region

Choose one region and use it consistently. The examples use `ap-south-1` (Mumbai), but you can use another region.

## Important cost warning

NAT Gateway, RDS, load balancers and other AWS resources can incur charges.

For learning, monitor the AWS Billing console and delete resources after testing if you no longer need them.

Never put AWS access keys, private keys, database passwords or `.env` files in GitHub.
