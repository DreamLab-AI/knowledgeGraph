public:: true

# Animation Retargeting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6ad1e5697a4c811f34a31ce45d268a0e2ca5bc40ff10a7c9d3d2ce99f0bfd1a",
  "@type": "Page",
  "vc:slug": "animation-retargeting",
  "title": "Animation Retargeting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:animation-technology",
      "vc:label": "Animation Technology"
    },
    {
      "@id": "urn:visionflow:linked:avatar-animation",
      "vc:label": "Avatar Animation"
    },
    {
      "@id": "urn:visionflow:linked:character-animation-reuse",
      "vc:label": "Character Animation Reuse"
    },
    {
      "@id": "urn:visionflow:linked:motion-capture-workflows",
      "vc:label": "Motion Capture Workflows"
    },
    {
      "@id": "urn:visionflow:linked:pose-matching",
      "vc:label": "Pose Matching"
    },
    {
      "@id": "urn:visionflow:linked:skeleton-mapping",
      "vc:label": "Skeleton Mapping"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:inverse-kinematics",
      "vc:label": "Inverse Kinematics"
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
      "vc:value": "MV-9766"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Animation Retargeting"
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
  "@id": "urn:ngm:class:animation-retargeting",
  "@type": "Class",
  "label": "Animation Retargeting",
  "definition": "Animation Retargeting is the process of transferring motion capture or animation data from one character skeleton to another with different proportions, joint configurations, or bone structures, enabling reuse of animation assets across diverse character models in games, film, and virtual environ...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:animation-technology",
      "label": "Animation Technology"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:pose-matching",
        "label": "Pose Matching"
      },
      {
        "@id": "urn:ngm:class:skeleton-mapping",
        "label": "Skeleton Mapping"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:avatar-animation",
        "label": "Avatar Animation"
      },
      {
        "@id": "urn:ngm:class:character-animation-reuse",
        "label": "Character Animation Reuse"
      },
      {
        "@id": "urn:ngm:class:motion-capture-workflows",
        "label": "Motion Capture Workflows"
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
  "@id": "urn:visionflow:annotation:link-resolutions:animation-retargeting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6ad1e5697a4c811f34a31ce45d268a0e2ca5bc40ff10a7c9d3d2ce99f0bfd1a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Animation Technology]]",
      "resolved": "urn:visionflow:linked:animation-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Avatar Animation]]",
      "resolved": "urn:visionflow:linked:avatar-animation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Character Animation Reuse]]",
      "resolved": "urn:visionflow:linked:character-animation-reuse",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Capture Workflows]]",
      "resolved": "urn:visionflow:linked:motion-capture-workflows",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pose Matching]]",
      "resolved": "urn:visionflow:linked:pose-matching",
      "kind": "StubLink"
    },
    {
      "raw": "[[Skeleton Mapping]]",
      "resolved": "urn:visionflow:linked:skeleton-mapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inverse Kinematics]]",
      "resolved": "urn:visionflow:owl:class:inverse-kinematics",
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
  - Animation Retargeting is the process of transferring motion capture or animation data from one character skeleton to another with different proportions, joint configurations, or bone structures, enabling reuse of animation assets across diverse character models in games, film, and virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:AnimationRetargeting
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Animation Technology]]
  - requires:: [[Skeleton Mapping]], [[Pose Matching]], [[Inverse Kinematics]]
  - enables:: [[Character Animation Reuse]], [[Motion Capture Workflows]], [[Avatar Animation]]
  - bridges-to:: [[Computer Vision]] (ai)

- ### Content

  ### Technical Details
  Key components include:
  - **Skeleton Mapping**: Associating bones between source and target characters using hierarchical tagging systems
  - **Pose Matching**: Aligning rest poses between characters with different default configurations
  - **Joint Binding**: Matching key skeletal parts with similar kinematics between different character rigs
  - **Constraint Systems**: Maintaining joint limits and anatomical plausibility during motion transfer

  ### Advanced Techniques (2024)
  - **ML-Based Retargeting**: Skeleton-aware and shape-aware methods retargeting between non-homeomorphic skeletons
  - **Video-Based Retargeting**: Deep learning frameworks processing noisy monocular video motion data
  - **Single-Camera Capture**: Solutions enabling motion capture from any video or iPhone

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
