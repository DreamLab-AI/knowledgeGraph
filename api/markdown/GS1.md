public:: true

# GS1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gs1",
  "@type": "Page",
  "vc:slug": "gs1",
  "title": "GS1",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gs1",
  "@type": "Class",
  "label": "GS1",
  "definition": "GS1 is a global not-for-profit standards organisation that develops and administers an open supply chain standards system used by over two million companies in more than 150 countries. Its standards define globally unique identification schemes for products (GTIN—Global Trade Item Number), locations (GLN), shipments (SSCC), and assets (GIAI), encoded in barcodes (EAN-13, ITF-14), QR codes, and GS1 DataMatrix symbols, and exchanged electronically via EDI and the GS1 Electronic Product Code Information Services (EPCIS) event standard. GS1 standards form the common language of global retail, logistics, healthcare, and food safety traceability systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:supply-chain-traceability", "label": "Supply Chain Traceability"},
      {"@id": "urn:ngm:class:pharmaceutical-traceability", "label": "Pharmaceutical Traceability"},
      {"@id": "urn:ngm:class:supply-chain-visibility", "label": "Supply Chain Visibility"},
      {"@id": "urn:ngm:class:food-safety-blockchain", "label": "Food Safety Blockchain"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:provenance-standard", "label": "Provenance Standard"},
      {"@id": "urn:ngm:class:calibration-standards", "label": "Calibration Standards"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"},
      {"@id": "urn:ngm:class:supply-chain-provenance", "label": "Supply Chain Provenance"},
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"},
      {"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[GS1]] is the global not-for-profit standards body that maintains the worldwide system of unique supply chain identifiers—GTINs, GLNs, SSCCs—encoded in barcodes and digital link standards, enabling interoperable [[Supply Chain Traceability]] and [[Provenance Tracking]] across retail, healthcare, and logistics globally.

- ### Relationships
  - GS1 operates as the governance and stewardship layer for [[Supply Chain Management]] identification. Its standards enable [[Supply Chain Traceability]] across global retail and logistics, support [[Pharmaceutical Traceability]] as mandated by regulations including the US DSCSA and EU FMD, and provide the data foundation for [[Supply Chain Visibility]] platforms. GS1's EPCIS standard is being adopted in [[Food Safety Blockchain]] pilots (IBM Food Trust, Walmart's leafy greens programme) for immutable event recording. GS1 standards rest on [[Provenance Standard]] and [[Calibration Standards]] principles, enabling reliable identification across heterogeneous trading partner systems. The upstream [[Supply Chain]] depends on consistent use of GS1 identifiers for [[Supply Chain Provenance]] and [[Logistics Optimization]].

- ### Content
  - GS1's origins lie in the US grocery industry's need to automate checkout. The Uniform Product Code (UPC) barcode was created in 1973 by a committee including representatives from major grocery manufacturers and retailers, with the first retail scanning of a pack of Wrigley's chewing gum in a Marsh supermarket in Troy, Ohio on 26 June 1974. The parallel European Article Numbering (EAN) system, created in 1977 under the leadership of the European Common Market, was compatible with but extended UPC to 13 digits. The two bodies merged in 2004 as GS1, with GS1 US as a member organisation, creating a single global standards body. Today GS1's governance structure comprises over 115 national GS1 member organisations federated under GS1 global.

  - The GS1 system's core is the identification layer. The GTIN (Global Trade Item Number) provides a globally unique 14-digit identifier for every distinct trade item, encoded in EAN-13, EAN-8, UPC-A, UPC-E, or ITF-14 barcodes depending on packaging type and logistics context. The GLN (Global Location Number) uniquely identifies legal entities, facilities, and functional locations within the supply chain. The SSCC (Serial Shipping Container Code) identifies logistics units (pallets, cases). The GS1 Application Identifier (AI) system allows additional data—batch/lot numbers, expiry dates, serial numbers—to be encoded alongside the GTIN in GS1-128 barcodes, GS1 DataMatrix, and GS1 QR codes. EPCIS (Electronic Product Code Information Services) standardises the format for sharing supply chain event data (What, Where, When, Why, How) between trading partners via RFID and barcode scanning events.

  - GS1 standards are embedded in regulatory frameworks globally. The US Drug Supply Chain Security Act (DSCSA), which reached its unit-level serialisation mandate in 2024, requires all prescription pharmaceuticals sold in the US to carry GS1 serialised GTINs and for trading partners to exchange EPCIS-format transaction data. The EU Falsified Medicines Directive (FMD) requires GS1 DataMatrix serialisation on all medicines. The US FDA's Food Traceability Rule (FSMA 204, effective 2026) mandates Key Data Elements (KDEs) aligned with the GS1 EPCIS event model for high-risk food categories. The EU Digital Product Passport (DPP) regulations for textiles, batteries, and electronics under the Ecodesign for Sustainable Products Regulation reference GS1 Digital Link as the preferred carrier standard.

  - Through 2024–2025, GS1's most significant initiative is GS1 Digital Link, a standard that encodes GS1 identifiers within standard web URIs (e.g., `https://id.gs1.org/01/09780345538376`) that can be resolved to product information pages, regulatory compliance data, sustainability records, and consumer-facing content. This enables QR codes on product packaging to serve both B2B supply chain functions (machine-readable GTIN) and B2C consumer information portals. GS1 is active in blockchain interoperability—working with the Decentralised Identifiers (DIDs) working group at W3C to map GS1 identifiers to DID methods, enabling self-sovereign product identity anchored to physical goods. Adoption is accelerating under regulatory pressure, with the US FDA and EU Commission both referencing GS1 standards in digital traceability mandates that will affect billions of products annually.