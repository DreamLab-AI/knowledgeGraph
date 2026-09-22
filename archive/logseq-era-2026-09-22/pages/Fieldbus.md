public:: true

# Fieldbus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d4d0fe1ed5bd1a8abe930c280f27ab6e37120333992e649cbd12528169dfcc4",
  "@type": "Page",
  "vc:slug": "fieldbus",
  "title": "Fieldbus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:communication-protocol", "vc:label": "Communication Protocol"},
    {"@id": "urn:visionflow:linked:industrial-automation", "vc:label": "IndustrialAutomation"},
    {"@id": "urn:visionflow:linked:industrial-ethernet", "vc:label": "Industrial Ethernet"},
    {"@id": "urn:visionflow:linked:can-bus", "vc:label": "CAN Bus"},
    {"@id": "urn:visionflow:linked:programmable-logic-controller", "vc:label": "Programmable Logic Controller"},
    {"@id": "urn:visionflow:linked:scada", "vc:label": "SCADA"},
    {"@id": "urn:visionflow:linked:time-sensitive-networking", "vc:label": "Time-Sensitive Networking"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fieldbus",
  "@type": "Class",
  "label": "Fieldbus",
  "definition": "Fieldbus is the family of digital, serial, multi-drop communication protocols — standardised in IEC 61158 and including PROFIBUS, FOUNDATION Fieldbus, Modbus, CAN-based networks, and DeviceNet — that connect field devices such as sensors, actuators, and drives to programmable logic controllers and distributed control systems. Introduced from the mid-1980s to replace point-to-point 4–20 mA and RS-232 wiring, a single shared cable carries deterministic cyclic process data and device diagnostics, cutting cabling cost and enabling intelligent field instruments.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:communication-protocol",
    "label": "Communication Protocol"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:industrial-automation", "label": "Industrial Automation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:industrial-ethernet", "label": "Industrial Ethernet"},
      {"@id": "urn:ngm:class:time-sensitive-networking", "label": "Time-Sensitive Networking"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:can-bus", "label": "CAN Bus"},
      {"@id": "urn:ngm:class:programmable-logic-controller", "label": "Programmable Logic Controller"},
      {"@id": "urn:ngm:class:scada", "label": "SCADA"}
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
  - "Fieldbus is the family of digital, serial, multi-drop communication protocols — standardised in IEC 61158 and including PROFIBUS, FOUNDATION Fieldbus, Modbus, CAN-based networks, and DeviceNet — that connect field devices such as sensors, actuators, and drives to programmable logic controllers and distributed control systems. Introduced from the mid-1980s to replace point-to-point 4–20 mA and RS-232 wiring, a single shared cable carries deterministic cyclic process data and device diagnostics, cutting cabling cost and enabling intelligent field instruments."

- ### Semantic Classification
  - owl-class:: infrastructure:Fieldbus
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - part-of:: [[IndustrialAutomation]]
  - contrasts-with:: [[Industrial Ethernet]]
  - related-to:: [[CAN Bus]]

- ### Content

  ## Definition

  **Fieldbus** names the generation of industrial networks that digitalised the "field level" — the lowest tier of the automation pyramid, where sensors, actuators, valves, and drives meet controllers. Before fieldbus, every instrument ran its own analogue 4–20 mA current loop or serial line back to the control cabinet; a plant with thousands of I/O points carried correspondingly enormous cable trays, marshalling panels, and commissioning effort. A fieldbus replaces this with a shared digital party line: devices sit as addressable nodes on one twisted-pair (or fibre) segment, exchanging cyclic process values and acyclic diagnostics with a [[Programmable Logic Controller]] or DCS master, which in turn feeds supervisory [[SCADA]] layers.

  "Fieldbus" is a family, not a protocol. The IEC 61158/61784 standards — the famously contentious outcome of the 1990s "fieldbus wars" — codify multiple incompatible profiles rather than one winner: PROFIBUS DP/PA (dominant in European factory and process automation), FOUNDATION Fieldbus H1 (process industries, with control-in-the-field capability), Modbus RTU (the minimal, ubiquitous survivor), INTERBUS, CC-Link, and the [[CAN Bus]]-based application layers DeviceNet and CANopen. They differ in medium access (token passing, master–slave polling, producer–consumer), speed (31.25 kbit/s for intrinsically safe process segments up to 12 Mbit/s PROFIBUS DP), and topology, but share the defining properties: deterministic cyclic exchange sized in bytes, multi-drop wiring, rugged connectors, and — in process variants — bus-powered, intrinsically safe operation for hazardous areas.

  The pattern of adoption made fieldbus one of the quiet infrastructure successes of the 1990s–2000s: tens of millions of installed nodes, wiring savings of 40% and more over point-to-point, and device-level diagnostics that shifted maintenance from reactive to condition-based. Its structural limits are equally clear — kilobyte-scale payloads, segment-level bandwidth shared among all nodes, vendor-specific engineering tools, and gateways required to bridge islands of differing protocols.

  ## Current Landscape

  Fieldbus is now the legacy tier in a transition it started. [[Industrial Ethernet]] variants (PROFINET, EtherNet/IP, EtherCAT) overtook classic fieldbus in new node shipments around 2018, offering higher bandwidth, larger address spaces, and IT/OT convergence, with [[Time-Sensitive Networking]] standardising the determinism that fieldbuses provided by construction. Yet the installed base is vast and long-lived: process plants run on 15–30 year lifecycles, PROFIBUS PA and FOUNDATION Fieldbus segments remain in active service, and Modbus refuses to die at the edges of almost every industry. Migration paths — Ethernet-APL (two-wire, hazardous-area Ethernet for process instruments), proxy gateways mapping PROFIBUS into PROFINET, and OPC UA aggregation — are designed to absorb fieldbus installations gradually rather than replace them wholesale, so the technology will remain operationally relevant well into the 2030s.

  Recent market data confirm the accelerating decline in new installations:

  - **HMS Networks' 2026 industrial network market report** (June 2026) puts fieldbus at **14% of newly installed nodes**, down from 17% in 2025 and 22% in 2024, while Industrial Ethernet reached 79% (from 34% when HMS began the series in 2015); wireless holds ~7%.
  - Within the fieldbus remainder: PROFIBUS is still the largest at 4% (down from 5%), Modbus RTU holds steady at 3% as the universal low-cost serial protocol, and CC-Link, DeviceNet, and CAN/CANopen each sit in the 1–2% band.
  - PROFIBUS & PROFINET International's own figures show PROFIBUS new-node installations falling from 1.1 million (2024) to 1.0 million (2025), a 9% year-on-year decline.
  - On the Ethernet side, PROFINET leads at 30%, EtherNet/IP 25%, EtherCAT 20% of new nodes (2026 report); **Ethernet-APL and Single Pair Ethernet are gaining clear momentum** for process and sensor-level connectivity — e.g. ABB and China's ITEI opened a Beijing laboratory in April 2025 to standardise Ethernet-APL + PROFINET for Chinese process industries.
  - HMS forecasts ~7.7% average annual growth in newly installed nodes over the next five years, much of it from migration of the remaining fieldbus installed base.

  **Sources**:
  - https://industrialethernet.net/news/tech-updates/2026-industrial-network-market-shares-annual-report-by-hms-networks/
  - https://www.hms-networks.com/network-report
  - https://www.precedenceresearch.com/industrial-ethernet-market
