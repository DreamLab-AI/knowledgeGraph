public:: true

# BIP-39

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:bip39", "@type":"Page", "title":"BIP-39", "vc:slug":"bip39", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:bip39",
  "@type":"Class",
  "label":"BIP-39",
  "definition":"BIP-39 is a Bitcoin Improvement Proposal that defines how to encode wallet entropy as a human-readable mnemonic seed phrase and how to derive a binary seed from it. It maps random entropy plus a checksum onto words drawn from a fixed wordlist, then stretches the phrase and an optional passphrase into a seed via a key derivation function. The resulting seed feeds hierarchical deterministic wallets, making secrets easier to back up and transcribe.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:seed-phrase","label":"Seed Phrase"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:seed-phrase","label":"Seed Phrase"},
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:entropy","label":"Entropy"},
      {"@id":"urn:ngm:class:hash-function","label":"Hash Function"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:hierarchical-deterministic-wallet","label":"Hierarchical Deterministic Wallet"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:key-derivation-function","label":"Key Derivation Function"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:hardware-wallet","label":"Hardware Wallet"},
      {"@id":"urn:ngm:class:cryptocurrency-wallet","label":"Cryptocurrency Wallet"}
    ],
    "produces":[
      {"@id":"urn:ngm:class:cryptographic-key","label":"Cryptographic Key"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:private-key","label":"Private Key"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:elliptic-curve-cryptography","label":"Elliptic Curve Cryptography"},
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"},
      {"@id":"urn:ngm:class:wallet","label":"Wallet"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[BIP-39]] is a Bitcoin Improvement Proposal that encodes wallet [[Entropy]] as a human-readable [[Seed Phrase]] and derives a binary seed from it. It standardises how random secrets become memorable, transcribable words and how those words, with an optional passphrase, are stretched into a seed.
	- The derived seed feeds a [[Hierarchical Deterministic Wallet]], so a single phrase can reconstruct an entire tree of keys.
- ### Overview
	- BIP-39 begins with random entropy of 128 to 256 bits. It appends a checksum derived from a [[Hash Function]], splits the result into 11-bit groups, and maps each group to a word from a fixed 2048-word list. The checksum lets wallets detect transcription errors.
	- The mnemonic, combined with an optional passphrase, is passed through a [[Key Derivation Function]] using many iterations to produce a 512-bit seed. That seed is the master input to deterministic key generation, ultimately producing [[Cryptographic Key]] material and a [[Private Key]] hierarchy.
	- By turning opaque entropy into words, BIP-39 makes backup and recovery practical for users of a [[Hardware Wallet]] or any [[Cryptocurrency Wallet]], underpinning self-custody across [[Bitcoin]] and many other chains.
- ### Mechanisms
	- Entropy generation and checksum appending using a hash of the entropy.
	- Wordlist mapping of 11-bit groups to mnemonic words.
	- Passphrase-salted key stretching through a [[Key Derivation Function]].
	- Deterministic seed output that initialises hierarchical key trees.
	- Error detection via the embedded checksum during recovery.
- ### Applications
	- Backing up and recovering self-custodial [[Wallet]] secrets.
	- Initialising a [[Hierarchical Deterministic Wallet]] across many accounts.
	- Provisioning a [[Hardware Wallet]] securely offline.
	- Enabling cross-wallet portability of the same key hierarchy.
- ### Relationships
	- implements:: [[Seed Phrase]]
	- implements:: [[Key Derivation Function]]
	- requires:: [[Entropy]]
	- requires:: [[Hash Function]]
	- enables:: [[Hierarchical Deterministic Wallet]]
	- uses:: [[Key Derivation Function]]
	- supports:: [[Hardware Wallet]]
	- supports:: [[Cryptocurrency Wallet]]
	- produces:: [[Cryptographic Key]]
	- dependsOn:: [[Private Key]]
	- relatedTo:: [[Elliptic Curve Cryptography]]
	- relatedTo:: [[Bitcoin]]
	- relatedTo:: [[Wallet]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
