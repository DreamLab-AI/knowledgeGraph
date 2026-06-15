public:: true

# Investor Protection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ecb73898b271fdb2772fbff47ab1cd4f8213f43735facdbbfb843ca9710a7e1f",
  "@type": "Page",
  "vc:slug": "investor-protection",
  "title": "Investor Protection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-requirements",
      "vc:label": "Regulatory Requirements"
    },
    {
      "@id": "urn:visionflow:linked:market-integrity",
      "vc:label": "Market Integrity"
    },
    {
      "@id": "urn:visionflow:linked:consumer-protection",
      "vc:label": "Consumer Protection"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-iosco-org",
      "vc:label": "https://www.iosco.org/"
    },
    {
      "@id": "urn:visionflow:linked:https-www-esma-europa-eu-investor-corner",
      "vc:label": "https://www.esma.europa.eu/investor-corner"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Investor Protection"
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
  "@id": "urn:ngm:class:investor-protection",
  "@type": "Class",
  "label": "Investor Protection",
  "definition": "Investor protection comprises the rules, mechanisms and institutional arrangements designed to safeguard investors from unfair, abusive or fraudulent practices in financial markets, reducing information asymmetry and ensuring access to redress.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-requirements",
        "label": "Regulatory Requirements"
      },
      {
        "@id": "urn:ngm:class:disclosure-obligations",
        "label": "Disclosure Obligations"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      },
      {
        "@id": "urn:ngm:class:investor-confidence",
        "label": "Investor Confidence"
      },
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:redress-mechanism",
        "label": "Redress Mechanism"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:market-manipulation",
        "label": "Market Manipulation"
      },
      {
        "@id": "urn:ngm:class:insider-trading",
        "label": "Insider Trading"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:securities-law",
        "label": "Securities Law"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:crypto-regulation",
        "label": "Crypto-Asset Regulation"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:retail-investor-protection",
      "label": "Retail Investor Protection"
    },
    {
      "@id": "urn:ngm:class:shareholder-protection",
      "label": "Shareholder Protection"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:investor-protection:afb1a774ed40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ecb73898b271fdb2772fbff47ab1cd4f8213f43735facdbbfb843ca9710a7e1f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Requirements]]",
      "resolved": "urn:visionflow:linked:regulatory-requirements",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Integrity]]",
      "resolved": "urn:visionflow:linked:market-integrity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consumer Protection]]",
      "resolved": "urn:visionflow:linked:consumer-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.iosco.org/]]",
      "resolved": "urn:visionflow:linked:https-www-iosco-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.esma.europa.eu/investor-corner]]",
      "resolved": "urn:visionflow:linked:https-www-esma-europa-eu-investor-corner",
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
  - Investor protection comprises the rules and mechanisms designed to safeguard investors from unfair, abusive or fraudulent practices in financial markets.

- ### Semantic Classification
  - owl-class:: governance:InvestorProtection
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Consumer Protection]]
  - requires:: [[Regulatory Requirements]]
  - enables:: [[Market Integrity]]

- ### Content
  - Investor protection measures include disclosure obligations, conduct rules for intermediaries, suitability assessments and mechanisms for redress. They aim to reduce information asymmetry and misconduct in markets.
  - Regulators enforce these measures through authorisation, supervision and sanctions. Protections extend across securities, funds and, under newer frameworks, certain crypto-assets.

- ### Provenance
  - sources:: [[https://www.iosco.org/]], [[https://www.esma.europa.eu/investor-corner]]
  - migration-date:: 2026-05-29T00:00:00Z
