public:: true

# Regulatory Licence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:regulatory-licence",
  "@type": "Page",
  "vc:slug": "regulatory-licence",
  "title": "Regulatory Licence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:regulatory-licence",
  "@type": "Class",
  "label": "Regulatory Licence",
  "definition": "A regulatory licence is a specific, often named permission issued by a financial supervisor that authorises an entity to carry out a defined regulated activity such as issuing e-money or operating as a payment institution. It binds the holder to ongoing conditions including capital adequacy, reporting, and conduct rules. For stablecoin issuers, the appropriate licence determines whether the token may legally be offered to the public.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stablecoin-regulation", "label": "Stablecoin Regulation"},
      {"@id": "urn:ngm:class:stable-coins", "label": "Stable Coins"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A regulatory licence is the named authorisation a supervisor grants for a defined financial activity, a binding requirement under [[Stablecoin Regulation]] for issuers of [[Stablecoins]].
- ### Content
  - Licence categories such as e-money institution, payment institution, or money transmitter carry distinct capital, safeguarding, and reporting obligations. Holders must maintain the conditions of their licence continuously, and operating without the correct one exposes issuers to enforcement and product withdrawal.
