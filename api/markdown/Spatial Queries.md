- ### OntologyBlock
  id:: spatial-queries-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-10064
	- source-domain:: mv
	- preferred-term:: Spatial Queries
	- status:: active
	- definition:: Database queries that select geographic features based on location or spatial relationships such as intersection, containment, proximity, and adjacency, implemented using R-tree spatial indexing and filter-refine strategies per OGC Simple Features and SQL/MM Spatial standards.
	- owl:class:: mv:SpatialQueries
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: spatial-queries-relationships
	  collapsed:: true
		- is-subclass-of:: [[Database Query]]
		- related-to:: [[Spatial Database]]
		- related-to:: [[R-Tree Indexing]]
		- related-to:: [[GIS Analysis]]
		- enables:: [[Location Based Search]]
	- #### Query Types
	  collapsed:: true
		- Intersection (does A intersect B)
		- Containment (does A contain B)
		- Proximity (what is near A)
		- Adjacency (what is next to A)
		- Buffer analysis queries
	- #### Implementation Technologies
	  collapsed:: true
		- PostGIS GiST and SP-GiST indexes
		- R-tree spatial indexing family
		- OGC Simple Features standard
		- SQL/MM Spatial ISO standard
		- QGIS Select by Location tools


