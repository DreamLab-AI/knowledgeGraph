A voxel grid is a regular three-dimensional lattice that partitions space into uniformly sized cubic cells, each cell (voxel) storing occupancy, colour, density, or other attributes of the volume it covers. It provides a structured spatial representation used to discretise point clouds, build occupancy maps, and accelerate spatial queries in robotics and computer graphics. By contrast with continuous point sets, the fixed cell structure trades fine resolution for predictable indexing and constant-time neighbourhood access.

- A [[Voxel Grid]] is a regular 3D lattice of cubic cells that discretises space for [[Spatial Computing]], with each voxel storing occupancy or attribute data. It is commonly populated from [[Lidar]] or [[Sensor]] data to support [[Mapping]] and [[SLAM]], and it underpins volumetric [[Perception]] in [[Robotics]].

### Overview

- A voxel grid partitions a bounded region of space into equally sized cubes, the three-dimensional analogue of pixels in a 2D image.
- Each voxel can record whether the cell is occupied, free, or unknown, and may additionally store colour, surface normals, density, or signed distance values.
- Voxelisation converts irregular point clouds into a uniform grid, downsampling dense data and enabling constant-time spatial lookups.
- Resolution is governed by voxel size: smaller voxels capture detail at higher memory cost, while larger voxels are coarse but compact.

### Key aspects

- Uniform discretisation: fixed cell size gives predictable indexing by integer coordinates.
- Occupancy semantics: cells distinguish occupied, free, and unobserved space for navigation.
- Downsampling: voxel filtering reduces point-cloud size while preserving structure.
- Memory scaling: dense grids grow cubically, motivating sparse or hierarchical variants such as octrees.

### Applications

- Robot navigation and obstacle avoidance using occupancy grids built from depth sensors.
- 3D reconstruction and surface extraction from fused range scans.
- Collision detection and physics in graphics and simulation.
- Point-cloud preprocessing to normalise sampling density before further analysis.

### Provenance

