public:: true

# Control Signal
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:control-signal",
  "@type": "Page",
  "vc:slug": "control-signal",
  "title": "Control Signal",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-signal",
  "@type": "Class",
  "label": "Control Signal",
  "definition": "A control signal is the command output computed by a controller and applied to actuate or steer a system toward a desired state. In robotics and electromechanical contexts it is the voltage, current, or set-point delivered to an actuator; in generative pipelines it is the spatial conditioning input that guides synthesis. In both senses it is the carrier of intent between a decision process and the system it drives.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:electric-actuator", "label": "Electric Actuator"}, {"@id": "urn:ngm:class:control-net-and-similar-spatial-conditioning-systems", "label": "ControlNet and Similar Spatial Conditioning Systems"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A control signal is the command a controller applies to a system, for example the drive command sent to an [[Electric Actuator]] or the conditioning input used by [[ControlNet and Similar Spatial Conditioning Systems]].
- ### Content
  - In electromechanical control the signal is conditioned, amplified, and converted into actuator force or motion, with bandwidth and noise determining achievable performance. The term generalises to any directive input that steers a process toward a target output.
