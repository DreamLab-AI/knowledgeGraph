schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#SpatialDatabase
legacy_uri:: urn:visionclaw:concept:infrastructure:spatial-database
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d97b7c9f7d05"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#SpatialDatabase"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10058"
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
      "vc:value": "Spatial Database"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:spatial-database"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:spatial-database"
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
    "@id": "urn:visionflow:page:4df0d74453f0f179b3b70478f791466af35b9f48d3ada58bf9b1cb9ba7bb1cb6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:spatial-database",
  "@type": "OntologyClass",
  "label": "Spatial Database",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:database-system",
      "vc:label": "Database System"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:4df0d74453f0f179b3b70478f791466af35b9f48d3ada58bf9b1cb9ba7bb1cb6"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4df0d74453f0f179b3b70478f791466af35b9f48d3ada58bf9b1cb9ba7bb1cb6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A database system optimized for storing, indexing, and querying georeferenced data and geometric objects, supporting spatial data types (points, lines, polygons) and spatial operations (intersection, containment, proximity) per OGC Simple Features specification for GIS and metaverse applications.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:geospatial-data-management",
      "vc:label": "Geospatial Data Management"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4df0d74453f0f179b3b70478f791466af35b9f48d3ada58bf9b1cb9ba7bb1cb6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
