iri:: http://narrativegoldmine.com/spatial-computing#SpatialQueries
uri:: urn:visionclaw:concept:spatial-computing:spatial-queries
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:spatial-queries
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Spatial Queries
content-hash:: sha256-12-a50369039892
legacy-term-id:: MV-10064
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

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
