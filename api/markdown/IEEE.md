public:: true

# IEEE
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ieee",
  "@type": "Page",
  "vc:slug": "ieee",
  "title": "IEEE",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ieee",
  "@type": "Class",
  "label": "IEEE",
  "definition": "The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organisation, comprising over 400,000 members across 160 countries, and the primary body responsible for developing and maintaining technical standards in electrical engineering, electronics, telecommunications, computer science, and related disciplines. IEEE standards govern wireless networking (IEEE 802.11), Ethernet (IEEE 802.3), time-sensitive networking, and hundreds of other foundational technologies.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"},
    {"@id": "urn:ngm:class:standardization-bodies", "label": "Standardization Bodies"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:technical-standards", "label": "Technical Standards"},
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:ieee-802-11", "label": "IEEE 802.11"},
      {"@id": "urn:ngm:class:ieee-802-3", "label": "IEEE 802.3"},
      {"@id": "urn:ngm:class:ieee-802-15-4", "label": "IEEE 802.15.4"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ietf", "label": "IETF"},
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[IEEE]] (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organisation and primary [[Standards Body]] for electrical and electronic engineering, producing [[Technical Standards]] that define [[IEEE 802.11]] Wi-Fi, [[IEEE 802.3]] Ethernet, [[IEEE 802.15.4]] for low-power wireless, and hundreds of other foundational infrastructure specifications.

- ### Relationships
  - IEEE develops [[Technical Standards]] and [[Interoperability Standard]] specifications through working groups, maintains related bodies including [[IEEE 802.11]], [[IEEE 802.3]], and [[IEEE 802.15.4]], and operates alongside [[IETF]] and other international bodies to produce [[Open Standard]] infrastructure that underpins global connectivity.

- ### Content
  - IEEE was formed in 1963 through the merger of the American Institute of Electrical Engineers (AIEE, founded 1884) and the Institute of Radio Engineers (IRE, founded 1912). The organisation's standards development activities accelerated through the 1970s–1980s as computing and networking demanded interoperability specifications. The IEEE 802 committee, established in 1980, has produced the most consequential standards: IEEE 802.3 (Ethernet, 1983), IEEE 802.11 (Wi-Fi, 1997 onwards), IEEE 802.15.4 (low-power wireless, 2003), and IEEE 802.1Q (VLAN tagging). IEEE 754 (floating-point arithmetic, 1985) is foundational to all modern computing.
  - IEEE standards are developed by volunteer working groups following a consensus-based process governed by IEEE's Standards Association (IEEE SA). Participants include academic researchers, industry engineers, and government representatives. Standards progress through draft, ballot, and approval stages, with mandatory reconsideration and appeals processes. IEEE maintains over 1,300 active standards covering power systems, autonomous systems, AI ethics (IEEE 7000 series), cybersecurity, and quantum computing alongside the foundational networking and electrical standards. The IEEE Xplore digital library hosts over 5 million technical documents.
  - IEEE standards have direct economic impact at global scale. IEEE 802.11 Wi-Fi standards enable a market worth over $2 trillion annually; IEEE 802.3 Ethernet connects data centres and enterprise infrastructure worldwide. In the IoT and smart device space, IEEE 802.15.4 underlies Zigbee and Thread (used in Matter-protocol devices). IEEE 1588 (Precision Time Protocol) synchronises clocks in financial markets, power grids, and 5G networks to sub-microsecond accuracy. The IEEE 7000 series on ethically aligned AI system design is influencing AI governance frameworks globally.
  - As of 2024–2025, IEEE's most active standardisation fronts include IEEE 802.11be (Wi-Fi 7, finalised 2024—multi-link operation, 320 MHz channels, 46 Gbps theoretical throughput), IEEE 802.3dj (200G/400G Ethernet for data centres), IEEE 802.1Qbv/Qcc Time-Sensitive Networking for industrial and automotive applications, and the P3119 standard for post-quantum cryptography integration. IEEE is also developing standards for AI system transparency (P7001), autonomous vehicle safety (P2846), and neural interface devices (P2731), reflecting its expansion beyond traditional electrical engineering into AI and biotechnology domains.

