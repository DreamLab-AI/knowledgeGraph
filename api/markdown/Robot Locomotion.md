public:: true

# Robot Locomotion

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:robot-locomotion",
  "@type": "Page",
  "title": "Robot Locomotion",
  "vc:slug": "robot-locomotion",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robot-locomotion",
  "@type": "Class",
  "label": "Robot Locomotion",
  "definition": "Robot locomotion is the study and engineering of how robots move through their environment, encompassing legged walking, wheeled rolling, crawling, swimming and flight. It integrates mechanical design, control theory and sensing to generate stable, efficient and adaptive movement over varied terrain. Locomotion distinguishes itself from manipulation by focusing on whole-body displacement and dynamic balance rather than interaction with objects.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:robotic-control",
        "label": "Robotic Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      },
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:robotic-control",
        "label": "Robotic Control"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:legged-robot",
        "label": "Legged Robot"
      },
      {
        "@id": "urn:ngm:class:locomotion",
        "label": "Locomotion"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:humanoid-robot",
        "label": "Humanoid Robot"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:locomotion",
      "label": "Locomotion"
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
  - Robot locomotion is the study and engineering of how robots move through their environment, encompassing legged walking, wheeled rolling, crawling, swimming and flight.
  - It integrates mechanical design, control theory and sensing to generate stable, efficient and adaptive movement over varied terrain.
  - Locomotion distinguishes itself from manipulation by focusing on whole-body displacement and dynamic balance rather than interaction with objects.
  - Related core concepts: [[Robotics]] [[Robotic Control]] [[Motion Planning]] [[Legged Robot]]
- ### Overview
  - Locomotion spans morphologies from wheels and tracks to legs, wings and undulating bodies.
  - Legged locomotion offers terrain versatility at the cost of harder dynamic balance control.
  - Modern approaches combine model-based control with learned policies for robustness on rough ground.
- ### Key aspects
  - Gait generation and phasing for legged systems.
  - Dynamic balance and zero-moment-point stability criteria.
  - Terrain perception and adaptive foothold selection.
  - Energy efficiency and cost-of-transport optimisation.
- ### Applications
  - Quadruped and humanoid robots for inspection and logistics.
  - Search-and-rescue over rubble and stairs.
  - Planetary and field robotics on unstructured terrain.
- ### Relationships
  - enables:: [[Motion Planning]]
  - enables:: [[Robotic Control]]
  - contrastsWith:: [[Inverse Kinematics]]
  - bridgesTo:: [[Control Theory]]
  - bridgesTo:: [[Feedback Loop]]
  - requires:: [[Actuator]]
  - requires:: [[Robotic Control]]
  - requires:: [[Motion Planning]]
  - hasPart:: [[Legged Robot]]
  - hasPart:: [[Locomotion]]
  - uses:: [[Inverse Kinematics]]
  - supports:: [[Humanoid Robot]]
  - relatedTo:: [[Robotics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
