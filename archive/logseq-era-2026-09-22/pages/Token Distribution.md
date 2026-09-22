public:: true

# Token Distribution

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:token-distribution",
  "@type": "Page",
  "title": "Token Distribution",
  "vc:slug": "token-distribution",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-distribution",
  "@type": "Class",
  "label": "Token Distribution",
  "definition": "Token distribution is the process and schema by which a blockchain project allocates its native tokens across stakeholders such as founders, investors, the community, and a treasury. It specifies how many tokens each group receives, when they unlock through vesting, and through which mechanisms they are released, all of which shape decentralisation, incentive alignment, and market liquidity. A distribution design is a central lever of a project's tokenomics.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:tokenomics",
      "label": "Tokenomics"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:decentralization",
        "label": "Decentralization"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vesting-schedule",
        "label": "Vesting Schedule"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ico",
        "label": "ICO"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:vesting-schedule",
        "label": "Vesting Schedule"
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
- [[Token Distribution]] is the allocation schema that determines who receives a project's [[Token]], in what proportion, and on what release schedule. It is a defining component of [[Tokenomics]] and [[Token Economics]], directly influencing [[Decentralization]] and incentive alignment.
- ### Overview
- A distribution plan partitions total supply across categories such as team, investors, ecosystem incentives, public allocation, and treasury reserves. The chosen percentages signal a project's priorities and risk profile.
- Time is as important as proportion. [[Vesting Schedule]] cliffs and linear unlocks prevent early holders from dumping supply, smoothing sell pressure and aligning long-term commitment.
- Distribution mechanisms range from sales and airdrops to liquidity-mining rewards, each reaching a different audience and producing different decentralisation outcomes.
- ### Key aspects
- Allocation buckets: founders, investors, community, treasury, and ecosystem each receive a defined share.
- Vesting and cliffs: unlock schedules implemented via [[Smart Contract]] enforce time-based release.
- Release mechanisms: sales, airdrops, and liquidity incentives feeding a [[Liquidity Pool]].
- Transparency: published distribution tables build trust and inform market expectations.
- ### Applications
- Launch planning for new [[Cryptocurrency]] and protocol tokens.
- Designing [[Governance Token]] allocations to achieve credible decentralisation.
- Comparing fundraising routes against a public [[ICO]] or [[Initial Coin Offering]].
- Treasury and ecosystem-fund management over a project's lifecycle.
- ### Relationships
- partOf:: [[Tokenomics]]
- enables:: [[Decentralization]]
- enables:: [[Liquidity Pool]]
- hasPart:: [[Vesting Schedule]]
- relatedTo:: [[Tokenomics]]
- relatedTo:: [[Token Economics]]
- relatedTo:: [[Governance Token]]
- uses:: [[Token]]
- uses:: [[Smart Contract]]
- requires:: [[Token]]
- supports:: [[Cryptocurrency]]
- contrastsWith:: [[ICO]]
- bridgesTo:: [[Initial Coin Offering]]
- dependsOn:: [[Vesting Schedule]]
- ### Provenance
- updated:: 2026-06-15
