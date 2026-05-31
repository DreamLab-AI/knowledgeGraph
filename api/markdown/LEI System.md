public:: true

# LEI System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lei-system",
  "@type": "Page",
  "vc:slug": "lei-system",
  "title": "LEI System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lei-system",
  "@type": "Class",
  "label": "LEI System",
  "definition": "The LEI System is the Global Legal Entity Identifier System, a federated infrastructure overseen by the GLEIF that issues, maintains, and publishes Legal Entity Identifiers and their reference data. It comprises a Regulatory Oversight Committee, accredited Local Operating Units, and an open global directory queryable by anyone. The system provides a single authoritative source for identifying legal entities in financial markets.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Infrastructure Legal and Regulatory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:legal-entity-identifier", "label": "Legal Entity Identifier"}, {"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The LEI System is the GLEIF-governed global infrastructure that issues and publishes the [[Legal Entity Identifier]], providing the authoritative directory consumed by [[Regulatory Reporting]] workflows.
- ### Content
  - Local Operating Units validate entity data and issue codes against ISO 17442, while the GLEIF maintains the consolidated global file and enforces data quality. Open, free access to the directory lets regulators and counterparties verify identities without proprietary intermediaries.
