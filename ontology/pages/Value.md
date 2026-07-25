public:: true

# Value
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b644280d8ecd35bd487b67cb9e404deacf1fec65288e403b19746ed66d5dee0",
  "@type": "Page",
  "vc:slug": "value",
  "title": "Value",
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
      "vc:value": "AI-0844"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Value"
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
  "@id": "urn:ngm:class:value",
  "@type": "Class",
  "label": "Value",
  "definition": "In the AI domain, a principle, preference, or objective that guides the behaviour and optimisation targets of an intelligent system. Values encode what outcomes a system should pursue or avoid, underpinning alignment research, reward function design, and ethical AI. They range from measurable utility metrics to abstract normative principles such as fairness, human dignity, and autonomy.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:value-alignment", "label": "Value Alignment"},
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:human-centred-values", "label": "Human Centred Values"},
      {"@id": "urn:ngm:class:democratic-values", "label": "Democratic Values"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reward-function", "label": "Reward Function"},
      {"@id": "urn:ngm:class:preference-learning", "label": "Preference Learning"},
      {"@id": "urn:ngm:class:human-preference", "label": "Human Preference"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:value:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b644280d8ecd35bd487b67cb9e404deacf1fec65288e403b19746ed66d5dee0"
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
  - Value is a concept within the ai domain.
- ### Semantic Classification
  - owl-class:: artificial-intelligence:Value
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  Value — content pending enrichment.
- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
