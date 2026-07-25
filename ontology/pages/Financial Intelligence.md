public:: true

# Financial Intelligence
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:financial-intelligence", "@type":"Page", "title":"Financial Intelligence", "vc:slug":"financial-intelligence", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:financial-intelligence",
  "@type": "Class",
  "label": "Financial Intelligence",
  "definition": "Financial intelligence is the collection, analysis, and dissemination of information about financial flows and transactions to detect, investigate, and disrupt illicit activity such as money laundering, terrorist financing, and sanctions evasion. In the blockchain context it applies graph analytics and transaction tracing across public ledgers to attribute addresses, cluster wallets, and surface suspicious patterns. It feeds compliance functions, law-enforcement investigations, and regulatory reporting, bridging on-chain data with off-chain identity and risk signals. Financial intelligence units and private analytics providers are its principal practitioners.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics" }
  ],
  "relations": {
    "uses": [
      { "@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics" },
      { "@id": "urn:ngm:class:transaction-monitoring", "label": "Transaction Monitoring" },
      { "@id": "urn:ngm:class:graph-analytics", "label": "Graph Analytics" },
      { "@id": "urn:ngm:class:chainalysis", "label": "Chainalysis" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering" },
      { "@id": "urn:ngm:class:sanctions-screening", "label": "Sanctions Screening" },
      { "@id": "urn:ngm:class:fraud-detection", "label": "Fraud Detection" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance" },
      { "@id": "urn:ngm:class:suspicious-activity-report", "label": "Suspicious Activity Report" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer" },
      { "@id": "urn:ngm:class:data-fusion", "label": "Data Fusion" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:fatf-travel-rule", "label": "FATF Travel Rule" },
      { "@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:regtech", "label": "RegTech" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - Financial intelligence is the discipline of gathering and analysing financial data to detect and disrupt illicit activity, encompassing [[Anti-Money Laundering]], counter-terrorist-financing, and [[Sanctions Screening]]. On public ledgers it leverages [[Blockchain Analytics]] and [[Graph Analytics]] to trace flows and attribute addresses.
  - It connects raw transactional data with risk context, producing actionable findings for compliance teams, investigators, and regulators.

- ### Overview
  - Financial intelligence transforms transaction records into investigative leads and compliance decisions. In traditional finance this draws on bank reporting and financial-intelligence-unit feeds; in crypto it exploits the transparency of public blockchains.
  - **Why it matters:** illicit finance funds organised crime, sanctions evasion, and terrorism. Effective financial intelligence reduces systemic risk and is a legal obligation for regulated firms.
  - **How it works:**
    - Transaction data is ingested and normalised across sources, including on-chain ledgers.
    - [[Transaction Monitoring]] flags anomalous patterns against typologies and thresholds.
    - Address clustering and entity attribution link pseudonymous activity to real-world actors.
    - Findings feed [[Suspicious Activity Report]] filings and law-enforcement referrals.

- ### Key aspects
  - **Transaction tracing** — following funds across hops, mixers, and bridges to reconstruct flows.
  - **Wallet clustering and attribution** — grouping addresses controlled by the same actor and tagging known services.
  - **Typology detection** — recognising laundering patterns such as layering, structuring, and rapid movement.
  - **Risk scoring** — assigning exposure scores to counterparties using sanction lists and known illicit clusters.
  - **Cross-domain fusion** — combining on-chain evidence with off-chain identity from [[Know Your Customer]] processes via [[Data Fusion]].

- ### Applications
  - Compliance screening at cryptocurrency exchanges and virtual-asset service providers.
  - Law-enforcement tracing of ransomware payments, fraud proceeds, and darknet flows.
  - Regulatory supervision and enforcement informed by [[FATF Travel Rule]] data.
  - Risk management within banks and payment firms supported by [[RegTech]] tooling.

- ### Relationships
  - subClassOf:: [[Blockchain Analytics]]
  - uses:: [[Blockchain Analytics]]
  - uses:: [[Transaction Monitoring]]
  - uses:: [[Graph Analytics]]
  - uses:: [[Chainalysis]]
  - enables:: [[Anti-Money Laundering]]
  - enables:: [[Sanctions Screening]]
  - enables:: [[Fraud Detection]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Suspicious Activity Report]]
  - requires:: [[Know Your Customer]]
  - requires:: [[Data Fusion]]
  - bridgesTo:: [[FATF Travel Rule]]
  - bridgesTo:: [[Predictive Analytics]]
  - relatedTo:: [[RegTech]]

- ### Provenance
  - updated:: 2026-06-15
