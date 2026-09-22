public:: true

# Tokenised Securities
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tokenised-securities",
  "@type": "Page",
  "vc:slug": "tokenised-securities",
  "title": "Tokenised Securities",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokenised-securities",
  "@type": "Class",
  "label": "Tokenised Securities",
  "definition": "Tokenised securities are regulated financial instruments such as equities, bonds, or fund units issued and transferred as blockchain tokens that carry the same legal rights as their traditional counterparts. They embed compliance logic, including transfer restrictions and investor accreditation checks, directly into smart contracts so that securities laws are enforced programmatically at the point of transaction.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"}, {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Regulated securities issued as blockchain tokens carrying the legal rights of their traditional form, with compliance encoded on-chain. Their issuance must satisfy [[Securities Regulation]] and is commonly implemented via [[Enterprise Smart Contracts]].
- ### Content
  - Standards such as ERC-1400 and ERC-3643 add permissioned transfer controls, identity gating, and forced-transfer capabilities required for regulated assets. Tokenisation promises faster settlement, lower issuance cost, and broader access, but is bounded by jurisdictional securities rules and custody requirements.
