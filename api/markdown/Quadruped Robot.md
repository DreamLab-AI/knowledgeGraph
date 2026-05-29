public:: true

# Quadruped Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:746bfe70e1a0c0d722952b4ee92deec99dee46d5099586ab2bf0bb969678712e",
  "@type": "Page",
  "vc:slug": "quadruped-robot",
  "title": "Quadruped Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:legged-robot",
      "vc:label": "Legged Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0119"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Quadruped Robot"
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
  "@id": "urn:ngm:class:quadruped-robot",
  "@type": "Class",
  "label": "Quadruped Robot",
  "definition": "A robotic platform that locomotes on four legs using gaits inspired by mammals such as dogs and cats. Quadruped robots employ reinforcement learning, model-predictive control, and whole-body dynamics to achieve robust locomotion over rough terrain, enabling deployment in inspection, search-and-rescue, and logistics applications.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:legged-robot",
      "label": "Legged Robot"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:humanoid-robot", "label": "Humanoid Robot"},
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"},
      {"@id": "urn:ngm:class:robotic-system", "label": "Robotic System"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:whole-body-control", "label": "Whole Body Control"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:quadruped-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:746bfe70e1a0c0d722952b4ee92deec99dee46d5099586ab2bf0bb969678712e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Legged Robot]]",
      "resolved": "urn:visionflow:owl:class:legged-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
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
  - Quadruped robot walks on four legs with gaits inspired by mammals like dogs or cats.

- ### Semantic Classification
  - owl-class:: robotics:QuadrupedRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Legged Robot]]

- ### Content
  Quadruped robots replicate the mechanical advantage of four-legged locomotion: broader stability polygon than bipeds while retaining agility on unstructured terrain. Hardware typically features twelve or more degrees of freedom driven by proprioceptive servo actuators with torque sensing, enabling compliant contact with the environment. Onboard computers run real-time whole-body control loops at 1 kHz and higher.

  Reinforcement learning has become the dominant approach for gait learning: simulated training in physics engines with domain randomisation produces policies that transfer to real hardware capable of dynamic gaits (trot, bound, gallop), stair climbing, and recovery from perturbations. Commercial platforms from Boston Dynamics (Spot), Unitree, and ANYbotics serve inspection, security, and logistics use cases.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
