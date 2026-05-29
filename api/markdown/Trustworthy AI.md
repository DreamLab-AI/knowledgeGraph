public:: true

# trustworthy ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7af2b065b005d471f55fd101475b5f13f417cb4a3a3278b2127193cf4f0f1d19",
  "@type": "Page",
  "vc:slug": "trustworthy-ai",
  "title": "trustworthy ai",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trustworthy-ai",
  "@type": "Class",
  "label": "Trustworthy AI",
  "definition": "Trustworthy AI refers to artificial intelligence systems that are designed, developed, and deployed in accordance with a structured set of properties including lawfulness, ethical soundness, robustness, fairness, transparency, and accountability, ensuring they operate reliably and safely in their intended context. The concept is codified in frameworks such as the EU High-Level Expert Group's guidelines on Trustworthy AI and operationalised through the EU AI Act's risk-tiered obligations. Trustworthy AI requires meaningful human oversight mechanisms, explainable decision processes, bias monitoring, and documented accountability chains across the AI lifecycle.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:human-oversight", "label": "Human Oversight"},
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Trustworthy AI refers to artificial intelligence systems that are designed, developed, and deployed in accordance with a structured set of properties including lawfulness, ethical soundness, robustness, fairness, transparency, and accountability, ensuring they operate reliably and safely in their intended context. The concept is codified in frameworks such as the EU High-Level Expert Group's guidelines on Trustworthy AI and operationalised through the EU AI Act's risk-tiered obligations. Trustworthy AI requires meaningful human oversight mechanisms, explainable decision processes, bias monitoring, and documented accountability chains across the AI lifecycle.

- ### Semantic Classification
  - owl-class:: trustworthy-ai:Trustworthy AI
  - owl-role:: Concept

- ### Relationships
  - requires [[Human Oversight]]
  - requires [[Explainable AI]]
  - relatedTo [[Responsible AI]]
  - relatedTo [[AI Safety]]
  - supports [[Fairness]]
  - supports [[Transparency]]

- ### Content
  - Trustworthy AI is both a design objective and a governance imperative. The EU High-Level Expert Group on AI identified seven key requirements: human agency and oversight, technical robustness and safety, privacy and data governance, transparency, diversity and non-discrimination, societal and environmental wellbeing, and accountability. These requirements are intended to be evaluated across the full AI system lifecycle, from data collection and model training to deployment and ongoing monitoring.
  - The EU AI Act operationalises trustworthiness through a risk classification scheme: unacceptable-risk systems are prohibited; high-risk systems (e.g., AI in employment, education, law enforcement) must meet conformity assessment requirements including documentation, logging, accuracy standards, and human oversight provisions before market placement. General-purpose AI models above a capability threshold face transparency and red-teaming obligations.
  - Technical approaches supporting trustworthy AI include explainable AI (XAI) methods such as SHAP and LIME that provide local feature attributions, fairness-aware machine learning that minimises disparate impact across demographic groups, and robustness testing against adversarial inputs and distributional shift. Governance mechanisms such as AI impact assessments, model cards, and algorithmic audits complement technical measures to form a comprehensive trustworthiness assurance regime.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
