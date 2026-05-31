public:: true

# Centrifuge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:49509427107791eed6039a96410932e838fe09a74fc79f83d804474bd3d113ff",
  "@type": "Page",
  "vc:slug": "centrifuge",
  "title": "Centrifuge",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Centrifuge"
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
  "@id": "urn:ngm:class:centrifuge",
  "@type": "Class",
  "label": "Centrifuge",
  "definition": "Centrifuge is a decentralised finance protocol that brings real-world assets such as invoices and loans on chain so they can be used as collateral for financing.",
  "domain": "blockchain",
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
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:centrifuge:0e0103a79148",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:49509427107791eed6039a96410932e838fe09a74fc79f83d804474bd3d113ff"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
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
  - Centrifuge is a decentralised finance protocol that brings real-world assets such as invoices and loans on chain so they can be used as collateral for financing.

- ### Semantic Classification
  - owl-class:: blockchain:Centrifuge
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Asset Tokenisation]]
  - bridges-to:: [[DeFi]]
  - requires:: [[Asset Tokenisation]], [[Smart Contract]]

- ### Content
  - Centrifuge tokenises real-world assets including trade receivables, real estate, and consumer loans, allowing asset originators to obtain financing from on-chain lenders. Pools issue tranched tokens that represent different risk levels.
  - The protocol has integrated with lending markets and has worked with MakerDAO to provide real-world asset collateral, connecting off-chain credit with decentralised finance liquidity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
