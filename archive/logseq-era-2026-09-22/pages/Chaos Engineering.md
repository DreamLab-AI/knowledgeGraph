public:: true

# Chaos Engineering
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:chaos-engineering", "@type":"Page", "title":"Chaos Engineering", "vc:slug":"chaos-engineering", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chaos-engineering",
  "@type": "Class",
  "label": "Chaos Engineering",
  "definition": "Chaos engineering is the discipline of experimenting on a software system by deliberately injecting controlled faults — such as instance termination, network latency, or resource exhaustion — in order to build confidence in the system's ability to withstand turbulent, real-world conditions. Practitioners form a hypothesis about steady-state behaviour, introduce a failure in production or production-like environments, and observe whether the system maintains its service level. Originating with Netflix's Chaos Monkey, the practice surfaces hidden dependencies and weaknesses before they cause outages, complementing observability and resilient design.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:site-reliability-engineering", "label": "Site Reliability Engineering" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:fault-injection", "label": "Fault Injection" },
      { "@id": "urn:ngm:class:steady-state-hypothesis", "label": "Steady-State Hypothesis" },
      { "@id": "urn:ngm:class:blast-radius-control", "label": "Blast Radius Control" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:resilience-engineering", "label": "Resilience Engineering" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:chaos-monkey", "label": "Chaos Monkey" },
      { "@id": "urn:ngm:class:fault-injection", "label": "Fault Injection" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:observability", "label": "Observability" },
      { "@id": "urn:ngm:class:monitoring", "label": "Monitoring" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance" },
      { "@id": "urn:ngm:class:high-availability", "label": "High Availability" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:resilient-architecture", "label": "Resilient Architecture" },
      { "@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:incident-response", "label": "Incident Response" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery" },
      { "@id": "urn:ngm:class:game-day", "label": "Game Day Exercise" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:traditional-qa-testing", "label": "Traditional QA Testing" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:reliability", "label": "Reliability" },
      { "@id": "urn:ngm:class:service-level-objective", "label": "Service Level Objective" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:chaos-testing", "label": "Chaos Testing" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - [[Chaos Engineering]] is the [[Site Reliability Engineering]] practice of deliberately injecting controlled failures to validate a system's resilience against a [[Steady-State Hypothesis]]. It depends on [[Observability]], enables [[Fault Tolerance]], and supports robust [[Distributed Systems]].

- ### Overview
  - Rather than waiting for outages, chaos engineering treats reliability as an empirical property to be tested. An experiment begins by defining the system's normal steady state through measurable indicators, hypothesising that this state persists under a specific failure, then injecting that failure while carefully limiting the blast radius. If steady state is maintained, confidence grows; if it degrades, a weakness has been found before it caused a customer-facing incident.
  - The discipline was popularised by Netflix, whose Chaos Monkey randomly terminated production instances to enforce architectures that tolerate the loss of any single component. The broader Simian Army and later platforms generalised this to latency injection, region failover, and dependency degradation.

- ### Mechanisms
  - Fault injection: terminating instances, throttling I/O, dropping packets, or exhausting CPU and memory.
  - Blast radius control: scoping experiments to limited traffic, regions, or canary cohorts.
  - Automated experimentation with abort conditions tied to observability signals.

- ### Applications
  - Validating auto-scaling, failover, and redundancy in cloud-native systems.
  - Game days and disaster-recovery rehearsals that exercise on-call response.
  - Continuous resilience verification embedded in delivery pipelines.

- ### Relationships
  - subClassOf:: [[Site Reliability Engineering]]
  - hasPart:: [[Fault Injection]]
  - hasPart:: [[Steady-State Hypothesis]]
  - partOf:: [[Resilience Engineering]]
  - uses:: [[Chaos Monkey]]
  - dependsOn:: [[Observability]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[High Availability]]
  - supports:: [[Distributed Systems]]
  - bridgesTo:: [[Disaster Recovery]]
  - contrastsWith:: [[Traditional QA Testing]]
  - relatedTo:: [[Reliability]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
