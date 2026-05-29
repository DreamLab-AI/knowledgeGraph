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
  "definition": "A cloud platform is an integrated suite of managed infrastructure, runtime services, and developer tooling delivered over the internet that enables organisations to build, deploy, scale, and operate applications without owning physical hardware. The three dominant public cloud platforms — Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) — together represent over 65% of global cloud spend and provide hundreds of services spanning compute, storage, networking, databases, AI/ML, security, and observability. Cloud platforms abstract away operational complexity through pay-as-you-go pricing, elastic scaling, and managed service lifecycles.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:platform-service", "label": "Platform Service"},
      {"@id": "urn:ngm:class:platform-layer", "label": "Platform Layer"},
      {"@id": "urn:ngm:class:infrastructure-component", "label": "Infrastructure Component"},
      {"@id": "urn:ngm:class:serverless-architecture", "label": "Serverless Architecture"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:machine-learning-platform", "label": "Machine Learning Platform"},
      {"@id": "urn:ngm:class:machine-learning-infrastructure", "label": "Machine Learning Infrastructure"},
      {"@id": "urn:ngm:class:platform-engineering", "label": "Platform Engineering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:infrastructure-architecture", "label": "Infrastructure Architecture"},
      {"@id": "urn:ngm:class:service-oriented-architecture", "label": "Service Oriented Architecture"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:platform-governance", "label": "Platform Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A cloud platform is a managed, internet-delivered environment providing compute, storage, networking, and higher-order services — including AI/ML — that enables organisations to build and operate applications elastically without owning physical infrastructure.
- ### Relationships
  - Cloud Platform is a subclass of [[Cloud Infrastructure]], encompassing [[Platform Service]], [[Platform Layer]], [[Infrastructure Component]], [[Serverless Architecture]], and [[Microservices Architecture]] as constituent elements. It enables [[Cloud-Native Applications]], [[Machine Learning Platform]], [[Machine Learning Infrastructure]], and [[Platform Engineering]] practices. It relates to [[Infrastructure Architecture]], [[Service Oriented Architecture]], [[Distributed Computing]], and [[Platform Governance]]. Cloud platforms commonly integrate [[Version Control]] and [[Data Pipeline]] services to form end-to-end development environments.
- ### Content
  - Cloud platforms emerged from Amazon's 2006 launch of AWS Simple Storage Service (S3) and Elastic Compute Cloud (EC2), which demonstrated that commodity hardware pooled at hyperscale could be profitably rented as utility services. Microsoft Azure launched in 2010 and Google Cloud Platform opened broadly in 2011. By 2024, the combined annual revenue of the top three cloud providers exceeded $250 billion, reflecting cloud's displacement of on-premise data centre investment across enterprises of all sizes. The market is characterised by continuous service expansion: AWS alone offers over 240 distinct services as of 2025.

  - The service taxonomy of a cloud platform typically spans three layers: Infrastructure-as-a-Service (IaaS) — raw virtual machines, block storage, and virtual networking — giving users maximum control; Platform-as-a-Service (PaaS) — managed runtimes, databases, and application hosting — abstracting OS and middleware management; and Software-as-a-Service (SaaS) — fully managed applications. Above these, modern cloud platforms have added a fourth tier: AI/ML services, including managed model training infrastructure (GPUs/TPUs), AutoML, vector databases, and API access to hosted foundation models (Azure OpenAI Service, Google Vertex AI, AWS Bedrock).

  - For machine learning and AI workloads, cloud platforms are the dominant compute substrate. GPU and accelerator availability — H100, A100 clusters via AWS, Azure, and GCP — has become a primary driver of cloud vendor selection for AI organisations. Managed services such as Amazon SageMaker, Google Vertex AI, and Azure Machine Learning provide end-to-end MLOps pipelines: dataset versioning, experiment tracking, distributed training, model registry, and inference serving with autoscaling. The 2024–2025 period has seen intense capacity competition, with all three hyperscalers committing multi-hundred-billion-dollar capital expenditure plans to build AI data centre infrastructure.

  - Cloud platform governance and multi-cloud strategy are active concerns for enterprise architects. Vendor lock-in risks arise from proprietary managed services that have no standards-based equivalents. The Cloud Native Computing Foundation (CNCF) ecosystem — centred on Kubernetes — attempts to provide portable abstractions for container orchestration, service mesh, and observability, reducing dependency on any single provider. FinOps (cloud financial operations) has emerged as a discipline addressing the challenge that elastic cloud scaling, while operationally convenient, can produce unpredictable and rapidly escalating costs without active governance.

  - Security and compliance on cloud platforms involve a shared responsibility model: the provider secures the underlying infrastructure, while the customer is responsible for data, identity management, and application-layer controls. Certifications such as ISO/IEC 27001, SOC 2 Type II, and FedRAMP provide assurance frameworks. The EU's data sovereignty requirements, codified in GDPR and reinforced by the 2023 EU-US Data Privacy Framework, have driven cloud providers to establish in-region data residency options and sovereign cloud offerings (e.g. Azure Sovereign, Google Sovereign Cloud) specifically for European regulated industries.
