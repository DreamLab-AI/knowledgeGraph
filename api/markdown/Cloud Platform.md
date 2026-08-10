public:: true

# Cloud Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cloud-platform",
  "@type": "Page",
  "vc:slug": "cloud-platform",
  "title": "Cloud Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cloud-platform",
  "@type": "Class",
  "label": "Cloud Platform",
  "definition": "A cloud platform is an integrated suite of managed infrastructure, runtime services, and developer tooling delivered over the internet that enables organisations to build, deploy, scale, and operate applications without owning physical hardware. Cloud platforms abstract away operational complexity through pay-as-you-go pricing, elastic scaling, and managed service lifecycles, spanning IaaS, PaaS, and SaaS delivery models. The dominant hyperscale providers — Amazon Web Services, Microsoft Azure, and Google Cloud Platform — offer hundreds of services covering compute, storage, networking, databases, AI/ML, security, and observability, forming the primary substrate for modern enterprise and AI workloads.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cloud-infrastructure",
      "label": "Cloud Infrastructure"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:cloud-computing-platform",
      "label": "Cloud Computing Platform"
    },
    {
      "@id": "urn:ngm:class:hyperscale-cloud",
      "label": "Hyperscale Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:platform-service",
        "label": "Platform Service"
      },
      {
        "@id": "urn:ngm:class:platform-layer",
        "label": "Platform Layer"
      },
      {
        "@id": "urn:ngm:class:technology-infrastructure-domain-component",
        "label": "Infrastructure Component"
      },
      {
        "@id": "urn:ngm:class:serverless-architecture",
        "label": "Serverless Architecture"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      },
      {
        "@id": "urn:ngm:class:container-orchestration",
        "label": "Container Orchestration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-native-applications",
        "label": "Cloud-Native Applications"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-platform",
        "label": "Machine Learning Platform"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-infrastructure",
        "label": "Machine Learning Infrastructure"
      },
      {
        "@id": "urn:ngm:class:platform-engineering",
        "label": "Platform Engineering"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:virtualisation",
        "label": "Virtualisation"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:finops",
        "label": "FinOps"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:technology-infrastructure-domain-architecture",
        "label": "Infrastructure Architecture"
      },
      {
        "@id": "urn:ngm:class:service-oriented-architecture",
        "label": "Service Oriented Architecture"
      },
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:cloud-native-computing-foundation",
        "label": "Cloud Native Computing Foundation"
      },
      {
        "@id": "urn:ngm:class:nist-cloud-computing",
        "label": "NIST Cloud Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      },
      {
        "@id": "urn:ngm:class:inference-infrastructure",
        "label": "AI Inference Infrastructure"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **cloud platform** is an internet-delivered ecosystem of managed infrastructure, runtime services, and developer tooling enabling organisations to build, deploy, scale, and operate applications without owning physical hardware. Cloud platforms span [[Infrastructure as a Service]], [[Platform as a Service]], and [[Software as a Service]] delivery models, abstracting away hardware provisioning, OS patching, and capacity planning. They depend on hyperscale [[Data Centre]] networks, advanced [[Virtualisation]] techniques, and software-defined [[Network Infrastructure]] to provide elasticity, global reach, and the [[Distributed Computing]] fabric that underpins modern digital services.

- ### Overview
  - Cloud platforms emerged from the observation — pioneered commercially by [[Amazon Web Services]] in 2006 — that commodity hardware pooled at hyperscale could be offered as utility services with superior economics to per-enterprise data centre builds.
  - The dominant public cloud platforms (AWS, [[Microsoft Azure]], [[Google Cloud Platform]]) offer hundreds of discrete services across compute, storage, networking, databases, analytics, AI/ML, security, and developer tooling.
  - The fundamental value proposition is elastic, on-demand resource consumption: organisations pay only for what they use, scale instantaneously in response to demand, and benefit from continuous infrastructure investment by the provider.
  - Cloud platforms have become the primary substrate for AI and [[Machine Learning Infrastructure]], driven by managed access to GPU and TPU accelerators (H100, A100, TPU v5) that would be prohibitively expensive to procure and operate independently.
  - The market is characterised by continuous service expansion and a layered competitive dynamic: hyperscalers compete on breadth, specialised providers (e.g. CoreWeave, Lambda Labs) compete on GPU density for AI workloads, and [[Edge Computing]] providers extend the model toward the network edge.

- ### Key Components
  - **Compute Services**
    - Virtual machine instances (IaaS layer): configurable CPU, memory, and storage profiles
    - Managed container platforms based on [[Kubernetes]] (e.g. EKS, AKS, GKE)
    - [[Serverless Architecture]] functions (AWS Lambda, Azure Functions, Google Cloud Run) abstracting all server management
    - High-performance computing clusters providing GPU/TPU capacity for [[Machine Learning Platform]] workloads
  - **Storage Services**
    - Object storage (S3, Azure Blob, GCS): durable, globally distributed, effectively unlimited
    - Block storage: high-performance volumes attached to compute instances
    - Managed relational databases (RDS, Cloud SQL, Azure SQL)
    - Managed NoSQL and vector databases supporting [[Data Pipeline]] and [[MLOps]] workflows
  - **Networking**
    - Software-defined virtual private clouds (VPCs) with configurable subnets, routing, and firewalling
    - Global content delivery networks (CDNs) for low-latency asset distribution
    - [[API Gateway]] services for managed, throttled, and authenticated API exposure
    - Dedicated interconnects and peering arrangements for hybrid cloud connectivity
  - **Developer & Operations Tooling**
    - Managed CI/CD pipelines integrating [[Version Control]] with build, test, and deploy stages — enabling [[Continuous Integration]] and [[DevOps]] practices
    - Infrastructure-as-Code tooling (Terraform, CloudFormation, Bicep) for declarative resource provisioning
    - Observability stacks: managed log aggregation, distributed tracing, and metrics dashboards
    - [[Platform Engineering]] internal developer platforms built on top of cloud primitives
  - **AI/ML Services**
    - Managed ML platforms ([[Machine Learning Platform]]: SageMaker, Vertex AI, Azure ML) providing experiment tracking, distributed training, model registry, and [[MLOps]] pipelines
    - Foundation model APIs (Azure OpenAI Service, Amazon Bedrock, Google Vertex AI Model Garden) providing access to large language models and multimodal models — bridging to [[Foundation Model]] infrastructure
    - Managed [[AI Inference Infrastructure]]: autoscaling, batching, and hardware-optimised serving endpoints
  - **Security & Identity**
    - [[Identity and Access Management]] (IAM): fine-grained, policy-based access control to all platform resources
    - Key management services (KMS) for encryption key lifecycle management
    - Audit logging, threat detection, and compliance dashboards supporting [[Data Governance]]

- ### Applications and Use Cases
  - **Enterprise Application Hosting**: migration of legacy on-premise workloads to managed cloud infrastructure, reducing capital expenditure and operational overhead. Contrasts with [[On-Premise Infrastructure]] in terms of capex vs opex trade-offs.
  - **AI and Machine Learning at Scale**: training and serving large-scale models using managed GPU clusters; the cloud is the dominant environment for foundation model training and [[AI Inference Infrastructure]] deployment.
  - **Data Analytics and [[Data Pipeline]]**: managed data warehouses (Snowflake, BigQuery, Redshift), streaming data platforms (Kinesis, Pub/Sub, Event Hubs), and lakehouse architectures serving business intelligence and real-time analytics.
  - **SaaS Product Delivery**: independent software vendors building and operating SaaS products on cloud platforms, leveraging managed databases, auth services, and global CDN distribution.
  - **DevOps and [[Continuous Integration]]**: automated build, test, and deployment pipelines triggered on [[Version Control]] commits, enabling rapid release cycles with low operational overhead.
  - **Hybrid and Multi-Cloud Architectures**: enterprises operating workloads across multiple cloud providers (a [[Multi-Cloud Strategy]]) or maintaining a hybrid footprint spanning cloud and private data centres, often orchestrated through [[Kubernetes]]-based control planes.
  - **Edge and IoT Workloads**: extending cloud management planes to [[Edge Computing]] endpoints via services like AWS Greengrass, Azure IoT Edge, and Google Distributed Cloud.

- ### Relationships
  - partOf:: [[Cloud Infrastructure]]
  - hasPart:: [[Platform Service]]
  - hasPart:: [[Platform Layer]]
  - hasPart:: [[Serverless Architecture]]
  - hasPart:: [[Microservices Architecture]]
  - hasPart:: [[Container Orchestration]]
  - enables:: [[Cloud-Native Applications]]
  - enables:: [[Machine Learning Platform]]
  - enables:: [[Machine Learning Infrastructure]]
  - enables:: [[Platform Engineering]]
  - enables:: [[DevOps]]
  - enables:: [[Continuous Integration]]
  - requires:: [[Network Infrastructure]]
  - requires:: [[Virtualisation]]
  - requires:: [[Identity and Access Management]]
  - dependsOn:: [[Data Centre]]
  - uses:: [[Kubernetes]]
  - uses:: [[Version Control]]
  - uses:: [[Data Pipeline]]
  - uses:: [[API Gateway]]
  - supports:: [[MLOps]]
  - supports:: [[FinOps]]
  - supports:: [[Data Governance]]
  - relatedTo:: [[Infrastructure Architecture]]
  - relatedTo:: [[Service Oriented Architecture]]
  - relatedTo:: [[Distributed Computing]]
  - relatedTo:: [[Platform Governance]]
  - relatedTo:: [[Multi-Cloud Strategy]]
  - contrastsWith:: [[On-Premise Infrastructure]]
  - contrastsWith:: [[Edge Computing]]
  - standardizedBy:: [[Cloud Native Computing Foundation]]
  - standardizedBy:: [[NIST Cloud Computing]]
  - bridges-to:: [[Foundation Model]]
  - bridges-to:: [[AI Inference Infrastructure]]

- ### Standards and Governance Context
  - **NIST SP 800-145** (NIST Cloud Computing): the canonical definition of cloud computing adopted internationally, establishing the five essential characteristics (on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service), three service models (IaaS/PaaS/SaaS), and four deployment models (public/private/community/hybrid).
  - **Cloud Native Computing Foundation (CNCF)**: the Linux Foundation project governing [[Kubernetes]], Prometheus, Envoy, and related open-source projects that provide portable abstractions for container orchestration, service mesh, and observability — reducing [[On-Premise Infrastructure]] lock-in and enabling [[Multi-Cloud Strategy]].
  - **Shared Responsibility Model**: cloud providers secure the underlying infrastructure; customers are responsible for data classification, [[Identity and Access Management]], application-layer controls, and compliance configuration. Codified in provider security whitepapers and incorporated into audit frameworks.
  - **ISO/IEC 27001 and SOC 2 Type II**: third-party audit standards routinely certified by major cloud providers, serving as baseline assurance for enterprise procurement and regulated-industry adoption.
  - **FedRAMP (US)**: mandatory authorisation framework for US federal agency use of cloud services, specifying continuous monitoring and security controls.
  - **GDPR and EU Data Sovereignty**: the General Data Protection Regulation and the 2023 EU-US Data Privacy Framework have driven cloud providers to establish in-region data residency options and dedicated sovereign cloud offerings (Azure Sovereign, Google Sovereign Cloud) for European regulated industries, intersecting with [[Data Governance]] requirements.
  - **FinOps Foundation**: the industry body defining [[FinOps]] — cloud financial operations — as a practice discipline for cost accountability, forecasting, and optimisation on cloud platforms.
  - **OpenTelemetry (CNCF)**: emerging standard for vendor-neutral telemetry (traces, metrics, logs) across cloud-native workloads, reducing observability lock-in.

- ### Current Landscape (2026)
  - Cloud infrastructure spending is being reshaped by AI: Synergy Research Group put Q1 2026 quarterly spend at a record ~$129 billion (up 35% year-on-year, the ninth consecutive quarter of accelerating growth), with Gartner forecasting public-cloud end-user spending of ~$850 billion for 2026 and AI-related workloads now roughly 19% of total cloud spend, up from 8% in 2023.
  - The "Big Three" still hold ~63% of the market but growth is diverging sharply: in Q1 2026 AWS led at ~28% share (revenue $37.6bn, +28% YoY), Azure ~21% (+40% YoY), and Google Cloud ~14% (+63% YoY, first quarter above $20bn) — and AWS disclosed plans to lift 2026 capital expenditure to ~$200 billion, more than 50% above 2025.
  - "Neoclouds" have emerged as a distinct AI-native platform tier: CoreWeave (Nasdaq: CRWV, largest US tech IPO since 2021 in March 2025) runs a Kubernetes-native GPU cloud, was first to deploy NVIDIA's GB300 NVL72 (July 2025), launched CoreWeave Inference (serverless/dedicated, March 2026) and closed the first investment-grade GPU-backed financing ($8.5bn, March 2026); Nebius, Lambda and Together AI compete on cheaper per-GPU pricing and faster cluster provisioning.
  - Platform capability is shifting towards agentic AI and native model integration — Azure integrated GPT-5 across enterprise services, and after Azure exclusivity ended OpenAI's models reached AWS Bedrock (April 2026), backed by an AWS commitment reported at over $100 billion.
  - EU cloud sovereignty moved from policy to procurement: the Commission awarded a €180 million sovereign-cloud tender (17 April 2026) to four European consortia — Post Telecom/OVHcloud/CleverCloud, STACKIT, Scaleway, and Proximus/S3NS — assessed against the Cloud Sovereignty Framework's eight objectives and SEAL assurance levels.
  - The Cloud and AI Development Act (CADA), unveiled as the centrepiece of the Commission's Tech Sovereignty package on 3 June 2026, proposes a single EU-wide four-level cloud-sovereignty assurance framework (Levels 3–4 generally exclude hyperscalers) with final adoption targeted for Q4 2027.
  - Open challenges as of 2026 include AI-driven capex and power/data-centre constraints, debt-financed neocloud business models exposed to demand risk, multi-cloud sprawl (enterprise multi-cloud adoption reported near ~89%), and reconciling sovereignty/jurisdiction requirements with reliance on non-EU hyperscaler technology.

- ### References
  - 1. Omdia (2026). Global cloud infrastructure spending rose 29% in Q4 2025 as hyperscalers scaled AI infrastructure investment. https://omdia.tech.informa.com/pr/2026/mar/global-cloud-infrastructure-spending-rose-29percent-in-q4-2025-as-hyperscalers-scaled-ai-infrastructure-investment
  - 2. CRN / Synergy Research Group (2026). Cloud Market Share Q1 2026: AWS, Microsoft, Google Battling in AI Era. https://www.crn.com/news/cloud/2026/cloud-market-share-q1-2026-aws-microsoft-google-battling-in-ai-era
  - 3. European Commission (2026). Commission advances cloud sovereignty through strategic procurement (€180 million sovereign-cloud tender). https://commission.europa.eu/news-and-media/news/commission-advances-cloud-sovereignty-through-strategic-procurement-2026-04-17_en
  - 4. European Commission (2026). Cloud and AI Development Act — Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/cloud-and-ai-development-act
  - 5. CoreWeave (2025). CoreWeave Becomes First Hyperscaler to Deploy NVIDIA GB300 NVL72 Platform. https://investors.coreweave.com/news/news-details/2025/CoreWeave-Becomes-First-Hyperscaler-to-Deploy-NVIDIA-GB300-NVL72-Platform/default.aspx

- ### Provenance
  - sources:: NIST SP 800-145 (NIST Definition of Cloud Computing); CNCF Annual Survey; AWS/Azure/GCP public documentation; FinOps Foundation; established industry knowledge
  - updated:: 2026-06-13
