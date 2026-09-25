Depth Sensing is the acquisition and processing of per-pixel or per-point distance information from a sensor to surfaces in a scene, yielding depth maps, range images, or 3D point clouds. Hardware modalities include structured light projection, time-of-flight (ToF) imaging, passive and active stereo vision, LiDAR scanning, and monocular depth estimation via machine learning. Depth sensing is a foundational enabling technology for spatial computing, robotic navigation, autonomous vehicles, augmented and mixed reality occlusion, gesture recognition, and 3D scene reconstruction, providing the geometric substrate upon which higher-level understanding is built.

### Overview

- Depth sensing answers the fundamental perceptual question "how far away is each point in the scene?" — a question that colour cameras alone cannot answer without additional cues or computation.
- Distance is encoded as a scalar value per pixel or per point, forming a dense or semi-dense geometric description of the environment.
- This geometric layer is the prerequisite for virtually all spatial-computing tasks: placing virtual objects that respect occlusion in [[Augmented Reality]], building traversable maps in [[Robotics]], and enabling hands-free [[Gesture Recognition]].
- Modern depth sensors operate across a wide range of scales: millimetre-accuracy structured-light sensors for desktop scanning, centimetre-accurate ToF sensors in smartphones, and metre-accurate spinning or solid-state [[Lidar]] on autonomous vehicles.
- The field has shifted from purely hardware solutions toward hybrid approaches that combine sparse or noisy hardware depth with [[Machine Learning]] refinement, as exemplified by depth completion networks and learned stereo matching.

### Key Modalities

- **[[Structured Light]]** — projects a known infrared pattern onto the scene; deformation of the pattern encodes depth. Used in early Microsoft Kinect and Apple Face ID.
- **[[Time-of-Flight Sensor]] (ToF)** — measures the round-trip time of emitted light pulses (direct ToF) or the phase shift of a modulated signal (indirect ToF) to compute distance. Found in Apple TrueDepth, Azure Kinect, and many smartphone rear cameras.
- **[[Stereo Camera]] / Active Stereo** — passive stereo uses epipolar geometry and block matching to triangulate depth from two offset cameras. Active stereo adds a texture projector to handle low-texture surfaces.
- **[[Lidar]]** — emits laser pulses and times their return; spinning multi-beam Lidar (Velodyne), solid-state Lidar (Luminar, Innoviz), and MEMS Lidar each offer different range/resolution/cost trade-offs. Standard in autonomous vehicles.
- **[[Monocular Depth Estimation]]** — infers depth from a single RGB image using deep convolutional or transformer networks trained on paired RGB-depth data. No dedicated depth hardware required but is fundamentally scale-ambiguous without additional cues.
- **Structured Acoustic / Ultrasound** — used in short-range proximity sensing, parking sensors, and some robotics; lower resolution but cheap and robust in fog or dust.
- **[[Radar]] (4D Imaging Radar)** — emerging modality providing range plus velocity; more robust than Lidar in adverse weather.

### Key Components

- **Depth Map** — a 2D image where intensity encodes distance; the primary output format for dense sensors.
- **[[Point Cloud]]** — a set of 3D Cartesian coordinates sampled from scene surfaces; natural output of Lidar and can be derived from depth maps.
- **[[Camera Calibration]]** — intrinsic (focal length, principal point, distortion) and extrinsic (relative pose between sensors) parameters required for accurate metric depth.
- **[[Signal Processing]]** — denoising, hole-filling, temporal smoothing, and multi-path artefact removal applied to raw depth before downstream use.
- **[[Sensor Fusion]]** — combination of depth data from multiple modalities (e.g. sparse Lidar + dense RGB) to produce complete, accurate scene geometry.
- **Depth Completion** — machine-learning task of densifying sparse depth (e.g. Lidar) guided by an RGB image; a [[Machine Learning]] sub-problem bridging sensing and reconstruction.
- **Disparity Map** — intermediate representation in stereo vision; inverse-proportional to depth after calibration.

### Applications / Use Cases

- **[[Augmented Reality]] and [[Mixed Reality]]** — depth sensing enables correct occlusion (virtual objects hidden behind real objects), surface detection for anchor placement, and environment mesh generation in headsets such as HoloLens 2 and Apple Vision Pro.
- **[[Autonomous Navigation]]** — depth is the primary obstacle-detection channel in self-driving cars, drones, and indoor robots; fused with [[SLAM]] for simultaneous mapping and localisation.
- **[[Robotics]]** — bin-picking, grasping, and manipulation tasks rely on accurate depth to determine object pose and safe approach trajectories; [[Object Detection]] in 3D is powered by point-cloud processing.
- **[[Gesture Recognition]] and Body Tracking** — skeletal tracking (Microsoft Azure Kinect, Orbbec) and hand-gesture interfaces use depth to separate limbs from background and estimate joint angles without occlusion ambiguity.
- **[[3D Reconstruction]]** — dense or semi-dense depth frames fused into volumetric representations (TSDF, [[Neural Radiance Field]]) for cultural heritage digitisation, reverse engineering, and virtual production.
- **Face Authentication** — structured-light and ToF depth maps provide liveness detection and spoof-resistant face unlock (Apple Face ID, Samsung Iris).
- **Industrial Inspection** — defect detection on manufactured surfaces using high-accuracy structured-light or laser-line scanners.
- **Medical Imaging Guidance** — depth cameras guide surgical robots, monitor patient positioning, and support wound measurement.
- **Smart Home / Occupancy Sensing** — low-resolution ToF sensors detect room occupancy for HVAC and lighting control without cameras capturing identifiable images.
- **Agriculture** — airborne Lidar and drone-mounted depth sensors map crop canopy height, terrain, and irrigation channels.

### Standards & Context

- **ROS (Robot Operating System)** — the `sensor_msgs/PointCloud2` and `sensor_msgs/Image` (depth encoding) message types define the de-facto interchange format for depth data in robotics.
- **OpenNI / OpenNI2** — open API standardising access to depth sensors across vendors; historically important for Kinect-era development.
- **ISO/IEC 23090 (MPEG Immersive Video)** — includes point-cloud compression (V-PCC, G-PCC) relevant to transmitting depth-derived geometry for volumetric video.
- **SPAD / dToF standards** — emerging IEEE and IEC working groups standardising direct time-of-flight sensor characterisation and safety (eye safety: IEC 60825-1 for laser products).
- **KITTI, NYU Depth V2, ScanNet** — canonical research benchmarks providing paired RGB-depth ground truth; de-facto standard for evaluating depth-sensing algorithms in [[Computer Vision]] research.
- **Apple ARKit / Google ARCore** — platform SDKs that abstract depth sensor access and provide unified depth APIs on mobile; increasingly expose LiDAR depth on supported devices.
- **MIPI D-PHY / C-PHY** — hardware interface standards used by depth camera modules in embedded and mobile systems.
- Regulatory context: laser-based sensors must comply with IEC 60825-1 eye safety classes; ToF infrared illuminators in consumer devices are typically Class 1 (safe under normal use).

### Technical Challenges

- **Multi-path interference** — in ToF sensors, indirect reflections cause erroneous depth readings near corners and shiny surfaces.
- **Low-texture failure** — passive stereo matching fails on uniform or repetitive surfaces without active illumination.
- **Range-resolution trade-off** — Lidar angular resolution and point density decrease with range; ToF accuracy degrades at long range due to signal-to-noise limits.
- **Outdoor performance** — structured light and ToF sensors are swamped by sunlight's ambient infrared; solid-state Lidar and passive stereo are preferred outdoors.
- **Real-time compute** — dense stereo matching and point-cloud registration are compute-intensive; purpose-built FPGAs, DSPs, and GPU pipelines are required for latency-sensitive applications.
- **Privacy** — even low-resolution depth maps can reveal occupant behaviour and body shape, prompting regulatory attention as depth cameras proliferate in smart spaces.

### Provenance

