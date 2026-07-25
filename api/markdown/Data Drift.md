public:: true

# Data Drift
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-drift", "@type":"Page", "title":"Data Drift", "vc:slug":"data-drift", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-drift",
  "@type":"Class",
  "label":"Data Drift",
  "definition":"Data drift is the change over time in the statistical distribution of the input data fed to a deployed machine learning model relative to the distribution it was trained on. Unlike concept drift, which alters the relationship between inputs and targets, data drift (also called covariate or feature drift) shifts the marginal distribution of the features themselves and can silently degrade model accuracy even when the learned mapping remains valid. Detecting and responding to data drift is a central concern of model monitoring and MLOps, typically driving alerts, scheduled retraining, or fallback policies.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:concept-drift","label":"Concept Drift"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:model-monitoring","label":"Model Monitoring"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"},
      {"@id":"urn:ngm:class:feature-distribution","label":"Feature Distribution"}
    ],
    "causes":[
      {"@id":"urn:ngm:class:model-degradation","label":"Model Degradation"}
    ],
    "detectedBy":[
      {"@id":"urn:ngm:class:model-monitoring","label":"Model Monitoring"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:retraining","label":"Retraining"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:statistics","label":"Statistics"},
      {"@id":"urn:ngm:class:density-estimation","label":"Density Estimation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:covariate-shift","label":"Covariate Shift"},
      {"@id":"urn:ngm:class:distribution-shift","label":"Distribution Shift"},
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:mlops","label":"MLOps"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:concept-drift","label":"Concept Drift"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:covariate-shift","label":"Covariate Shift"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Data Drift]] is the change over time in the statistical distribution of the inputs a deployed model receives, relative to its training data.
	- It is a specific form of [[Concept Drift]] affecting the marginal [[Feature Distribution]] rather than the input-output relationship.
	- It is a primary signal tracked by [[Model Monitoring]] and a core concern of [[MLOps]].
- ### Overview
	- A model learns patterns from a snapshot of the world; once deployed, the world keeps moving. When the live feature distribution diverges from the training distribution, the model is asked to extrapolate beyond its support, and predictions become unreliable.
	- Data drift is distinguished from concept drift: data drift moves the distribution of X while leaving P(Y|X) intact, whereas concept drift moves P(Y|X) itself. In practice both can co-occur and both degrade live performance.
	- Drift can be gradual (slow demographic change), sudden (a new data source or sensor), or seasonal (recurring cyclical patterns). Each profile calls for different detection windows and response policies.
- ### Mechanisms
	- Statistical distance tests such as Kolmogorov-Smirnov, Population Stability Index, and Jensen-Shannon divergence compare reference and live windows.
	- Density-based monitoring uses [[Density Estimation]] to score the likelihood of incoming samples under the training distribution.
	- Embedding and reconstruction methods flag drift in high-dimensional or unstructured data where univariate tests fail.
	- Alerting and automated [[Retraining]] pipelines close the loop when drift exceeds thresholds.
- ### Applications
	- Production monitoring of credit, fraud, and recommendation models.
	- Triggering scheduled or event-driven model retraining.
	- Data-quality gating in feature stores and ingestion pipelines.
	- Root-cause analysis when live metrics degrade.
- ### Relationships
	- partOf:: [[Model Monitoring]]
	- dependsOn:: [[Probability Distribution]]
	- dependsOn:: [[Feature Distribution]]
	- causes:: [[Model Degradation]]
	- detectedBy:: [[Model Monitoring]]
	- detectedBy:: [[Observability]]
	- requires:: [[Retraining]]
	- uses:: [[Statistics]]
	- uses:: [[Density Estimation]]
	- relatedTo:: [[Covariate Shift]]
	- relatedTo:: [[Distribution Shift]]
	- relatedTo:: [[Anomaly Detection]]
	- bridgesTo:: [[MLOps]]
	- contrastsWith:: [[Concept Drift]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
