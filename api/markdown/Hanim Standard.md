public:: true

# Hanim Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52e75916ea52f86edfd9464f2194a4f957b5ec83e3c11b50ec041e78ca4d4bf6",
  "@type": "Page",
  "vc:slug": "hanim-standard",
  "title": "Hanim Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cross-platform-avatars",
      "vc:label": "Cross-Platform Avatars"
    },
    {
      "@id": "urn:visionflow:owl:class:animation-standard",
      "vc:label": "Animation Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9913"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hanim Standard"
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
  "@id": "urn:ngm:class:hanim-standard",
  "@type": "Class",
  "label": "Hanim Standard",
  "definition": "Humanoid Animation (H-Anim) is an ISO/IEC approved international standard developed by the Web3D Consortium for interchangeable humanoid figures, defining specifications for articulated avatars, skeletal hierarchies, and animation systems that enable character portability across 3D games, simulat...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:animation-standard",
      "label": "Animation Standard"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-avatars",
        "label": "Cross-Platform Avatars"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hanim-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52e75916ea52f86edfd9464f2194a4f957b5ec83e3c11b50ec041e78ca4d4bf6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cross-Platform Avatars]]",
      "resolved": "urn:visionflow:linked:cross-platform-avatars",
      "kind": "StubLink"
    },
    {
      "raw": "[[Animation Standard]]",
      "resolved": "urn:visionflow:owl:class:animation-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Humanoid Animation (H-Anim) is an ISO/IEC approved international standard developed by the Web3D Consortium for interchangeable humanoid figures, defining specifications for articulated avatars, skeletal hierarchies, and animation systems that enable character portability across 3D games, simulations, and virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:HanimStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Animation Standard]]
  - enables:: [[Cross-Platform Avatars]]
  - bridges-to:: [[Blockchain]]

- ### Content

  ## Standard Overview

  ### ISO/IEC Recognition
  - Approved ISO and IEC standard
  - Royalty-free and publicly available
  - Continuously developed since VRML (1997)
  - Web3D Consortium maintenance

  ### Extensible 3D Integration
  - Coordinated with X3D Graphics standards
  - VRML compatibility
  - Network delivery specifications
  - Interactive 3D data integration

  ## Technical Specifications

  ### Level of Articulation (LOA)
  - Low LOA: 14 joints
  - High LOA: 72+ joints
  - Scalable complexity levels
  - Application-specific selection

  ### Component Standards
  - Skin mesh definitions
  - Skeleton hierarchies
  - Internal organ representations
  - Haptic and kinematic interfaces

  ## Web3D 2024 Conference

  ### Workshop Highlights (September 2024)
  - Co-chairs: Don Brutzman, Carol McDonald, Myeong Won Lee
  - Part 6: Soft-body physics discussion
  - Part 7: Avatar use cases and requirements
  - Metaverse Standards Forum coordination

  ### Emerging Topics
  - Clothing and cloth animation
  - Fabric material properties (roughness, friction, stretch)
  - FabricMaterial node consideration
  - 3D clothing-humanoid relationships

  ## Facial Animation

  ### Expression Standards
  - Region-based facial modelling
  - Mesh deformation methods
  - X3D interpolators and morphors
  - Human expression representation

  ### Technical Implementation
  - Muscle-based animation
  - Blend shape systems
  - Phoneme synchronisation
  - Emotional expression mapping

  ## Medical Applications

  ### Internal Organ Standards
  - Medical professional targeting
  - Anatomically correct definitions
  - 3D organ representation
  - Health and medical visualisation

  ### Healthcare Use Cases
  - Surgical simulation
  - Medical education
  - Anatomical reference
  - Treatment planning

  ## Metaverse Integration

  ### Avatar Portability
  - Cross-platform character use
  - Game and simulation compatibility
  - Standardised figure interchange
  - Virtual environment deployment

  ### Industry Applications
  - 3D gaming characters
  - Training simulations
  - Virtual reality avatars
  - Augmented reality figures

  ## Working Group Activities

  ### Current Development
  - Sharable skeleton standards
  - Body and animation interoperability
  - Discrete articulation levels
  - Real-time animation support

  #### Future Directions
  - Soft-body physics integration
  - Advanced cloth simulation
  - Enhanced facial expression
  - Haptic feedback standards

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
