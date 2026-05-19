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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0128"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Remotely Operated Vehicle (ROV)"
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
  "@id": "urn:ngm:class:remotely-operated-vehicle-rov",
  "@type": "Class",
  "label": "Remotely Operated Vehicle (ROV)",
  "definition": "ROV is tered underwater robot controlled remotely via cable providing power and communications.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
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
