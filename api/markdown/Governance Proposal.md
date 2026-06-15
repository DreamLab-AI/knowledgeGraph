public:: true

# Governance Proposal
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:governance-proposal",
  "@type": "Page",
  "title": "Governance Proposal",
  "vc:slug": "governance-proposal",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:governance-proposal",
  "@type": "Class",
  "label": "Governance Proposal",
  "definition": "A governance proposal is a formally submitted, votable item that requests a change to a decentralised protocol, treasury allocation or organisational parameter, typically within a DAO. It encapsulates a description, an executable payload or off-chain intent, and voting parameters such as quorum and threshold. Token holders or delegates vote on the proposal, and on approval it may be executed automatically by smart contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:on-chain-governance",
      "label": "On-Chain Governance"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:voting",
        "label": "Voting"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:snapshot",
        "label": "Snapshot"
      },
      {
        "@id": "urn:ngm:class:delegation",
        "label": "Delegation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:voting",
        "label": "Voting"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-Chain Governance"
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
  - [[Governance Proposal]] is a [[Blockchain]] artefact within [[On-Chain Governance]] and a [[DAO]], decided by [[Voting]] weighted by a [[Governance Token]] and executed via a [[Smart Contract]].
- ### Overview
  - Proposals are the unit of collective decision-making in decentralised organisations, turning community intent into auditable, executable change.
  - They progress through lifecycle stages: drafting and discussion, formal submission, a voting window, and execution or rejection based on quorum and threshold.
- ### Key aspects
  - Payload: the on-chain transactions or off-chain commitments enacted on approval.
  - Voting parameters: quorum, approval threshold, voting period and snapshot block.
  - Delegation: token holders may delegate voting power to representatives.
- ### Applications
  - Protocol parameter changes such as fees, collateral ratios and upgrades.
  - Treasury grants and funding decisions in DAOs.
  - Off-chain signalling via Snapshot before binding on-chain execution.
- ### Relationships
  - hasPart:: [[Quorum]]
  - hasPart:: [[Smart Contract]]
  - partOf:: [[On-Chain Governance]]
  - partOf:: [[DAO]]
  - requires:: [[Voting]]
  - requires:: [[Governance Token]]
  - enables:: [[Decentralized Governance]]
  - uses:: [[Snapshot]]
  - uses:: [[Delegation]]
  - dependsOn:: [[Smart Contract]]
  - dependsOn:: [[Ethereum]]
  - supports:: [[DAO]]
  - relatedTo:: [[Voting]]
  - relatedTo:: [[Governance Framework]]
  - implements:: [[On-Chain Governance]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
