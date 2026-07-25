public:: true

# Setpoint

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:setpoint", "@type":"Page", "title":"Setpoint", "vc:slug":"setpoint", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:setpoint",
  "@type":"Class",
  "label":"Setpoint",
  "definition":"A setpoint is the desired target value that a control system attempts to maintain for a measured process variable, serving as the reference against which the controller compares the actual measurement. The difference between setpoint and measured value is the error signal that drives corrective action in a feedback loop. Setpoints can be fixed, scheduled, or continuously varying, as when a controller tracks a moving reference trajectory.",
  "domain":"robotics",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:closed-loop-control","label":"Closed-Loop Control"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:closed-loop-control","label":"Closed-Loop Control"},{"@id":"urn:ngm:class:feedback-loop","label":"Feedback Loop"}],
    "hasPart":[{"@id":"urn:ngm:class:control-theory","label":"Control Theory"}],
    "uses":[{"@id":"urn:ngm:class:sensor","label":"Sensor"}],
    "enables":[{"@id":"urn:ngm:class:disturbance-rejection","label":"Disturbance Rejection"},{"@id":"urn:ngm:class:stability","label":"Stability"}],
    "requires":[{"@id":"urn:ngm:class:sensor","label":"Sensor"},{"@id":"urn:ngm:class:feedback-loop","label":"Feedback Loop"}],
    "supports":[{"@id":"urn:ngm:class:pid-controller","label":"PID Controller"},{"@id":"urn:ngm:class:process-control","label":"Process Control"}],
    "implements":[{"@id":"urn:ngm:class:control-theory","label":"Control Theory"}],
    "dependsOn":[{"@id":"urn:ngm:class:control-loop","label":"Control Loop"}],
    "relatedTo":[{"@id":"urn:ngm:class:actuator","label":"Actuator"},{"@id":"urn:ngm:class:pid-control","label":"PID Control"},{"@id":"urn:ngm:class:trajectory","label":"Trajectory"}],
    "contrastsWith":[{"@id":"urn:ngm:class:disturbance-rejection","label":"Disturbance Rejection"}],
    "bridgesTo":[{"@id":"urn:ngm:class:industrial-automation","label":"Industrial Automation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A Setpoint is the target reference value within [[Closed-Loop Control]] and a [[Feedback Loop]], compared against the measured variable to produce the error that drives a [[PID Controller]].
- It expresses the goal state the system must reach and hold using a [[Sensor]] for measurement.
- ### Overview
- The setpoint is the goal a control system pursues: a temperature to maintain, a speed to hold, a position to reach. The controller continuously measures the actual process variable, subtracts it from the setpoint to form an error, and commands an actuator to drive that error towards zero.
- Setpoints come in several forms. A fixed setpoint stays constant, as in a thermostat. A scheduled setpoint changes over time according to a plan, as in a heating programme. A tracking setpoint follows a continuously varying reference, as when a robot joint follows a planned trajectory.
- Choosing and shaping setpoints well is part of control design: abrupt setpoint changes can cause overshoot, so smoothing or ramping the reference improves transient behaviour and protects equipment.
- ### Key aspects
- The error signal is defined as the difference between setpoint and measured value.
- Setpoint tracking measures how closely the output follows a changing reference.
- Disturbance rejection measures how well the output is held at the setpoint despite external upsets.
- Reference shaping, such as ramping or filtering, limits overshoot during setpoint changes.
- Cascaded control uses the output of one loop as the setpoint of an inner loop.
- ### Applications
- Thermostats and HVAC systems holding a target temperature.
- Industrial process control maintaining pressure, flow, or level at a target.
- Robotics and motion control commanding joint positions and velocities.
- Cruise control and autopilots tracking a commanded speed or heading.
- ### Relationships
- partOf:: [[Closed-Loop Control]]
- partOf:: [[Feedback Loop]]
- hasPart:: [[Control Theory]]
- uses:: [[Sensor]]
- enables:: [[Disturbance Rejection]]
- enables:: [[Stability]]
- requires:: [[Sensor]]
- requires:: [[Feedback Loop]]
- supports:: [[PID Controller]]
- supports:: [[Process Control]]
- implements:: [[Control Theory]]
- dependsOn:: [[Control Loop]]
- relatedTo:: [[Actuator]]
- relatedTo:: [[PID Control]]
- relatedTo:: [[Trajectory]]
- contrastsWith:: [[Disturbance Rejection]]
- bridgesTo:: [[Industrial Automation]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
