public:: true

# FATF Guidance on Virtual Assets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fatf-guidance-on-virtual-assets",
  "@type": "Page",
  "vc:slug": "fatf-guidance-on-virtual-assets",
  "title": "FATF Guidance on Virtual Assets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fatf-guidance-on-virtual-assets",
  "@type": "Class",
  "label": "FATF Guidance on Virtual Assets",
  "definition": "The FATF Guidance on Virtual Assets is the Financial Action Task Force's risk-based interpretation of how its anti-money-laundering standards apply to virtual assets and virtual-asset service providers (VASPs). It defines key terms, requires VASP licensing or registration and supervision, and introduces the 'travel rule' obliging the transfer of originator and beneficiary information with transactions. The guidance shapes how exchanges, custodians, and DeFi arrangements are regulated worldwide.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The FATF Guidance on Virtual Assets applies AML/CFT standards to crypto markets, defining VASP obligations and the travel rule that directly affect [[Decentralized Finance (DeFi)]] and the design of [[CBDCs]]. It is a key instrument of [[Financial Regulation]] for digital assets.
- ### Content
  - The guidance extends customer due diligence, recordkeeping, and suspicious-transaction reporting to virtual-asset activity, while the travel rule requires VASPs to share counterparty identity data. Its application to fully decentralised protocols remains contested, since the absence of an identifiable intermediary complicates the VASP definition and enforcement.
