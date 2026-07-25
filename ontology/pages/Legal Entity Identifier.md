public:: true

# Legal Entity Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:legal-entity-identifier",
  "@type": "Page",
  "vc:slug": "legal-entity-identifier",
  "title": "Legal Entity Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:legal-entity-identifier",
  "@type": "Class",
  "label": "Legal Entity Identifier",
  "definition": "A Legal Entity Identifier (LEI) is a 20-character alphanumeric code, standardised as ISO 17442, that uniquely identifies a legally distinct entity participating in financial transactions. It is issued by accredited Local Operating Units under the Global LEI System and carries reference data on the entity's ownership and registration. LEIs enable counterparty transparency and are increasingly required for regulatory and trade reporting.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}, {"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Legal Entity Identifier is the ISO 17442 code that uniquely names a legal entity, supplying the counterparty reference data that [[Regulatory Reporting]] and the [[Travel Rule]] depend upon.
- ### Content
  - LEI reference data distinguishes "who is who" and "who owns whom", letting regulators aggregate exposures across markets. Adoption is driven by mandates such as MiFID II and emerging crypto travel-rule obligations that require identifying transacting institutions.
