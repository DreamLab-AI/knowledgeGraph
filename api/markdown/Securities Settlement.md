public:: true

# Securities Settlement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:securities-settlement",
  "@type": "Page",
  "vc:slug": "securities-settlement",
  "title": "Securities Settlement",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:securities-settlement",
  "@type": "Class",
  "label": "Securities Settlement",
  "definition": "Securities settlement is the process by which the buyer of a security receives the asset and the seller receives payment, completing a trade through the final transfer of legal ownership and funds between counterparties, typically via a central securities depository (CSD) or clearing house. Traditional settlement occurs on a T+1 or T+2 basis after trade execution, involves complex chains of custodians, CSDs, and central counterparty clearing houses (CCPs), and carries counterparty risk during the settlement window. Distributed ledger technology and tokenised securities are driving a shift toward atomic and real-time settlement.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-system", "label": "Financial System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:atomic-settlement", "label": "Atomic Settlement"},
      {"@id": "urn:ngm:class:instant-value-settlement", "label": "Instant value settlement"},
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-asset-infrastructure", "label": "Digital Asset Infrastructure"},
      {"@id": "urn:ngm:class:financial-infrastructure", "label": "Financial Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset-trading", "label": "Digital Asset Trading"},
      {"@id": "urn:ngm:class:trustless-settlement", "label": "Trustless Settlement"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Securities settlement is the final exchange of securities for payment that extinguishes a trade obligation, mediated by central securities depositories and clearing houses operating within [[Securities Regulation]] frameworks, with emerging [[Atomic Settlement]] and [[Trustless Settlement]] mechanisms using [[Digital Asset Infrastructure]] to reduce counterparty risk and settlement latency.

- ### Relationships
  - Securities settlement is a foundational component of the [[Financial System]], sitting downstream of trade execution and upstream of custody. It relies on [[Financial Infrastructure]] — including CSDs, CCPs, and payment systems — and is governed by [[Securities Regulation]]. The industry is actively exploring [[Atomic Settlement]] and [[Instant value settlement]] using distributed ledger technology, which could eliminate the T+1/T+2 settlement window and associated counterparty risk. [[Digital Asset Trading]] platforms already operate with near-real-time settlement using [[Digital Asset Infrastructure]], providing a reference model. [[Trustless Settlement]] via smart contracts could eventually reduce reliance on centralised intermediaries.

- ### Content
  - The modern securities settlement system evolved from paper-based certificate delivery in the early twentieth century through dematerialisation — the replacement of physical certificates with book-entry records at central depositories — in the 1970s-1990s. The US Depository Trust Company (DTC), Euroclear, and Clearstream became the dominant global CSDs. Standard settlement cycles moved from T+5 to T+3, then to T+2 following the 2008 financial crisis, and in 2024 the US moved to T+1 settlement. Each reduction in settlement cycle requires tighter synchronisation between trade data, cash leg, and securities delivery.

  - Settlement is mechanically a three-stage process: trade capture and confirmation (matching buyer and seller records), clearing (netting obligations and computing net positions), and settlement (DVP — Delivery versus Payment, the simultaneous transfer of securities and funds). CCPs interpose themselves between buyer and seller through novation, becoming the buyer to every seller and seller to every buyer, eliminating bilateral counterparty risk. Settlement failures occur when one leg cannot deliver, triggering mandatory buy-ins or cash penalties under CSDR (the EU's Central Securities Depositories Regulation).

  - The significance of settlement infrastructure is immense but often invisible — daily global equity settlement volumes exceed $20 trillion. Settlement failures contribute to systemic risk; the 2008 crisis demonstrated how counterparty exposure in the settlement window could propagate failures across the financial system. Shortening the settlement cycle reduces the risk window but imposes more demanding operational processes on brokers, custodians, and investors. For tokenised securities, on-chain atomic delivery-versus-payment eliminates the settlement window entirely.

  - In 2024-2025, the US Equities markets moved to T+1 (May 2024), compressing operational timelines significantly. The European Commission is consulting on moving Europe to T+1 by 2027. Tokenised government bonds and money-market funds have been issued on DLT platforms (JPMorgan's Onyx, Franklin Templeton's BENJI, BlackRock's BUIDL), demonstrating atomic settlement in a regulated context. SWIFT's integration with blockchain networks for cash settlement legs and the ECB's DL3S settlement trial signal that the traditional CSD ecosystem is adapting to rather than being replaced by distributed ledger infrastructure.

