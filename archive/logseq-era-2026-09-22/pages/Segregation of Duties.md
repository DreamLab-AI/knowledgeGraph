public:: true

# Segregation of Duties
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:segregation-of-duties",
  "@type": "Page",
  "vc:slug": "segregation-of-duties",
  "title": "Segregation of Duties",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:segregation-of-duties",
  "@type": "Class",
  "label": "Segregation of Duties",
  "definition": "Segregation of duties is an internal control principle that divides critical tasks among multiple people so that no single individual can both execute and conceal an error or fraud. It separates responsibilities such as authorisation, custody, recording, and reconciliation. It is a core requirement of financial, security, and compliance control frameworks.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Segregation of duties is the control principle of splitting conflicting responsibilities; it is required by and forms part of a [[Compliance Control]] framework.
- ### Content
  - Effective implementation maps roles to incompatible function pairs and enforces them through access control, approval workflows, and dual authorisation. Where staffing is limited, compensating controls such as independent review or monitoring substitute, and access certifications periodically detect toxic role combinations.
