public:: true

# Unspent Transaction Output

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:unspent-transaction-output",
  "@type": "Page",
  "title": "Unspent Transaction Output",
  "vc:slug": "unspent-transaction-output",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unspent-transaction-output",
  "@type": "Class",
  "label": "Unspent Transaction Output",
  "definition": "An Unspent Transaction Output (UTXO) is a discrete amount of cryptocurrency that has been received by an address and not yet spent, forming the fundamental accounting unit in UTXO-based blockchains such as Bitcoin. Each transaction consumes one or more existing UTXOs as inputs and creates new UTXOs as outputs, with the global set of all UTXOs representing the current ledger state. Validating a transaction requires confirming that its referenced inputs exist in the UTXO set and have not already been spent, which is central to preventing double spending.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-transaction",
      "label": "Blockchain Transaction"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:account-model",
        "label": "Account Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:double-spending",
        "label": "Double Spending"
      },
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Unspent Transaction Output]] is a unit of a [[Blockchain Transaction]].
  - It is the core model used by [[Bitcoin]].
  - Spending requires a valid [[Digital Signature]].
  - It prevents [[Double Spending]] through [[Transaction Validation]].
- ### Overview
  - The UTXO set is the authoritative record of who owns what on the chain.
  - Inputs reference prior outputs; outputs become new spendable UTXOs.
  - Nodes maintain the UTXO set in memory for fast validation.
  - UTXOs contrast with the account-balance model used by chains like Ethereum.
- ### Mechanisms
  - Each UTXO carries a value and a locking script defining spend conditions.
  - Inputs unlock UTXOs by satisfying their script with signatures.
  - Change is returned as a new UTXO back to the spender.
  - Coin selection algorithms choose which UTXOs to consume.
  - Validation rejects transactions referencing non-existent or spent outputs.
- ### Applications
  - Bitcoin and Bitcoin-derived ledger accounting.
  - Lightweight wallet balance computation.
  - Privacy techniques such as coin mixing operating over discrete outputs.
  - Parallel transaction validation enabled by independent UTXOs.
- ### Relationships
  - partOf:: [[Blockchain Transaction]]
  - partOf:: [[Ledger]]
  - uses:: [[Digital Signature]]
  - uses:: [[Merkle Tree]]
  - requires:: [[Transaction Validation]]
  - requires:: [[Digital Signature]]
  - dependsOn:: [[Consensus Mechanism]]
  - dependsOn:: [[Transaction Validation]]
  - enables:: [[Wallet]]
  - supports:: [[Transaction Validation]]
  - contrastsWith:: [[Account Model]]
  - relatedTo:: [[Bitcoin]]
  - relatedTo:: [[Double Spending]]
  - relatedTo:: [[Mining]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Blockchain]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
