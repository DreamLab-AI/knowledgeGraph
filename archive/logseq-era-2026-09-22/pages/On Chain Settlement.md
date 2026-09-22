public:: true

# On Chain Settlement
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:on-chain-settlement", "@type":"Page", "title":"On Chain Settlement", "vc:slug":"on-chain-settlement", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:on-chain-settlement",
  "@type":"Class",
  "label":"On Chain Settlement",
  "definition":"On chain settlement is the process by which the transfer of value or assets between parties is recorded directly on a distributed ledger and becomes economically irreversible according to the ledger's consensus rules. Unlike off-chain or netting arrangements that defer ledger updates, on chain settlement writes each transaction's final state into the canonical chain, removing the need for a trusted central clearing intermediary. Settlement is considered complete once the relevant transaction attains the chain's finality guarantee, after which reversal requires violating consensus. It underpins payment, securities, and decentralised finance flows on public and permissioned blockchains.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:settlement-finality","label":"Settlement Finality"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"},
      {"@id":"urn:ngm:class:tokenization","label":"Tokenization"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},
      {"@id":"urn:ngm:class:distributed-ledger","label":"Distributed Ledger"},
      {"@id":"urn:ngm:class:stablecoin","label":"Stablecoin"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},
      {"@id":"urn:ngm:class:settlement-finality","label":"Settlement Finality"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:blockchain","label":"Blockchain"},
      {"@id":"urn:ngm:class:gas-fee","label":"Gas Fee"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:digital-asset","label":"Digital Asset"},
      {"@id":"urn:ngm:class:payment-rail","label":"Payment Rail"},
      {"@id":"urn:ngm:class:transaction-throughput","label":"Transaction Throughput"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:rollup","label":"Rollup"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- On chain settlement records the final transfer of value directly on a [[Distributed Ledger]], achieving economic irreversibility through [[Consensus Mechanism]] rather than a central clearing house. It is a specialisation of [[Settlement Finality]] applied to [[Blockchain]] systems, and is central to [[Decentralized Finance]].
- ### Overview
- Traditional settlement relies on intermediaries that net positions and update internal ledgers over hours or days. On chain settlement collapses clearing and settlement into a single atomic ledger write, so once a transaction is included and finalised, ownership has provably changed.
- The model removes counterparty dependence on a custodian and replaces it with cryptographic and economic guarantees enforced by the network's validators.
- Settlement assurance scales with the depth of confirmations or the chain's deterministic finality, trading latency against certainty.
- ### Mechanisms
- Transactions are broadcast, ordered by consensus, and committed to a block.
- Finality is reached probabilistically (proof-of-work depth) or deterministically (BFT-style consensus).
- Atomic composability lets multiple transfers settle within a single [[Smart Contract]] call.
- Fees ([[Gas Fee]]) meter execution and prioritise inclusion.
- ### Applications
- Stablecoin payments and remittance corridors using [[Stablecoin]] rails.
- Tokenised securities and real-world-asset transfer via [[Tokenization]].
- Decentralised exchange trade settlement and lending liquidations in [[Decentralized Finance]].
- Cross-institution interbank settlement on permissioned ledgers.
- ### Relationships
- enables:: [[Decentralized Finance]]
- enables:: [[Tokenization]]
- uses:: [[Smart Contract]]
- uses:: [[Distributed Ledger]]
- uses:: [[Stablecoin]]
- dependsOn:: [[Consensus Mechanism]]
- dependsOn:: [[Settlement Finality]]
- requires:: [[Blockchain]]
- requires:: [[Gas Fee]]
- relatedTo:: [[Digital Asset]]
- relatedTo:: [[Payment Rail]]
- relatedTo:: [[Transaction Throughput]]
- contrastsWith:: [[Rollup]]
- ### Provenance
- updated:: 2026-06-15
