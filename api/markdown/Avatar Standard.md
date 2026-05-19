public:: true

# Avatar Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a261e58d3f7da06f035db3c5a01f4ff63258b64bf78045d6036d31de604b6c2",
  "@type": "Page",
  "vc:slug": "avatar-standard",
  "title": "Avatar Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:format-compliance",
      "vc:label": "Format Compliance"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf-2-0",
      "vc:label": "glTF 2.0"
    },
    {
      "@id": "urn:visionflow:linked:khronos-group",
      "vc:label": "Khronos Group"
    },
    {
      "@id": "urn:visionflow:linked:metadata-specification",
      "vc:label": "Metadata Specification"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-standards-forum",
      "vc:label": "Metaverse Standards Forum"
    },
    {
      "@id": "urn:visionflow:linked:platform-independent-identities",
      "vc:label": "Platform-Independent Identities"
    },
    {
      "@id": "urn:visionflow:linked:skeleton-configuration",
      "vc:label": "Skeleton Configuration"
    },
    {
      "@id": "urn:visionflow:linked:standardized-rigging",
      "vc:label": "Standardized Rigging"
    },
    {
      "@id": "urn:visionflow:linked:vrm-1-0",
      "vc:label": "VRM 1.0"
    },
    {
      "@id": "urn:visionflow:linked:vrm-consortium",
      "vc:label": "VRM Consortium"
    },
    {
      "@id": "urn:visionflow:owl:class:avatar-interoperability",
      "vc:label": "Avatar Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9791"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Avatar Standard"
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
  "@id": "urn:ngm:class:avatar-standard",
  "@type": "Class",
  "label": "Avatar Standard",
  "definition": "Avatar Standard refers to technical specifications defining file formats, data structures, rigging conventions, and metadata schemas for 3D humanoid avatars, particularly the VRM format built on glTF 2.0 that enables cross-platform avatar interoperability in metaverse environments.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:format-compliance",
        "label": "Format Compliance"
      },
      {
        "@id": "urn:ngm:class:metadata-specification",
        "label": "Metadata Specification"
      },
      {
        "@id": "urn:ngm:class:skeleton-configuration",
        "label": "Skeleton Configuration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:platform-independent-identities",
        "label": "Platform-Independent Identities"
      },
      {
        "@id": "urn:ngm:class:standardized-rigging",
        "label": "Standardized Rigging"
      },
      {
        "@id": "urn:ngm:class:avatar-interoperability",
        "label": "Avatar Interoperability"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:avatar-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2a261e58d3f7da06f035db3c5a01f4ff63258b64bf78045d6036d31de604b6c2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Format Compliance]]",
      "resolved": "urn:visionflow:linked:format-compliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[glTF 2.0]]",
      "resolved": "urn:visionflow:linked:gl-tf-2-0",
      "kind": "StubLink"
    },
    {
      "raw": "[[Khronos Group]]",
      "resolved": "urn:visionflow:linked:khronos-group",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metadata Specification]]",
      "resolved": "urn:visionflow:linked:metadata-specification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse Standards Forum]]",
      "resolved": "urn:visionflow:linked:metaverse-standards-forum",
      "kind": "StubLink"
    },
    {
      "raw": "[[Platform-Independent Identities]]",
      "resolved": "urn:visionflow:linked:platform-independent-identities",
      "kind": "StubLink"
    },
    {
      "raw": "[[Skeleton Configuration]]",
      "resolved": "urn:visionflow:linked:skeleton-configuration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Standardized Rigging]]",
      "resolved": "urn:visionflow:linked:standardized-rigging",
      "kind": "StubLink"
    },
    {
      "raw": "[[VRM 1.0]]",
      "resolved": "urn:visionflow:linked:vrm-1-0",
      "kind": "StubLink"
    },
    {
      "raw": "[[VRM Consortium]]",
      "resolved": "urn:visionflow:linked:vrm-consortium",
      "kind": "StubLink"
    },
    {
      "raw": "[[Avatar Interoperability]]",
      "resolved": "urn:visionflow:owl:class:avatar-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:owl:class:technical-standard",
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
  - Avatar Standard refers to technical specifications defining file formats, data structures, rigging conventions, and metadata schemas for 3D humanoid avatars, particularly the VRM format built on glTF 2.0 that enables cross-platform avatar interoperability in metaverse environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:AvatarStandard
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Format Compliance]], [[Skeleton Configuration]], [[Metadata Specification]]
  - enables:: [[Avatar Interoperability]], [[Platform-Independent Identities]], [[Standardized Rigging]]

- ### Content

  ### Technical Details
  Key standards include:
  - **VRM 1.0**: glTF2.0-based format with humanoid-specific extensions for expressions, gaze control, and standardized rigging
  - **Scale and Orientation**: 1.00 = 1m, Y-up, -Z forward, Unity Humanoid compliant T-stance
  - **Single File Packaging**: All data including textures and materials in one file
  - **Licensing Metadata**: Title, author, modification/redistribution rules (Creative Commons), and usage permissions

  ### Standardization Progress (2024)
  Khronos Group and VRM Consortium collaboration (October 2024) advancing VRM as official glTF extensions. Successful ratification would elevate global recognition and encourage broader platform support.

  ### Industry Adoption
  VRM established as de facto standard in Japan since 2018, supporting VirtualCast, VRoid Studio, and cluster platforms. Decentraland enabled VRM exports (July 2023) for use in OnCyber, Hyperfy, and Monaverse.

  ### Avatar Translation Framework
  Metaverse Standards Forum working group developing common baseline format for mesh, material, skeleton, animation, physics, and metadata translation across platforms.

- ### Provenance
  - sources:: [[VRM 1.0]], [[glTF 2.0]], [[Khronos Group]], [[VRM Consortium]], [[Metaverse Standards Forum]]
  - migration-date:: 2026-04-26T00:00:00Z
