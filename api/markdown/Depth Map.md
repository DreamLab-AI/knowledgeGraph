A depth map is a per-pixel image in which each value encodes the distance from the camera to the corresponding point in the scene rather than its colour. It provides the 2.5D geometric structure needed to reconstruct surfaces, segment foreground from background and place virtual content in spatial computing. Depth maps are produced by stereo matching, structured light, time-of-flight sensing or learned monocular estimation.

### Overview

- Each pixel stores distance, giving a viewpoint-dependent 2.5D representation of geometry.
- Back-projecting a depth map through camera intrinsics yields a 3D point cloud.
- Sources include passive stereo, active structured light, time-of-flight and learned monocular depth.

### Key aspects

- Camera intrinsics and disparity-to-depth conversion.
- Occlusion, missing data and depth discontinuities at edges.
- Sensor noise and confidence maps accompanying depth.
- Fusion of multiple depth frames into consistent geometry.

### Applications

- AR occlusion and scene reconstruction.
- Robotic perception and obstacle avoidance.
- Volumetric capture and 3D scanning.

### Provenance

