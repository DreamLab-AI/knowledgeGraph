- ### Definition
  - A Coordinate System is a mathematical framework that assigns unique numerical tuples to every point in a space, enabling the precise specification of position, orientation, and scale. In spatial computing and extended reality, coordinate systems define local object frames, world frames, and camera frames that must be carefully transformed and composed to align virtual content with the physical environment.

- ### Semantic Classification
  - owl-class:: spatial-computing:CoordinateSystem
  - owl-role:: concept

- ### Relationships
  - requires [[Spatial Mapping]]
  - enables [[Pose Estimation]]
  - enables [[SLAM]]
  - enables [[Spatial Anchor]]
  - relatedTo [[Computer Vision]]
  - relatedTo [[Scene Graph]]

- ### Content

  ## Overview

  A Coordinate System provides the mathematical scaffolding that makes spatial computing possible. XR runtimes maintain multiple coordinate frames simultaneously: a world coordinate frame anchored to the physical environment, a head/camera frame tracking the viewer's pose, hand or controller frames, and local object frames for placed content. Transformations between frames are represented as rigid-body transforms (rotation plus translation), typically stored as 4x4 homogeneous matrices or dual quaternions for efficient composition. Standards such as OpenXR define a right-handed coordinate convention with Y-up for the runtime-facing API, while game engines may internally use different conventions, requiring careful conversion. SLAM systems continuously refine the world frame by loop-closing against previously mapped landmarks. Spatial anchors persist specific world-frame positions across sessions, enabling shared AR experiences where multiple users see the same virtual content in the same real-world location.

  #### Related Concepts
  - [[Spatial Mapping]]
  - [[Pose Estimation]]
  - [[SLAM]]
  - [[Spatial Anchor]]
  - [[Computer Vision]]
  - [[Scene Graph]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z