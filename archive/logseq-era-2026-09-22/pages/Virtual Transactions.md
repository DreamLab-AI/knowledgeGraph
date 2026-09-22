public:: true

# Virtual Transactions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:virtual-transactions",
  "@type": "Page",
  "vc:slug": "virtual-transactions",
  "title": "Virtual Transactions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:virtual-transactions",
  "@type": "Class",
  "label": "Virtual Transactions",
  "definition": "Virtual transactions are exchanges of value conducted entirely within digital environments, transferring virtual currency, tokens or digital goods between participants. They power in-world economies in games and metaverse platforms and rely on digital payment systems and currencies for settlement. Their integrity depends on secure accounting, fraud prevention and clear ownership semantics.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:virtual-economy", "label": "Virtual Economy"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-payment-system", "label": "Digital Payment System"}, {"@id": "urn:ngm:class:digital-currency", "label": "Digital Currency"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Virtual transactions transfer value within digital environments, settled through a [[Digital Payment System]] and denominated in a [[Digital Currency]].
- ### Content
  - They span purchases of virtual goods, peer-to-peer transfers and marketplace trades. Reliable virtual transactions require atomic settlement, double-spend prevention, balance accounting and audit trails, whether implemented through centralised ledgers or on-chain smart contracts.
