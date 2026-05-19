- ### Definition
  - Cloud infrastructure is a computing model that provides on-demand access to virtualized computing resources including servers, storage, networking, and platform services delivered over the internet. It enables organizations to provision and scale IT resources dynamically without managing physical hardware, typically through service models such as IaaS, PaaS, and SaaS.

- ### Semantic Classification
  - owl-class:: infrastructure:CloudInfrastructure
  - owl-role:: Infrastructure
  - belongs-to-domain:: [[InfrastructureDomain]], [[Technology Domain]], [[ETSI_Domain_Infrastructure]]

- ### Relationships
  - enables:: [[Scalability]], [[Elasticity]], [[Self-Service Provisioning]]

- ### Content

  ## Cloud Service Models

  ### Infrastructure as a Service (IaaS)
  Provides on-demand access to computing resources: servers, storage, networking, and virtualization. Customers manage applications, runtime, OS, middleware, and data while providers manage servers, storage, and networking.

  **Key Characteristics:**
  - Fully self-service for accessing computing resources
  - Scalable and automated compute resources
  - Pay-as-you-go pricing model
  - Complete control over infrastructure through APIs/dashboards

  **Examples:** AWS EC2, Azure Virtual Machines, Google Compute Engine

  ### Platform as a Service (PaaS)
  Provides a complete on-demand cloud platform for developing, running, and managing applications. The provider hosts servers, networks, storage, OS, databases, and development tools.

  **Key Characteristics:**
  - Developers write code and manage data/applications
  - Platform management handled by provider
  - Faster development and deployment cycles
  - Built-in scaling and load balancing

  **Examples:** Heroku, Google App Engine, Azure App Service

  ### Software as a Service (SaaS)
  Delivers fully functional applications over the internet on a subscription basis. Providers manage all aspects of the application infrastructure.

  **Examples:** Salesforce, Microsoft 365, Google Workspace

  ## Cloud Architecture Components

  ### Building Blocks
  - Compute instances (VMs, containers)
  - Storage services (block, object, file)
  - Networking (VPCs, load balancers, CDN)
  - Identity and access management
  - Monitoring and logging services

  ### Deployment Models
  | Model | Description |
  |-------|-------------|
  | Public Cloud | Resources shared among multiple tenants |
  | Private Cloud | Dedicated infrastructure for single organization |
  | Hybrid Cloud | Combination of public, private, and on-premises |
  | Multi-Cloud | Services from multiple cloud providers |

  ## Market Growth
  - 2024 global market: $752.44 billion
  - Projected 2030 market: $2,390.18 billion
  - CAGR: 20.4% (2025-2030)

  ## Major Providers
  - Amazon Web Services (AWS)
  - Microsoft Azure
  - Google Cloud Platform
  - IBM Cloud
  - Oracle Cloud

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z