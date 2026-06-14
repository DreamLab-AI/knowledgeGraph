public:: true

# Nakamoto 2008 Bitcoin Whitepaper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57e697b0eac44ab6eb15c2bbd2fd63b4b820c921f76f22417ca6a09cbeb761be",
  "@type": "Page",
  "vc:slug": "nakamoto-2008-bitcoin-whitepaper",
  "title": "Nakamoto 2008 Bitcoin Whitepaper",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-work",
      "vc:label": "Proof of Work"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:nakamoto-2008-bitcoin-a-peer-to-peer-electronic-cash-system",
      "vc:label": "Nakamoto 2008, Bitcoin: A Peer-to-Peer Electronic Cash System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Nakamoto 2008 Bitcoin Whitepaper"
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
  "@id": "urn:ngm:class:nakamoto-2008-bitcoin-whitepaper",
  "@type": "Class",
  "label": "Nakamoto 2008 Bitcoin Whitepaper",
  "definition": "The Nakamoto 2008 Bitcoin Whitepaper, titled Bitcoin: A Peer-to-Peer Electronic Cash System, is the founding document of Bitcoin, published in October 2008 under the pseudonym Satoshi Nakamoto. It describes a system for electronic payments that allows two parties to transact directly without a trusted intermediary, solving the double-spending problem through a proof-of-work timestamp server. The paper introduces a public chain of blocks secured by computational work, where the longest valid chain represents the agreed transaction history. It established the conceptual basis for cryptocurrencies and decentralised consensus.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:blockchain",
    "label": "Blockchain"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:timestamp-server",
        "label": "Timestamp Server"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:decentralised-consensus",
        "label": "Decentralised Consensus"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:trustless-transaction",
        "label": "Trustless Transaction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nakamoto-consensus",
        "label": "Nakamoto Consensus"
      },
      {
        "@id": "urn:ngm:class:longest-chain-rule",
        "label": "Longest Chain Rule"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-payment-system",
        "label": "Centralised Payment System"
      },
      {
        "@id": "urn:ngm:class:trusted-third-party",
        "label": "Trusted Third Party"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:double-spending-problem",
        "label": "Double-Spending Problem"
      },
      {
        "@id": "urn:ngm:class:mining-incentive",
        "label": "Mining Incentive"
      },
      {
        "@id": "urn:ngm:class:51-percent-attack",
        "label": "51% Attack"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-a-peer-to-peer-electronic-cash-system",
      "label": "Bitcoin: A Peer-to-Peer Electronic Cash System"
    },
    {
      "@id": "urn:ngm:class:satoshi-nakamoto-whitepaper",
      "label": "Satoshi Nakamoto Whitepaper"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nakamoto-2008-bitcoin-whitepaper:dc3b7c2dbad3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57e697b0eac44ab6eb15c2bbd2fd63b4b820c921f76f22417ca6a09cbeb761be"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Work]]",
      "resolved": "urn:visionflow:linked:proof-of-work",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Nakamoto 2008, Bitcoin: A Peer-to-Peer Electronic Cash System]]",
      "resolved": "urn:visionflow:linked:nakamoto-2008-bitcoin-a-peer-to-peer-electronic-cash-system",
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
  - The Nakamoto 2008 Bitcoin Whitepaper, titled Bitcoin: A Peer-to-Peer Electronic Cash System, is the founding document of Bitcoin, published in October 2008 under the pseudonym Satoshi Nakamoto. It describes a system for electronic payments that allows two parties to transact directly without a trusted intermediary, solving the double-spending problem through a proof-of-work timestamp server. The paper introduces a public chain of blocks secured by computational work, where the longest valid chain represents the agreed transaction history. It established the conceptual basis for cryptocurrencies and decentralised consensus.

- ### Semantic Classification
  - owl-class:: cite:Nakamoto2008
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[UTXO]], [[Cryptographic Hash Function]]
  - enables:: [[Bitcoin Proof-of-Work Protocol]], [[Proof of Work]], [[Blockchain Domain]]

- ### Content
  - The whitepaper frames the central challenge of digital cash as preventing double spending without relying on a trusted third party. Its solution is a peer-to-peer network that timestamps transactions by hashing them into an ongoing chain of proof-of-work, forming a record that cannot be changed without redoing the work.
  - Nakamoto describes how nodes accept the longest chain as authoritative, so honest participants controlling a majority of computational power will outpace any attacker attempting to rewrite history. The document also sketches incentives, with new coins issued to block producers and transaction fees sustaining the network over time.
  - Released in 2008 amid the global financial crisis, the paper launched Bitcoin and, more broadly, the field of decentralised consensus. Its ideas on proof-of-work, chained blocks and economic incentives became the template for a wide range of subsequent blockchain systems.

- ### Provenance
  - sources:: [[Nakamoto 2008, Bitcoin: A Peer-to-Peer Electronic Cash System]]
  - migration-date:: 2026-05-29T00:00:00Z
