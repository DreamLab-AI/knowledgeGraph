public:: true

# Organisational Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fbead742707a0713faa8dedf9bc76106eb3cf0b06823057ceff655cdd653ce45",
  "@type": "Page",
  "vc:slug": "organisational-layer",
  "title": "Organisational Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:institutional-layer",
      "vc:label": "Institutional Layer"
    },
    {
      "@id": "urn:visionflow:linked:operational-layer",
      "vc:label": "Operational Layer"
    },
    {
      "@id": "urn:visionflow:linked:process-layer",
      "vc:label": "Process Layer"
    },
    {
      "@id": "urn:visionflow:linked:organisational-structure",
      "vc:label": "Organisational Structure"
    },
    {
      "@id": "urn:visionflow:linked:division-of-labour",
      "vc:label": "Division of Labour"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Organisational Layer"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:organisational-layer",
  "@type": "Class",
  "label": "Organisational Layer",
  "definition": "The Organisational Layer is the cross-cutting stratum that represents the internal structure, roles, and processes of an operating body. It sits above the Institutional Layer that grants it standing and supports operational and social activity. It contains organisational units, responsibilities, reporting lines, and internal processes.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:institutional-layer",
        "label": "Institutional Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:operational-layer",
        "label": "Operational Layer"
      },
      {
        "@id": "urn:ngm:class:process-layer",
        "label": "Process Layer"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:organisational-layer:2a66b1d4d594",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fbead742707a0713faa8dedf9bc76106eb3cf0b06823057ceff655cdd653ce45"
  },
  "vc:resolutions": [
    {
      "raw": "[[Institutional Layer]]",
      "resolved": "urn:visionflow:linked:institutional-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Operational Layer]]",
      "resolved": "urn:visionflow:linked:operational-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Process Layer]]",
      "resolved": "urn:visionflow:linked:process-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Organisational Structure]]",
      "resolved": "urn:visionflow:linked:organisational-structure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Division of Labour]]",
      "resolved": "urn:visionflow:linked:division-of-labour",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Organisational Layer is the cross-cutting stratum that represents the internal structure, roles, and processes of an operating body. It sits above the Institutional Layer that grants it standing and supports operational and social activity. It contains organisational units, responsibilities, reporting lines, and internal processes.

- ### Semantic Classification
  - owl-class:: org:OrganisationalLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Organisational Structure]], [[Division of Labour]]
  - requires:: [[Institutional Layer]]
  - enables:: [[Operational Layer]], [[Process Layer]]

- ### Content
  - The Organisational Layer describes how an operating body is internally arranged to carry out its mandate. Typical members include teams and units, defined roles and responsibilities, reporting and escalation lines, and the internal processes that coordinate them. It gives shape to who does what within an institution.
  - It requires the Institutional Layer for the formal recognition and mandate it operates under, and it enables the Operational and Process Layers, which execute work according to its structure. Clear roles here reduce friction and ambiguity in day-to-day activity.
  - The layer bridges to organisational structure and the division of labour, principles that govern how work is partitioned and coordinated. The fit between structure and task strongly influences effectiveness.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
