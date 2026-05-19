public:: true

# DAO Governance for Telecollaboration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:601026636424285135ef0af847fb27c0332a2dbad63ddeb324e085d1eba97e82",
  "@type": "Page",
  "vc:slug": "dao-governance-for-telecollaboration",
  "title": "DAO Governance for Telecollaboration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "DecentralisedAutonomousOrganisation"
    },
    {
      "@id": "urn:visionflow:linked:tele-002-telecollaboration",
      "vc:label": "TELE-002-telecollaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-250-blockchain-collaboration",
      "vc:label": "TELE-250-blockchain-collaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-251-smart-contract-coordination",
      "vc:label": "TELE-251-smart-contract-coordination"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0252"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "DAO Governance for Telecollaboration"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dao-governance-for-telecollaboration",
  "@type": "Class",
  "label": "DAO Governance for Telecollaboration",
  "definition": "\"The application of decentralised autonomous organisation (DAO) governance mechanisms—token-weighted voting, proposal systems, treasury management—to coordinate geographically distributed teams through on-chain decision-making, enabling democratic, transparent collaboration without centralised ma...",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:blockchain-technology",
        "label": "Blockchain Technology"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-protocol-and-infra",
      "label": "Protocol and Infrastructure"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:dao-governance-for-telecollaboration:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:601026636424285135ef0af847fb27c0332a2dbad63ddeb324e085d1eba97e82"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[DecentralisedAutonomousOrganisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-002-telecollaboration]]",
      "resolved": "urn:visionflow:linked:tele-002-telecollaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-250-blockchain-collaboration]]",
      "resolved": "urn:visionflow:linked:tele-250-blockchain-collaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-251-smart-contract-coordination]]",
      "resolved": "urn:visionflow:linked:tele-251-smart-contract-coordination",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - "The application of decentralised autonomous organisation (DAO) governance mechanisms—token-weighted voting, proposal systems, treasury management—to coordinate geographically distributed teams through on-chain decision-making, enabling democratic, transparent collaboration without centralised management or hierarchical authority structures."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:DAOGovernanceForTelecollaboration
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Blockchain Technology]]

- ### Content

  ## Definition

  **DAO Governance for Telecollaboration** enables distributed teams to make decisions democratically through blockchain-based voting. Token holders propose initiatives ("Fund project X with £50K"), vote proportionally to token ownership or reputation, and approved proposals execute automatically via smart contracts [[TELE-251-smart-contract-coordination]].

  ## Governance Models

  - **Token-Weighted Voting**: 1 token = 1 vote (risk: plutocracy)
  - **Quadratic Voting**: Cost of N votes = N² tokens (prevents whale dominance)
  - **Reputation-Based**: Non-transferable reputation from contributions

  ## Examples

  - **Uniswap DAO**: 400K token holders govern $5B decentralised exchange
  - **Gitcoin**: Funds open-source developers via quadratic funding
  - **MakerDAO**: Manages $5B DeFi protocol via MKR token voting

  ## Advantages

  - **Democratic**: All token holders participate in decisions
  - **Transparent**: Proposals, votes, transactions public on blockchain
  - **Global**: Anyone with internet can join, regardless of geography/citizenship

  ## Challenges

  - **Low Turnout**: Only 5-10% of token holders vote (governance fatigue)
  - **Plutocracy**: Wealthy token holders dominate decisions
  - **Slow**: Proposal-vote-execution cycle takes days-weeks

  #### Related Concepts
  - [[TELE-002-telecollaboration]]
  - [[TELE-250-blockchain-collaboration]]
  - [[TELE-251-smart-contract-coordination]]
  - [[DecentralisedAutonomousOrganisation]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
