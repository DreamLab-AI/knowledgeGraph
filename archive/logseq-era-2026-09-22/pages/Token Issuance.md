public:: true

# Token Issuance
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:token-issuance",
  "@type": "Page",
  "title": "Token Issuance",
  "vc:slug": "token-issuance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-issuance",
  "@type": "Class",
  "label": "Token Issuance",
  "definition": "Token issuance is the process by which a blockchain protocol or smart contract creates and distributes new digital tokens into circulation, establishing the initial and ongoing supply available to network participants. It encompasses the technical minting of token units according to predefined rules as well as the economic policies governing distribution, vesting schedules, and supply caps. Issuance mechanisms range from one-time generation events to continuous emission programmes tied to staking rewards or protocol activity.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:token-economics",
      "label": "Token Economics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:token-minting",
      "label": "Token Minting"
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
  - [[Token Issuance]] is the controlled creation and distribution of new [[Digital Asset]] units on a [[Blockchain]], governed by smart-contract logic and the protocol's [[Monetary Policy]]. It is a foundational operation within [[Token Economics]] and [[Tokenomics]], determining how supply enters circulation.
- ### Overview
  - Issuance defines the supply side of a token economy. A protocol specifies whether tokens are pre-minted in full at genesis, released gradually through emission schedules, or created on demand by smart-contract actions such as collateral deposits or staking. The chosen model shapes inflation, holder incentives, and long-term scarcity.
  - Distribution mechanisms determine who receives newly issued tokens: founders and investors via vesting contracts, validators via block rewards, liquidity providers via yield programmes, or the public via sales and airdrops. Transparent, on-chain issuance rules underpin trust in a token's economic model.
- ### Mechanisms
  - Fixed-supply issuance mints the entire supply once, after which no further tokens can be created without governance intervention.
  - Inflationary issuance emits new tokens continuously to reward [[Validator]] participation and secure the network, balanced against burning or sinks.
  - Algorithmic and elastic issuance adjust supply dynamically in response to demand signals or peg targets.
  - Vesting and lock-up contracts schedule the gradual release of allocated tokens to align stakeholder incentives over time.
- ### Applications
  - [[Initial Coin Offering]] and token generation events bootstrap project funding and community ownership.
  - Staking-reward issuance compensates [[Validator]] nodes for securing proof-of-stake networks.
  - [[Liquidity]] mining programmes issue tokens to incentivise capital provision in decentralised markets.
  - [[Governance Token]] distribution issues voting rights to align control with participation.
- ### Relationships
  - partOf:: [[Token Economics]]
  - partOf:: [[Tokenomics]]
  - enables:: [[Cryptocurrency]]
  - enables:: [[Initial Coin Offering]]
  - enables:: [[Liquidity]]
  - requires:: [[Smart Contract]]
  - requires:: [[Consensus Mechanism]]
  - uses:: [[Monetary Policy]]
  - hasPart:: [[Governance Token]]
  - hasPart:: [[Digital Asset]]
  - supports:: [[Validator]]
  - supports:: [[Treasury Management]]
  - relatedTo:: [[Blockchain]]
  - relatedTo:: [[On-Chain Governance]]
  - bridgesTo:: [[Finance]]
- ### Provenance
  - updated:: 2026-06-15
