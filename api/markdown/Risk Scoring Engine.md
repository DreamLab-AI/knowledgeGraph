public:: true

# Risk Scoring Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-scoring-engine",
  "@type": "Page",
  "vc:slug": "risk-scoring-engine",
  "title": "Risk Scoring Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-scoring-engine",
  "@type": "Class",
  "label": "Risk Scoring Engine",
  "definition": "A risk scoring engine is a software component that computes a numerical risk score for an entity, transaction, or session by combining multiple weighted signals through rules or models. In compliance and identity systems it quantifies how likely an action is fraudulent or non-compliant, feeding thresholds that trigger review, blocking, or escalation. The score provides a consistent, tunable basis for automated decisions.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Infrastructure Security and Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}, {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A risk scoring engine computes weighted risk scores driving automated decisions, forming part of [[Compliance Monitoring]] and [[Identity Verification]] systems.
- ### Content
  - Signals are normalised, weighted, and combined into a score compared against configurable thresholds. Tuning weights and cut-offs lets operators trade off false positives against missed risk, while logged scores support audit and model refinement.
