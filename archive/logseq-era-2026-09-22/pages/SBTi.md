public:: true

# SBTi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sbti",
  "@type": "Page",
  "vc:slug": "sbti",
  "title": "SBTi",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sbti",
  "@type": "Class",
  "label": "SBTi",
  "definition": "The Science Based Targets initiative (SBTi) is a body that defines and validates corporate greenhouse-gas reduction targets against climate science, specifically the goal of limiting warming to 1.5C. It publishes sector-specific methodologies and independently certifies that company targets are consistent with the Paris Agreement. SBTi validation has become a widely referenced benchmark in ESG reporting.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:science-based-targets", "label": "Science Based Targets"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - SBTi is the organisation that validates corporate climate targets against scientific decarbonisation pathways, and its certified [[Science-Based Targets]] are frequently cited in [[ESG Reporting]].
- ### Content
  - SBTi provides criteria, tools, and a review process covering scope 1, 2, and increasingly scope 3 emissions, plus a separate net-zero standard. Validation signals credibility to investors and regulators, distinguishing science-aligned commitments from unsubstantiated net-zero pledges.
