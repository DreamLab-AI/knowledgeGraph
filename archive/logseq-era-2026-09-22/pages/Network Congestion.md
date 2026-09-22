public:: true

# Network Congestion
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:network-congestion", "@type":"Page", "title":"Network Congestion", "vc:slug":"network-congestion", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-congestion",
  "@type": "Class",
  "label": "Network Congestion",
  "definition": "Network congestion is the state in which the demand for a network's processing capacity exceeds its available throughput, causing transactions to queue and confirmation times and fees to rise. On a blockchain it occurs when the volume of pending transactions outstrips the space available in upcoming blocks, filling the mempool and triggering competitive fee bidding. Congestion exposes the scalability limits of a system and is a primary driver of fee market dynamics and layer-2 adoption. It is both a symptom of demand and a constraint that shapes protocol design.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:transaction-pool",
      "label": "Transaction Pool"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:block-time",
        "label": "Block Time"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:fee-market",
        "label": "Fee Market"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fee-market",
        "label": "Fee Market"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
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
- Network congestion is the state in which demand for capacity exceeds available throughput, queuing transactions and pushing up fees. On a [[Blockchain]] it manifests as a saturated [[Mempool]] and rising [[Gas Fee]] and [[Transaction Fee]] driven by the [[Fee Market]].
- ### Overview
- Blocks have finite space, and a network can only finalise a bounded number of transactions per unit of [[Block Time]]. When submissions exceed that rate, the backlog grows.
- Users compete for inclusion by raising fees, so congestion translates directly into higher costs and slower confirmations.
- Persistent congestion is the clearest signal that a network has hit its [[Scalability]] ceiling.
- ### Mechanisms
- Mempool accumulation: unconfirmed transactions accumulate while block producers select the highest-fee ones first.
- Fee escalation: the [[Fee Market]] clears excess demand by pricing block space dynamically.
- Backpressure: congestion propagates to dependent applications, causing failed or stuck transactions.
- ### Key aspects
- Throughput limits set by block size and [[Block Time]] determine the onset of congestion.
- Fee volatility is a direct consequence, harming user experience and predictability.
- Mitigations include scaling the base layer, batching, and offloading to layer-2 systems.
- ### Applications
- Fee estimation and transaction scheduling in wallets.
- Capacity planning and protocol upgrades targeting [[Scalability]].
- Triggering migration of activity to rollups and other off-chain execution.
- ### Relationships
- dependsOn:: [[Scalability]]
- dependsOn:: [[Block Time]]
- enables:: [[Fee Market]]
- partOf:: [[Blockchain]]
- requires:: [[Scalability]]
- uses:: [[Mempool]]
- supports:: [[Transaction Fee]]
- bridgesTo:: [[Gas Fee]]
- relatedTo:: [[Transaction]]
- contrastsWith:: [[Scalability]]
- ### Provenance
- updated:: 2026-06-15
