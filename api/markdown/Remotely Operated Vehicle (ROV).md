schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#RemotelyOperatedVehicleROV
legacy_uri:: urn:visionclaw:concept:robotics:remotely-operated-vehicle-rov
public:: true

# Remotely Operated Vehicle (ROV)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fdcb6be8d5026c045ac7015b82c5c45011a90365c1480cdab712a09352f79551",
  "@type": "Page",
  "vc:slug": "remotely-operated-vehicle-rov",
  "title": "Remotely Operated Vehicle (ROV)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:underwater-robot",
      "vc:label": "Underwater Robot"
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
      "vc:value": "sha256-12-f38dd8d455d2"
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
      "vc:value": "http://narrativegoldmine.com/robotics#RemotelyOperatedVehicleROV"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0128"
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
      "vc:value": "Remotely Operated Vehicle (ROV)"
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
      "vc:value": "urn:visionclaw:concept:robotics:remotely-operated-vehicle-rov"
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
      "vc:value": "urn:visionclaw:concept:robotics:remotely-operated-vehicle-rov"
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
    "@id": "urn:visionflow:page:fdcb6be8d5026c045ac7015b82c5c45011a90365c1480cdab712a09352f79551@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:remotely-operated-vehicle-rov",
  "@type": "Class",
  "label": "Remotely Operated Vehicle (ROV)",
  "definition": "ROV is tered underwater robot controlled remotely via cable providing power and communications.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:underwater-robot",
      "label": "Underwater Robot"
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
  "@id": "urn:visionflow:annotation:link-resolutions:remotely-operated-vehicle-rov:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fdcb6be8d5026c045ac7015b82c5c45011a90365c1480cdab712a09352f79551"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Underwater Robot]]",
      "resolved": "urn:visionflow:owl:class:underwater-robot",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:fdcb6be8d5026c045ac7015b82c5c45011a90365c1480cdab712a09352f79551@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - ROV is tethered underwater robot controlled remotely via cable providing power and communications.

- ### Semantic Classification
  - owl-class:: robotics:Rov
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Underwater Robot]]

- ### Content
  Remotely Operated Vehicle (ROV) — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
