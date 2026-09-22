public:: true

# Non-Custodial Wallet

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:non-custodial-wallet", "@type":"Page", "title":"Non-Custodial Wallet", "vc:slug":"non-custodial-wallet", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:non-custodial-wallet",
  "@type":"Class",
  "label":"Non-Custodial Wallet",
  "definition":"A non-custodial wallet is a cryptocurrency wallet in which the user, rather than a third party, exclusively holds and controls the private keys that authorise transactions. Because no intermediary can move or freeze funds, the user bears full responsibility for key security and recovery, typically managed through a seed phrase. Non-custodial wallets are the technical embodiment of self-custody and a prerequisite for permissionless interaction with decentralised protocols.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptocurrency-wallet","label":"Cryptocurrency Wallet"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:private-key","label":"Private Key"},{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "enables":[{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"},{"@id":"urn:ngm:class:permissionless-trading","label":"Permissionless Trading"}],
    "implements":[{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}],
    "contrastsWith":[{"@id":"urn:ngm:class:custodial-wallet","label":"Custodial Wallet"}],
    "uses":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"},{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
    "supports":[{"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"},{"@id":"urn:ngm:class:account-abstraction","label":"Account Abstraction"}],
    "dependsOn":[{"@id":"urn:ngm:class:custody","label":"Custody"}],
    "relatedTo":[{"@id":"urn:ngm:class:hardware-wallet","label":"Hardware Wallet"},{"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"},{"@id":"urn:ngm:class:self-sovereign-identity","label":"Self-Sovereign Identity"},{"@id":"urn:ngm:class:digital-wallet","label":"Digital Wallet"}],
    "bridgesTo":[{"@id":"urn:ngm:class:decentralization","label":"Decentralization"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A **Non-Custodial Wallet** is a [[Cryptocurrency Wallet]] where the user alone holds the [[Private Key]], giving them sole control over their funds.
- It is the technical realisation of [[Self-Custody]], removing any intermediary that could move or freeze assets.
- It stands in direct contrast to a [[Custodial Wallet]], in which a service provider retains [[Custody]] of the keys.
- ### Overview
- In a non-custodial wallet, key generation and storage happen on the user's own device or hardware, and signing of transactions occurs locally so private keys never leave the user's control.
- Recovery is the user's responsibility: the wallet derives keys from a seed phrase (a human-readable backup), and loss of that backup generally means permanent loss of access to funds.
- Because there is no central party able to reverse transactions or restore access, non-custodial wallets embody the "not your keys, not your coins" principle and maximise user sovereignty.
- They are the gateway to permissionless ecosystems, signing interactions with smart contracts directly rather than delegating to an exchange or broker.
- ### Key aspects
- Sole key control: only the user can authorise transactions via their [[Private Key]].
- Seed-phrase recovery: a mnemonic backup is the single source of recovery and must be protected.
- Local signing: transactions are signed on-device using [[Public-Key Cryptography]].
- Trust minimisation: no third party can censor, freeze, or seize funds.
- Hardware integration: pairing with a [[Hardware Wallet]] or [[Cold Storage]] strengthens key protection.
- ### Applications
- Interacting with [[Decentralized Finance]] protocols and decentralised exchanges.
- Holding assets independently of any exchange or custodian.
- Signing into Web3 applications and authorising on-chain governance votes.
- Self-sovereign asset management aligned with [[Self-Sovereign Identity]] principles.
- ### Relationships
- requires:: [[Private Key]]
- requires:: [[Key Management]]
- enables:: [[Self-Custody]]
- enables:: [[Permissionless Trading]]
- implements:: [[Self-Custody]]
- contrastsWith:: [[Custodial Wallet]]
- uses:: [[Public-Key Cryptography]]
- uses:: [[Digital Signature]]
- supports:: [[Decentralized Finance]]
- supports:: [[Account Abstraction]]
- dependsOn:: [[Custody]]
- relatedTo:: [[Hardware Wallet]]
- relatedTo:: [[Cold Storage]]
- relatedTo:: [[Self-Sovereign Identity]]
- relatedTo:: [[Digital Wallet]]
- bridgesTo:: [[Decentralization]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
