# 01 - Create the VPC

Create:

```text
VPC: 10.0.0.0/16

Public-A:      10.0.1.0/24
Public-B:      10.0.2.0/24

Private-App-A: 10.0.11.0/24
Private-App-B: 10.0.12.0/24

Private-DB-A:  10.0.21.0/24
Private-DB-B:  10.0.22.0/24
```

Use two Availability Zones.

## Internet Gateway

Create and attach an Internet Gateway to the VPC.

## Public route table

Associate Public-A and Public-B.

Add:

```text
0.0.0.0/0 → Internet Gateway
```

## NAT Gateway

Create a NAT Gateway in Public-A using an Elastic IP.

## Private application route table

Associate Private-App-A and Private-App-B.

Add:

```text
0.0.0.0/0 → NAT Gateway
```

## Database route table

Associate Private-DB-A and Private-DB-B.

RDS does not need an internet route.

## Verify

Before moving on, understand:

- Why ALB is public.
- Why EC2 is private.
- Why RDS is private.
- Why private EC2 needs NAT for outbound package updates.
