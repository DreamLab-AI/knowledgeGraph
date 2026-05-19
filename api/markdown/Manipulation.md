schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Manipulation
legacy_uri:: urn:visionclaw:concept:robotics:manipulation
public:: true

# Manipulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2",
  "@type": "Page",
  "vc:slug": "manipulation",
  "title": "Manipulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-eb851aca5785"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#Manipulation"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0602"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Manipulation"
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
      "vc:value": "urn:visionclaw:concept:robotics:manipulation"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:manipulation"
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
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:manipulation",
  "@type": "OntologyClass",
  "label": "Manipulation",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    }
  ],
  "vc:sourceDomain": "robotics",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Manipulation in robotics refers to the ability of robotic systems to physically interact with and control objects in their environment. This encompasses grasping, object handling, dexterous manipulation, and the end effectors and planning algorithms that enable robots to perform precise physical tasks.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:manipulation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Manipulation in robotics refers to the ability of robotic systems to physically interact with and control objects in their environment. This encompasses grasping, object handling, dexterous manipulation, and the end effectors and planning algorithms that enable robots to perform precise physical tasks.

- ### Semantic Classification
  - owl-class:: robotics:Manipulation
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics Systems]]

- ### Relationships
  - is-subclass-of:: [[Robotics Systems]]

- ### Content
  Manipulation — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
