schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#ElectricLinearActuator
legacy_uri:: urn:visionclaw:concept:robotics:electric-linear-actuator
public:: true

# Electric Linear Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13b54f1ac4d899606d7a0705db2df428417aa8fc0d08f97edf4d902baf42fb29",
  "@type": "Page",
  "vc:slug": "electric-linear-actuator",
  "title": "Electric Linear Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:electric-actuator",
      "vc:label": "Electric Actuator"
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
      "vc:value": "0.95"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Computer Vision]], [[Digital Twin]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-0b3d518b1cec"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#ElectricLinearActuator"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0174"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Electric Linear Actuator"
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
      "vc:value": "urn:visionclaw:concept:robotics:electric-linear-actuator"
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
      "vc:value": "urn:visionclaw:concept:robotics:electric-linear-actuator"
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
    "@id": "urn:visionflow:page:13b54f1ac4d899606d7a0705db2df428417aa8fc0d08f97edf4d902baf42fb29@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:electric-linear-actuator",
  "@type": "Class",
  "label": "Electric Linear Actuator",
  "definition": "Electric linear actuator converts rotary motion to linear motion using screw, belt, or rack-pinion.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:electric-actuator",
      "label": "Electric Actuator"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:electric-linear-actuator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13b54f1ac4d899606d7a0705db2df428417aa8fc0d08f97edf4d902baf42fb29"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electric Actuator]]",
      "resolved": "urn:visionflow:owl:class:electric-actuator",
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
    "@id": "urn:visionflow:page:13b54f1ac4d899606d7a0705db2df428417aa8fc0d08f97edf4d902baf42fb29@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Electric linear actuator converts rotary motion to linear motion using screw, belt, or rack-pinion.

- ### Semantic Classification
  - owl-class:: robotics:LinearActuator
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Electric Actuator]]

- ### Content
  Electric Linear Actuator — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
