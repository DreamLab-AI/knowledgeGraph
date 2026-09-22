public:: true

# Character Rigging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8cf9b6758ca95b2b4c52a8b90edac409cec25ebe89a26095efc976e9ad356cbd",
  "@type": "Page",
  "vc:slug": "character-rigging",
  "title": "Character Rigging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:character-animation",
      "vc:label": "Character Animation"
    },
    {
      "@id": "urn:visionflow:linked:motion-capture-retargeting",
      "vc:label": "Motion Capture Retargeting"
    },
    {
      "@id": "urn:visionflow:linked:skeletal-animation",
      "vc:label": "Skeletal Animation"
    },
    {
      "@id": "urn:visionflow:linked:skinning",
      "vc:label": "Skinning"
    },
    {
      "@id": "urn:visionflow:linked:weight-painting",
      "vc:label": "Weight Painting"
    },
    {
      "@id": "urn:visionflow:owl:class:animation-technique",
      "vc:label": "Animation Technique"
    },
    {
      "@id": "urn:visionflow:owl:class:character-model",
      "vc:label": "Character Model"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
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
      "vc:value": "MV-9820"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Character Rigging"
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
  "@id": "urn:ngm:class:character-rigging",
  "@type": "Class",
  "label": "Character Rigging",
  "definition": "The process of creating a hierarchical skeleton of interconnected bones and joints within a 3D character model, along with control systems and deformation rules, enabling animators to manipulate the mesh through inverse kinematics and forward kinematics for realistic movement.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:animation-technique",
      "label": "Animation Technique"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:skinning",
        "label": "Skinning"
      },
      {
        "@id": "urn:ngm:class:character-model",
        "label": "Character Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture Retargeting"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:character-rigging:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8cf9b6758ca95b2b4c52a8b90edac409cec25ebe89a26095efc976e9ad356cbd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Character Animation]]",
      "resolved": "urn:visionflow:linked:character-animation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Capture Retargeting]]",
      "resolved": "urn:visionflow:linked:motion-capture-retargeting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Skeletal Animation]]",
      "resolved": "urn:visionflow:linked:skeletal-animation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Skinning]]",
      "resolved": "urn:visionflow:linked:skinning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Weight Painting]]",
      "resolved": "urn:visionflow:linked:weight-painting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Animation Technique]]",
      "resolved": "urn:visionflow:owl:class:animation-technique",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Character Model]]",
      "resolved": "urn:visionflow:owl:class:character-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
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
  - The process of creating a hierarchical skeleton of interconnected bones and joints within a 3D character model, along with control systems and deformation rules, enabling animators to manipulate the mesh through inverse kinematics and forward kinematics for realistic movement.

- ### Semantic Classification
  - owl-class:: spatial-computing:CharacterRigging
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Animation Technique]]
  - requires:: [[Character Model]], [[Skinning]], [[Weight Painting]]
  - enables:: [[Character Animation]], [[Skeletal Animation]], [[Motion Capture Retargeting]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Core Components**:
		- Bone hierarchy (joints with parent-child relationships)
		- Control rig (animation controls)
		- Skinning (binding mesh to skeleton)
		- Weight painting (bone influence per vertex)
  - **Kinematics Types**:
		- **Forward Kinematics (FK)**: Animator moves each joint separately
		- **Inverse Kinematics (IK)**: Animate end effector, system calculates joint positions
		- Modern rigs include FK/IK switches for flexibility
  - **Bone Transform**: Position, scale, orientation relative to bind pose; child transforms are product of parent and own transform
  - **Auto-Rigging Tools**: Mixamo, AccuRIG, Anything World (AI-enhanced, 40% faster than manual)
  - **Software**: Blender, Maya, 3ds Max, Houdini, Cinema 4D, Unreal Engine
  - ## Applications
  - Video game character animation
  - Animated film production
  - VR avatar systems
  - Motion capture integration
  - Procedural animation systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
