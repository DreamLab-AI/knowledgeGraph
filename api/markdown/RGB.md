public:: true

# RGB
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c2eb6555cd9e6b4e19ae51c8a8dcb816bd61be35ddf6514535cdf136168ebf7",
  "@type": "Page",
  "vc:slug": "rgb",
  "title": "RGB",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:client-side-validation",
      "vc:label": "Client-Side Validation"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "RGB"
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
  "@id": "urn:ngm:class:rgb",
  "@type": "Class",
  "label": "RGB",
  "definition": "A protocol for issuing and transferring assets and running smart contracts on Bitcoin using client-side validation and single-use seals anchored to the chain.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin",
      "label": "Bitcoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:client-side-validation",
        "label": "Client-Side Validation"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rgb:89d41a198cfc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c2eb6555cd9e6b4e19ae51c8a8dcb816bd61be35ddf6514535cdf136168ebf7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Client-Side Validation]]",
      "resolved": "urn:visionflow:linked:client-side-validation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - A protocol for issuing and transferring assets and running smart contracts on Bitcoin using client-side validation and single-use seals anchored to the chain.

- ### Semantic Classification
  - owl-class:: blockchain:RGB
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Client-Side Validation]], [[UTXO]]
  - enables:: [[Lightning Network]]

- ### Content
  - RGB keeps contract state and validation off-chain, with peers checking the history of an asset themselves rather than relying on global consensus. Bitcoin transactions act as single-use seals that commit to state transitions without publishing the data.
  - This design keeps asset data private and off the base layer while still anchoring ownership to Bitcoin. RGB contracts can also operate over Lightning channels, extending fast off-chain transfer to issued assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
