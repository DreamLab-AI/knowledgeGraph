public:: true

# Kraken
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a979bfe33b0f6fa86010681ecec0595ece8735db945b9e04cf8dc9cb1438179f",
  "@type": "Page",
  "vc:slug": "kraken",
  "title": "Kraken",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:custody",
      "vc:label": "Custody"
    },
    {
      "@id": "urn:visionflow:linked:crypto-trading",
      "vc:label": "Crypto Trading"
    },
    {
      "@id": "urn:visionflow:linked:fiat-on-ramp",
      "vc:label": "Fiat On-Ramp"
    },
    {
      "@id": "urn:visionflow:linked:infra-legal-and-regulatory",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure",
      "vc:label": "Financial Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Kraken"
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
  "@id": "urn:ngm:class:kraken",
  "@type": "Class",
  "label": "Kraken",
  "definition": "Kraken is a centralised cryptocurrency exchange founded in 2011 and headquartered in the United States. It provides spot trading, margin and futures trading, staking and custody services across a wide range of digital assets and fiat currencies. It is among the longer-established exchanges and is noted for its emphasis on regulatory compliance, security and the provision of fiat on-ramps in multiple jurisdictions.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:bc-defi-and-economics",
    "label": "Bc Defi And Economics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:spot-trading",
        "label": "Spot Trading"
      },
      {
        "@id": "urn:ngm:class:margin-trading",
        "label": "Margin Trading"
      },
      {
        "@id": "urn:ngm:class:staking-service",
        "label": "Staking Service"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:kyc-aml",
        "label": "KYC/AML"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:crypto-trading",
        "label": "Crypto Trading"
      },
      {
        "@id": "urn:ngm:class:fiat-on-ramp",
        "label": "Fiat On-Ramp"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      },
      {
        "@id": "urn:ngm:class:futures-trading",
        "label": "Futures Trading"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain-infrastructure",
        "label": "Blockchain Infrastructure"
      },
      {
        "@id": "urn:ngm:class:banking-integration",
        "label": "Banking Integration"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:proof-of-reserves",
        "label": "Proof of Reserves"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      },
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infra-legal-and-regulatory",
        "label": "Regulatory Domain"
      },
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure Domain"
      },
      {
        "@id": "urn:ngm:class:traditional-finance",
        "label": "Traditional Finance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:crypto-asset-service-provider",
        "label": "Crypto Asset Service Provider"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:centralised-crypto-exchange",
      "label": "Centralised Crypto Exchange"
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
  "@id": "urn:visionflow:annotation:link-resolutions:kraken:686d22d695e2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a979bfe33b0f6fa86010681ecec0595ece8735db945b9e04cf8dc9cb1438179f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "StubLink"
    },
    {
      "raw": "[[Custody]]",
      "resolved": "urn:visionflow:linked:custody",
      "kind": "StubLink"
    },
    {
      "raw": "[[Crypto Trading]]",
      "resolved": "urn:visionflow:linked:crypto-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fiat On-Ramp]]",
      "resolved": "urn:visionflow:linked:fiat-on-ramp",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:infra-legal-and-regulatory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset",
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
  - Kraken is a centralised cryptocurrency exchange founded in 2011 and headquartered in the United States. It provides spot trading, margin and futures trading, staking and custody services across a wide range of digital assets and fiat currencies. It is among the longer-established exchanges and is noted for its emphasis on regulatory compliance, security and the provision of fiat on-ramps in multiple jurisdictions.

- ### Semantic Classification
  - owl-class:: asset:Kraken
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Digital Asset Domain]]
  - bridges-to:: [[Regulatory Domain]], [[Financial Infrastructure Domain]]
  - requires:: [[Order Book]], [[Custody]]
  - enables:: [[Crypto Trading]], [[Fiat On-Ramp]]

- ### Content
  - Kraken operates a custodial, order-book exchange where users deposit funds and trade through a centrally matched market. In addition to spot trading, it offers derivatives, margin facilities and staking services that let users earn rewards on proof-of-stake assets held on the platform.
  - As a centralised intermediary, Kraken holds customer assets and is responsible for security, solvency and compliance with anti-money-laundering and know-your-customer requirements. Its longevity and focus on regulatory engagement distinguish it from venues that have prioritised rapid expansion over compliance.
  - Kraken functions as a fiat on-ramp and off-ramp, connecting traditional banking to cryptocurrency markets. This places it within the broader financial infrastructure linking conventional money systems to digital assets, and subject to evolving regulation of crypto-asset service providers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
