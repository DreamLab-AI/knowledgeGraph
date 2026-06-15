public:: true

# The Sandbox
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d397d96211af654b1dc591b369349d93740f73c1e7f33db2c5e690eba7a80230",
  "@type": "Page",
  "vc:slug": "the-sandbox",
  "title": "The Sandbox",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:asset-tokenization",
      "vc:label": "Asset Tokenization"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-gaming",
      "vc:label": "Blockchain Gaming"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-platform",
      "vc:label": "Metaverse Platform"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "The Sandbox"
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
  "@id": "urn:ngm:class:the-sandbox",
  "@type": "Class",
  "label": "The Sandbox",
  "definition": "The Sandbox is a blockchain-based virtual world and game-creation platform where users build, own and monetise voxel-based experiences and assets recorded as non-fungible tokens on Ethereum, combining user-generated content authoring tools with a decentralised token economy centred on virtual land and in-world items.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse-platform",
      "label": "Metaverse Platform"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:voxedit",
        "label": "VoxEdit"
      },
      {
        "@id": "urn:ngm:class:game-maker",
        "label": "Game Maker"
      },
      {
        "@id": "urn:ngm:class:sand-token",
        "label": "SAND Token"
      },
      {
        "@id": "urn:ngm:class:land-nft",
        "label": "LAND NFT"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency-wallet",
        "label": "Cryptocurrency Wallet"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-tokenization",
        "label": "Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:blockchain-gaming",
        "label": "Blockchain Gaming"
      },
      {
        "@id": "urn:ngm:class:user-generated-content",
        "label": "User-Generated Content"
      },
      {
        "@id": "urn:ngm:class:play-to-earn",
        "label": "Play-to-Earn"
      },
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentraland",
        "label": "Decentraland"
      },
      {
        "@id": "urn:ngm:class:roblox",
        "label": "Roblox"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:virtual-land",
        "label": "Virtual Land"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:sandbox-metaverse",
      "label": "Sandbox Metaverse"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:the-sandbox:b5127f74421e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d397d96211af654b1dc591b369349d93740f73c1e7f33db2c5e690eba7a80230"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Tokenization]]",
      "resolved": "urn:visionflow:linked:asset-tokenization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Gaming]]",
      "resolved": "urn:visionflow:linked:blockchain-gaming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:linked:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Platform]]",
      "resolved": "urn:visionflow:linked:metaverse-platform",
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
  - The Sandbox is a blockchain-based virtual world and game-creation platform where users build, own and monetise voxel-based experiences and assets recorded as tokens.

- ### Semantic Classification
  - owl-class:: metaverse:TheSandbox
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Platform]]
  - bridges-to:: [[Digital Asset]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Smart Contract]]
  - enables:: [[Asset Tokenization]], [[Blockchain Gaming]]

- ### Content
  - The Sandbox provides creation tools for modelling voxel assets and scripting interactive games without coding, with virtual land parcels and assets held as on-chain tokens. Creators publish experiences on parcels they own and can sell assets to other users through an in-platform marketplace.
  - The platform combines a free-to-use authoring suite with a token economy, positioning user-generated content and ownership at the centre of its design. It is frequently compared with Decentraland as a leading example of a tokenised, user-owned virtual world.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
