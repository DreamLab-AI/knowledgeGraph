public:: true

# On-Chain Transaction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:on-chain-transaction",
  "@type": "Page",
  "title": "On-Chain Transaction",
  "vc:slug": "on-chain-transaction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-chain-transaction",
  "@type": "Class",
  "label": "On-Chain Transaction",
  "definition": "An on-chain transaction is a value or state transfer that is broadcast to a blockchain network, validated by consensus, and permanently recorded in a block on the shared ledger. Because settlement occurs through the network's consensus mechanism, on-chain transactions inherit the chain's security, immutability, and public verifiability, but also its latency, throughput limits, and fee costs. They contrast with off-chain and layer-two approaches that defer or aggregate ledger updates to improve scalability.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-transaction",
      "label": "Blockchain Transaction"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:block",
        "label": "Block"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
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
	- An [[On-Chain Transaction]] is a [[Blockchain Transaction]] that is recorded directly in a [[Block]] on a [[Distributed Ledger]].
	- It is finalised through the network's [[Consensus]] mechanism rather than off the main chain.
	- It inherits the chain's immutability and public verifiability at the cost of fees and latency.
- ### Overview
	- The transaction is signed by the sender, propagated to peers, and held in the [[Mempool]] until a validator includes it in a block.
	- Once mined or attested, it consumes [[Gas]] or fees and contributes to the chain's settlement guarantees.
	- [[Finality]] determines when the transaction is considered irreversible.
- ### Mechanisms
	- Construct and sign the transaction with the sender's private key.
	- Broadcast to the peer-to-peer network and enter the [[Mempool]].
	- Validators order and include it in a [[Block]] subject to [[Consensus]].
	- The state transition is applied to the shared [[Ledger]] and replicated to all nodes.
- ### Applications
	- Native asset transfers on [[Bitcoin]] and [[Ethereum]].
	- Deploying and invoking a [[Smart Contract]] whose effects must be globally verifiable.
	- Final [[Settlement]] of value where trust-minimised guarantees are required.
- ### Relationships
	- partOf:: [[Distributed Ledger]]
	- requires:: [[Consensus]]
	- requires:: [[Gas]]
	- uses:: [[Block]]
	- uses:: [[Mempool]]
	- dependsOn:: [[Finality]]
	- enables:: [[Settlement]]
	- contrastsWith:: [[State Channel]]
	- contrastsWith:: [[Rollup]]
	- relatedTo:: [[Smart Contract]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
