```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:ai-governance-principle",
  "title": "Ai Governance Principle",
  "vc:slug": "ai-governance-principle",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-governance-principle",
  "@type": "Class",
  "label": "Ai Governance Principle",
  "definition": "A normative rule or guideline that shapes the design, development, deployment, and oversight of AI systems to ensure they remain safe, fair, transparent, and accountable. AI governance principles operationalise ethical commitments into actionable standards, informing policy frameworks such as the OECD AI Principles and the EU AI Act, and guiding organisational decision-making throughout the AI lifecycle.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "quality": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"}
    ]
  }
}
```

## Ai Governance Principle

Ai Governance Principle is a foundational concept that serves as a taxonomy parent for related classes in the artificial intelligence domain.

- ### Relationships
  - hasPart [[AI Safety]]
  - hasPart [[Fairness]]
  - hasPart [[Transparency]]
  - enables [[AI Governance Framework]]
  - enables [[Accountability]]
  - relatedTo [[AI Alignment]]
