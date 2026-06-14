public:: true

# Data Mesh
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-mesh",
  "@type": "Page",
  "vc:slug": "data-mesh",
  "title": "Data Mesh",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-mesh",
  "@type": "Class",
  "label": "Data Mesh",
  "definition": "Data Mesh is a socio-technical paradigm for large-scale analytical data architecture, coined by Zhamak Dehghani (2020), that decentralises data ownership to domain-aligned teams who treat their analytical datasets as first-class products accessible via standardised interfaces. It rests on four principles: domain-oriented decentralised data ownership, data as a product, self-serve data infrastructure as a platform, and federated computational governance. Unlike monolithic data lakes or warehouses governed by a central data engineering team, a Data Mesh distributes accountability so that the teams who generate data also maintain its quality, documentation, and SLAs as discoverable data products. The model draws on domain-driven design and microservices thinking applied to analytical rather than operational data flows.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:data-governance-framework", "label": "Data Governance Framework"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:data-product", "label": "Data Product"},
      {"@id": "urn:ngm:class:data-domain", "label": "Data Domain"},
      {"@id": "urn:ngm:class:self-serve-data-platform", "label": "Self-Serve Data Platform"},
      {"@id": "urn:ngm:class:federated-computational-governance", "label": "Federated Computational Governance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:domain-driven-design", "label": "Domain-Driven Design"},
      {"@id": "urn:ngm:class:data-contract", "label": "Data Contract"},
      {"@id": "urn:ngm:class:schema-registry", "label": "Schema Registry"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:policy-as-code", "label": "Policy as Code"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-analytics", "label": "Data Analytics"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:data-democratisation", "label": "Data Democratisation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"},
      {"@id": "urn:ngm:class:data-lake", "label": "Data Lake"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-warehouse", "label": "Data Warehouse"},
      {"@id": "urn:ngm:class:data-fabric-architecture", "label": "Data Fabric Architecture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:data-catalog", "label": "Data Catalog"},
      {"@id": "urn:ngm:class:data-lineage", "label": "Data Lineage"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:platform-engineering", "label": "Platform Engineering"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:distributed-data-architecture", "label": "Distributed Data Architecture"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Data Mesh is a distributed analytical data architecture that delegates ownership of domain data to the teams who produce it, requiring each domain to publish [[Data Pipeline]] outputs as versioned, documented data products accessible through a self-serve [[Data Governance]] platform rather than routing all data through a centralised data warehouse or lake.

- ### Relationships
  - Data Mesh builds on [[Data Governance Framework]] principles but decentralises enforcement via federated computational governance. It is contrasted with the centralised [[Data Fabric Architecture]] approach, though practitioners sometimes combine both. Its microservices-inspired decomposition relies on [[Microservices Architecture]] patterns for domain isolation and [[API Gateway]] layers for product discovery. [[Data Pipeline]] infrastructure underpins each domain's ingest and transformation processes, feeding into the overall [[Distributed System]] topology. [[Event Driven Architecture]] is a natural companion for real-time data product updates. [[Federated Learning]] shares the decentralised-ownership philosophy at the ML model level.

- ### Content
  - The Data Mesh paradigm emerged as a response to the recurring failure pattern of centralised data lakes: bottlenecks at a single data engineering team, data quality degradation due to distance from the source, and a proliferation of undocumented, stale datasets. By assigning data ownership to the domain teams who understand the semantics — a checkout domain owns its order events, a logistics domain owns its shipment stream — Mesh restores the accountability required for reliable analytics at enterprise scale.

  - A data product in the Mesh sense is more than a dataset: it is a bounded, versioned, SLA-backed artefact with an output port (e.g. a REST or gRPC API, an object-store partition, a streaming topic), a discoverable schema, lineage metadata, quality metrics, and an owner who is contractually responsible for its health. This transforms ad hoc pipelines into managed services akin to operational microservices, applying software engineering disciplines (CI/CD, testing, versioning) to analytical data.

  - The self-serve data infrastructure platform provides domain teams with standardised tooling for storage provisioning, schema registration, pipeline scaffolding, monitoring, and access control without requiring deep infrastructure expertise. This platform is itself an internal product, maintained by a platform engineering team whose customers are the domain data product owners.

  - Federated computational governance reconciles autonomy with standards: a central governance body defines global policies (data classification, privacy obligations, interoperability contracts), while domain teams retain freedom over implementation. Policy-as-code tooling (e.g. Open Policy Agent) automates enforcement across all data products, ensuring GDPR compliance, schema compatibility, and audit trails without centralised bottlenecks.

