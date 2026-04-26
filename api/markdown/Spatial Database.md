iri:: http://narrativegoldmine.com/infrastructure#SpatialDatabase
uri:: urn:visionclaw:concept:infrastructure:spatial-database
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:spatial-database
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Spatial Database
content-hash:: sha256-12-d97b7c9f7d05
legacy-term-id:: MV-10058
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

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
