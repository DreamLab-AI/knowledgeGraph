public:: true

# Spatial Metadata
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cd38f36950f19705f6a59c4763393b41ae9d6e60c812369de574814252d05e45",
  "@type": "Page",
  "vc:slug": "spatial-metadata",
  "title": "Spatial Metadata",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:spatial-data-discovery",
      "vc:label": "Spatial Data Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:geospatial-information",
      "vc:label": "Geospatial Information"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10062"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Metadata"
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
  "@id": "urn:ngm:class:spatial-metadata",
  "@type": "Class",
  "label": "Spatial Metadata",
  "definition": "Descriptive information about geospatial and 3D content documenting location, coordinate system, projection, quality, lineage, and distribution attributes, following standards such as ISO 19115 and FGDC CSDGM to enable discovery, eand interoperability of spatial data resources.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:geospatial-information",
      "label": "Geospatial Information"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-data-discovery",
        "label": "Spatial Data Discovery"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-metadata:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cd38f36950f19705f6a59c4763393b41ae9d6e60c812369de574814252d05e45"
  },
  "vc:resolutions": [
    {
      "raw": "[[Spatial Data Discovery]]",
      "resolved": "urn:visionflow:linked:spatial-data-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Geospatial Information]]",
      "resolved": "urn:visionflow:owl:class:geospatial-information",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Descriptive information about geospatial and 3D content documenting location, coordinate system, projection, quality, lineage, and distribution attributes, following standards such as ISO 19115 and FGDC CSDGM to enable discovery, evaluation, and interoperability of spatial data resources.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialMetadata
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Geospatial Information]]
  - enables:: [[Spatial Data Discovery]]

- ### Content

  - #### Key Components
		- Coordinate system and projection details
		- Spatial reference information
		- Attribute field documentation
		- Data quality and accuracy lineage
		- Distribution and access information
  - #### Standards
		- ISO 19115 Geographic Information Metadata
		- FGDC Content Standard (CSDGM)
		- INSPIRE European spatial data standard
		- OGC I3S for 3D visualization
		- 3D metadata profiles (21 classes)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
