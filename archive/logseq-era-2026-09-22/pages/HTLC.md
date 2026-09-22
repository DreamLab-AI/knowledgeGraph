public:: true

# HTLC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b596c4b39aa6ee2b70977154e8e3833786d79dfc9b7d508a25e8a20ba4d8786a",
  "@type": "Page",
  "vc:slug": "htlc",
  "title": "HTLC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HTLC"
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
  "@id": "urn:ngm:class:htlc",
  "@type": "Class",
  "label": "HTLC",
  "definition": "A Hashed Time-Locked Contract is a conditional payment construct that releases funds when a preimage is revealed before a deadline, otherwise refunding the sender. It combines a cryptographic hash commitment with an on-chain timeout to achieve trustless conditional transfer across untrusted intermediaries.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:smart-contract",
    "label": "Smart Contract"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:preimage",
        "label": "Preimage"
      },
      {
        "@id": "urn:ngm:class:timelock",
        "label": "Timelock"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:conditional-payment",
        "label": "Conditional Payment"
      },
      {
        "@id": "urn:ngm:class:trustless-escrow",
        "label": "Trustless Escrow"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:payment-channel-network",
        "label": "Payment Channel Network"
      },
      {
        "@id": "urn:ngm:class:layer-2-protocol",
        "label": "Layer-2 Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:escrow-system",
        "label": "Trusted Escrow"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:payment-routing",
        "label": "Payment Routing"
      },
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:payment-network",
        "label": "Payment Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:hashed-time-locked-contract",
      "label": "Hashed Time-Locked Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:htlc:ef8c49cab8ca",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b596c4b39aa6ee2b70977154e8e3833786d79dfc9b7d508a25e8a20ba4d8786a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
  - A Hashed Time-Locked Contract is a conditional payment construct that releases funds when a preimage is revealed before a deadline, otherwise refunding the sender.

- ### Semantic Classification
  - owl-class:: blockchain:HTLC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Bitcoin Script]]
  - requires:: [[Hash Function]]
  - enables:: [[Lightning Network]], [[Payment Channel]]

- ### Content
  - An HTLC locks an output behind two conditions: knowledge of a value whose hash matches a stored commitment, and a time limit. The recipient claims the funds by revealing the preimage, while the sender can reclaim them once the timeout elapses.
  - Because the same hash preimage can unlock contracts across multiple hops, HTLCs enable atomic routing of payments through chains of intermediaries. They are a building block of the Lightning Network and of cross-chain atomic swaps.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
