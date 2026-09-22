public:: true

# BOLT12 Offers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bolt12-offers",
  "@type": "Page",
  "vc:slug": "bolt12-offers",
  "title": "BOLT12 Offers",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bolt12-offers",
  "@type": "Class",
  "label": "BOLT12 Offers",
  "definition": "BOLT12 Offers is a Lightning Network specification defining reusable, static payment requests called offers, improving on single-use BOLT11 invoices. An offer is a long-lived, shareable code from which payers fetch a fresh invoice on demand via onion messages, enabling recurring payments, refunds, and donation links without a server issuing each invoice. It also improves privacy through blinded paths that hide the recipient's node identity.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - BOLT12 Offers extends the [[Lightning Network]] with reusable, static payment offers that replace single-use invoices and add recipient privacy.
- ### Content
  - Unlike BOLT11 invoices, an offer is a durable code that payers use to request a fresh invoice through onion messages, supporting recurring and refundable payments. Blinded paths conceal the destination node, so offers can be published openly without revealing where funds ultimately settle.
