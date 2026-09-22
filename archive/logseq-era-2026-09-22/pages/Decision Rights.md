public:: true

# Decision Rights
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decision-rights",
  "@type": "Page",
  "vc:slug": "decision-rights",
  "title": "Decision Rights",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-rights",
  "@type": "Class",
  "label": "Decision Rights",
  "definition": "Decision rights are the formally allocated authorities that determine who may make, approve, or veto a given class of decisions within an organisation or governance system. They specify the mapping between roles or stakeholders and the scope of choices they control, forming the backbone of accountability. Clear decision rights reduce ambiguity, prevent conflicting actions, and enable auditable governance.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Decision rights define which actor holds authority over each category of decision, anchoring accountability within a [[Governance Domain]]. A [[Governance Framework]] implements them by assigning approval, veto, and escalation powers to specific roles.
- ### Content
  - In practice decision rights are encoded in RACI matrices, charters, or on-chain permission schemes. Well-specified rights minimise deadlock and shadow decision-making, while poorly drawn ones create gaps or overlaps that erode trust and slow execution.
