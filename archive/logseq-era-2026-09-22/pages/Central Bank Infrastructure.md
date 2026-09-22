public:: true

# Central Bank Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:central-bank-infrastructure",
  "@type": "Page",
  "vc:slug": "central-bank-infrastructure",
  "title": "Central Bank Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:central-bank-infrastructure",
  "@type": "Class",
  "label": "Central Bank Infrastructure",
  "definition": "Central bank infrastructure encompasses the systems, networks, and institutional arrangements through which a central bank fulfils its core functions: operating real-time gross settlement (RTGS) systems for interbank payments, managing the issuance and lifecycle of physical and digital currency, implementing monetary policy, maintaining financial stability, and serving as lender of last resort. It includes SWIFT connectivity, RTGS platforms (such as CHAPS, Fedwire, TARGET2), central securities depositories, and increasingly the digital and distributed ledger systems under evaluation for CBDC issuance. This infrastructure forms the foundation upon which all commercial banking and payment activity ultimately settles.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:payment-infrastructure", "label": "Payment Infrastructure"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:monetary-policy-implementation", "label": "Monetary Policy Implementation"},
      {"@id": "urn:ngm:class:atomic-settlement", "label": "Atomic Settlement"},
      {"@id": "urn:ngm:class:cbdc-infrastructure", "label": "CBDC Infrastructure"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"},
      {"@id": "urn:ngm:class:cross-border-settlement", "label": "Cross-Border Settlement"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:central-bank", "label": "Central Bank"},
      {"@id": "urn:ngm:class:monetary-policy", "label": "Monetary Policy"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Central bank infrastructure is the set of critical systems operated or overseen by a [[Central Bank]] that enable final settlement of financial obligations across an economy. At its core are real-time gross settlement (RTGS) systems, which settle interbank obligations transaction-by-transaction in central bank money — the only truly risk-free settlement asset. Surrounding this core are systems for securities settlement, payment message exchange (SWIFT), currency management, and [[Monetary Policy]] operational tools. The infrastructure is evolving to incorporate [[CBDC Infrastructure]] as central banks explore digital forms of sovereign money. Disruption to this infrastructure — whether through cyber-attack, operational failure, or geopolitical fragmentation — poses systemic risks to the entire financial system.

- ### Relationships
  - Central bank infrastructure enables [[Monetary Policy Implementation]] by providing the channels through which interest rates and reserve conditions are transmitted to commercial banks. It delivers [[Atomic Settlement]] finality for high-value interbank transactions, supports [[Financial Stability]] by providing lender-of-last-resort facilities, and underpins [[Cross-Border Settlement]] through SWIFT connectivity and correspondent banking relationships. Emerging [[CBDC Infrastructure]] is being designed as a digital extension of existing central bank infrastructure, preserving [[Monetary Policy]] transmission whilst modernising the payment stack.

- ### Content
  - Central bank infrastructure evolved from manual clearing houses and end-of-day net settlement systems into real-time gross settlement in the 1980s and 1990s. The US Fedwire (launched 1918, converted to RTGS in 1970), the UK CHAPS (1984), and the European TARGET system (1999, upgraded to TARGET2 in 2007 and TARGET2-Securities in 2015) represented successive generations of this infrastructure. The SWIFT network, founded in 1973, provided the common messaging standard for cross-border interbank communication, connecting over 11,000 institutions in more than 200 countries. These systems process trillions of dollars daily and operate with stringent resilience requirements, typically targeting five-nines (99.999%) availability.

  - The technical architecture of RTGS platforms has modernised significantly. Older systems relied on proprietary mainframe technology and batch windows for securities settlement. Modern platforms such as TIPS (the ECB's TARGET Instant Payment Settlement), the Bank of England's RTGS Renewal Programme, and the US FedNow system incorporate ISO 20022 financial messaging standards, API interfaces for programmatic access, real-time liquidity management tools, and expanded operating hours approaching 24/7 in some jurisdictions. ISO 20022 migration — replacing legacy MT message formats — is a multi-year effort coordinated globally through SWIFT, enabling richer data in payment messages to support automation, compliance, and reconciliation.

  - Central banks are also custodians of foreign exchange reserves and operate the monetary policy transmission mechanism. Open market operations, standing facilities, and reserve requirements are implemented through accounts held at the central bank by commercial banks. Collateral management systems — for accepting securities as collateral for intraday credit — are integral to RTGS liquidity provision. Central securities depositories (CSDs) and central counterparties (CCPs) interface tightly with RTGS to achieve delivery-versus-payment (DVP) finality, ensuring that securities and cash legs of transactions settle simultaneously to eliminate principal risk.

  - Between 2022 and 2025, central bank infrastructure has faced pressure from three directions: CBDC development requiring integration of distributed ledger technologies; geopolitical fragmentation following the exclusion of Russian banks from SWIFT in 2022, accelerating interest in alternative messaging networks (CIPS in China, SPF in Russia); and the move to faster payments potentially displacing some RTGS functions. The BIS Innovation Hub's Agorá project (2024) is exploring tokenised commercial bank deposits on shared unified ledgers alongside wholesale CBDC, aiming to modernise correspondent banking while preserving the two-tier monetary system. These experiments may fundamentally reshape the architecture of central bank infrastructure by the end of the decade.

