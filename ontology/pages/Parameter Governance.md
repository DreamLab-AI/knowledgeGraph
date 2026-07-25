public:: true

# Parameter Governance
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:parameter-governance", "@type":"Page", "title":"Parameter Governance", "vc:slug":"parameter-governance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:parameter-governance",
  "@type": "Class",
  "label": "Parameter Governance",
  "definition": "Parameter governance is the on-chain process by which a decentralised protocol's tunable configuration values — such as fees, collateral ratios, interest-rate curves, and reward emissions — are proposed, deliberated, voted upon, and enacted without altering the underlying contract code. By exposing safe adjustment levers to token-holder governance, it lets protocols adapt to market conditions while preserving the immutability of core logic. It is a foundational pattern in DeFi and DAO management, distinct from full code upgrades.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:on-chain-governance",
      "label": "On-chain Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:on-chain-voting",
        "label": "On Chain Voting"
      },
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token-Weighted Voting"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:on-chain-voting",
        "label": "On Chain Voting"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
	- [[Parameter Governance]] is the [[On-chain Governance]] process for adjusting a protocol's tunable configuration values without changing its code.
	- It uses [[On Chain Voting]] and [[Token-Weighted Voting]] to let holders of a [[Governance Token]] enact safe parameter changes.
	- It is a core mechanism for adaptive [[DeFi]] protocols and [[DAO]] management.
- ### Overview
	- Decentralised protocols expose levers — fees, collateralisation ratios, liquidation penalties, interest-rate models, emission schedules — that must occasionally change as markets evolve.
	- Parameter governance routes these adjustments through an on-chain proposal and voting workflow, so changes are transparent, auditable, and community-authorised rather than admin-imposed.
	- Crucially it is bounded: only pre-declared, range-constrained parameters are mutable, while the contract's executable logic stays immutable. This separates routine tuning from risky code upgrades.
	- Timelocks and quorum thresholds give the community time to react and prevent capture by a transient majority.
- ### Mechanisms
	- A proposal encodes the target parameter and new value as an executable governance action.
	- Token-holders cast votes, typically weighted by stake, over a defined voting window.
	- A quorum and approval threshold determine whether the proposal passes.
	- A timelock delays execution before a governance module applies the change to the protocol's contracts.
- ### Applications
	- Adjusting lending-market collateral factors and interest-rate curves.
	- Tuning AMM fee tiers and liquidity-incentive emissions.
	- Setting stablecoin stability fees and debt ceilings.
	- Calibrating staking rewards and treasury allocations under [[Decentralised Governance]].
- ### Relationships
	- partOf:: [[On-chain Governance]]
	- uses:: [[On Chain Voting]]
	- uses:: [[Token-Weighted Voting]]
	- uses:: [[Smart Contract]]
	- requires:: [[Governance Token]]
	- enables:: [[DeFi]]
	- enables:: [[Decentralised Governance]]
	- supports:: [[DAO]]
	- supports:: [[Decentralized Autonomous Organization]]
	- implements:: [[On Chain Voting]]
	- dependsOn:: [[Smart Contract]]
	- relatedTo:: [[Governance Token]]
	- relatedTo:: [[Governance]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
