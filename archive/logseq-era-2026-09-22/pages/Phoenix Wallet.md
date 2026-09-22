public:: true

# Phoenix Wallet
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:phoenix-wallet", "@type":"Page", "title":"Phoenix Wallet", "vc:slug":"phoenix-wallet", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:phoenix-wallet",
  "@type":"Class",
  "label":"Phoenix Wallet",
  "definition":"Phoenix is a non-custodial Bitcoin Lightning wallet developed by ACINQ, the team behind the Eclair implementation, that automates channel management so that users experience Lightning payments without manually opening or balancing channels. It keeps users in self-custody of their keys while abstracting liquidity provisioning, on-the-fly channel creation, and fee handling, making the Lightning Network accessible to non-technical mobile users.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:non-custodial-wallet","label":"Non-Custodial Wallet"}],
  "relations":{
    "supports":[
      {"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"},
      {"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:eclair","label":"Eclair"},
      {"@id":"urn:ngm:class:acinq","label":"ACINQ"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:wallet","label":"Wallet"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:non-custodial-wallet","label":"Non-Custodial Wallet"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:eclair","label":"Eclair"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:cryptocurrency-exchange","label":"Cryptocurrency Exchange"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:lightning-network","label":"Lightning Network"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- [[Phoenix Wallet]] is a non-custodial Bitcoin [[Lightning Network]] wallet by [[ACINQ]] that automates channel management. Built on the [[Eclair]] implementation, it keeps users in [[Self-Custody]] while abstracting away Lightning's operational complexity for [[Bitcoin]] payments.
- ### Overview
- Phoenix targets the usability gap that has historically kept Lightning out of reach for ordinary users. Rather than asking users to open, fund, and rebalance channels, it provisions liquidity automatically and creates channels on the fly when a payment requires it.
- Because it is a [[Non-Custodial Wallet]], the user always controls the private keys; the wallet handles the Lightning mechanics but never takes custody of funds.
- ### Key aspects
- Automated channel opening and liquidity management remove manual node operation.
- Self-custodial key handling keeps funds under user control.
- Native [[Lightning Network]] payments with on-chain fallback for funding and closing.
- Built and maintained by [[ACINQ]] using their [[Eclair]] node software.
- ### Applications
- Everyday low-value Bitcoin payments over Lightning from a mobile device.
- Onboarding non-technical users to self-custodial Lightning.
- Receiving Lightning payments without running a personal node.
- ### Relationships
- subClassOf:: [[Non-Custodial Wallet]]
- supports:: [[Lightning Network]]
- supports:: [[Self-Custody]]
- relatedTo:: [[Eclair]]
- relatedTo:: [[ACINQ]]
- hasPart:: [[Wallet]]
- uses:: [[Lightning Network]]
- implements:: [[Non-Custodial Wallet]]
- dependsOn:: [[Eclair]]
- enables:: [[Self-Custody]]
- requires:: [[Bitcoin]]
- contrastsWith:: [[Cryptocurrency Exchange]]
- partOf:: [[Lightning Network]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
