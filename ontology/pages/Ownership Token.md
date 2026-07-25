public:: true

# Ownership Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ownership-token",
  "@type": "Page",
  "vc:slug": "ownership-token",
  "title": "Ownership Token",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ownership-token",
  "@type": "Class",
  "label": "Ownership Token",
  "definition": "An Ownership Token is a blockchain token that represents and confers title to an underlying asset, whether digital or real-world. Typically implemented as a non-fungible or semi-fungible token, holding it in a wallet constitutes provable control of the represented item, and transferring it transfers ownership. Ownership tokens enable trading, collateralization, and programmable rights over digital goods and tokenized property.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-goods", "label": "Digital Goods"},
      {"@id": "urn:ngm:class:digital-real-estate", "label": "Digital Real Estate"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Ownership Token is a blockchain token conferring title to an underlying asset, used to represent ownership of [[Digital Goods]] and [[Digital Real Estate]].
- ### Content
  - Usually a non-fungible or semi-fungible token, possession in a wallet equates to provable control, and its transfer transfers ownership. This makes ownership tokens the unit through which digital and tokenized real-world assets are traded, collateralized, and granted programmable rights.
