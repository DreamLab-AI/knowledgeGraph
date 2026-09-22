public:: true

# Instant Payment

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:instant-payment", "@type":"Page", "title":"Instant Payment", "vc:slug":"instant-payment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:instant-payment",
  "@type": "Class",
  "label": "Instant Payment",
  "definition": "Instant payment refers to a funds transfer that is settled and made available to the recipient within seconds, rather than the minutes, hours or days typical of traditional clearing systems. On blockchain networks this is commonly achieved through payment channel networks such as the Lightning Network, which route transactions off-chain to avoid base-layer confirmation latency, or through purpose-built low-latency settlement layers. Instant payment is a key usability requirement for point-of-sale and micropayment use cases, where users expect confirmation comparable to card payments.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-system",
      "label": "Payment System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lightning",
        "label": "Lightning"
      },
      {
        "@id": "urn:ngm:class:breez",
        "label": "Breez"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Instant payment refers to a funds transfer that is settled and made available to the recipient within seconds, rather than the minutes, hours or days typical of traditional clearing systems. On blockchain networks this is commonly achieved through payment channel networks such as the Lightning Network, which route transactions off-chain to avoid base-layer confirmation latency, or through purpose-built low-latency settlement layers. Instant payment is a key usability requirement for point-of-sale and micropayment use cases, where users expect confirmation comparable to card payments.
- ### Relationships
	- partOf:: [[Payment System]]
	- relatedTo:: [[Lightning]]
	- relatedTo:: [[Breez]]
