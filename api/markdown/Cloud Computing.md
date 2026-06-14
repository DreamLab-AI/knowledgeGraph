public:: true
alias:: CloudComputing

# Cloud Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cloud-computing",
  "@type": "Page",
  "vc:slug": "cloud-computing",
  "title": "Cloud Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cloud-computing",
  "@type": "Class",
  "label": "Cloud Computing",
  "definition": "Cloud computing is the on-demand delivery of computing resources — servers, storage, databases, networking, software, analytics, and AI accelerators — over the internet via provider-managed data centres, abstracting physical infrastructure into programmable APIs with pay-per-use economics. Service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid, multi-cloud) define the boundary of managed responsibility between provider and consumer. Hyperscale providers such as AWS, Microsoft Azure, and Google Cloud Platform underpin modern AI training, inference serving, and distributed application deployment at global scale. The paradigm enables elastic provisioning — scaling from zero to thousands of compute nodes in seconds — transforming both software engineering and machine learning operations.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:infrastructure-as-a-service", "label": "Infrastructure as a Service"},
      {"@id": "urn:ngm:class:platform-as-a-service", "label": "Platform as a Service"},
      {"@id": "urn:ngm:class:software-as-a-service", "label": "Software as a Service"},
      {"@id": "urn:ngm:class:serverless-computing", "label": "Serverless Computing"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:internet-infrastructure", "label": "Internet Infrastructure"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:data-centre", "label": "Data Centre"},
      {"@id": "urn:ngm:class:virtualisation", "label": "Virtualisation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mlops", "label": "MLOps"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:devops", "label": "DevOps"},
      {"@id": "urn:ngm:class:big-data", "label": "Big Data"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"},
      {"@id": "urn:ngm:class:containerisation", "label": "Containerisation"},
      {"@id": "urn:ngm:class:object-storage", "label": "Object Storage"},
      {"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cloud-platform", "label": "Cloud Platform"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:hybrid-cloud", "label": "Hybrid Cloud"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-cloud-computing", "label": "NIST Cloud Computing Definition"},
      {"@id": "urn:ngm:class:iso-iec-17788", "label": "ISO/IEC 17788"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:on-premises-computing", "label": "On-Premises Computing"},
      {"@id": "urn:ngm:class:mainframe-computing", "label": "Mainframe Computing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-cloud", "label": "Multi-Cloud"},
      {"@id": "urn:ngm:class:cloud-security", "label": "Cloud Security"},
      {"@id": "urn:ngm:class:cost-optimisation", "label": "Cost Optimisation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:utility-computing", "label": "Utility Computing"},
    {"@id": "urn:ngm:class:on-demand-computing", "label": "On-Demand Computing"}
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Cloud computing is the on-demand delivery of computing resources — including [[Virtualisation|virtual]] servers, [[Object Storage]], databases, [[Network Infrastructure]], analytics, and AI accelerators — over the internet, via provider-managed [[Data Centre|data centres]]. It abstracts physical hardware into programmable APIs governed by pay-per-use economics, enabling [[Distributed Systems]] at global scale without capital investment in owned infrastructure. The paradigm underpins [[AI Infrastructure]], [[MLOps]], and modern [[DevOps]] by providing elastic capacity that scales from zero to hyperscale in seconds.

- ### Overview
  - Cloud computing emerged from the insight that large-scale data centre operators (initially Amazon, then Microsoft and Google) could expose spare capacity as rentable compute units via standardised web APIs. The NIST SP 800-145 definition codified five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.
  - **Why it matters**: it democratises access to supercomputing-class infrastructure, allowing a startup to train a large neural network or serve millions of API requests with the same infrastructure primitives available to the world's largest enterprises — billed only for active usage.
  - **How it works**: physical resources in geographically distributed [[Data Centre|data centres]] are partitioned via [[Virtualisation]] and [[Containerisation]] into isolated tenant environments. A global control plane (the cloud provider's management layer) handles provisioning, billing, identity, and observability, exposing these through REST/gRPC APIs, CLIs, and infrastructure-as-code tooling.

- ### Key Components
  - #### Service Models
    - **[[Infrastructure as a Service]] (IaaS)** — raw virtual machines, block and [[Object Storage]], and virtual networks (e.g. AWS EC2, Azure Virtual Machines, Google Compute Engine). Consumer manages OS and above.
    - **[[Platform as a Service]] (PaaS)** — managed runtimes, databases, and middleware; consumer manages only application code (e.g. Google App Engine, AWS Elastic Beanstalk, Azure App Service).
    - **[[Software as a Service]] (SaaS)** — fully managed applications delivered via browser or API; consumer configures, not operates (e.g. Salesforce, Google Workspace, Microsoft 365).
    - **[[Serverless Computing]]** — event-driven functions billed per invocation with no persistent server management (AWS Lambda, Azure Functions, Google Cloud Functions).
  - #### Deployment Models
    - **Public Cloud** — infrastructure owned and operated by a third-party hyperscaler, shared among tenants with logical isolation.
    - **Private Cloud** — dedicated infrastructure operated for a single organisation, on-premises or collocated.
    - **[[Hybrid Cloud]]** — orchestrated integration of public and private cloud resources, connected via secure network fabric, enabling data-sovereignty compliance and burst capacity.
    - **[[Multi-Cloud]]** — use of services from multiple providers simultaneously to avoid vendor lock-in and optimise cost or capability.
  - #### Core Infrastructure Primitives
    - [[Virtualisation]] — hypervisors (KVM, Hyper-V, Xen) partition physical servers into isolated VMs.
    - [[Containerisation]] — lightweight process isolation via namespaces and cgroups (Docker, OCI images) run on shared OS kernels.
    - [[Kubernetes]] — de-facto orchestration layer for scheduling, scaling, and managing containerised workloads across cloud and hybrid environments.
    - [[Object Storage]] — massively scalable, durable blob storage (S3, Azure Blob, GCS) underpinning data lakes and ML training datasets.
    - [[Content Delivery Network]] — geographically distributed cache layer that moves static and dynamic content close to users, reducing latency.
    - [[Network Infrastructure]] — software-defined networking (SDN), virtual private clouds (VPCs), load balancers, and global backbone connectivity.
    - [[Data Centre]] — physical facilities housing hyperscale server racks, cooling, power, and physical security.

- ### Mechanisms
  - **Elasticity and Auto-Scaling**: workloads can burst to thousands of compute nodes on demand and release them automatically based on CPU, memory, or custom metrics — critical for AI training and inference traffic spikes.
  - **Measured Service**: metering at fine granularity (per-second, per-request, per-GB) enables pay-per-use billing and FinOps [[Cost Optimisation]] practices.
  - **Resource Pooling (Multi-Tenancy)**: physical resources are shared among multiple customers with logical isolation enforced via [[Virtualisation]], network segmentation, and IAM policies.
  - **High Availability and Fault Tolerance**: [[High Availability]] is achieved through geographically redundant availability zones and regions, automatic failover, and replication at the storage layer.
  - **Managed Services Ecosystem**: providers offer hundreds of managed services (databases, message queues, ML pipelines, monitoring) reducing operational burden and enabling [[DevOps]] teams to focus on product logic.

- ### Applications / Use Cases
  - **AI and Machine Learning**: [[Distributed Training]] of large language models requires ephemeral access to thousands of GPUs/TPUs for days; cloud eliminates the need to own these accelerators. [[Inference]] serving scales elastically with traffic.
  - **[[MLOps]] Pipelines**: managed experiment tracking, feature stores, model registries, and CI/CD for models are increasingly cloud-native services.
  - **[[Big Data]] Analytics**: petabyte-scale data processing via cloud-managed Spark, BigQuery, Snowflake, and Databricks clusters.
  - **[[DevOps]] and CI/CD**: cloud-hosted build pipelines, container registries, and deployment targets accelerate software delivery.
  - **[[Digital Twin]] Simulation**: real-time simulation of physical systems (manufacturing lines, urban environments) leverages cloud burst compute for high-fidelity models.
  - **[[Spatial Computing]] and XR**: cloud rendering and streaming reduces client-side hardware requirements for augmented and virtual reality applications.
  - **[[Federated Learning]]**: cloud orchestrates distributed model training across decentralised data silos without raw data leaving each site, bridging privacy and AI capability.
  - **Disaster Recovery and Business Continuity**: cloud-based replication and failover replace expensive secondary data centres.
  - **Regulated Industries**: [[Hybrid Cloud]] and sovereign cloud configurations (e.g. AWS GovCloud, Azure Government) meet data-residency requirements in healthcare, finance, and defence.

- ### Relationships
  - hasPart:: [[Infrastructure as a Service]]
  - hasPart:: [[Platform as a Service]]
  - hasPart:: [[Software as a Service]]
  - hasPart:: [[Serverless Computing]]
  - partOf:: [[Internet Infrastructure]]
  - requires:: [[Network Infrastructure]]
  - requires:: [[Data Centre]]
  - requires:: [[Virtualisation]]
  - enables:: [[MLOps]]
  - enables:: [[AI Infrastructure]]
  - enables:: [[Distributed Training]]
  - enables:: [[Inference]]
  - enables:: [[DevOps]]
  - enables:: [[Big Data]]
  - dependsOn:: [[Distributed Computing]]
  - dependsOn:: [[High Availability]]
  - uses:: [[Kubernetes]]
  - uses:: [[Containerisation]]
  - uses:: [[Object Storage]]
  - uses:: [[Content Delivery Network]]
  - supports:: [[Cloud Platform]]
  - supports:: [[Edge Computing]]
  - supports:: [[Hybrid Cloud]]
  - standardizedBy:: [[NIST Cloud Computing Definition]]
  - standardizedBy:: [[ISO/IEC 17788]]
  - contrastsWith:: [[On-Premises Computing]]
  - contrastsWith:: [[Mainframe Computing]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Spatial Computing]]
  - relatedTo:: [[Multi-Cloud]]
  - relatedTo:: [[Cloud Security]]
  - relatedTo:: [[Cost Optimisation]]

- ### Standards & Context
  - **NIST SP 800-145** — the authoritative US government definition of cloud computing, establishing the five essential characteristics, three service models, and four deployment models. Published by the National Institute of Standards and Technology.
  - **ISO/IEC 17788:2014** — international standard providing the overview and vocabulary for cloud computing, harmonising terminology across the industry.
  - **ISO/IEC 17789:2014** — cloud computing reference architecture, defining the roles and activities of cloud service customers, providers, and partners.
  - **CSA Cloud Controls Matrix (CCM)** — the Cloud Security Alliance's cybersecurity control framework for [[Cloud Security]] assessment and compliance, widely referenced alongside ISO 27001 and SOC 2.
  - **GDPR and Data Residency Regulation** — European data protection law constrains where personal data may be processed; drives [[Hybrid Cloud]] and sovereign cloud architectures for EU-based workloads.
  - **FinOps Foundation** — open practitioner community standardising [[Cost Optimisation]] practices for cloud spend; FinOps framework defines crawl/walk/run maturity for cloud financial management.
  - **Green Software Foundation** — develops standards for measuring and reducing the carbon footprint of cloud workloads; relevant to sustainable AI training.

- ### Provenance
  - sources:: NIST SP 800-145; ISO/IEC 17788:2014; AWS/Azure/GCP public documentation; Cloud Security Alliance CCM; FinOps Foundation framework
  - updated:: 2026-06-13
