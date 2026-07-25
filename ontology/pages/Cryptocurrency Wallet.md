public:: true

# Cryptocurrency Wallet
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cryptocurrency-wallet", "@type":"Page", "title":"Cryptocurrency Wallet", "vc:slug":"cryptocurrency-wallet", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cryptocurrency-wallet",
  "@type":"Class",
  "label":"Cryptocurrency Wallet",
  "definition":"A cryptocurrency wallet is software or hardware that manages the cryptographic keys controlling blockchain assets and constructs, signs and broadcasts transactions on a user's behalf. It does not store coins, which exist only as ledger entries, but rather safeguards the private keys that authorise spending and prove ownership. Wallets range from custodial services that hold keys for users to non-custodial and hardware wallets that give users sole control.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:wallet","label":"Wallet"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cryptocurrency","label":"Cryptocurrency"}],
    "requires":[{"@id":"urn:ngm:class:private-key","label":"Private Key"},{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "supports":[{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"},{"@id":"urn:ngm:class:custody","label":"Custody"}],
    "uses":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
    "enables":[{"@id":"urn:ngm:class:decentralised-application","label":"Decentralised Application"}],
    "dependsOn":[{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
    "implements":[{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "hasPart":[{"@id":"urn:ngm:class:private-key","label":"Private Key"}],
    "relatedTo":[{"@id":"urn:ngm:class:hardware-wallet","label":"Hardware Wallet"},{"@id":"urn:ngm:class:staking","label":"Staking"},{"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:decentralised-application","label":"Decentralised Application"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A cryptocurrency wallet manages the cryptographic keys that control blockchain assets and signs transactions on a user's behalf. It requires careful [[Key Management]] of the [[Private Key]], uses [[Digital Signature]] to authorise spending, and supports either [[Self-Custody]] or delegated [[Custody]].
- ### Overview
- Coins and tokens are not files held in a wallet; they are entries on a [[Blockchain]] ledger. Ownership is the ability to produce a valid signature with the corresponding private key, so the wallet's true job is to protect and use keys.
- A wallet derives addresses from public keys, tracks balances by reading the ledger, builds transactions, signs them with the private key and broadcasts them to the network.
- Custodial wallets hold keys on the user's behalf, trading control for convenience and recovery, while non-custodial wallets place sole responsibility and sole control with the user.
- Hierarchical deterministic wallets generate a tree of keys from a single seed phrase, enabling backup and recovery from a short mnemonic.
- ### Mechanisms
- Key generation produces a private key and derives the public key and address through asymmetric cryptography.
- Transaction signing applies the private key to a transaction hash, producing a [[Digital Signature]] the network can verify against the public key.
- Seed phrases encode the master key as human-readable words for backup and restoration.
- Hardware wallets keep keys in a secure element and sign offline, isolating secrets from internet-connected devices.
- ### Applications
- Sending, receiving and holding cryptocurrency for individuals and institutions.
- Interacting with [[Decentralised Application]] smart contracts via signed messages and transactions.
- Participating in [[Staking]], lending and trading across [[Decentralised Finance]] protocols.
- Cold storage of long-term holdings using [[Hardware Wallet]] devices.
- ### Key aspects
- Loss or compromise of the private key or seed phrase results in irreversible loss of the assets.
- The custody choice fundamentally shapes the security and recovery model.
- Account abstraction and smart-contract wallets add programmable recovery and policy controls.
- ### Relationships
- partOf:: [[Cryptocurrency]]
- requires:: [[Private Key]]
- requires:: [[Key Management]]
- supports:: [[Self-Custody]]
- supports:: [[Custody]]
- uses:: [[Digital Signature]]
- enables:: [[Decentralised Application]]
- dependsOn:: [[Blockchain]]
- implements:: [[Key Management]]
- hasPart:: [[Private Key]]
- relatedTo:: [[Hardware Wallet]]
- relatedTo:: [[Staking]]
- relatedTo:: [[Decentralised Finance]]
- bridgesTo:: [[Decentralised Application]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
