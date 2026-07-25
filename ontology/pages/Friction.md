public:: true

# Friction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:234c35d21e74b3b5d07084286216838b4f5e03e035fd2eaa8c1e60cad003511c",
  "@type": "Page",
  "vc:slug": "friction",
  "title": "Friction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:energy-dissipation",
      "vc:label": "Energy Dissipation"
    },
    {
      "@id": "urn:visionflow:linked:energy-efficiency-calculation",
      "vc:label": "Energy Efficiency Calculation"
    },
    {
      "@id": "urn:visionflow:linked:friction-coefficient-estimation",
      "vc:label": "Friction Coefficient Estimation"
    },
    {
      "@id": "urn:visionflow:linked:joint-efficiency",
      "vc:label": "Joint Efficiency"
    },
    {
      "@id": "urn:visionflow:linked:joint-mechanics",
      "vc:label": "Joint Mechanics"
    },
    {
      "@id": "urn:visionflow:linked:lubrication-management",
      "vc:label": "Lubrication Management"
    },
    {
      "@id": "urn:visionflow:linked:motion-accuracy",
      "vc:label": "Motion Accuracy"
    },
    {
      "@id": "urn:visionflow:linked:motor-performance",
      "vc:label": "Motor Performance"
    },
    {
      "@id": "urn:visionflow:linked:physics-modelling",
      "vc:label": "Physics Modelling"
    },
    {
      "@id": "urn:visionflow:linked:wear-prediction",
      "vc:label": "Wear Prediction"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:model-based-control",
      "vc:label": "Model-based Control"
    },
    {
      "@id": "urn:visionflow:owl:class:robot-dynamics",
      "vc:label": "Robot Dynamics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0042"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Friction"
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
  "@id": "urn:ngm:class:friction",
  "@type": "Class",
  "label": "Friction",
  "definition": "Friction - The resistive force generated when surfaces slide or attempt to slide relative to one another, characterised by Coulomb friction (kinetic and static coefficients) and viscous damping, significantly impacting Joint Efficiency, Motor Performance, and Motion Accuracy in roboti...",
  "domain": "robotics",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robot-dynamics",
      "label": "Robot Dynamics"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency Calculation"
      },
      {
        "@id": "urn:ngm:class:model-based-control",
        "label": "Model Based Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:joint-mechanics",
        "label": "Joint Mechanics"
      }
    ]
  },
  "quality": 0.54,
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
  "@id": "urn:visionflow:annotation:link-resolutions:friction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:234c35d21e74b3b5d07084286216838b4f5e03e035fd2eaa8c1e60cad003511c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Energy Dissipation]]",
      "resolved": "urn:visionflow:linked:energy-dissipation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Energy Efficiency Calculation]]",
      "resolved": "urn:visionflow:linked:energy-efficiency-calculation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Friction Coefficient Estimation]]",
      "resolved": "urn:visionflow:linked:friction-coefficient-estimation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Joint Efficiency]]",
      "resolved": "urn:visionflow:linked:joint-efficiency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Joint Mechanics]]",
      "resolved": "urn:visionflow:linked:joint-mechanics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lubrication Management]]",
      "resolved": "urn:visionflow:linked:lubrication-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Accuracy]]",
      "resolved": "urn:visionflow:linked:motion-accuracy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motor Performance]]",
      "resolved": "urn:visionflow:linked:motor-performance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Physics Modelling]]",
      "resolved": "urn:visionflow:linked:physics-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wear Prediction]]",
      "resolved": "urn:visionflow:linked:wear-prediction",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model-based Control]]",
      "resolved": "urn:visionflow:owl:class:model-based-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Dynamics]]",
      "resolved": "urn:visionflow:owl:class:robot-dynamics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - **Friction** - The resistive force generated when surfaces slide or attempt to slide relative to one another, characterised by Coulomb friction (kinetic and static coefficients) and viscous damping, significantly impacting [[Joint Efficiency]], [[Motor Performance]], and [[Motion Accuracy]] in robotic systems.

- ### Semantic Classification
  - owl-class:: robotics:Friction
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Robot Dynamics]], [[Physics Modelling]]
  - is-part-of:: [[Joint Mechanics]], [[Energy Dissipation]]
  - requires:: [[Friction Coefficient Estimation]], [[Lubrication Management]]
  - enables:: [[Model-based Control]], [[Energy Efficiency Calculation]], [[Wear Prediction]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
