public:: true

# Legal Wrapper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:legal-wrapper",
  "@type": "Page",
  "vc:slug": "legal-wrapper",
  "title": "Legal Wrapper",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:legal-wrapper",
  "@type": "Class",
  "label": "Legal Wrapper",
  "definition": "A legal wrapper is an off-chain legal entity, such as a foundation, LLC, or association, established to give a DAO or on-chain protocol recognised legal personality. It enables the organisation to enter contracts, hold assets, limit member liability, and interface with regulators while preserving on-chain governance. Jurisdictions like Wyoming (DAO LLC), the Marshall Islands, and the Cayman Islands offer purpose-built wrapper forms.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Governance and Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:dao-tooling", "label": "DAO Tooling"}, {"@id": "urn:ngm:class:enterprise-token-standards", "label": "Enterprise Token Standards"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A legal wrapper is an off-chain entity that grants a DAO legal personality and liability protection; it is a component supplied by [[DAO Tooling]] and a prerequisite for adopting [[Enterprise Token Standards]] in regulated contexts.
- ### Content
  - Without a wrapper, DAO members may face unlimited partnership liability and cannot easily contract with off-chain counterparties. Choices among foundation, LLC, and association forms trade off tax treatment, disclosure, and the degree to which token-holder governance is mirrored in legal control.
