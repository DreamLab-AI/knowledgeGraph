public:: true

# operational resilience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:77cd453d4ba365fdb6024d565d93894e8e299e122e7a2e4554d5643e5f87e5c2",
  "@type": "Page",
  "vc:slug": "operational-resilience",
  "title": "operational resilience",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operational-resilience",
  "@type": "Class",
  "label": "Operational Resilience",
  "definition": "Operational Resilience is the organisational and technical capacity to anticipate, prepare for, withstand, recover from, and adapt to disruptions—whether caused by cyber-attacks, infrastructure failures, natural disasters, or human error—in a manner that maintains continuity of critical business services. It extends traditional business continuity and disaster recovery concepts by placing emphasis on setting impact tolerances for important business services and testing end-to-end resilience under realistic disruption scenarios. Operational resilience is increasingly mandated by financial regulators and embedded in frameworks such as the Bank of England's SS1/21 and the EU's Digital Operational Resilience Act (DORA).",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:resilience", "label": "Resilience"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:monitoring-dashboard", "label": "Monitoring Dashboard"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Operational Resilience is the organisational and technical capacity to anticipate, prepare for, withstand, recover from, and adapt to disruptions—whether caused by cyber-attacks, infrastructure failures, natural disasters, or human error—in a manner that maintains continuity of critical business services. It extends traditional business continuity and disaster recovery concepts by placing emphasis on setting impact tolerances for important business services and testing end-to-end resilience under realistic disruption scenarios. Operational resilience is increasingly mandated by financial regulators and embedded in frameworks such as the Bank of England's SS1/21 and the EU's Digital Operational Resilience Act (DORA).

- ### Semantic Classification
  - owl-class:: operational-resilience:Operational Resilience
  - owl-role:: Concept

- ### Relationships
  - requires [[Fault Tolerance]]
  - requires [[High Availability]]
  - enables [[Resilience]]
  - relatedTo [[Compliance Framework]]
  - relatedTo [[Risk Assessment]]
  - relatedTo [[Monitoring Dashboard]]

- ### Content
  - Operational resilience in technology infrastructure rests on engineering practices that prevent single points of failure and enable rapid recovery. Redundancy at hardware, network, and software layers provides failover capability: active-passive and active-active clustering, multi-availability-zone deployments in cloud infrastructure, and geographic replication of data ensure that the failure of any single component does not cause a service outage. Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) quantify acceptable downtime and data loss, shaping backup frequency and failover automation requirements.
  - Fault tolerance mechanisms include circuit breakers (as popularised by Netflix Hystrix and Resilience4j) that prevent cascade failures, bulkhead patterns that isolate failing subsystems, and retry logic with exponential back-off and jitter. Chaos engineering—pioneered by Netflix's Chaos Monkey—deliberately injects failures into production or staging environments to identify hidden weaknesses before they manifest under genuine stress.
  - Regulatory drivers have elevated operational resilience from a technical best practice to a compliance obligation. In financial services, the UK PRA/FCA's operational resilience framework (SS1/21) requires firms to identify important business services, set impact tolerances, and demonstrate through scenario testing that they can remain within tolerance during severe but plausible disruptions. The EU's DORA (Regulation EU 2022/2554) extends similar requirements across the financial sector and its critical ICT third-party providers. ISO/IEC 27001 control A.17 (information security aspects of business continuity management) addresses resilience within the ISMS context.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
