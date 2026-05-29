public:: true

# Decision Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decision-engine",
  "@type": "Page",
  "vc:slug": "decision-engine",
  "title": "Decision Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-engine",
  "@type": "Class",
  "label": "Decision Engine",
  "definition": "A decision engine is a software component that encapsulates decision logic—rules, models, policies, or heuristics—and evaluates inputs against that logic to produce actionable outputs such as approvals, classifications, recommendations, or routing choices. Decision engines decouple business logic from application code, enabling non-developers to modify decision policies without code deployments, and support auditability by providing traceable reasoning paths for each decision. They range from rule-based expert systems to ML model inference services to hybrid architectures combining both.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:policy-engine", "label": "Policy Engine"},
      {"@id": "urn:ngm:class:automated-reasoning", "label": "Automated Reasoning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decision-support", "label": "Decision Support"},
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"},
      {"@id": "urn:ngm:class:informed-decision-making", "label": "Informed decision-making"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decision-transparency", "label": "Decision Transparency"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A decision engine is an encapsulated system that applies [[Automated Reasoning]] and [[Policy Engine]] rules or ML model inference to inputs, producing traceable outputs that drive [[Decision Support]] and [[Automated Planning]] workflows.

- ### Relationships
  - Decision engines commonly layer over a [[Policy Engine]] for rule evaluation and draw on [[Automated Reasoning]] capabilities for more complex inference chains. Their outputs feed directly into [[Decision Support]] interfaces, [[Automated Planning]] systems, and [[Informed decision-making]] processes across business, government, and AI applications. [[Decision Transparency]]—the ability to explain which rules or features drove a decision—is a key design requirement for regulated use cases and connects to explainable AI tooling. [[Orchestration]] layers typically invoke decision engines as part of broader workflow automation pipelines.

- ### Content
  - Decision engines as a distinct software category emerged from expert systems of the 1970s and 1980s, such as MYCIN and RETE-based rule engines. Early production implementations like IBM's OPS5 and ILOG JRULES (now ODM) provided business rule management systems (BRMS) that allowed domain experts to author and manage decision policies independently of IT. This separation of concerns—rules as data rather than code—proved highly valuable in regulated industries such as insurance, banking, and healthcare.

  - Modern decision engines fall into three broad architectural patterns: pure rule engines that evaluate a prioritised rule set against a working memory (Drools, Easy Rules); ML inference engines that pass feature vectors through trained models (scikit-learn pipelines, TensorFlow Serving); and hybrid decision intelligence systems that combine rule guardrails with ML scoring (common in credit decisioning and fraud detection). The input-output interface is typically a structured request containing context attributes, with the engine returning a decision, confidence score, and explanation trace.

  - Decision engines are significant in enterprise automation because they enable governance: rules are version-controlled, tested against regression suites, and deployed through change management processes. In regulated domains, every decision must carry an audit trail linking the output to the specific rule version or model snapshot that produced it. This traceability is increasingly demanded by regulators under GDPR Article 22 (right to explanation for automated decisions) and the EU AI Act's transparency requirements for high-risk AI systems.

  - By 2024–2025 decision engines are converging with large language model orchestration: LLM-powered decision agents combine natural language understanding with structured rule evaluation, enabling decisions over unstructured inputs while maintaining auditability through chain-of-thought reasoning logs. Real-time decision engines operating at sub-millisecond latency (fraud scoring, ad bidding) contrast with deliberative engines that invoke multiple model calls and tool use. The challenge of distributional shift—model or rule performance degrading as the world changes—is driving investment in continuous monitoring and automated re-calibration of decision engine components.