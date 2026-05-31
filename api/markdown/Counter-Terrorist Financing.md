public:: true

# Counter-Terrorist Financing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:counter-terrorist-financing",
  "@type": "Page",
  "vc:slug": "counter-terrorist-financing",
  "title": "Counter-Terrorist Financing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:counter-terrorist-financing",
  "@type": "Class",
  "label": "Counter-Terrorist Financing",
  "definition": "Counter-Terrorist Financing (CTF or CFT) is a set of legal, regulatory, and operational measures designed to detect, prevent, and disrupt the funding of terrorist activities. It complements anti-money-laundering regimes and is enforced through obligations such as customer due diligence, transaction monitoring, and reporting of suspicious activity. In digital assets, CTF underpins requirements like the FATF Travel Rule that mandate originator and beneficiary information for transfers.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Counter-Terrorist Financing comprises the controls that obligated institutions apply to stop funds reaching terrorist actors. It is operationalised in crypto by mechanisms such as the [[Travel Rule]], which requires sharing of counterparty data on transfers.
- ### Content
  - CTF frameworks derive from FATF recommendations and national statutes, layering risk-based due diligence, sanctions screening, and suspicious-activity reporting. For virtual asset service providers, compliance increasingly depends on protocol-level data-sharing tools that attach identity attestations to on-chain or off-chain transfers without breaking settlement.
