public:: true

# NFT Renting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c573708c6930c295ab1fede09871a31cff509384317fa6985e2d9c3606ae66dd",
  "@type": "Page",
  "vc:slug": "nft-renting",
  "title": "NFT Renting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-utilization",
      "vc:label": "Asset Utilization"
    },
    {
      "@id": "urn:visionflow:linked:collateral-management",
      "vc:label": "Collateral Management"
    },
    {
      "@id": "urn:visionflow:linked:escrow-mechanism",
      "vc:label": "Escrow Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-cases",
      "vc:label": "MSF Use Cases"
    },
    {
      "@id": "urn:visionflow:linked:nft-ownership-verification",
      "vc:label": "NFT Ownership Verification"
    },
    {
      "@id": "urn:visionflow:linked:rental-agreement-terms",
      "vc:label": "Rental Agreement Terms"
    },
    {
      "@id": "urn:visionflow:linked:rental-smart-contract",
      "vc:label": "Rental Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:revenue-generation",
      "vc:label": "Revenue Generation"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract-execution",
      "vc:label": "Smart Contract Execution"
    },
    {
      "@id": "urn:visionflow:linked:time-lock-mechanism",
      "vc:label": "Time Lock Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:time-oracle",
      "vc:label": "Time Oracle"
    },
    {
      "@id": "urn:visionflow:linked:usage-rights-token",
      "vc:label": "Usage Rights Token"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset-lending",
      "vc:label": "Digital Asset Lending"
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
      "@id": "urn:visionflow:owl:class:nft-marketplace",
      "vc:label": "NFT Marketplace"
    },
    {
      "@id": "urn:visionflow:owl:class:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:owl:class:temporary-asset-access",
      "vc:label": "Temporary Asset Access"
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
      "vc:value": "20213"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "NFT Renting"
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
  "@id": "urn:ngm:class:nft-renting",
  "@type": "Class",
  "label": "NFT Renting",
  "definition": "Process of temporarily assigning usage rights for a non-fungible token without transferring ownership, enforced through smart contract time-bound licensing mechanisms.",
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
        "@id": "urn:ngm:class:rental-agreement-terms",
        "label": "Rental Agreement Terms"
      },
      {
        "@id": "urn:ngm:class:rental-smart-contract",
        "label": "Rental Smart Contract"
      },
      {
        "@id": "urn:ngm:class:time-lock-mechanism",
        "label": "Time Lock Mechanism"
      },
      {
        "@id": "urn:ngm:class:usage-rights-token",
        "label": "Usage Rights Token"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:nft-ownership-verification",
        "label": "NFT Ownership Verification"
      },
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-utilization",
        "label": "Asset Utilization"
      },
      {
        "@id": "urn:ngm:class:collateral-management",
        "label": "Collateral Management"
      },
      {
        "@id": "urn:ngm:class:revenue-generation",
        "label": "Revenue Generation"
      },
      {
        "@id": "urn:ngm:class:temporary-asset-access",
        "label": "Temporary Asset Access"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-asset-lending",
        "label": "Digital Asset Lending"
      },
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      }
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
  "@id": "urn:visionflow:annotation:link-resolutions:nft-renting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c573708c6930c295ab1fede09871a31cff509384317fa6985e2d9c3606ae66dd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Utilization]]",
      "resolved": "urn:visionflow:linked:asset-utilization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collateral Management]]",
      "resolved": "urn:visionflow:linked:collateral-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Escrow Mechanism]]",
      "resolved": "urn:visionflow:linked:escrow-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Use Cases]]",
      "resolved": "urn:visionflow:linked:msf-use-cases",
      "kind": "StubLink"
    },
    {
      "raw": "[[NFT Ownership Verification]]",
      "resolved": "urn:visionflow:linked:nft-ownership-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rental Agreement Terms]]",
      "resolved": "urn:visionflow:linked:rental-agreement-terms",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rental Smart Contract]]",
      "resolved": "urn:visionflow:linked:rental-smart-contract",
      "kind": "StubLink"
    },
    {
      "raw": "[[Revenue Generation]]",
      "resolved": "urn:visionflow:linked:revenue-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract Execution]]",
      "resolved": "urn:visionflow:linked:smart-contract-execution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Time Lock Mechanism]]",
      "resolved": "urn:visionflow:linked:time-lock-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Time Oracle]]",
      "resolved": "urn:visionflow:linked:time-oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[Usage Rights Token]]",
      "resolved": "urn:visionflow:linked:usage-rights-token",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Network]]",
      "resolved": "urn:visionflow:owl:class:blockchain-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Lending]]",
      "resolved": "urn:visionflow:owl:class:digital-asset-lending",
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
      "raw": "[[NFT Marketplace]]",
      "resolved": "urn:visionflow:owl:class:nft-marketplace",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:owl:class:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Temporary Asset Access]]",
      "resolved": "urn:visionflow:owl:class:temporary-asset-access",
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
  - Process of temporarily assigning usage rights for a non-fungible token without transferring ownership, enforced through smart contract time-bound licensing mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:NFTRenting
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Rental Smart Contract]], [[Time Lock Mechanism]], [[Usage Rights Token]], [[Rental Agreement Terms]]
  - is-part-of:: [[NFT Marketplace]], [[Digital Asset Lending]]
  - requires:: [[NFT Ownership Verification]], [[Smart Contract Execution]], [[Digital Wallet]], [[Payment System]]
  - enables:: [[Temporary Asset Access]], [[Revenue Generation]], [[Asset Utilization]], [[Collateral Management]]
  - depends-on:: [[Blockchain Network]], [[Token Standard]], [[Escrow Mechanism]], [[Time Oracle]]

- ### Content
  NFT Renting — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Use Cases]]
  - migration-date:: 2026-04-26T00:00:00Z
