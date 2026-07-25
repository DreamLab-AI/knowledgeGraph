public:: true

# Service Level Agreement
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:service-level-agreement", "@type":"Page", "title":"Service Level Agreement", "vc:slug":"service-level-agreement", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:service-level-agreement",
  "@type": "Class",
  "label": "Service Level Agreement",
  "definition": "A service level agreement (SLA) is a formal contract between a service provider and its customers that defines the measurable level of service to be delivered, including availability, performance, and response-time targets, together with the remedies or credits owed when those targets are breached. SLAs translate abstract reliability expectations into quantitative service level objectives and indicators that can be monitored and enforced. They are central to cloud computing, managed services, and outsourcing, providing the accountability framework around which capacity, support, and operational practices are organised.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    { "@id": "urn:ngm:class:infrastructure", "label": "Infrastructure" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:service-level-objective", "label": "Service Level Objective" },
      { "@id": "urn:ngm:class:service-level-indicator", "label": "Service Level Indicator" },
      { "@id": "urn:ngm:class:service-credit", "label": "Service Credit" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:service-management", "label": "Service Management" }
    ],
    "implements": [
      { "@id": "urn:ngm:class:contractual-obligation", "label": "Contractual Obligation" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:monitoring", "label": "Monitoring" },
      { "@id": "urn:ngm:class:observability", "label": "Observability" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:high-availability", "label": "High Availability" },
      { "@id": "urn:ngm:class:accountability", "label": "Accountability" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing" },
      { "@id": "urn:ngm:class:managed-services", "label": "Managed Services" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:uptime-measurement", "label": "Uptime Measurement" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:metrics", "label": "Metrics" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:error-budget", "label": "Error Budget" },
      { "@id": "urn:ngm:class:site-reliability-engineering", "label": "Site Reliability Engineering" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:best-effort-service", "label": "Best-Effort Service" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery" },
      { "@id": "urn:ngm:class:capacity-planning", "label": "Capacity Planning" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:sla", "label": "SLA" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - A [[Service Level Agreement]] is a formal contract defining measurable service targets and the remedies for breaching them, decomposed into the [[Service Level Objective]] and [[Service Level Indicator]]. It depends on [[Monitoring]], enables [[High Availability]], and underpins [[Cloud Computing]] accountability.

- ### Overview
  - An SLA codifies the commitments a provider makes about a service: how often it will be available, how quickly it will respond, how incidents are classified, and what compensation applies on failure. By making expectations explicit and measurable, it aligns the provider's operational investment with the customer's reliability needs.
  - SLAs sit atop a hierarchy of supporting constructs. Service level indicators are the raw measurements (such as request success rate or latency percentiles); service level objectives are the internal targets for those indicators; and the SLA is the externally facing, contractually binding subset, usually set conservatively below the internal SLO to provide a safety margin.

- ### Key aspects
  - Quantitative availability and performance targets (for example nines of uptime).
  - Defined measurement windows, exclusions, and maintenance windows.
  - Penalties or service credits triggered by breaches.
  - Escalation, support tiers, and incident response commitments.

- ### Applications
  - Cloud platform and SaaS contracts guaranteeing uptime and support.
  - Managed services and outsourcing arrangements with defined responsibilities.
  - Internal SLAs between platform teams and product teams within an organisation.

- ### Relationships
  - subClassOf:: [[Infrastructure]]
  - hasPart:: [[Service Level Objective]]
  - hasPart:: [[Service Level Indicator]]
  - partOf:: [[Service Management]]
  - implements:: [[Contractual Obligation]]
  - dependsOn:: [[Monitoring]]
  - enables:: [[High Availability]]
  - supports:: [[Cloud Computing]]
  - bridgesTo:: [[Error Budget]]
  - bridgesTo:: [[Site Reliability Engineering]]
  - contrastsWith:: [[Best-Effort Service]]
  - relatedTo:: [[Disaster Recovery]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
