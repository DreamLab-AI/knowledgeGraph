public:: true

# Sensor Feedback
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7dbbbdbb880988eeca547dc4ce96795691d74b9ccb5b74be5ffedb5990f9699c",
  "@type": "Page",
  "vc:slug": "sensor-feedback",
  "title": "Sensor Feedback",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor-data",
      "vc:label": "Sensor Data"
    },
    {
      "@id": "urn:visionflow:linked:feedback-loop",
      "vc:label": "Feedback Loop"
    },
    {
      "@id": "urn:visionflow:linked:control-algorithm",
      "vc:label": "Control Algorithm"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensor-feedback",
  "@type": "Class",
  "label": "Sensor Feedback",
  "definition": "Measurement data returned from sensors into a control loop so that a controller can compare the actual state of a dynamic system against its desired state and compute corrective action. Sensor feedback closes the loop in control engineering and robotics: encoders, IMUs, force-torque sensors, thermocouples, and cameras report position, velocity, force, temperature, or pose, and the resulting error signal drives actuator commands, with latency, noise, and sampling rate directly bounding achievable control performance.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:sensor-data",
    "label": "Sensor Data"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:closed-loop-control",
        "label": "Closed-Loop Control"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:control-algorithm",
        "label": "Control Algorithm"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Measurement data returned from sensors into a control loop so that a controller can compare the actual state of a dynamic system against its desired state and compute corrective action. Sensor feedback closes the loop in control engineering and robotics: encoders, IMUs, force-torque sensors, thermocouples, and cameras report position, velocity, force, temperature, or pose, and the resulting error signal drives actuator commands, with latency, noise, and sampling rate directly bounding achievable control performance."

- ### Semantic Classification
  - owl-class:: robotics:SensorFeedback
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Sensor Data]]
  - part-of:: [[Feedback Loop]]
  - enables:: [[Closed-Loop Control]]

- ### Content

  ## Definition

  **Sensor feedback** is measurement information flowing *backwards* through a control system: from the plant being controlled, through sensors, to the controller that decides what to do next. A [[Control Algorithm]] cannot correct what it cannot observe; feedback supplies the observed state that is subtracted from the reference to form the error signal. Without it, a controller runs open-loop—issuing commands on faith and accumulating every unmodelled disturbance, from friction and payload variation to wind gusts and component drift.

  The concept is deliberately distinct from *sensory* feedback in human-computer interaction, where stimuli (haptics, audio, visuals) are delivered to a person's senses. Sensor feedback runs the other way and serves a machine: it is data about the physical world consumed by an algorithm. Typical sources in robotics include joint encoders (position and velocity), inertial measurement units (orientation and acceleration), force-torque sensors (contact interaction), current sensors (motor effort as a torque proxy), and increasingly cameras and depth sensors providing visual feedback for servoing and manipulation.

  Feedback quality sets a ceiling on control performance, a central result of [[Control Theory]]. Sampling rate limits usable bandwidth; latency erodes phase margin and can destabilise an otherwise sound loop; noise forces filtering that itself adds lag. Practical systems therefore invest heavily in sensor fusion—Kalman and complementary filters combining complementary modalities, such as fast-but-drifting IMUs with slow-but-absolute position fixes—to synthesise a state estimate that is both prompt and accurate before it ever reaches the controller.

  ## Technical Details

  In a canonical closed loop the plant output y(t) is measured as ŷ(t) = y(t) + noise, the error e(t) = r(t) − ŷ(t) is computed against the reference r(t), and the controller maps e(t) to an actuator command—proportional-integral-derivative control being the ubiquitous industrial case. Discrete implementations sample feedback at rates from ~10 Hz (thermal processes) through 1 kHz (robot joint control) to 20 kHz+ (motor current loops); a common rule of thumb places the sampling frequency at least ten times the desired closed-loop bandwidth.

  Modern robotics stacks layer feedback at multiple rates: fast inner loops on motor current and joint velocity, mid-rate loops on position and force, and slower outer loops on task-level quantities such as end-effector pose from vision (visual servoing at 30–100 Hz). Learning-based controllers change none of the fundamentals—reinforcement-learning policies and model-predictive controllers still consume fused sensor feedback as their observation vector, and their deployment stands or falls on the same latency, calibration, and noise budgets that govern classical loops. Failure modes—sensor dropout, aliasing, miscalibration—are correspondingly first-class safety concerns, handled with redundancy, plausibility checks, and graceful degradation to safe states.

  ## Current Landscape

  - **Force and touch enter learned policies**: a 2025 literature review of "forceful robotic foundation models" documents a clear trend of folding force feedback (proprioception and tactile sensing) into transformer- and diffusion-based manipulation policies, reporting consistent robustness gains when force is added as an input, an output, or both.
  - **Whole-body tactile control**: the TACT system (2025) extended action-chunking transformers to accept distributed tactile measurements alongside vision and proprioception, letting the life-size humanoid RHP7 Kaleido perform contact-rich whole-body manipulation while balancing and walking.
  - **Feedback without dedicated sensors**: a 2025 unified force-and-position policy for legged robots estimates external forces from historical robot states (no force sensors) and reports roughly 39.5% higher success on contact-rich tasks than position-only control.
  - **Sim-to-real remains the bottleneck**: 2025 humanoid surveys stress that raw high-dimensional tactile data and the difficulty of simulating contact physics keep sim-to-real transfer the dominant challenge, driving work on tactile simulators and domain randomisation.

  **Sources**:
  - https://arxiv.org/html/2504.11827v1
  - https://arxiv.org/html/2506.15146v1
  - https://arxiv.org/html/2505.20829v2
  - https://arxiv.org/html/2501.02116v1
