public:: true

# Depth Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:depth-sensor",
  "@type": "Page",
  "vc:slug": "depth-sensor",
  "title": "Depth Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:depth-sensor",
  "@type": "Class",
  "label": "Depth Sensor",
  "definition": "A Depth Sensor is a hardware device or sensor modality that measures the distance between the sensor and objects in a scene, producing per-pixel or per-point depth information as its primary output. Operating principles include structured light projection, time-of-flight measurement, stereo vision correlation, and LiDAR pulse ranging. Depth sensors are fundamental components in robotics, augmented and mixed reality, autonomous vehicles, and industrial inspection, providing the three-dimensional scene understanding that colour cameras alone cannot supply. The output is typically represented as a depth map, disparity map, or three-dimensional [[Point Cloud]], forming the input to downstream perception and scene reconstruction pipelines.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:exteroceptive-sensor", "label": "Exteroceptive Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:camera", "label": "Camera"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Depth Sensor is a hardware device that measures scene geometry by determining the distance from the sensor to surfaces, outputting depth maps or [[Point Cloud]] data that feed [[Perception System]] pipelines in robotics, AR/MR, and autonomous navigation.

- ### Relationships
  - Depth Sensor is a specialisation of the [[Exteroceptive Sensor]] class, extending spatial awareness beyond what a standard [[Camera]] provides. The output data directly enables [[Depth Sensing]] and [[Depth Estimation]] tasks, feeding [[3D Reconstruction]] algorithms and [[Point Cloud]] processing pipelines. In robotic platforms, the sensor contributes to a full [[Perception System]] enabling object detection, grasping, and navigation. [[Lidar]] represents the highest-performance category of depth sensor, while structured-light and time-of-flight devices offer cost-effective indoor alternatives. All depth sensing modalities ultimately support the operation of [[Autonomous Robot]] systems that must reason about their three-dimensional environment.

- ### Content
  - Depth sensors can be categorised by their operating principle. Structured-light sensors, such as the original Microsoft Kinect, project a known infrared pattern onto the scene and use a separate infrared camera to observe the pattern's deformation; the degree of deformation encodes depth. This approach works well indoors but degrades in bright sunlight and at long ranges. Time-of-flight sensors emit a modulated light signal and measure the phase shift or time delay of the returning reflection, yielding dense depth maps at video frame rates and tolerating more varied lighting conditions.

  - Stereo vision systems use two or more spatially separated cameras to compute depth from disparity: points that are close to the cameras appear at different horizontal positions in the left and right images, and the magnitude of that difference is inversely proportional to distance. Stereo depth is passive (requiring no active emitter), making it suitable for outdoor and long-range scenarios, but requires textured surfaces for reliable matching. Deep learning-based stereo matching has substantially improved accuracy over classical block-matching approaches.

  - LiDAR (Light Detection and Ranging) sensors use pulsed or frequency-modulated laser light to achieve high-accuracy, long-range depth measurement. Rotating mechanical LiDAR units produce 360-degree [[Point Cloud]] scans and have been the primary sensor modality for autonomous vehicle outdoor perception. Solid-state LiDAR using OPA (optical phased arrays) or MEMS mirrors is reducing size, cost, and moving parts, accelerating deployment in consumer robotics and advanced driver assistance systems.

  - In augmented and mixed reality headsets, depth sensors enable real-time mesh reconstruction of the user's environment, supporting occlusion rendering, surface interaction, and spatial anchoring of virtual content. The Microsoft HoloLens and Meta Quest Pro both incorporate time-of-flight depth sensors for this purpose, while the Apple Vision Pro uses a multi-camera stereo approach combined with structured light for face tracking.

  - Calibration is a critical process for depth sensors: intrinsic parameters (focal length, principal point, lens distortion) must be accurately estimated, and if a depth sensor is used alongside a colour camera, extrinsic calibration aligns the two coordinate frames. [[Camera Calibration]] procedures for depth sensors must account for the specific properties of the depth modality, including depth-dependent noise characteristics and edge blurring artefacts at depth discontinuities.
