public:: true

# Control Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:control-framework",
  "@type": "Page",
  "vc:slug": "control-framework",
  "title": "Control Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-framework",
  "@type": "Class",
  "label": "Control Framework",
  "definition": "A control framework is a structured set of governance, risk, and compliance controls that an organisation adopts to manage risk and demonstrate conformance to regulatory or industry requirements. Examples include NIST CSF, COBIT, ISO 27001, and SOC 2, each mapping objectives to specific control activities and evidence. It provides a common reference for designing, operating, and auditing controls consistently.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:compliance", "label": "Compliance Domain"}, {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance Domain"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A control framework is a structured catalogue of GRC controls used across the [[Compliance Domain]] and the [[Regulatory Compliance Domain]] to manage risk and evidence conformance.
- ### Content
  - Frameworks such as NIST CSF, ISO 27001, COBIT, and SOC 2 map control objectives to concrete activities, owners, and audit evidence. Organisations select and tailor a framework, then operate and continuously assess its controls, often cross-mapping multiple frameworks to satisfy overlapping obligations efficiently.
