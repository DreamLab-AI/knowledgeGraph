public:: true

# SegWit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e64efc54617e9cce559e60a9977a50758f974e31555c9c282a2770f589159eae",
  "@type": "Page",
  "vc:slug": "seg-wit",
  "title": "SegWit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:taproot",
      "vc:label": "Taproot"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-protocol",
      "vc:label": "Bitcoin Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SegWit"
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
  "@id": "urn:ngm:class:seg-wit",
  "@type": "Class",
  "label": "SegWit",
  "definition": "Segregated Witness (SegWit) is a Bitcoin protocol upgrade (BIP141/BIP143/BIP144) that moves witness data (signatures and scripts) into a separate structure outside the traditional transaction serialisation, eliminating transaction malleability, introducing a weight-based block-size accounting system, and enabling second-layer protocols such as the Lightning Network and subsequent upgrades such as Taproot.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:bitcoin-protocol",
    "label": "Bitcoin Protocol"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-protocol",
        "label": "Bitcoin Protocol"
      },
      {
        "@id": "urn:ngm:class:bitcoin-improvement-proposal",
        "label": "Bitcoin Improvement Proposal"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:witness-data",
        "label": "Witness Data"
      },
      {
        "@id": "urn:ngm:class:witness-discount",
        "label": "Witness Discount"
      },
      {
        "@id": "urn:ngm:class:block-weight",
        "label": "Block Weight"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:soft-fork",
        "label": "Soft Fork"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:cross-chain-atomic-swap",
        "label": "Cross-Chain Atomic Swap"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work",
        "label": "Bitcoin Proof-of-Work"
      },
      {
        "@id": "urn:ngm:class:unspent-transaction-output",
        "label": "Unspent Transaction Output"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bip141",
        "label": "BIP141"
      },
      {
        "@id": "urn:ngm:class:bip143",
        "label": "BIP143"
      },
      {
        "@id": "urn:ngm:class:bip144",
        "label": "BIP144"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transaction-malleability-fix",
        "label": "Transaction Malleability Fix"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-digital-signature-algorithm",
        "label": "Elliptic Curve Digital Signature Algorithm"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin-scalability",
        "label": "Bitcoin Scalability"
      },
      {
        "@id": "urn:ngm:class:on-chain-throughput",
        "label": "On-Chain Throughput"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bitcoin-core",
        "label": "Bitcoin Core"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:block-size-increase",
        "label": "Block Size Increase"
      },
      {
        "@id": "urn:ngm:class:bitcoin-cash",
        "label": "Bitcoin Cash"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:layer-2-protocol",
        "label": "Layer-2 Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction-throughput",
        "label": "Transaction Throughput"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:segregated-witness",
      "label": "Segregated Witness"
    },
    {
      "@id": "urn:ngm:class:bip141",
      "label": "BIP141"
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
  "@id": "urn:visionflow:annotation:link-resolutions:seg-wit:b3e29ae57aef",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e64efc54617e9cce559e60a9977a50758f974e31555c9c282a2770f589159eae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Taproot]]",
      "resolved": "urn:visionflow:linked:taproot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin-protocol",
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
  - Segregated Witness is a Bitcoin protocol upgrade that moves signature data into a separate witness structure, fixing transaction malleability and increasing block capacity.

- ### Semantic Classification
  - owl-class:: blockchain:SegWit
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Protocol]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Bitcoin Script]]
  - enables:: [[Lightning Network]], [[Taproot]]

- ### Content
  - SegWit separates the witness, which holds signatures, from the rest of a transaction. Because the transaction identifier no longer depends on the signature data, third parties can no longer alter it in ways that change the identifier.
  - Removing this malleability made reliable off-chain protocols such as the Lightning Network practical. SegWit also introduced a weight-based accounting that effectively raised block capacity and prepared the ground for the later Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
