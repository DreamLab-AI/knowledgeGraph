schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Manipulator
legacy_uri:: urn:visionclaw:concept:robotics:manipulator
public:: true

# Manipulator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:671b17c97b1858242b383b45416e1efb47beb39dfe2cce1e4487f2a0ac2c369f",
  "@type": "Page",
  "vc:slug": "manipulator",
  "title": "Manipulator",
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.99"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-35f86b56598d"
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
      "vc:value": "http://narrativegoldmine.com/robotics#Manipulator"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0003"
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
      "vc:value": "Manipulator"
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
      "vc:value": "urn:visionclaw:concept:robotics:manipulator"
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
      "vc:value": "urn:visionclaw:concept:robotics:manipulator"
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
    "@id": "urn:visionflow:page:671b17c97b1858242b383b45416e1efb47beb39dfe2cce1e4487f2a0ac2c369f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:manipulator",
  "@type": "Class",
  "label": "Manipulator",
  "definition": "A manipulator is a robot consisting of a series of segments, typically moving in a serial or parallel kinematic chain, with an end-effector for performing tasks.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot",
      "label": "Robot"
    }
  ],
  "relations": {
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
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:manipulator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:671b17c97b1858242b383b45416e1efb47beb39dfe2cce1e4487f2a0ac2c369f"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:671b17c97b1858242b383b45416e1efb47beb39dfe2cce1e4487f2a0ac2c369f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A manipulator is a robot consisting of a series of segments, typically moving in a serial or parallel kinematic chain, with an end-effector for performing tasks.

- ### Semantic Classification
  - owl-class:: robotics:Manipulator
  - owl-role:: Object
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-part-of:: [[Robot (RB-0001)]]

- ### Content
  Manipulator — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 8373:2021]]
  - migration-date:: 2026-04-26T00:00:00Z
