public:: true

# Lies Damn Lies and Statistics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8d16e80cd0ecc86305f6a785b914ff9329859f551841e26a9f48793a3394ca69",
  "@type": "Page",
  "vc:slug": "lies-damn-lies-and-statistics",
  "title": "Lies Damn Lies and Statistics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Lies Damn Lies and Statistics"
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
  "@id": "urn:ngm:class:lies-damn-lies-and-statistics",
  "@type": "Class",
  "label": "Lies Damn Lies and Statistics",
  "definition": "A critical epistemological lens applied to AI benchmark claims, model capability assessments, and statistical presentations that may mislead through selective metrics, dataset contamination, cherry-picked results, or hallucination. The page collects resources and reasoning for evaluating AI performance claims with rigour, highlighting how large language models can generate plausible but false outputs that resemble statistical truth.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:lies-damn-lies-and-statistics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8d16e80cd0ecc86305f6a785b914ff9329859f551841e26a9f48793a3394ca69"
  },
  "vc:resolutions": [
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
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
  - A critical epistemological lens applied to AI benchmark claims, model capability assessments, and statistical presentations that may mislead through selective metrics, dataset contamination, cherry-picked results, or hallucination. The page collects resources and reasoning for evaluating AI performance claims with rigour, highlighting how large language models can generate plausible but false outputs that resemble statistical truth.

- ### Semantic Classification
  - owl-class:: infrastructure:LiesDamnLiesAndStatistics
  - owl-role:: Concept

- ### Relationships
  - relatedTo:: [[Large Language Models]], [[Bias]], [[AI Ethics]]
  - contrastsWith:: [[Natural Language Processing]]

- ### Content
  # Hallucinations
  - [[Large Language Models]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
