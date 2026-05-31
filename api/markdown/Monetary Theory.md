public:: true

# Monetary Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6235881c40e1adebd55c51e9d25182ba943e5697211d05335f9b81b8357b5813",
  "@type": "Page",
  "vc:slug": "monetary-theory",
  "title": "Monetary Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:fiat-currency",
      "vc:label": "Fiat Currency"
    },
    {
      "@id": "urn:visionflow:linked:inflation",
      "vc:label": "Inflation"
    },
    {
      "@id": "urn:visionflow:linked:economics-domain",
      "vc:label": "Economics Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Monetary Theory"
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
  "@id": "urn:ngm:class:monetary-theory",
  "@type": "Class",
  "label": "Monetary Theory",
  "definition": "Monetary theory studies the nature of money, how its supply is created and managed, and how monetary conditions affect prices, output and financial stability.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics-domain",
      "label": "Economics Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:monetary-theory:f9bba7c1d3ff",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6235881c40e1adebd55c51e9d25182ba943e5697211d05335f9b81b8357b5813"
  },
  "vc:resolutions": [
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fiat Currency]]",
      "resolved": "urn:visionflow:linked:fiat-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inflation]]",
      "resolved": "urn:visionflow:linked:inflation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economics Domain]]",
      "resolved": "urn:visionflow:linked:economics-domain",
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
  - Monetary theory studies the nature of money, how its supply is created and managed, and how monetary conditions affect prices, output and financial stability.

- ### Semantic Classification
  - owl-class:: metaverse:MonetaryTheory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics Domain]]
  - bridges-to:: [[Fiat Currency]], [[Inflation]]
  - requires:: [[Economics]]
  - enables:: [[Central Bank Digital Currency]]

- ### Content
  - Monetary theory examines the functions of money, the mechanisms of money creation by central and commercial banks, and the transmission from monetary policy to inflation and activity. Competing schools differ on how money interacts with the real economy.
  - It frames debates over fiat currency, inflation and the design of central bank digital currencies. The field connects abstract questions about money to concrete payment and currency systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
