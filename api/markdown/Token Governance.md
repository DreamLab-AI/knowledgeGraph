public:: true

# Token Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5a21dba43423488f0f1c2e9112c59942559bcd20d91609e29dec4ea4dc8549ea",
  "@type": "Page",
  "vc:slug": "token-governance",
  "title": "Token Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-governance",
      "vc:label": "Decentralised Governance"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:dao",
      "vc:label": "DAO"
    },
    {
      "@id": "urn:visionflow:linked:on-chain-governance",
      "vc:label": "On-chain Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-governance",
  "@type": "Class",
  "label": "Token Governance",
  "definition": "A decision-making mechanism for blockchain protocols and DAOs in which voting power is allocated in proportion to holdings of a governance token, so that proposals — parameter changes, treasury spending, protocol upgrades — are ratified by token-weighted ballots executed through smart contracts, trading the legitimacy problems of plutocratic weighting against the sybil resistance and skin-in-the-game that stake-based voting provides.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:decentralised-governance",
    "label": "Decentralised Governance"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:public-goods-funding",
        "label": "Public Goods Funding"
      },
      {
        "@id": "urn:ngm:class:digital-asset-governance",
        "label": "Digital Asset Governance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:aave",
        "label": "Aave"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A decision-making mechanism for blockchain protocols and DAOs in which voting power is allocated in proportion to holdings of a governance token, so that proposals — parameter changes, treasury spending, protocol upgrades — are ratified by token-weighted ballots executed through smart contracts, trading the legitimacy problems of plutocratic weighting against the sybil resistance and skin-in-the-game that stake-based voting provides."

- ### Semantic Classification
  - owl-class:: blockchain:TokenGovernance
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Decentralised Governance]]
  - uses:: [[Governance Token]]
  - part-of:: [[DAO]]
  - related-to:: [[On-chain Governance]]

- ### Content

  ## Definition

  **Token governance** is the coordination mechanism by which holders of a protocol's [[Governance Token]] collectively steer the protocol: one token, one vote (or a weighted variant), tallied and often executed automatically by [[Smart Contract]]. It emerged from the early DAO experiments on Ethereum and was standardised by DeFi protocols — Compound's Governor contracts, MakerDAO's executive votes, and Aave's proposal lifecycle became reference implementations that hundreds of projects now reuse. A typical flow runs: temperature-check discussion on a forum, formal on-chain proposal (gated by a proposal threshold), voting period with quorum requirements, timelock delay, then automatic execution.

  The design rests on a deliberate trade-off. Weighting votes by stake provides sybil resistance — identities are free to create, but tokens are not — and aligns decision power with economic exposure to the outcome. The cost is plutocracy: large holders (funds, founders, exchanges voting custodial balances) can dominate outcomes, and empirical studies of major DAOs repeatedly find Gini coefficients above 0.9 for voting power. Low turnout compounds this; most proposals in large DAOs are decided by a handful of delegates. Mitigations include vote delegation (making a liquid representative layer), vote-escrow models (veCRV-style time-locking that weights commitment as well as stake), [[Quadratic Voting]] experiments that price marginal votes superlinearly, and bicameral designs that pair token votes with councils or citizen-house structures.

  Beyond protocol parameters, token governance has become the allocation machinery for substantial treasuries — Uniswap, Arbitrum, and Optimism each govern multi-billion-dollar treasuries through token votes — which makes it a principal channel for [[Public Goods Funding]] in the Ethereum ecosystem (retroactive funding rounds, grants programmes) and a live subject for securities and DAO-liability law.

  ## Current Landscape

  - **Reference stacks**: OpenZeppelin Governor, Compound Governor Bravo, and Aave Governance V3 dominate on-chain execution; Snapshot handles gasless off-chain signalling for thousands of projects.
  - **Delegation layer**: professional delegate ecosystems (with public platforms, incentive programmes, and delegate compensation votes) have emerged in Uniswap, Arbitrum, and Optimism governance.
  - **Known attack surfaces**: flash-loan vote acquisition (the 2020 MakerDAO scare, the 2022 Beanstalk exploit), governance capture via cheap token accumulation (Build Finance, 2022), and last-minute proposal-payload swaps — motivating timelocks, guardians, and security councils.
  - **Hybrid trends**: vote-escrow tokenomics, non-transferable participation weight, futarchy pilots, and legal wrappers (Wyoming DAO LLCs, Cayman foundations) that bind on-chain votes to off-chain legal effect.
