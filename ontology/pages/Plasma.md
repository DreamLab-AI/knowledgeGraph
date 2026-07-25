public:: true

# Plasma

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:plasma", "@type":"Page", "title":"Plasma", "vc:slug":"plasma", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:plasma",
  "@type": "Class",
  "label": "Plasma",
  "definition": "Plasma is a blockchain scaling framework that builds hierarchical chains of child ledgers anchored to a root chain, processing transactions off the main chain while periodically committing compact state commitments to it. Users retain the ability to exit a child chain back to the root chain by submitting fraud proofs, which preserves the security guarantees of the underlying ledger even if a child chain operator misbehaves. It was an early Layer 2 design that influenced later optimistic and rollup-based scaling approaches.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:layer-2-protocol",
      "label": "Layer-2 Protocol"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralization",
        "label": "Decentralization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
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
- [[Plasma]] is a [[Blockchain]] scaling framework that creates child chains anchored to a root chain, executing transactions off-chain and committing periodic state roots back to the main ledger. It enables [[Scalability]] while preserving exit guarantees, and is often compared with [[Rollup]] and [[Sidechain]] designs on [[Ethereum]].
- ### Overview
- Plasma organises ledgers as a tree, with a root chain at the top and child (Plasma) chains beneath it.
- Child chains process the bulk of transactions and submit succinct commitments, reducing load on the root chain.
- Security derives from the root chain: users can withdraw funds by proving fraud or by exiting if an operator censors or withholds data.
- The design predated and informed the development of optimistic rollups, which moved transaction data on-chain to address Plasma's data availability limitations.
- ### Key aspects
- Hierarchical chains: a root chain coordinates many child chains arranged in a tree.
- Fraud proofs: invalid state transitions can be challenged and reverted on the root chain.
- Mass exits: users can collectively withdraw to the root chain if a child chain becomes unsafe.
- Data availability: a known limitation is reliance on operators to publish child-chain data.
- ### Applications
- High-throughput payment networks settling on a secure base layer.
- Application-specific child chains for games or marketplaces with frequent transactions.
- Historical reference design for evaluating modern Layer 2 trade-offs.
- ### Relationships
- subClassOf:: [[Blockchain]]
- contrastsWith:: [[Rollup]]
- contrastsWith:: [[Sidechain]]
- dependsOn:: [[Ethereum]]
- enables:: [[Scalability]]
- supports:: [[Scalability]]
- uses:: [[Consensus]]
- bridgesTo:: [[Ethereum]]
- relatedTo:: [[Scalability]]
- relatedTo:: [[Ethereum]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
