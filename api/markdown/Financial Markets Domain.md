public:: true

# Financial Markets Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8fc5e0de6c53ed99ffa8dd7d53fc96daea47062e50b852eec4d9a10b4cc88066",
  "@type": "Page",
  "vc:slug": "financial-markets-domain",
  "title": "Financial Markets Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-pricing",
      "vc:label": "Asset Pricing"
    },
    {
      "@id": "urn:visionflow:linked:algorithmic-trading",
      "vc:label": "Algorithmic Trading"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:market-microstructure",
      "vc:label": "Market Microstructure"
    },
    {
      "@id": "urn:visionflow:linked:portfolio-optimisation",
      "vc:label": "Portfolio Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-calculus",
      "vc:label": "Stochastic Calculus"
    },
    {
      "@id": "urn:visionflow:linked:quantitative-trading",
      "vc:label": "Quantitative Trading"
    },
    {
      "@id": "urn:visionflow:linked:derivatives-valuation",
      "vc:label": "Derivatives Valuation"
    },
    {
      "@id": "urn:visionflow:linked:risk-assessment",
      "vc:label": "Risk Assessment"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulation-domain",
      "vc:label": "Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
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
      "vc:value": "Financial Markets Domain"
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
  "@id": "urn:ngm:class:financial-markets-domain",
  "@type": "Class",
  "label": "Financial Markets Domain",
  "definition": "The Financial Markets Domain covers the structure, instruments and behaviour of markets in which financial assets are traded. Its scope includes asset pricing, trading mechanisms, risk and portfolio management, and market microstructure. It is a top-level subject classification applied to financial technology and analysis. The boundary excludes corporate financial reporting and internal control, which belong to the Corporate Governance Domain.",
  "domain": "financial-markets",
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
        "@id": "urn:ngm:class:asset-pricing",
        "label": "Asset Pricing"
      },
      {
        "@id": "urn:ngm:class:algorithmic-trading",
        "label": "Algorithmic Trading"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:portfolio-optimisation",
        "label": "Portfolio Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:stochastic-calculus",
        "label": "Stochastic Calculus"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quantitative-trading",
        "label": "Quantitative Trading"
      },
      {
        "@id": "urn:ngm:class:derivatives-valuation",
        "label": "Derivatives Valuation"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
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
  "@id": "urn:visionflow:annotation:link-resolutions:financial-markets-domain:e98c30969d56",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8fc5e0de6c53ed99ffa8dd7d53fc96daea47062e50b852eec4d9a10b4cc88066"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Pricing]]",
      "resolved": "urn:visionflow:linked:asset-pricing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Algorithmic Trading]]",
      "resolved": "urn:visionflow:linked:algorithmic-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Market Microstructure]]",
      "resolved": "urn:visionflow:linked:market-microstructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Portfolio Optimisation]]",
      "resolved": "urn:visionflow:linked:portfolio-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stochastic Calculus]]",
      "resolved": "urn:visionflow:linked:stochastic-calculus",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quantitative Trading]]",
      "resolved": "urn:visionflow:linked:quantitative-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Derivatives Valuation]]",
      "resolved": "urn:visionflow:linked:derivatives-valuation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Assessment]]",
      "resolved": "urn:visionflow:linked:risk-assessment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation Domain]]",
      "resolved": "urn:visionflow:linked:regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
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
  - The Financial Markets Domain covers the structure, instruments and behaviour of markets in which financial assets are traded. Its scope includes asset pricing, trading mechanisms, risk and portfolio management, and market microstructure. It is a top-level subject classification applied to financial technology and analysis. The boundary excludes corporate financial reporting and internal control, which belong to the Corporate Governance Domain.

- ### Semantic Classification
  - owl-class:: fin:FinancialMarketsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Blockchain Domain]], [[Regulation Domain]], [[Machine Learning Domain]]
  - has-part:: [[Asset Pricing]], [[Algorithmic Trading]], [[Risk Management]], [[Market Microstructure]], [[Portfolio Optimisation]]
  - requires:: [[Probability Theory]], [[Statistics]], [[Stochastic Calculus]]
  - enables:: [[Quantitative Trading]], [[Derivatives Valuation]], [[Risk Assessment]]

- ### Content
  - The Financial Markets Domain addresses how markets organise the trading of assets and how prices, risks and returns arise from that activity. Its scope covers asset pricing theory, the mechanisms and algorithms of trading, the management of risk across portfolios and the microstructure of order books. The boundary is the market; the internal governance and reporting of firms belong to the Corporate Governance Domain.
  - Member concepts include Asset Pricing, Algorithmic Trading, Risk Management, Market Microstructure and Portfolio Optimisation. These depend on probability theory and statistics for modelling uncertainty and on stochastic calculus for the dynamics of asset prices.
  - The domain bridges to the Blockchain Domain through digital assets and decentralised finance, to the Regulation Domain through market rules and supervision, and to the Machine Learning Domain through quantitative prediction. It enables quantitative trading, derivatives valuation and risk assessment.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
