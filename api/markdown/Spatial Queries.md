public:: true

# Spatial Queries
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b1dbe8da5e3651580356b0eb4bd9bdf9637dd1d72ed0e182d7f85dc937fdd83b",
  "@type": "Page",
  "vc:slug": "spatial-queries",
  "title": "Spatial Queries",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:location-based-search",
      "vc:label": "Location Based Search"
    },
    {
      "@id": "urn:visionflow:owl:class:database-query",
      "vc:label": "Database Query"
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
      "vc:value": "MV-10064"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Queries"
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
  "@id": "urn:ngm:class:spatial-queries",
  "@type": "Class",
  "label": "Spatial Queries",
  "definition": "Database queries that select geographic features based on location or spatial relationships such as intersection, containment, proximity, and adjacency, implemented using R-tree spatial indexing and filter-refine strategies per OGC Simple Features and SQL/MM Spatial standards.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:database-query",
        "label": "Database Query"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:location-based-search",
        "label": "Location Based Search"
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-queries:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b1dbe8da5e3651580356b0eb4bd9bdf9637dd1d72ed0e182d7f85dc937fdd83b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Location Based Search]]",
      "resolved": "urn:visionflow:linked:location-based-search",
      "kind": "StubLink"
    },
    {
      "raw": "[[Database Query]]",
      "resolved": "urn:visionflow:owl:class:database-query",
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
  - Database queries that select geographic features based on location or spatial relationships such as intersection, containment, proximity, and adjacency, implemented using R-tree spatial indexing and filter-refine strategies per OGC Simple Features and SQL/MM Spatial standards.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialQueries
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Database Query]]
  - enables:: [[Location Based Search]]

- ### Content

  - #### Query Types
		- Intersection (does A intersect B)
		- Containment (does A contain B)
		- Proximity (what is near A)
		- Adjacency (what is next to A)
		- Buffer analysis queries
  - #### Implementation Technologies
		- PostGIS GiST and SP-GiST indexes
		- R-tree spatial indexing family
		- OGC Simple Features standard
		- SQL/MM Spatial ISO standard
		- QGIS Select by Location tools

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
