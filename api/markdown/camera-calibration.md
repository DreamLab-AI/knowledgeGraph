- ### Definition
  - Camera calibration is the process of determining a camera's **intrinsic parameters** (focal length, principal point, pixel skew, and lens distortion coefficients) and, when multiple sensors cooperate, **extrinsic parameters** (rigid-body rotation and translation between coordinate frames). It is a foundational step in all systems that reason metrically about 3D scenes from 2D imagery, bridging [[Computer Vision]] with practical applications in [[Augmented Reality]], [[3D Reconstruction]], [[Stereo Vision]], [[SLAM]], and [[Autonomous Vehicles]]. Without calibration, pixel measurements cannot be reliably converted to angular or metric quantities, and multi-sensor [[Sensor Fusion]] remains geometrically inconsistent.

- ### Overview
  - Camera calibration underpins every quantitative use of images. A camera maps 3D world points to 2D image pixels via a chain of linear and non-linear transformations: projection through a pinhole model followed by non-linear lens distortion. Calibration recovers the parameters of this mapping so that downstream algorithms can work in metrically correct coordinates.
  - The problem is mature: foundational methods by Tsai (1987) and Zhang (2000) remain dominant, and the technique is standardised in widely used toolkits such as [[OpenCV]] and MATLAB's Computer Vision Toolbox. Despite this maturity, calibration remains an active research area because modern deployments involve novel sensor modalities (fisheye, event cameras, rolling shutters), dynamic environments where parameters drift, and high-throughput production lines demanding automated calibration.
  - Calibration is distinct from [[Radiometric Calibration]], which corrects for vignetting, noise, and colour response rather than geometric distortion.

- ### Key Components

  - #### Intrinsic Parameters
    - **Focal length** (f_x, f_y): effective focal length in horizontal and vertical pixel units. Non-equal values arise from non-square pixels.
    - **Principal point** (c_x, c_y): image coordinates of the optical axis intersection; ideally at the image centre but often offset.
    - **Skew coefficient** (γ): models non-orthogonality of image axes; negligible in modern sensors.
    - **Distortion coefficients**: radial (k_1, k_2, k_3 …) capturing barrel/pincushion distortion, and tangential (p_1, p_2) capturing decentring. Fisheye lenses require extended models (Scaramuzza or Kannala-Brandt).

  - #### Extrinsic Parameters
    - **Rotation matrix** R (3×3, SO(3)) and **translation vector** t (3×1) placing the camera relative to a world reference or a second sensor.
    - For stereo rigs: the relative pose between left and right cameras is the extrinsic calibration; it enables [[Stereo Vision]] rectification and disparity-to-depth conversion.
    - For heterogeneous rigs (camera + [[LiDAR-Camera Fusion]]): extrinsic calibration aligns the point cloud to the image frame, critical in [[Autonomous Vehicles]] perception stacks.

  - #### Camera Model
    - The standard **pinhole model** relates world point X to image point x via x = K[R|t]X (homogeneous coordinates), where K is the 3×3 intrinsic matrix.
    - Distortion is applied after projection: radial distortion is a polynomial of the radial distance; tangential distortion follows the Brown-Conrady model.
    - Extended models include the **unified omnidirectional model** (Scaramuzza) for fisheye lenses and the **double-sphere model** for ultra-wide optics.

  - #### Calibration Targets
    - **Chessboard / checkerboard**: corners detected via [[Corner Detection]] (Harris, Shi-Tomasi); high-accuracy, easily fabricated.
    - **ChArUco board**: combines chessboard accuracy with ArUco marker IDs for robust partial occlusion handling; standard in [[OpenCV]].
    - **Circular grid**: dot centres estimated to sub-pixel accuracy; used in high-precision metrology.
    - **3D targets**: calibration objects with known 3D geometry, used when a planar target is inconvenient.
    - **Targetless calibration**: exploits environmental structure (edges, planes) or mutual information between sensors.

  - #### Optimisation
    - The calibration problem is solved by minimising **reprojection error**: the sum of squared distances between observed feature positions and their re-projected counterparts using the estimated parameters.
    - [[Non-Linear Least Squares]] solvers (typically Levenberg-Marquardt) are used because the objective is non-linear in the distortion coefficients.
    - [[Homography]] decomposition provides an analytical initialisation for the Zhang method, avoiding poor local minima.

- ### Mechanisms and Methods

  - #### Zhang's Method (Dominant Practical Approach)
    - Capture ≥3 images of a planar chessboard at different orientations.
    - Detect corners to sub-pixel accuracy via [[Feature Detection]] and [[Corner Detection]].
    - Compute a [[Homography]] between the calibration plane and each image.
    - Solve for the intrinsic matrix K analytically from the homographies (closed-form using constraints on the image of the absolute conic).
    - Refine all parameters jointly via Levenberg-Marquardt minimisation of reprojection error.
    - Standardised in [[OpenCV]] (`cv::calibrateCamera`) and MATLAB.

  - #### Stereo Calibration
    - Jointly calibrates two cameras viewing the same scene simultaneously.
    - Estimates individual intrinsics plus the relative pose (R, t) between cameras.
    - Enables **stereo rectification** (Bouguet's algorithm), aligning epipolar lines to image rows for efficient disparity search.
    - Output feeds [[Stereo Vision]] depth pipelines and [[Epipolar Geometry]] computations.

  - #### Self-Calibration (Online / Continuous)
    - Infers camera parameters from scene structure and ego-motion without dedicated targets.
    - Approaches include Kruppa's equations, factorisation methods, and integration into [[SLAM]] back-ends.
    - [[Structure from Motion]] systems (e.g., COLMAP) often self-calibrate while reconstructing scenes.
    - Enables [[Visual Odometry]] systems to detect and adapt to parameter drift in deployment.

  - #### Temporal Recalibration
    - Mechanical shock, thermal expansion, and vibration degrade calibration accuracy over time.
    - Production systems in robotics and [[Autonomous Vehicles]] implement periodic recalibration schedules.
    - Online methods maintain a running estimate of calibration quality and trigger recalibration when reprojection error exceeds a threshold.

- ### Applications and Use Cases

  - #### Augmented Reality and Mixed Reality
    - [[Augmented Reality]] requires sub-pixel registration of virtual overlays onto live video.
    - Accurate intrinsics correct lens distortion before pose tracking; inaccurate calibration causes overlay drift.
    - Head-mounted displays require per-eye calibration plus inter-eye extrinsic calibration.

  - #### 3D Reconstruction and Photogrammetry
    - [[3D Reconstruction]] (multi-view stereo, NeRF, 3D Gaussian Splatting) depends on known camera intrinsics and poses.
    - [[Photogrammetry]] workflows for surveying and cultural heritage digitisation require calibrated cameras to produce metric outputs (GSD, absolute accuracy).
    - [[Structure from Motion]] pipelines self-calibrate but benefit from constrained initialisation.

  - #### Robotics and Visual Servoing
    - [[Robotics Perception]] requires calibrated cameras for grasp planning, obstacle avoidance, and manipulation.
    - Eye-in-hand and eye-to-hand calibration relates the camera frame to the robot's kinematic chain.
    - [[SLAM]] systems use calibrated cameras to build consistent maps and estimate robot pose.

  - #### Autonomous Vehicles
    - [[Autonomous Vehicles]] perception stacks require multi-sensor calibration: camera-to-camera (surround view), camera-to-LiDAR ([[LiDAR-Camera Fusion]]), and camera-to-IMU.
    - Temporal recalibration is safety-critical; production vehicles include automated calibration triggers.
    - [[Depth Estimation]] networks are often trained and deployed with calibration baked into coordinate normalisation.

  - #### Medical Imaging and Endoscopy
    - Surgical robots and endoscopes require precise calibration for metric tissue measurement.
    - Fisheye models are used for wide-angle endoscopic lenses.

  - #### Industrial Inspection and Metrology
    - Machine-vision inspection systems rely on calibrated cameras for sub-millimetre dimensional measurements.
    - Coordinate measuring machines integrate calibrated cameras for non-contact measurement.

- ### Relationships
  - enables:: [[3D Reconstruction]]
  - enables:: [[Depth Estimation]]
  - enables:: [[Pose Estimation]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Photogrammetry]]
  - enables:: [[Visual Odometry]]
  - requires:: [[Camera]]
  - requires:: [[Image Processing]]
  - requires:: [[Optimisation]]
  - uses:: [[Homography]]
  - uses:: [[Non-Linear Least Squares]]
  - uses:: [[Chessboard Pattern]]
  - dependsOn:: [[Feature Detection]]
  - dependsOn:: [[Corner Detection]]
  - supports:: [[SLAM]]
  - supports:: [[Sensor Fusion]]
  - supports:: [[Stereo Vision]]
  - supports:: [[Structure from Motion]]
  - contrastsWith:: [[Self-Calibration]]
  - contrastsWith:: [[Radiometric Calibration]]
  - bridges-to:: [[Robotics Perception]]
  - bridges-to:: [[Autonomous Vehicles]]
  - bridges-to:: [[LiDAR-Camera Fusion]]
  - relatedTo:: [[Projective Geometry]]
  - relatedTo:: [[Epipolar Geometry]]
  - relatedTo:: [[OpenCV]]

- ### Standards and Context
  - **OpenCV** (`cv::calibrateCamera`, `cv::stereoCalibrate`, `cv::fisheye::calibrate`): the de facto open-source reference implementation; implements Zhang's method, stereo calibration, and fisheye models.
  - **MATLAB Computer Vision Toolbox**: widely used in research and industrial settings; provides Camera Calibrator and Stereo Camera Calibrator apps.
  - **ISO 17123**: optical instruments standard series covering measurement uncertainty applicable to photogrammetric camera calibration.
  - **Caltech Camera Calibration Toolbox** (Bouguet): pioneering MATLAB toolbox that standardised Zhang's method for the research community.
  - **COLMAP**: open-source [[Structure from Motion]] and multi-view stereo pipeline integrating self-calibration with reconstruction.
  - **ROS (Robot Operating System)**: `camera_calibration` package standardises calibration workflows for robotic vision pipelines, feeding calibrated parameters into [[SLAM]] and [[Sensor Fusion]] nodes.
  - Calibration data is typically serialised as a `CameraInfo` message (ROS) or as a YAML/JSON parameter file consumed by downstream vision components.
  - Reproducible calibration targets follow the OpenCV ChArUco board specification, enabling inter-operability across toolkits.

- ### Provenance
  - sources:: OpenCV documentation; Zhang (2000) "A Flexible New Technique for Camera Calibration", IEEE TPAMI; Bouguet Calibration Toolbox; Scaramuzza fisheye model; ROS camera_calibration package
  - updated:: 2026-06-13