public:: true

# Metrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:metrics",
  "@type": "Page",
  "title": "Metrics",
  "vc:slug": "metrics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:metrics",
  "@type": "Class",
  "label": "Metrics",
  "definition": "Metrics are numeric, time-series measurements that quantify the state and behaviour of systems, services and infrastructure over time. As one of the three pillars of observability alongside logs and traces, they are typically aggregated counters, gauges and histograms scraped or pushed at regular intervals. Metrics enable efficient trend analysis, alerting and capacity planning at scale because they compress system behaviour into compact, queryable numeric series.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:observability",
      "label": "Observability"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      },
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:performance-monitoring",
        "label": "Performance Monitoring"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:alerting",
        "label": "Alerting"
      },
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:alerting",
        "label": "Alerting"
      },
      {
        "@id": "urn:ngm:class:performance-monitoring",
        "label": "Performance Monitoring"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      },
      {
        "@id": "urn:ngm:class:performance-monitoring",
        "label": "Performance Monitoring"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
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
  - Metrics are numeric, time-series measurements that quantify the state and behaviour of systems, services and infrastructure over time. As one of the three pillars of observability alongside logs and traces, they are typically aggregated counters, gauges and histograms scraped or pushed at regular intervals. Metrics enable efficient trend analysis, alerting and capacity planning at scale because they compress system behaviour into compact, queryable numeric series.
  - Related core concepts: [[Observability]] [[Telemetry]] [[Monitoring]] [[Alerting]] [[Performance Monitoring]]
- ### Overview
  - Metrics provide the low-cardinality, numeric backbone of observability. Because each data point is a small number with a timestamp and a set of labels, metrics can be retained for long periods and queried cheaply to reveal trends, seasonality and anomalies. They are the natural substrate for dashboards, alert thresholds and autoscaling decisions.
- ### Key aspects
  - Metric types: counters (monotonic), gauges (point-in-time values), histograms and summaries (distribution of observations).
  - Dimensionality: labels or tags that partition a metric into related series for slicing and aggregation.
  - Collection model: pull-based scraping or push-based emission at fixed intervals into a time-series database.
  - Aggregation: rollups, rate calculations and percentile estimation that summarise raw samples for analysis.
  - Retention and downsampling: storing high-resolution recent data and coarser long-term history to bound storage cost.
- ### Applications
  - Powering real-time dashboards and service-level indicator tracking.
  - Triggering threshold-based and anomaly-based alerts.
  - Informing autoscaling and capacity-planning decisions.
  - Quantifying the impact of deployments and incidents on system health.
- ### Relationships
  - subClassOf:: [[Observability]]
  - uses:: [[Telemetry]]
  - uses:: [[Monitoring]]
  - hasPart:: [[Performance Monitoring]]
  - supports:: [[Observability]]
  - supports:: [[Alerting]]
  - supports:: [[Monitoring]]
  - enables:: [[Alerting]]
  - enables:: [[Performance Monitoring]]
  - partOf:: [[Observability]]
  - requires:: [[Telemetry]]
  - dependsOn:: [[Telemetry]]
  - relatedTo:: [[Monitoring]]
  - relatedTo:: [[Performance Monitoring]]
  - relatedTo:: [[Kubernetes]]
  - contrastsWith:: [[Telemetry]]
  - bridgesTo:: [[Observability]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
