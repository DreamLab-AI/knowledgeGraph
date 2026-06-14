public:: true

# Fairness Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fairness-assessment",
  "@type": "Page",
  "vc:slug": "fairness-assessment",
  "title": "Fairness Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fairness-assessment",
  "@type": "Class",
  "label": "Fairness Assessment",
  "definition": "Fairness assessment is the systematic evaluation of whether an AI or machine-learning system produces equitable outcomes across protected groups and individuals. It quantifies disparities using metrics such as demographic parity, equalised odds, and predictive parity, often computed from confusion-matrix statistics segmented by subgroup. The results inform mitigation, auditing, and governance decisions about model deployment.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:confusion-matrix", "label": "Confusion Matrix"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Fairness assessment measures whether a model's predictions are equitable across groups, frequently deriving group-conditioned error rates from a [[Confusion Matrix]]. It is a core practice within the [[AI Governance Domain]] and broader [[AI Governance and Ethics]].
- ### Content
  - Practitioners select fairness criteria appropriate to the use case (group versus individual fairness, error-rate balance versus calibration) knowing that several definitions are mutually incompatible. Assessments combine quantitative metrics with qualitative review of data provenance and societal context, feeding into bias mitigation, documentation, and accountability obligations.
