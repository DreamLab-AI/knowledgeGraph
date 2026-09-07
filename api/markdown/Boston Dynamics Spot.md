```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c6b689965db236347dcf63722464ff2dc97f72ae8b6ae0b596e97b4aee42a42",
  "@type": "Page",
  "vc:slug": "boston-dynamics-spot",
  "title": "Boston Dynamics Spot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:legged-locomotion",
      "vc:label": "Legged Locomotion"
    },
    {
      "@id": "urn:visionflow:linked:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:linked:robot-perception",
      "vc:label": "Robot Perception"
    },
    {
      "@id": "urn:visionflow:linked:sensors",
      "vc:label": "Sensors"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robotics",
      "vc:label": "Mobile Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-bostondynamics-com-products-spot",
      "vc:label": "https://bostondynamics.com/products/spot/"
    },
    {
      "@id": "urn:visionflow:linked:https-dev-bostondynamics-com",
      "vc:label": "https://dev.bostondynamics.com/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Boston Dynamics Spot"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:boston-dynamics-spot",
  "@type": "Class",
  "label": "Boston Dynamics Spot",
  "definition": "Spot is a quadruped mobile robot developed by Boston Dynamics, designed for inspection and data collection across varied terrain.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mobile-robotics",
      "label": "Mobile Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:legged-locomotion",
        "label": "Legged Locomotion"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

- ### Definition
  - Spot is a quadruped mobile robot developed by Boston Dynamics, designed for inspection and data collection across varied terrain.

- ### Semantic Classification
  - owl-class:: robotics:BostonDynamicsSpot
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Mobile Robotics]]
  - bridges-to:: [[Sensors]]
  - requires:: [[Legged Locomotion]], [[SLAM]]
  - enables:: [[Robot Perception]]

- ### Content
  - Spot is a four-legged robot produced by Boston Dynamics that walks over uneven ground, stairs and obstacles. It carries payloads and sensors for tasks such as routine inspection and remote monitoring.
  - The platform supports autonomous navigation along recorded routes and can be extended with cameras, thermal sensors and manipulator arms. It is used in industrial inspection, construction monitoring and research.

- ### Provenance
  - sources:: [[https://bostondynamics.com/products/spot/]], [[https://dev.bostondynamics.com/]]
  - migration-date:: 2026-05-29T00:00:00Z
