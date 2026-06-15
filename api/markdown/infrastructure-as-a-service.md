- ### Definition
  - [[Infrastructure As A Service]] (IaaS) is a [[cloud computing]] delivery model providing on-demand [[virtual machine]], storage, and [[virtual networking]] resources over the internet.
  - The customer controls the OS and software stack; the provider manages the physical hardware, hypervisor, and data centre.
  - IaaS contrasts with [[Platform As A Service]] and [[Software As A Service]] by offering the lowest level of managed abstraction.

- ### Overview
  - Amazon Web Services launched EC2 in 2006 and S3 in 2006, establishing the IaaS market.
  - IaaS enables capital expenditure to be converted to operational expenditure, removing upfront hardware investment.
  - Auto-scaling groups and load balancers enable elastic capacity aligned to demand fluctuations.
  - Multi-region deployment improves resilience and latency for global applications.
  - Shared responsibility model: provider secures physical layer; customer secures OS, data, and application.

- ### Key aspects
  - Compute: virtual CPUs, GPU instances, high-memory and high-compute types.
  - Storage: block storage (EBS/Azure Disk), object storage (S3/Blob), file storage (EFS/Azure Files).
  - Networking: virtual private cloud (VPC), subnets, security groups, load balancers, CDN.
  - Billing: per-second or per-hour metering with reserved and spot-pricing tiers.
  - Infrastructure-as-code (Terraform, CloudFormation) automates reproducible provisioning.

- ### Mechanisms
  - Hypervisors (Xen, KVM, Hyper-V) partition physical hardware into virtual machines.
  - Software-defined networking (SDN) provides tenant network isolation and programmable routing.
  - Object storage APIs (S3-compatible) expose durability-guaranteed blob containers at scale.
  - Snapshots and AMIs enable immutable machine image management.

- ### Applications
  - Web application hosting with auto-scaling to handle variable traffic.
  - Big data processing clusters spun up and torn down on demand.
  - Development and test environment provisioning without hardware lead times.
  - Disaster recovery with cross-region replication and rapid failover.
  - HPC workloads on spot instances for cost-optimised batch computing.

- ### Relationships
  - hasPart:: [[Virtual Machine]]
  - hasPart:: [[Object Storage]]
  - enables:: [[Scalability]]
  - enables:: [[Disaster Recovery]]
  - enables:: [[DevOps]]
  - contrastsWith:: [[Platform As A Service]]
  - contrastsWith:: [[Software As A Service]]
  - dependsOn:: [[Virtualisation]]
  - dependsOn:: [[Hypervisor]]
  - supports:: [[Containerisation]]
  - supports:: [[Kubernetes]]
  - relatedTo:: [[Cloud Infrastructure]]
  - partOf:: [[Cloud Computing]]

- ### Provenance
  - updated:: 2026-06-15