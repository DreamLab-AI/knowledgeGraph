public:: true

# Atomic Delivery versus Payment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:atomic-delivery-versus-payment",
  "@type": "Page",
  "vc:slug": "atomic-delivery-versus-payment",
  "title": "Atomic Delivery versus Payment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:atomic-delivery-versus-payment",
  "@type": "Class",
  "label": "Atomic Delivery versus Payment",
  "definition": "Atomic Delivery versus Payment (atomic DvP) is a settlement mechanism in which the transfer of an asset and the corresponding payment are executed as a single indivisible transaction: either both legs complete simultaneously or neither does, eliminating counterparty risk by making it impossible for one party to receive value without the other receiving theirs. It applies the atomicity property of database transactions to financial and digital asset exchange.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:delivery-versus-payment", "label": "Delivery-Versus-Payment"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:hash-time-locked-contract", "label": "Hash Time-Locked Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"},
      {"@id": "urn:ngm:class:cross-chain-asset-transfer", "label": "Cross Chain Asset Transfer"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Atomic Delivery versus Payment]] (atomic DvP) eliminates settlement risk by binding asset delivery and payment into a single transaction that the blockchain network either commits or rolls back in its entirety. Traditional [[Delivery-Versus-Payment]] mechanisms in securities markets achieve this through central counterparty clearing houses (CCPs) that interpose themselves between buyer and seller; on-chain atomic DvP achieves the same guarantee without a trusted intermediary by encoding settlement logic in [[Smart Contract]] code. [[Hash Time-Locked Contract]] primitives extend atomicity across separate ledgers or chains.

- ### Relationships
  - Atomic Delivery versus Payment is a specialised form of [[Delivery-Versus-Payment]] implemented using [[Smart Contract]] logic on programmable blockchains. [[Hash Time-Locked Contract]] (HTLC) mechanisms provide the cross-chain variant, conditioning asset release on cryptographic preimage revelation within a time window. This enables [[Atomic Swap]] between heterogeneous assets and chains, and supports [[Cross Chain Asset Transfer]] without bridge contracts holding custodial risk. All mechanics are expressed as [[Blockchain Transaction]] operations governed by [[Smart Contract Execution]] semantics.

- ### Content
  - Delivery versus payment has been a cornerstone of financial market infrastructure since the 1989 Bank for International Settlements report on settlement risk, which identified principal risk — the possibility of delivering securities without receiving cash — as a systemic vulnerability. Traditional DvP relies on T+1 or T+2 settlement cycles managed by central depositories (DTCC in the US, Euroclear and Clearstream in Europe), which net obligations and guarantee finality. Lehman Brothers' 2008 collapse demonstrated that even CCP-mediated DvP contains residual risk during settlement windows.

  - On distributed ledgers, atomic DvP is implemented through several patterns. Single-ledger DvP requires both asset and payment tokens to exist on the same chain; the smart contract holds the seller's asset in escrow and releases it only upon confirmed receipt of the buyer's payment token, within a single transaction. Cross-ledger DvP uses HTLC construction: the seller locks the asset with a hash lock, the buyer locks the payment with the same hash, and the seller claims payment by revealing the preimage, which simultaneously enables the buyer to claim the asset within the timeout window. Failure to claim within the timeout triggers refund.

  - Capital markets experimentation with blockchain-based DvP accelerated from 2018 onwards. Project Jasper (Bank of Canada), Project Ubin (MAS Singapore), and Project Helvetia (BIS Innovation Hub/SNB) all implemented DvP between central bank digital currency (CBDC) and tokenised securities on permissioned blockchain networks. In 2021, the Australian Securities Exchange (ASX) pursued a CHESS replacement project using Digital Asset's Canton Network before cancelling in 2022 due to delays and complexity. The European Distributed Ledger Technology (DLT) Pilot Regime (2023) created a regulatory sandbox enabling atomic settlement of tokenised securities against CBDC or stablecoin on public or permissioned chains.

  - As of 2024–2025, institutional adoption is accelerating: JPMorgan Onyx, Goldman Sachs DAP, and HSBC Orion have all executed live atomic DvP settlements of tokenised bonds and equities. The BIS Finternet initiative frames atomic settlement as a key capability for a next-generation financial system. Remaining challenges include legal finality (when is on-chain settlement legally binding under different jurisdictions?), FX settlement across CBDC rails, and the absence of liquid on-chain payment tokens in major currencies, which forces most institutional DvP to rely on commercial bank money or stablecoin proxies.

