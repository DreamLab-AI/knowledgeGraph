
A cloud platform is an integrated suite of managed infrastructure, runtime services, and developer tooling delivered over the internet that enables organisations to build, deploy, scale, and operate applications without owning physical hardware. Cloud platforms abstract away operational complexity through pay-as-you-go pricing, elastic scaling, and managed service lifecycles, spanning IaaS, PaaS, and SaaS delivery models. The dominant hyperscale providers — Amazon Web Services, Microsoft Azure, and Google Cloud Platform — offer hundreds of services covering compute, storage, networking, databases, AI/ML, security, and observability, forming the primary substrate for modern enterprise and AI workloads.

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

