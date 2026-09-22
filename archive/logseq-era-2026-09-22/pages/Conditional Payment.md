public:: true

# Conditional Payment

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:conditional-payment", "@type":"Page", "title":"Conditional Payment", "vc:slug":"conditional-payment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:conditional-payment",
  "@type":"Class",
  "label":"Conditional Payment",
  "definition":"A conditional payment is a transfer of value that is released only when one or more predefined conditions are met, rather than executing unconditionally on submission. On blockchains these conditions are enforced by smart contracts or scripts such as hash and time locks, removing the need for a trusted intermediary to adjudicate. Conditional payments are the foundation of escrow, payment channels and atomic cross-chain swaps.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:hash-time-locked-contract","label":"Hash Time-Locked Contract"},
      {"@id":"urn:ngm:class:trustless-execution","label":"Trustless Execution"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:atomic-swap","label":"Atomic Swap"},
      {"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"},
      {"@id":"urn:ngm:class:micropayment","label":"Micropayment"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:timelock","label":"Timelock"},
      {"@id":"urn:ngm:class:oracle","label":"Oracle"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},
      {"@id":"urn:ngm:class:state-channel","label":"State Channel"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"},
      {"@id":"urn:ngm:class:trustless-execution","label":"Trustless Execution"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:micropayment","label":"Micropayment"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A conditional payment releases value only when predefined conditions are satisfied. It is a specialised [[Smart Contract]] pattern, implemented through constructs such as the [[Hash Time-Locked Contract]] and [[Timelock]], and underpins [[Atomic Swap]] and [[Payment Channel]] designs.
- ### Overview
  - Ordinary payments settle as soon as they are accepted. Conditional payments instead encode a predicate — a secret being revealed, a deadline passing, an oracle attestation — that must hold before funds move.
  - On programmable ledgers the condition and the transfer are bound together in code, so settlement is trustless: no escrow agent decides whether to release the money. If the condition fails, the funds revert to the sender.
  - This primitive composes upward into more elaborate financial flows, including streaming micropayments, cross-chain swaps and dispute-resistant channels.
- ### Key aspects
  - Predicate enforcement: a machine-checkable condition gates the release of funds.
  - Trustlessness: the contract, not a third party, adjudicates the outcome.
  - Reversibility on failure: unmet conditions return funds to the payer.
  - Composability: conditional payments nest to build channels and swaps.
  - Time bounds: timelocks ensure funds are never permanently stuck.
- ### Mechanisms
  - Hash locks: payment releases when a preimage matching a published hash is revealed.
  - Time locks: payment can be reclaimed after a deadline if the condition is unmet.
  - Oracle attestations: external data triggers release for real-world conditions.
  - Channel updates: conditional transfers move balance off-chain until settlement.
- ### Applications
  - Atomic cross-chain swaps without a trusted exchange.
  - Lightning-style routed payments across payment channels.
  - Escrow and milestone-based settlement.
  - Streaming micropayments for metered services.
- ### Relationships
  - implements:: [[Hash Time-Locked Contract]]
  - implements:: [[Trustless Execution]]
  - enables:: [[Atomic Swap]]
  - enables:: [[Payment Channel]]
  - enables:: [[Micropayment]]
  - requires:: [[Timelock]]
  - requires:: [[Oracle]]
  - uses:: [[Smart Contract]]
  - uses:: [[State Channel]]
  - supports:: [[Lightning Network]]
  - relatedTo:: [[Bitcoin]]
  - relatedTo:: [[Trustless Execution]]
  - contrastsWith:: [[Micropayment]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
