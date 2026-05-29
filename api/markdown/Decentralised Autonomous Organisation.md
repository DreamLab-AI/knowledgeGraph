public:: true

# decentralised autonomous organisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ad0ef283df9ce52ba19c8d438a1e6b9d3854e21a22f7fefefc8ad2f035e7e3bc",
  "@type": "Page",
  "vc:slug": "decentralised-autonomous-organisation",
  "title": "decentralised autonomous organisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralised-autonomous-organisation",
  "@type": "Class",
  "label": "Decentralised Autonomous Organisation",
  "definition": "A Decentralised Autonomous Organisation (DAO) is a blockchain-native organisational structure in which governance rules and treasury management are encoded as smart contracts executing on a public distributed ledger, enabling token-holder communities to propose, deliberate, and vote on decisions without recourse to centralised management. DAOs operate transparently with on-chain execution, typically combining governance tokens that confer voting rights with treasury contracts that hold and disburse funds. They are employed across DeFi protocols, investment clubs, grant programmes, and decentralised media organisations.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A Decentralised Autonomous Organisation (DAO) is a blockchain-native organisational structure in which governance rules and treasury management are encoded as smart contracts executing on a public distributed ledger, enabling token-holder communities to propose, deliberate, and vote on decisions without recourse to centralised management. DAOs operate transparently with on-chain execution, typically combining governance tokens that confer voting rights with treasury contracts that hold and disburse funds. They are employed across DeFi protocols, investment clubs, grant programmes, and decentralised media organisations.

- ### Semantic Classification
  - owl-class:: decentralised-autonomous-organisation:Decentralised Autonomous Organisation
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[Governance Token]]
  - enables [[On-chain Governance]]
  - enables [[Treasury Management]]
  - relatedTo [[DAO]]
  - relatedTo [[Tokenomics]]

- ### Content
  - A Decentralised Autonomous Organisation is an organisational model that replaces hierarchical management and centralised legal structures with smart-contract-enforced rules executing on a public blockchain. Participants in a DAO typically hold governance tokens that entitle them to propose changes to the protocol or organisation and to vote on proposals submitted by other members. Proposals that reach a quorum and achieve a majority are automatically enacted by the underlying smart contracts, which may include executing transactions, upgrading code, allocating treasury funds, or modifying protocol parameters.
  - The technical architecture of a DAO typically involves multiple smart contract components: a governance module (managing proposal submission, voting periods, and execution), a token contract (managing governance token supply and delegation), and a treasury contract (holding protocol assets). Governance frameworks such as Compound Governor, OpenZeppelin Governor, and Aragon are widely used as reference implementations. Voting mechanisms vary between one-token-one-vote, quadratic voting, and conviction voting, each with different resistance properties against plutocratic capture.
  - DAOs face significant legal uncertainty in most jurisdictions. Few legal systems recognise them as distinct legal entities, meaning members may bear unlimited liability. Wyoming, the Marshall Islands, and certain other jurisdictions have enacted bespoke DAO LLC statutes to address this gap. Practical challenges include low voter participation, vulnerability to governance attacks through token accumulation, and difficulty enforcing off-chain agreements made by DAO participants. Despite these challenges, DAOs have become a central governance primitive in Decentralised Finance, coordinating billions in on-chain treasury assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
