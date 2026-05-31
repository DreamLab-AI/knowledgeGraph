public:: true
alias:: RoboticSystem

# Robotic System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a1a3d9a3c62e2ae7536c014373e95cb9ad3c32d505b040ab23731d82487d1985",
  "@type": "Page",
  "vc:slug": "robotic-system",
  "title": "Robotic System",
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
      "vc:value": "TC-9511"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robotic System"
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
  "@id": "urn:ngm:class:robotic-system",
  "@type": "Class",
  "label": "Robotic System",
  "definition": "An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:motion-control",
        "label": "Motion Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robotic-telepresence",
        "label": "Robotic Telepresence"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robotic-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a1a3d9a3c62e2ae7536c014373e95cb9ad3c32d505b040ab23731d82487d1985"
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
  - An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:RoboticSystem
  - owl-role:: concept

- ### Relationships
  - Has Part: [[Actuator]]
  - Has Part: [[Sensor Fusion]]
  - Has Part: [[Motion Control]]
  - Uses: [[Robot Operating System]]
  - Uses: [[Computer Vision]]
  - Related To: [[Robotic Telepresence]]
  - Related To: [[Human Robot Interaction]]

- ### Content

  ## Overview

  Robotic System represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
