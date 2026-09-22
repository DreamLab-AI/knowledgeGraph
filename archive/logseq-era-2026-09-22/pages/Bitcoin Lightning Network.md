public:: true

# Bitcoin Lightning Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e69997fc25c5b4d394af396b9d7610d2e9026f33007e500720f5a4dd3ada7ef3",
  "@type": "Page",
  "vc:slug": "bitcoin-lightning-network",
  "title": "Bitcoin Lightning Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:htlc",
      "vc:label": "HTLC"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:multisignature",
      "vc:label": "Multisignature"
    },
    {
      "@id": "urn:visionflow:linked:micropayments",
      "vc:label": "Micropayments"
    },
    {
      "@id": "urn:visionflow:linked:instant-settlement",
      "vc:label": "Instant Settlement"
    },
    {
      "@id": "urn:visionflow:linked:bc-defi-and-economics",
      "vc:label": "Payment Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:liquid-network",
      "vc:label": "Liquid Network"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitcoin Lightning Network"
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
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network",
  "@type": "Class",
  "label": "Bitcoin Lightning Network",
  "definition": "The Bitcoin Lightning Network is a layer-two payment protocol built on top of Bitcoin that enables fast, low-cost transactions through bidirectional payment channels. Two parties lock funds in a multisignature channel and exchange signed balance updates off-chain, settling the final state on the Bitcoin blockchain only when the channel closes. Payments can be routed across a network of connected channels, allowing transfers between parties that do not share a direct channel.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:bc-protocol-and-consensus",
    "label": "Protocol and Consensus"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:htlc",
        "label": "HTLC"
      },
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:channel-factory",
        "label": "Channel Factory"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
      },
      {
        "@id": "urn:ngm:class:segregated-witness",
        "label": "Segregated Witness"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:micropayments",
        "label": "Micropayments"
      },
      {
        "@id": "urn:ngm:class:instant-settlement",
        "label": "Instant Settlement"
      },
      {
        "@id": "urn:ngm:class:streaming-payments",
        "label": "Streaming Payments"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:channel-liquidity",
        "label": "Channel Liquidity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bolt-specifications",
        "label": "BOLT Specification"
      },
      {
        "@id": "urn:ngm:class:source-routing",
        "label": "Source Routing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "Ethereum State Channels"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bc-defi-and-economics",
        "label": "DeFi and Economics"
      },
      {
        "@id": "urn:ngm:class:liquid-network",
        "label": "Liquid Network"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:routing-algorithm",
        "label": "Routing Algorithm"
      },
      {
        "@id": "urn:ngm:class:watchtower-service",
        "label": "Watchtower Service"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    },
    {
      "@id": "urn:ngm:class:ln-protocol",
      "label": "LN Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitcoin-lightning-network:245fe8a8d207",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e69997fc25c5b4d394af396b9d7610d2e9026f33007e500720f5a4dd3ada7ef3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HTLC]]",
      "resolved": "urn:visionflow:linked:htlc",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multisignature]]",
      "resolved": "urn:visionflow:linked:multisignature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Micropayments]]",
      "resolved": "urn:visionflow:linked:micropayments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Instant Settlement]]",
      "resolved": "urn:visionflow:linked:instant-settlement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Systems Domain]]",
      "resolved": "urn:visionflow:linked:bc-defi-and-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquid Network]]",
      "resolved": "urn:visionflow:linked:liquid-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
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
  - The Bitcoin Lightning Network is a layer-two payment protocol built on top of Bitcoin that enables fast, low-cost transactions through bidirectional payment channels. Two parties lock funds in a multisignature channel and exchange signed balance updates off-chain, settling the final state on the Bitcoin blockchain only when the channel closes. Payments can be routed across a network of connected channels, allowing transfers between parties that do not share a direct channel.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinLightningNetwork
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Payment Systems Domain]], [[Liquid Network]]
  - has-part:: [[Payment Channel]], [[HTLC]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]], [[Multisignature]]
  - enables:: [[Micropayments]], [[Instant Settlement]]

- ### Content
  - The protocol addresses Bitcoin's limited base-layer throughput by moving most transactions off-chain. A payment channel is opened with an on-chain funding transaction, after which the parties can update their respective balances many times by exchanging signed transactions, none of which is broadcast until settlement.
  - Routing uses hashed time-locked contracts, which let a payment pass through intermediate nodes without those nodes being able to steal the funds. Each hop is conditioned on revealing a cryptographic secret within a time window, so either the whole path completes or the funds revert to their senders.
  - Lightning trades some of the base layer's strong settlement guarantees for speed and cost, introducing considerations such as channel liquidity, routing reliability and the need for nodes to remain online to defend against outdated channel states. It is the most widely deployed approach to scaling Bitcoin payments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
