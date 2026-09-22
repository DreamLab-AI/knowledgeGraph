public:: true

# Basel III
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e17a24fd67b6d22271987d702f99fc4a03cc70b81eb5b12b8335543d0d2c7e9c",
  "@type": "Page",
  "vc:slug": "basel-iii",
  "title": "Basel III",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:financial-stability",
      "vc:label": "Financial Stability"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bis-org-bcbs-basel-3-htm",
      "vc:label": "https://www.bis.org/bcbs/basel3.htm"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bis-org-bcbs",
      "vc:label": "https://www.bis.org/bcbs/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Basel III"
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
  "@id": "urn:ngm:class:basel-iii",
  "@type": "Class",
  "label": "Basel III",
  "definition": "Basel III is an international set of banking regulatory standards on capital adequacy, stress-tested liquidity buffers, and leverage limits, developed by the Basel Committee on Banking Supervision in response to the 2007-2009 global financial crisis.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:financial-regulation",
    "label": "Financial Regulation"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy Ratio"
      },
      {
        "@id": "urn:ngm:class:liquidity-coverage-ratio",
        "label": "Liquidity Coverage Ratio"
      },
      {
        "@id": "urn:ngm:class:capital-conservation-buffer",
        "label": "Capital Conservation Buffer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:basel-accords",
        "label": "Basel Accords"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk Mitigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:credit-risk",
        "label": "Credit Risk"
      },
      {
        "@id": "urn:ngm:class:market-risk",
        "label": "Market Risk"
      },
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:macroprudential-policy",
        "label": "Macroprudential Policy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:basel-committee-on-banking-supervision",
        "label": "Basel Committee on Banking Supervision"
      },
      {
        "@id": "urn:ngm:class:bank-for-international-settlements",
        "label": "Bank for International Settlements"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:basel-i",
        "label": "Basel I"
      },
      {
        "@id": "urn:ngm:class:basel-ii",
        "label": "Basel II"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:countercyclical-capital-buffer",
        "label": "Countercyclical Capital Buffer"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:third-basel-accord",
      "label": "Third Basel Accord"
    },
    {
      "@id": "urn:ngm:class:basel-3",
      "label": "Basel 3"
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
  "@id": "urn:visionflow:annotation:link-resolutions:basel-iii:928ed0f74f45",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e17a24fd67b6d22271987d702f99fc4a03cc70b81eb5b12b8335543d0d2c7e9c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Stability]]",
      "resolved": "urn:visionflow:linked:financial-stability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.bis.org/bcbs/basel3.htm]]",
      "resolved": "urn:visionflow:linked:https-www-bis-org-bcbs-basel-3-htm",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.bis.org/bcbs/]]",
      "resolved": "urn:visionflow:linked:https-www-bis-org-bcbs",
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
  - Basel III is an international set of banking regulatory standards on capital adequacy, borrowing limits and liquidity developed by the Basel Committee on Banking Supervision.

- ### Semantic Classification
  - owl-class:: governance:BaselIII
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Risk Management]]
  - requires:: [[Regulatory Frameworks]]
  - enables:: [[Financial Stability]]

- ### Content
  - Basel III was developed in response to the financial crisis of 2007 to 2009 and strengthens bank capital requirements, introduces borrowing and liquidity standards, and improves risk coverage. It is issued by the Basel Committee on Banking Supervision.
  - The framework raises the quality and quantity of regulatory capital that banks must hold and adds buffers intended to absorb losses during stress. National authorities transpose the standards into local rules.

- ### Provenance
  - sources:: [[https://www.bis.org/bcbs/basel3.htm]], [[https://www.bis.org/bcbs/]]
  - migration-date:: 2026-05-29T00:00:00Z
