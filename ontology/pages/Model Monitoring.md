public:: true

# Model Monitoring

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-monitoring", "@type":"Page", "title":"Model Monitoring", "vc:slug":"model-monitoring", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:model-monitoring",
  "@type":"Class",
  "label":"Model Monitoring",
  "definition":"Model monitoring is the continuous observation of a deployed machine learning model's inputs, outputs, and performance in production to detect degradation, data drift, concept drift, and operational issues. It tracks predictive quality, latency, and input distributions against baselines and triggers alerts or retraining when thresholds are breached. As a core MLOps practice, it closes the loop between deployment and maintenance, sustaining model reliability over time.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:mlops","label":"MLOps"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}],
    "uses":[{"@id":"urn:ngm:class:observability","label":"Observability"},{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}],
    "enables":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},{"@id":"urn:ngm:class:feedback-loop","label":"Feedback Loop"}],
    "requires":[{"@id":"urn:ngm:class:model-deployment","label":"Model Deployment"},{"@id":"urn:ngm:class:model-inference","label":"Model Inference"}],
    "supports":[{"@id":"urn:ngm:class:model-training","label":"Model Training"},{"@id":"urn:ngm:class:model-registry","label":"Model Registry"}],
    "dependsOn":[{"@id":"urn:ngm:class:data-quality","label":"Data Quality"}],
    "partOf":[{"@id":"urn:ngm:class:mlops","label":"MLOps"}],
    "contrastsWith":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
    "relatedTo":[{"@id":"urn:ngm:class:observability","label":"Observability"},{"@id":"urn:ngm:class:model-serving","label":"Model Serving"},{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Model Monitoring]] is the continuous observation of a deployed model's inputs, outputs, and performance, a core [[MLOps]] practice.
  - It detects degradation, data drift, and concept drift against baselines.
  - It builds on general [[Observability]] applied to model behaviour.
  - It triggers alerts and feeds the [[Feedback Loop]] toward retraining.
- ### Overview
  - Once a model is in production via [[Model Deployment]], its accuracy can silently decay as the world changes.
  - Monitoring tracks live predictions, input distributions, and quality metrics over time.
  - Drift in inputs or in the input-output relationship signals that the model may no longer be valid.
  - Detected issues route to alerting, investigation, and [[Model Training]] for refresh.
- ### Mechanisms
  - Tracking prediction quality where ground truth becomes available.
  - Data and concept drift detection comparing live distributions to training baselines.
  - Operational metrics: latency, throughput, error rates, and resource use.
  - [[Anomaly Detection]] over feature and output streams to surface outliers.
- ### Key aspects
  - Drift: distributional shift in inputs or labels degrading performance.
  - Ground-truth lag: delayed labels complicate quality measurement.
  - Baselines: training-time references against which production is judged.
  - Closed loop: connecting detection to retraining and redeployment.
- ### Applications
  - Production ML in fraud, recommendation, and risk scoring.
  - Regulated domains requiring auditable model performance.
  - Automated retraining triggers in continuous-delivery pipelines.
  - Governance reporting drawing on the [[Model Registry]].
- ### Relationships
  - hasPart:: [[Anomaly Detection]]
  - uses:: [[Observability]]
  - uses:: [[Anomaly Detection]]
  - enables:: [[Model Evaluation]]
  - enables:: [[Feedback Loop]]
  - requires:: [[Model Deployment]]
  - requires:: [[Model Inference]]
  - supports:: [[Model Training]]
  - supports:: [[Model Registry]]
  - dependsOn:: [[Data Quality]]
  - partOf:: [[MLOps]]
  - contrastsWith:: [[Model Evaluation]]
  - relatedTo:: [[Observability]]
  - relatedTo:: [[Model Serving]]
  - relatedTo:: [[Machine Learning]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
