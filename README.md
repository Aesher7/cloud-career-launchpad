# AWS Static Portfolio Website

Production-ready personal portfolio website hosted on AWS using a secure, scalable, serverless architecture.

## Overview

Built and deployed a static portfolio website using Amazon S3 for storage, Amazon CloudFront for global content delivery, Route 53 for DNS, AWS Certificate Manager for HTTPS, and AWS WAF for web security.

This project demonstrates:

- Modern cloud infrastructure
- CDN performance optimization
- Domain management
- Secure public web hosting

## Architecture

User Request → CloudFront CDN → AWS WAF → S3 Origin Bucket

## Services Used

### Amazon S3
Hosted static website assets including HTML, CSS, JavaScript, images, and documents.

### Amazon CloudFront
Delivered cached content globally with low latency and HTTPS support.

### Origin Access Control (OAC)
Restricted direct public S3 access and allowed secure CloudFront-only origin access.

### Amazon Route 53
Managed custom domain DNS records.

### AWS Certificate Manager (ACM)
Provisioned and attached SSL/TLS certificate for secure HTTPS traffic.

### AWS WAF
Protected the site using managed firewall rule groups against common attacks and malicious traffic.

## Key Features

- Custom domain connected to CloudFront
- HTTPS enabled with ACM certificate
- HTTP/2 and HTTP/3 support
- Global CDN caching
- Private S3 bucket with OAC
- DNS routing through Route 53
- Managed WAF protection
- Fully serverless deployment

## Deployment Steps

1. Built website with HTML, CSS, JavaScript
2. Created S3 bucket
3. Uploaded files
4. Created CloudFront distribution
5. Configured OAC
6. Connected domain
7. Attached ACM certificate
8. Enabled AWS WAF
9. Configured Route 53 alias record

## Security Enhancements

- TLS encryption enabled
- Direct S3 public access blocked
- CloudFront-only delivery path
- WAF protection against malicious traffic

## What I Learned

- AWS static hosting architecture
- CDN optimization
- SSL certificate management
- DNS configuration
- Web application firewall basics
- Secure serverless deployment
