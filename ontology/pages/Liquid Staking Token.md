public:: true

# Liquid Staking Token

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:liquid-staking-token", "@type":"Page", "title":"Liquid Staking Token", "vc:slug":"liquid-staking-token", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liquid-staking-token",
  "@type": "Class",
  "label": "Liquid Staking Token",
  "definition": "A liquid staking token (LST) is a transferable token issued to a user in exchange for assets staked through a liquid-staking protocol, representing a claim on the underlying stake plus accrued rewards. It frees staked capital from the usual lock-up by remaining tradable and composable across decentralised-finance applications while the principal continues to secure the network. The token's value tracks the staked position, accruing yield either through a rising exchange rate or a growing balance.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:liquid-staking",
      "label": "Liquid Staking"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:liquid-staking",
        "label": "Liquid Staking"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:reward-distribution",
        "label": "Reward Distribution"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token-minting",
        "label": "Token Minting"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:liquid-staking",
        "label": "Liquid Staking"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      },
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:lido",
        "label": "Lido"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reward-distribution",
        "label": "Reward Distribution"
      },
      {
        "@id": "urn:ngm:class:slashing",
        "label": "Slashing"
      },
      {
        "@id": "urn:ngm:class:blockchain-validator",
        "label": "Blockchain Validator"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:wrapped-token",
        "label": "Wrapped Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
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
- A Liquid Staking Token is a tradable claim issued through [[Liquid Staking]] in exchange for [[Staking|staked]] assets, representing principal plus rewards while a [[Validator Node]] continues to secure a [[Proof of Stake]] network.
- It restores [[Liquidity]] to otherwise locked stake and stays composable across [[DeFi]].
- ### Overview
- Staking secures proof-of-stake networks but normally locks capital, which cannot be moved or used elsewhere while bonded. Liquid staking solves this by issuing a token that represents the staked position, letting holders retain liquidity even as the underlying assets keep validating.
- The protocol pools user deposits, runs or delegates to validators, and mints liquid staking tokens to depositors. As the validators earn rewards, the token captures that yield, either by appreciating against the underlying asset through a rising exchange rate, or by increasing the holder's token balance via a rebasing model.
- Because the token is transferable and standards-compliant, it can be lent, used as collateral, or traded across DeFi, effectively letting one unit of capital both secure the chain and remain economically active. This composability also concentrates stake in major protocols, raising centralisation concerns.
- ### Key aspects
- The token is a transferable claim on pooled stake plus accrued rewards.
- Yield accrues through either a rising exchange rate or a growing balance.
- Composability lets the token serve as collateral and liquidity across DeFi.
- The holder inherits exposure to validator performance, including slashing risk.
- Withdrawal and redemption rules govern how the token is converted back to the underlying asset.
- ### Applications
- Earning staking rewards while keeping capital liquid and usable.
- Collateral and liquidity in lending, trading, and yield protocols.
- Protocols such as Lido issuing liquid staking tokens for networks like Ethereum.
- Strategies that layer additional yield on top of base staking returns.
- ### Relationships
- partOf:: [[Liquid Staking]]
- partOf:: [[Staking]]
- hasPart:: [[Reward Distribution]]
- uses:: [[Token Minting]]
- uses:: [[Proof of Stake]]
- implements:: [[Liquid Staking]]
- implements:: [[Tokenomics]]
- enables:: [[Liquidity]]
- enables:: [[DeFi]]
- requires:: [[Staking]]
- requires:: [[Validator Node]]
- dependsOn:: [[Proof of Stake]]
- dependsOn:: [[Validator Node]]
- supports:: [[Lido]]
- supports:: [[Ethereum]]
- relatedTo:: [[Reward Distribution]]
- relatedTo:: [[Slashing]]
- relatedTo:: [[Blockchain Validator]]
- contrastsWith:: [[Wrapped Token]]
- bridgesTo:: [[Tokenomics]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
