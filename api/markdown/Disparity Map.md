A disparity map is an image in which each pixel encodes the horizontal displacement of corresponding points between the two views of a stereo pair. Because disparity is inversely proportional to scene depth, the map converts directly to a depth map given the camera baseline and focal length. It is the core intermediate product of passive stereo vision, computed by rectifying the images and searching for correspondences along epipolar lines.

### Overview

- A disparity map is an image in which each pixel value encodes the horizontal displacement of corresponding points between the two views of a stereo pair.
- Disparity is inversely proportional to depth, so the map can be converted to a depth map given the camera baseline and focal length.
- It is the core intermediate product of passive stereo depth sensing.

### Mechanisms

- Rectification of stereo images using calibration parameters.
- Correspondence search constrained to epipolar lines.
- Cost aggregation and disparity optimisation, e.g. semi-global matching.
- Conversion of disparity to metric depth via triangulation.

### Applications

- Depth perception for autonomous navigation and obstacle avoidance.
- Three-dimensional reconstruction and [[Point Cloud]] generation.
- Scene understanding for [[Visual Perception]] pipelines.

### Provenance

