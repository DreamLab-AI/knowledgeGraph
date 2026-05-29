public:: true

# Structural Member
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9377279cabafa2dfbe458c25c152dc90b8ab0d8446b6e57fee6b4b1c3b15b1e5",
  "@type": "Page",
  "vc:slug": "structural-member",
  "title": "Structural Member",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9531"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Structural Member"
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
  "@id": "urn:ngm:class:structural-member",
  "@type": "Class",
  "label": "Structural Member",
  "definition": "A Structural Member is a discrete load-bearing component of a robotic system's physical frame, such as a link, beam, bracket, or chassis element, that transmits forces and torques between joints or actuators. Structural members define the kinematic chain of a robot and their geometric and material properties directly constrain workspace, payload, and dynamic performance.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:taxonomic-framework", "label": "Taxonomic Framework"},
      {"@id": "urn:ngm:class:robo-robot-type", "label": "Robot Type"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"},
      {"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Safety and Standards"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:systems-engineering", "label": "Systems Engineering"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:structural-member:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9377279cabafa2dfbe458c25c152dc90b8ab0d8446b6e57fee6b4b1c3b15b1e5"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A Structural Member is a discrete load-bearing component of a robotic system's physical frame, such as a link, beam, bracket, or chassis element, that transmits forces and torques between joints or actuators. Structural members define the kinematic chain of a robot and their geometric and material properties directly constrain workspace, payload, and dynamic performance.

- ### Semantic Classification
  - owl-class:: robotics:StructuralMember
  - owl-role:: concept

- ### Relationships
  - partOf:: Actuation and Control
  - relatedTo:: Taxonomic Framework, Robot Type
  - supports:: Navigation and Planning, Safety and Standards
  - uses:: Systems Engineering

- ### Content

  ## Overview

  Structural Member represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
