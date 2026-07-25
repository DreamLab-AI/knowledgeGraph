public:: true

# Fiat On-Ramp
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fiat-on-ramp",
  "@type": "Page",
  "vc:slug": "fiat-on-ramp",
  "title": "Fiat On-Ramp",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fiat-on-ramp",
  "@type": "Class",
  "label": "Fiat On-Ramp",
  "definition": "A fiat on-ramp is a service or integration that lets users convert government-issued currency into cryptocurrency, typically via bank transfer, card payment, or other traditional payment rails connected to an exchange or wallet. It handles identity verification, payment processing, and currency conversion so that users without existing crypto holdings can enter blockchain ecosystems. Fiat on-ramps are commonly embedded in custodial wallets and centralised exchanges such as Kraken to lower the barrier to first-time cryptocurrency acquisition.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:fiat-currency",
      "label": "Fiat Currency"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - A fiat on-ramp is a service or integration that lets users convert government-issued currency into cryptocurrency, typically via bank transfer, card payment, or other traditional payment rails connected to an exchange or wallet. It handles identity verification, payment processing, and currency conversion so that users without existing crypto holdings can enter blockchain ecosystems. Fiat on-ramps are commonly embedded in custodial wallets and centralised exchanges such as Kraken to lower the barrier to first-time cryptocurrency acquisition.
