public:: true

# Omnidirectional Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2ead0039f60059513184d25371bdeaed581db8880e873ac8fd109ac2856d5e5d",
  "@type": "Page",
  "vc:slug": "omnidirectional-robot",
  "title": "Omnidirectional Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:wheeled-robot",
      "vc:label": "Wheeled Robot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0116"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Omnidirectional Robot"
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
  "@id": "urn:ngm:class:omnidirectional-robot",
  "@type": "Class",
  "label": "Omnidirectional Robot",
  "definition": "A wheeled mobile robot that achieves holonomic motion—the ability to translate in any direction and rotate independently—by employing mecanum wheels or omniwheels whose passive rollers allow lateral force components. This enables precise, agile manoeuvring in constrained environments such as warehouses and hospital corridors without requiring turning arcs.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:wheeled-robot",
      "label": "Wheeled Robot"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mecanum-wheel-robot", "label": "Mecanum Wheel Robot"},
      {"@id": "urn:ngm:class:differential-drive-robot", "label": "Differential Drive Robot"},
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"},
      {"@id": "urn:ngm:class:wheeled-mobile-robot", "label": "Wheeled Mobile Robot"},
      {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"},
      {"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robo-robot-type", "label": "Robot Type"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:omnidirectional-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2ead0039f60059513184d25371bdeaed581db8880e873ac8fd109ac2856d5e5d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wheeled Robot]]",
      "resolved": "urn:visionflow:owl:class:wheeled-robot",
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
  - Omnidirectional robot uses mecanum wheels or omniwheels for holonomic motion.

- ### Semantic Classification
  - owl-class:: robotics:OmnidirectionalRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Wheeled Robot]]

- ### Content
  Omnidirectional Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
