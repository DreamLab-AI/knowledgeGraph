public:: true

# Non-Fungible Token (NFT)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:535c9d6ac6bcefc9b9185e041ff4a1ccab9a980de2388ad49cdf209bfa3bfc0b",
  "@type": "Page",
  "vc:slug": "non-fungible-token-nft",
  "title": "Non-Fungible Token (NFT)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:creator-royalties",
      "vc:label": "Creator Royalties"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:ipfs",
      "vc:label": "IPFS"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:token-metadata",
      "vc:label": "Token Metadata"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-trading",
      "vc:label": "Asset Trading"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:crypto-token",
      "vc:label": "Crypto Token"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-hash",
      "vc:label": "Cryptographic Hash"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-ownership",
      "vc:label": "Digital Ownership"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:provenance-tracking",
      "vc:label": "Provenance Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-asset",
      "vc:label": "Virtual Asset"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Non-Fungible Token (NFT)"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:non-fungible-token-nft",
  "@type": "Class",
  "label": "Non-Fungible Token (NFT)",
  "definition": "A digital asset recorded on a distributed ledger that is uniquely identifiable and non-interchangeable, representing ownership or rights to specific digital or physical items.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:token-metadata",
        "label": "Token Metadata"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:creator-royalties",
        "label": "Creator Royalties"
      },
      {
        "@id": "urn:ngm:class:asset-trading",
        "label": "Asset Trading"
      },
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:crypto-token",
        "label": "Crypto Token"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:virtual-asset",
        "label": "Virtual Asset"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-storage",
        "label": "Decentralized Storage"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:digital-collectible",
        "label": "Digital Collectible"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-24165",
        "label": "ISO 24165"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:marketplace",
        "label": "Marketplace"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:non-fungible-token",
      "label": "Non-Fungible Token"
    }
  ],
  "quality": 0.68,
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
  "@id": "urn:visionflow:annotation:link-resolutions:non-fungible-token-nft:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:535c9d6ac6bcefc9b9185e041ff4a1ccab9a980de2388ad49cdf209bfa3bfc0b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Creator Royalties]]",
      "resolved": "urn:visionflow:linked:creator-royalties",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[IPFS]]",
      "resolved": "urn:visionflow:linked:ipfs",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 24165]]",
      "resolved": "urn:visionflow:linked:iso-24165",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Metadata]]",
      "resolved": "urn:visionflow:linked:token-metadata",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Trading]]",
      "resolved": "urn:visionflow:owl:class:asset-trading",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Crypto Token]]",
      "resolved": "urn:visionflow:owl:class:crypto-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Hash]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-hash",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:owl:class:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Ownership]]",
      "resolved": "urn:visionflow:owl:class:digital-ownership",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance Tracking]]",
      "resolved": "urn:visionflow:owl:class:provenance-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:owl:class:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Asset]]",
      "resolved": "urn:visionflow:owl:class:virtual-asset",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A digital asset recorded on a distributed ledger that is uniquely identifiable and non-interchangeable, representing ownership or rights to specific digital or physical items.

- ### Semantic Classification
  - owl-class:: blockchain:NonFungibleToken
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - is-part-of:: [[Crypto Token]], [[Digital Asset]], [[Virtual Asset]]
  - requires:: [[Blockchain]], [[Smart Contract]], [[Token Metadata]], [[Digital Wallet]]
  - enables:: [[Digital Ownership]], [[Provenance Tracking]], [[Creator Royalties]], [[Asset Trading]]
  - depends-on:: [[Token Standard]], [[Cryptographic Hash]], [[IPFS]]

- ### Content
  Non-Fungible Token (NFT) — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]], [[ISO 24165]]
  - migration-date:: 2026-04-26T00:00:00Z
