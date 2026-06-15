public:: true

# Wholesale CBDC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wholesale-cbdc",
  "@type": "Page",
  "vc:slug": "wholesale-cbdc",
  "title": "Wholesale CBDC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wholesale-cbdc",
  "@type": "Class",
  "label": "Wholesale CBDC",
  "definition": "A Wholesale Central Bank Digital Currency (wCBDC) is a form of central bank money issued in digital form and restricted to use by financial institutions—commercial banks, clearing houses, and other regulated entities—for large-value interbank settlement and financial market infrastructure operations, as distinct from retail CBDC which is available to the general public. Wholesale CBDCs are designed to modernise payment system infrastructure by enabling atomic delivery-versus-payment settlement, programmable payment conditions through smart contracts, and 24/7 settlement finality, addressing inefficiencies in legacy correspondent banking and real-time gross settlement systems. Multiple central banks are actively piloting wholesale CBDC, including Project Jura (BIS, Banque de France, SNB), Project Dunbar (BIS, MAS, SARB, RBA, BNM), and the Bank of England's New Payments Architecture.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:central-bank", "label": "Central Bank"},
      {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"},
      {"@id": "urn:ngm:class:financial-infrastructure", "label": "Financial Infrastructure"},
      {"@id": "urn:ngm:class:real-time-gross-settlement", "label": "Real-Time Gross Settlement"},
      {"@id": "urn:ngm:class:correspondent-banking", "label": "Correspondent Banking"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:instant-value-settlement", "label": "Instant value settlement"},
      {"@id": "urn:ngm:class:cross-border-payments", "label": "Cross-Border Payments"},
      {"@id": "urn:ngm:class:monetary-policy-implementation", "label": "Monetary Policy Implementation"},
      {"@id": "urn:ngm:class:delivery-versus-payment", "label": "Delivery Versus Payment"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:digital-payment-system", "label": "Digital Payment System"},
      {"@id": "urn:ngm:class:interoperability-protocol", "label": "Interoperability Protocol"},
      {"@id": "urn:ngm:class:permissioned-distributed-ledger", "label": "Permissioned Distributed Ledger"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:monetary-sovereignty", "label": "Monetary Sovereignty"},
      {"@id": "urn:ngm:class:monetary-system", "label": "Monetary System"},
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:kyc-aml-compliance", "label": "KYC/AML Compliance"},
      {"@id": "urn:ngm:class:central-bank-oversight", "label": "Central Bank Oversight"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:retail-cbdc", "label": "Retail CBDC"},
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-20022", "label": "ISO 20022"},
      {"@id": "urn:ngm:class:bank-for-international-settlements", "label": "Bank for International Settlements"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:tokenised-securities", "label": "Tokenised Securities"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:wCBDC", "label": "wCBDC"},
    {"@id": "urn:ngm:class:interbank-digital-currency", "label": "Interbank Digital Currency"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Wholesale CBDC]] is [[Central Bank Digital Currency]] restricted to financial institutions for large-value interbank settlement, enabling atomic delivery-versus-payment via programmable smart contracts and [[Instant value settlement]] finality to modernise the [[Financial Infrastructure]] of [[Monetary System]] operations.
- ### Relationships
  - Wholesale CBDC sits within the [[Central Bank Digital Currency]] taxonomy alongside retail CBDC, but targets [[Financial Infrastructure]] rather than retail payments. [[Central Bank]] issuers design wCBDC to achieve [[Instant value settlement]] with finality, removing the credit and liquidity risks embedded in legacy RTGS systems. [[Cross-Border Payments]] are a primary use case, with multi-currency wCBDC platforms enabling atomic FX swaps without correspondent bank intermediaries. [[Monetary Policy Implementation]] precision improves when reserves are programmable—central banks can apply tiered remuneration or targeted lending facilities directly through wCBDC smart contracts. The [[Interoperability Protocol]] layer is critical for multi-jurisdiction platforms and connects to [[Monetary Sovereignty]] concerns as nations negotiate governance over shared settlement infrastructure.
- ### Content
  - Wholesale CBDC addresses structural inefficiencies in the current global payment and settlement architecture. Correspondent banking chains for cross-border payments involve multiple intermediaries, each adding fees and settlement delays of one to five business days. Legacy RTGS systems operate within national business hours and require pre-funded liquidity buffers. Wholesale CBDC eliminates these inefficiencies by enabling direct, near-instantaneous settlement on shared distributed ledger infrastructure with 24/7 availability and programmable settlement logic.

  - Atomic delivery-versus-payment (DvP) is a flagship capability of wholesale CBDC. In traditional securities settlement, the payment leg and the securities transfer leg operate on separate systems with time gaps that create settlement risk. A wCBDC deployed on a shared ledger with securities tokenisation enables both legs to settle in a single atomic transaction—either both complete or neither does—eliminating principal risk entirely. BIS Innovation Hub projects including Jura and Dunbar demonstrated this architecture across multiple central bank jurisdictions.

  - The technical architecture of wholesale CBDC typically involves a permissioned distributed ledger with central bank nodes maintaining ultimate oversight and validation authority, while participating financial institutions operate as authorised participants with transaction submission rights. Privacy is a critical design requirement—financial institutions cannot expose their settlement flows to competitors on a shared ledger. Zero-knowledge proofs, confidential transaction schemes (Pedersen commitments, Zether), and purpose-bound money architectures address this requirement while maintaining central bank auditability.

  - Interoperability between national wholesale CBDC systems and with existing RTGS and CLS infrastructure is a complex governance and technical challenge. The BIS Unified Ledger concept proposes a shared settlement platform across central banks, raising profound questions about [[Monetary Sovereignty]] and governance. Standardisation efforts through ISO 20022 messaging, the Interledger Protocol, and SWIFT's gpi initiative provide a convergence path, but wholesale CBDC adoption will require multilateral treaty-level agreement on legal recognition, default rules, and operational governance.
