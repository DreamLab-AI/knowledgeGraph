- ### Definition
  - A Point Cloud is a set of data points in three-dimensional space, each defined by X, Y, Z coordinates and optionally colour or intensity values, produced by LiDAR scanners, depth cameras, or photogrammetry pipelines. Point clouds serve as the raw geometric representation of real-world objects and environments before downstream processing into meshes, 3D models, or spatial maps. They are fundamental to SLAM, 3D reconstruction, and digital twin workflows in spatial computing.

- ### Semantic Classification
  - owl-class:: spatial-computing:PointCloud
  - owl-role:: Concept

- ### Relationships
  - requires [[Depth Sensing]]
  - enables [[3D Reconstruction]]
  - enables [[Spatial Mapping]]
  - relatedTo [[Photogrammetry]]
  - relatedTo [[SLAM]]
  - relatedTo [[Sensor Fusion]]

- ### Content
  # PointCloud
  A Point Cloud is a discrete set of 3D coordinate samples representing the surface geometry of an object or scene. LiDAR scanners emit laser pulses and measure return times to generate dense, high-accuracy point sets; RGB-D cameras combine colour and depth to produce coloured clouds; photogrammetry derives point clouds from overlapping photographs via structure-from-motion algorithms. Point cloud data feeds spatial-mapping and SLAM pipelines that track device position in real time. Downstream processing — including voxelisation, surface reconstruction, and mesh generation — converts raw clouds into 3D models usable in spatial computing environments. Sensor fusion combines point clouds from multiple modalities to improve coverage and accuracy. The LAS and E57 formats are common interchange standards; the Open3D library and PCL (Point Cloud Library) are widely used processing toolkits.

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z