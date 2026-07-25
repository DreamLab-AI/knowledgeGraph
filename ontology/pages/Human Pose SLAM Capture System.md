public:: true

elevatedFrom:: [[Human tracking and SLAM capture]]
# Human Pose SLAM Capture System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a6165d3e89a0f5333c88ae7c44537c14570f61efaf22a24a7eef46ae079f6d93",
  "@type": "Page",
  "vc:slug": "human-pose-slam-capture-system",
  "title": "Human Pose SLAM Capture System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Human tracking and SLAM capture"
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
  "@id": "urn:ngm:class:human-pose-slam-capture-system",
  "@type": "Class",
  "label": "Human Pose SLAM Capture System",
  "definition": "A Human Pose SLAM Capture System is an integrated sensing and computation pipeline that simultaneously localises a device within an unknown environment (SLAM) while continuously tracking the full-body skeletal pose of one or more human occupants in real time. It fuses data from depth cameras, inertial measurement units, and RGB imagery through probabilistic state estimation — typically particle filters or factor-graph optimisers — to produce a joint world model of both the static scene geometry and dynamic human kinematics. The output drives applications including markerless motion capture, avatar animation in extended reality, safety-aware robot navigation around people, and persistent spatial AI anchoring. The discipline sits at the intersection of computer vision, human-computer interaction, and spatial computing, with maturing industrial deployments in XR headsets, telepresence rigs, and autonomous vehicle pedestrian tracking.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
      "label": "Simultaneous Localisation and Mapping"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:rgb-d-camera",
        "label": "RGB-D Camera"
      },
      {
        "@id": "urn:ngm:class:factor-graph-optimisation",
        "label": "Factor Graph Optimisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      },
      {
        "@id": "urn:ngm:class:avatar-animation",
        "label": "Avatar Animation"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:real-time-processing",
        "label": "Real-time Processing"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:3-d-scene-reconstruction",
        "label": "Scene Reconstruction"
      },
      {
        "@id": "urn:ngm:class:loop-closure-detection",
        "label": "Loop Closure Detection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:neural-network-inference",
        "label": "Neural Network Inference"
      },
      {
        "@id": "urn:ngm:class:point-cloud-processing",
        "label": "Point Cloud Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-anchoring",
        "label": "Spatial Anchoring"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:human-tracking-and-slam-capture",
      "label": "Human Tracking and SLAM Capture"
    },
    {
      "@id": "urn:ngm:class:markerless-body-slam",
      "label": "Markerless Body SLAM"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:human-tracking-and-slam-capture:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a6165d3e89a0f5333c88ae7c44537c14570f61efaf22a24a7eef46ae079f6d93"
  },
  "vc:resolutions": [],
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
  - A Human Pose SLAM Capture System is an integrated sensing and computation pipeline that unifies [[Simultaneous Localisation and Mapping]] with continuous full-body [[Skeletal Tracking]], enabling a device to build a persistent world model while simultaneously resolving the kinematic state of every human within the scene. It draws on [[Sensor Fusion]] of [[Depth Sensing]], [[Inertial Measurement Unit]] data, and RGB imagery, processed through probabilistic estimators such as factor graphs or particle filters, to produce real-time pose skeletons anchored in a global coordinate frame. This joint estimation approach is fundamentally more robust than running [[SLAM]] and [[Pose Estimation]] independently, because human motion provides dynamic constraints that refine map consistency, while the map itself resolves ambiguities in single-view body reconstruction. Practical deployments range from standalone [[Extended Reality]] headsets to multi-camera studio rigs used for volumetric capture and [[Avatar Animation]].

- ### Overview
  - **What it is**: a closed-loop perception system that tracks where it is in the world (mapping + localisation) and where each person's body parts are in that world (pose), updating both estimates concurrently at frame rate.
  - **Why it matters**: decoupled systems suffer drift between the coordinate frame of the map and the frame of the body tracker, causing avatar foot-sliding, robot collision misses, and broken AR occlusion. A tightly coupled Human Pose SLAM system eliminates this drift by sharing state between the two inference pipelines.
  - **How it works**:
    - A front-end processes each incoming frame: extracting [[Visual Feature Extraction]] keypoints for SLAM and human joint heatmaps for pose.
    - A back-end graph optimiser (e.g. [[Factor Graph Optimisation]]) maintains a joint factor graph with pose-graph nodes for camera trajectory and kinematic chain nodes for body joints.
    - [[Loop Closure Detection]] corrects accumulated drift when the camera revisits a known scene region.
    - The combined output is a metrically consistent 3-D skeleton embedded in a persistent [[Scene Reconstruction]] mesh or point cloud.
  - **Scope**: applicable to single-person ego-centric capture (inside-out tracking, as in [[XR Headset]] devices) and multi-person outside-in setups (studio arrays, robot observers).

- ### Key Components
  - **Depth Sensing layer**
    - Structured-light or time-of-flight [[Depth Camera]] provides per-pixel range, anchoring skeleton joints in 3-D space.
    - [[LiDAR SLAM]] variants replace depth cameras in outdoor or automotive contexts, trading resolution for range.
  - **Inertial backbone**
    - [[Inertial Measurement Unit]] (IMU) at high frequency (200–1000 Hz) bridges camera frame gaps and suppresses motion blur artefacts, critical for fast limb movement.
    - Visual-inertial odometry (VIO) pre-integrates IMU deltas between keyframes, maintaining low-latency pose updates.
  - **Pose estimation front-end**
    - 2-D heatmap regression (e.g. HRNet, ViTPose) detects joint locations in the image plane.
    - Lifting networks or direct volumetric regression convert 2-D detections to 3-D joint positions.
    - [[Neural Network Inference]] on-device requires quantised models to meet real-time budgets on mobile SoCs.
  - **Joint SLAM back-end**
    - [[Factor Graph Optimisation]] (iSAM2, GTSAM, g2o) maintains sparse landmark map and body trajectory as one unified graph.
    - Marginalisation keeps graph size bounded for real-time operation.
    - Optionally integrates semantic object nodes, linking [[Scene Understanding]] with body pose context.
  - **Scene representation**
    - Dense mesh or [[Occupancy Grid]] for navigation and occlusion reasoning.
    - Sparse feature map (ORB, SIFT) sufficient for lightweight localisation without full reconstruction.
    - Neural implicit representations (NeRF variants) emerging as richer but more compute-hungry alternatives.
  - **Output layer**
    - Skeletal stream in standard rig formats (BVH, FBX, USD Skel) for downstream [[Avatar Animation]] and [[Digital Twin]] applications.
    - Spatial anchor poses for persistent [[Augmented Reality]] overlays via [[Spatial Anchoring]].

- ### Applications / Use Cases
  - **Extended Reality headsets**
    - Inside-out head tracking (6DoF) combined with hand and body pose enables controller-free full-body avatars in social VR platforms.
    - Devices such as Meta Quest and Apple Vision Pro implement partial variants; full-body SLAM is an active research and productisation frontier.
  - **Markerless motion capture**
    - Film and game studios replace optical marker suits with camera-array SLAM rigs, reducing setup time from hours to minutes.
    - Tools like [[OpenPose]] and commercial successors (Move.ai, Kinetix) approximate this pipeline without dedicated SLAM backends.
  - **Human-robot collaboration**
    - [[Human-Robot Interaction]] safety requires a robot to know exactly where human limbs are relative to its own trajectory plan.
    - Shared SLAM maps allow a robot arm to update a joint occupancy model in real time, enabling predictive collision avoidance.
  - **Telepresence and volumetric communication**
    - Capturing a speaker's full body in a metrically accurate room model lets remote participants perceive realistic spatial audio and gaze direction.
    - Drives [[Metaverse Presence]] fidelity and remote collaboration quality.
  - **Rehabilitation and sports science**
    - Clinicians use markerless body SLAM to quantify gait asymmetry, joint range of motion, and movement quality without attaching sensors to patients.
    - Removes lab dependency, enabling capture in the field or at home.
  - **Autonomous vehicle pedestrian modelling**
    - Vehicles with [[LiDAR SLAM]] maps augment pedestrian detections with full-body pose priors to predict crossing intent and gesture signals.
    - Bridges to [[Autonomous Navigation]] decision systems.
  - **Emotion and biometric inference**
    - Body pose dynamics encode proxemic behaviour and micro-gestures correlated with emotional state, supporting affective computing research.
    - Raises significant [[Privacy in XR]] considerations (see Ethics section).

- ### Relationships
  - uses:: [[SLAM]]
  - uses:: [[Depth Sensing]]
  - uses:: [[Pose Estimation]]
  - uses:: [[Inertial Measurement Unit]]
  - uses:: [[RGB-D Camera]]
  - uses:: [[Factor Graph Optimisation]]
  - enables:: [[Spatial Mapping]]
  - enables:: [[Motion Capture]]
  - enables:: [[Avatar Animation]]
  - enables:: [[Extended Reality]]
  - enables:: [[Human-Robot Interaction]]
  - requires:: [[Computer Vision]]
  - requires:: [[Real-Time Processing]]
  - requires:: [[Sensor Fusion]]
  - hasPart:: [[Skeletal Tracking]]
  - hasPart:: [[Scene Reconstruction]]
  - hasPart:: [[Loop Closure Detection]]
  - dependsOn:: [[Neural Network Inference]]
  - dependsOn:: [[Point Cloud Processing]]
  - contrastsWith:: [[Marker-Based Motion Capture]]
  - contrastsWith:: [[LiDAR SLAM]]
  - relatedTo:: [[Spatial Anchoring]]
  - relatedTo:: [[Digital Twin]]
  - relatedTo:: [[Body Area Network]]
  - bridges-to:: [[Metaverse Presence]]
  - bridges-to:: [[Autonomous Navigation]]

- ### Technical Challenges
  - **Occlusion handling**: self-occlusion (one limb behind another) and environment occlusion break joint visibility, requiring temporal priors and kinematic constraints to infer hidden state.
  - **Scale ambiguity**: monocular RGB systems cannot recover metric scale without depth sensors or known objects; depth and IMU are necessary for metrically correct skeletons.
  - **Dynamic environment problem**: classical SLAM assumes a static world; humans moving in the scene violate this assumption, requiring people to be explicitly tracked and removed from the static map.
  - **Compute budget**: joint factor graph optimisation on resource-constrained XR hardware demands aggressive approximation — fixed-lag smoothers, incremental solvers, and neural acceleration.
  - **Multi-person scalability**: tracking N bodies multiplies the state space; data-association across occlusions (who is who after they cross paths) is an active research problem related to [[Multi-Object Tracking]].
  - **Privacy and data minimisation**: body pose streams are highly re-identifiable; on-device inference and differential privacy mechanisms are needed before cloud transmission.

- ### Ethics and Safety
  - Motion tracking data in XR has been shown in research to enable re-identification and behavioural profiling even when no explicit identity signal is present (see arXiv:2306.06459 and related work).
  - Gait signatures and limb proportions are near-biometric; storing or transmitting raw skeletal streams without consent carries significant GDPR and CCPA implications.
  - Affect inference from body language (emotion tracking, arousal/valence annotation) is ethically contentious; standards bodies including the [[IEEE]] and the EU AI Act classify such systems as high-risk where they influence consequential decisions.
  - Safety-critical deployments (surgical robotics, autonomous vehicles) require validated uncertainty estimates on pose outputs, not just point estimates.
  - [[Privacy in XR]] literature recommends anonymising skeletal data at capture time, retaining only task-relevant joint subsets.

- ### Standards and Context
  - No single dedicated standard governs Human Pose SLAM as an integrated system; relevant specifications span multiple bodies:
    - **OpenXR** (Khronos Group) defines body tracking API extensions for XR runtimes, providing a standard interface for consuming skeletal output.
    - **USD Skel** (Pixar/ASWF) standardises skeletal rig interchange for downstream rendering and animation pipelines.
    - **IEEE 1873-2015** (robot map data representation) provides vocabulary for the SLAM map component.
    - **BVH / C3D** are legacy interchange formats for motion capture data, widely supported but lacking semantic metadata.
    - **W3C Immersive Web** working group addresses web-based XR device APIs that surface pose data in browser contexts.
  - Related academic benchmarks: TUM RGB-D (SLAM evaluation), Human3.6M and MPI-INF-3DHP (3-D pose estimation), PROX (joint scene + body dataset).

- ### Provenance
  - sources:: OpenXR specification (Khronos Group); SLAM survey literature (Cadena et al.); pose estimation survey (Chen et al.); arXiv:2306.06459 (XR motion data privacy); PROX dataset (Hassan et al.); HRNet and ViTPose papers; GTSAM/iSAM2 documentation
  - updated:: 2026-06-13
