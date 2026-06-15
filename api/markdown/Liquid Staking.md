public:: true

# Liquid Staking
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:liquid-staking", "@type": "Page", "title": "Liquid Staking", "vc:slug": "liquid-staking", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liquid-staking",
  "@type": "Class",
  "label": "Liquid Staking",
  "definition": "Liquid staking is a mechanism that allows holders of proof-of-stake assets to stake their tokens while receiving a transferable derivative token representing the staked position and its accruing rewards. This derivative can be traded, lent or used as collateral in decentralised finance, unlocking liquidity that traditional staking locks up. It thereby lets participants earn staking rewards without sacrificing the capital efficiency of liquid assets.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:staking",
      "label": "Staking"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:yield-generation",
        "label": "Yield Generation"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      },
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:slashing",
        "label": "Slashing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lido",
        "label": "Lido"
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
  - Liquid Staking is rooted in Staking and relates to [[Proof of Stake]], [[Decentralized Finance]], [[Smart Contract]]. Liquid staking is a mechanism that allows holders of proof-of-stake assets to stake their tokens while receiving a transferable derivative token representing the staked position and its accruing rewards.

- ### Overview
  - In ordinary staking, tokens are locked to secure a proof-of-stake network and cannot be used elsewhere until unbonded.
  - Liquid staking issues a derivative token that represents the staked principal plus accrued rewards, which remains freely transferable.
  - Holders can deploy this derivative across decentralised finance for lending, trading or collateral while continuing to earn staking rewards.

- ### Mechanisms
  - Users deposit assets into a staking protocol that delegates them to validator nodes.
  - The protocol mints a derivative token, redeemable for the underlying stake plus rewards.
  - Rewards accrue either through a rebasing balance or an appreciating exchange rate of the derivative.
  - Smart contracts manage delegation, reward distribution and the unbonding queue on withdrawal.

- ### Applications
  - Earning staking yield while retaining liquidity for trading or payments.
  - Using staking derivatives as collateral in lending markets.
  - Composing staked assets into yield strategies across decentralised finance.
  - Lowering the barrier to participation for holders below the solo-validator threshold.

- ### Relationships
  - subClassOf:: [[Staking]]
  - uses:: [[Staking]]
  - uses:: [[Smart Contract]]
  - requires:: [[Validator Node]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Yield Generation]]
  - enables:: [[Liquidity Pool]]
  - supports:: [[Decentralized Finance]]
  - supports:: [[Tokenization]]
  - dependsOn:: [[Blockchain Network]]
  - dependsOn:: [[DeFi Protocol]]
  - implements:: [[Governance Token]]
  - contrastsWith:: [[Slashing]]
  - relatedTo:: [[Lido]]
  - relatedTo:: [[Ethereum]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
