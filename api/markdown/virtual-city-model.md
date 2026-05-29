- ### Definition
  - A digital representation of an urban environment including buildings, infrastructure, terrain, and dynamic elements, used for urban planning, simulation, gaming, and metaverse world-building based on real or imagined cities.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualCityModel
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Twin]]
  - **uses**: [[Lidar]], [[Photogrammetry]] — real-world city geometry is captured via LiDAR point clouds and photogrammetric reconstruction
  - **enables**: [[Digital Twin Technology]], [[Metaverse Platform]] — virtual city models serve as the spatial substrate for smart-city digital twins and metaverse environments
  - **requires**: [[Real-Time Rendering]] — interactive visualisation of city-scale geometry requires optimised rendering pipelines (LOD, streaming, tiling)
  - **standardizedBy**: [[Interoperability Standard]] — CityGML, 3D Tiles, and IFC are the primary interoperability standards governing data exchange

- ### Content

  - ## Overview
  - Virtual city models create detailed digital representations of urban environments for various applications from city planning to gaming. These models can represent real cities as digital twins or serve as the foundation for metaverse virtual worlds.
  - ## Technical Details
  - ### Model Components
		- **Building Geometry**: LOD (Level of Detail) 1-4 representations
		- **Infrastructure**: Roads, utilities, transportation
		- **Terrain**: Elevation, land cover, water features
		- **Dynamic Elements**: Traffic, pedestrians, weather
  - ### Data Standards
		- **CityGML**: OGC standard for 3D city models
		- **3D Tiles**: Cesium streaming format
		- **OpenStreetMap**: Crowd-sourced geographic data
		- **BIM/IFC**: Building Information Modeling
  - ### Creation Methods
		- LiDAR and photogrammetry capture
		- Procedural generation algorithms
		- Manual 3D modeling
		- AI-assisted reconstruction
  - ## Applications
  - Urban planning and simulation
  - Smart city visualization
  - Metaverse world-building
  - Gaming environment creation
  - Emergency response planning

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z