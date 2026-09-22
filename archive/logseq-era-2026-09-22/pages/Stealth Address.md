public:: true

# Stealth Address

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:stealth-address",
  "@type": "Page",
  "title": "Stealth Address",
  "vc:slug": "stealth-address",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stealth-address",
  "@type": "Class",
  "label": "Stealth Address",
  "definition": "A stealth address is a privacy-enhancing technique that lets a recipient publish a single static address while every payment is sent to a unique, unlinkable one-time address derived on-chain. The sender combines the recipient's public scan and spend keys with ephemeral randomness, using elliptic-curve Diffie-Hellman to compute a destination only the recipient can detect and spend. Stealth addresses break the public linkage between a recipient's identity and their incoming transactions without requiring interaction or a shared secret beforehand.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy-preserving-blockchain",
      "label": "Privacy Preserving Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:privacy-preserving-blockchain",
        "label": "Privacy Preserving Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:unlinkability",
        "label": "Unlinkability"
      },
      {
        "@id": "urn:ngm:class:anonymity",
        "label": "Anonymity"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anonymity",
        "label": "Anonymity"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ring-signature",
        "label": "Ring Signature"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero Knowledge Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monero",
        "label": "Monero"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-blockchain",
        "label": "Privacy Preserving Blockchain"
      },
      {
        "@id": "urn:ngm:class:unlinkability",
        "label": "Unlinkability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Stealth address is a primitive of [[Privacy Preserving Blockchain]] enabling [[Unlinkability]], [[Anonymity]], and [[Privacy]].
  - It is built on [[Elliptic Curve Cryptography]], [[Public Key Cryptography]], and [[Key Exchange]].
  - It complements [[Ring Signature]] and [[Zero Knowledge Proof]] approaches and is used in [[Monero]] and [[Wallet]] designs.
- ### Overview
  - Stealth addresses provide recipient privacy by ensuring that no two payments to the same recipient share an on-chain destination, defeating naive address-clustering analysis.
  - The recipient scans the chain for outputs addressed to keys it can derive, then spends them with a key only it can reconstruct from its private spend key.
  - Because derivation uses one-shot Diffie-Hellman with ephemeral keys, the scheme needs no prior coordination between sender and recipient.
- ### Mechanisms
  - Dual-key design separating a view (scan) key for detecting funds from a spend key for moving them.
  - Ephemeral key generation per transaction so each payment lands at a fresh address.
  - Elliptic-curve Diffie-Hellman shared-secret derivation to compute the one-time output key.
  - On-chain scanning by the recipient to identify owned outputs without revealing ownership.
- ### Applications
  - Privacy-focused cryptocurrencies such as Monero for recipient anonymity.
  - Confidential payments and donations on otherwise transparent ledgers.
  - Wallet designs that decouple a publishable receiving identity from observable transaction history.
- ### Relationships
  - hasPart:: [[Public Key Cryptography]]
  - hasPart:: [[Key Exchange]]
  - partOf:: [[Privacy Preserving Blockchain]]
  - requires:: [[Elliptic Curve Cryptography]]
  - requires:: [[Cryptography]]
  - requires:: [[Wallet]]
  - enables:: [[Unlinkability]]
  - enables:: [[Anonymity]]
  - enables:: [[Privacy]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Key Exchange]]
  - uses:: [[Public Key Cryptography]]
  - supports:: [[Anonymity]]
  - supports:: [[Privacy]]
  - contrastsWith:: [[Ring Signature]]
  - contrastsWith:: [[Zero Knowledge Proof]]
  - relatedTo:: [[Monero]]
  - relatedTo:: [[Privacy Preserving Blockchain]]
  - relatedTo:: [[Unlinkability]]
  - bridgesTo:: [[Wallet]]
  - subClassOf:: [[Privacy Preserving Blockchain]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
