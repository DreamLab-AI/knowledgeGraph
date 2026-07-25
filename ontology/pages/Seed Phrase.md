public:: true

# Seed Phrase

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:seed-phrase", "@type":"Page", "title":"Seed Phrase", "vc:slug":"seed-phrase", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:seed-phrase",
  "@type":"Class",
  "label":"Seed Phrase",
  "definition":"A seed phrase, also called a recovery or mnemonic phrase, is an ordered list of words, typically twelve or twenty-four, that encodes the master secret from which a cryptocurrency wallet derives all of its private keys. Generated from random entropy and mapped to words via a standard wordlist, it provides a human-readable backup that can fully restore a wallet on any compatible device. Because anyone holding the phrase controls the funds, its secrecy and secure storage are paramount to self-custody.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-wallet","label":"Digital Wallet"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:entropy","label":"Entropy"}],
    "requires":[{"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"}],
    "uses":[{"@id":"urn:ngm:class:cryptographic-key","label":"Cryptographic Key"}],
    "enables":[{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"},{"@id":"urn:ngm:class:hierarchical-deterministic-wallet","label":"Hierarchical Deterministic Wallet"}],
    "supports":[{"@id":"urn:ngm:class:private-key","label":"Private Key"},{"@id":"urn:ngm:class:cryptocurrency-wallet","label":"Cryptocurrency Wallet"}],
    "dependsOn":[{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "partOf":[{"@id":"urn:ngm:class:digital-wallet","label":"Digital Wallet"}],
    "relatedTo":[{"@id":"urn:ngm:class:security","label":"Security"},{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A **Seed Phrase** is an ordered list of words, usually twelve or twenty-four, that encodes the master secret of a [[Digital Wallet]].
  - From this single secret the wallet deterministically derives every [[Private Key]] and address it controls.
  - It is generated from random [[Entropy]] and mapped to words via a standard wordlist, giving a human-readable, transcribable backup.
  - Because anyone holding the phrase controls the funds, it is the linchpin of [[Self-Custody]] and demands rigorous [[Security]].
- ### Overview
  - Seed phrases replace the impossible task of memorising or safely copying raw binary keys with a sequence of ordinary words.
  - Standardised wordlists assign each word a fixed index, and a checksum word guards against transcription errors.
  - The phrase seeds a [[Hierarchical Deterministic Wallet]], from which an entire tree of keys is generated, so one backup protects all accounts.
  - Whoever possesses the phrase can recreate the wallet on any compatible device, which is both its great convenience and its central risk.
- ### Key aspects
  - **Entropy source** — the security of the wallet rests on the quality of the random [[Entropy]] used to create the seed.
  - **Mnemonic encoding** — words are easier to write down accurately and recognise than hexadecimal, with a checksum to catch mistakes.
  - **Deterministic derivation** — a standard derivation path reconstructs every [[Private Key]] from the seed, enabling full recovery.
  - **Single point of control** — the phrase grants complete authority over funds, so its confidentiality is absolute.
  - **Backup discipline** — durable, offline [[Cold Storage]] of the phrase protects against loss, theft and device failure.
- ### Mechanisms
  - Random entropy is converted into a mnemonic via a standard scheme, appending a checksum derived from the entropy.
  - The mnemonic is stretched into a binary seed that initialises [[Key Management]] for the wallet hierarchy.
  - Each account and address is then derived along a defined path, so recovery reproduces them exactly.
  - Optional passphrases add a further secret, creating hidden wallets that the bare phrase alone cannot reveal.
- ### Applications
  - Backing up and restoring [[Cryptocurrency Wallet]]s across hardware and software clients.
  - Enabling [[Self-Custody]] without reliance on a custodian to hold keys.
  - Migrating a wallet between devices or recovering from hardware loss.
  - Establishing inheritance and disaster-recovery plans for digital assets.
- ### Relationships
  - hasPart:: [[Entropy]]
  - requires:: [[Cold Storage]]
  - uses:: [[Cryptographic Key]]
  - enables:: [[Self-Custody]]
  - enables:: [[Hierarchical Deterministic Wallet]]
  - supports:: [[Private Key]]
  - supports:: [[Cryptocurrency Wallet]]
  - dependsOn:: [[Key Management]]
  - partOf:: [[Digital Wallet]]
  - relatedTo:: [[Security]]
  - relatedTo:: [[Blockchain]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
