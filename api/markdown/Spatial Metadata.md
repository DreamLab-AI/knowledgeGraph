schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SpatialMetadata
legacy_uri:: urn:visionclaw:concept:spatial-computing:spatial-metadata
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7e74bc98e967"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SpatialMetadata"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10062"
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
      "vc:value": "Spatial Metadata"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-metadata"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-metadata"
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
    "@id": "urn:visionflow:page:cd38f36950f19705f6a59c4763393b41ae9d6e60c812369de574814252d05e45@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:cd38f36950f19705f6a59c4763393b41ae9d6e60c812369de574814252d05e45@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
