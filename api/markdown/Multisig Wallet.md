public:: true

# Multisig Wallet

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:multisig-wallet", "@type":"Page", "title":"Multisig Wallet", "vc:slug":"multisig-wallet", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:multisig-wallet",
  "@type":"Class",
  "label":"Multisig Wallet",
  "definition":"A multisig wallet is a cryptocurrency wallet that requires multiple independent signatures to authorise a transaction, typically following an M-of-N threshold scheme where M of N designated keys must sign. By distributing signing authority across keys held by different people or devices, it removes single points of failure and enforces shared control. It is widely used for treasury management, custody and decentralised-organisation governance.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptocurrency-wallet","label":"Cryptocurrency Wallet"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "uses":[{"@id":"urn:ngm:class:threshold-cryptography","label":"Threshold Cryptography"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
    "requires":[{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "enables":[{"@id":"urn:ngm:class:treasury-management","label":"Treasury Management"},{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}],
    "supports":[{"@id":"urn:ngm:class:dao","label":"DAO"},{"@id":"urn:ngm:class:custody","label":"Custody"}],
    "dependsOn":[{"@id":"urn:ngm:class:cryptocurrency-wallet","label":"Cryptocurrency Wallet"}],
    "contrastsWith":[{"@id":"urn:ngm:class:hot-wallet","label":"Hot Wallet"}],
    "relatedTo":[{"@id":"urn:ngm:class:on-chain-governance","label":"On-Chain Governance"},{"@id":"urn:ngm:class:custody","label":"Custody"},{"@id":"urn:ngm:class:ethereum","label":"Ethereum"}],
    "bridgesTo":[{"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:multi-signature-wallet","label":"Multi-Signature Wallet"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Multisig Wallet]] is a [[Cryptocurrency Wallet]] requiring M-of-N [[Digital Signature|signatures]] to authorise a transaction, using [[Threshold Cryptography]] and [[Key Management]] to enforce shared control.
  - It removes single points of failure and is central to [[Treasury Management]] and [[DAO]] governance.
- ### Overview
  - In an M-of-N scheme, N keys are designated and any M of them must sign before a transaction is valid.
  - On Bitcoin, multisig is expressed through script (P2SH/P2WSH); on Ethereum it is typically implemented as a smart-contract wallet.
  - Distributing keys across people, devices or geographies reduces theft and loss risk and enforces governance policy.
  - Threshold-signature schemes can achieve similar guarantees while presenting a single on-chain signature.
- ### Mechanisms
  - Designated public keys and a signing threshold define the spending policy.
  - Each signer independently authorises, and the protocol combines signatures.
  - Smart-contract variants encode arbitrary approval logic and recovery paths.
  - Hardware and air-gapped signers harden individual key custody.
- ### Applications
  - DAO and protocol treasury management.
  - Institutional and exchange custody.
  - Shared self-custody among family or partners.
  - Escrow and conditional-release arrangements.
- ### Relationships
  - hasPart:: [[Digital Signature]]
  - hasPart:: [[Key Management]]
  - uses:: [[Threshold Cryptography]]
  - uses:: [[Smart Contract]]
  - uses:: [[Digital Signature]]
  - requires:: [[Key Management]]
  - enables:: [[Treasury Management]]
  - enables:: [[Self-Custody]]
  - supports:: [[DAO]]
  - supports:: [[Custody]]
  - dependsOn:: [[Cryptocurrency Wallet]]
  - contrastsWith:: [[Hot Wallet]]
  - relatedTo:: [[On-Chain Governance]]
  - relatedTo:: [[Custody]]
  - relatedTo:: [[Ethereum]]
  - bridgesTo:: [[Bitcoin]]
- ### Provenance
  - updated:: 2026-06-15
