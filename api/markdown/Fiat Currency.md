public:: true

# Fiat Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63e98d6e81eac3eb817d8e298a18c404fae4f2b7acb9a4dcbcdc742a5c2275fd",
  "@type": "Page",
  "vc:slug": "fiat-currency",
  "title": "Fiat Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:usd",
      "vc:label": "USD"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:money",
      "vc:label": "Money"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Fiat Currency"
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
  "@id": "urn:ngm:class:fiat-currency",
  "@type": "Class",
  "label": "Fiat Currency",
  "definition": "Money issued by a state and declared legal tender, whose value derives from government authority and public confidence rather than from a physical commodity.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:money",
      "label": "Money"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fiat-currency:44cedc008256",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63e98d6e81eac3eb817d8e298a18c404fae4f2b7acb9a4dcbcdc742a5c2275fd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[USD]]",
      "resolved": "urn:visionflow:linked:usd",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Money]]",
      "resolved": "urn:visionflow:linked:money",
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
  - Money issued by a state and declared legal tender, whose value derives from government authority and public confidence rather than from a physical commodity.

- ### Semantic Classification
  - owl-class:: blockchain:FiatCurrency
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Money]]
  - bridges-to:: [[USD]], [[Central Bank Digital Currency]]
  - enables:: [[Stablecoin]]

- ### Content
  - Fiat currency is money that a government issues and recognises as legal tender without backing by a fixed commodity such as gold. Its purchasing power rests on the issuing authority, the stability of monetary policy, and the willingness of the public to accept it.
  - In digital asset systems fiat currency is the off-chain reserve that anchors fiat-backed stablecoins and the benchmark against which most assets are priced. Central bank digital currencies extend fiat into a digital, ledger-based form issued directly by the monetary authority.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
