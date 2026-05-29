public:: true

# Transferable Right
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0fc06416fef31045d11e02633c1335a8350ea31e8d76d3033b194b8bd0e217d7",
  "@type": "Page",
  "vc:slug": "transferable-right",
  "title": "Transferable Right",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9508"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transferable Right"
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
  "@id": "urn:ngm:class:transferable-right",
  "@type": "Class",
  "label": "Transferable Right",
  "definition": "A Transferable Right is a legally or technically encoded entitlement that can be assigned, sold, or delegated from one party to another, typically enforced via smart contracts on a blockchain. Examples include tokenised intellectual property licences, digital asset ownership tokens, and royalty claims encoded in NFT standards.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:digital-rights",
        "label": "Digital Rights"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:royalty-distribution",
        "label": "Royalty Distribution"
      },
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:license",
        "label": "license"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:transferable-right:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0fc06416fef31045d11e02633c1335a8350ea31e8d76d3033b194b8bd0e217d7"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A Transferable Right is a legally or technically encoded entitlement that can be assigned, sold, or delegated from one party to another, typically enforced via smart contracts on a blockchain. Examples include tokenised intellectual property licences, digital asset ownership tokens, and royalty claims encoded in NFT standards.

- ### Semantic Classification
  - owl-class:: blockchain:TransferableRight
  - owl-role:: concept

- ### Relationships
  - Implements [[Smart Contract]]
  - Requires [[Digital Ownership]]
  - Requires [[Digital Rights]]
  - Enables [[Royalty Distribution]]
  - Enables [[Asset Tokenisation]]
  - Related To [[NFT]]
  - Related To [[license]]

- ### Content

  ## Overview

  Transferable Right represents an abstract concept in the blockchain ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
