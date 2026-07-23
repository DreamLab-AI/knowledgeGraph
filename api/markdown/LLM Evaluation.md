public:: true

# LLM Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:llm-evaluation",
  "@type": "Page",
  "vc:slug": "llm-evaluation",
  "title": "LLM Evaluation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-23T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:llm-evaluation",
  "@type": "Class",
  "label": "LLM Evaluation",
  "definition": "LLM evaluation is the set of methodologies, benchmarks, and metrics used to assess the capabilities, safety, and reliability of large language models, spanning automated benchmark suites, human preference judgements, and task-specific test harnesses.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-23T00:00:00Z",
    "inferenceRule": "StubForDanglingParent-2026-07-24"
  }
}
```

- ### Definition
  - LLM evaluation is the set of methodologies, benchmarks, and metrics used to assess the capabilities, safety, and reliability of large language models, spanning automated benchmark suites, human preference judgements, and task-specific test harnesses.
