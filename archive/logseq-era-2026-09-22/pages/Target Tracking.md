public:: true

# Target Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:target-tracking",
  "@type": "Page",
  "vc:slug": "target-tracking",
  "title": "Target Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:target-tracking",
  "@type": "Class",
  "label": "Target Tracking",
  "definition": "Target tracking is a computational and signal-processing discipline concerned with estimating the state — typically position, velocity, and orientation — of one or more moving objects over time from sequences of noisy sensor observations. It encompasses algorithms such as Kalman filters, particle filters, and multi-hypothesis trackers, applied across radar, sonar, computer vision, and LiDAR modalities. Applications span aerospace surveillance, autonomous vehicle perception, robotic manipulation, sports analytics, and augmented reality. Modern deep-learning-based trackers jointly perform detection and tracking, achieving robust performance in complex, cluttered environments.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:object-detection-and-tracking", "label": "Object Detection and Tracking"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:motion-tracking", "label": "Motion Tracking"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:trajectory-tracking", "label": "Trajectory Tracking"},
      {"@id": "urn:ngm:class:spatial-tracking-system", "label": "Spatial Tracking System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:human-pose-slam-capture-system", "label": "Human Pose SLAM Capture System"},
      {"@id": "urn:ngm:class:anomaly-detection", "label": "Anomaly Detection"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Target Tracking estimates the state of moving objects from noisy sensor sequences, combining [[Object Detection]] with recursive estimation algorithms and [[Sensor Fusion]] to maintain identities over time in applications from aerospace to [[Human Pose SLAM Capture System]].
- ### Relationships
  - Target Tracking builds on [[Object Detection]] to associate detections across frames and maintain consistent object identities, using [[Sensor Fusion]] to combine radar, LiDAR, and [[Computer Vision]] inputs for robust state estimation. [[Trajectory Tracking]] methods propagate state predictions between observations, while [[Spatial Tracking System]] infrastructure handles coordinate transformations. The discipline enables [[Human Pose SLAM Capture System]] in robotics and spatial computing, and [[Anomaly Detection]] in surveillance by flagging tracks that deviate from expected [[Motion Tracking]] patterns.
- ### Content
  - The foundations of modern target tracking were laid by Rudolf Kálmán, whose 1960 paper introduced the recursive linear state estimator now known as the Kalman filter. The Kalman filter provides the optimal minimum-mean-square-error estimate of a linear dynamical system's state given Gaussian noise, and its extended and unscented variants handle nonlinear systems. Multi-object tracking extends these principles with data association algorithms — including the Hungarian algorithm, Joint Probabilistic Data Association (JPDA), and Multiple Hypothesis Tracking (MHT) — that resolve which detection corresponds to which track.

  - The multi-object tracking benchmarks MOT16, MOT20, and DanceTrack have driven rapid progress in deep-learning-based approaches. Methods such as SORT, DeepSORT, ByteTrack, and StrongSORT use appearance re-identification networks alongside Kalman-filter motion models to maintain identity across occlusions and re-entries. Transformer-based trackers such as TrackFormer and MOTR treat detection and tracking as a joint sequence prediction problem, eliminating the heuristic association step. These methods achieve near-human performance on pedestrian tracking benchmarks in uncluttered conditions.

  - In autonomous vehicles and robotics, target tracking is a safety-critical subsystem that must operate reliably under adverse weather, sensor degradation, and adversarial conditions. LiDAR-based 3D multi-object tracking uses point-cloud detections and 3D Kalman filters operating in the world frame, fused with camera-based appearance features for robust long-range tracking. The challenge of tracking objects across sensor handoff zones, handling temporary occlusions in urban environments, and maintaining consistent global identities across map sessions remains an active area of research with direct safety implications for autonomous navigation systems.
