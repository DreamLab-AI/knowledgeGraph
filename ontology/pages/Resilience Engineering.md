public:: true

# Resilience Engineering
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:resilience-engineering", "@type": "Page", "title": "Resilience Engineering", "vc:slug": "resilience-engineering", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:resilience-engineering",
  "@type": "Class",
  "label": "Resilience Engineering",
  "definition": "Resilience engineering is the discipline concerned with how complex socio-technical systems sustain required operation under expected and unexpected disturbances, and how they adapt, degrade gracefully, and recover. Rather than treating failure solely as a deviation to be eliminated, it studies the adaptive capacities that let systems anticipate, monitor, respond to, and learn from disruption. In computing it informs architectures and operational practices that bend rather than break under load spikes, partial outages, and cascading faults.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reliability-engineering",
      "label": "Reliability Engineering"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:chaos-engineering",
        "label": "Chaos Engineering"
      },
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:complex-systems",
        "label": "Complex Systems"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:chaos-engineering",
        "label": "Chaos Engineering"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:complex-systems",
        "label": "Complex Systems"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Resilience Engineering]] is defined in relation to [[Reliability Engineering]], [[Fault Tolerance]], [[Observability]], [[Chaos Engineering]], building on [[Reliability Engineering]].
  - Resilience engineering is the discipline concerned with how complex socio-technical systems sustain required operation under expected and unexpected disturbances, and how they adapt, degrade gracefully, and recover. Rather than treating failure solely as a deviation to be eliminated, it studies the adaptive capacities that let systems anticipate, monitor, respond to, and learn from disruption. In computing it informs architectures and operational practices that bend rather than break under load spikes, partial outages, and cascading faults.

- ### Overview
  - Resilience engineering emerged from safety science studying how high-risk industries — aviation, healthcare, power grids — maintain operation despite ever-present hazards. Its central insight is that safety and reliability are produced by ongoing adaptive work, not by the mere absence of failure, and that the same adaptive capacity occasionally produces the conditions for breakdown.
  - Applied to software and infrastructure, resilience engineering reframes the goal from preventing every fault to preserving essential service while absorbing, isolating, and recovering from inevitable faults. It draws on redundancy, graceful degradation, bulkheading, circuit breaking, and rapid feedback through observability.

- ### Key aspects
  - Four cornerstones: anticipating future threats, monitoring current conditions, responding to disturbances, and learning from past events.
  - Graceful degradation and load shedding so that partial capacity is preserved when full capacity cannot be.
  - Isolation patterns — bulkheads and circuit breakers — to stop local faults cascading across a distributed system.

- ### Applications
  - Designing cloud-native services that survive zone or region loss without total outage.
  - Operational practices such as game days, blameless post-incident review, and on-call learning loops.
  - Critical infrastructure where continuity of service under stress is a regulatory or safety requirement.

- ### Relationships
  - subClassOf:: [[Reliability Engineering]]
  - partOf:: [[Reliability Engineering]]
  - hasPart:: [[Fault Tolerance]]
  - hasPart:: [[Redundancy]]
  - hasPart:: [[Disaster Recovery]]
  - enables:: [[High Availability]]
  - enables:: [[Fault Tolerance]]
  - requires:: [[Observability]]
  - requires:: [[Incident Response]]
  - uses:: [[Chaos Engineering]]
  - uses:: [[Redundancy]]
  - dependsOn:: [[Observability]]
  - dependsOn:: [[Monitoring]]
  - supports:: [[Distributed Systems]]
  - supports:: [[Site Reliability Engineering]]
  - bridgesTo:: [[Disaster Recovery]]
  - bridgesTo:: [[Complex Systems]]
  - contrastsWith:: [[Fault Tolerance]]
  - relatedTo:: [[Chaos Engineering]]
  - relatedTo:: [[High Availability]]
  - relatedTo:: [[Complex Systems]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
