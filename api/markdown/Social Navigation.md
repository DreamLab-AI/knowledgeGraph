public:: true

# Social Navigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82c986b34ddd2168b9bb34f34b048d53395952e1edf8fcbe1f5377fb06830b12",
  "@type": "Page",
  "vc:slug": "social-navigation",
  "title": "Social Navigation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hri",
      "vc:label": "HRI"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robotics",
      "vc:label": "Mobile Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Navigation"
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
  "@id": "urn:ngm:class:social-navigation",
  "@type": "Class",
  "label": "Social Navigation",
  "definition": "Social Navigation is the discipline within robotics concerned with planning and executing robot motion through human-occupied spaces while respecting social norms, personal space conventions (proxemics), cultural context, and human comfort. It extends classical motion planning by incorporating models of human behaviour, pedestrian flow prediction, and non-verbal communication cues such as gaze and gesture, with the goal of producing movement that is perceived as natural and non-threatening.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-human-robot-interaction",
      "label": "Human-Robot Interaction"
    }
  ],
  "quality": 0.75,
  "qualityScore": 0.75,
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:proxemics", "label": "Proxemics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:social-robotics", "label": "Social Robotics"},
      {"@id": "urn:ngm:class:collision-avoidance", "label": "Collision Avoidance"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-navigation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82c986b34ddd2168b9bb34f34b048d53395952e1edf8fcbe1f5377fb06830b12"
  },
  "vc:resolutions": [
    {
      "raw": "[[HRI]]",
      "resolved": "urn:visionflow:linked:hri",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robotics]]",
      "resolved": "urn:visionflow:linked:mobile-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
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
  - Robot navigation strategies that account for social norms, human comfort, and contextual appropriateness when moving through human-populated environments.

- ### Semantic Classification
  - owl-class:: robotics:SocialNavigation
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Social Navigation goes beyond obstacle avoidance by treating the humans sharing a space as dynamic social agents with expectations about interpersonal distance, movement trajectories, and contextual cues. Hallway passing, doorway negotiation, and group approach scenarios each carry implicit behavioural scripts that socially aware robots must learn and respect to avoid alarming or obstructing people.

  Techniques include learning-based approaches (reinforcement learning with social reward functions), model-based prediction of pedestrian trajectories using social force models, and real-time re-planning with SLAM to maintain situational awareness in dynamic environments. Evaluation metrics combine traditional navigation efficiency (path length, time to goal) with human-centric measures such as minimum approach distance, jerk profiles, and subjective comfort ratings gathered in user studies.

- ### Provenance
  - sources:: [[HRI]], [[Mobile Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z
