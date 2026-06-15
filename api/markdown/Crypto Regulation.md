public:: true

# Crypto Regulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7c98d5fb8e2845aaf32cf8e2cec5d9216d6985d449ae42a61e9cfa3186c69d76",
  "@type": "Page",
  "vc:slug": "crypto-regulation",
  "title": "Crypto Regulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:investor-protection",
      "vc:label": "Investor Protection"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-esma-europa-eu-esmas-activities-digital-finance-and-innovation-markets-crypto-assets-regulation-mica",
      "vc:label": "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fsb-org-work-of-the-fsb-financial-innovation-and-structural-change-crypto-assets-and-global-stablecoins",
      "vc:label": "https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets-and-global-stablecoins/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Crypto Regulation"
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
  "@id": "urn:ngm:class:crypto-regulation",
  "@type": "Class",
  "label": "Crypto Regulation",
  "definition": "Crypto regulation is the body of laws and supervisory rules governing the issuance, trading, custody and use of crypto-assets, including authorisation of service providers, disclosure requirements, market conduct rules, client-asset custody standards, and anti-money-laundering obligations.",
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
    "hasPart": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:market-abuse-regulation",
        "label": "Market Abuse Regulation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:licensing",
        "label": "Licensing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      },
      {
        "@id": "urn:ngm:class:market-integrity",
        "label": "Market Integrity"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:financial-action-task-force",
        "label": "Financial Action Task Force"
      },
      {
        "@id": "urn:ngm:class:financial-stability-board",
        "label": "Financial Stability Board"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:markets-in-crypto-assets-regulation",
        "label": "Markets in Crypto-Assets Regulation"
      },
      {
        "@id": "urn:ngm:class:travel-rule",
        "label": "Travel Rule"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      },
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:basel-committee-on-banking-supervision",
        "label": "Basel Committee on Banking Supervision"
      },
      {
        "@id": "urn:ngm:class:international-organization-of-securities-commissions",
        "label": "International Organization of Securities Commissions"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:self-regulation",
        "label": "Self-Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:securities-law",
        "label": "Securities Law"
      },
      {
        "@id": "urn:ngm:class:taxation",
        "label": "Taxation"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cryptocurrency-regulation",
      "label": "Cryptocurrency Regulation"
    },
    {
      "@id": "urn:ngm:class:digital-asset-regulation",
      "label": "Digital Asset Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:crypto-regulation:dae4129cef62",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7c98d5fb8e2845aaf32cf8e2cec5d9216d6985d449ae42a61e9cfa3186c69d76"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Investor Protection]]",
      "resolved": "urn:visionflow:linked:investor-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica]]",
      "resolved": "urn:visionflow:linked:https-www-esma-europa-eu-esmas-activities-digital-finance-and-innovation-markets-crypto-assets-regulation-mica",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets-and-global-stablecoins/]]",
      "resolved": "urn:visionflow:linked:https-www-fsb-org-work-of-the-fsb-financial-innovation-and-structural-change-crypto-assets-and-global-stablecoins",
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
  - Crypto regulation is the body of laws and supervisory rules governing the issuance, trading, custody and use of crypto-assets.

- ### Semantic Classification
  - owl-class:: governance:CryptoRegulation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Anti-Money Laundering]]
  - requires:: [[Regulatory Frameworks]]
  - enables:: [[Investor Protection]]

- ### Content
  - Crypto regulation addresses crypto-asset issuers, exchanges, custodians and service providers. It covers authorisation, disclosure, market conduct, custody of client assets and anti-money laundering obligations.
  - Approaches vary across jurisdictions, with some adopting dedicated frameworks such as the European Union's MiCA and others applying existing financial law. International standards from bodies such as the Financial Action Task Force inform national rules.

- ### Provenance
  - sources:: [[https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica]], [[https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets-and-global-stablecoins/]]
  - migration-date:: 2026-05-29T00:00:00Z
