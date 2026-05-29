public:: true

# pid control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3570bfc45572465daa408567c8c0fc520264168d17918eadee9a3a9034604737",
  "@type": "Page",
  "vc:slug": "pid-control",
  "title": "pid control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pid-control",
  "@type": "Class",
  "label": "PID Control",
  "definition": "PID (Proportional–Integral–Derivative) control is a classical closed-loop feedback algorithm that continuously computes a corrective control output by summing three terms derived from the error signal: the proportional term which scales the current error, the integral term which accumulates past error to eliminate steady-state offset, and the derivative term which anticipates future error trends by reacting to the rate of change. Due to its simplicity, interpretability, and tuning maturity, PID remains the most widely deployed controller in industrial automation and robotics for joint position and velocity regulation, motor speed control, and thermal management. Modern variants include anti-windup mechanisms, filtered derivative terms, and gain-scheduling to handle nonlinear plant dynamics.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - PID (Proportional–Integral–Derivative) control is a classical closed-loop feedback algorithm that continuously computes a corrective control output by summing three terms derived from the error signal: the proportional term which scales the current error, the integral term which accumulates past error to eliminate steady-state offset, and the derivative term which anticipates future error trends by reacting to the rate of change. Due to its simplicity, interpretability, and tuning maturity, PID remains the most widely deployed controller in industrial automation and robotics for joint position and velocity regulation, motor speed control, and thermal management. Modern variants include anti-windup mechanisms, filtered derivative terms, and gain-scheduling to handle nonlinear plant dynamics.

- ### Semantic Classification
  - owl-class:: pid-control:PID Control
  - owl-role:: Concept

- ### Relationships
  - enables [[Force Control]]
  - enables [[Robot Control]]
  - uses [[Actuator]]
  - uses [[Sensor]]
  - contrastsWith [[Impedance Control]]

- ### Content
  - The PID control law is u(t) = Kp·e(t) + Ki·∫e(τ)dτ + Kd·(de/dt), where e(t) is the error between desired setpoint and measured output. The gains Kp, Ki, and Kd are tuning parameters: high Kp increases responsiveness but can cause oscillation; Ki eliminates steady-state error but can cause integral windup in actuator-saturated systems; Kd dampens oscillations but amplifies measurement noise. In discrete implementations the derivative is computed as a backward difference and is typically low-pass filtered.
  - PID is applied pervasively in robotics: joint-level position controllers in serial manipulators, velocity controllers for wheeled mobile robots, altitude and attitude controllers in aerial vehicles, and thermal management loops in motor drivers and compute hardware. Cascade (inner–outer loop) PID architectures separately regulate position and velocity, achieving better disturbance rejection than single-loop designs.
  - Practical limitations of PID arise in systems with significant nonlinearities, time delays, or coupled multi-axis dynamics. For such systems, model predictive control (MPC), sliding mode control, or learning-based adaptive controllers are often preferred, though they carry higher computational and design overhead. PID nevertheless remains the baseline against which more advanced controllers are evaluated, and gain auto-tuning methods—Ziegler–Nichols step response, relay feedback, and more recently machine-learning-assisted tuning—continue to lower the barrier to deployment in complex robotic systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
