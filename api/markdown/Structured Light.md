public:: true

# Structured Light
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:structured-light",
  "@type": "Page",
  "vc:slug": "structured-light",
  "title": "Structured Light",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:structured-light",
  "@type": "Class",
  "label": "Structured Light",
  "definition": "Structured light is a 3D surface measurement technique that projects one or more known patterns — typically binary stripe sequences, sinusoidal fringes, or dot grids — onto a scene using a projector or laser, then captures the deformed pattern with one or more calibrated cameras. Because the geometry of the projection and capture system is precisely known, the per-pixel deformation of the projected pattern encodes depth, allowing a complete 3D point cloud or depth map of the object surface to be recovered through triangulation. Structured light systems achieve sub-millimetre to micrometre-scale depth accuracy and are widely deployed in industrial metrology, 3D scanning, face recognition, robotic guidance, and augmented reality depth sensing.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stereo-camera", "label": "Stereo Camera"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:depth-sensor", "label": "Depth Sensor"},
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:point-cloud-processing", "label": "Point Cloud Processing"},
      {"@id": "urn:ngm:class:industrial-inspection", "label": "Industrial Inspection"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Structured Light]] is an active 3D measurement technique that projects known spatial patterns onto a scene and recovers depth geometry by analysing the deformation of those patterns as captured by calibrated cameras, achieving high-accuracy [[3D Reconstruction]] and [[Point Cloud Processing]] without the baseline constraints of passive [[Stereo Camera]] systems.

- ### Relationships
  - [[Structured Light]] is a subclass of [[Depth Sensing]] and relies on precise [[Camera Calibration]] to triangulate the 3D position of each surface point from the observed pattern deformation. It complements [[Stereo Camera]] systems (which use texture for matching) and [[Lidar]] (which uses time-of-flight) as distinct [[Depth Sensor]] modalities, each with different range, accuracy, and lighting sensitivity tradeoffs. The dense depth maps it produces enable [[3D Reconstruction]], [[Point Cloud Processing]], and [[Industrial Inspection]] pipelines, and the underlying geometry estimation draws on [[Computer Vision]] and [[Depth Estimation]] algorithms. Applications span precision manufacturing quality control, face recognition on mobile devices, robotic bin-picking, and [[Augmented Reality]] spatial mapping.

- ### Content
  - Structured light metrology emerged in the 1960s and 1970s from optical profilometry research, where sinusoidal fringe projection was used to measure surface profiles of machined components. The fundamental principle is straightforward: a projector illuminates a scene with a pattern whose spatial frequency is known; a camera offset from the projector observes the pattern; at each pixel, the apparent displacement of the pattern stripe from its expected position encodes the depth via trigonometric triangulation based on the known baseline and lens geometry. Multi-pattern binary Gray code sequences encode each column of the projector unambiguously, allowing even complex surfaces to be decoded without phase ambiguity.

  - Modern structured light systems use several pattern strategies optimised for different measurement goals. Binary stripe sequences with Gray coding provide high precision and rejection of ambient light but require multiple image captures and are unsuitable for moving scenes. Phase-shifting sinusoidal fringe projection achieves sub-pixel accuracy and is widely used in industrial metrology. Single-shot patterns (pseudo-random dot arrays, colour-coded grids) enable 3D capture in a single frame for dynamic scenes, at the cost of reduced precision. Near-infrared structured light (Apple Face ID, Intel RealSense) uses dot patterns invisible to the naked eye, enabling depth sensing in consumer products. Time-multiplexed binary patterns with high-speed projectors achieve sub-millisecond capture of fast-moving objects.

  - The precision manufacturing and quality control industry relies heavily on structured light scanning: coordinate measurement of machined parts for conformance verification, weld inspection, aircraft skin deformation measurement, and reverse engineering of legacy components. In consumer electronics, Apple's TrueDepth camera (iPhone X, 2017) brought structured light depth sensing to mass-market face recognition, projecting 30,000 infrared dots onto the user's face to capture sub-millimetre facial geometry for biometric authentication. Industrial 3D printers use structured light feedback to verify layer deposition accuracy in real time.

  - In 2024–2025, the convergence of structured light with machine learning has produced hybrid depth estimation systems where neural networks trained on structured light ground truth improve the robustness of consumer depth cameras under challenging conditions (partial occlusions, transparent surfaces, dark materials). Event cameras combined with structured light achieve microsecond-scale depth capture for high-speed robotics. Miniaturised MEMS projectors have enabled structured light integration into smartphones, wearables, and robotic hand sensors, expanding the addressable application space beyond controlled industrial environments.