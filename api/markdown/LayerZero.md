public:: true

# LayerZero
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:be67ec675c68f8ab775ba8845a66d0ea4e03f9bd5d2306b1cf270b69902c6be3",
  "@type": "Page",
  "vc:slug": "layer-zero",
  "title": "LayerZero",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:oracle",
      "vc:label": "Oracle"
    },
    {
      "@id": "urn:visionflow:linked:relayer",
      "vc:label": "Relayer"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-messaging",
      "vc:label": "Cross-Chain Messaging"
    },
    {
      "@id": "urn:visionflow:linked:omnichain-application",
      "vc:label": "Omnichain Application"
    },
    {
      "@id": "urn:visionflow:linked:bridge",
      "vc:label": "Bridge"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "LayerZero"
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
  "@id": "urn:ngm:class:layer-zero",
  "@type": "Class",
  "label": "LayerZero",
  "definition": "LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain for verifying cross-chain communication.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:blockchain-interoperability",
      "label": "Blockchain Interoperability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:relayer",
        "label": "Relayer"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-messaging",
        "label": "Cross-Chain Messaging"
      },
      {
        "@id": "urn:ngm:class:omnichain-application",
        "label": "Omnichain Application"
      },
      {
        "@id": "urn:ngm:class:cross-chain-governance",
        "label": "Cross-Chain Governance"
      },
      {
        "@id": "urn:ngm:class:token-bridge",
        "label": "Token Bridge"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability Protocol"
      },
      {
        "@id": "urn:ngm:class:message-passing-interface",
        "label": "Message Passing Interface"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:light-node",
        "label": "Ultra Light Node"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction Proof"
      },
      {
        "@id": "urn:ngm:class:block-header",
        "label": "Block Header"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:evm-compatible-blockchain",
        "label": "EVM-Compatible Blockchain"
      },
      {
        "@id": "urn:ngm:class:oracle-network",
        "label": "Decentralized Oracle Network"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      },
      {
        "@id": "urn:ngm:class:nft-bridging",
        "label": "NFT Bridging"
      },
      {
        "@id": "urn:ngm:class:cross-chain-liquidity",
        "label": "Cross-Chain Liquidity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:wormhole",
        "label": "Wormhole"
      },
      {
        "@id": "urn:ngm:class:axelar",
        "label": "Axelar"
      },
      {
        "@id": "urn:ngm:class:ibc",
        "label": "IBC Protocol"
      },
      {
        "@id": "urn:ngm:class:polkadot-xcm",
        "label": "Polkadot XCM"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bridge",
        "label": "Bridge"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Omni Fungible Token"
      },
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Blockchain Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:layerzero-protocol",
      "label": "LayerZero Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:layer-zero:0e4c9beafb79",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:be67ec675c68f8ab775ba8845a66d0ea4e03f9bd5d2306b1cf270b69902c6be3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Oracle]]",
      "resolved": "urn:visionflow:linked:oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[Relayer]]",
      "resolved": "urn:visionflow:linked:relayer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Messaging]]",
      "resolved": "urn:visionflow:linked:cross-chain-messaging",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Omnichain Application]]",
      "resolved": "urn:visionflow:linked:omnichain-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bridge]]",
      "resolved": "urn:visionflow:linked:bridge",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
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
  - LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain for verifying cross-chain communication.

- ### Semantic Classification
  - owl-class:: blockchain:LayerZero
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Bridge]], [[Interoperability]]
  - requires:: [[Oracle]], [[Relayer]], [[Smart Contract]]
  - enables:: [[Cross-Chain Messaging]], [[Omnichain Application]]

- ### Content
  - LayerZero defines lightweight endpoint contracts on each connected chain that applications use to send and receive arbitrary messages. Rather than running a full light client of every chain, it relies on two independent parties, an oracle and a relayer, to supply complementary pieces of evidence about the source-chain transaction.
  - A message is delivered only when the block header reported by the oracle matches the proof supplied by the relayer, so a successful attack would require both parties to collude. Applications can choose their own oracle and relayer, giving them control over the trust assumptions of their cross-chain messaging.
  - The protocol underpins omnichain applications, where a single application maintains consistent state across multiple networks, as well as token bridges and cross-chain governance. Its security model has been the subject of ongoing analysis given the high value typically routed through interoperability infrastructure.

- ### Current Landscape (2026)
  - Following the V2 architecture (live since 29 January 2024) that separates Decentralised Verifier Networks (DVNs) from the Executor layer, LayerZero now connects 165+ blockchains, secures roughly $95bn in assets and is used by 750+ applications as of early 2026.
  - The LayerZero Foundation acquired Stargate: a $110M proposal tabled on 10 August 2025 was approved by Stargate's DAO on 23 August 2025 (~94-95% support), retiring the STG token via a fixed swap (1 STG = 0.08634 ZRO) and consolidating cross-chain liquidity under ZRO.
  - A protocol fee switch was activated in December 2025 (Referendum #3, ~97% in favour), routing messaging fees into ZRO buyback-and-burn; LayerZero entities had deployed $112.7M into ZRO buybacks since September 2025.
  - On 10 February 2026 LayerZero Labs unveiled "Zero" at a "Day Zero" event in New York: a heterogeneous, ZK-plus-Jolt Layer 1 targeting ~2M TPS per zone at ~$0.000001 per transaction, launching Fall 2026 with three zones (general-purpose EVM, privacy payments, institutional trading).
  - Zero arrived with a TradFi backer line-up: Citadel Securities, DTCC, ICE/NYSE, Google Cloud, ARK Invest (Cathie Wood took an advisory board seat) and Tether; on 19 February 2026 CEO Bryan Pellegrino confirmed Zero issues no separate token, keeping ZRO as the sole staking and gas asset.
  - Institutional and payments adoption deepened: Tether's USDt0 has moved $70bn+ via LayerZero, and in March 2026 Worldpay and Global Payments launched an enterprise "Payments DVN" verifying cross-chain payments across nine blockchains including Ethereum and Solana.
  - Open challenges as of 2026 centre on security and centralisation: a $292M bridge exploit reportedly drove $15bn in assets toward Chainlink's CCIP, while critics question whether the institution-led Zero governance model and mandatory-ZRO-gas design compromise permissionless neutrality; ongoing token unlocks (e.g. 25.71M ZRO tranches) continue to pressure supply.

- ### References
  - 1. CoinMarketCap (2026). Latest LayerZero (ZRO) News Update. https://coinmarketcap.com/cmc-ai/layerzero/latest-updates/
  - 2. 0xProcessing (2026). LayerZero (ZRO) Token: Launch and Review 2026. https://0xprocessing.com/blog/zro-token-review/
  - 3. Bitcoin.com News (2026). Layerzero Unveils Zero Blockchain With Citadel, DTCC, ICE Partnerships. https://news.bitcoin.com/layerzero-unveils-zero-blockchain-with-citadel-dtcc-ice-partnerships/
  - 4. LeveX (2025). LayerZero and Stargate Merger Explained. https://levex.com/en/blog/layerzero-stargate-merger
  - 5. LayerZero (2026). The ZRO Token. https://layerzero.network/blog/the-zro-token
  - 6. IQ.wiki (2026). LayerZero — Projects & Protocols. https://iq.wiki/wiki/layerzero

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
