public:: true

# Contact Mechanics

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:contact-mechanics",
  "@type": "Page",
  "title": "Contact Mechanics",
  "vc:slug": "contact-mechanics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:contact-mechanics",
  "@type": "Class",
  "label": "Contact Mechanics",
  "definition": "Contact mechanics is the study of the forces, deformations, and motions that arise when solid bodies touch and interact at their surfaces. It models phenomena such as normal contact forces, friction, adhesion, and local deformation, and provides the constitutive laws that govern how bodies push against, stick to, and slide over one another. In robotics it is essential for grasping, manipulation, locomotion, and physical simulation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:physics-simulation",
      "label": "Physics Simulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:rigid-body-dynamics",
        "label": "Rigid Body Dynamics"
      },
      {
        "@id": "urn:ngm:class:friction",
        "label": "Friction"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:physics-simulation",
        "label": "Physics Simulation"
      },
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:friction",
        "label": "Friction"
      },
      {
        "@id": "urn:ngm:class:tactile-sensing",
        "label": "Tactile Sensing"
      },
      {
        "@id": "urn:ngm:class:rigid-body-dynamics",
        "label": "Rigid Body Dynamics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robotic-grasping",
        "label": "Robotic Grasping"
      },
      {
        "@id": "urn:ngm:class:dexterous-manipulation",
        "label": "Dexterous Manipulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:physics-engine",
        "label": "Physics Engine"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:physics-simulation",
        "label": "Physics Simulation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:dexterous-manipulation",
        "label": "Dexterous Manipulation"
      },
      {
        "@id": "urn:ngm:class:soft-robotics",
        "label": "Soft Robotics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rigid-body-dynamics",
        "label": "Rigid Body Dynamics"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Contact mechanics is the study of the forces, deformations, and motions that arise when solid bodies touch and interact at their surfaces. It models phenomena such as normal contact forces, friction, adhesion, and local deformation, and provides the constitutive laws that govern how bodies push against, stick to, and slide over one another. In robotics it is essential for grasping, manipulation, locomotion, and physical simulation.
  - Related: [[Physics Simulation]] [[Rigid Body Dynamics]] [[Friction]] [[Grasping]] [[Collision Detection]]
- ### Overview
  - Contact mechanics distinguishes the normal direction, governed by non-penetration constraints and contact stiffness, from the tangential direction, governed by friction laws such as the Coulomb model. Classical results describe how pressure distributes over a contact patch and how local deformation develops under load. In robotics these principles let controllers predict grasp stability, regulate contact forces during manipulation, and simulate interactions in physics engines, while soft-robotic and deformable contexts demand richer deformation models.
- ### Mechanisms
  - Normal contact enforces non-penetration and distributes pressure.
  - Tangential behaviour is governed by friction laws such as Coulomb friction.
  - Local deformation determines the size and shape of contact patches.
  - Adhesion and stiction matter at small scales and soft interfaces.
  - Numerical formulations integrate contact into physics engines.
- ### Applications
  - Grasp planning and stability analysis.
  - Force-controlled manipulation and assembly.
  - Legged and wheeled locomotion modelling.
  - Tactile-sensor interpretation.
  - Realistic physical simulation of robots and objects.
- ### Relationships
  - requires:: [[Rigid Body Dynamics]]
  - requires:: [[Friction]]
  - dependsOn:: [[Physics Simulation]]
  - dependsOn:: [[Collision Detection]]
  - relatedTo:: [[Friction]]
  - relatedTo:: [[Tactile Sensing]]
  - relatedTo:: [[Rigid Body Dynamics]]
  - enables:: [[Grasping]]
  - enables:: [[Dexterous Manipulation]]
  - uses:: [[Collision Detection]]
  - uses:: [[Physics Engine]]
  - partOf:: [[Physics Simulation]]
  - supports:: [[Dexterous Manipulation]]
  - supports:: [[Soft Robotics]]
  - contrastsWith:: [[Rigid Body Dynamics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
