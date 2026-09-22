public:: true

# Infrastructure As A Service

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:infrastructure-as-a-service", "@type":"Page", "title":"Infrastructure As A Service", "vc:slug":"infrastructure-as-a-service", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:infrastructure-as-a-service",
  "@type": "Class",
  "label": "Infrastructure As A Service",
  "definition": "Infrastructure as a Service (IaaS) is a cloud computing service model in which a provider delivers virtualised computing resources — including virtual machines, storage, networking, and bare-metal servers — over the internet on a pay-per-use basis, while the customer manages the operating system, middleware, and applications. IaaS abstracts away physical hardware procurement and data centre operations, enabling organisations to provision and de-provision compute capacity elastically. Major IaaS providers include Amazon Web Services (EC2/S3), Microsoft Azure (Virtual Machines), and Google Cloud Platform (Compute Engine).",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"},
      {"@id": "urn:ngm:class:object-storage", "label": "Object Storage"},
      {"@id": "urn:ngm:class:virtual-networking", "label": "Virtual Networking"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:scalability", "label": "Scalability"},
      {"@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery"},
      {"@id": "urn:ngm:class:devops", "label": "DevOps"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:platform-as-a-service", "label": "Platform As A Service"},
      {"@id": "urn:ngm:class:software-as-a-service", "label": "Software As A Service"},
      {"@id": "urn:ngm:class:on-premises", "label": "On-Premises"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:virtualisation", "label": "Virtualisation"},
      {"@id": "urn:ngm:class:hypervisor", "label": "Hypervisor"},
      {"@id": "urn:ngm:class:data-centre", "label": "Data Centre"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:containerisation", "label": "Containerisation"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:multi-cloud", "label": "Multi-Cloud"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:api", "label": "API"},
      {"@id": "urn:ngm:class:automation", "label": "Automation"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

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
