public:: true

# Anonymisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:anonymisation",
  "@type": "Page",
  "vc:slug": "anonymisation",
  "title": "Anonymisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anonymisation",
  "@type": "Class",
  "label": "Anonymisation",
  "definition": "Anonymisation is the process of transforming data so that individuals can no longer be identified, directly or by inference, while preserving enough utility for analysis. Techniques include suppression, generalization, pseudonymisation, k-anonymity, differential privacy, and the blurring or synthetic replacement of faces and identifiers in media. Effective anonymisation must resist re-identification through linkage with auxiliary data.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:face-swap", "label": "Face Swap"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Anonymisation strips or obscures identifying information so data subjects cannot be recognized. Image techniques overlap with [[Face Swap]] when faces are replaced rather than blurred, and the practice is a core capability of the [[Privacy Domain]].
- ### Content
  - Methods trade privacy against utility: aggregation and generalization reduce granularity, differential privacy adds calibrated noise with formal guarantees, and synthetic substitution replaces real identifiers with realistic fakes. The persistent risk is re-identification by linking quasi-identifiers to external datasets, so strong anonymisation is evaluated against realistic attacker models rather than assumed from naive masking.
