public:: true

# Skeletal Rig

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:skeletal-rig", "@type":"Page", "title":"Skeletal Rig", "vc:slug":"skeletal-rig", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:skeletal-rig",
  "@type": "Class",
  "label": "Skeletal Rig",
  "definition": "A skeletal rig is the hierarchy of bones and control structures bound to a 3D model that allows it to be posed and animated. Each bone influences nearby vertices through skinning weights, so that rotating or translating a bone deforms the surrounding mesh in a controlled way. Rigs typically combine forward and inverse kinematics with control handles, enabling animators to drive complex character motion from a compact set of controls.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:3-d-modeling",
      "label": "3D Modelling"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:character-model",
        "label": "Character Model"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vertex-attribute",
        "label": "Vertex Attribute"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
      },
      {
        "@id": "urn:ngm:class:animation",
        "label": "Animation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:animation-rig",
        "label": "Animation Rig"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:polygon-mesh",
        "label": "Polygon Mesh"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:3-d-modeling",
        "label": "3D Modelling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:character-model",
        "label": "Character Model"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:visual-effects",
        "label": "Visual Effects"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:uv-mapping",
        "label": "UV Mapping"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:animation-rig",
        "label": "Animation Rig"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:animation-rig",
      "label": "Animation Rig"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- A skeletal rig is the bone hierarchy and control system bound to a 3D mesh, produced during [[3D Modelling]] to make a model posable and animatable.
- It deforms the [[Polygon Mesh]] through skinning weights and is the foundation for [[Character Animation]] and general [[Animation]].
- Rigs combine [[Inverse Kinematics]] with control handles so animators can drive a [[Character Model]] from a small set of controls.
- ### Definition extended
- A rig is built once and reused across many shots, separating the slow craft of setup from the iterative craft of animating.
- ### Overview
- Rigging sits between modelling and animation in the production pipeline.
- Bones form a parent-child hierarchy; moving a parent bone carries its children with it, mirroring real anatomy.
- Skinning binds mesh vertices to bones with weights that determine how much each bone influences each vertex during deformation.
- Control objects expose the rig through intuitive handles, hiding the underlying joint chains from the animator.
- Forward kinematics rotates joints directly, while inverse kinematics solves joint angles to reach a target, which is essential for feet, hands, and ground contact.
- ### Mechanisms
- Bone hierarchy — a tree of joints that transmits transforms from root to extremities.
- Skinning weights — per-vertex influences that blend bone transforms into smooth deformation.
- Forward and inverse kinematics — complementary ways to pose joint chains.
- Control rig — handles, constraints, and drivers layered over the raw skeleton.
- Blend shapes — corrective and expressive deformations that supplement bone-based motion.
- ### Applications
- Character animation for games, film, and immersive experiences.
- Retargeting [[Motion Capture]] data onto digital characters.
- Procedural and physics-driven secondary motion such as cloth and hair.
- Real-time avatars in metaverse and spatial-computing contexts.
- ### Relationships
- partOf:: [[Character Model]]
- hasPart:: [[Vertex Attribute]]
- hasPart:: [[Inverse Kinematics]]
- enables:: [[Character Animation]]
- enables:: [[Animation]]
- uses:: [[Animation Rig]]
- uses:: [[Inverse Kinematics]]
- requires:: [[Polygon Mesh]]
- dependsOn:: [[3D Modelling]]
- supports:: [[Motion Capture]]
- relatedTo:: [[Character Model]]
- relatedTo:: [[Digital Asset]]
- bridgesTo:: [[Visual Effects]]
- contrastsWith:: [[UV Mapping]]
- implements:: [[Animation Rig]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
