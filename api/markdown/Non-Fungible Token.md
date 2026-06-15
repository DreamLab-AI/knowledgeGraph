public:: true

# Non-Fungible Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cda08ea4dba68c83f2253c16dea57c26d6caf8315ceeec4a7086adae783cf86e",
  "@type": "Page",
  "vc:slug": "non-fungible-token",
  "title": "Non-Fungible Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:erc-721",
      "vc:label": "ERC-721"
    },
    {
      "@id": "urn:visionflow:linked:nft-standard",
      "vc:label": "NFT Standard"
    },
    {
      "@id": "urn:visionflow:linked:nft-marketplace",
      "vc:label": "NFT Marketplace"
    },
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Non-Fungible Token"
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
  "@id": "urn:ngm:class:non-fungible-token",
  "@type": "Class",
  "label": "Non-Fungible Token",
  "definition": "A token standard in which each unit is distinct and not interchangeable, used to represent ownership of a specific digital or referenced physical item on a distributed ledger; uniqueness is enforced by a token identifier and ownership is tracked via smart-contract state.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:token",
    "label": "Token"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Cryptographic Wallet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nft-standard",
        "label": "NFT Standard"
      },
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      },
      {
        "@id": "urn:ngm:class:royalty-enforcement",
        "label": "Royalty Enforcement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
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
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-art",
        "label": "Digital Art"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:copyright",
        "label": "Copyright"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-real-estate",
        "label": "Virtual Real Estate"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:nft",
      "label": "NFT"
    },
    {
      "@id": "urn:ngm:class:non-interchangeable-token",
      "label": "Non-Interchangeable Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:non-fungible-token:5cc16067386f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cda08ea4dba68c83f2253c16dea57c26d6caf8315ceeec4a7086adae783cf86e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ERC-721]]",
      "resolved": "urn:visionflow:linked:erc-721",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Standard]]",
      "resolved": "urn:visionflow:linked:nft-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Marketplace]]",
      "resolved": "urn:visionflow:linked:nft-marketplace",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
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
  - A token standard in which each unit is distinct and not interchangeable, used to represent ownership of a specific digital or referenced physical item on a ledger.

- ### Semantic Classification
  - owl-class:: blockchain:NonFungibleToken
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token]]
  - bridges-to:: [[NFT Standard]], [[NFT Marketplace]]
  - requires:: [[Smart Contract]], [[ERC-721]]

- ### Content
  - A non-fungible token records ownership of a uniquely identified item, so that no two tokens are equivalent. This contrasts with fungible tokens, where every unit is identical and interchangeable. Token standards such as ERC-721 and ERC-1155 define how uniqueness, ownership, and transfer are encoded in contracts.
  - Non-fungible tokens are used to represent collectibles, digital art, in-game items, membership rights, and claims on referenced assets. The token typically points to metadata describing the item, and the location and permanence of that metadata determine how durably the represented item is bound to the on-chain record.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
