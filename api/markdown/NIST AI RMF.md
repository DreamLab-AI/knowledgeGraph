public:: true

# NIST AI RMF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nist-ai-rmf",
  "@type": "Page",
  "vc:slug": "nist-ai-rmf",
  "title": "NIST AI RMF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nist-ai-rmf",
  "@type": "Class",
  "label": "NIST AI RMF",
  "definition": "The NIST AI Risk Management Framework (AI RMF) is a voluntary guidance document published by the National Institute of Standards and Technology in January 2023 that helps organisations manage risks associated with the design, development, deployment, and operation of AI systems. It provides a structured, flexible, and measurable approach to AI risk management through four core functions: Govern, Map, Measure, and Manage. The framework is technology- and sector-agnostic, designed to be adapted across diverse organisational contexts and AI use cases.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI"},
      {"@id": "urn:ngm:class:ai-governance-maturity-model", "label": "AI Governance Maturity Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-risk", "label": "AI Risk"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:reliability", "label": "Reliability"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards-organization", "label": "Standards Organization"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The NIST AI Risk Management Framework is a voluntary US federal guidance framework for managing AI-related risks throughout the AI lifecycle. It organises risk management activity into four functions—Govern, Map, Measure, and Manage—and is designed to be applied flexibly across industries and AI system types.
- ### Relationships
  - NIST AI RMF is a subtype of [[AI Governance Framework]] and provides structured guidance for [[AI Risk Management]]. It supports [[AI Safety]], [[Fairness]], [[Transparency]], and [[Reliability]] as trustworthy AI properties. The framework enables systematic [[Risk Assessment]] and drives [[Accountability]] mechanisms. It complements [[AI Governance]] frameworks internationally and aligns with the characteristics promoted by [[Trustworthy AI]] initiatives. Organisations using the framework can progress along the [[AI Governance Maturity Model]] scale.
- ### Content
  - Published by NIST in January 2023, the AI RMF emerged from a multi-year, multi-stakeholder development process involving government, industry, academia, and civil society. Its development was mandated by the National AI Initiative Act of 2020, and it reflects extensive public input across numerous workshops and comment periods. The result is a consensus-based framework that balances practical applicability with aspirational standards for responsible AI.

  - The framework's four core functions structure AI risk management practice. **Govern** establishes organisational policies, accountability structures, and culture for AI risk management. **Map** identifies AI risks, contexts, and impacted stakeholders. **Measure** analyses and evaluates identified risks using quantitative and qualitative methods. **Manage** involves prioritising and addressing identified risks through mitigation, transfer, acceptance, or avoidance. Together these create a continuous risk management cycle rather than a one-time compliance exercise.

  - A companion document, the AI RMF Playbook, provides practical guidance, suggested actions, and references for implementing each function. NIST has also developed sector-specific profiles—starting with generative AI—that tailor the framework to particular AI application contexts. This extensibility makes the AI RMF a living framework that can evolve alongside the rapid development of AI technology.

  - The framework explicitly addresses seven characteristics of trustworthy AI: accountable and transparent; explainable and interpretable; fair with harmful bias managed; privacy-enhanced; reliable and safe; resilient; and secure and resilient. These characteristics serve as a unifying vocabulary connecting risk management practices to the values and properties that organisations and society expect from AI systems.

  - The AI RMF has significant international influence. It is referenced in AI governance discussions worldwide and serves as a reference point for aligning US AI policy with frameworks like the EU AI Act and ISO AI standards. Its voluntary nature distinguishes it from regulatory mandates but enables rapid adoption and iteration, positioning NIST as a key actor in the emerging global AI governance landscape.
