public:: true

# supply chain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3f412634a4ea9da04b558d0e32b0062a692e41a1c1d10f0c5c707f14440392ce",
  "@type": "Page",
  "vc:slug": "supply-chain",
  "title": "supply chain",
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
  "@id": "urn:ngm:class:supply-chain",
  "@type": "Class",
  "label": "Supply Chain",
  "definition": "A supply chain is the end-to-end network of organisations, people, activities, information flows, and resources involved in transforming raw materials into finished products and delivering them to end consumers. It spans procurement, manufacturing, quality assurance, logistics, customs compliance, and retail fulfilment across multiple tiers of suppliers and distributors. Modern supply chains are subject to geopolitical risk, demand variability, regulatory traceability mandates, and sustainability-reporting requirements under frameworks such as CSRD and the GHG Protocol. Digital technologies including blockchain-based provenance tracking, AI-driven demand forecasting, digital twins, and IoT-enabled visibility platforms are increasingly deployed to improve resilience, transparency, and efficiency.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:logistics-optimization",
      "label": "Logistics Optimization"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:value-chain", "label": "Value Chain"},
    {"@id": "urn:ngm:class:supply-network", "label": "Supply Network"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"},
      {"@id": "urn:ngm:class:supply-chain-traceability", "label": "Supply Chain Traceability"},
      {"@id": "urn:ngm:class:procurement", "label": "Procurement"},
      {"@id": "urn:ngm:class:inventory-management", "label": "Inventory Management"},
      {"@id": "urn:ngm:class:demand-forecasting", "label": "Demand Forecasting"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"},
      {"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"},
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:just-in-time-manufacturing", "label": "Just-in-Time Manufacturing"},
      {"@id": "urn:ngm:class:sustainability-reporting", "label": "Sustainability Reporting"},
      {"@id": "urn:ngm:class:trade-compliance", "label": "Trade Compliance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:enterprise-resource-planning", "label": "Enterprise Resource Planning"},
      {"@id": "urn:ngm:class:iot", "label": "IoT"},
      {"@id": "urn:ngm:class:data-integration", "label": "Data Integration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:gs1-standards", "label": "GS1 Standards"},
      {"@id": "urn:ngm:class:iso-28000", "label": "ISO 28000"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:demand-chain", "label": "Demand Chain"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:supply-chain-blockchain", "label": "Supply Chain Blockchain"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:circular-economy", "label": "Circular Economy"},
      {"@id": "urn:ngm:class:trade-finance", "label": "Trade Finance"},
      {"@id": "urn:ngm:class:scope-3-emissions", "label": "Scope 3 Emissions"}
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **supply chain** is the end-to-end network of organisations, people, activities, information flows, and resources involved in transforming raw materials into finished products and delivering them to end consumers. It spans [[Procurement]], [[Inventory Management]], [[Manufacturing]], quality assurance, [[Logistics Optimization]], customs compliance, and retail fulfilment across multiple tiers of suppliers and distributors. Digital technologies—including [[Supply Chain Blockchain]], [[Artificial Intelligence]], and [[Digital Twin]] simulations—are increasingly deployed to improve resilience, transparency, and sustainability across all tiers.

- ### Overview
  - A supply chain encompasses every step that converts natural resources and components into goods or services that reach a buyer. The concept extends beyond physical flows to include financial flows ([[Trade Finance]]), information flows ([[Data Integration]]), and contractual relationships between entities at each tier.
  - **Why it matters**: Supply chain efficiency is a primary determinant of product cost, delivery reliability, and environmental footprint. Failures—caused by geopolitical disruptions, natural disasters, or demand shocks—can cascade across entire industries, as demonstrated by semiconductor shortages and port congestion events of the early 2020s.
  - **Tiers of a supply chain**:
    - Tier-0 — the brand owner or original equipment manufacturer (OEM)
    - Tier-1 — direct component and sub-assembly suppliers
    - Tier-2 — raw-material and sub-component producers
    - Tier-3+ — commodity and resource extractors
  - The multi-tier structure creates complex dependency graphs that are often poorly visible to the brand owner, motivating investment in [[Supply Chain Traceability]] and [[Provenance Tracking]] systems.

- ### Key Components
  - **[[Procurement]]** — selection, contracting, and qualification of suppliers; strategic sourcing decisions.
  - **[[Demand Forecasting]]** — statistical and AI-driven techniques to anticipate customer demand and align production schedules.
  - **[[Inventory Management]]** — optimising stock levels to balance service continuity against holding costs; safety stock, reorder points, ABC analysis.
  - **[[Logistics Optimization]]** — routing, carrier selection, modal shift, last-mile delivery, and warehouse management.
  - **[[Supply Chain Management]]** — the discipline of planning, executing, and monitoring all supply chain activities as an integrated system.
  - **[[Supply Chain Traceability]]** — the ability to track the provenance and custody history of materials and products across tiers.
  - **[[Risk Management]]** — supplier diversification, geographic redundancy, business continuity planning, and stress-testing via [[Digital Twin]] simulations.
  - **[[Trade Compliance]]** — customs classification, export controls, sanctions screening, and rules-of-origin documentation.
  - **[[Sustainability Reporting]]** — disclosure of [[Scope 3 Emissions]] from upstream suppliers and downstream distribution under frameworks such as CSRD and the GHG Protocol.
  - **[[Enterprise Resource Planning]]** — ERP systems (e.g. SAP S/4HANA, Oracle SCM) serve as transactional backbones for order management, production planning, and financial settlement.
  - **[[IoT]]** — real-time sensor data from asset trackers, temperature loggers, and RFID tags feeds visibility platforms with in-transit condition monitoring.

- ### Mechanisms & Enabling Technologies
  - **[[Artificial Intelligence]] and [[Machine Learning]]** — applied to demand sensing, dynamic pricing, predictive maintenance of logistics assets, and anomaly detection in procurement data.
  - **[[Digital Twin]]** — virtual replicas of the supply network enable scenario planning and resilience testing without disrupting live operations.
  - **[[Supply Chain Blockchain]]** — distributed ledger platforms (e.g. IBM Food Trust, TradeLens) provide immutable, shared records of custody transfers and provenance assertions across competing organisations who may not otherwise share data.
  - **[[IoT]]** — cold-chain monitoring, geofencing of shipments, and real-time inventory counting via RFID and barcode scanning.
  - **[[Data Integration]]** — EDI, API-based supplier portals, and data-sharing platforms aggregate multi-tier information into a single operational picture.

- ### Applications & Use Cases
  - **Automotive** — just-in-time (JIT) scheduling for component delivery to assembly lines; managing thousands of tier-1 to tier-n suppliers globally.
  - **Food and agriculture** — [[Provenance Tracking]] for farm-to-fork certification, cold-chain compliance, and recall management.
  - **Pharmaceuticals** — serialisation and DSCSA compliance for drug traceability; temperature-controlled distribution of vaccines and biologics.
  - **Fashion and apparel** — ethical sourcing compliance, fibre provenance, and circular-economy re-take programmes linked to [[Circular Economy]] goals.
  - **Electronics** — semiconductor supply management, conflict-minerals compliance (RCOI under Dodd-Frank), and counterfeit-component detection.
  - **Humanitarian logistics** — demand-driven distribution of aid supplies to conflict zones and disaster-affected populations.
  - **[[Decentralised Finance]]** bridge** — tokenised inventory and receivables enable supply chain finance instruments such as dynamic discounting and reverse factoring on DeFi rails.

- ### Relationships
  - hasPart:: [[Supply Chain Management]]
  - hasPart:: [[Supply Chain Traceability]]
  - hasPart:: [[Procurement]]
  - hasPart:: [[Inventory Management]]
  - hasPart:: [[Demand Forecasting]]
  - requires:: [[Provenance Tracking]]
  - requires:: [[Logistics Optimization]]
  - requires:: [[Risk Management]]
  - enables:: [[Just-in-Time Manufacturing]]
  - enables:: [[Sustainability Reporting]]
  - enables:: [[Trade Compliance]]
  - dependsOn:: [[Enterprise Resource Planning]]
  - dependsOn:: [[IoT]]
  - dependsOn:: [[Data Integration]]
  - uses:: [[Digital Twin]]
  - uses:: [[Artificial Intelligence]]
  - uses:: [[Machine Learning]]
  - standardizedBy:: [[GS1 Standards]]
  - standardizedBy:: [[ISO 28000]]
  - contrastsWith:: [[Demand Chain]]
  - bridges-to:: [[Supply Chain Blockchain]]
  - bridges-to:: [[Decentralised Finance]]
  - relatedTo:: [[Circular Economy]]
  - relatedTo:: [[Trade Finance]]
  - relatedTo:: [[Scope 3 Emissions]]

- ### Standards & Governance Context
  - **[[GS1 Standards]]** — global identification standards (GTIN, SSCC, GLN, EPCIS) that provide a common language for identifying products, locations, and logistics units across supply chain partners.
  - **ISO 28000** — specification for security management systems for the supply chain, addressing risk from terrorism, piracy, fraud, and crime.
  - **ISO 31000** — risk management framework applicable to supply chain risk identification, assessment, and treatment.
  - **EU Corporate Sustainability Reporting Directive (CSRD)** — requires large companies to disclose Scope 3 emissions and supply chain due diligence information from 2024 onwards.
  - **German Supply Chain Due Diligence Act (LkSG)** — mandates large German companies to identify and prevent human-rights and environmental abuses in their supply chains.
  - **US Uyghur Forced Labour Prevention Act (UFLPA)** — creates a rebuttable presumption that goods produced in Xinjiang are made with forced labour, driving adoption of traceability tools.
  - **EU Regulation on Deforestation-free Products (EUDR)** — requires importers of listed commodities (soy, palm oil, cattle, cocoa, coffee, timber) to prove products are not linked to deforestation.
  - **WTO Trade Facilitation Agreement** — international framework to reduce customs friction and enable more efficient cross-border supply chain operations.
  - **SCOR Model (Supply Chain Operations Reference)** — industry-standard process-reference model maintained by ASCM (formerly APICS) covering Plan, Source, Make, Deliver, Return, and Enable processes.

- ### Resilience Strategies
  - **Supplier diversification** — multi-sourcing across geographies to reduce single-point-of-failure risk.
  - **Nearshoring and reshoring** — bringing production closer to consumer markets to reduce geopolitical exposure and lead times.
  - **Safety stock optimisation** — balancing holding costs against service-level targets using statistical inventory models.
  - **Demand sensing** — real-time point-of-sale and web-signal data fed into [[Machine Learning]] models to improve forecast accuracy at short planning horizons.
  - **Control tower platforms** — centralised visibility dashboards integrating data from carriers, warehouses, customs, and ERP systems to enable rapid exception management.
  - **[[Digital Twin]] simulations** — modelling supply network behaviour under stress scenarios (port closures, supplier failures, demand spikes) to identify vulnerabilities and test mitigation strategies.

- ### Sustainability & ESG Dimensions
  - **[[Scope 3 Emissions]]** from upstream (purchased goods and services, tier-1 to tier-n) and downstream (distribution, use-phase, end-of-life) account for the majority of most companies' total carbon footprint.
  - **[[Circular Economy]]** principles—design for longevity, repair, reuse, and recycling—require reverse supply chain infrastructure for take-back, refurbishment, and material recovery.
  - **Social due diligence** — auditing for forced labour, child labour, and unsafe working conditions in lower supply chain tiers, increasingly mandated by legislation.
  - **Water and biodiversity risk** — upstream agricultural and mining supply chains face growing scrutiny over water use and land-use change.

- ### Provenance
  - sources:: GS1 EPCIS specification; ASCM SCOR Model; ISO 28000; EU CSRD; UFLPA guidance; GHG Protocol Scope 3 Standard
  - updated:: 2026-06-13
