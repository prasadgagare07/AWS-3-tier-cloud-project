# 03 - IAM

Create an EC2 IAM role.

Recommended permissions for the demo:

- Read/write access to the specific S3 bucket used by this project.

For production, replace broad managed policies with a least-privilege custom policy.

Attach the role to the EC2 instances through an instance profile.

## Interview points

Know the difference between:

- IAM user
- IAM role
- IAM policy
- Instance profile
- Least privilege

Never commit AWS credentials to the repository.
