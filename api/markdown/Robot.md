schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Robot
legacy_uri:: urn:visionclaw:concept:robotics:robot
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "1.0"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-c40dad8a2f4f"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-28T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#Robot"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0001"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robot"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:robotics:robot"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:robot"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:117419dfa915d7e1851df02640e5ab9e93fa372662b543b5987ef040a3aaee24@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
      "@id": "urn:ngm:class:robotics",
      "label": "robotics"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:117419dfa915d7e1851df02640e5ab9e93fa372662b543b5987ef040a3aaee24@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
