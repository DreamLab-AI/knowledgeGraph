public:: true

# Disaster Recovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:disaster-recovery",
  "@type": "Page",
  "vc:slug": "disaster-recovery",
  "title": "Disaster Recovery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:disaster-recovery",
  "@type": "Class",
  "label": "Disaster Recovery",
  "definition": "Disaster recovery (DR) is the set of policies, tools, and procedures enabling an organisation to restore its IT systems, data, and operations following a disruptive event such as hardware failure, cyberattack, natural disaster, or human error. It is quantified by Recovery Time Objective (RTO) and Recovery Point Objective (RPO), and encompasses backup strategies, replication architectures, and tested failover procedures.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:resilience", "label": "Resilience"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:recovery-time-objective", "label": "Recovery Time Objective"},
      {"@id": "urn:ngm:class:recovery-point-objective", "label": "Recovery Point Objective"},
      {"@id": "urn:ngm:class:failover", "label": "Failover"},
      {"@id": "urn:ngm:class:dr-runbook", "label": "DR Runbook"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:backup-and-recovery", "label": "Backup and Recovery"},
      {"@id": "urn:ngm:class:replication", "label": "Replication"},
      {"@id": "urn:ngm:class:data-centre", "label": "Data Centre"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:infrastructure-as-code", "label": "Infrastructure as Code"},
      {"@id": "urn:ngm:class:chaos-engineering", "label": "Chaos Engineering"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:business-continuity", "label": "Business Continuity"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:network-redundancy", "label": "Network Redundancy"},
      {"@id": "urn:ngm:class:storage-replication", "label": "Storage Replication"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:resilience-metric", "label": "Resilience Metric"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:ransomware", "label": "Ransomware"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:security", "label": "Security"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:dr", "label": "DR"},
    {"@id": "urn:ngm:class:disaster-recovery-planning", "label": "Disaster Recovery Planning"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Disaster Recovery]] (DR) encompasses the planning, technology, and operational procedures that allow an organisation to restore business-critical IT services following a disruptive event. It is defined by two key metrics: Recovery Time Objective (RTO)—the maximum acceptable downtime—and Recovery Point Objective (RPO)—the maximum acceptable data loss measured in time. DR strategies range from simple [[Backup and Recovery]] tape rotation to synchronous [[Replication]] across geographically separated data centres, with [[Cloud Infrastructure]] increasingly providing elastic DR capabilities. DR is distinct from but closely related to [[High Availability]] and [[Fault Tolerance]], which address continuous operation rather than recovery from failure.

- ### Relationships
  - Disaster recovery uses [[Backup and Recovery]] technologies as its foundation, augmented by [[Replication]] to achieve low RPO targets. [[Cloud Infrastructure]] platforms (AWS, Azure, GCP) provide DR-as-a-Service offerings that replace traditional secondary data centre investments. Effective DR implementation enables [[High Availability]] architectures and contributes to [[Fault Tolerance]]. Performance is tracked via [[Resilience Metric]] frameworks. DR sits within the broader [[Resilience]] domain alongside business continuity planning and crisis management.

- ### Content
  - Disaster recovery as a formalised discipline emerged in the 1970s alongside the growing dependence of financial institutions and government agencies on mainframe computing. Early DR programmes relied on hot-site agreements—contracted access to preconfigured hardware at a third-party facility—and daily tape backups transported off-site by courier. The 9/11 attacks (2001) and Hurricane Katrina (2005) exposed critical gaps in many organisations' DR capabilities, triggering regulatory mandates across financial services (FFIEC, Basel II) and healthcare (HIPAA) sectors.

  - Modern DR architectures are tiered by RTO and RPO requirements. Tier 0 (no DR) through Tier 7 (zero data loss, automated recovery) structures guide technology selection. Active-active architectures—where multiple sites concurrently serve production workloads—represent Tier 7 implementations, eliminating both RTO and RPO at significant infrastructure cost. Storage replication technologies (synchronous for near-zero RPO, asynchronous for cost-efficient longer RPO) combined with orchestration tools (Zerto, Veeam, AWS CloudEndure) automate failover sequencing. Regular DR testing—full failover exercises, tabletop simulations, chaos engineering—is essential to validate recovery runbooks.

  - Cloud-native DR has fundamentally altered the economics and architecture of the discipline. DR-as-a-Service (DRaaS) providers use cloud elasticity to spin up recovery environments on demand rather than maintaining permanently provisioned hardware. Infrastructure-as-Code tools (Terraform, CloudFormation) enable entire environment configurations to be version-controlled and redeployed automatically. Kubernetes-based workloads can migrate between regions by reapplying manifests against pre-replicated data volumes, drastically reducing manual intervention during recovery.

  - In 2024-2025, ransomware resilience has become the dominant DR design driver: immutable backup storage (object lock, air-gapped vaults), rapid detection of encryption events, and clean recovery point identification are now core DR requirements. AI-driven DR tools are emerging that automatically assess blast radius during incidents and prioritise recovery sequences by business criticality. Regulatory frameworks including DORA (Digital Operational Resilience Act) in the EU now mandate DR testing and incident reporting for financial institutions, elevating DR from operational best practice to compliance obligation.

