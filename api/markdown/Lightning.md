public:: true

# Lightning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13236e97f8f0eedf2ef4328373fa74c2448d8fa83453d1bc484b4d0a6c181764",
  "@type": "Page",
  "vc:slug": "lightning",
  "title": "Lightning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:bolt",
      "vc:label": "BOLT"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:https-lightning-network",
      "vc:label": "https://lightning.network"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-lightning-bolts",
      "vc:label": "https://github.com/lightning/bolts"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Lightning"
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
  "@id": "urn:ngm:class:lightning",
  "@type": "Class",
  "label": "Lightning",
  "definition": "Lightning is a layer-two payment protocol built on Bitcoin that uses payment channels to enable fast, low-cost transactions off the main chain. It settles to the Bitcoin blockchain.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bolt",
        "label": "BOLT"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      },
      {
        "@id": "urn:ngm:class:instant-payment",
        "label": "Instant Payment"
      },
      {
        "@id": "urn:ngm:class:streaming-payment",
        "label": "Streaming Payment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:payment-routing",
        "label": "Payment Routing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:channel-factory",
        "label": "Channel Factory"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bolt",
        "label": "BOLT"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      },
      {
        "@id": "urn:ngm:class:ethereum-layer-2",
        "label": "Ethereum Layer 2"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:watchtower",
        "label": "Watchtower"
      },
      {
        "@id": "urn:ngm:class:splicing",
        "label": "Splicing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lightning-network-protocol",
      "label": "Lightning Network Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lightning:01db71ab8048",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13236e97f8f0eedf2ef4328373fa74c2448d8fa83453d1bc484b4d0a6c181764"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BOLT]]",
      "resolved": "urn:visionflow:linked:bolt",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://lightning.network]]",
      "resolved": "urn:visionflow:linked:https-lightning-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/lightning/bolts]]",
      "resolved": "urn:visionflow:linked:https-github-com-lightning-bolts",
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
  - Lightning is a layer-two payment protocol built on Bitcoin that uses payment channels to enable fast, low-cost transactions off the main chain. It settles to the Bitcoin blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:Lightning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Layer 2 Scaling]]
  - requires:: [[Payment Channel]], [[Bitcoin Network]]
  - enables:: [[BOLT]]

- ### Content
  - Lightning enables two parties to open a payment channel funded by an on-chain transaction, then exchange many payments off-chain by updating the channel balance. Channels connect into a network so that payments can route between parties who lack a direct channel.
  - Only the opening and closing of channels are recorded on the Bitcoin blockchain, which keeps fees low and confirmation fast for the payments in between. The protocol is specified through the BOLT documents.

- ### Provenance
  - sources:: [[https://lightning.network]], [[https://github.com/lightning/bolts]]
  - migration-date:: 2026-05-29T00:00:00Z
