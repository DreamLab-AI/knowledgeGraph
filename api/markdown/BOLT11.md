public:: true

# BOLT11
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ca481047fed10a1d2027591b6d7dfbec20ab078455a702afb3a48c8b02b72889",
  "@type": "Page",
  "vc:slug": "bolt-11",
  "title": "BOLT11",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bolt",
      "vc:label": "BOLT"
    },
    {
      "@id": "urn:visionflow:linked:lightning",
      "vc:label": "Lightning"
    },
    {
      "@id": "urn:visionflow:linked:bolt-12",
      "vc:label": "BOLT12"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-lightning-bolts-blob-master-11-payment-encoding-md",
      "vc:label": "https://github.com/lightning/bolts/blob/master/11-payment-encoding.md"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bolt-11-org",
      "vc:label": "https://www.bolt11.org"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BOLT11"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bolt-11",
  "@type": "Class",
  "label": "BOLT11",
  "definition": "BOLT11 is the Lightning Network specification for the invoice format used to request a single payment. It encodes payment amount, payment hash, description, expiry, and optional routing hints into a bech32-encoded string that the payer scans or pastes to initiate an off-chain payment.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bolt",
      "label": "BOLT"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bolt",
        "label": "BOLT"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:payment-preimage",
        "label": "Payment Preimage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning",
        "label": "Lightning"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hashed Time-Lock Contract"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:payment-request",
        "label": "Payment Request"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:secp256k1",
        "label": "Secp256k1"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA256"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:point-of-sale",
        "label": "Point of Sale"
      },
      {
        "@id": "urn:ngm:class:qr-code",
        "label": "QR Code"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:lightning-network-specification",
        "label": "Lightning RFC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bolt-12",
        "label": "BOLT12"
      },
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lightning-invoice",
      "label": "Lightning Invoice"
    },
    {
      "@id": "urn:ngm:class:ln-invoice",
      "label": "LN Invoice"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bolt-11:0a2c6a25ab7d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ca481047fed10a1d2027591b6d7dfbec20ab078455a702afb3a48c8b02b72889"
  },
  "vc:resolutions": [
    {
      "raw": "[[BOLT]]",
      "resolved": "urn:visionflow:linked:bolt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning]]",
      "resolved": "urn:visionflow:linked:lightning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BOLT12]]",
      "resolved": "urn:visionflow:linked:bolt-12",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://github.com/lightning/bolts/blob/master/11-payment-encoding.md]]",
      "resolved": "urn:visionflow:linked:https-github-com-lightning-bolts-blob-master-11-payment-encoding-md",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.bolt11.org]]",
      "resolved": "urn:visionflow:linked:https-www-bolt-11-org",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - BOLT11 is the Lightning Network specification for the invoice format used to request a single payment. It encodes payment details into a string that the payer scans or pastes.

- ### Semantic Classification
  - owl-class:: blockchain:BOLT11
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[BOLT]]
  - bridges-to:: [[BOLT12]]
  - requires:: [[BOLT]]
  - enables:: [[Lightning]]

- ### Content
  - BOLT11 defines how a Lightning invoice is encoded, including the amount, a payment hash, a description, and routing hints. The invoice is typically a single-use request that the payer uses to send a specific payment.
  - Wallets generate and parse BOLT11 invoices to receive and send payments. The format is widely supported across implementations, and its single-use nature led to the later BOLT12 offers format for reusable requests.

- ### Provenance
  - sources:: [[https://github.com/lightning/bolts/blob/master/11-payment-encoding.md]], [[https://www.bolt11.org]]
  - migration-date:: 2026-05-29T00:00:00Z
