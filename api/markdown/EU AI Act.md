public:: true

# EU AI Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eu-ai-act",
  "@type": "Page",
  "vc:slug": "eu-ai-act",
  "title": "EU AI Act",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-ai-act",
  "@type": "Class",
  "label": "EU AI Act",
  "definition": "The EU AI Act (Regulation 2024/1689) is the European Union's comprehensive legal framework for artificial intelligence, establishing harmonised rules for the development, deployment, and use of AI systems based on a risk-tiered classification. It prohibits certain AI practices outright, imposes strict conformity obligations on high-risk AI systems, and mandates transparency for limited-risk AI. Enacted in 2024 and progressively entering into force through 2026–2027, it is the world's first binding horizontal AI regulation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:european-commission", "label": "European Commission"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:conformity-assessment", "label": "Conformity Assessment"},
      {"@id": "urn:ngm:class:notified-body", "label": "Notified Body"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:human-oversight", "label": "Human Oversight"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:prohibited-ai-practice", "label": "Prohibited AI Practice"},
      {"@id": "urn:ngm:class:high-risk-ai-system", "label": "High Risk AI System"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The EU AI Act is the European Union's binding horizontal regulation for artificial intelligence, establishing a risk-based classification system that ranges from prohibited practices through high-risk, limited-risk, and minimal-risk tiers, with proportionate obligations at each level.
- ### Relationships
  - The EU AI Act is a subclass of [[AI Regulation]] and is standardised by the [[European Commission]]. It requires [[Conformity Assessment]], [[Notified Body]] involvement, [[Risk Assessment]], and [[Human Oversight]] mechanisms. It closely relates to [[AI Governance]], [[AI Ethics]], [[AI Risk Management]], [[Prohibited AI Practice]], [[High Risk AI System]], [[Transparency]], and [[Data Protection]]. It enables coherent [[AI Governance Framework]] adoption and drives [[Regulatory Compliance]] obligations across member states and global operators.
- ### Content
  - The EU AI Act (Regulation (EU) 2024/1689), officially published in July 2024 and entering into force in August 2024, represents the first comprehensive, legally binding AI regulation in the world. It applies horizontally across sectors and follows a tiered risk model: unacceptable-risk AI (prohibited outright), high-risk AI (strict pre-market obligations), limited-risk AI (transparency duties), and minimal-risk AI (voluntary codes). The prohibited category includes real-time remote biometric identification in public spaces, social scoring by public authorities, and manipulation techniques that exploit vulnerabilities.

  - High-risk AI systems — covering areas such as critical infrastructure, education, employment, essential services, law enforcement, migration, and administration of justice — must undergo conformity assessment, maintain technical documentation, be registered in an EU database, and implement risk-management systems before market placement. Providers of these systems must also ensure post-market monitoring, incident reporting to national competent authorities, and human oversight capabilities that allow intervention or override.

  - The Act introduces obligations for general-purpose AI (GPAI) models, including large language models, requiring transparency about training data, compliance with copyright law, and — for systemic-risk GPAI models above a compute threshold (initially 10^25 FLOPs) — mandatory adversarial testing, cybersecurity measures, and reporting of serious incidents. This provision directly affects foundation model providers deploying in the EU.

  - Implementation follows a phased timeline: prohibited practices rules applied February 2025; GPAI and governance rules applied August 2025; high-risk system obligations apply from August 2026 (Annex I systems) and August 2027 (Annex II systems). National market surveillance authorities and the European AI Office (established within the Commission) jointly enforce the regulation. Penalties for violations can reach €35 million or 7% of global annual turnover, whichever is higher.

  - The EU AI Act has global significance because it applies to any provider or deployer whose AI output is used within the EU, regardless of where they are established — a Brussels Effect analogous to GDPR. Organisations worldwide are adapting procurement policies, risk registers, and development pipelines to align with its requirements, making it a de facto global benchmark for responsible AI governance as of 2024–2025.
