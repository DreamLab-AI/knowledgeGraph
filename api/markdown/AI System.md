public:: true

# AI System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-system",
  "@type": "Page",
  "vc:slug": "ai-system",
  "title": "AI System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-system",
  "@type": "Class",
  "label": "AI System",
  "definition": "An integrated assembly of software, hardware, data, and processes that employs machine learning or related techniques to perceive inputs, infer patterns or decisions, and produce outputs that affect its environment or users. AI systems range from narrow task-specific classifiers to general-purpose language models and autonomous agents, and they are characterised by behaviour that emerges from learned parameters rather than explicit programming. Regulatory definitions such as that codified in the EU AI Act emphasise the system-level perspective, encompassing the full sociotechnical context of deployment.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:sociotechnical-system", "label": "Sociotechnical System"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ai-model", "label": "AI Model"},
      {"@id": "urn:ngm:class:ai-inference", "label": "AI Inference"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"},
      {"@id": "urn:ngm:class:inference-runtime", "label": "Inference Runtime"},
      {"@id": "urn:ngm:class:monitoring-instrumentation", "label": "Monitoring Instrumentation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:machine-learning-framework", "label": "Machine Learning Framework"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-risk-assessment", "label": "AI Risk Assessment"},
      {"@id": "urn:ngm:class:autonomous-decision-making", "label": "Autonomous Decision-Making"},
      {"@id": "urn:ngm:class:intelligent-automation", "label": "Intelligent Automation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:mlops", "label": "MLOps"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:machine-learning-algorithm", "label": "Machine Learning Algorithm"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-iec-42001", "label": "ISO/IEC 42001"},
      {"@id": "urn:ngm:class:eu-ai-act", "label": "EU AI Act"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rule-based-system", "label": "Rule-Based System"},
      {"@id": "urn:ngm:class:conventional-software", "label": "Conventional Software"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-system-eu-definition", "label": "AI System (EU Definition)"},
      {"@id": "urn:ngm:class:edge-ai-system", "label": "Edge AI System"},
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-infrastructure", "label": "Digital Infrastructure"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ai-application", "label": "AI Application"},
    {"@id": "urn:ngm:class:intelligent-system", "label": "Intelligent System"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - An [[AI System]] is a sociotechnical assembly in which one or more [[AI Model]] components are embedded within data pipelines, orchestration logic, user interfaces, and supporting [[Compute Infrastructure]]. The system boundary extends beyond the model weights themselves to encompass the full lifecycle of data ingestion, inference, output delivery, and feedback loops. Regulatory instruments such as the [[AI System (EU Definition)]] codify this broad perspective to ensure accountability extends to deployers as well as developers.

- ### Relationships
  - An AI System has parts including [[AI Model]] and [[AI Inference]] components and depends on [[Compute Infrastructure]] for execution. It is subject to [[AI Risk Assessment]] to identify hazards across the full system boundary. Deployment at the network edge gives rise to the subtype [[Edge AI System]]. The [[AI System (EU Definition)]] clarifies which assemblies fall within the EU AI Act's regulatory scope.

- ### Content
  - The concept of an AI system as a distinct engineering artefact emerged from early expert systems research in the 1970s, where symbolic reasoning engines were embedded in decision-support tools. The shift to statistical and later deep learning approaches from the 1990s onwards broadened the term to encompass any computational assembly that exhibits learning-based behaviour, prompting definitional work by standards bodies including ISO/IEC SC42.

  - Technically, an AI system comprises a model or ensemble of models, a data ingestion and preprocessing layer, an inference runtime, monitoring instrumentation, and integration points with upstream and downstream systems. The complexity of orchestrating these components has given rise to specialised MLOps tooling and reference architectures that separate concerns across training, serving, and observability tiers.

  - The ecosystem of AI system deployment spans cloud-hosted services from hyperscalers, on-premises enterprise installations, and increasingly [[Edge AI System]] configurations that push inference closer to sensors and users. Middleware frameworks, model servers, and API gateways form a middleware layer that abstracts deployment heterogeneity from application developers.

  - By 2024–2025, the system-level view of AI has become central to regulatory discourse. The EU AI Act's tiered risk classification applies to systems rather than isolated models, requiring conformity assessments, [[AI Risk Assessment]], and post-market monitoring obligations. Multi-agent systems and compound AI architectures, where multiple AI systems collaborate dynamically, have emerged as an important architectural frontier with its own governance challenges.

