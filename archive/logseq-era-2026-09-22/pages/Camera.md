public:: true

# Camera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ceb738ffeeece81e0ce5c220bee1f99b0f1623cb0cc209ec624ef13e6a390f0b",
  "@type": "Page",
  "vc:slug": "camera",
  "title": "Camera",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "CameraCalibration"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "ComputerVisionDomain"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-standards",
      "vc:label": "Computer Vision Standards"
    },
    {
      "@id": "urn:visionflow:linked:ieee",
      "vc:label": "IEEE"
    },
    {
      "@id": "urn:visionflow:linked:image-sensor",
      "vc:label": "ImageSensor"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec",
      "vc:label": "ISO/IEC"
    },
    {
      "@id": "urn:visionflow:linked:lens",
      "vc:label": "Lens"
    },
    {
      "@id": "urn:visionflow:linked:processing-unit",
      "vc:label": "ProcessingUnit"
    },
    {
      "@id": "urn:visionflow:linked:robotics-research",
      "vc:label": "Robotics Research"
    },
    {
      "@id": "urn:visionflow:linked:visual-perception",
      "vc:label": "VisualPerception"
    },
    {
      "@id": "urn:visionflow:linked:visual-servoing",
      "vc:label": "VisualServoing"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-reconstruction",
      "vc:label": "3D Reconstruction"
    },
    {
      "@id": "urn:visionflow:owl:class:object-detection",
      "vc:label": "ObjectDetection"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-segmentation",
      "vc:label": "SemanticSegmentation"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor",
      "vc:label": "Sensor"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0076"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Camera"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:camera",
  "@type": "Class",
  "label": "Camera",
  "definition": "An imaging sensor device that captures visual information in robotics and spatial-computing systems, enabling computer vision applications including object detection, SLAM, 3D reconstruction, visual servoing, and semantic scene understanding through various modalities (RGB, depth, thermal, event-based) and sensor technologies (CCD, CMOS, ToF, structured light).",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:sensor",
    "label": "Sensor"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:image-sensor",
        "label": "Image Sensor"
      },
      {
        "@id": "urn:ngm:class:lens",
        "label": "Lens"
      },
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:optical-systems",
        "label": "Optical Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:visual-servoing",
        "label": "VisualServoing"
      },
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:semantic-segmentation",
        "label": "Semantic Segmentation"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:visual-odometry",
        "label": "Visual Odometry"
      },
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:visual-perception",
        "label": "Visual Perception"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:iso-iec",
        "label": "ISO/IEC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:radar",
        "label": "Radar"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure-from-Motion"
      },
      {
        "@id": "urn:ngm:class:neural-radiance-field",
        "label": "Neural Radiance Field"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:imaging-sensor",
      "label": "Imaging Sensor"
    },
    {
      "@id": "urn:ngm:class:vision-sensor",
      "label": "Vision Sensor"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:camera:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ceb738ffeeece81e0ce5c220bee1f99b0f1623cb0cc209ec624ef13e6a390f0b"
  },
  "vc:resolutions": [
    {
      "raw": "[[CameraCalibration]]",
      "resolved": "urn:visionflow:linked:camera-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[ComputerVisionDomain]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision Standards]]",
      "resolved": "urn:visionflow:linked:computer-vision-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE]]",
      "resolved": "urn:visionflow:linked:ieee",
      "kind": "StubLink"
    },
    {
      "raw": "[[ImageSensor]]",
      "resolved": "urn:visionflow:linked:image-sensor",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC]]",
      "resolved": "urn:visionflow:linked:iso-iec",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lens]]",
      "resolved": "urn:visionflow:linked:lens",
      "kind": "StubLink"
    },
    {
      "raw": "[[ProcessingUnit]]",
      "resolved": "urn:visionflow:linked:processing-unit",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Research]]",
      "resolved": "urn:visionflow:linked:robotics-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[VisualPerception]]",
      "resolved": "urn:visionflow:linked:visual-perception",
      "kind": "StubLink"
    },
    {
      "raw": "[[VisualServoing]]",
      "resolved": "urn:visionflow:linked:visual-servoing",
      "kind": "StubLink"
    },
    {
      "raw": "[[3DReconstruction]]",
      "resolved": "urn:visionflow:owl:class:3-d-reconstruction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ObjectDetection]]",
      "resolved": "urn:visionflow:owl:class:object-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SemanticSegmentation]]",
      "resolved": "urn:visionflow:owl:class:semantic-segmentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor]]",
      "resolved": "urn:visionflow:owl:class:sensor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An imaging sensor device that captures visual information in robotics systems, enabling computer vision applications including object detection, SLAM, 3D reconstruction, visual servoing, and semantic scene understanding through various modalities (RGB, depth, thermal, event-based) and technologies (CCD, CMOS, ToF, structured light).
- ### Semantic Classification
  - owl-class:: robotics:Camera
  - owl-role:: SensorDevice
  - belongs-to-domain:: [[RoboticsDomain]], [[ComputerVisionDomain]]
- ### Relationships
  - is-subclass-of:: [[Sensor]], [[VisualPerception]]
  - has-part:: [[ImageSensor]], [[Lens]], [[ProcessingUnit]], [[CameraCalibration]]
  - enables:: [[ObjectDetection]], [[SLAM]], [[3DReconstruction]], [[VisualServoing]], [[SemanticSegmentation]]
- ### Content
  - Cameras are fundamental sensors in modern robotics, providing visual perception capabilities that enable autonomous navigation, object manipulation, human-robot interaction, and environmental understanding. In 2026, robotic vision systems have evolved from simple monocular RGB cameras to sophisticated multi-modal sensor suites combining RGB, depth, thermal, and event-based imaging with real-time AI-powered processing.
  - ### Camera Types in Robotics
	  #### RGB Cameras (Monocular and Stereo)
	  - **Monocular RGB**: Single lens capturing colour images (red, green, blue channels)
	    - Resolution: VGA (640×480) to 4K (3840×2160) and beyond
	    - Frame rates: 30fps standard, up to 120fps for high-speed applications
	    - Applications: Object recognition, visual tracking, colour-based segmentation
	    - Examples: FLIR Blackfly S (USB3, GigE), Basler ace (compact industrial cameras)
	  - **Stereo RGB**: Two synchronized cameras mimicking human binocular vision
	    - Baseline: 10-120mm for desktop robots, up to 300mm for autonomous vehicles
	    - Depth range: 0.3m to 10m+ depending on baseline and resolution
	    - Applications: 3D reconstruction, obstacle detection, depth estimation
	    - Examples: ZED 2i (Stereolabs), RealSense D455 (Intel), OAK-D (Luxonis)
	  #### Depth Cameras
	  - **Time-of-Flight (ToF)**: Measures light travel time to calculate depth
	    - Range: 0.1m to 8m typical
	    - Frame rate: 30-60fps
	    - Accuracy: ±1-3cm
	    - Applications: Indoor navigation, gesture recognition, 3D scanning
	    - Examples: Azure Kinect DK (Microsoft), pmd flexx2 (pmdtechnologies)
	  - **Structured Light**: Projects infrared pattern and analyzes distortion
	    - Range: 0.4m to 4m optimal
	    - Resolution: VGA to 1080p depth maps
	    - Accuracy: Sub-millimeter at close range
	    - Applications: Bin picking, quality inspection, precise manipulation
	    - Examples: RealSense D415/D435 (Intel), Orbbec Astra Pro
	  - **Stereo Depth**: Passive stereo matching from dual RGB cameras
	    - Advantages: Works outdoors (no active illumination needed)
	    - Challenges: Computationally intensive, struggles with textureless surfaces
	    - Applications: Autonomous vehicles, outdoor robots
	  #### Thermal/Infrared Cameras
	  - Detect infrared radiation (heat signatures)
	  - Resolution: 80×60 (low-cost) to 640×512 (industrial)
	  - Temperature range: -20°C to 1500°C+
	  - Applications: Night vision, human detection, equipment monitoring
	  - Examples: FLIR Lepton (micro thermal), Seek Thermal CompactPRO
	  #### Event Cameras (DVS - Dynamic Vision Sensors)
	  - Asynchronous pixel-level change detection (no frame-based capture)
	  - Temporal resolution: Microsecond precision (1MHz equivalent)
	  - Dynamic range: 140dB (vs 60dB for standard cameras)
	  - Power: Ultra-low (milliwatts)
	  - Applications: High-speed robotics, drone racing, neuromorphic computing
	  - Examples: DVS128 (iniVation), DAVIS346 (combined DVS+RGB), Prophesee EVK4
	  #### 360-Degree/Panoramic Cameras
	  - Full spherical field of view
	  - Multiple lenses with image stitching
	  - Applications: Surveillance robots, telepresence, VR capture
	  - Examples: Ricoh Theta Z1, Insta360 Pro 2
  - ### Computer Vision Applications
	  #### Object Detection and Recognition
	  - YOLO (You Only Look Once), Faster R-CNN, EfficientDet architectures
	  - Real-time detection at 30-60fps on edge devices (NVIDIA Jetson, Google Coral)
	  - Applications: Warehouse automation, agriculture (crop/weed detection), retail
	  #### SLAM (Simultaneous Localization and Mapping)
	  - Visual SLAM: ORB-SLAM3, VINS-Mono, OpenVSLAM
	  - Visual-Inertial SLAM: Combines camera with IMU (Inertial Measurement Unit)
	  - LiDAR-Camera fusion: Combines 3D laser scanning with visual features
	  - Applications: Autonomous navigation, AR/VR, drone mapping
	  #### 3D Reconstruction
	  - Structure from Motion (SfM): Multi-view geometry from image sequences
	  - Photogrammetry: High-precision 3D models from photographs
	  - Neural Radiance Fields (NeRF): AI-based 3D scene representation (2025 breakthrough)
	  - Applications: Digital twins, inspection, cultural heritage preservation
	  #### Visual Servoing
	  - Position-based: 3D object pose estimation
	  - Image-based: Direct control from image features
	  - Hybrid: Combination of both approaches
	  - Applications: Robotic assembly, bin picking, surgical robotics
	  #### Semantic Segmentation
	  - Pixel-level classification (DeepLab, Mask R-CNN, SegFormer)
	  - Applications: Autonomous driving (road/sidewalk/vehicle segmentation), scene understanding
  - ### Technical Specifications
	  #### Resolution Standards
	  - VGA: 640×480 (legacy, low-cost applications)
	  - HD (720p): 1280×720
	  - Full HD (1080p): 1920×1080 (most common in 2026)
	  - 4K (2160p): 3840×2160 (high-end inspection, cinematography)
	  - 8K: 7680×4320 (emerging in specialized applications)
	  #### Frame Rates
	  - 30fps: Standard for most robotic applications
	  - 60fps: Smooth motion tracking, improved temporal resolution
	  - 120-240fps: High-speed robotics, sports analysis
	  - 1000fps+: Ultra-high-speed cameras for impact testing, ballistics
	  #### Sensor Technologies
	  - **CCD (Charge-Coupled Device)**:
	    - Higher image quality, better low-light performance
	    - Higher power consumption
	    - Applications: Scientific imaging, astronomy
	  - **CMOS (Complementary Metal-Oxide-Semiconductor)**:
	    - Lower power, faster readout, lower cost
	    - Integrated processing (image signal processor on-chip)
	    - Dominant in modern robotics (95%+ market share)
	  #### Camera Calibration
	  - **Intrinsic parameters**: Focal length, principal point, lens distortion
	  - **Extrinsic parameters**: Camera position and orientation in world coordinates
	  - Methods: Zhang's calibration, checkerboard patterns, automatic calibration
	  - Tools: OpenCV calibration module, MATLAB Camera Calibrator, Kalibr (ROS)
	  #### Lens Types and Field of View
	  - Narrow FOV (< 50°): Telephoto, long-distance surveillance
	  - Normal FOV (50-70°): Human-like perspective, general robotics
	  - Wide FOV (> 90°): Autonomous vehicles, monitoring
	  - Fisheye (180°+): Surveillance, drone navigation
  #### Current Landscape
  #### Industry Adoption
	  - **Manufacturing**: Universal Robots (UR+ Vision), ABB Smart Sensors, FANUC iRVision
	  - **Logistics**: Amazon Robotics (Kiva vision systems), Locus Robotics (warehouse navigation)
	  - **Autonomous Vehicles**: Tesla (8-camera vision-only FSD), Waymo (camera-LiDAR fusion)
	  - **Agriculture**: Blue River Technology (See & Spray), Soft Robotics (food handling vision)
	  - **Healthcare**: Intuitive Surgical (da Vinci Xi stereo endoscopes), CMR Surgical (Versius 3D vision)
	  #### Technical Capabilities 2026
	  - **Edge AI processing**: 10-50 TOPS (Tera Operations Per Second) on compact modules
	    - NVIDIA Jetson Orin Nano: 40 TOPS, 5-15W
	    - Google Coral TPU: 4 TOPS, 2W
	    - Intel Movidius Myriad X: 4 TOPS
	  - **Real-time depth processing**: 90fps depth maps at 720p
	  - **AI-enhanced ISP**: On-sensor neural processing for HDR, noise reduction
	  - **Neuromorphic vision**: Event cameras achieving <1ms latency
	  #### Standards and Frameworks
	  - **Camera interfaces**: USB3 Vision, GigE Vision, CoaXPress, MIPI CSI-2
	  - **ROS packages**: `image_pipeline`, `vision_opencv`, `depth_image_proc`
	  - **Deep learning frameworks**: PyTorch, TensorFlow, ONNX Runtime
	  - **Calibration standards**: IEEE 1857.10 (camera calibration), ISO 12233 (resolution)
  #### Academic Context
  Robotic vision is grounded in decades of computer vision research, from early edge detection algorithms (Canny, Sobel) in the 1980s to modern deep learning approaches. Key theoretical foundations include:
	  - **Epipolar geometry**: Fundamental matrix and essential matrix relating stereo image pairs (Hartley & Zisserman, *Multiple View Geometry*, 2003)
	  - **Structure from Motion**: Tomasi-Kanade factorization, bundle adjustment (Triggs et al., 2000)
	  - **SLAM theory**: Probabilistic robotics framework, Extended Kalman Filter (EKF-SLAM), graph-based SLAM (Thrun, Burgard, & Fox, 2005)
	  - **Deep learning for vision**: Convolutional Neural Networks (CNNs), ResNet, Vision Transformers (ViT)
	  Contemporary research (2024-2026) focuses on:
	  - Embodied AI: Cameras as primary sensor for foundation models (RT-2, PaLM-E)
	  - Event-based vision: Neuromorphic cameras for ultra-low-latency perception
	  - Multi-modal fusion: RGB-D-Thermal-Event camera arrays
	  - Self-supervised learning: Reducing annotation requirements for visual tasks
  #### UK Context
  #### North England Innovation Hubs
	  **Manchester**
	  - University of Manchester Robotics Centre: Multi-sensor fusion research (RGB-D-Thermal)
	  - Manufacturer: Tharsus Group (robotics vision systems for logistics)
	  **Leeds**
	  - University of Leeds Institute of Robotics, Autonomous Systems and Sensing (IRASS)
	  - Research focus: Agricultural robotics with hyperspectral imaging
	  **Sheffield**
	  - Sheffield Robotics: UK's largest robotics research group
	  - Autonomous Systems Laboratory: Visual SLAM for underground mining robots
	  - AMRC (Advanced Manufacturing Research Centre): Robotic inspection vision systems
	  **Newcastle**
	  - Newcastle University Robotics Lab: Assistive robotics with face recognition cameras
	  - Ocado Technology: Warehouse automation with vision-guided picking
	  #### UK Commercial Sector
	  - **Oxbotica** (Oxford): Vision-based autonomous vehicle software
	  - **Wayve** (London): End-to-end learning for self-driving (camera-only approach)
	  - **CMR Surgical** (Cambridge): Versius surgical robot with 3D stereo vision
	  - **RUIS** (Edinburgh): Inspection robots with thermal-RGB fusion
	  #### Regional Case Studies
	  - **Sheffield Forgemasters**: Vision-guided robotic welding for large-scale forgings
	  - **Manchester Airport**: Security robots with thermal cameras for perimeter patrol
	  - **Leeds Teaching Hospitals**: Surgical robotics training with high-resolution cameras
  #### Future Directions
  #### Emerging Trends (2026-2030)
	  - **Foundation models for robotics**: Vision-language models (VLMs) enabling natural language robot control
	  - **Quantum dot cameras**: Enhanced spectral sensitivity (UV to NIR in single sensor)
	  - **Lensless computational imaging**: Diffractive optics with AI reconstruction
	  - **Neuromorphic vision proliferation**: Event cameras becoming mainstream (cost reduction)
	  - **Multi-modal sensor fusion**: Standardized RGB-D-Thermal-Event camera modules
	  #### Anticipated Challenges
	  - **Privacy and ethics**: Facial recognition regulation (UK's Biometric Data Protection framework)
	  - **Real-time processing**: Balancing accuracy with latency for safety-critical applications
	  - **Environmental robustness**: Cameras in extreme conditions (dust, vibration, temperature)
	  - **Sim-to-real transfer**: Reducing domain gap between simulation and real-world vision
	  #### Research Priorities
	  - Self-supervised learning for robotic vision (reducing annotation burden)
	  - Adversarial robustness (defending against vision-based attacks)
	  - Energy-efficient vision (sub-watt camera systems for mobile robots)
	  - Explainable visual AI (interpretability for safety certification)
  #### Research & Literature
  #### Foundational Works
	  - Hartley, R., & Zisserman, A. (2003). *Multiple View Geometry in Computer Vision* (2nd ed.). Cambridge University Press. DOI: 10.1017/CBO9780511811685
	  - Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press.
	  - Szeliski, R. (2022). *Computer Vision: Algorithms and Applications* (2nd ed.). Springer. https://szeliski.org/Book/
	  #### Contemporary Research (2024-2026)
	  - Gallego, G., et al. (2020). "Event-based Vision: A Survey." *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 44(1), 154-180. DOI: 10.1109/TPAMI.2020.3008413
	  - Mildenhall, B., et al. (2021). "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis." *Communications of the ACM*, 65(1), 99-106. DOI: 10.1145/3503250
	  - Campos, C., et al. (2021). "ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM." *IEEE Transactions on Robotics*, 37(6), 1874-1890. DOI: 10.1109/TRO.2021.3075644
	  - Brohan, A., et al. (2023). "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control." *arXiv:2307.15818*
	  #### UK Academic Contributions
	  - Imperial College London: Visual SLAM, dense reconstruction (Andrew Davison's group)
	  - University of Oxford: ActiveVision Lab (real-time 3D reconstruction, visual odometry)
	  - University of Edinburgh: Robust Vision Group (event cameras, neuromorphic vision)
  #### References
  1. Hartley, R., & Zisserman, A. (2003). *Multiple View Geometry in Computer Vision* (2nd ed.). Cambridge University Press. https://doi.org/10.1017/CBO9780511811685
	  2. Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press.
	  3. Szeliski, R. (2022). *Computer Vision: Algorithms and Applications* (2nd ed.). Springer. https://szeliski.org/Book/
	  4. Gallego, G., Delbruck, T., Orchard, G., et al. (2020). Event-based Vision: A Survey. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 44(1), 154-180. https://doi.org/10.1109/TPAMI.2020.3008413
	  5. Mildenhall, B., Srinivasan, P. P., Tancik, M., et al. (2021). NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis. *Communications of the ACM*, 65(1), 99-106. https://doi.org/10.1145/3503250
	  6. Campos, C., Elvira, R., Rodríguez, J. J. G., et al. (2021). ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM. *IEEE Transactions on Robotics*, 37(6), 1874-1890. https://doi.org/10.1109/TRO.2021.3075644
	  7. Brohan, A., Brown, N., Carbajal, J., et al. (2023). RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control. *arXiv:2307.15818*. https://arxiv.org/abs/2307.15818
	  8. IEEE 1857.10-2023 Standard for Camera Calibration. https://standards.ieee.org/standard/1857_10-2023.html
	  9. ISO 12233:2023 Photography — Electronic still picture imaging — Resolution and spatial frequency responses. https://www.iso.org/standard/76221.html
	  10. ROS 2 Vision Pipeline Documentation. https://docs.ros.org/en/humble/Tutorials/Advanced/Image-Pipeline.html
- ### Provenance
  - sources:: [[IEEE]], [[ISO/IEC]], [[Robotics Research]], [[Computer Vision Standards]]
  - migration-date:: 2026-04-26T00:00:00Z
