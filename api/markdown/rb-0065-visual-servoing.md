- ### Definition
  - **Visual Servoing** is a robot control technique that closes the feedback loop using real-time camera imagery. Image-based visual servoing (IBVS) drives image-feature errors to zero directly, while position-based visual servoing (PBVS) estimates 3-D target pose from vision before computing Cartesian control signals. The Jacobian image matrix maps camera-space errors to joint velocities, enabling precise end-effector placement relative to visually perceived targets in manipulation, assembly, and tracking.

- ### Semantic Classification
  - owl-class:: robotics:rb0065visualservoing
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - uses:: rb 0068 vision system, Computer Vision, Feature Extraction
  - requires:: rb 0047 feedback control, rb 0030 jacobian matrix
  - relatedTo:: rb 0064 computed torque control, Object Detection, Pose Estimation

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z