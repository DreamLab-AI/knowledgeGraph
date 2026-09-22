public:: true

# Servo Valve
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:servo-valve",
  "@type": "Page",
  "vc:slug": "servo-valve",
  "title": "Servo Valve",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:servo-valve",
  "@type": "Class",
  "label": "Servo Valve",
  "definition": "A servo valve is an electrohydraulic device that proportionally controls the flow and pressure of hydraulic fluid in response to a low-power electrical command, typically via a torque-motor-driven pilot stage. It provides high-bandwidth, closed-loop modulation of hydraulic actuators, delivering large forces with precise position control. It is a key element of high-power robotic and aerospace actuation systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"}, {"@id": "urn:ngm:class:proportional-valve", "label": "Proportional Valve"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A servo valve is an electrohydraulic valve that proportionally meters hydraulic flow from a small electrical command, usually through a torque-motor pilot stage. It is a part of a [[Hydraulic Actuator]] and is closely related to the [[Proportional Valve]].
- ### Content
  - Two-stage flapper-nozzle and jet-pipe designs achieve high bandwidth and fine resolution, enabling hydraulic systems to match the controllability of electric drives while delivering far greater force density. They demand clean fluid and precise manufacturing, making them costly but indispensable for heavy-duty legged and industrial robots.
