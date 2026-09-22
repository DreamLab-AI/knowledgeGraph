public:: true

# Streaming Payment

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:streaming-payment", "@type":"Page", "title":"Streaming Payment", "vc:slug":"streaming-payment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:streaming-payment",
  "@type": "Class",
  "label": "Streaming Payment",
  "definition": "A Streaming Payment is a continuous, real-time value transfer mechanism enabled by programmable money protocols — particularly Layer 2 payment channel networks such as the Bitcoin Lightning Network — whereby funds flow incrementally over time in proportion to ongoing service consumption rather than in discrete lump-sum transactions. Streaming payments enable pay-per-second, pay-per-byte, or pay-per-computation billing models that align payment precisely with value delivered, eliminating invoicing cycles and reducing counterparty risk. They are foundational to micropayment-based business models for media, APIs, AI inference, bandwidth, and real-time data feeds.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pay-per-use",
        "label": "Pay-Per-Use"
      },
      {
        "@id": "urn:ngm:class:web-monetization",
        "label": "Web Monetization"
      },
      {
        "@id": "urn:ngm:class:machine-to-machine-payments",
        "label": "Machine-to-Machine Payment"
      },
      {
        "@id": "urn:ngm:class:real-time-economy",
        "label": "Real-Time Economy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:streaming-payments",
        "label": "Streaming Payments"
      },
      {
        "@id": "urn:ngm:class:iot-payments",
        "label": "IoT Payments"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:batch-payment",
        "label": "Batch Payment"
      },
      {
        "@id": "urn:ngm:class:subscription-model",
        "label": "Subscription Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:content-monetisation",
        "label": "Content Monetisation"
      },
      {
        "@id": "urn:ngm:class:api-monetisation",
        "label": "API Monetisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Streaming Payment]] is a continuous, time-proportional value transfer built on [[Payment Channel]] technology (principally [[Lightning Network]]), enabling sub-second settlement for ongoing service consumption.
  - Unlike invoice-based or [[Subscription Model]] billing, streaming payments align value transfer precisely with service delivery — paying per second, byte, or inference call.
  - Related to [[Streaming Payments]] (the broader practice), this class focuses on the individual payment primitive and its protocol-level mechanics.

- ### Overview
  - Streaming payments emerged from the Bitcoin Lightning Network's ability to hold open payment channels and route arbitrary sub-satoshi value flows.
  - Interledger Protocol (ILP) generalised the concept across currencies and blockchains for web monetisation.
  - Projects such as Sablier and Superfluid implemented streaming payments on EVM chains using time-weighted token streams.
  - The Web Monetization API (W3C proposal) aimed to integrate streaming payments natively into browsers for creator monetisation.
  - Machine-to-machine (M2M) payment scenarios — IoT sensors paying for data or compute — represent a long-term application horizon.

- ### Key aspects
  - Payment channels lock funds in a 2-of-2 multisig; balances update off-chain in real time without blockchain settlement per transaction.
  - Hash Time-Locked Contracts (HTLCs) secure routed payments across multi-hop channel paths.
  - Granularity: Lightning enables millisatoshi-level precision (1 satoshi = 1,000 millisatoshis).
  - Channel liquidity management is a practical constraint — inbound and outbound capacity must be maintained.
  - EVM streaming protocols (Superfluid) use super-token wrappers with continuously updated balances stored on-chain.

- ### Mechanisms
  - Lightning channel: Alice and Bob sign commitment transactions off-chain; only open and close transactions hit the blockchain.
  - Routing: payments traverse multi-hop paths via HTLC chains; nodes earn routing fees.
  - Superfluid: real-time balance = initial_balance + (flow_rate × elapsed_time); any party can settle on-chain at any moment.
  - ILP: packet-based value transfer using conditional payments with cryptographic fulfilment.

- ### Applications
  - Pay-per-minute podcast and video streaming replacing monthly subscriptions.
  - API metering where callers pay per request to AI inference or data endpoints.
  - Bandwidth markets where routers receive streaming micropayments for relayed traffic.
  - Salary streaming: employees receive wages proportional to hours worked in real time.
  - IoT device-to-device payments for sensor data and compute resources.

- ### Relationships
  - partOf:: [[Programmable Money]]
  - dependsOn:: [[Payment Channel]]
  - dependsOn:: [[Lightning Network]]
  - dependsOn:: [[Smart Contract]]
  - enables:: [[Pay-Per-Use]]
  - enables:: [[Web Monetization]]
  - enables:: [[Machine-to-Machine Payment]]
  - uses:: [[Hash Time-Locked Contract]]
  - relatedTo:: [[Streaming Payments]]
  - relatedTo:: [[Decentralised Finance]]
  - contrastsWith:: [[Subscription Model]]
  - supports:: [[Content Monetisation]]
  - supports:: [[API Monetisation]]

- ### Provenance
  - updated:: 2026-06-15
