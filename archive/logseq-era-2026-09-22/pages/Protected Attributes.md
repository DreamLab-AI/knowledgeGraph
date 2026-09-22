public:: true

# Protected Attributes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:protected-attributes",
  "@type": "Page",
  "vc:slug": "protected-attributes",
  "title": "Protected Attributes",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:protected-attributes",
  "@type": "Class",
  "label": "Protected Attributes",
  "definition": "Protected attributes are personal characteristics, such as race, gender, age, disability, or religion, that are legally or ethically safeguarded against discriminatory treatment in automated decision-making systems. Fairness metrics and bias mitigation techniques use protected attributes as the basis for measuring whether a model's predictions differ systematically across groups defined by those characteristics. Handling protected attributes correctly, including deciding whether to use them directly or as held-out variables for auditing, is central to building fair and legally compliant machine learning systems.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:fairness-metrics",
      "label": "Fairness Metrics"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Protected attributes are personal characteristics, such as race, gender, age, disability, or religion, that are legally or ethically safeguarded against discriminatory treatment in automated decision-making systems. Fairness metrics and bias mitigation techniques use protected attributes as the basis for measuring whether a model's predictions differ systematically across groups defined by those characteristics. Handling protected attributes correctly, including deciding whether to use them directly or as held-out variables for auditing, is central to building fair and legally compliant machine learning systems.
