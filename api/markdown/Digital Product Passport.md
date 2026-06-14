public:: true

# digital product passport
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5a43539d5dd0110bff5d6567c737d8d4fb75d2cabcae1be96ef076da6201017d",
  "@type": "Page",
  "vc:slug": "digital-product-passport",
  "title": "digital product passport",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-product-passport",
  "@type": "Class",
  "label": "Digital Product Passport",
  "definition": "A Digital Product Passport (DPP) is a standardised, machine-readable digital record that captures and communicates authoritative information about a product's material composition, manufacturing origin, environmental footprint, repair history, and end-of-life options throughout its full lifecycle. Mandated across product categories by the EU Ecodesign for Sustainable Products Regulation (ESPR) and related instruments such as the EU Battery Regulation, DPPs are accessible to consumers, regulators, recyclers, and supply chain actors via data carriers such as QR codes, NFC tags, or RFID. They serve as a foundational infrastructure of circular economy policy by enabling traceability, transparency, and interoperability across complex global supply chains. DPPs are frequently implemented atop distributed ledger or verifiable credential technologies to ensure provenance integrity and tamper-evident audit trails.",
  "domain": "supply-chain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:product-lifecycle-management",
      "label": "Product Lifecycle Management"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:circular-economy", "label": "Circular Economy"},
      {"@id": "urn:ngm:class:supply-chain-traceability", "label": "Supply Chain Traceability"},
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:right-to-repair", "label": "Right to Repair"},
      {"@id": "urn:ngm:class:extended-producer-responsibility", "label": "Extended Producer Responsibility"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"},
      {"@id": "urn:ngm:class:qr-code", "label": "QR Code"},
      {"@id": "urn:ngm:class:rfid", "label": "RFID"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-interoperability", "label": "Data Interoperability"},
      {"@id": "urn:ngm:class:unique-product-identifier", "label": "Unique Product Identifier"},
      {"@id": "urn:ngm:class:open-data-standard", "label": "Open Data Standard"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"},
      {"@id": "urn:ngm:class:iot-sensor", "label": "IoT Sensor"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:gs1-standards", "label": "GS1 Standards"},
      {"@id": "urn:ngm:class:eu-espr", "label": "EU ESPR"},
      {"@id": "urn:ngm:class:iso-iec-standards", "label": "ISO/IEC Standards"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:semantic-web", "label": "Semantic Web"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:paper-based-certification", "label": "Paper-Based Certification"},
      {"@id": "urn:ngm:class:proprietary-product-data-silo", "label": "Proprietary Product Data Silo"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:life-cycle-assessment", "label": "Life Cycle Assessment"},
      {"@id": "urn:ngm:class:carbon-footprint", "label": "Carbon Footprint"},
      {"@id": "urn:ngm:class:eu-battery-regulation", "label": "EU Battery Regulation"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:product-passport", "label": "Product Passport"},
    {"@id": "urn:ngm:class:digital-material-passport", "label": "Digital Material Passport"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **Digital Product Passport** (DPP) is a standardised, machine-readable digital record linked to a specific physical product via a unique identifier such as a [[QR Code]], [[NFC]] tag, or [[RFID]] chip. It captures authoritative data on material composition, manufacturing origin, environmental footprint, repairability, and end-of-life options, making this information available to all actors across the [[Supply Chain]] — including consumers, recyclers, and regulators. DPPs are a central policy instrument of the [[Circular Economy]] agenda, formalised in the EU's [[Ecodesign for Sustainable Products Regulation]] (ESPR) and the [[EU Battery Regulation]], and are increasingly implemented using [[Verifiable Credentials]], [[Decentralised Identifier]]s, and [[Distributed Ledger Technology]] to guarantee data integrity and provenance.

- ### Overview
  - The DPP concept emerged from recognition that products circulating in global markets carry sustainability-relevant information that is either invisible to downstream actors or locked in proprietary systems. Regulators, recyclers, and consumers have no reliable way to verify claims about material content, repairability, or carbon impact without a common, trusted data layer attached to each product.
  - The EU's **Ecodesign for Sustainable Products Regulation** (ESPR, adopted 2024) establishes a legal mandate for DPPs across a widening range of product categories — starting with batteries and textiles but expanding to electronics, furniture, construction materials, and more. The regulation defines minimum data requirements, interoperability obligations, and access rights for different actor types.
  - Key policy goals served by DPPs:
    - Enabling [[Right to Repair]] by surfacing spare-part availability, repair manuals, and disassembly instructions
    - Supporting [[Extended Producer Responsibility]] schemes with auditable product lifecycle data
    - Facilitating [[Life Cycle Assessment]] at industrial scale by automating data collection
    - Reducing greenwashing by making sustainability claims machine-verifiable
    - Accelerating resource recovery at end-of-life by informing recyclers of material composition and hazardous substance content

- ### Key Components
  - **Unique Product Identifier** — a serialised, globally unique code (e.g. GS1 GTIN, EPCIS event identifier, or W3C DID) that links a physical item to its digital record without ambiguity
  - **Data Carrier** — the physical mechanism that encodes the identifier on or in the product: [[QR Code]], [[NFC]] chip, [[RFID]] tag, or laser-etched data matrix
  - **Product Record** — the structured digital dataset, often expressed as a JSON-LD or [[Semantic Web]] document, containing:
    - Material composition (including restricted and hazardous substances, e.g. SVHC under REACH)
    - [[Carbon Footprint]] and other environmental indicators from the [[Life Cycle Assessment]]
    - Manufacturing location, date, and batch/lot identifiers
    - Repair and maintenance history; spare-part catalogue links
    - Warranty and compliance documentation
    - End-of-life instructions (disassembly, recyclability ratings, material recovery pathways)
  - **Data Storage and Access Layer** — an API-accessible registry or distributed storage system from which the record can be retrieved. Options range from centralised registries (e.g. managed by brand owners or national authorities) to decentralised solutions using [[Blockchain]] or [[Distributed Ledger Technology]]
  - **Trust and Integrity Layer** — cryptographic mechanisms ensuring the record has not been tampered with, including [[Verifiable Credentials]] and [[Decentralised Identifier]]s following W3C standards, or blockchain-anchored hashes
  - **Access Control Model** — role-based access distinguishing public-facing consumer data from sensitive commercial or B2B data, reflecting the tiered data model in ESPR guidance
  - **Interoperability Framework** — compliance with shared data models (e.g. [[GS1 Standards]] EPCIS, FIWARE Smart Data Models, IEC CDD) so that passports issued by different manufacturers can be queried and processed by a common ecosystem of software tools

- ### Mechanisms
  - **Data Lifecycle** — data is populated at manufacture, updated at each custody transfer, augmented during repair or refurbishment, and read at end-of-life. This mirrors the concept of a [[Digital Twin]] at product-instance level, though DPPs are normative records rather than simulation models
  - **Distributed Ledger Anchoring** — [[Blockchain]] or [[Distributed Ledger Technology]] can be used to anchor record hashes or event logs (e.g. EPCIS 2.0 events on-chain) so that any tampering with the off-chain record is detectable. This is the key use case being explored in the EU Battery Passport pilot (CIRPASS-2 project)
  - **Verifiable Credentials** — sustainability claims (e.g. recycled content percentages, carbon intensity) can be issued as W3C [[Verifiable Credentials]] by authorised third parties (testing labs, auditors), enabling selective disclosure and zero-knowledge proof applications
  - **IoT Integration** — [[IoT Sensor]]s on manufacturing lines or logistics assets can populate DPP data fields automatically (e.g. temperature records, batch quality metrics), reducing manual data entry and improving reliability
  - **[[Provenance Tracking]]** — each actor who handles the product appends an authenticated event record, creating an immutable chain of custody visible to downstream verifiers
  - **[[Data Interoperability]]** — standards such as GS1 EPCIS 2.0 (JSON-LD serialisation), IEC 61360 Common Data Dictionary, and the Asset Administration Shell (AAS) from Plattform Industrie 4.0 are candidate technical formats for expressing DPP data in an interoperable way

- ### Applications and Use Cases
  - **Batteries (EU Battery Regulation)** — the most advanced DPP implementation, legally required for industrial, EV, and LMT batteries by 2027. Mandates CO2 intensity of manufacture, recycled content percentages, state-of-health data, and supply-chain due diligence for critical raw materials (cobalt, lithium, nickel)
  - **Textiles and Apparel** — DPPs enabling consumers to verify fibre content, country of manufacture, and environmental claims; supporting second-hand market platforms with authenticated product histories
  - **Electronics and ICT Equipment** — facilitating repair ecosystems by exposing spare-part availability, software update policies, and material recovery pathways under WEEE and right-to-repair legislation
  - **Construction Products** — material passports for buildings recording substance inventories, structural performance data, and deconstruction instructions to enable urban mining
  - **Automotive** — tracking battery packs across EV lifecycles (first use, second life, recycling); integrating with recall management systems
  - **Chemicals and REACH compliance** — providing downstream users with standardised Safety Data Sheet linkage and SVHC (substance of very high concern) declarations in machine-readable form
  - **Luxury and anti-counterfeiting** — brand owners using DPP-like passports to authenticate high-value goods via [[NFC]] or [[Blockchain]]-verified provenance records
  - **[[ESG Reporting]]** — feeding product-level lifecycle data into corporate sustainability disclosures (e.g. CSRD, TCFD-aligned reporting) without manual data aggregation

- ### Relationships
  - enables:: [[Circular Economy]]
  - enables:: [[Supply Chain Traceability]]
  - enables:: [[ESG Reporting]]
  - enables:: [[Right to Repair]]
  - enables:: [[Extended Producer Responsibility]]
  - uses:: [[Provenance Tracking]]
  - uses:: [[Verifiable Credentials]]
  - uses:: [[Decentralised Identifier]]
  - uses:: [[QR Code]]
  - uses:: [[RFID]]
  - requires:: [[Data Interoperability]]
  - requires:: [[Unique Product Identifier]]
  - requires:: [[Open Data Standard]]
  - dependsOn:: [[Supply Chain]]
  - dependsOn:: [[IoT Sensor]]
  - dependsOn:: [[Data Governance]]
  - standardizedBy:: [[GS1 Standards]]
  - standardizedBy:: [[EU ESPR]]
  - standardizedBy:: [[ISO/IEC Standards]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Distributed Ledger Technology]]
  - bridges-to:: [[Semantic Web]]
  - contrastsWith:: [[Paper-Based Certification]]
  - relatedTo:: [[Life Cycle Assessment]]
  - relatedTo:: [[Carbon Footprint]]
  - relatedTo:: [[EU Battery Regulation]]
  - relatedTo:: [[Digital Twin]]

- ### Standards and Regulatory Context
  - **EU Ecodesign for Sustainable Products Regulation (ESPR)** — the primary legislative mandate for DPPs across the EU single market, establishing data requirements, access rights, and interoperability obligations by product category. Delegated acts will progressively extend DPP requirements across 30+ product categories through 2030.
  - **EU Battery Regulation (2023/1542)** — the first sectoral instrument with binding DPP requirements. Specifies data fields, actor access levels, and technical standards for batteries above 2 kWh.
  - **GS1 EPCIS 2.0 / CBV 2.0** — the leading candidate standard for encoding supply-chain events in DPPs. The JSON-LD serialisation of EPCIS 2.0 aligns directly with [[Semantic Web]] and [[Verifiable Credentials]] tooling.
  - **W3C Decentralised Identifiers (DID) v1.0** — provides the identifier substrate for product-level unique IDs that are resolvable without reliance on a single registry.
  - **W3C Verifiable Credentials Data Model** — enables third-party attestations (auditor certifications, test lab results) to be embedded in or linked from DPP records in a cryptographically verifiable way.
  - **IEC 61360 / Common Data Dictionary (CDD)** — a standardised vocabulary for product properties, enabling semantic interoperability between DPP implementations from different manufacturers and sectors.
  - **Asset Administration Shell (AAS)** — the Industry 4.0 / Plattform Industrie 4.0 container format for product data, being harmonised with DPP requirements in the manufacturing sector.
  - **FIWARE Smart Data Models** — open data models for sectors including energy, agrifood, and manufacturing, providing additional interoperability templates for DPP implementations in those verticals.
  - **ISO 14040/14044** — the foundational standards for [[Life Cycle Assessment]] methodology that underpin the environmental impact data carried in DPPs.
  - **CIRPASS and CIRPASS-2 projects** — EU Horizon-funded consortia developing reference implementations and technical specifications for interoperable DPPs across multiple product categories.

- ### Challenges and Limitations
  - **Data quality and completeness** — DPP records are only as trustworthy as the data supplied by upstream actors; small and medium suppliers may lack capacity to provide accurate lifecycle data
  - **Interoperability fragmentation** — multiple competing standards (AAS, EPCIS, FIWARE, bespoke APIs) risk creating passport ecosystems that cannot be queried across sectors or borders
  - **Privacy and commercial confidentiality** — tiered access models must balance public transparency with the protection of trade-secret information (e.g. precise material formulations)
  - **Infrastructure cost** — SMEs in global supply chains face disproportionate compliance burden in implementing the data collection, storage, and API infrastructure required
  - **Counterfeit and tamper risks** — physical data carriers (QR, NFC) can be cloned; DPP integrity depends on robust identity and cryptographic trust mechanisms
  - **Lifecycle data continuity** — maintaining a coherent DPP across a product's full life (manufacturer → retailer → consumer → repair shop → recycler) requires persistent identifiers and incentives for all parties to update the record

- ### Provenance
  - sources:: EU ESPR (Regulation 2024/1781); EU Battery Regulation (2023/1542); GS1 EPCIS 2.0 standard; W3C DID v1.0 and VC Data Model; CIRPASS project deliverables; Plattform Industrie 4.0 Asset Administration Shell specification
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
