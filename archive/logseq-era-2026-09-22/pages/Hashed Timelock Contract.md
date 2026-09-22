public:: true

# Hashed Timelock Contract

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:hashed-timelock-contract",
  "@type": "Page",
  "title": "Hashed Timelock Contract",
  "vc:slug": "hashed-timelock-contract",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hashed-timelock-contract",
  "@type": "Class",
  "label": "Hashed Timelock Contract",
  "definition": "A Hashed Timelock Contract (HTLC) is a conditional payment construct that locks funds until either a recipient reveals a preimage matching a published hash, or a timeout elapses and the funds revert to the sender. By combining a hashlock with a timelock, it enables trustless, atomic transfers without a central intermediary. HTLCs are the foundational primitive behind Lightning Network payment routing and cross-chain atomic swaps.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:core-lightning",
        "label": "Core Lightning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      }
    ],
    "contrastsWith": [
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
- A [[Hashed Timelock Contract]] locks funds behind a hashlock and a timelock: a payee claims by revealing a preimage that matches a [[Hash Function]] output, otherwise the payer reclaims after the timeout. It is the routing primitive of the [[Lightning Network]] and underlies the [[Atomic Swap]].
- ### Overview
- The contract encodes two escape conditions. The first releases funds to the recipient on disclosure of a secret; the second returns funds to the sender once a deadline passes, guaranteeing no money is stranded.
- Because revealing the preimage on one hop necessarily exposes it to the previous hop, a chain of HTLCs lets a multi-hop payment settle atomically: either every hop completes or the whole route unwinds.
- The same hashlock can be deployed on two different blockchains, allowing parties to swap assets across chains without trusting an intermediary, the basis of cross-chain atomic swaps.
- ### Mechanisms
- Hashlock: funds are released only against a preimage matching the committed hash.
- Timelock: an absolute or relative deadline returns funds to the payer if unclaimed.
- Atomic chaining: cascading preimage revelation settles a [[Payment Channel]] route end to end.
- Scripting: implemented as a [[Smart Contract]] or Bitcoin script enforcing the conditions on-chain.
- ### Applications
- Routing payments across the [[Lightning Network]] and the [[Core Lightning]] implementation.
- Executing trustless cross-chain swaps supporting [[Cross-Chain Interoperability]].
- Conditional escrow where settlement depends on revealing a secret.
- Layered atop [[Bitcoin]] and other UTXO chains as a payment-channel building block.
- ### Relationships
- partOf:: [[Lightning Network]]
- relatedTo:: [[Atomic Swap]]
- relatedTo:: [[Payment Channel]]
- relatedTo:: [[Cross-Chain Interoperability]]
- requires:: [[Hash Function]]
- requires:: [[Smart Contract]]
- uses:: [[Hash Function]]
- enables:: [[Atomic Swap]]
- enables:: [[Payment Channel]]
- supports:: [[Lightning Network]]
- supports:: [[Core Lightning]]
- implements:: [[Smart Contract]]
- dependsOn:: [[Hash Function]]
- bridgesTo:: [[Cross-Chain Interoperability]]
- contrastsWith:: [[Bitcoin]]
- ### Provenance
- updated:: 2026-06-15
