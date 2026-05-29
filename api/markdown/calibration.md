- ### Definition
  - Calibration in robotics and sensing is the systematic process of determining, verifying, and correcting the quantitative relationship between a sensor's or actuator's raw output and the physical quantity it represents, encompassing intrinsic parameters (gain, offset, nonlinearity), extrinsic parameters (pose relative to a reference frame), and inter-sensor spatial relationships. Calibration is prerequisite for metrically accurate perception, closed-loop control, and multi-modal Sensor Fusion in robotic systems. It applies to diverse transducers including cameras, Lidar scanners, IMUs, force-torque sensors, joint encoders, and end-effector tools.

- ### Semantic Classification
  - owl-class:: calibration:Calibration
  - owl-role:: Concept

- ### Relationships
  - enables [[Sensor Fusion]]
  - enables [[Camera Calibration]]
  - requires [[Robot Sensor]]
  - requires [[IMU]]
  - supports [[SLAM]]
  - supports [[Robot Control]]

- ### Content
  - Calibration in robotics spans multiple abstraction levels. At the sensor level, Camera Calibration establishes intrinsic optical parameters and lens distortion models; IMU calibration characterises accelerometer and gyroscope biases, scale factors, and axis misalignments using multi-position static tests or dynamic excitation sequences; Lidar calibration determines point-cloud coordinate offsets and intensity response curves. At the system level, extrinsic calibration establishes the rigid-body transformation between sensor frames — e.g., the rotation and translation between a Lidar and a camera — enabling consistent multi-modal perception representations.
  - For robotic manipulators, kinematic calibration corrects the nominal Denavit-Hartenberg parameters in a robot's URDF model by measuring end-effector poses at multiple joint configurations with an external metrology system (laser tracker, photogrammetric targets). Actuator-level calibration maps encoder counts to joint angles and compensates for joint compliance or backlash. These corrections feed directly into forward and inverse kinematics computations, improving absolute positioning accuracy essential for assembly and surgery applications.
  - Temporal calibration — synchronising sensor timestamps across devices with different hardware clocks — is equally critical for Sensor Fusion. IMU-camera temporal calibration methods such as Kalibr use continuous-time trajectory optimisation to estimate the time offset between sensor streams. In autonomous vehicles, Lidar-camera-IMU calibration pipelines must be completed before deployment and validated against known targets. Online calibration methods leverage SLAM-like optimisation to maintain calibration accuracy throughout operation, adapting to slow drift caused by thermal effects or mechanical vibration.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z