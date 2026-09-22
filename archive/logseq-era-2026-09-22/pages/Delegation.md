public:: true

# Delegation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:delegation", "@type":"Page", "title":"Delegation", "vc:slug":"delegation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:delegation",
  "@type":"Class",
  "label":"Delegation",
  "definition":"Delegation in blockchain systems is the act of assigning one's stake or voting rights to another participant who acts on one's behalf in consensus or governance, without transferring ownership of the underlying assets. In proof-of-stake networks token holders delegate stake to validators, sharing in rewards and slashing risk while the validator performs block production. In on-chain governance, delegation lets holders entrust their votes to representatives, a pattern formalised as liquid democracy. Delegation lowers the participation barrier for ordinary holders and concentrates operational responsibility with capable operators, while introducing trust and centralisation trade-offs.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:staking","label":"Staking"},
      {"@id":"urn:ngm:class:reward-distribution","label":"Reward Distribution"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:on-chain-governance","label":"On-Chain Governance"},
      {"@id":"urn:ngm:class:liquid-democracy","label":"Liquid Democracy"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:validator","label":"Validator"},
      {"@id":"urn:ngm:class:trust","label":"Trust"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:staking","label":"Staking"},
      {"@id":"urn:ngm:class:validator","label":"Validator"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:dao","label":"DAO"},
      {"@id":"urn:ngm:class:consensus","label":"Consensus"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:delegated-proof-of-stake","label":"Delegated Proof of Stake"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:slashing","label":"Slashing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:governance","label":"Governance"},
      {"@id":"urn:ngm:class:reward-distribution","label":"Reward Distribution"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Delegation is the assignment of stake or voting power to another participant who acts on the delegator's behalf, without surrendering ownership. It is a participation mechanism within [[Proof of Stake]] and on-chain [[Governance]].
- It rests on [[Trust]] in the chosen [[Validator]] or representative and shares both rewards and risks.
- ### Overview
- In proof-of-stake consensus, holders who lack the resources or expertise to run a validator delegate their stake to one that does, earning a share of rewards while remaining exposed to penalties such as slashing.
- In governance, delegation lets a holder hand their vote to a trusted representative, optionally re-delegating onward, the recursive pattern known as [[Liquid Democracy]].
- Delegation broadens participation but tends to concentrate influence in a smaller set of operators, a recurring centralisation tension.
- ### Mechanisms
- Stake delegation to validators with proportional [[Reward Distribution]].
- Shared exposure to [[Slashing]] for validator misbehaviour.
- Vote delegation and transitive re-delegation in governance.
- Delegate registration and selection in [[Delegated Proof of Stake]] systems.
- ### Applications
- Securing proof-of-stake networks via delegated staking.
- Treasury and protocol decisions in a [[DAO]].
- Representative voting in protocol governance.
- Liquid-democracy experiments combining direct and delegated votes.
- ### Relationships
- subClassOf:: [[Proof of Stake]]
- hasPart:: [[Staking]]
- hasPart:: [[Reward Distribution]]
- enables:: [[On-Chain Governance]]
- enables:: [[Liquid Democracy]]
- dependsOn:: [[Validator]]
- dependsOn:: [[Trust]]
- requires:: [[Staking]]
- uses:: [[Proof of Stake]]
- supports:: [[DAO]]
- supports:: [[Consensus]]
- implements:: [[Delegated Proof of Stake]]
- contrastsWith:: [[Slashing]]
- relatedTo:: [[Governance]]
- ### Provenance
- updated:: 2026-06-15
