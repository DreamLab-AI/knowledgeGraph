public:: true

# Information Asymmetry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:information-asymmetry",
  "@type": "Page",
  "vc:slug": "information-asymmetry",
  "title": "Information Asymmetry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-asymmetry",
  "@type": "Class",
  "label": "Information Asymmetry",
  "definition": "Information asymmetry is a condition in which one party to a transaction or interaction possesses more or better information than another, distorting decisions and market outcomes. It gives rise to adverse selection and moral hazard, and motivates institutions such as signalling, screening, disclosure rules, and reputation systems. It is a foundational concept in microeconomics and is increasingly relevant to AI systems whose training data and outputs can encode hidden biases.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economic-mechanism",
      "label": "Economic Mechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:adverse-selection",
        "label": "Adverse Selection"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:signalling",
        "label": "Signalling"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Screening"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:principal-agent-problem",
        "label": "Principal-Agent Problem"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      },
      {
        "@id": "urn:ngm:class:auction-theory",
        "label": "Auction Theory"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:contract-theory",
        "label": "Contract Theory"
      },
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:efficient-market-hypothesis",
        "label": "Efficient Market Hypothesis"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bias-in-large-language-models",
        "label": "Bias in Large Language Models"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Decentralized Oracle"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction-cost-economics",
        "label": "Transaction Cost Economics"
      },
      {
        "@id": "urn:ngm:class:economics",
        "label": "Information Economics"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:informational-asymmetry",
      "label": "Informational Asymmetry"
    },
    {
      "@id": "urn:ngm:class:knowledge-gap",
      "label": "Knowledge Gap"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Information asymmetry describes unequal access to relevant information between parties, a core problem in [[Economics]] that produces adverse selection and moral hazard. Analogous opacity in model behaviour relates to [[Bias in Large Language Models]].
- ### Content
  - Markets address asymmetry through warranties, certification, disclosure mandates, and intermediaries that aggregate information. In AI, the inability to inspect what a model has learned creates a comparable gap between developers, deployers, and users.
