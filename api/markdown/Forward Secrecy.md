public:: true

# Forward Secrecy

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:forward-secrecy",
  "@type": "Page",
  "title": "Forward Secrecy",
  "vc:slug": "forward-secrecy",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:forward-secrecy",
  "@type": "Class",
  "label": "Forward Secrecy",
  "definition": "Forward secrecy, also called perfect forward secrecy, is a property of key-agreement protocols ensuring that the compromise of long-term private keys does not allow an attacker to decrypt previously recorded session traffic. It is achieved by deriving ephemeral session keys for each connection through a fresh key exchange and discarding them afterwards, so that no single persistent secret can retroactively unlock past communications. The property is a cornerstone of modern transport-layer security.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      },
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:tls-encryption",
        "label": "TLS Encryption"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
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
  - Forward secrecy, also called perfect forward secrecy, is a property of key-agreement protocols ensuring that the compromise of long-term private keys does not allow an attacker to decrypt previously recorded session traffic. It is achieved by deriving ephemeral session keys for each connection through a fresh key exchange and discarding them afterwards, so that no single persistent secret can retroactively unlock past communications. The property is a cornerstone of modern transport-layer security.
  - Related concepts: [[Cryptographic Protocol]] [[Key Exchange]] [[Secure Communication]] [[Encryption]]
- ### Overview
  - Forward secrecy decouples the security of past sessions from the security of long-term identity keys.
  - Ephemeral Diffie-Hellman exchanges generate a unique shared secret per session that is never written to disk and is destroyed after use.
  - Even if a server's certificate private key is later stolen, recorded ciphertext from earlier sessions remains undecryptable because the ephemeral keys no longer exist.
- ### Mechanisms
  - Ephemeral key exchange generates fresh per-session secrets via [[Key Exchange]] rather than reusing static keys.
  - Long-term keys authenticate the exchange but are not used to encrypt session data directly.
  - Session keys are short-lived and erased once the connection closes.
  - Combined with authenticated encryption to provide both confidentiality and integrity.
  - Standardised within [[Transport Layer Security]] cipher suites that mandate ephemeral exchange.
- ### Applications
  - HTTPS connections negotiating ephemeral cipher suites for web traffic.
  - Secure messaging protocols that rotate keys per message or per session.
  - VPN tunnels protecting against retrospective decryption of captured traffic.
  - Any [[Secure Communication]] channel where long-term key compromise is part of the threat model.
- ### Relationships
  - subClassOf:: [[Cryptographic Protocol]]
  - enables:: [[Secure Communication]]
  - enables:: [[Data Protection]]
  - implements:: [[Key Exchange]]
  - implements:: [[Cryptographic Protocol]]
  - relatedTo:: [[Public Key Cryptography]]
  - relatedTo:: [[Symmetric Encryption]]
  - relatedTo:: [[Encryption]]
  - requires:: [[Cryptography]]
  - requires:: [[Key Exchange]]
  - supports:: [[TLS Encryption]]
  - supports:: [[Transport Layer Security]]
  - partOf:: [[Information Security]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
