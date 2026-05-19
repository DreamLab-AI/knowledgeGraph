schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SpatialCoordinates
legacy_uri:: urn:visionclaw:concept:spatial-computing:spatial-coordinates
public:: true

# Spatial Coordinates
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1f5426818faf47dc9f44e15f5f747acfc95e5f9aaa7e95a65bdf44643dc1fb41",
  "@type": "Page",
  "vc:slug": "spatial-coordinates",
  "title": "Spatial Coordinates",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:object-positioning",
      "vc:label": "Object Positioning"
    },
    {
      "@id": "urn:visionflow:owl:class:coordinate-system",
      "vc:label": "Coordinate System"
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
      "vc:value": "sha256-12-c5b9b6e11ef2"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SpatialCoordinates"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10057"
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
      "vc:value": "Spatial Coordinates"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-coordinates"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-coordinates"
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
    "@id": "urn:visionflow:page:1f5426818faf47dc9f44e15f5f747acfc95e5f9aaa7e95a65bdf44643dc1fb41@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:spatial-coordinates",
  "@type": "Class",
  "label": "Spatial Coordinates",
  "definition": "A unified reference frame system for positioning objects in three-dimensional virtual or mixed reality environments, including geographically-anchored poses (GeoPose) tied to Earth coordinates and local coordinate systems for scene-relative object placement with support for coordinate transformat...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:coordinate-system",
      "label": "Coordinate System"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:object-positioning",
        "label": "Object Positioning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-coordinates:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1f5426818faf47dc9f44e15f5f747acfc95e5f9aaa7e95a65bdf44643dc1fb41"
  },
  "vc:resolutions": [
    {
      "raw": "[[Object Positioning]]",
      "resolved": "urn:visionflow:linked:object-positioning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Coordinate System]]",
      "resolved": "urn:visionflow:owl:class:coordinate-system",
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
    "@id": "urn:visionflow:page:1f5426818faf47dc9f44e15f5f747acfc95e5f9aaa7e95a65bdf44643dc1fb41@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A unified reference frame system for positioning objects in three-dimensional virtual or mixed reality environments, including geographically-anchored poses (GeoPose) tied to Earth coordinates and local coordinate systems for scene-relative object placement with support for coordinate transformation between systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialCoordinates
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Coordinate System]]
  - enables:: [[Object Positioning]]

- ### Content

  - #### Standards and Specifications
		- OGC GeoPose 1.0 Data Exchange Standard
		- Scene-level coordinate interfaces
		- Geographic frame references
		- Local coordinate systems
		- Transformation matrices
  - #### Applications
		- Virtual object placement (x, y, z)
		- Cross-platform asset positioning
		- Geospatial metaverse anchoring
		- Indoor navigation systems
		- AR content registration

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
