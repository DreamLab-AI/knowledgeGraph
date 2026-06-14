public:: true
alias:: DigitalGoods

# Digital Goods
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb5252bde9c5a50ba6df7fe4d21616d3d32b47aa229dcf6459d08577becb79cd",
  "@type": "Page",
  "vc:slug": "digital-goods",
  "title": "Digital Goods",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:creator-monetization",
      "vc:label": "Creator Monetization"
    },
    {
      "@id": "urn:visionflow:linked:metadata",
      "vc:label": "Metadata"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-101",
      "vc:label": "Metaverse 101"
    },
    {
      "@id": "urn:visionflow:linked:ownership-token",
      "vc:label": "Ownership Token"
    },
    {
      "@id": "urn:visionflow:linked:usage-rights",
      "vc:label": "Usage Rights"
    },
    {
      "@id": "urn:visionflow:linked:user-ownership",
      "vc:label": "User Ownership"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-registry",
      "vc:label": "Asset Registry"
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
      "@id": "urn:visionflow:owl:class:blockchain-infrastructure",
      "vc:label": "Blockchain Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:creator-economy",
      "vc:label": "Creator Economy"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset",
      "vc:label": "Digital Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-rights-management",
      "vc:label": "Digital Rights Management"
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
      "@id": "urn:visionflow:owl:class:nft-standards",
      "vc:label": "NFT Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-commerce",
      "vc:label": "Virtual Commerce"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
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
      "vc:value": "20264"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Goods"
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
  "@id": "urn:ngm:class:digital-goods",
  "@type": "Class",
  "label": "Digital Goods",
  "definition": "Digital Goods is a type of Virtual Economy in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:ownership-token",
        "label": "Ownership Token"
      },
      {
        "@id": "urn:ngm:class:usage-rights",
        "label": "Usage Rights"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-infrastructure",
        "label": "Blockchain Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:creator-monetization",
        "label": "Creator Monetization"
      },
      {
        "@id": "urn:ngm:class:user-ownership",
        "label": "User Ownership"
      },
      {
        "@id": "urn:ngm:class:asset-trading",
        "label": "Asset Trading"
      },
      {
        "@id": "urn:ngm:class:virtual-commerce",
        "label": "Virtual Commerce"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      },
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-goods:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb5252bde9c5a50ba6df7fe4d21616d3d32b47aa229dcf6459d08577becb79cd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Creator Monetization]]",
      "resolved": "urn:visionflow:linked:creator-monetization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metadata]]",
      "resolved": "urn:visionflow:linked:metadata",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse 101]]",
      "resolved": "urn:visionflow:linked:metaverse-101",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ownership Token]]",
      "resolved": "urn:visionflow:linked:ownership-token",
      "kind": "StubLink"
    },
    {
      "raw": "[[Usage Rights]]",
      "resolved": "urn:visionflow:linked:usage-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Ownership]]",
      "resolved": "urn:visionflow:linked:user-ownership",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Registry]]",
      "resolved": "urn:visionflow:owl:class:asset-registry",
      "kind": "ResolvedLink"
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
      "raw": "[[Blockchain Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:blockchain-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creator Economy]]",
      "resolved": "urn:visionflow:owl:class:creator-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:owl:class:digital-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Rights Management]]",
      "resolved": "urn:visionflow:owl:class:digital-rights-management",
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
      "raw": "[[NFT Standards]]",
      "resolved": "urn:visionflow:owl:class:nft-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Commerce]]",
      "resolved": "urn:visionflow:owl:class:virtual-commerce",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Economy]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - Virtual items and assets that can be owned, transferred, traded, or used within metaverse environments, typically with provable scarcity and ownership.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalGoods
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]], [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Digital Asset]], [[Ownership Token]], [[Metadata]], [[Usage Rights]]
  - is-part-of:: [[Virtual Economy]], [[Creator Economy]]
  - requires:: [[Blockchain Infrastructure]], [[Smart Contracts]], [[Digital Wallet]]
  - enables:: [[Virtual Commerce]], [[Asset Trading]], [[User Ownership]], [[Creator Monetization]]
  - depends-on:: [[NFT Standards]], [[Asset Registry]], [[Digital Rights Management]]

- ### Content
  Digital Goods — content pending enrichment.

- ### Provenance
  - sources:: [[Metaverse 101]]
  - migration-date:: 2026-04-26T00:00:00Z
