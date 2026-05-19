public:: true

# Spatial Database
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4df0d74453f0f179b3b70478f791466af35b9f48d3ada58bf9b1cb9ba7bb1cb6",
  "@type": "Page",
  "vc:slug": "spatial-database",
  "title": "Spatial Database",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:geospatial-data-management",
      "vc:label": "Geospatial Data Management"
    },
    {
      "@id": "urn:visionflow:owl:class:database-system",
      "vc:label": "Database System"
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
      "vc:value": "MV-10058"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Database"
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
  "@id": "urn:ngm:class:spatial-database",
  "@type": "Class",
  "label": "Spatial Database",
  "definition": "A database system optimized for storing, indexing, and querying georeferenced data and geometric objects, supporting spatial data types (points, lines, polygons) and spatial operations (intersection, containment, proximity) per OGC Simple Features specification for GIS and metaverse applications.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    },
    {
      "@id": "urn:ngm:class:database-system",
      "label": "Database System"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:geospatial-data-management",
        "label": "Geospatial Data Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-database:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4df0d74453f0f179b3b70478f791466af35b9f48d3ada58bf9b1cb9ba7bb1cb6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Geospatial Data Management]]",
      "resolved": "urn:visionflow:linked:geospatial-data-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Database System]]",
      "resolved": "urn:visionflow:owl:class:database-system",
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
  - A database system optimized for storing, indexing, and querying georeferenced data and geometric objects, supporting spatial data types (points, lines, polygons) and spatial operations (intersection, containment, proximity) per OGC Simple Features specification for GIS and metaverse applications.

- ### Semantic Classification
  - owl-class:: infrastructure:SpatialDatabase
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Database System]]
  - enables:: [[Geospatial Data Management]]

- ### Content

  - #### Key Implementations
		- PostGIS (PostgreSQL extension)
		- Oracle Spatial
		- Microsoft SQL Server Spatial
		- MySQL Spatial Extensions
		- Esri Geodatabase
  - #### Spatial Query Types
		- Containment queries (does A contain B)
		- Intersection queries (does A intersect B)
		- Proximity queries (what is near A)
		- Adjacency queries (what is next to A)
		- Distance and area calculations

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
