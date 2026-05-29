- ### Definition
  A Monocular Camera is a single-lens imaging sensor that captures 2D intensity or colour frames from a single viewpoint, serving as a primary perceptual modality in robotics, autonomous vehicles, and computer vision systems. Unlike stereo or depth cameras, it lacks intrinsic depth measurement capability, requiring computational techniques such as structure-from-motion, visual odometry, or learned depth estimation to recover 3D scene geometry.

- ### Semantic Classification
  - owl-class:: robotics:MonocularCamera
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Camera]]
  - requires:: [[Camera Calibration]], [[Camera Parameters]]
  - enables:: [[Visual Odometry]], [[Object Detection]], [[Scene Understanding]]
  - uses:: [[Feature Extraction]], [[Convolutional Neural Network]]
  - contrastsWith:: [[Stereo Camera]], [[Lidar]]
  - relatedTo:: [[Depth Estimation]], [[Structure-from-Motion]], [[Simultaneous Localisation and Mapping]], [[Sensor Fusion]], [[Autonomous Vehicle]]

- ### Content
  A monocular camera is the simplest and most widely deployed imaging sensor in robotics, consisting of a single lens focusing light onto a 2D image plane populated by a CCD or CMOS photodetector array. Its fundamental limitation is the loss of depth information during the projection from 3D world coordinates to 2D image coordinates: the projection is not injective, meaning infinitely many 3D points map to the same 2D pixel. This depth ambiguity distinguishes monocular cameras from stereo cameras, structured-light sensors, and LiDAR systems that provide direct range measurements.

  Recovering depth from monocular imagery relies on geometric or learned approaches. Geometric methods exploit image sequences: visual odometry tracks distinctive feature points across consecutive frames and uses triangulation to estimate 3D positions given known camera motion. Structure-from-motion generalises this to unordered image collections, reconstructing sparse 3D point clouds and camera poses simultaneously. Simultaneous Localisation and Mapping (SLAM) extends these techniques to real-time operation, enabling a robot to build a map and localise itself concurrently using only monocular video.

  Learned depth estimation trains convolutional neural networks on paired monocular-stereo or monocular-LiDAR datasets to predict per-pixel depth maps from single frames. While these methods can produce dense depth estimates, they are sensitive to domain shift and may fail on novel scene types. Sensor fusion addresses this by combining monocular camera outputs with complementary sensors such as inertial measurement units (IMUs), LiDAR scanners, or radar, providing redundancy and improving robustness in degraded visibility conditions.

  Practical considerations include lens selection (focal length, field of view, aperture), rolling versus global shutter characteristics, and intrinsic calibration of the camera model (principal point, focal length, distortion coefficients). Accurate calibration is prerequisite for all geometric 3D reconstruction algorithms. Monocular cameras are favoured for their low cost, small form factor, and rich colour information, making them ubiquitous in autonomous vehicles, drone navigation, augmented reality, and mobile robotics platforms.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z