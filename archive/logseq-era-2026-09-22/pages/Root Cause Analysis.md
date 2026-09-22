public:: true

# Root Cause Analysis

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:root-cause-analysis", "@type": "Page", "title": "Root Cause Analysis", "vc:slug": "root-cause-analysis", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:root-cause-analysis",
  "@type": "Class",
  "label": "Root Cause Analysis",
  "definition": "Root cause analysis (RCA) is a structured problem-solving discipline that identifies the underlying origin of a fault, failure, or incident rather than merely treating its visible symptoms. In infrastructure and reliability engineering it traces a chain of contributing causes back to the conditions that, if corrected, would have prevented the event. RCA produces durable, systemic fixes and feeds learning back into operational practice.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:incident-management",
      "label": "Incident Management"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:incident-management",
        "label": "Incident Management"
      },
      {
        "@id": "urn:ngm:class:post-incident-review",
        "label": "Post-Incident Review"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fault-tree-analysis",
        "label": "Fault Tree Analysis"
      },
      {
        "@id": "urn:ngm:class:five-whys",
        "label": "Five Whys"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:distributed-tracing",
        "label": "Distributed Tracing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:incident-reporting",
        "label": "Incident Reporting"
      },
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:real-time-monitoring",
        "label": "Real-Time Monitoring"
      },
      {
        "@id": "urn:ngm:class:service-level-objective",
        "label": "Service Level Objective"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:incident-reporting",
        "label": "Incident Reporting"
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
  - Root cause analysis (RCA) is a structured problem-solving discipline that identifies the underlying origin of a fault, failure, or incident rather than merely treating its visible symptoms. In infrastructure and reliability engineering it traces a chain of contributing causes back to the conditions that, if corrected, would have prevented the event. RCA produces durable, systemic fixes and feeds learning back into operational practice.
  - Related concepts: [[Incident Management]] [[Fault Tree Analysis]] [[Observability]] [[Site Reliability Engineering]] [[Five Whys]]
- ### Overview
  - RCA begins after detection and containment of an incident, when responders shift from restoring service to understanding why the failure occurred. Investigators reconstruct a timeline from telemetry, logs, and traces, then iteratively ask why each contributing condition existed until the analysis reaches systemic factors that are actionable. Common techniques include the Five Whys, fault tree analysis, fishbone (Ishikawa) diagrams, and causal change analysis. The output is a set of corrective and preventive actions tracked to completion.
- ### Mechanisms
  - Causal chaining: tracing proximate symptoms back through intermediate failures to systemic origins.
  - Blameless culture: focusing on process and system weaknesses rather than individual fault to encourage honest disclosure.
  - Evidence gathering: correlating audit trails, distributed traces, and time-series telemetry to establish a defensible timeline.
  - Categorisation: classifying causes as technical, procedural, or organisational to target the correct remediation layer.
  - Corrective action tracking: assigning, prioritising, and verifying fixes so the same root cause cannot recur.
- ### Applications
  - Production outage post-mortems in cloud and on-premises infrastructure.
  - Quality and safety investigations in manufacturing and regulated industries.
  - Recurring-defect elimination in software delivery pipelines.
  - Security incident analysis to identify the initial compromise vector.
- ### Relationships
  - partOf:: [[Incident Management]]
  - partOf:: [[Post-Incident Review]]
  - uses:: [[Fault Tree Analysis]]
  - uses:: [[Five Whys]]
  - uses:: [[Audit Trail]]
  - uses:: [[Distributed Tracing]]
  - enables:: [[Incident Reporting]]
  - enables:: [[Site Reliability Engineering]]
  - requires:: [[Observability]]
  - requires:: [[Telemetry]]
  - supports:: [[DevOps]]
  - relatedTo:: [[Anomaly Detection]]
  - relatedTo:: [[Real-Time Monitoring]]
  - relatedTo:: [[Service Level Objective]]
  - contrastsWith:: [[Incident Reporting]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
