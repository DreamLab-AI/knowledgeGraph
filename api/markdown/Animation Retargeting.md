schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#AnimationRetargeting
legacy_uri:: urn:visionclaw:concept:spatial-computing:animation-retargeting
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-ea55511aad76"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#AnimationRetargeting"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9766"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T20:30:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Animation Retargeting"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:animation-retargeting"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:animation-retargeting"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e6ad1e5697a4c811f34a31ce45d268a0e2ca5bc40ff10a7c9d3d2ce99f0bfd1a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:animation-retargeting",
  "@type": "OntologyClass",
  "label": "Animation Retargeting",
  "subClassOf": [
    {
      "@id": "urn:visionflow:linked:animation-technology",
      "vc:label": "Animation Technology"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:e6ad1e5697a4c811f34a31ce45d268a0e2ca5bc40ff10a7c9d3d2ce99f0bfd1a"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e6ad1e5697a4c811f34a31ce45d268a0e2ca5bc40ff10a7c9d3d2ce99f0bfd1a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Animation Retargeting is the process of transferring motion capture or animation data from one character skeleton to another with different proportions, joint configurations, or bone structures, enabling reuse of animation assets across diverse character models in games, film, and virtual environments.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:pose-matching",
      "vc:label": "Pose Matching"
    },
    {
      "@id": "urn:visionflow:linked:skeleton-mapping",
      "vc:label": "Skeleton Mapping"
    },
    {
      "@id": "urn:visionflow:owl:class:inverse-kinematics",
      "vc:label": "Inverse Kinematics"
    }
  ],
  "vc:enables": [
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
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e6ad1e5697a4c811f34a31ce45d268a0e2ca5bc40ff10a7c9d3d2ce99f0bfd1a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
