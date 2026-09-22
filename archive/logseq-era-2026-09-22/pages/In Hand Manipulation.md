public:: true

# In Hand Manipulation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:in-hand-manipulation",
  "@type": "Page",
  "title": "In Hand Manipulation",
  "vc:slug": "in-hand-manipulation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:in-hand-manipulation",
  "@type": "Class",
  "label": "In Hand Manipulation",
  "definition": "In-hand manipulation is the robotic skill of repositioning or reorienting a grasped object using the fingers and palm of a hand, without placing it down or relying on the arm to reposition it. It demands coordinated finger control, tactile sensing and contact modelling to maintain stable grasps while controlled slip and finger gaiting move the object. It is a core capability of dexterous manipulation in multi-fingered robotic hands.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dexterous-manipulation",
      "label": "Dexterous Manipulation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:finger-gaiting",
        "label": "Finger Gaiting"
      },
      {
        "@id": "urn:ngm:class:object-reorientation",
        "label": "Object Reorientation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:dexterous-manipulation",
        "label": "Dexterous Manipulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tactile-sensing",
        "label": "Tactile Sensing"
      },
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:robot-hand",
        "label": "Robot Hand"
      },
      {
        "@id": "urn:ngm:class:proprioception",
        "label": "Proprioception"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-manipulation",
        "label": "Autonomous Manipulation"
      },
      {
        "@id": "urn:ngm:class:dexterity",
        "label": "Dexterity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:grasping",
        "label": "Grasping"
      },
      {
        "@id": "urn:ngm:class:sensorimotor-control",
        "label": "Sensorimotor Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:manipulation-planning",
        "label": "Manipulation Planning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compliant-manipulation",
        "label": "Compliant Manipulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multi-fingered-hand",
        "label": "Multi-Fingered Hand"
      },
      {
        "@id": "urn:ngm:class:tactile-feedback",
        "label": "Tactile Feedback"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[In Hand Manipulation]] reorients a grasped object using the fingers alone, a [[Dexterous Manipulation]] skill requiring [[Tactile Sensing]], [[Force Control]] and [[Finger Gaiting]].
- ### Overview
  - In-hand manipulation moves an object within the hand by coordinating finger contacts, controlled slip and regrasping.
  - It avoids the slower alternative of placing the object down and re-grasping with the arm.
  - Stable execution requires modelling contact forces, friction and the object's pose in real time.
  - Recent work uses deep reinforcement learning with tactile and proprioceptive feedback to learn robust policies.
- ### Mechanisms
  - Finger gaiting: breaking and re-establishing contacts to walk the object around.
  - Controlled rolling and sliding of contacts across object surfaces.
  - Tactile and force feedback to detect slip and maintain grasp stability.
  - Contact and friction modelling for stable, multi-point grasps.
  - Learned policies combining proprioception, vision and touch.
- ### Applications
  - Tool reorientation and assembly tasks in robotic manipulation.
  - Reorienting parts for insertion or precise placement.
  - Humanoid and service robots handling everyday objects.
  - Teleoperation and dexterous prosthetics requiring fine object control.
- ### Relationships
  - hasPart:: [[Finger Gaiting]]
  - hasPart:: [[Object Reorientation]]
  - partOf:: [[Dexterous Manipulation]]
  - requires:: [[Tactile Sensing]]
  - requires:: [[Force Control]]
  - uses:: [[Robot Hand]]
  - uses:: [[Proprioception]]
  - enables:: [[Autonomous Manipulation]]
  - enables:: [[Dexterity]]
  - dependsOn:: [[Grasping]]
  - dependsOn:: [[Sensorimotor Control]]
  - supports:: [[Manipulation Planning]]
  - contrastsWith:: [[Compliant Manipulation]]
  - relatedTo:: [[Multi-Fingered Hand]]
  - relatedTo:: [[Tactile Feedback]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
