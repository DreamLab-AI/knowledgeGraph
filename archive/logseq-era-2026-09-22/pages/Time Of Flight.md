public:: true

# Time Of Flight

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:time-of-flight",
  "@type": "Page",
  "title": "Time Of Flight",
  "vc:slug": "time-of-flight",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:time-of-flight",
  "@type": "Class",
  "label": "Time Of Flight",
  "definition": "Time of Flight (ToF) is a sensing technique that determines the distance to an object by measuring the elapsed time between the emission of a signal — typically light, sound, or radio waves — and the detection of its reflection. In depth sensing, ToF cameras emit pulsed or modulated infrared light and record the per-pixel round-trip delay to construct a dense depth map. ToF sensors are widely deployed in robotics, autonomous vehicles, augmented reality, and gesture recognition due to their ability to produce real-time depth data without ambient light dependency.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}, {"@id": "urn:ngm:class:proximity-sensor", "label": "Proximity Sensor"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:infrared-sensing", "label": "Infrared Sensing"},
      {"@id": "urn:ngm:class:lidar", "label": "LiDAR"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"},
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:obstacle-detection", "label": "Obstacle Detection"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:gesture-recognition", "label": "Gesture Recognition"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:stereo-vision", "label": "Stereo Vision"},
      {"@id": "urn:ngm:class:structured-light", "label": "Structured Light"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:depth-map", "label": "Depth Map"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Time Of Flight]] (ToF) is a depth-sensing technique that determines distance by measuring how long a signal takes to travel from emitter to target and back.
  - In imaging applications, a ToF camera emits modulated [[Infrared Sensing]] light and computes a per-pixel [[Depth Map]] from phase shift or pulse delay.
  - ToF sensors feed into [[Sensor Fusion]] pipelines alongside cameras and IMUs for [[Autonomous Navigation]] and [[Augmented Reality]].

- ### Overview
  - ToF depth cameras achieve frame-rate depth sensing (typically 30–60 fps) without requiring structured patterns or stereo baseline, making them compact and suitable for mobile devices.
  - Interference from multipath reflections and sunlight saturation are key limitations, particularly outdoors.
  - [[LiDAR]] systems are a high-fidelity variant of ToF operating over longer ranges with rotating or solid-state emitter arrays.

- ### Key Aspects
  - **Direct ToF (dToF)**: Measures round-trip time of a single pulse; used in LiDAR.
  - **Indirect ToF (iToF)**: Modulates a continuous wave and measures phase shift; used in depth cameras (e.g., Intel RealSense, Microsoft Azure Kinect).
  - **Resolution**: Typically lower spatial resolution than RGB cameras but provides per-pixel depth.
  - **Range**: Consumer devices cover 0.1–5 m; automotive LiDAR reaches 200+ m.

- ### Mechanisms
  - For iToF, the sensor emits a sinusoidally modulated IR signal; the phase difference between emitted and received signals encodes distance.
  - For dToF, a picosecond laser pulse is emitted and a SPAD (single-photon avalanche diode) array times the photon return.
  - [[Signal Processing]] algorithms remove multipath artefacts and apply temperature compensation.

- ### Applications
  - Face ID and face unlock on smartphones using structured ToF arrays.
  - Obstacle avoidance in warehouse [[Robotics]] and drone navigation.
  - Hand tracking for [[Augmented Reality]] headsets.
  - [[3D Reconstruction]] of environments for [[SLAM]]-based mapping.

- ### Relationships
  - uses:: [[Infrared Sensing]]
  - uses:: [[LiDAR]]
  - dependsOn:: [[Sensor Fusion]]
  - dependsOn:: [[Signal Processing]]
  - enables:: [[Depth Sensing]]
  - enables:: [[3D Reconstruction]]
  - enables:: [[Obstacle Detection]]
  - supports:: [[Autonomous Navigation]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Gesture Recognition]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[SLAM]]
  - contrastsWith:: [[Stereo Vision]]
  - hasPart:: [[Depth Map]]

- ### Provenance
  - updated:: 2026-06-15
