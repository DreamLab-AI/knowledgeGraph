public:: true

# Elliptic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:746da9604d61bb0533e3015cd38db7551c5577e9b582532fd3f06a47093adc92",
  "@type": "Page",
  "vc:slug": "elliptic",
  "title": "Elliptic",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-analytics",
      "vc:label": "Blockchain Analytics"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:transaction-monitoring",
      "vc:label": "Transaction Monitoring"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Elliptic"
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
  "@id": "urn:ngm:class:elliptic",
  "@type": "Class",
  "label": "Elliptic",
  "definition": "Elliptic is a company that provides blockchain analytics and compliance tools for tracing cryptocurrency transactions and assessing risk.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-analytics",
      "label": "Blockchain Analytics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-analytics",
        "label": "Blockchain Analytics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:elliptic:8198cf44658b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:746da9604d61bb0533e3015cd38db7551c5577e9b582532fd3f06a47093adc92"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Analytics]]",
      "resolved": "urn:visionflow:linked:blockchain-analytics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Monitoring]]",
      "resolved": "urn:visionflow:linked:transaction-monitoring",
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
  - Elliptic is a company that provides blockchain analytics and compliance tools for tracing cryptocurrency transactions and assessing risk.

- ### Semantic Classification
  - owl-class:: blockchain:Elliptic
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain Analytics]]
  - bridges-to:: [[Transaction Monitoring]]
  - requires:: [[Blockchain Analytics]]
  - enables:: [[Anti-Money Laundering]]

- ### Content
  - Elliptic offers software that analyses blockchain transactions to identify links to illicit activity and to support regulatory compliance.
  - Its products are used by financial institutions and cryptocurrency businesses for anti-money laundering and transaction monitoring.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
