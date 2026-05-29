public:: true

# Data Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c822fbf21e2345e07dab0f4ce849681fa325aa0aea1ef77adcd5cd0afd9d0860",
  "@type": "Page",
  "vc:slug": "data-format",
  "title": "Data Format",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9550"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Format"
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
  "@id": "urn:ngm:class:data-format",
  "@type": "Class",
  "label": "Data Format",
  "definition": "Data Format defines the structural and encoding specification by which data is stored, transmitted, and interpreted between systems. Formats span binary serialisation (Protocol Buffers, Avro), text-based interchange (JSON, JSON-LD, XML), domain-specific schemas (DICOM, glTF), and columnar storage formats (Parquet). Format choice determines interoperability scope, parsing overhead, and compatibility with downstream processing pipelines.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    },
    {
      "@id": "urn:ngm:class:data-standards",
      "label": "Data Standards"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:data-standards", "label": "Data Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-interoperability", "label": "Data Interoperability"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-format:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c822fbf21e2345e07dab0f4ce849681fa325aa0aea1ef77adcd5cd0afd9d0860"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - Data Format defines the structural and encoding specification by which data is stored, transmitted, and interpreted between systems. Formats span binary serialisation (Protocol Buffers, Avro), text-based interchange (JSON, JSON-LD, XML), domain-specific schemas (DICOM, glTF), and columnar storage formats (Parquet). Format choice determines interoperability scope, parsing overhead, and compatibility with downstream processing pipelines.

- ### Semantic Classification
  - owl-class:: infrastructure:DataFormat
  - owl-role:: concept

- ### Relationships
  - partOf [[Data Standards]]
  - enables [[Data Interoperability]]
  - enables [[Data Pipeline]]
  - relatedTo [[JSON-LD]]
  - relatedTo [[Linked Data]]

- ### Content

  ## Overview

  Data Format represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Computer Vision]] (ai)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
