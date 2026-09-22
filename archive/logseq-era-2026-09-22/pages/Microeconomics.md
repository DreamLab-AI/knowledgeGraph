public:: true

# Microeconomics
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:microeconomics",
  "@type": "Page",
  "title": "Microeconomics",
  "vc:slug": "microeconomics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:microeconomics",
  "@type": "Class",
  "label": "Microeconomics",
  "definition": "Microeconomics is the branch of economics that studies the behaviour of individual agents — households, firms, and markets — and how their decisions about allocation of scarce resources determine prices and quantities. It analyses supply and demand, consumer and producer choice, market structures, and the conditions under which markets reach equilibrium or fail. In blockchain and token systems, microeconomic reasoning underpins mechanism design, incentive structures, and the analysis of fee markets and liquidity. It contrasts with macroeconomics, which studies aggregate economic phenomena.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:supply-and-demand",
        "label": "Supply and Demand"
      },
      {
        "@id": "urn:ngm:class:market-structure",
        "label": "Market Structure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:utility-theory",
        "label": "Utility Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:welfare-economics",
        "label": "Welfare Economics"
      },
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decision-theory",
        "label": "Decision Theory"
      },
      {
        "@id": "urn:ngm:class:derivatives-trading",
        "label": "Derivatives Trading"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
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
  - [[Microeconomics]] studies how individual households and firms allocate scarce resources, analysing [[Supply and Demand]] and [[Market Structure]] to explain prices, drawing on [[Game Theory]] and [[Utility Theory]], and contrasting with [[Macroeconomics]].

- ### Overview
  - Microeconomics builds upward from the choices of individual decision-makers to explain how markets aggregate those choices into prices and quantities. Its central organising principle is the interaction of supply and demand under scarcity.
  - Core analytical tools include marginal analysis, elasticity, and the modelling of rational agents who maximise utility (consumers) or profit (firms) subject to constraints.
  - It studies market structures — perfect competition, monopoly, oligopoly, and monopolistic competition — and the welfare consequences of each, including the analysis of externalities and public goods where markets fail.

- ### Key aspects
  - Consumer theory: how preferences, captured through utility, and budget constraints determine demand for goods and services.
  - Producer theory: how firms choose inputs and output levels to maximise profit given costs and technology.
  - Market equilibrium: the price-quantity pair at which supply equals demand, and the comparative statics of shifts in either curve.
  - Game theory and mechanism design: the strategic interaction of agents, central to incentive design in token economies.

- ### Applications
  - Designing fee markets and token incentive schemes in blockchain protocols.
  - Analysing liquidity provision and price formation in decentralised exchanges.
  - Regulatory analysis of market power, externalities, and competition policy.

- ### Relationships
  - bridgesTo:: [[Market Microstructure]]
  - bridgesTo:: [[Finance]]
  - contrastsWith:: [[Macroeconomics]]
  - hasPart:: [[Supply and Demand]]
  - hasPart:: [[Market Structure]]
  - uses:: [[Game Theory]]
  - uses:: [[Utility Theory]]
  - enables:: [[Welfare Economics]]
  - enables:: [[Behavioural Economics]]
  - relatedTo:: [[Decision Theory]]
  - relatedTo:: [[Derivatives Trading]]
  - supports:: [[Monetary Policy]]
  - partOf:: [[Economics]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
