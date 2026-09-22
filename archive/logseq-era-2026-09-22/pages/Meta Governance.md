public:: true

# Meta Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:meta-governance",
  "@type": "Page",
  "title": "Meta Governance",
  "vc:slug": "meta-governance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:meta-governance",
  "@type": "Class",
  "label": "Meta Governance",
  "definition": "Meta governance is the practice of governing the governance process itself, encompassing the rules, parameters, and mechanisms that determine how decisions are made, how voting power is allocated, and how the decision-making system can be amended. In decentralised protocols it often refers to one entity wielding governance rights over another, such as a protocol holding voting tokens of the protocols it integrates. Meta governance addresses the meta-level design of decision rights, escalation paths, and the evolution of governance structures over time.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-governance",
      "label": "Decentralized Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:voting-system",
        "label": "Voting System"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:polycentric-governance",
        "label": "Polycentric Governance"
      },
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:polycentric-governance",
        "label": "Polycentric Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:polycentric-governance",
        "label": "Polycentric Governance"
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
      "@id": "urn:ngm:class:governance-of-governance",
      "label": "Governance of Governance"
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
  - [[Meta Governance]] is the governance of governance itself — the meta-level rules that decide how a [[Decentralized Governance]] system allocates voting power, sets parameters, and amends its own [[Voting System]]. In DeFi it also denotes one protocol controlling the [[Governance Token]] votes of another.
- ### Overview
  - Every governance system rests on choices about who can propose, who can vote, what thresholds apply, and how those rules change. Meta governance makes these second-order choices explicit and contestable rather than fixed, allowing communities to evolve their constitution.
  - In composable DeFi, meta governance also arises mechanically: a protocol that accumulates the governance tokens of integrated protocols gains influence over them, creating layered, sometimes recursive, decision structures across the ecosystem.
- ### Key aspects
  - Parameter governance controls quorum, thresholds, timelocks, and delegation rules.
  - Constitutional amendment defines how the governance rules themselves can be revised.
  - Vote aggregation across protocols concentrates or distributes meta-level influence.
  - Escalation and emergency mechanisms balance agility against capture resistance.
- ### Applications
  - DeFi protocols holding and directing the governance tokens of partner protocols.
  - DAO frameworks parameterising voting, delegation, and proposal lifecycles.
  - [[Polycentric Governance]] arrangements coordinating multiple decision centres.
  - Treasury and incentive committees operating under amendable mandates.
- ### Relationships
  - partOf:: [[Decentralized Governance]]
  - partOf:: [[On-Chain Governance]]
  - hasPart:: [[Voting System]]
  - hasPart:: [[Governance Token]]
  - enables:: [[Polycentric Governance]]
  - enables:: [[DAO Governance]]
  - supports:: [[DAO]]
  - supports:: [[Treasury Management]]
  - uses:: [[Governance Token]]
  - uses:: [[Voting Mechanism]]
  - requires:: [[On-Chain Governance]]
  - implements:: [[Decentralized Governance]]
  - contrastsWith:: [[Polycentric Governance]]
  - relatedTo:: [[DAO]]
  - relatedTo:: [[Polycentric Governance]]
  - bridgesTo:: [[Blockchain]]
- ### Provenance
  - updated:: 2026-06-15
