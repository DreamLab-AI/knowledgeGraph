public:: true

# Gitcoin Grants
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gitcoin-grants",
  "@type": "Page",
  "vc:slug": "gitcoin-grants",
  "title": "Gitcoin Grants",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gitcoin-grants",
  "@type": "Class",
  "label": "Gitcoin Grants",
  "definition": "Gitcoin Grants is a decentralised crowdfunding programme for open-source and public goods projects in the Web3 ecosystem, which implements quadratic funding as its core matching mechanism to amplify contributions from a broad community of small donors relative to a smaller number of large funders. In quadratic funding, the matching pool allocation for each project is proportional to the square of the sum of the square roots of individual contributions, incentivising broad participation over concentrated giving and making grant outcomes resistant to plutocratic capture. Gitcoin Grants operates in periodic rounds with a central matching pool funded by protocols, DAOs, and foundations, and uses Gitcoin Passport as a Sybil resistance layer to prevent fake identity manipulation of the quadratic formula.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-graph-publication-classifier-goods-funding",
      "label": "Public Goods Funding"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:gitcoin-passport",
        "label": "Gitcoin Passport"
      },
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      },
      {
        "@id": "urn:ngm:class:allo-protocol",
        "label": "Allo Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:open-source-development",
        "label": "Open Source Development"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:retroactive-public-goods-funding",
        "label": "Retroactive Public Goods Funding"
      },
      {
        "@id": "urn:ngm:class:community-governance",
        "label": "Community Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:matching-funds",
        "label": "Matching Funds"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptocurrency-wallet",
        "label": "Cryptocurrency Wallet"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:developer-ecosystem",
        "label": "Developer Ecosystem"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Ecosystem"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:venture-capital",
        "label": "Venture Capital"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gitcoin",
        "label": "Gitcoin"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
      },
      {
        "@id": "urn:ngm:class:crowdfunding",
        "label": "Crowdfunding"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gitcoin-grant-rounds",
      "label": "Gitcoin Grant Rounds"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Gitcoin Grants is a [[Quadratic Funding]] programme that amplifies crowdfunding contributions to open-source and public goods projects using [[Smart Contract]] allocation logic and [[Gitcoin Passport]] [[Sybil Resistance]], enabling community-driven resource allocation within the [[Web3]] ecosystem.

- ### Relationships
  - Gitcoin Grants implements [[Quadratic Funding]] via [[Smart Contract]] logic that calculates matching pool distributions based on the square of the sum of square roots of contributions, uses [[Gitcoin Passport]] to assign trust scores for [[Sybil Resistance]] against coordinated fake-account manipulation, and supports [[Open Source Development]] by directing capital toward unglamorous infrastructure and tooling. The programme relates to the broader [[Gitcoin]] platform and [[Decentralized Autonomous Organization]] governance model, and contributes to an ecosystem of [[Retroactive Public Goods Funding]] mechanisms that collectively address the underfunding of positive-externality work in [[Web3]].

- ### Content
  - Gitcoin was founded by Kevin Owocki in 2017 as a platform to help open-source developers find bounties and grants. Gitcoin Grants launched in 2019 implementing quadratic funding, a mechanism designed by Vitalik Buterin, Zoë Hitzig, and Glen Weyl in their 2018 paper "A Flexible Design for Funding Public Goods," which demonstrated mathematically that quadratic funding optimally allocates resources for public goods under certain assumptions about diverse preferences.

  - Each Gitcoin Grants round operates over several weeks during which community members donate to their preferred projects in any amount. A matching pool—contributed by major protocol treasuries, foundations, and individual donors—is then distributed according to the quadratic formula: projects with many small donors receive disproportionately larger matching than projects with few large donors, even if total raw donations are similar. This structure creates strong incentives for builders to cultivate broad community support rather than securing a single wealthy patron.

  - Gitcoin Grants has distributed over $60 million to thousands of projects across dozens of rounds since 2019, funding critical Ethereum infrastructure, developer tooling, public education, and community initiatives that would otherwise be chronically underfunded relative to their positive impact on the ecosystem. Notable beneficiaries include Ethers.js, WalletConnect, and various Ethereum client teams.

  - In 2023–2024, Gitcoin transitioned to a decentralised protocol architecture (Allo Protocol) that allows any organisation to run quadratic funding rounds using the same smart contract infrastructure, enabling DAOs and ecosystems outside the Ethereum mainnet to implement their own community funding rounds. The platform has expanded to support multiple blockchains and has introduced programme-specific rounds (climate, education, open-source AI tooling), while continuing to refine Sybil resistance through Gitcoin Passport's composite identity scoring.