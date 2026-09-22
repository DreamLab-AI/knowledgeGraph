public:: true

# Algorithmic Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:algorithmic-governance",
  "@type": "Page",
  "vc:slug": "algorithmic-governance",
  "title": "Algorithmic Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:algorithmic-governance",
  "@type": "Class",
  "label": "Algorithmic Governance",
  "definition": "Algorithmic Governance is the use of automated decision systems, models, and rule engines to make or enforce governance choices that were traditionally human and discretionary, such as moderation, resource allocation, or compliance enforcement. It can increase consistency, speed, and scale, but raises concerns about transparency, accountability, bias, and contestability of automated decisions. The concept spans platform moderation, public-sector automation, and on-chain rule enforcement.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-society-surveillance", "label": "Digital Society Surveillance"},
      {"@id": "urn:ngm:class:decentralised-coordination", "label": "Decentralised Coordination"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Algorithmic Governance applies automated systems to governance decisions and enforcement. It enables forms of [[Digital Society Surveillance]] and intersects with [[Decentralised Coordination]] where rules are enforced by code rather than institutions.
- ### Content
  - Implementations range from content-moderation classifiers and welfare-eligibility scoring to smart-contract rule execution. Key tensions are the opacity of model-driven decisions, difficulty of appeal, and the risk that encoded rules entrench bias; mitigations include auditability, explainability requirements, and human-in-the-loop review.
