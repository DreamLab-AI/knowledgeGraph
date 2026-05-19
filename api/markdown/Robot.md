public:: true

# Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:117419dfa915d7e1851df02640e5ab9e93fa372662b543b5987ef040a3aaee24",
  "@type": "Page",
  "vc:slug": "robot",
  "title": "Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-8373-2021",
      "vc:label": "ISO 8373:2021"
    },
    {
      "@id": "urn:visionflow:linked:mechatronic-system",
      "vc:label": "MechatronicSystem"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-agent",
      "vc:label": "AutonomousAgent"
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
      "vc:value": "RB-0001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robot"
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
  "@id": "urn:ngm:class:robot",
  "@type": "Class",
  "label": "Robot",
  "definition": "A robot is an actuated mechanism programmable in two or more axes with a degree of autonomy, moving within its environment, to perform intended tasks.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:mechatronic-system",
        "label": "MechatronicSystem"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "AutonomousAgent"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:117419dfa915d7e1851df02640e5ab9e93fa372662b543b5987ef040a3aaee24"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 8373:2021]]",
      "resolved": "urn:visionflow:linked:iso-8373-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[MechatronicSystem]]",
      "resolved": "urn:visionflow:linked:mechatronic-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[AutonomousAgent]]",
      "resolved": "urn:visionflow:owl:class:autonomous-agent",
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
  - A robot is an actuated mechanism programmable in two or more axes with a degree of autonomy, moving within its environment, to perform intended tasks.

- ### Semantic Classification
  - owl-class:: robotics:Robot
  - owl-role:: Object
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-part-of:: [[MechatronicSystem]], [[AutonomousAgent]]

- ### Content
  Robot — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 8373:2021]]
  - migration-date:: 2026-04-26T00:00:00Z
