A depth camera is a sensor that captures, for each pixel, the distance from the camera to objects in the scene, producing a depth map or 3D point cloud rather than only colour intensity. Common operating principles include structured light, time-of-flight, and stereo disparity, often combined with a colour stream to yield RGB-D data. Depth cameras are foundational sensors for spatial perception, enabling reconstruction, mapping, and interaction with three-dimensional environments.

### Overview

- Adds the missing third dimension to imaging, recovering scene geometry directly.
- Realised through several competing principles, each with distinct range, accuracy, and lighting trade-offs.
- Serves as the front-end sensor for a wide range of spatial-computing perception pipelines.

### Key aspects

- Structured-light projection of known patterns to triangulate surface depth.
- Time-of-flight measurement of light round-trip time per pixel.
- Passive and active stereo recovering depth from disparity between views.
- RGB-D alignment registering colour and depth into a single coordinate frame.
- Calibration and noise handling that determine usable range and accuracy.

### Applications

- Real-time SLAM and mapping for robots and AR/VR headsets.
- 3D scene reconstruction and spatial mapping of environments.
- Gesture, body-pose, and hand tracking for natural interaction.
- Object detection, bin-picking, and manipulation in robotics.

### Provenance

