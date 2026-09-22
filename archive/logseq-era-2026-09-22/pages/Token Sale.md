public:: true

# Token Sale
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-token-sale",
  "@type": "Page",
  "vc:slug": "token-sale",
  "title": "Token Sale",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-sale",
  "@type": "Class",
  "label": "Token Sale",
  "definition": "A Token Sale is a fundraising mechanism in which a blockchain project issues and sells digital tokens to investors or users in exchange for cryptocurrency or fiat currency, typically prior to or during the launch of a protocol or application. Token sales include initial coin offerings (ICOs), initial exchange offerings (IEOs), and initial DEX offerings (IDOs), each with differing levels of regulatory oversight and platform involvement. The proceeds are used to fund development, while purchasers receive tokens that may grant utility, governance rights, or speculative value within the ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:bc-token-and-asset", "label": "Token and Asset"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - A Token Sale is a blockchain-based fundraising event in which digital tokens are issued and sold to participants, granting them utility, governance rights, or economic exposure within the issuing protocol or application.
