schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#MecanumWheelRobot
legacy_uri:: urn:visionclaw:concept:robotics:mecanum-wheel-robot
public:: true

# Mecanum Wheel Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6",
  "@type": "Page",
  "vc:slug": "mecanum-wheel-robot",
  "title": "Mecanum Wheel Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:omnidirectional-robot",
      "vc:label": "Omnidirectional Robot"
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
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d40055d9b080"
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
      "vc:value": "http://narrativegoldmine.com/robotics#MecanumWheelRobot"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0117"
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
      "vc:value": "Mecanum Wheel Robot"
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
      "vc:value": "urn:visionclaw:concept:robotics:mecanum-wheel-robot"
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
      "vc:value": "urn:visionclaw:concept:robotics:mecanum-wheel-robot"
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
    "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:mecanum-wheel-robot",
  "@type": "OntologyClass",
  "label": "Mecanum Wheel Robot",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:omnidirectional-robot",
      "vc:label": "Omnidirectional Robot"
    }
  ],
  "vc:sourceDomain": "robotics",
  "vc:status": "complete",
  "vc:maturity": "established",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Mecanum robot uses four mecanum wheels with angled rollers enabling true omnidirectional movement.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mecanum-wheel-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Omnidirectional Robot]]",
      "resolved": "urn:visionflow:owl:class:omnidirectional-robot",
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
    "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Mecanum robot uses four mecanum wheels with angled rollers enabling true omnidirectional movement.

- ### Semantic Classification
  - owl-class:: robotics:MecanumRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Omnidirectional Robot]]

- ### Content
  Mecanum Wheel Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
