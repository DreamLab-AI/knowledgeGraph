public:: true

# VisualServoing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:visual-servoing",
  "@type": "Page",
  "vc:slug": "visual-servoing",
  "title": "VisualServoing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:visual-servoing",
  "@type": "Class",
  "label": "VisualServoing",
  "definition": "Visual servoing is a robot control paradigm in which camera-derived visual measurements are used as feedback signals within a closed-loop control system to guide the motion of a robotic manipulator or mobile platform towards a goal configuration defined in visual terms. Rather than relying on pre-computed geometric trajectories, visual servoing continuously computes control signals from current image features or image-space error signals, making it inherently adaptive to object pose uncertainty and disturbances. The two primary architectures are image-based visual servoing (IBVS), which minimises error in image feature space, and position-based visual servoing (PBVS), which reconstructs 3D pose and minimises Cartesian error. Visual servoing enables tasks such as precise grasping, assembly alignment, and autonomous navigation without requiring exact geometric calibration.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robot-control", "label": "Robot Control"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:camera", "label": "Camera"},
      {"@id": "urn:ngm:class:closed-loop-control", "label": "Closed-Loop Control"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:manipulation", "label": "Manipulation"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"},
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[VisualServoing]] is a [[Robot Control]] paradigm that closes the control loop through [[Computer Vision]], using [[Camera]]-derived image features as feedback within a [[Closed-Loop Control]] system to guide manipulator motion without requiring exact geometric pre-calibration.

- ### Relationships
  - Visual servoing depends on a [[Camera]] as its primary sensor and [[Computer Vision]] algorithms to extract features or pose estimates from each frame. The resulting error signal drives [[Closed-Loop Control]] of the manipulator, commanding [[Motion Control]] outputs to minimise the discrepancy between current and desired visual observations. Accurate [[Camera Calibration]] reduces systematic errors in image-to-joint-space mappings, though IBVS can tolerate partial calibration errors. The paradigm enables adaptive [[Manipulation]] and real-time [[Path Planning]] corrections, with the [[End Effector]] position regulated through visual rather than proprioceptive measurement, complementing [[Feedback Control]] from joint encoders.

- ### Content
  - Visual servoing was formally introduced by Shirai and Inoue in 1973 in research on hand-eye coordination for robotic assembly. The theoretical framework was substantially advanced by Weiss, Sanderson, and colleagues in the 1980s, who formulated the image Jacobian (also called the interaction matrix or feature Jacobian) relating image feature velocities to camera Cartesian velocities — the mathematical core that enables real-time control from visual feedback. The field was unified and systematised by François Chaumette's influential work through the 1990s and 2000s, which established IBVS and PBVS as the canonical architectures and analysed their stability properties using Lyapunov methods.

  - The fundamental mechanism of visual servoing is the computation of a task function error from image measurements and its regulation to zero through a control law. In IBVS, image features such as point coordinates, line endpoints, or moment descriptors are extracted from each camera frame. The interaction matrix, which depends on the current feature values and estimated depth, maps desired feature velocity to camera velocity. A proportional controller on the feature error produces camera velocity commands, which are transformed to joint velocities via the geometric Jacobian. In PBVS, a full 3D pose estimate is computed by solving a perspective-n-point problem, and Cartesian control is applied in task space with the visual measurement providing ground truth pose rather than proprioceptive estimation.

  - Visual servoing is significant because it resolves a fundamental limitation of open-loop robotic manipulation: the accumulation of geometric errors from imprecise calibration, thermal drift, and workpiece position uncertainty. By closing the loop on vision, the robot reacts to what it actually sees rather than what it was told to see. This makes visual servoing robust to the class of errors that cause open-loop systems to fail in unstructured or dynamic environments. Applications include bin picking with unknown part poses, precision assembly of electronics, robotic surgery where tissue deformation makes pre-planned trajectories invalid, and agricultural harvesting of variably positioned fruit.

  - By 2024–2025, deep learning is transforming visual servoing architectures. Direct visual servoing methods use end-to-end neural networks that map raw images to control outputs, bypassing explicit feature extraction and Jacobian computation. Sim-to-real transfer enables neural visual servoing policies trained entirely in simulation to operate on physical robots with minimal adaptation. Event cameras — neuromorphic sensors that output asynchronous pixel-level brightness changes rather than frame sequences — are being explored as high-bandwidth, low-latency alternatives to frame cameras for high-speed visual servoing. Integration with tactile sensing is enabling multi-modal servoing that combines visual guidance with contact force regulation for the final stages of precise insertion and assembly tasks.

