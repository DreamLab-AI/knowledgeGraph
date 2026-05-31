public:: true

# BlackRock BUIDL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c76fb7ef06e97f39313541a9ca88e1cd3bfa5e246211d5299c93a628f84e99e",
  "@type": "Page",
  "vc:slug": "black-rock-buidl",
  "title": "BlackRock BUIDL",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:tokenisation",
      "vc:label": "Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:institutional-adoption",
      "vc:label": "Institutional Adoption"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BlackRock BUIDL"
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
  "@id": "urn:ngm:class:black-rock-buidl",
  "@type": "Class",
  "label": "BlackRock BUIDL",
  "definition": "BlackRock BUIDL is a tokenised money market fund issued by BlackRock on public blockchains that invests in cash, US Treasury bills, and repurchase agreements.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asset-tokenisation",
      "label": "Asset Tokenisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:black-rock-buidl:219d9d12e979",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c76fb7ef06e97f39313541a9ca88e1cd3bfa5e246211d5299c93a628f84e99e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenisation]]",
      "resolved": "urn:visionflow:linked:tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Adoption]]",
      "resolved": "urn:visionflow:linked:institutional-adoption",
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
  - BlackRock BUIDL is a tokenised money market fund issued by BlackRock on public blockchains that invests in cash, US Treasury bills, and repurchase agreements.

- ### Semantic Classification
  - owl-class:: finance:BlackRockBUIDL
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Asset Tokenisation]]
  - bridges-to:: [[Institutional Adoption]]
  - requires:: [[Asset Tokenisation]], [[Tokenisation]]

- ### Content
  - BUIDL, the BlackRock USD Institutional Digital Liquidity Fund, launched in 2024 in partnership with Securitize. Each token represents a share in a fund holding short-term US government securities, with yield distributed to holders.
  - It is one of the larger examples of an asset manager bringing a regulated fund on chain, and it is cited as an instance of institutional adoption of tokenised real-world assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
