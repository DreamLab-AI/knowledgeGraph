- ### OntologyBlock
  id:: spatial-database-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-10058
	- source-domain:: mv
	- preferred-term:: Spatial Database
	- status:: active
	- definition:: A database system optimized for storing, indexing, and querying georeferenced data and geometric objects, supporting spatial data types (points, lines, polygons) and spatial operations (intersection, containment, proximity) per OGC Simple Features specification for GIS and metaverse applications.
	- owl:class:: mv:SpatialDatabase
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: spatial-database-relationships
	  collapsed:: true
		- is-subclass-of:: [[Database System]]
		- related-to:: [[GIS Technology]]
		- related-to:: [[PostGIS]]
		- related-to:: [[OGC Standards]]
		- enables:: [[Geospatial Data Management]]
	- #### Key Implementations
	  collapsed:: true
		- PostGIS (PostgreSQL extension)
		- Oracle Spatial
		- Microsoft SQL Server Spatial
		- MySQL Spatial Extensions
		- Esri Geodatabase
	- #### Spatial Query Types
	  collapsed:: true
		- Containment queries (does A contain B)
		- Intersection queries (does A intersect B)
		- Proximity queries (what is near A)
		- Adjacency queries (what is next to A)
		- Distance and area calculations


