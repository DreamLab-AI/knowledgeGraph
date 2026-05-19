schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#QualityStandard
legacy_uri:: urn:visionclaw:concept:robotics:quality-standard
public:: true

# Quality Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5cd4598ec9d28632c1fefb08b4f4ae5d61528dc9c253521742070b391b3dfef",
  "@type": "Page",
  "vc:slug": "quality-standard",
  "title": "Quality Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robot-standard",
      "vc:label": "Robot Standard"
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
      "vc:value": "sha256-12-71308608a21e"
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
      "vc:value": "http://narrativegoldmine.com/robotics#QualityStandard"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0192"
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
      "vc:value": "Quality Standard"
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
      "vc:value": "urn:visionclaw:concept:robotics:quality-standard"
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
      "vc:value": "urn:visionclaw:concept:robotics:quality-standard"
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
    "@id": "urn:visionflow:page:b5cd4598ec9d28632c1fefb08b4f4ae5d61528dc9c253521742070b391b3dfef@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:quality-standard",
  "@type": "Class",
  "label": "Quality Standard",
  "definition": "Quality standard defines requirements for quality management in robot manufacturing and deployment.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-standard",
      "label": "Robot Standard"
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
  "@id": "urn:visionflow:annotation:link-resolutions:quality-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5cd4598ec9d28632c1fefb08b4f4ae5d61528dc9c253521742070b391b3dfef"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robot Standard]]",
      "resolved": "urn:visionflow:owl:class:robot-standard",
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
    "@id": "urn:visionflow:page:b5cd4598ec9d28632c1fefb08b4f4ae5d61528dc9c253521742070b391b3dfef@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Quality standard defines requirements for quality management in robot manufacturing and deployment.

- ### Semantic Classification
  - owl-class:: robotics:QualityStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Robot Standard]]

- ### Content
  Quality Standard — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
