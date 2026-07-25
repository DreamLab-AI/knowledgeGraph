public:: true
alias:: Delivery Versus Payment

# Delivery-Versus-Payment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:delivery-versus-payment",
  "@type": "Page",
  "vc:slug": "delivery-versus-payment",
  "title": "Delivery-Versus-Payment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:delivery-versus-payment",
  "@type": "Class",
  "label": "Delivery-Versus-Payment",
  "definition": "Delivery-Versus-Payment (DvP) is a securities settlement mechanism that links the transfer of a financial instrument to the simultaneous transfer of payment, ensuring that delivery occurs if and only if payment occurs, thereby eliminating principal risk in securities transactions. It is the standard settlement model mandated or strongly encouraged by financial market infrastructures globally.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:payment-system", "label": "Payment System"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:financial-infrastructure", "label": "Financial Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset-trading", "label": "Digital Asset Trading"},
      {"@id": "urn:ngm:class:custody-infrastructure", "label": "Custody Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-asset-market", "label": "Digital Asset Market"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Delivery-Versus-Payment]] (DvP) is a settlement principle and mechanism in which the transfer of a security and the corresponding cash payment are made simultaneously and irrevocably, such that one leg cannot occur without the other. This eliminates the principal risk that a counterparty delivers securities without receiving payment (or vice versa). DvP is the foundational settlement model for equity, bond, and derivatives markets, underpinning [[Financial Infrastructure]] globally and increasingly applied to [[Digital Asset]] settlement.

- ### Relationships
  - DvP requires robust [[Financial Infrastructure]] including central securities depositories, real-time gross settlement systems, and central counterparties. It conceptually mirrors the [[Atomic Swap]] mechanism used in blockchain-native [[Digital Asset]] exchange, where on-chain atomicity achieves the DvP guarantee without intermediaries. Successful DvP settlement enables [[Digital Asset Trading]] and [[Custody Infrastructure]] for institutional investors. It is closely [[relatedTo]] the broader [[Digital Asset Market]] infrastructure debate about T+0 settlement and tokenised securities.

- ### Content
  - The DvP concept was formalised by the Bank for International Settlements Committee on Payment and Settlement Systems in 1992, which defined three DvP models differentiated by whether gross or net settlement occurs for securities and cash legs. Model 1 (real-time gross settlement for both legs) is regarded as the most risk-free variant and forms the basis for most modern central securities depository systems such as Euroclear and the Depository Trust & Clearing Corporation (DTCC) in the United States.

  - Technically, DvP systems coordinate between a securities settlement system and a cash settlement system—typically a central bank's RTGS—through carefully choreographed messaging flows and reservation/earmarking mechanisms. The critical engineering challenge is ensuring atomicity across two separate legal and technical systems. Failed settlements trigger auto-repo mechanisms, buy-ins, or penalties as prescribed by regulation (e.g. CSDR settlement discipline in the EU). Settlement cycles (T+2 in most markets, T+1 in the US from 2024) define the window between trade execution and DvP finalisation.

  - The tokenisation wave of 2022-2025 has placed DvP at the centre of digital securities architecture. Blockchain-based DvP can be achieved on a single shared ledger by encoding both the security token and the payment token (e.g. a wholesale CBDC or tokenised money market fund) as smart contract primitives that settle atomically. Projects such as Project Guardian (MAS), Regulated Liability Network (UK), and multiple central bank experiments have demonstrated viable on-chain DvP for tokenised government bonds, fund units, and foreign exchange.

  - By 2024-2025, regulatory pressure to shorten settlement cycles to T+1 (achieved in the US) and eventual T+0 ambitions in Europe are accelerating DvP infrastructure investment. The tension between DvP atomicity guarantees and the architectural requirements of cross-chain or cross-ledger settlement remains an active engineering challenge, with hash-time-locked contracts and trusted execution environments among the solutions under evaluation. IOSCO and BIS continue to issue guidance emphasising that DvP equivalence must be demonstrably achieved even in novel tokenised settlement environments.

