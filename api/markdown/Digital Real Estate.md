public:: true

# Digital Real Estate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6226966197382190340e961edbe86123341696de3e530ddfc4d2cef1329edf8",
  "@type": "Page",
  "vc:slug": "digital-real-estate",
  "title": "Digital Real Estate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:advertising-space",
      "vc:label": "Advertising Space"
    },
    {
      "@id": "urn:visionflow:linked:community-building",
      "vc:label": "Community Building"
    },
    {
      "@id": "urn:visionflow:linked:development-rights",
      "vc:label": "Development Rights"
    },
    {
      "@id": "urn:visionflow:linked:event-hosting",
      "vc:label": "Event Hosting"
    },
    {
      "@id": "urn:visionflow:linked:land-registry",
      "vc:label": "Land Registry"
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
      "@id": "urn:visionflow:linked:property-development",
      "vc:label": "Property Development"
    },
    {
      "@id": "urn:visionflow:linked:property-metadata",
      "vc:label": "Property Metadata"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
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
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:land-parcel",
      "vc:label": "Land Parcel"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-platform",
      "vc:label": "Metaverse Platform"
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
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-coordinates",
      "vc:label": "Spatial Coordinates"
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
      "@id": "urn:visionflow:owl:class:virtual-economy-domain",
      "vc:label": "VirtualEconomyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society-domain",
      "vc:label": "VirtualSocietyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world",
      "vc:label": "Virtual World"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20265"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Real Estate"
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
  "@id": "urn:ngm:class:digital-real-estate",
  "@type": "Class",
  "label": "Digital Real Estate",
  "definition": "Digital Real Estate is a type of Virtual Economy in the spatial computing domain.",
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
        "@id": "urn:ngm:class:development-rights",
        "label": "Development Rights"
      },
      {
        "@id": "urn:ngm:class:ownership-token",
        "label": "Ownership Token"
      },
      {
        "@id": "urn:ngm:class:property-metadata",
        "label": "Property Metadata"
      },
      {
        "@id": "urn:ngm:class:land-parcel",
        "label": "Land Parcel"
      },
      {
        "@id": "urn:ngm:class:spatial-coordinates",
        "label": "Spatial Coordinates"
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
      },
      {
        "@id": "urn:ngm:class:spatial-computing-paradigm",
        "label": "Spatial Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:advertising-space",
        "label": "Advertising Space"
      },
      {
        "@id": "urn:ngm:class:community-building",
        "label": "Community Building"
      },
      {
        "@id": "urn:ngm:class:event-hosting",
        "label": "Event Hosting"
      },
      {
        "@id": "urn:ngm:class:property-development",
        "label": "Property Development"
      },
      {
        "@id": "urn:ngm:class:virtual-commerce",
        "label": "Virtual Commerce"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-real-estate:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f6226966197382190340e961edbe86123341696de3e530ddfc4d2cef1329edf8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Advertising Space]]",
      "resolved": "urn:visionflow:linked:advertising-space",
      "kind": "StubLink"
    },
    {
      "raw": "[[Community Building]]",
      "resolved": "urn:visionflow:linked:community-building",
      "kind": "StubLink"
    },
    {
      "raw": "[[Development Rights]]",
      "resolved": "urn:visionflow:linked:development-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[Event Hosting]]",
      "resolved": "urn:visionflow:linked:event-hosting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Land Registry]]",
      "resolved": "urn:visionflow:linked:land-registry",
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
      "raw": "[[Property Development]]",
      "resolved": "urn:visionflow:linked:property-development",
      "kind": "StubLink"
    },
    {
      "raw": "[[Property Metadata]]",
      "resolved": "urn:visionflow:linked:property-metadata",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
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
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Land Parcel]]",
      "resolved": "urn:visionflow:owl:class:land-parcel",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Platform]]",
      "resolved": "urn:visionflow:owl:class:metaverse-platform",
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
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Coordinates]]",
      "resolved": "urn:visionflow:owl:class:spatial-coordinates",
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
      "resolved": "urn:visionflow:owl:class:virtual-economy-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:owl:class:virtual-world",
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
  - Tokenised virtual land parcels and property within metaverse worlds that can be owned, developed, monetised, and traded as digital assets.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalRealEstate
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]], [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Land Parcel]], [[Ownership Token]], [[Spatial Coordinates]], [[Property Metadata]], [[Development Rights]]
  - is-part-of:: [[Virtual Economy]], [[Virtual World]]
  - requires:: [[Blockchain Infrastructure]], [[Smart Contracts]], [[Spatial Computing Paradigm]], [[Digital Wallet]]
  - enables:: [[Virtual Commerce]], [[Property Development]], [[Event Hosting]], [[Advertising Space]], [[Community Building]]
  - depends-on:: [[NFT Standards]], [[Land Registry]], [[Metaverse Platform]]

- ### Content
  Digital Real Estate — content pending enrichment.

- ### Provenance
  - sources:: [[Metaverse 101]]
  - migration-date:: 2026-04-26T00:00:00Z
