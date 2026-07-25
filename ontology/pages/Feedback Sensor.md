public:: true

# Feedback Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:feedback-sensor",
  "@type": "Page",
  "vc:slug": "feedback-sensor",
  "title": "Feedback Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feedback-sensor",
  "@type": "Class",
  "label": "Feedback Sensor",
  "definition": "A feedback sensor is a transducer that measures the actual state of an actuator or controlled system, such as position, velocity, force, or current, and reports it back to a controller to close the control loop. By comparing the measured value with the commanded reference, the controller can correct errors and reject disturbances. Encoders, resolvers, tachometers, and load cells are common feedback sensors in servo and motion-control systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:dc-servo-motor", "label": "DC Servo Motor"},
      {"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A feedback sensor measures an actuator's actual state and returns it to the controller to close the loop, which is why a [[DC Servo Motor]] and a [[Hydraulic Actuator]] require one for precise control. It is a specialised kind of [[Sensor]].
- ### Content
  - Feedback sensors supply the measured variable in closed-loop control, enabling proportional-integral-derivative and more advanced controllers to drive error toward zero despite load changes and disturbances. Sensor resolution, bandwidth, and noise directly bound achievable control accuracy and stability, so encoder counts, sampling rates, and signal conditioning are critical design parameters in servo and hydraulic actuation systems.
