# 12 - Cleanup

AWS resources can cost money.

After completing the lab, remove resources you no longer need.

Typical dependency-aware order:

1. Delete Route 53 records/hosted zone only if no longer needed.
2. Remove ALB listeners and delete ALB.
3. Delete target group.
4. Stop/terminate EC2.
5. Delete RDS after taking any backup you need.
6. Delete NAT Gateway.
7. Release unused Elastic IP.
8. Delete S3 bucket contents and bucket if no longer needed.
9. Delete VPC resources and finally the VPC.
10. Review Billing/Cost Explorer.

Do not delete a production resource just because it appears in this list. This is a learning-lab cleanup checklist.
