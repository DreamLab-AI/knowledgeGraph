public:: true

# Industrial Ethernet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f105b574fd446e43fad8cce2a2aee17c68d866eb84561f4ed8fce6affdcc483b",
  "@type": "Page",
  "vc:slug": "industrial-ethernet",
  "title": "Industrial Ethernet",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:ethernet", "vc:label": "Ethernet"},
    {"@id": "urn:visionflow:linked:industrial-automation", "vc:label": "IndustrialAutomation"},
    {"@id": "urn:visionflow:linked:profinet", "vc:label": "Profinet"},
    {"@id": "urn:visionflow:linked:fieldbus", "vc:label": "Fieldbus"},
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
  "@id": "urn:ngm:class:industrial-ethernet",
  "@type": "Class",
  "label": "Industrial Ethernet",
  "definition": "Industrial Ethernet is the adaptation of standard IEEE 802.3 Ethernet for factory-floor and process control: ruggedised hardware combined with real-time protocol extensions — PROFINET, EtherNet/IP, EtherCAT, POWERLINK, Modbus TCP — that add the determinism, cyclic exchange, and device profiles plain Ethernet lacks. It delivers 100 Mbit/s and gigabit speeds, cycle times down to tens of microseconds in hard-real-time variants, and seamless connectivity between automation devices and IT systems, and has overtaken classic fieldbus as the dominant networking technology in new industrial installations.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:ethernet",
    "label": "Ethernet"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:profinet", "label": "PROFINET"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:industrial-automation", "label": "Industrial Automation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fieldbus", "label": "Fieldbus"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:time-sensitive-networking", "label": "Time-Sensitive Networking"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Industrial Ethernet is the adaptation of standard IEEE 802.3 Ethernet for factory-floor and process control: ruggedised hardware combined with real-time protocol extensions — PROFINET, EtherNet/IP, EtherCAT, POWERLINK, Modbus TCP — that add the determinism, cyclic exchange, and device profiles plain Ethernet lacks. It delivers 100 Mbit/s and gigabit speeds, cycle times down to tens of microseconds in hard-real-time variants, and seamless connectivity between automation devices and IT systems, and has overtaken classic fieldbus as the dominant networking technology in new industrial installations."

- ### Semantic Classification
  - owl-class:: infrastructure:IndustrialEthernet
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Ethernet]]
  - has-part:: [[Profinet]]
  - part-of:: [[IndustrialAutomation]]
  - contrasts-with:: [[Fieldbus]]

- ### Content

  ## Definition

  **Industrial Ethernet** brings the ubiquitous [[Ethernet]] standard onto the factory floor, where office-grade networking fails on two counts: environment and timing. Environmentally, industrial variants specify extended temperature ranges, vibration- and EMI-tolerant hardware, IP65/67-rated M12 connectors, DIN-rail switches, and redundancy protocols (MRP, DLR, PRP/HSR) that recover from link failure in milliseconds. On timing, standard switched Ethernet is best-effort — queuing makes latency unbounded — so each industrial protocol adds a determinism mechanism on top of, or beside, the TCP/IP stack to guarantee that cyclic control data arrives on schedule.

  The market divides into a handful of ecosystems. [[Profinet]] (Siemens/PI) offers three conformance classes, from TCP/IP-based communication through the hard-real-time IRT variant with scheduled transmission; EtherNet/IP (Rockwell/ODVA) runs the CIP object model over standard TCP/UDP with CIP Sync and CIP Motion for time-critical traffic; EtherCAT (Beckhoff) achieves microsecond-class cycles by processing frames on the fly as they pass through each slave device; POWERLINK and SERCOS III serve motion-control niches; and Modbus TCP provides the lowest-friction bridge from serial legacy. All shipped as mutually incompatible real-time layers — repeating the [[Fieldbus]] fragmentation one level up — but they share cabling, switches, and diagnostic tooling with the IT world, which is precisely their advantage.

  That shared substrate is what makes Industrial Ethernet the backbone of IT/OT convergence and Industry 4.0 architectures: the same network that carries deterministic I/O between a PLC and its drives also carries device webservers, OPC UA telemetry to MES and cloud analytics, and firmware updates — collapsing the gateway-riddled automation pyramid into flatter, routable networks. The cost of convergence is exposure: connecting control networks to enterprise networks imports the IT threat model, making segmentation, IEC 62443 zone-and-conduit design, and OT-aware monitoring standard practice.

  ## Current Landscape

  Industrial Ethernet passed classic fieldbus in new node share around 2018 and now accounts for roughly three-quarters of new installations (HMS market data), with PROFINET and EtherNet/IP each holding around a quarter of the total and EtherCAT strong in high-performance motion. The next convergence wave is [[Time-Sensitive Networking]]: a set of IEEE 802.1 standards (time synchronisation, scheduled traffic, frame pre-emption, per-stream policing) that put determinism into standard Ethernet silicon itself, promising a single vendor-neutral real-time layer beneath PROFINET over TSN, CC-Link IE TSN, and OPC UA Pub/Sub. Complementary developments include gigabit device connectivity, Single Pair Ethernet and Ethernet-APL extending Ethernet to two-wire field instruments in hazardous process areas, and 5G/Wi-Fi 6 integration for mobile equipment — together aimed at one continuous, deterministic network from sensor to cloud.
