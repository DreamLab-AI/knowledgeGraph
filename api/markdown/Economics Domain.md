public:: true

# Economics Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:227ffd381caceca54f0843df9be7155ae417a8fc956e68d18cac712ff03d527c",
  "@type": "Page",
  "vc:slug": "economics-domain",
  "title": "Economics Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:microeconomics",
      "vc:label": "Microeconomics"
    },
    {
      "@id": "urn:visionflow:linked:macroeconomics",
      "vc:label": "Macroeconomics"
    },
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    },
    {
      "@id": "urn:visionflow:linked:monetary-theory",
      "vc:label": "Monetary Theory"
    },
    {
      "@id": "urn:visionflow:linked:token-economics",
      "vc:label": "Token Economics"
    },
    {
      "@id": "urn:visionflow:linked:incentive-structure",
      "vc:label": "Incentive Structure"
    },
    {
      "@id": "urn:visionflow:linked:market-participants",
      "vc:label": "Market Participants"
    },
    {
      "@id": "urn:visionflow:linked:resource-allocation",
      "vc:label": "Resource Allocation"
    },
    {
      "@id": "urn:visionflow:linked:incentive-analysis",
      "vc:label": "Incentive Analysis"
    },
    {
      "@id": "urn:visionflow:linked:policy-evaluation",
      "vc:label": "Policy Evaluation"
    },
    {
      "@id": "urn:visionflow:linked:mechanism-design-domain",
      "vc:label": "Mechanism Design Domain"
    },
    {
      "@id": "urn:visionflow:linked:capital-markets-domain",
      "vc:label": "Capital Markets Domain"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Economics Domain"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:economics-domain",
  "@type": "Class",
  "label": "Economics Domain",
  "definition": "The Economics Domain classifies concepts concerned with how agents allocate scarce resources and how incentives shape behaviour and outcomes. It covers micro and macro analysis, market structure, monetary phenomena, and the token economics that arise in ledger-based systems. As a top-level subject classification, it scopes the analytical study of allocation and incentives rather than the design of specific mechanisms.",
  "domain": "economics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:microeconomics",
        "label": "Microeconomics"
      },
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:monetary-theory",
        "label": "Monetary Theory"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:incentive-structure",
        "label": "Incentive Structure"
      },
      {
        "@id": "urn:ngm:class:market-participants",
        "label": "Market Participants"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:resource-allocation",
        "label": "Resource Allocation"
      },
      {
        "@id": "urn:ngm:class:incentive-analysis",
        "label": "Incentive Analysis"
      },
      {
        "@id": "urn:ngm:class:policy-evaluation",
        "label": "Policy Evaluation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:economics-domain:9b0271231afe",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:227ffd381caceca54f0843df9be7155ae417a8fc956e68d18cac712ff03d527c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Microeconomics]]",
      "resolved": "urn:visionflow:linked:microeconomics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Macroeconomics]]",
      "resolved": "urn:visionflow:linked:macroeconomics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Game Theory]]",
      "resolved": "urn:visionflow:linked:game-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Theory]]",
      "resolved": "urn:visionflow:linked:monetary-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Economics]]",
      "resolved": "urn:visionflow:linked:token-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Incentive Structure]]",
      "resolved": "urn:visionflow:linked:incentive-structure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Participants]]",
      "resolved": "urn:visionflow:linked:market-participants",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Allocation]]",
      "resolved": "urn:visionflow:linked:resource-allocation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Incentive Analysis]]",
      "resolved": "urn:visionflow:linked:incentive-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Policy Evaluation]]",
      "resolved": "urn:visionflow:linked:policy-evaluation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mechanism Design Domain]]",
      "resolved": "urn:visionflow:linked:mechanism-design-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Capital Markets Domain]]",
      "resolved": "urn:visionflow:linked:capital-markets-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Economics Domain classifies concepts concerned with how agents allocate scarce resources and how incentives shape behaviour and outcomes. It covers micro and macro analysis, market structure, monetary phenomena, and the token economics that arise in ledger-based systems. As a top-level subject classification, it scopes the analytical study of allocation and incentives rather than the design of specific mechanisms.

- ### Semantic Classification
  - owl-class:: econ:EconomicsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Mechanism Design Domain]], [[Capital Markets Domain]], [[Decentralised Finance Domain]]
  - has-part:: [[Microeconomics]], [[Macroeconomics]], [[Game Theory]], [[Monetary Theory]], [[Token Economics]]
  - requires:: [[Incentive Structure]], [[Market Participants]]
  - enables:: [[Resource Allocation]], [[Incentive Analysis]], [[Policy Evaluation]]

- ### Content
  - The Economics Domain organises the analysis of how individuals, firms, and systems allocate limited resources. Microeconomics examines decisions and markets at the level of agents and prices, macroeconomics studies aggregates such as output and inflation, and game theory formalises strategic interaction. Monetary theory and token economics extend this analysis to the supply, demand, and incentives surrounding currencies and on-ledger tokens.
  - Incentives are the connecting thread: behaviour follows from the payoffs that participants face, and outcomes emerge from the interaction of many such decisions. Models make assumptions about rationality, information, and constraints, and their predictive value depends on how well those assumptions hold. In ledger-based systems, token economics applies these tools to issuance schedules, staking rewards, and fee markets.
  - As a top-level domain, economics provides the analytical foundation for mechanism design, which engineers incentives, and informs capital markets and decentralised finance. It bridges to the Mechanism Design Domain, which applies economic theory to construct rules with desired outcomes. Separating the study of incentives from their deliberate design keeps analysis and engineering distinct in the graph.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
