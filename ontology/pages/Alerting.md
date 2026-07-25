public:: true

# Alerting

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:alerting", "@type": "Page", "title": "Alerting", "vc:slug": "alerting", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:alerting",
  "@type": "Class",
  "label": "Alerting",
  "definition": "Alerting is the observability capability that evaluates monitored signals against defined conditions and notifies responsible humans or automated systems when those conditions indicate a problem or an impending one. It converts continuous telemetry into discrete, actionable notifications routed to the appropriate on-call recipient. Effective alerting balances sensitivity against noise so that every alert is meaningful and timely.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:observability",
      "label": "Observability"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:real-time-monitoring",
        "label": "Real-Time Monitoring"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:notification",
        "label": "Notification"
      },
      {
        "@id": "urn:ngm:class:alert-fatigue",
        "label": "Alert Fatigue"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      },
      {
        "@id": "urn:ngm:class:service-level-objective",
        "label": "Service Level Objective"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:incident-management",
        "label": "Incident Management"
      },
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:root-cause-analysis",
        "label": "Root Cause Analysis"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:incident-reporting",
        "label": "Incident Reporting"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-tracing",
        "label": "Distributed Tracing"
      },
      {
        "@id": "urn:ngm:class:service-level-agreement",
        "label": "Service Level Agreement"
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
  - Alerting is the observability capability that evaluates monitored signals against defined conditions and notifies responsible humans or automated systems when those conditions indicate a problem or an impending one. It converts continuous telemetry into discrete, actionable notifications routed to the appropriate on-call recipient. Effective alerting balances sensitivity against noise so that every alert is meaningful and timely.
  - Related concepts: [[Observability]] [[Real-Time Monitoring]] [[Anomaly Detection]] [[Service Level Objective]] [[Incident Management]]
- ### Overview
  - Alerting sits atop a monitoring stack, consuming metrics, logs, and traces and applying rules, thresholds, or statistical models to decide when a condition warrants attention. When a rule fires, the alerting system deduplicates, groups, and routes the notification through escalation policies to an on-call engineer or an automated remediation workflow. Mature practice ties alerts to symptoms that affect users — typically service-level objectives — rather than to every low-level metric, reducing fatigue and improving signal quality.
- ### Key aspects
  - Threshold and rule evaluation: static thresholds, rate-of-change rules, and dynamic baselines derived from anomaly detection.
  - Routing and escalation: directing alerts to the correct team via on-call schedules and escalating unacknowledged alerts.
  - Deduplication and grouping: collapsing related alerts to prevent storms during widespread failures.
  - Severity classification: distinguishing pages that demand immediate action from informational warnings.
  - Alert quality management: tuning rules to minimise false positives and combat alert fatigue.
- ### Applications
  - On-call paging for production service degradation.
  - SLO burn-rate alerts in site reliability engineering.
  - Security event notification from intrusion detection systems.
  - Capacity and saturation warnings in infrastructure operations.
- ### Relationships
  - partOf:: [[Observability]]
  - partOf:: [[Real-Time Monitoring]]
  - hasPart:: [[Notification]]
  - hasPart:: [[Alert Fatigue]]
  - uses:: [[Anomaly Detection]]
  - uses:: [[Telemetry]]
  - uses:: [[Service Level Objective]]
  - supports:: [[Incident Management]]
  - supports:: [[Site Reliability Engineering]]
  - supports:: [[Root Cause Analysis]]
  - requires:: [[Monitoring]]
  - enables:: [[Incident Reporting]]
  - relatedTo:: [[Distributed Tracing]]
  - relatedTo:: [[Service Level Agreement]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
