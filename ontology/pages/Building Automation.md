public:: true

# Building Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:building-automation",
  "@type": "Page",
  "vc:slug": "building-automation",
  "title": "Building Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:building-automation",
  "@type": "Class",
  "label": "Building Automation",
  "definition": "Building Automation refers to the centralised monitoring and control of a building's mechanical, electrical, and environmental systems — including heating, ventilation, air conditioning, lighting, access control, and fire safety — through networked sensor-actuator architectures and programmable control logic. It aims to optimise occupant comfort, reduce energy consumption, and enable remote facility management via integrated software platforms.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:industrial-automation", "label": "IndustrialAutomation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:actuators", "label": "Actuators"},
      {"@id": "urn:ngm:class:zigbee", "label": "Zigbee"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:energy-management", "label": "Energy Management"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [{"@id": "urn:ngm:class:access-control-system", "label": "Access Control System"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Building Automation]] encompasses the network of hardware and software that automatically controls a building's operational systems. It integrates sensors, [[Actuators]], and control panels — often communicating via protocols such as BACnet, KNX, or [[Zigbee]] — into a unified Building Management System (BMS) or Building Automation and Control Network (BACnet). The goal is to maintain optimal environmental conditions, maximise [[Energy Management]] efficiency, and provide operators with real-time visibility into facility status through [[Embedded Systems]]-based controllers and cloud-connected dashboards.

- ### Relationships
  - Building Automation draws on [[Actuators]] and [[Embedded Systems]] to implement physical control actions, and leverages wireless mesh protocols such as [[Zigbee]] for sensor networking. It directly enables [[Energy Management]] by dynamically adjusting HVAC and lighting schedules to occupancy patterns. Modern deployments increasingly integrate [[Digital Twin]] representations of the physical building to support predictive maintenance and scenario modelling. [[Access Control System]] integration connects logical identity management to physical entry points within the same supervisory layer.

- ### Content
  - Building automation emerged in the 1970s as centralised pneumatic and analogue control systems gave way to direct digital control (DDC). Early deployments were bespoke, proprietary, and confined to large commercial buildings. The introduction of the BACnet open protocol standard in 1995 and KNX in Europe provided vendor-neutral interoperability layers, enabling multi-vendor system integration and fuelling wider adoption across commercial, industrial, and institutional buildings. By the 2000s, IP-connected controllers had become the norm, enabling web-based supervisory control and data acquisition (SCADA) interfaces.

  - Technically, a building automation system comprises field-level devices (sensors measuring temperature, CO₂, occupancy, and luminance; actuators operating dampers, valves, and relay switches), a controller layer running ladder logic or function block programmes (conforming to IEC 61131-3), and a supervisory layer providing operator dashboards, alarm management, and data historian functions. Communication occurs over fieldbus networks (BACnet MS/TP, KNX TP) or Ethernet/IP backbones, with edge gateways bridging legacy subsystems to IP infrastructure.

  - The ecosystem spans HVAC, lighting, power metering, access control, fire detection, and increasingly EV charging and façade shading. Major platform vendors — Siemens Desigo, Honeywell Enterprise Buildings Integrator, Johnson Controls Metasys — compete with open-source options such as OpenHAB and Home Assistant at the lower end. Integrators combine these with BEMS (Building Energy Management System) analytics software to produce key performance indicators on energy intensity per square metre and carbon emissions.

  - From 2024 onwards, building automation is being reshaped by the convergence of IoT, AI-driven predictive control, and sustainability regulation. The EU Energy Performance of Buildings Directive mandates Smart Readiness Indicators (SRI) ratings for new and renovated buildings, directly incentivising automation investment. AI models are being deployed for HVAC predictive optimisation, reducing energy use by 15–30% compared to rule-based setpoints. Digital twin integration, edge AI controllers, and cybersecurity hardening (aligned with IEC 62443) represent the frontier of current development.

