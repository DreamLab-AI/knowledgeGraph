public:: true

# Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1e07fbcce03a284f5c68a46bd3e3529c1dba5f866aa3b10b8e2a94baf88d05c7",
  "@type": "Page",
  "vc:slug": "risk",
  "title": "Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0839"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Risk"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk",
  "@type": "Class",
  "label": "Risk",
  "definition": "The potential for an AI system or associated process to cause harm, produce unintended outcomes, or fail to achieve intended goals. Risk in AI encompasses technical failure modes, bias, adversarial vulnerabilities, misuse, and broader societal harms; risk management frameworks characterise likelihood and severity to prioritise mitigations.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:adversarial-attack", "label": "Adversarial Attack"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:algorithmic-bias", "label": "Algorithmic Bias"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-trust-risk-and-security-management", "label": "AI Trust Risk and Security Management"},
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ai-impact-assessment", "label": "AI Impact Assessment"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:risk:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1e07fbcce03a284f5c68a46bd3e3529c1dba5f866aa3b10b8e2a94baf88d05c7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Risk is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Risk
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Risk — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
