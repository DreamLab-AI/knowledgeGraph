public:: true

# Miner Extractable Value
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:miner-extractable-value",
  "@type": "Page",
  "title": "Miner Extractable Value",
  "vc:slug": "miner-extractable-value",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:miner-extractable-value",
  "@type": "Class",
  "label": "Miner Extractable Value",
  "definition": "Miner extractable value, now more broadly termed maximal extractable value, is the profit that block producers (miners or validators) and other actors can capture by reordering, inserting or censoring transactions within the blocks they produce. Because the producer controls transaction ordering, they can exploit pending transactions in the mempool through strategies such as front-running, back-running and sandwich attacks, especially around decentralised exchanges. MEV has significant implications for fairness, network economics, censorship resistance and protocol design.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-economics",
      "label": "Blockchain Economics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:flash-loan",
        "label": "Flash Loan"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mev",
        "label": "MEV"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      },
      {
        "@id": "urn:ngm:class:eip-1559",
        "label": "EIP-1559"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mev",
      "label": "MEV"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Miner extractable value, now more broadly termed maximal extractable value, is the profit that block producers (miners or validators) and other actors can capture by reordering, inserting or censoring transactions within the blocks they produce. Because the producer controls transaction ordering, they can exploit pending transactions in the mempool through strategies such as front-running, back-running and sandwich attacks, especially around decentralised exchanges. MEV has significant implications for fairness, network economics, censorship resistance and protocol design.
  - Related: [[Blockchain Economics]] [[MEV]] [[Automated Market Maker]] [[Decentralised Exchange]]
- ### Overview
  - MEV arises because whoever assembles a block has discretion over which transactions to include and in what order, and that discretion has monetary value. Searchers monitor the public mempool for profitable opportunities — arbitrage between exchanges, liquidations, or sandwiching a large swap — and bid for favourable placement, often paying block producers a share of the proceeds. Left unmanaged, MEV degrades user outcomes and centralises power; mitigations include private transaction relays, proposer-builder separation and encrypted mempools.
- ### Mechanisms
  - Transaction ordering as a source of value
  - Front-running, back-running and sandwich attacks
  - Searchers, builders and proposer-builder separation
  - Arbitrage and liquidation opportunities
  - Impact on fairness and censorship resistance
  - Mitigations: private relays, encrypted mempools
- ### Applications
  - Arbitrage across decentralised exchanges
  - Liquidation of undercollateralised positions
  - Designing MEV-resistant protocols and auctions
  - Analysing validator and miner incentives
  - Informing fee-market and ordering reforms
- ### Relationships
  - subClassOf:: [[Blockchain Economics]]
  - partOf:: [[Blockchain Economics]]
  - requires:: [[Smart Contract]]
  - uses:: [[Automated Market Maker]]
  - uses:: [[Liquidity Pool]]
  - dependsOn:: [[Proof of Stake]]
  - dependsOn:: [[Validator]]
  - enables:: [[Flash Loan]]
  - contrastsWith:: [[Censorship Resistance]]
  - supports:: [[Blockchain Economics]]
  - relatedTo:: [[MEV]]
  - relatedTo:: [[Gas Fee]]
  - relatedTo:: [[EIP-1559]]
  - relatedTo:: [[Decentralised Exchange]]
  - relatedTo:: [[Ethereum]]
  - bridgesTo:: [[Blockchain]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
