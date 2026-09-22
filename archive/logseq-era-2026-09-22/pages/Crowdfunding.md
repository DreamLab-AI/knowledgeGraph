public:: true

# Crowdfunding

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:crowdfunding",
  "@type": "Page",
  "title": "Crowdfunding",
  "vc:slug": "crowdfunding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crowdfunding",
  "@type": "Class",
  "label": "Crowdfunding",
  "definition": "Crowdfunding is a financing model in which a project or venture raises capital from a large number of contributors, each providing a relatively small amount, typically through an online platform. Models range from donation and reward-based campaigns to equity and debt offerings, and blockchain variants use token sales to distribute ownership or utility rights. The approach broadens access to early-stage capital while distributing risk across many backers.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:venture-capital",
        "label": "Venture Capital"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:ico",
        "label": "ICO"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ico",
        "label": "ICO"
      },
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      },
      {
        "@id": "urn:ngm:class:security-token-offering",
        "label": "Security Token Offering"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:venture-capital",
        "label": "Venture Capital"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token-distribution",
        "label": "Token Distribution"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:token-distribution",
        "label": "Token Distribution"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
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
  - Crowdfunding is a financing model in which a project or venture raises capital from a large number of contributors, each providing a relatively small amount, typically through an online platform. Models range from donation and reward-based campaigns to equity and debt offerings, and blockchain variants use token sales to distribute ownership or utility rights. The approach broadens access to early-stage capital while distributing risk across many backers.
  - Related core concepts: [[Decentralised Finance]] [[Venture Capital]] [[ICO]] [[Initial Coin Offering]] [[Token Distribution]]
- ### Overview
  - Crowdfunding shifts capital formation from a small set of institutional investors to a distributed crowd of individuals. Reward and donation models dominate consumer products and creative work, while equity crowdfunding and token sales target ownership stakes. Blockchain-based crowdfunding lowers settlement friction and enables programmable, transferable claims through tokens.
- ### Key aspects
  - Many small contributions aggregate into meaningful project capital
  - Reward, donation, equity, and debt models serve different campaign goals
  - Online platforms provide discovery, escrow, and payment processing
  - Token-based variants distribute ownership or utility rights on-chain
  - All-or-nothing thresholds protect backers when targets are not met
- ### Applications
  - Early-stage funding for startups and consumer hardware products
  - Community financing of creative, civic, and open projects
  - Token sales distributing protocol ownership to early supporters
  - Equity offerings broadening retail access to private ventures
- ### Relationships
  - relatedTo:: [[Venture Capital]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[ICO]]
  - relatedTo:: [[DAO]]
  - bridgesTo:: [[ICO]]
  - bridgesTo:: [[Initial Coin Offering]]
  - bridgesTo:: [[Security Token Offering]]
  - contrastsWith:: [[Venture Capital]]
  - uses:: [[Token Distribution]]
  - uses:: [[Smart Contract]]
  - uses:: [[Tokenomics]]
  - enables:: [[Token Distribution]]
  - supports:: [[Decentralised Finance]]
  - implements:: [[Smart Contract]]
  - requires:: [[Tokenomics]]
  - partOf:: [[Decentralised Finance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
