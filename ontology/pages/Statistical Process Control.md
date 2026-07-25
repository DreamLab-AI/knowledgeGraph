public:: true

# Statistical Process Control

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:statistical-process-control", "@type":"Page", "title":"Statistical Process Control", "vc:slug":"statistical-process-control", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:statistical-process-control",
  "@type":"Class",
  "label":"Statistical Process Control",
  "definition":"Statistical Process Control (SPC) is a quality-control methodology that applies statistical methods to monitor and control a manufacturing or service process. By tracking process variation over time against statistically derived control limits, SPC distinguishes ordinary common-cause variation from assignable special-cause variation, enabling operators to intervene only when a process is genuinely out of control. It underpins continuous improvement and defect prevention in industrial production.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:quality-control","label":"Quality Control"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:quality-control","label":"Quality Control"}],
    "hasPart":[{"@id":"urn:ngm:class:statistics","label":"Statistics"},{"@id":"urn:ngm:class:monitoring","label":"Monitoring"}],
    "uses":[{"@id":"urn:ngm:class:statistics","label":"Statistics"},{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"},{"@id":"urn:ngm:class:data-validation","label":"Data Validation"}],
    "enables":[{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},{"@id":"urn:ngm:class:industrial-inspection","label":"Industrial Inspection"}],
    "supports":[{"@id":"urn:ngm:class:industrial-automation","label":"Industrial Automation"},{"@id":"urn:ngm:class:process-control","label":"Process Control"}],
    "requires":[{"@id":"urn:ngm:class:sensor","label":"Sensor"},{"@id":"urn:ngm:class:monitoring","label":"Monitoring"}],
    "relatedTo":[{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},{"@id":"urn:ngm:class:automation","label":"Automation"},{"@id":"urn:ngm:class:regulation","label":"Regulation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}],
    "bridgesTo":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Statistical Process Control is a [[Quality Control]] discipline that uses [[Statistics]] to monitor process variation in real time, supporting [[Process Control]] and [[Industrial Inspection]] through systematic [[Monitoring]].
- It separates random common-cause variation from assignable special-cause variation so that intervention happens only when warranted.
- ### Overview
- SPC emerged from early twentieth-century manufacturing as a way to make process behaviour visible and actionable. Rather than inspecting finished output for defects after the fact, SPC observes the process while it runs, plotting measurements against statistically derived limits.
- A process operating within its control limits is described as being in a state of statistical control: its output is predictable within known bounds. When points fall outside those limits, or form non-random patterns, the process signals an assignable cause that warrants investigation.
- The methodology is foundational to lean manufacturing, Six Sigma, and continuous improvement programmes, and increasingly intersects with data-driven [[Anomaly Detection]] and [[Machine Learning]].
- ### Key aspects
- Control limits are computed from process data itself, typically at three standard deviations from the centre line, distinguishing them from specification limits set by design requirements.
- Common-cause variation is the inherent noise of a stable process; special-cause variation is an external, identifiable disturbance.
- Process capability indices quantify how well a controlled process meets its specification tolerances.
- Run rules and pattern tests detect drifts, trends, and shifts that individual out-of-limit points might miss.
- Sampling strategy and measurement-system analysis determine the trustworthiness of the data feeding the charts.
- ### Applications
- Manufacturing lines use SPC to hold dimensional, weight, and assembly tolerances within bounds.
- Service and transactional processes apply SPC to cycle times, error rates, and throughput.
- Semiconductor fabrication and pharmaceutical production rely on tight SPC for yield and regulatory compliance.
- Modern industrial monitoring pipelines feed sensor streams into automated SPC, blending classical charts with [[Anomaly Detection]].
- ### Relationships
- partOf:: [[Quality Control]]
- hasPart:: [[Statistics]]
- hasPart:: [[Monitoring]]
- uses:: [[Statistics]]
- uses:: [[Signal Processing]]
- uses:: [[Data Validation]]
- enables:: [[Anomaly Detection]]
- enables:: [[Industrial Inspection]]
- supports:: [[Industrial Automation]]
- supports:: [[Process Control]]
- requires:: [[Sensor]]
- requires:: [[Monitoring]]
- relatedTo:: [[Automation]]
- relatedTo:: [[Regulation]]
- contrastsWith:: [[Anomaly Detection]]
- bridgesTo:: [[Machine Learning]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
