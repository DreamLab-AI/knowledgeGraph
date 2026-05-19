public:: true

# Model Evaluation Results
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c52ce19217be2cb5780b86c85a2236d99aa5030c77d4ec30137fc8807b4255fb",
  "@type": "Page",
  "vc:slug": "model-evaluation-results",
  "title": "Model Evaluation Results",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:model-architecture",
      "vc:label": "ModelArchitecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-4008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Evaluation Results"
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
  "@id": "urn:ngm:class:model-evaluation-results",
  "@type": "Class",
  "label": "Model Evaluation Results",
  "definition": "A model eresults component in the Artificial Intelligence domain that required by AiModelCard.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:model-evaluation-results:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c52ce19217be2cb5780b86c85a2236d99aa5030c77d4ec30137fc8807b4255fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[ModelArchitecture]]",
      "resolved": "urn:visionflow:owl:class:model-architecture",
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
  - A model evaluation results component in the Artificial Intelligence domain that required by AiModelCard.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelEvaluationResults
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[ModelArchitecture]]

- ### Content
  ModelEvaluationResults — content pending enrichment.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
