public:: true

# Splicing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:splicing",
  "@type": "Page",
  "title": "Splicing",
  "vc:slug": "splicing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:splicing",
  "@type": "Class",
  "label": "Splicing",
  "definition": "Splicing is a Lightning Network operation that resizes an existing payment channel by adding or removing on-chain funds without closing and reopening it, preserving the channel's state and routing history. A splice-in increases capacity by committing additional bitcoin, while a splice-out withdraws funds to an on-chain address, both executed through a single funding transaction. This keeps the channel continuously available and reduces the on-chain cost and downtime of channel management.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-channel",
      "label": "Payment Channel"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:core-lightning",
        "label": "Core Lightning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:on-chain-transaction",
        "label": "On-Chain Transaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
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
  - Splicing is a Lightning Network operation that resizes an existing payment channel by adding or removing on-chain funds without closing and reopening it, preserving the channel's state and routing history. A splice-in increases capacity by committing additional bitcoin, while a splice-out withdraws funds to an on-chain address, both executed through a single funding transaction. This keeps the channel continuously available and reduces the on-chain cost and downtime of channel management.
  - Related core concepts: [[Payment Channel]] [[Lightning Network]] [[Core Lightning]] [[Liquidity]] [[Bitcoin]]
- ### Overview
  - Splicing improves Lightning channel liquidity management by allowing capacity changes in place. Without it, a node operator wanting more or less capacity must close a channel and open a new one, incurring two on-chain transactions and a period of unavailability. Splicing merges the change into one transaction while the channel remains usable, smoothing the boundary between on-chain and off-chain funds.
- ### Mechanisms
  - Splice-in commits additional on-chain bitcoin to expand channel capacity
  - Splice-out withdraws channel funds to an on-chain address
  - A single funding transaction replaces the close-and-reopen cycle
  - Channel state and routing history are preserved across the resize
  - The channel remains usable while the splice transaction confirms
- ### Applications
  - Rebalancing and resizing Lightning channels without downtime
  - Moving funds between on-chain and channel liquidity efficiently
  - Reducing on-chain fees and disruption of channel management
  - Supporting flexible liquidity provision for routing nodes
- ### Relationships
  - relatedTo:: [[Payment Channel]]
  - relatedTo:: [[Lightning Network]]
  - relatedTo:: [[Core Lightning]]
  - supports:: [[Liquidity]]
  - supports:: [[Payment Channel]]
  - implements:: [[Payment Channel]]
  - uses:: [[On-Chain Transaction]]
  - uses:: [[Bitcoin]]
  - requires:: [[On-Chain Transaction]]
  - requires:: [[Bitcoin]]
  - enables:: [[Liquidity]]
  - bridgesTo:: [[On-Chain Transaction]]
  - partOf:: [[Lightning Network]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
