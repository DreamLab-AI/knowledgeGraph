public:: true

# Fluid Power Device
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fluid-power-device",
  "@type": "Page",
  "vc:slug": "fluid-power-device",
  "title": "Fluid Power Device",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fluid-power-device",
  "@type": "Class",
  "label": "Fluid Power Device",
  "definition": "A fluid power device is a component that transmits or controls power through a pressurised fluid, either an incompressible liquid (hydraulic) or a compressible gas (pneumatic). Such devices convert fluid pressure and flow into mechanical motion and force, or regulate that flow, and include actuators, valves, pumps, and compressors. They are valued in robotics and industrial automation for high force-to-weight ratios and robust operation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:pneumatic-actuator", "label": "Pneumatic Actuator"},
      {"@id": "urn:ngm:class:proportional-valve", "label": "Proportional Valve"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A fluid power device transmits or regulates power through pressurised liquid or gas, serving as the parent category for components such as a [[Pneumatic Actuator]] and a [[Proportional Valve]]. It belongs to robotic actuation and control.
- ### Content
  - Hydraulic devices use near-incompressible fluid to deliver large, precise forces, while pneumatic devices use compressed air for fast, compliant motion at lower force. Across both, fluid power systems combine power sources (pumps or compressors), control elements (valves), and actuators (cylinders or motors), trading mechanical robustness and high power density against efficiency losses, leakage, and the need for fluid conditioning.
