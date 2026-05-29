- ### Definition
  - An Inertial Measurement Unit (IMU) is a self-contained electronic sensor module that combines tri-axial accelerometers, gyroscopes, and optionally magnetometers to measure a body's specific force, angular rate, and orientation relative to an inertial reference frame. In spatial-computing headsets and controllers, the IMU provides low-latency, high-frequency pose estimates that are fused with visual odometry or SLAM to achieve stable, drift-corrected tracking. The same component is integral to robot proprioception, UAV stabilisation, and motion-capture systems.

- ### Semantic Classification
  - owl-class:: imu:IMU
  - owl-role:: Concept

- ### Relationships
  - enables [[Sensor Fusion]]
  - enables [[Motion Tracking]]
  - relatedTo [[SLAM]]
  - relatedTo [[Pose Estimation]]
  - partOf [[Inertial Measurement Unit]]

- ### Content
  - An IMU is the fundamental sensing element for any system that must know its own motion without relying on external references such as GPS or visual markers. The accelerometer trio measures the sum of gravitational and inertial acceleration along three orthogonal axes, while the gyroscope trio measures angular velocity. Integrating these measurements over time yields estimates of velocity, position, and orientation — a process known as dead reckoning or inertial navigation.
  - In extended-reality headsets (AR/VR/MR), the IMU runs at 1000 Hz or higher and feeds a sensor-fusion filter — commonly an extended Kalman filter or complementary filter — that blends its output with lower-frequency visual odometry data from outward-facing cameras. The fusion corrects gyroscope drift (a known limitation of MEMS gyros) and provides the photon-to-photon latency of under 20 ms required to prevent motion sickness.
  - MEMS (micro-electromechanical systems) IMUs have shrunk to millimetre scale, making them viable for wearable devices, surgical tools, and miniature drones. Standards such as IEEE 1559 address IMU performance characterisation. In robotics, the IMU feeds into SLAM pipelines alongside LiDAR or depth cameras, enabling legged robots and drones to navigate dynamically changing environments with high reliability.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z