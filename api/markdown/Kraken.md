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
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure-domain",
      "vc:label": "Financial Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
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
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset-domain",
      "label": "Digital Asset Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
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
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
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
