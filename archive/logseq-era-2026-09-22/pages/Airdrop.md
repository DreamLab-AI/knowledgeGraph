public:: true

# Airdrop

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:airdrop",
  "@type": "Page",
  "title": "Airdrop",
  "vc:slug": "airdrop",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:airdrop",
  "@type": "Class",
  "label": "Airdrop",
  "definition": "An Airdrop is a token distribution mechanism in which a blockchain project allocates free tokens to a set of wallet addresses, typically to bootstrap a community, reward early users or decentralise ownership. Eligibility may be based on prior on-chain activity, holdings of another asset or completion of tasks. Airdrops are a marketing and governance tool but attract Sybil attacks that the project must mitigate.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:token-distribution",
      "label": "Token Distribution"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:token-distribution",
        "label": "Token Distribution"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:crypto-wallet",
        "label": "Crypto Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency-token",
        "label": "Cryptocurrency Token"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sybil-attack",
        "label": "Sybil Attack"
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
  - An Airdrop is a token distribution mechanism in which a blockchain project allocates free tokens to a set of wallet addresses, typically to bootstrap a community, reward early users or decentralise ownership.
  - Related concepts: [[Token Distribution]] [[Tokenomics]] [[Cryptocurrency Token]] [[Governance Token]] [[Initial Coin Offering]]
- ### Overview
  - An Airdrop is a token distribution mechanism in which a blockchain project allocates free tokens to a set of wallet addresses, typically to bootstrap a community, reward early users or decentralise ownership.
  - Eligibility may be based on prior on-chain activity, holdings of another asset or completion of tasks.
  - Airdrops are a marketing and governance tool but attract Sybil attacks that the project must mitigate.
  - It is modelled as a subclass of [[Token Distribution]] within the blockchain domain.
- ### Key aspects
  - [[Token]] is a constituent or mechanism relevant to Airdrop.
  - [[Crypto Wallet]] is a constituent or mechanism relevant to Airdrop.
- ### Mechanisms
  - Airdrop enables [[Governance Token]].
  - Airdrop enables [[Decentralized Finance]].
  - Airdrop supports [[Sybil Attack]].
- ### Applications
  - Applied in contexts involving [[Governance Token]].
  - Applied in contexts involving [[Decentralized Finance]].
  - Applied in contexts involving [[Sybil Attack]].
  - Applied in contexts involving [[Tokenomics]].
  - Applied in contexts involving [[Cryptocurrency Token]].
  - Applied in contexts involving [[Staking]].
- ### Relationships
  - subClassOf:: [[Token Distribution]]
  - partOf:: [[Token Distribution]]
  - contrastsWith:: [[Initial Coin Offering]]
  - uses:: [[Token]]
  - uses:: [[Crypto Wallet]]
  - enables:: [[Governance Token]]
  - enables:: [[Decentralized Finance]]
  - relatedTo:: [[Tokenomics]]
  - relatedTo:: [[Cryptocurrency Token]]
  - relatedTo:: [[Staking]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Gas Fee]]
  - supports:: [[Sybil Attack]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
