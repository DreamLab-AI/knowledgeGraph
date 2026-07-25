public:: true

# Transaction Validation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:905f3743b7932010b162d4a5e9afa0b4dfda369af1afe74ca41eb75eaa5a47ae",
  "@type": "Page",
  "vc:slug": "transaction-validation",
  "title": "Transaction Validation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:transaction",
      "vc:label": "Transaction"
    },
    {
      "@id": "urn:visionflow:linked:consensus",
      "vc:label": "Consensus"
    },
    {
      "@id": "urn:visionflow:linked:https-developer-bitcoin-org-devguide-transactions-html",
      "vc:label": "https://developer.bitcoin.org/devguide/transactions.html"
    },
    {
      "@id": "urn:visionflow:linked:https-en-bitcoin-it-wiki-protocol-rules",
      "vc:label": "https://en.bitcoin.it/wiki/Protocol_rules"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Transaction Validation"
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
  "@id": "urn:ngm:class:transaction-validation",
  "@type": "Class",
  "label": "Transaction Validation",
  "definition": "Transaction validation is the process by which network participants check that a blockchain transaction conforms to the protocol rules before accepting it. It ensures only valid transactions enter the ledger by verifying signatures, input availability, and compliance with consensus rules.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:consensus",
    "label": "Consensus"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:unspent-transaction-output",
        "label": "Unspent Transaction Output"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:finality",
        "label": "Blockchain Finality"
      },
      {
        "@id": "urn:ngm:class:double-spend-prevention",
        "label": "Double-Spend Prevention"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-signature-verification",
        "label": "Signature Verification"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:block-production",
        "label": "Block Production"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:full-node",
        "label": "Full Node"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Decentralised Ledger"
      },
      {
        "@id": "urn:ngm:class:trustless-system",
        "label": "Trustless System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Ledger"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      },
      {
        "@id": "urn:ngm:class:payment-settlement",
        "label": "Payment Settlement"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:transaction-propagation",
        "label": "Transaction Propagation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transaction-verification",
      "label": "Transaction Verification"
    },
    {
      "@id": "urn:ngm:class:transaction-confirmation",
      "label": "Transaction Confirmation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:transaction-validation:189763f3f148",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:905f3743b7932010b162d4a5e9afa0b4dfda369af1afe74ca41eb75eaa5a47ae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction]]",
      "resolved": "urn:visionflow:linked:transaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus]]",
      "resolved": "urn:visionflow:linked:consensus",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://developer.bitcoin.org/devguide/transactions.html]]",
      "resolved": "urn:visionflow:linked:https-developer-bitcoin-org-devguide-transactions-html",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.bitcoin.it/wiki/Protocol_rules]]",
      "resolved": "urn:visionflow:linked:https-en-bitcoin-it-wiki-protocol-rules",
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
  - Transaction validation is the process by which network participants check that a blockchain transaction conforms to the protocol rules before accepting it. It ensures only valid transactions enter the ledger.

- ### Semantic Classification
  - owl-class:: blockchain:TransactionValidation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Consensus]]
  - bridges-to:: [[Transaction]]
  - requires:: [[Cryptography]]
  - enables:: [[Bitcoin Network]]

- ### Content
  - Transaction validation checks that a transaction's signatures are correct, that it spends only existing and unspent outputs, and that it follows the protocol's consensus rules. Nodes reject transactions that fail any check.
  - Validation is performed independently by each full node, which is what allows a decentralised network to agree on a shared ledger without trusting a central party. Miners and validators include only valid transactions in the blocks they produce.

- ### Provenance
  - sources:: [[https://developer.bitcoin.org/devguide/transactions.html]], [[https://en.bitcoin.it/wiki/Protocol_rules]]
  - migration-date:: 2026-05-29T00:00:00Z
