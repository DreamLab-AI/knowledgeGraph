- ### Definition
  - The process of constructing and continuously updating three-dimensional representations of physical environments using sensor data—including depth cameras, LiDAR, and IMU—enabling AR/VR systems to understand surroundings for occlusion, collision, content placement, and navigation. Core algorithms include SLAM variants that fuse visual features with inertial measurements to produce dense mesh or voxel representations in real time.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialMapping
  - owl-role:: Concept

- ### Relationships
  - uses [[SLAM]]
  - uses [[Lidar]]
  - uses [[Computer Vision System]]
  - enables [[Augmented Reality]]
  - enables [[Spatial Anchor]]
  - relatedTo [[AR Technology]]

- ### Content
  # SpatialMapping
  Spatial Mapping generates and maintains three-dimensional representations of physical environments through sensor fusion, enabling AR/VR systems to understand surroundings for occlusion, collision, placement, and navigation. Technologies include SLAM (Simultaneous Localization and Mapping) algorithms like ORB-SLAM and LSD-SLAM combining visual features and IMU data, depth sensor fusion merging multiple depth cameras or LiDAR for complete coverage, photogrammetry reconstructing geometry from multiple photographs, and neural reconstruction employing machine learning for surface completion and detail enhancement. Generated representations include dense voxel grids storing occupancy at fine resolution, sparse feature maps extracting salient landmarks for tracking, surface meshes providing lightweight geometry for physics and rendering, and semantic maps labeling surfaces by type (floor, wall, furniture) enabling context-aware placement. Real-time systems balance map quality against computational budget and memory consumption, employing progressive refinement updating maps incrementally, confidence weighting down weighting uncertain measurements, loop closure detection correcting accumulated drift, and map persistence saving spatial data across sessions. Applications enable AR content occlusion behind physical objects, virtual object physics colliding with real furniture, intelligent content placement respecting horizontal and vertical surfaces, navigation providing pathfinding around obstacles, and environmental understanding detecting room layout and boundaries.
  - https://docs.microsoft.com/en-us/windows/mixed-reality/design/spatial-mapping - HoloLens spatial mapping
  - https://developer.apple.com/documentation/arkit/arworldmap - ARKit world mapping
  - https://github.com/raulmur/ORB_SLAM2 - ORB-SLAM2 visual SLAM
  - https://github.com/googlecartographer/cartographer - Google Cartographer SLAM

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z