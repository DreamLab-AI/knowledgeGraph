public:: true

# Programmable Logic Controller

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:programmable-logic-controller", "@type":"Page", "title":"Programmable Logic Controller", "vc:slug":"programmable-logic-controller", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:programmable-logic-controller",
  "@type":"Class",
  "label":"Programmable Logic Controller",
  "definition":"A programmable logic controller (PLC) is a ruggedised industrial computer designed to control machinery and processes by repeatedly scanning inputs, executing a stored control program, and updating outputs in real time. Built to withstand harsh factory environments, it interfaces with sensors and actuators and is typically programmed in standardised languages such as ladder logic. PLCs are foundational building blocks of industrial automation and supervisory control systems.",
  "domain":"robotics",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:industrial-automation","label":"IndustrialAutomation"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:sensor","label":"Sensor"},
      {"@id":"urn:ngm:class:actuator","label":"Actuator"}
    ],
    "uses":[{"@id":"urn:ngm:class:sensor","label":"Sensor"}],
    "requires":[{"@id":"urn:ngm:class:actuator","label":"Actuator"}],
    "enables":[{"@id":"urn:ngm:class:automation","label":"Automation"}],
    "supports":[{"@id":"urn:ngm:class:scada","label":"SCADA"}],
    "dependsOn":[{"@id":"urn:ngm:class:hardware","label":"Hardware"}],
    "implements":[{"@id":"urn:ngm:class:automation","label":"Automation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:robotics","label":"Robotics"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "controls":[{"@id":"urn:ngm:class:robot","label":"Robot"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:industrial-automation","label":"IndustrialAutomation"},
      {"@id":"urn:ngm:class:scada","label":"SCADA"},
      {"@id":"urn:ngm:class:robot","label":"Robot"},
      {"@id":"urn:ngm:class:automation","label":"Automation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Programmable Logic Controller]] is a ruggedised industrial computer that scans inputs, runs a control program, and drives outputs in real time as part of [[IndustrialAutomation]]. It connects to a [[Sensor]] and an [[Actuator]], enables [[Automation]], and feeds higher-level [[SCADA]] supervision while controlling a [[Robot]] or production machine.
- ### Overview
- A PLC replaces hard-wired relay logic with a reprogrammable processor that executes control logic deterministically.
- It operates on a cyclic scan: read inputs, solve the program, write outputs, then repeat, giving predictable timing.
- Hardened construction tolerates vibration, temperature extremes, electrical noise, and dust on the factory floor.
- Standardised programming languages, including ladder diagram, function block, and structured text, make logic portable and maintainable.
- ### Key aspects
- Scan cycle: deterministic input-solve-output loop underpins real-time control.
- Modular I/O: digital and analogue modules interface to field devices.
- Ladder logic: relay-style notation widely used by control engineers.
- Networking: fieldbus and industrial Ethernet link PLCs to HMIs and SCADA.
- ### Applications
- Sequencing and interlocking of conveyors, presses, and assembly lines.
- Motion and process control for packaging, chemical, and water systems.
- Coordinating robotic cells and material-handling equipment.
- Acting as field controllers reporting to supervisory SCADA platforms.
- ### Relationships
- subClassOf:: [[IndustrialAutomation]]
- hasPart:: [[Sensor]]
- hasPart:: [[Actuator]]
- uses:: [[Sensor]]
- requires:: [[Actuator]]
- enables:: [[Automation]]
- supports:: [[SCADA]]
- dependsOn:: [[Hardware]]
- bridgesTo:: [[Robotics]]
- controls:: [[Robot]]
- relatedTo:: [[SCADA]]
- relatedTo:: [[Robot]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
