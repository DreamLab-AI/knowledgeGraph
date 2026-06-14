public:: true

# RFID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rfid",
  "@type": "Page",
  "vc:slug": "rfid",
  "title": "RFID",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rfid",
  "@type": "Class",
  "label": "RFID",
  "definition": "Radio-Frequency Identification (RFID) is a wireless technology that uses electromagnetic fields to automatically identify and track tags attached to objects. Tags contain electronically stored information and can be read without requiring line of sight, enabling automated data capture across distances from a few centimetres to several metres.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:communication-network", "label": "Communication Network"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rfid-tag", "label": "RFID Tag"},
      {"@id": "urn:ngm:class:rfid-reader", "label": "RFID Reader"},
      {"@id": "urn:ngm:class:rfid-antenna", "label": "RFID Antenna"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:automatic-identification-and-data-capture", "label": "Automatic Identification and Data Capture"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:electromagnetic-spectrum", "label": "Electromagnetic Spectrum"},
      {"@id": "urn:ngm:class:backscatter-communication", "label": "Backscatter Communication"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:food-safety", "label": "Food Safety"},
      {"@id": "urn:ngm:class:pharmaceutical-supply-chain", "label": "Pharmaceutical Supply Chain"},
      {"@id": "urn:ngm:class:inventory-management", "label": "Inventory Management"},
      {"@id": "urn:ngm:class:supply-chain-visibility", "label": "Supply Chain Visibility"},
      {"@id": "urn:ngm:class:asset-tracking", "label": "Asset Tracking"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:communication-infrastructure", "label": "Communication Infrastructure"},
      {"@id": "urn:ngm:class:ultra-high-frequency-radio", "label": "Ultra-High Frequency Radio"},
      {"@id": "urn:ngm:class:near-field-communication", "label": "Near Field Communication"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-18000", "label": "ISO 18000"},
      {"@id": "urn:ngm:class:gs1-epc", "label": "GS1 EPC"},
      {"@id": "urn:ngm:class:epc-global-gen2", "label": "EPC Global Gen 2"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:barcode", "label": "Barcode"},
      {"@id": "urn:ngm:class:qr-code", "label": "QR Code"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-provenance", "label": "Blockchain Provenance"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:network-communication", "label": "Network Communication"},
      {"@id": "urn:ngm:class:sensor-network", "label": "Sensor Network"},
      {"@id": "urn:ngm:class:logistics", "label": "Logistics"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:radio-frequency-identification", "label": "Radio-Frequency Identification"}
  ],
  "quality": 0.85,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[RFID]] (Radio-Frequency Identification) is a wireless auto-identification technology that uses radio waves to read data from tags affixed to physical objects, enabling contactless, high-throughput identification for [[Network Communication]] and supply chain applications.

- ### Relationships
  - [[RFID]] is a foundational component within [[Communication Network]] infrastructures; it directly enables [[Food Safety]] monitoring and [[Pharmaceutical Supply Chain]] traceability by providing real-time object-level visibility. It operates via [[Communication Infrastructure]] and complements [[Blockchain Provenance]] systems that record its captured events on immutable ledgers.

- ### Content
  - RFID emerged from radar technology developed during World War II. The first true RFID patent was filed by Mario Cardullo in 1973, and Charles Walton patented a passive transponder for door access in the same era. Walmart's mandate in 2003 that top suppliers adopt RFID on pallets and cases triggered mass commercialisation, driving tag costs down from several dollars to under ten cents by the early 2010s. ISO 18000, EPC Global Gen 2 (ISO 18000-6C), and ISO 15693 became dominant interoperability standards.
  - An RFID system consists of three components: a tag (transponder), a reader (interrogator), and backend software. Passive tags harvest energy from the reader's electromagnetic field and reflect a modulated signal back (backscatter communication); they require no internal battery. Active tags carry their own power source and can transmit over tens of metres. Ultra-high frequency (UHF, 860–960 MHz) passive tags dominate retail and logistics; high-frequency (HF, 13.56 MHz) tags are used in access control and NFC-compatible payments; low-frequency (LF, 125–134 kHz) tags are embedded in animals and industrial parts where penetration through liquids and metal is needed.
  - RFID underpins automated inventory management, retail loss prevention, hospital patient tracking, pharmaceutical serialisation under DSCSA regulations, and airport baggage handling. In manufacturing, RFID enables work-in-progress tracking on assembly lines without manual scanning. When combined with blockchain, each tag read event becomes a tamper-evident ledger entry, providing end-to-end provenance. Smart shelves in retail automatically detect product removal and trigger replenishment orders, reducing out-of-stock events by 30–50% in documented deployments.
  - As of 2024–2025, UHF RFID adoption is accelerating in fashion and grocery under GS1 EPC standards, with item-level tagging now standard in major apparel retailers globally. RAIN RFID (the industry alliance for UHF passive RFID) reports billions of tags deployed annually. Emerging challenges include metal and liquid interference, privacy concerns around consumer-facing tagging, and integration with IoT platforms. The convergence of RFID readers with Wi-Fi 6 infrastructure (RAIN RFID over Wi-Fi) is reducing dedicated reader infrastructure costs, while AI-driven anti-collision algorithms increase read accuracy in dense tag environments.
