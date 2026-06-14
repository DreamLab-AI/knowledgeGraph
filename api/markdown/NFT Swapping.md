public:: true

# NFT Swapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a0ed3047e419d0cb5504c5249d040d9a521fefb7b8039113edd3eccb93fae4dd",
  "@type": "Page",
  "vc:slug": "nft-swapping",
  "title": "NFT Swapping",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-liquidity",
      "vc:label": "Asset Liquidity"
    },
    {
      "@id": "urn:visionflow:linked:asset-verification",
      "vc:label": "Asset Verification"
    },
    {
      "@id": "urn:visionflow:linked:atomic-transaction",
      "vc:label": "Atomic Transaction"
    },
    {
      "@id": "urn:visionflow:linked:direct-exchange",
      "vc:label": "Direct Exchange"
    },
    {
      "@id": "urn:visionflow:linked:exchange-agreement",
      "vc:label": "Exchange Agreement"
    },
    {
      "@id": "urn:visionflow:linked:gas-fee-payment",
      "vc:label": "Gas Fee Payment"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-cases",
      "vc:label": "MSF Use Cases"
    },
    {
      "@id": "urn:visionflow:linked:peer-to-peer-trading",
      "vc:label": "Peer-to-Peer Trading"
    },
    {
      "@id": "urn:visionflow:linked:swap-smart-contract",
      "vc:label": "Swap Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:trust-minimized-transfer",
      "vc:label": "Trust-Minimized Transfer"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-verification",
      "vc:label": "Cryptographic Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:nft-marketplace",
      "vc:label": "NFT Marketplace"
    },
    {
      "@id": "urn:visionflow:owl:class:nft-ownership-proof",
      "vc:label": "NFT Ownership Proof"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20214"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "NFT Swapping"
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
  "@id": "urn:ngm:class:nft-swapping",
  "@type": "Class",
  "label": "NFT Swapping",
  "definition": "Process of executing mutual exchange of non-fungible tokens between participants using atomic smart contract transactions that ensure simultaneous bilateral asset transfer.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:asset-verification",
        "label": "Asset Verification"
      },
      {
        "@id": "urn:ngm:class:atomic-transaction",
        "label": "Atomic Transaction"
      },
      {
        "@id": "urn:ngm:class:exchange-agreement",
        "label": "Exchange Agreement"
      },
      {
        "@id": "urn:ngm:class:swap-smart-contract",
        "label": "Swap Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gas-fee-payment",
        "label": "Gas Fee Payment"
      },
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:nft-ownership-proof",
        "label": "NFT Ownership Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-liquidity",
        "label": "Asset Liquidity"
      },
      {
        "@id": "urn:ngm:class:direct-exchange",
        "label": "Direct Exchange"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-trading",
        "label": "Peer-to-Peer Trading"
      },
      {
        "@id": "urn:ngm:class:trust-minimized-transfer",
        "label": "Trust-Minimized Transfer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      },
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      }
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:virtual-economy", "label": "Virtual Economy"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:nft-swapping:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a0ed3047e419d0cb5504c5249d040d9a521fefb7b8039113edd3eccb93fae4dd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Liquidity]]",
      "resolved": "urn:visionflow:linked:asset-liquidity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Verification]]",
      "resolved": "urn:visionflow:linked:asset-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Atomic Transaction]]",
      "resolved": "urn:visionflow:linked:atomic-transaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Direct Exchange]]",
      "resolved": "urn:visionflow:linked:direct-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[Exchange Agreement]]",
      "resolved": "urn:visionflow:linked:exchange-agreement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Gas Fee Payment]]",
      "resolved": "urn:visionflow:linked:gas-fee-payment",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Use Cases]]",
      "resolved": "urn:visionflow:linked:msf-use-cases",
      "kind": "StubLink"
    },
    {
      "raw": "[[Peer-to-Peer Trading]]",
      "resolved": "urn:visionflow:linked:peer-to-peer-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Swap Smart Contract]]",
      "resolved": "urn:visionflow:linked:swap-smart-contract",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust-Minimized Transfer]]",
      "resolved": "urn:visionflow:linked:trust-minimized-transfer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Network]]",
      "resolved": "urn:visionflow:owl:class:blockchain-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Verification]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:owl:class:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:owl:class:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Marketplace]]",
      "resolved": "urn:visionflow:owl:class:nft-marketplace",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Ownership Proof]]",
      "resolved": "urn:visionflow:owl:class:nft-ownership-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:owl:class:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - Process of executing mutual exchange of non-fungible tokens between participants using atomic smart contract transactions that ensure simultaneous bilateral asset transfer.

- ### Semantic Classification
  - owl-class:: spatial-computing:NFTSwapping
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Swap Smart Contract]], [[Atomic Transaction]], [[Asset Verification]], [[Exchange Agreement]]
  - is-part-of:: [[NFT Marketplace]], [[Decentralized Exchange]]
  - requires:: [[NFT Ownership Proof]], [[Blockchain Network]], [[Digital Signature]], [[Gas Fee Payment]]
  - enables:: [[Peer-to-Peer Trading]], [[Asset Liquidity]], [[Direct Exchange]], [[Trust-Minimized Transfer]]
  - depends-on:: [[Token Standard]], [[Cryptographic Verification]], [[Consensus Mechanism]], [[Transaction Validation]]

- ### Content
  NFT Swapping — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Use Cases]]
  - migration-date:: 2026-04-26T00:00:00Z
