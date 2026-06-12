public:: true

# Bitcoin ETF Custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-etf-custody",
  "@type": "Page",
  "vc:slug": "bitcoin-etf-custody",
  "title": "Bitcoin ETF Custody",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-etf-custody",
  "@type": "Class",
  "label": "Bitcoin ETF Custody",
  "definition": "Bitcoin ETF custody is the institutional safekeeping of the bitcoin backing a spot exchange-traded fund, performed by qualified custodians under regulatory and audit requirements. It typically uses cold storage with multi-signature or multi-party-computation key management, segregation of client assets, insurance, and proof-of-reserves attestation. This custody model bridges traditional regulated finance and on-chain asset control, and is central to the integrity of spot Bitcoin ETFs.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi-Sig Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Bitcoin ETF custody is the regulated, institutional safekeeping of the bitcoin backing a spot ETF, commonly enforced through [[Multi-Sig Governance]] over cold-storage keys.
- ### Content
  - Qualified custodians segregate fund assets, hold keys in geographically distributed cold storage, and publish reserve attestations. Multi-signature and MPC schemes ensure no single operator can move funds, satisfying the security and compliance demands of issuers and regulators.
