public:: true

# Digital Gaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c2b910b07f3a55a4d5b18e8894ddf0a908bda5fba05bba362f901d91d3899b58",
  "@type": "Page",
  "vc:slug": "digital-gaming",
  "title": "Digital Gaming",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9577"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Gaming"
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
  "@id": "urn:ngm:class:digital-gaming",
  "@type": "Class",
  "label": "Digital Gaming",
  "definition": "Digital Gaming encompasses interactive software experiences delivered across platforms including PCs, consoles, and mobile devices, encompassing game design, virtual economies, player interaction systems, and increasingly blockchain-based asset ownership. It represents a convergence of entertainment, spatial computing, and digital economy mechanisms within persistent or session-based virtual environments.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-gaming", "label": "Blockchain Gaming"},
      {"@id": "urn:ngm:class:immersive-gaming", "label": "Immersive Gaming"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-ownership", "label": "Digital Ownership"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-gaming:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c2b910b07f3a55a4d5b18e8894ddf0a908bda5fba05bba362f901d91d3899b58"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
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
  - Digital Gaming encompasses interactive software experiences delivered across platforms including PCs, consoles, and mobile devices, encompassing game design, virtual economies, player interaction systems, and increasingly blockchain-based asset ownership. It represents a convergence of entertainment, spatial computing, and digital economy mechanisms within persistent or session-based virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalGaming
  - owl-role:: concept

- ### Relationships
  - related-to:: [[Blockchain Gaming]], [[Immersive Gaming]]
  - uses:: [[Game Engine]], [[NFT]]
  - enables:: [[Digital Ownership]], [[Immersive Experience]]
  - bridges-to:: [[Blockchain]]

- ### Content

  ## Overview

  Digital Gaming represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
