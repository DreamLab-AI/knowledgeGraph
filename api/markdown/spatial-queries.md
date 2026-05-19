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