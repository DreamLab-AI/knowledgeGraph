public:: true

# Financial Regulation Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86abe32098879f9c0646fd2d1328aec7bc3c55f5de80360a6ec42124230954ad",
  "@type": "Page",
  "vc:slug": "financial-regulation-domain",
  "title": "Financial Regulation Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:capital-requirement",
      "vc:label": "Capital Requirement"
    },
    {
      "@id": "urn:visionflow:linked:know-your-customer",
      "vc:label": "Know Your Customer"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:market-conduct-rule",
      "vc:label": "Market Conduct Rule"
    },
    {
      "@id": "urn:visionflow:linked:prudential-supervision",
      "vc:label": "Prudential Supervision"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:market-stability",
      "vc:label": "Market Stability"
    },
    {
      "@id": "urn:visionflow:linked:investor-protection",
      "vc:label": "Investor Protection"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure-domain",
      "vc:label": "Financial Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance-domain",
      "vc:label": "Regulatory Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:basel-iii",
      "vc:label": "Basel III"
    },
    {
      "@id": "urn:visionflow:linked:fatf-recommendations",
      "vc:label": "FATF Recommendations"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Financial Regulation Domain"
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
  "@id": "urn:ngm:class:financial-regulation-domain",
  "@type": "Class",
  "label": "Financial Regulation Domain",
  "definition": "The Financial Regulation Domain classifies concepts concerning the rules governing financial institutions, markets and instruments. It covers prudential requirements, conduct rules, market abuse controls and the supervisory bodies that enforce them. As a top-level subject axis it constrains how financial systems and products may be designed and operated.",
  "domain": "financial-regulation",
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
        "@id": "urn:ngm:class:capital-requirement",
        "label": "Capital Requirement"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:market-conduct-rule",
        "label": "Market Conduct Rule"
      },
      {
        "@id": "urn:ngm:class:prudential-supervision",
        "label": "Prudential Supervision"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-domain",
        "label": "Regulatory Domain"
      },
      {
        "@id": "urn:ngm:class:identity-domain",
        "label": "Identity Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:market-stability",
        "label": "Market Stability"
      },
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:financial-regulation-domain:0c9bf57260f5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86abe32098879f9c0646fd2d1328aec7bc3c55f5de80360a6ec42124230954ad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Capital Requirement]]",
      "resolved": "urn:visionflow:linked:capital-requirement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Know Your Customer]]",
      "resolved": "urn:visionflow:linked:know-your-customer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Market Conduct Rule]]",
      "resolved": "urn:visionflow:linked:market-conduct-rule",
      "kind": "StubLink"
    },
    {
      "raw": "[[Prudential Supervision]]",
      "resolved": "urn:visionflow:linked:prudential-supervision",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Market Stability]]",
      "resolved": "urn:visionflow:linked:market-stability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Investor Protection]]",
      "resolved": "urn:visionflow:linked:investor-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Compliance Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Basel III]]",
      "resolved": "urn:visionflow:linked:basel-iii",
      "kind": "StubLink"
    },
    {
      "raw": "[[FATF Recommendations]]",
      "resolved": "urn:visionflow:linked:fatf-recommendations",
      "kind": "StubLink"
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
  - The Financial Regulation Domain classifies concepts concerning the rules governing financial institutions, markets and instruments. It covers prudential requirements, conduct rules, market abuse controls and the supervisory bodies that enforce them. As a top-level subject axis it constrains how financial systems and products may be designed and operated.

- ### Semantic Classification
  - owl-class:: finreg:FinancialRegulationDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Financial Infrastructure Domain]], [[Regulatory Compliance Domain]]
  - has-part:: [[Capital Requirement]], [[Know Your Customer]], [[Anti-Money Laundering]], [[Market Conduct Rule]], [[Prudential Supervision]]
  - requires:: [[Regulatory Domain]], [[Identity Domain]]
  - enables:: [[Market Stability]], [[Investor Protection]]

- ### Content
  - Financial regulation governs the conduct and resilience of institutions that take deposits, manage assets and operate markets. Prudential rules require firms to hold capital and liquidity sufficient to absorb losses and meet obligations under stress. Conduct rules protect customers and the integrity of markets against mis-selling, manipulation and abuse.
  - The domain mandates customer due diligence and transaction monitoring to counter money laundering and the financing of illicit activity. Supervisory authorities license firms, set requirements, examine compliance and impose sanctions for breach. Reporting obligations give regulators visibility into exposures and systemic risk.
  - Financial regulation bridges to financial infrastructure, whose payment and settlement systems it oversees, and to regulatory compliance, which implements its requirements. It depends on the broader Regulatory Domain for its legal basis and on the Identity Domain for reliable customer verification.

- ### Provenance
  - sources:: [[Basel III]], [[FATF Recommendations]]
  - migration-date:: 2026-05-29T00:00:00Z
