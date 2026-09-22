public:: true

# Session Key

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:session-key",
  "@type": "Page",
  "title": "Session Key",
  "vc:slug": "session-key",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:session-key",
  "@type": "Class",
  "label": "Session Key",
  "definition": "A session key is a temporary symmetric cryptographic key generated for the duration of a single communication session, used to encrypt the data exchanged between parties after an initial key exchange handshake. Session keys have bounded lifetimes and are discarded at the end of the session, limiting the window of vulnerability if the key is compromised. Ephemeral session keys derived from asymmetric key exchanges (such as Diffie-Hellman) provide forward secrecy, ensuring past sessions remain private even if long-term private keys are later exposed.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:session-management", "label": "Session Management"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"},
      {"@id": "urn:ngm:class:security", "label": "Security"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:policy-information-point", "label": "Policy Information Point"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-identity", "label": "Blockchain Identity"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:biometric-data", "label": "Biometric Data"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:externally-owned-account", "label": "Externally Owned Account"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Session Key]] is an ephemeral symmetric cryptographic key used to encrypt communications within a single session, derived through [[Public Key Cryptography]] handshakes such as TLS or the Signal Protocol.
  - Session keys have bounded lifetimes and are discarded after the session ends, limiting the blast radius of any key compromise.
  - Ephemeral Diffie-Hellman key exchange ensures forward secrecy: even if long-term private keys are later compromised, past session traffic remains protected because session keys are never stored.

- ### Overview
  - Session keys are the operational workhorse of secure communications: TLS 1.3 negotiates a fresh symmetric key per connection using ephemeral key exchange, using it for AEAD bulk encryption.
  - The key exchange phase (using [[Public Key Cryptography]]) authenticates parties and establishes a shared secret from which the session key is derived via a key derivation function (HKDF).
  - Symmetric [[Encryption]] with the session key (AES-256-GCM, ChaCha20-Poly1305) provides confidentiality and integrity for the session's data.
  - [[Session Management]] systems track session key bindings, rotation schedules, and revocation to maintain security across long-lived connections.

- ### Key Aspects
  - Forward secrecy (perfect forward secrecy, PFS): ephemeral key exchange means each session uses a unique key not derivable from long-term credentials.
  - Key rotation: long-running sessions should periodically derive new session keys to limit the data encrypted under a single key.
  - Session resumption mechanisms (TLS session tickets) allow re-establishment without full handshake overhead while maintaining security properties.
  - Rekeying thresholds in messaging protocols (Signal's Double Ratchet) ensure that compromising one message key does not expose all past or future messages.

- ### Mechanisms
  - ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) key exchange generates a shared secret from ephemeral key pairs discarded after derivation.
  - HKDF (HMAC-based Key Derivation Function) expands the shared secret into session key material for encryption and authentication.
  - Key confirmation messages in the handshake verify that both parties derived the same session key before transmitting application data.
  - Hardware security modules (HSMs) can protect the long-term keys used in the key exchange without ever exposing session key derivation to software.

- ### Applications
  - TLS/HTTPS securing web traffic between browsers and servers, protecting [[Personal Data]] in transit.
  - Secure messaging (Signal, WhatsApp) using Double Ratchet for per-message session key derivation.
  - [[Blockchain Identity]] schemes where off-chain communication channels between participants use session keys derived from on-chain public key material.
  - VPN tunnels establishing [[Encryption]]-protected channels for remote access to [[Access Control]]-governed resources.

- ### Relationships
  - subClassOf:: [[Cryptography]]
  - hasPart:: [[Encryption]]
  - hasPart:: [[Public Key Cryptography]]
  - enables:: [[Session Management]]
  - enables:: [[Access Control]]
  - requires:: [[Encryption]]
  - requires:: [[Digital Identity]]
  - uses:: [[Public Key Cryptography]]
  - supports:: [[Policy Information Point]]
  - supports:: [[Privacy]]
  - dependsOn:: [[Cryptography]]
  - relatedTo:: [[Blockchain Identity]]
  - contrastsWith:: [[Biometric Data]]
  - bridgesTo:: [[Externally Owned Account]]

- ### Provenance
  - updated:: 2026-06-15
