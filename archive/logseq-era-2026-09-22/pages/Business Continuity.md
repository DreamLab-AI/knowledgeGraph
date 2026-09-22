public:: true

# Business Continuity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:business-continuity", "@type":"Page", "title":"Business Continuity", "vc:slug":"business-continuity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:business-continuity",
  "@type":"Class",
  "label":"Business Continuity",
  "definition":"Business continuity is the discipline of ensuring that an organisation's critical functions can continue, or be rapidly restored, during and after a disruptive event such as an outage, disaster, or cyber-incident. It combines planning, redundancy, recovery procedures, and testing to limit downtime and data loss against defined objectives. In technical infrastructure it is realised through high availability, disaster recovery, fault tolerance, and resilient architecture, and is closely coupled with risk management.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:resilience","label":"Resilience"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:operational-resilience","label":"Operational Resilience"}],
    "enables":[{"@id":"urn:ngm:class:high-availability","label":"High Availability"},{"@id":"urn:ngm:class:operational-resilience","label":"Operational Resilience"}],
    "requires":[{"@id":"urn:ngm:class:disaster-recovery","label":"Disaster Recovery"},{"@id":"urn:ngm:class:redundancy","label":"Redundancy"}],
    "uses":[{"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"},{"@id":"urn:ngm:class:service-level-agreement","label":"Service Level Agreement"}],
    "supports":[{"@id":"urn:ngm:class:incident-response","label":"Incident Response"}],
    "dependsOn":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
    "contrastsWith":[{"@id":"urn:ngm:class:disaster-recovery","label":"Disaster Recovery"}],
    "relatedTo":[{"@id":"urn:ngm:class:resilience","label":"Resilience"},{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:high-availability","label":"High Availability"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Business Continuity]] ensures critical organisational functions continue or recover quickly after disruption, a form of [[Resilience]].
  - It combines planning, [[Redundancy]], recovery procedures, and testing against defined objectives.
  - It is realised technically through [[High Availability]] and [[Disaster Recovery]].
  - It is tightly coupled with [[Risk Management]].
- ### Overview
  - Disruptions span hardware failure, natural disaster, cyber-attack, and supply interruption.
  - A business continuity plan identifies critical processes, dependencies, and acceptable downtime.
  - Recovery objectives are defined as RTO (time to restore) and RPO (tolerable data loss).
  - Effective continuity requires both technical safeguards and rehearsed organisational procedures.
- ### Mechanisms
  - Redundant, geographically distributed infrastructure to remove single points of failure.
  - Regular backups and tested restore procedures via [[Disaster Recovery]].
  - Automated failover and [[Fault Tolerance]] to absorb component loss.
  - Continuity testing, tabletop exercises, and [[Incident Response]] runbooks.
- ### Key aspects
  - RTO and RPO: quantified targets governing recovery design.
  - Criticality analysis: prioritising functions by business impact.
  - Dependency mapping: understanding upstream and downstream couplings.
  - Governance: ownership, communication, and regulatory compliance.
- ### Applications
  - Financial services and healthcare where downtime is intolerable.
  - Cloud and data-centre architectures using multi-region redundancy.
  - Critical national infrastructure and emergency services.
  - SLA commitments codified in a [[Service Level Agreement]].
- ### Relationships
  - partOf:: [[Risk Management]]
  - partOf:: [[Operational Resilience]]
  - enables:: [[High Availability]]
  - enables:: [[Operational Resilience]]
  - requires:: [[Disaster Recovery]]
  - requires:: [[Redundancy]]
  - uses:: [[Fault Tolerance]]
  - uses:: [[Service Level Agreement]]
  - supports:: [[Incident Response]]
  - dependsOn:: [[Infrastructure]]
  - contrastsWith:: [[Disaster Recovery]]
  - relatedTo:: [[Resilience]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[High Availability]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
