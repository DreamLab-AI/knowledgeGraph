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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  Industrial Ethernet passed classic fieldbus in new node share around 2018 and its dominance keeps deepening: HMS Networks' 2026 Industrial Network Market Shares analysis (published June 2026) puts Industrial Ethernet at 79% of newly installed nodes worldwide, up from 76% in the 2025 study and just 34% when HMS began publishing the series in 2015. Within Ethernet, PROFINET strengthened its lead at 30% of the total wired market (up from 27%), EtherNet/IP followed at 25%, and EtherCAT continued its climb to 20%, with Modbus TCP at 5% and CC-Link IE at 3%; POWERLINK fell to 1%. Fieldbus dropped to 14% of new nodes (from 17%), with PROFIBUS new-node installations declining about 9% year on year to roughly 1.0 million in 2025.

  The next convergence wave is [[Time-Sensitive Networking]]: a set of IEEE 802.1 standards (time synchronisation, scheduled traffic, frame pre-emption, per-stream policing) that put determinism into standard Ethernet silicon itself, promising a single vendor-neutral real-time layer beneath PROFINET over TSN, CC-Link IE TSN — already the first industrial protocol shipping TSN mechanisms, with a strong foothold in Asia — and OPC UA Pub/Sub. Complementary developments include gigabit device connectivity, Single Pair Ethernet and Ethernet-APL (Advanced Physical Layer) extending Ethernet to two-wire field instruments in hazardous process areas — both seeing strong European activity in 2025–2026 — and 5G/Wi-Fi 6 integration for mobile equipment, with wireless holding around 7% of new nodes. Together these aim at one continuous, deterministic network from sensor to cloud.

  **Sources**:
  - https://www.hms-networks.com/network-report
  - https://industrialethernet.net/news/tech-updates/2026-industrial-network-market-shares-annual-report-by-hms-networks/
  - https://www.hms-networks.com/tech-blog/blogpost/hms-blog/2025/07/10/how-much-are-you-losing-on-industrial-networks
