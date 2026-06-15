public:: true

# Signal Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:signal-protocol",
  "@type": "Page",
  "vc:slug": "signal-protocol",
  "title": "Signal Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:signal-protocol",
  "@type": "Class",
  "label": "Signal Protocol",
  "definition": "Signal Protocol is an open-source cryptographic messaging protocol that provides end-to-end encryption for instant messaging applications, combining the Double Ratchet Algorithm with the X3DH (Extended Triple Diffie-Hellman) key agreement protocol. It achieves forward secrecy and break-in recovery (future secrecy) by continuously rotating encryption keys after each message exchange.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:secure-messaging",
    "label": "Secure Messaging"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:end-to-end-encryption",
        "label": "End-to-End Encryption"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      },
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:aes-gcm",
        "label": "AES-GCM"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:forward-secrecy",
        "label": "Forward Secrecy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:secure-messaging",
        "label": "Private Messaging"
      },
      {
        "@id": "urn:ngm:class:asynchronous-communication",
        "label": "Asynchronous Encrypted Communication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:noise-protocol",
        "label": "Noise Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:textsecure-protocol",
      "label": "TextSecure Protocol"
    },
    {
      "@id": "urn:ngm:class:axolotl-protocol",
      "label": "Axolotl Protocol"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The [[Signal Protocol]] is a cryptographic messaging protocol combining the Double Ratchet Algorithm with the X3DH key agreement scheme to deliver [[End-to-End Encryption]] with both forward secrecy and post-compromise security across arbitrary messaging sessions.

- ### Relationships
  - Signal Protocol is a subclass of [[Secure Messaging]] and relies on [[End-to-End Encryption]] and [[Key Exchange]] primitives rooted in [[Public Key Cryptography]]. It shares structural elements with the [[Noise Protocol]] framework and builds upon general [[Cryptography]] foundations. Its double-ratchet mechanism makes it distinct from simpler transport-layer encryption schemes.

- ### Content
  - Signal Protocol was developed by Open Whisper Systems (now Signal Messenger LLC) and first deployed in 2013 in the RedPhone and TextSecure applications. Moxie Marlinspike and Trevor Perrin published the Double Ratchet Algorithm specification in 2016. The protocol rapidly gained industry attention as a rigorous, formally analysed solution to the challenge of deniable, forward-secret encrypted messaging on mobile devices.
  - The protocol operates in two phases. During session setup, X3DH (Extended Triple Diffie-Hellman) exchanges long-term identity keys, signed pre-keys, and one-time pre-keys to establish a shared secret without requiring the recipient to be online. During the session, the Double Ratchet mechanism advances a symmetric-key ratchet after every message and independently advances a Diffie-Hellman ratchet with each round-trip, ensuring that compromise of any single key state does not expose past or future messages.
  - Signal Protocol is deployed in WhatsApp (two billion+ users), Facebook Messenger's Secret Conversations, Google Messages (RCS end-to-end mode), and Skype's Private Conversations, making it the most widely adopted messaging security protocol in history. Its combination of deniability, asynchronous session establishment, and continuous key renewal sets the benchmark for private communication systems used in journalism, activism, and enterprise contexts.
  - In 2024-2025 the post-quantum extension of Signal Protocol — PQXDH, replacing X3DH with a Kyber KEM — was rolled out to Signal's production clients, making it one of the first large-scale deployments of post-quantum cryptography in consumer messaging. The Internet Engineering Task Force (IETF) has active working groups standardising related constructs (MLS protocol), and academic analysis continues to refine formal security proofs around the ratchet construction.
