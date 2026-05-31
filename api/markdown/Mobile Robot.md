public:: true
alias:: Mobile Robots, MobileRobot

# Mobile Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b2452c5bd0e7df0a50cdde8d5a71f54cf3ce47c32e8e3d8de113cedafae01e1",
  "@type": "Page",
  "vc:slug": "mobile-robot",
  "title": "Mobile Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-8373-2021",
      "vc:label": "ISO 8373:2021"
    },
    {
      "@id": "urn:visionflow:linked:robot-rb-0001",
      "vc:label": "Robot (RB-0001)"
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
      "vc:value": "RB-0002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mobile Robot"
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
  "@id": "urn:ngm:class:mobile-robot",
  "@type": "Class",
  "label": "Mobile Robot",
  "definition": "A mobile robot is a robot with locomotion capabilities that enable it to move within its working environment.",
  "domain": "robotics",
  "maturity": "established",
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "robotics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot-rb-0001",
        "label": "Robot (RB-0001)"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mobile-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3b2452c5bd0e7df0a50cdde8d5a71f54cf3ce47c32e8e3d8de113cedafae01e1"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 8373:2021]]",
      "resolved": "urn:visionflow:linked:iso-8373-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robot (RB-0001)]]",
      "resolved": "urn:visionflow:linked:robot-rb-0001",
      "kind": "StubLink"
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
  - A mobile robot is a robot with locomotion capabilities that enable it to move within its working environment.

- ### Semantic Classification
  - owl-class:: robotics:MobileRobot
  - owl-role:: Object
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-part-of:: [[Robot (RB-0001)]]

- ### Content
  Mobile Robot — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 8373:2021]]
  - migration-date:: 2026-04-26T00:00:00Z
