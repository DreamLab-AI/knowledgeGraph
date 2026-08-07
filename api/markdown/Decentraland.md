public:: true

# Decentraland
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bcf5f697c2b70eea155a5f4b4a30ebb98ae37d1d6ee7a14672938604f04509e6",
  "@type": "Page",
  "vc:slug": "decentraland",
  "title": "Decentraland",
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
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenization"
    },
    {
      "@id": "urn:visionflow:linked:social-vr",
      "vc:label": "Social VR"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-autonomous-organization",
      "vc:label": "Decentralized Autonomous Organization"
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
      "vc:value": "Decentraland"
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
  "@id": "urn:ngm:class:decentraland",
  "@type": "Class",
  "label": "Decentraland",
  "definition": "Decentraland is a blockchain-based virtual world in which users own parcels of virtual land and in-world assets as non-fungible tokens on the Ethereum network, governed by a decentralised autonomous organisation through on-chain voting with governance tokens.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:metaverse-platform",
    "label": "Metaverse Platform"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency-wallet",
        "label": "Cryptocurrency Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:social-vr",
        "label": "Social VR"
      },
      {
        "@id": "urn:ngm:class:virtual-land-rights",
        "label": "Virtual Land Ownership"
      },
      {
        "@id": "urn:ngm:class:user-generated-content",
        "label": "User-Generated Content"
      },
      {
        "@id": "urn:ngm:class:play-to-earn-p2-e",
        "label": "Play-to-Earn"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:land-nft",
        "label": "LAND NFT"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:open-metaverse",
        "label": "Open Metaverse"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3 Ecosystem"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:the-sandbox",
        "label": "The Sandbox"
      },
      {
        "@id": "urn:ngm:class:roblox",
        "label": "Roblox"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:distributed-governance",
        "label": "Distributed Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:decentraland-virtual-world",
      "label": "Decentraland Virtual World"
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
  "@id": "urn:visionflow:annotation:link-resolutions:decentraland:e4c81f0b9fe9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bcf5f697c2b70eea155a5f4b4a30ebb98ae37d1d6ee7a14672938604f04509e6"
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
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social VR]]",
      "resolved": "urn:visionflow:linked:social-vr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Autonomous Organization]]",
      "resolved": "urn:visionflow:linked:decentralized-autonomous-organization",
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
  - Decentraland is a blockchain-based virtual world in which users own parcels of virtual land and in-world assets as tokens, governed by a decentralised autonomous organisation.

- ### Semantic Classification
  - owl-class:: metaverse:Decentraland
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Platform]]
  - bridges-to:: [[Decentralized Autonomous Organization]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Smart Contract]]
  - enables:: [[Asset Tokenisation]], [[Social VR]]

- ### Content
  - Decentraland represents land parcels and wearable items as on-chain tokens, allowing users to buy, sell and build persistent content that they retain ownership of independently of the operator. The client renders an explorable 3D world in the browser and supports user-authored scenes and interactive experiences.
  - Governance of platform parameters and the asset registry is handled through a decentralised autonomous organisation whose members vote with governance tokens. This model differs from operator-controlled virtual worlds by placing land policy and treasury decisions in the hands of token holders.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
