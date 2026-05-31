public:: true

# Capital Markets Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:894a396e6adfc2d10d57ab4057d8b8d11d7d77ff60a0d3f95b72e8530c2400b7",
  "@type": "Page",
  "vc:slug": "capital-markets-domain",
  "title": "Capital Markets Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:securities-issuance",
      "vc:label": "Securities Issuance"
    },
    {
      "@id": "urn:visionflow:linked:trading-venue",
      "vc:label": "Trading Venue"
    },
    {
      "@id": "urn:visionflow:linked:order-book",
      "vc:label": "Order Book"
    },
    {
      "@id": "urn:visionflow:linked:clearing-house",
      "vc:label": "Clearing House"
    },
    {
      "@id": "urn:visionflow:linked:market-microstructure",
      "vc:label": "Market Microstructure"
    },
    {
      "@id": "urn:visionflow:linked:financial-instrument",
      "vc:label": "Financial Instrument"
    },
    {
      "@id": "urn:visionflow:linked:settlement-layer",
      "vc:label": "Settlement Layer"
    },
    {
      "@id": "urn:visionflow:linked:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:linked:capital-formation",
      "vc:label": "Capital Formation"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    },
    {
      "@id": "urn:visionflow:linked:payment-systems-domain",
      "vc:label": "Payment Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation-domain",
      "vc:label": "Financial Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:mi-fid-ii",
      "vc:label": "MiFID II"
    },
    {
      "@id": "urn:visionflow:linked:cpmi-iosco-pfmi",
      "vc:label": "CPMI-IOSCO PFMI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Capital Markets Domain"
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
  "@id": "urn:ngm:class:capital-markets-domain",
  "@type": "Class",
  "label": "Capital Markets Domain",
  "definition": "The Capital Markets Domain classifies concepts concerned with the issuance, trading, and settlement of financial securities and the institutions that support them. It covers primary issuance, secondary trading venues, market microstructure, and post-trade clearing and settlement. As a top-level subject classification, it scopes the structure of organised markets rather than the individual assets traded or the regulation that governs them.",
  "domain": "capital-markets",
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
        "@id": "urn:ngm:class:securities-issuance",
        "label": "Securities Issuance"
      },
      {
        "@id": "urn:ngm:class:trading-venue",
        "label": "Trading Venue"
      },
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:clearing-house",
        "label": "Clearing House"
      },
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:financial-instruments",
        "label": "Financial Instrument"
      },
      {
        "@id": "urn:ngm:class:settlement-layer",
        "label": "Settlement Layer"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:capital-formation",
        "label": "Capital Formation"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
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
  "@id": "urn:visionflow:annotation:link-resolutions:capital-markets-domain:aa208d9f0e6b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:894a396e6adfc2d10d57ab4057d8b8d11d7d77ff60a0d3f95b72e8530c2400b7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Securities Issuance]]",
      "resolved": "urn:visionflow:linked:securities-issuance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trading Venue]]",
      "resolved": "urn:visionflow:linked:trading-venue",
      "kind": "StubLink"
    },
    {
      "raw": "[[Order Book]]",
      "resolved": "urn:visionflow:linked:order-book",
      "kind": "StubLink"
    },
    {
      "raw": "[[Clearing House]]",
      "resolved": "urn:visionflow:linked:clearing-house",
      "kind": "StubLink"
    },
    {
      "raw": "[[Market Microstructure]]",
      "resolved": "urn:visionflow:linked:market-microstructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Instrument]]",
      "resolved": "urn:visionflow:linked:financial-instrument",
      "kind": "StubLink"
    },
    {
      "raw": "[[Settlement Layer]]",
      "resolved": "urn:visionflow:linked:settlement-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:linked:price-discovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Capital Formation]]",
      "resolved": "urn:visionflow:linked:capital-formation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:liquidity-provision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Systems Domain]]",
      "resolved": "urn:visionflow:linked:payment-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation Domain]]",
      "resolved": "urn:visionflow:linked:financial-regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiFID II]]",
      "resolved": "urn:visionflow:linked:mi-fid-ii",
      "kind": "StubLink"
    },
    {
      "raw": "[[CPMI-IOSCO PFMI]]",
      "resolved": "urn:visionflow:linked:cpmi-iosco-pfmi",
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
  - The Capital Markets Domain classifies concepts concerned with the issuance, trading, and settlement of financial securities and the institutions that support them. It covers primary issuance, secondary trading venues, market microstructure, and post-trade clearing and settlement. As a top-level subject classification, it scopes the structure of organised markets rather than the individual assets traded or the regulation that governs them.

- ### Semantic Classification
  - owl-class:: capmkt:CapitalMarketsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Digital Asset Domain]], [[Payment Systems Domain]], [[Financial Regulation Domain]]
  - has-part:: [[Securities Issuance]], [[Trading Venue]], [[Order Book]], [[Clearing House]], [[Market Microstructure]]
  - requires:: [[Financial Instrument]], [[Settlement Layer]], [[Price Discovery]]
  - enables:: [[Capital Formation]], [[Liquidity Provision]], [[Price Discovery]]

- ### Content
  - The Capital Markets Domain organises the venues and processes through which capital is raised and securities change hands. Issuance brings instruments to market, order books and trading venues match buyers and sellers, and clearing houses interpose themselves to manage counterparty risk before settlement. Market microstructure studies how the rules of these venues affect prices and liquidity.
  - Two functions define the domain: capital formation, by which issuers obtain funding, and price discovery, by which trading aggregates information into prices. Both depend on liquidity, and the design of trading and settlement mechanisms determines how efficiently markets perform them. Tokenisation extends these functions to ledger-based instruments while preserving the same structural roles.
  - As a top-level domain, capital markets bridge to digital assets, which provide tokenised instruments, and to payment systems, which settle the cash leg of trades. It also bridges to financial regulation, whose rules shape venue conduct and disclosure. Keeping market structure distinct from the traded asset and the rulebook lets the ontology describe a conventional and a tokenised exchange with shared vocabulary.

- ### Provenance
  - sources:: [[MiFID II]], [[CPMI-IOSCO PFMI]]
  - migration-date:: 2026-05-29T00:00:00Z
