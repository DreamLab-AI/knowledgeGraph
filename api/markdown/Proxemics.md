public:: true

# Proxemics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:31e1f3bc8ed97c0da74e74840a69a48e03efab41c51a4d114054c7236dfa0448",
  "@type": "Page",
  "vc:slug": "proxemics",
  "title": "Proxemics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hri",
      "vc:label": "HRI"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:social-robotics",
      "vc:label": "Social Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proxemics"
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
  "@id": "urn:ngm:class:proxemics",
  "@type": "Class",
  "label": "Proxemics",
  "definition": "The study and application of interpersonal and human-robot spatial relationships — including intimate, personal, social, and public distance zones — to design robotic systems that behave in spatially appropriate ways. Proxemics-aware robots adjust their approach trajectories, velocities, and stopping distances in response to detected human zones, improving perceived safety, comfort, and social acceptability in shared environments.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-human-robot-interaction",
      "label": "Human-Robot Interaction"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:social-robotics", "label": "Social Robotics"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:proximity-detection", "label": "Proximity Detection"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collision-avoidance", "label": "Collision Avoidance"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:attention-aware-interaction", "label": "Attention Aware Interaction"},
      {"@id": "urn:ngm:class:emotion-aware-interaction", "label": "Emotion Aware Interaction"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:proxemics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:31e1f3bc8ed97c0da74e74840a69a48e03efab41c51a4d114054c7236dfa0448"
  },
  "vc:resolutions": [
    {
      "raw": "[[HRI]]",
      "resolved": "urn:visionflow:linked:hri",
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
    },
    {
      "raw": "[[Social Robotics]]",
      "resolved": "urn:visionflow:owl:class:social-robotics",
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
  - Study and application of spatial relationships between humans and robots, including personal space, social distance, and comfort zones for effective human-robot interaction.

- ### Semantic Classification
  - owl-class:: robotics:Proxemics
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Proxemics as a discipline was established by anthropologist Edward T. Hall in the 1960s, who categorised the space around individuals into four zones: intimate (0–45 cm), personal (45 cm–1.2 m), social (1.2–3.6 m), and public (beyond 3.6 m). These boundaries vary across cultures, contexts, and individual preferences, making them probabilistic guidelines rather than hard constraints for robot designers.

  In social robotics and service robot deployments, proxemics informs both the planning of approach paths (how a robot navigates to a person) and the management of shared workspace (how a robot positions itself relative to bystanders). Robots that violate proxemic norms — by entering the intimate zone unexpectedly or maintaining uncomfortably close parallel paths — are rated as less trustworthy and less competent in user studies, regardless of their task performance. Integrating proxemics into motion planners typically involves adding socially-aware cost terms to trajectory optimisation, often derived from Gaussian potential fields centred on detected human positions.

- ### Provenance
  - sources:: [[HRI]], [[Social Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z
