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