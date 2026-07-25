public:: true

# Payment Routing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:payment-routing", "@type":"Page", "title":"Payment Routing", "vc:slug":"payment-routing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:payment-routing",
  "@type":"Class",
  "label":"Payment Routing",
  "definition":"Payment routing is the process of determining a viable path along which value moves from a payer to a payee across one or more intermediaries, payment channels or networks. In layered payment systems such as the Lightning Network it involves finding a sequence of hops with sufficient liquidity and acceptable fees, whereas in conventional rails it selects acquirers, schemes or correspondent banks. Routing decisions balance cost, success probability, latency and privacy.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:payment-processing","label":"Payment Processing"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:payment-network","label":"Payment Network"},
      {"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:liquidity","label":"Liquidity"},
      {"@id":"urn:ngm:class:routing-table","label":"Routing Table"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"},
      {"@id":"urn:ngm:class:open-banking","label":"Open Banking"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:routing-algorithm","label":"Routing Algorithm"},
      {"@id":"urn:ngm:class:liquidity","label":"Liquidity"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:htlc","label":"HTLC"},
      {"@id":"urn:ngm:class:routing-algorithm","label":"Routing Algorithm"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:payment-channel","label":"Payment Channel"},
      {"@id":"urn:ngm:class:transaction-fee","label":"Transaction Fee"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:payment-gateway","label":"Payment Gateway"},
      {"@id":"urn:ngm:class:payment-network","label":"Payment Network"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:payment-gateway","label":"Payment Gateway"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:routing-algorithm","label":"Routing Algorithm"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:transaction-fee","label":"Transaction Fee"},
      {"@id":"urn:ngm:class:payment-processing","label":"Payment Processing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Payment routing determines the path value takes from payer to payee through intermediaries, drawing on [[Payment Processing]], [[Payment Channel]], [[Liquidity]] and a [[Routing Algorithm]].
  - In channel-based systems it finds a multi-hop route with sufficient capacity; in bank rails it selects acquirers and correspondents via the [[Payment Network]].

- ### Overview
  - Routing turns a payment intent into a concrete sequence of transfers. Each candidate path is evaluated for available liquidity, cumulative fees, expected success probability and latency.
  - In the [[Lightning Network]], source-based routing computes an onion-encrypted path so each hop learns only its predecessor and successor, preserving privacy.
  - In card and bank networks, routing chooses among schemes, acquirers and correspondent banks to optimise cost and authorisation rates.

- ### Mechanisms
  - Path-finding over a graph of channels or institutions, weighting edges by fee, capacity and reliability.
  - Atomic settlement through hash time-locked contracts ([[HTLC]]) so that either every hop completes or the whole payment reverts.
  - Fee estimation and budgeting, retrying alternative paths when a hop fails or lacks liquidity.
  - Maintenance of a [[Routing Table]] or gossip-propagated channel graph describing reachable peers.

- ### Applications
  - Off-chain micropayments and streaming payments over the [[Lightning Network]].
  - Least-cost routing across card schemes and acquirers in conventional [[Payment Processing]].
  - Cross-border value transfer and rail selection within [[Open Banking]] flows.
  - Liquidity-aware routing for payment service providers and [[Payment Gateway]] integrations.

- ### Relationships
  - subClassOf:: [[Payment Processing]]
  - partOf:: [[Payment Network]]
  - partOf:: [[Lightning Network]]
  - requires:: [[Liquidity]]
  - requires:: [[Routing Table]]
  - enables:: [[Payment Channel]]
  - enables:: [[Open Banking]]
  - dependsOn:: [[Routing Algorithm]]
  - implements:: [[HTLC]]
  - uses:: [[Payment Channel]]
  - uses:: [[Transaction Fee]]
  - supports:: [[Payment Gateway]]
  - contrastsWith:: [[Payment Gateway]]
  - bridgesTo:: [[Routing Algorithm]]
  - relatedTo:: [[Transaction Fee]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
