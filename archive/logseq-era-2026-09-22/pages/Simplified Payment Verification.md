public:: true

# Simplified Payment Verification

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:simplified-payment-verification",
  "@type": "Page",
  "title": "Simplified Payment Verification",
  "vc:slug": "simplified-payment-verification",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:simplified-payment-verification",
  "@type": "Class",
  "label": "Simplified Payment Verification",
  "definition": "Simplified Payment Verification (SPV) is a technique that lets a lightweight client confirm that a transaction is included in a blockchain without downloading the entire chain, by holding only block headers and requesting a Merkle proof linking the transaction to a header's Merkle root. Described in the original Bitcoin design, it trades the full validation guarantees of a complete node for drastically reduced storage and bandwidth, relying on the proof-of-work in headers and the honest-majority assumption. It is what makes mobile and embedded cryptocurrency wallets practical.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:block-header",
        "label": "Block Header"
      },
      {
        "@id": "urn:ngm:class:merkle-proof",
        "label": "Merkle Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:merkle-root",
        "label": "Merkle Root"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:light-client",
        "label": "Light Client"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:light-node",
        "label": "Light Node"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:full-node",
        "label": "Full Node"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-node",
        "label": "Blockchain Node"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:bloom-filter",
        "label": "Bloom Filter"
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
	- [[Simplified Payment Verification]] lets a [[Light Client]] confirm a transaction's inclusion in a [[Blockchain]] using only [[Block Header]]s and a [[Merkle Proof]].
	- It avoids downloading the full chain by trusting proof-of-work and verifying a path to the [[Merkle Root]].
- ### Overview
	- An SPV client stores the chain of block headers rather than every transaction, a tiny fraction of the full ledger.
	- To check a payment, it obtains a Merkle proof — the sibling hashes connecting the transaction to the Merkle root committed in a block header.
	- The presence of that header in the longest valid header chain, backed by accumulated proof-of-work, gives probabilistic assurance the transaction is confirmed.
- ### Mechanisms
	- Header synchronisation: the client validates header proof-of-work and linkage.
	- Merkle path verification: recomputing hashes up the [[Merkle Tree]] to match the root.
	- Bloom filters (BIP 37) historically let SPV wallets request relevant transactions while preserving some privacy.
- ### Applications
	- Mobile and embedded cryptocurrency wallets.
	- Resource-constrained or IoT blockchain clients.
	- Cross-chain bridges and light-client relays.
- ### Relationships
	- dependsOn:: [[Block Header]]
	- dependsOn:: [[Merkle Proof]]
	- uses:: [[Merkle Tree]]
	- uses:: [[Merkle Root]]
	- implements:: [[Light Client]]
	- enables:: [[Light Node]]
	- enables:: [[Scalability]]
	- supports:: [[Bitcoin]]
	- contrastsWith:: [[Full Node]]
	- partOf:: [[Blockchain Node]]
	- relatedTo:: [[UTXO Model]]
	- relatedTo:: [[Bloom Filter]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
