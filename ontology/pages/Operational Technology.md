public:: true

# Operational Technology

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:operational-technology", "@type":"Page", "title":"Operational Technology", "vc:slug":"operational-technology", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:operational-technology",
  "@type":"Class",
  "label":"Operational Technology",
  "definition":"Operational technology (OT) is the hardware and software that directly monitors and controls physical processes, devices, and infrastructure in industrial environments. It encompasses industrial control systems such as SCADA and distributed control systems, programmable logic controllers, sensors, and actuators that manage manufacturing, energy, and utilities. OT prioritises availability, safety, and real-time determinism, distinguishing it from information technology, with which it increasingly converges under Industry 4.0.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:scada","label":"SCADA"},{"@id":"urn:ngm:class:process-control","label":"Process Control"}],
    "uses":[{"@id":"urn:ngm:class:opc-ua","label":"OPC UA"},{"@id":"urn:ngm:class:telemetry","label":"Telemetry"}],
    "requires":[{"@id":"urn:ngm:class:safety","label":"Safety"},{"@id":"urn:ngm:class:iec-62443","label":"IEC 62443"}],
    "supports":[{"@id":"urn:ngm:class:industrial-automation","label":"Industrial Automation"},{"@id":"urn:ngm:class:predictive-maintenance","label":"Predictive Maintenance"}],
    "enables":[{"@id":"urn:ngm:class:automation","label":"Automation"}],
    "standardizedBy":[{"@id":"urn:ngm:class:iec-62443","label":"IEC 62443"}],
    "bridgesTo":[{"@id":"urn:ngm:class:industry-4-0","label":"Industry 4.0"},{"@id":"urn:ngm:class:cyber-physical-systems","label":"Cyber-Physical Systems"}],
    "contrastsWith":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "relatedTo":[{"@id":"urn:ngm:class:digital-twin","label":"Digital Twin"},{"@id":"urn:ngm:class:embedded-systems","label":"Embedded Systems"},{"@id":"urn:ngm:class:resilience","label":"Resilience"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- **Operational Technology** (OT) is the [[Infrastructure]] of hardware and software that monitors and controls physical processes in industrial settings.
- It includes [[SCADA]], distributed control systems, and [[Process Control]] devices that run manufacturing, energy, and utility operations.
- It prioritises [[Safety]], availability, and real-time determinism, distinguishing it from information technology.
- ### Overview
- OT is the layer where computation meets the physical world: it reads sensors, executes control logic, and drives actuators that move valves, motors, and production lines.
- Historically OT systems were isolated, long-lived, and engineered for continuous uptime, so their design assumptions differ sharply from fast-changing IT systems.
- The convergence of OT and IT — driven by [[Industry 4.0]], the Industrial Internet of Things, and analytics — exposes formerly air-gapped equipment to networked threats, making OT security and standards such as [[IEC 62443]] critical.
- Because failures can cause physical harm, OT engineering emphasises functional safety, deterministic timing, and fail-safe behaviour over the confidentiality-first posture typical of IT.
- ### Key aspects
- Control hierarchy: from field devices up through supervisory [[SCADA]] and process control.
- Real-time determinism: bounded latency for safe, predictable actuation.
- Safety and availability: continuous operation and fail-safe design dominate priorities.
- Industrial protocols: communication via [[OPC UA]], fieldbuses, and [[Telemetry]] links.
- Long lifecycles: equipment runs for decades, complicating patching and modernisation.
- ### Applications
- Manufacturing lines and [[Industrial Automation]] cells.
- Power generation, grid, water, and utility control.
- Oil, gas, and chemical [[Process Control]].
- [[Predictive Maintenance]] and [[Digital Twin]] integration for asset health.
- ### Relationships
- hasPart:: [[SCADA]]
- hasPart:: [[Process Control]]
- uses:: [[OPC UA]]
- uses:: [[Telemetry]]
- requires:: [[Safety]]
- requires:: [[IEC 62443]]
- supports:: [[Industrial Automation]]
- supports:: [[Predictive Maintenance]]
- enables:: [[Automation]]
- standardizedBy:: [[IEC 62443]]
- bridgesTo:: [[Industry 4.0]]
- bridgesTo:: [[Cyber-Physical Systems]]
- contrastsWith:: [[Cloud Computing]]
- relatedTo:: [[Digital Twin]]
- relatedTo:: [[Embedded Systems]]
- relatedTo:: [[Resilience]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
