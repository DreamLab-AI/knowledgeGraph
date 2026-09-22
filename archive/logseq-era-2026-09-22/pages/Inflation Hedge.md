public:: true

# Inflation Hedge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13d37d1c8404028fd8e640fdc08b264c30886ec2bf261504786fba0ac4872303",
  "@type": "Page",
  "vc:slug": "inflation-hedge",
  "title": "Inflation Hedge",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inflation",
      "vc:label": "Inflation"
    },
    {
      "@id": "urn:visionflow:linked:gold",
      "vc:label": "Gold"
    },
    {
      "@id": "urn:visionflow:linked:store-of-value",
      "vc:label": "Store of Value"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Inflation Hedge"
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
  "@id": "urn:ngm:class:inflation-hedge",
  "@type": "Class",
  "label": "Inflation Hedge",
  "definition": "An inflation hedge is an asset expected to retain or increase its value as the general price level rises, protecting purchasing power. Commonly cited examples include gold, real estate and index-linked bonds.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:store-of-value",
      "label": "Store of Value"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:inflation-hedge:8a76edc5f433",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13d37d1c8404028fd8e640fdc08b264c30886ec2bf261504786fba0ac4872303"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inflation]]",
      "resolved": "urn:visionflow:linked:inflation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gold]]",
      "resolved": "urn:visionflow:linked:gold",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Store of Value]]",
      "resolved": "urn:visionflow:linked:store-of-value",
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
  - An inflation hedge is an asset expected to retain or increase its value as the general price level rises, protecting purchasing power. Commonly cited examples include gold, real estate and index-linked bonds.

- ### Semantic Classification
  - owl-class:: finance:InflationHedge
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Store of Value]]
  - bridges-to:: [[Inflation]], [[Gold]]

- ### Content
  - An inflation hedge is an investment held with the expectation that its value will rise at least in line with inflation, offsetting the erosion of purchasing power that affects cash. Assets often discussed in this role include gold, commodities, real estate and inflation-linked government bonds.
  - The effectiveness of any hedge varies with the source and persistence of inflation and over different time horizons, so no asset is a guaranteed protection. Proponents have also debated whether scarce digital assets such as Bitcoin can serve this function, with mixed empirical evidence.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
