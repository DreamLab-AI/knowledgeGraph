public:: true

# Maple Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6603fa13d605afcef69149aff5da1fc3b832ee5b3b345a68888544c3af21d982",
  "@type": "Page",
  "vc:slug": "maple-finance",
  "title": "Maple Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
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
      "vc:value": "Maple Finance"
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
  "@id": "urn:ngm:class:maple-finance",
  "@type": "Class",
  "label": "Maple Finance",
  "definition": "Maple Finance is a decentralised finance protocol that arranges undercollateralised and collateralised lending to institutional borrowers through on-chain credit pools.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:de-fi",
      "label": "DeFi"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:maple-finance:48a1625a1c0e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6603fa13d605afcef69149aff5da1fc3b832ee5b3b345a68888544c3af21d982"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
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
  - Maple Finance is a decentralised finance protocol that arranges undercollateralised and collateralised lending to institutional borrowers through on-chain credit pools.

- ### Semantic Classification
  - owl-class:: blockchain:MapleFinance
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[DeFi]]
  - bridges-to:: [[Institutional Adoption]]
  - requires:: [[Smart Contract]], [[DeFi]]

- ### Content
  - Maple Finance connects lenders with vetted institutional borrowers through pools managed by delegates who underwrite loans. Lenders deposit capital and earn interest, while borrowers draw funds under terms set in the pool.
  - The protocol focuses on on-chain private credit and has offered products backed by real-world assets such as US Treasury bills, positioning itself between decentralised finance and institutional lending.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
