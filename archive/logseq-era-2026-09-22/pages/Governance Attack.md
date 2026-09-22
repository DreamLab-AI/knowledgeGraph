public:: true

# Governance Attack

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:governance-attack",
  "@type": "Page",
  "title": "Governance Attack",
  "vc:slug": "governance-attack",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:governance-attack",
  "@type": "Class",
  "label": "Governance Attack",
  "definition": "A governance attack is an exploit in which an adversary acquires or temporarily controls sufficient voting power within a decentralised governance system to pass malicious proposals against the interests of the wider community. Such attacks often combine economic mechanisms, such as borrowing governance tokens via flash loans, with the on-chain execution semantics of decentralised autonomous organisations. The aim is typically to drain a treasury, alter protocol parameters, or seize privileged contract roles.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:voting-mechanism",
      "label": "Voting Mechanism"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:snapshot-voting",
        "label": "Snapshot Voting"
      },
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token-Weighted Voting"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:flash-loan",
        "label": "Flash Loan"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sybil-attack",
        "label": "Sybil Attack"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
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
  - A governance attack is an exploit in which an adversary acquires or temporarily controls sufficient voting power within a decentralised governance system to pass malicious proposals against the interests of the wider community. Such attacks often combine economic mechanisms, such as borrowing governance tokens via flash loans, with the on-chain execution semantics of decentralised autonomous organisations. The aim is typically to drain a treasury, alter protocol parameters, or seize privileged contract roles.
  - Related concepts: [[DAO]], [[Governance Token]], [[Flash Loan]], [[Voting Mechanism]], [[Smart Contract]].
- ### Overview
  - Decentralised protocols delegate decision-making to token holders who vote on proposals that, when passed, are executed automatically by [[Smart Contract]] logic.
  - A [[Governance Attack]] subverts this model by concentrating voting weight rather than by breaking cryptography, making it an economic and political exploit rather than a purely technical one.
  - Because outcomes are enforced trustlessly, a single successful malicious proposal can be irreversible without an emergency social intervention or hard fork.
- ### Mechanisms
  - Token accumulation: buying or borrowing enough [[Governance Token]] to cross a quorum or proposal threshold.
  - Flash-loan voting: using a [[Flash Loan]] to momentarily hold voting power for a single block when snapshots are taken at vote time.
  - Vote delegation capture: aggregating delegated votes from passive holders.
  - Proposal timing: submitting and executing proposals during periods of low voter turnout.
  - Privilege escalation: passing a proposal that reassigns admin keys or upgrades a malicious implementation contract.
- ### Applications
  - Threat modelling for [[DAO]] treasuries and protocol upgrade processes.
  - Designing time-locks, quorum floors, and vote-snapshot strategies that resist flash-loan voting.
  - Security audits of [[Voting Mechanism]] and delegation contracts.
  - Post-mortem analysis and remediation after exploited proposals.
- ### Relationships
  - relatedTo:: [[Decentralized Governance]]
  - relatedTo:: [[DAO]]
  - relatedTo:: [[Snapshot Voting]]
  - relatedTo:: [[Token-Weighted Voting]]
  - requires:: [[Governance Token]]
  - uses:: [[Flash Loan]]
  - contrastsWith:: [[Consensus]]
  - dependsOn:: [[Smart Contract]]
  - dependsOn:: [[Voting Mechanism]]
  - bridgesTo:: [[Blockchain]]
  - enables:: [[Sybil Attack]]
  - partOf:: [[Decentralized Governance]]
  - supports:: [[Distributed Ledger]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
