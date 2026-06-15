public:: true

# TLS 1.3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tls-1-3",
  "@type": "Page",
  "vc:slug": "tls-1-3",
  "title": "TLS 1.3",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tls-1-3",
  "@type": "Class",
  "label": "TLS 1.3",
  "definition": "TLS 1.3 (Transport Layer Security version 1.3, standardised in RFC 8446, August 2018) is the current major version of the TLS protocol, redesigned to eliminate legacy cryptographic weaknesses, reduce handshake round-trips from two to one (zero for session resumption), mandate forward secrecy on every connection, and restrict the cipher suite to a small set of authenticated encryption algorithms. It replaces TLS 1.2 as the baseline secure transport for HTTPS, QUIC, and virtually all authenticated internet communications.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transport-layer-security",
      "label": "Transport Layer Security"
    },
    {
      "@id": "urn:ngm:class:encryption-protocol",
      "label": "Encryption Protocol"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-diffie-hellman",
        "label": "Elliptic Curve Diffie-Hellman"
      },
      {
        "@id": "urn:ngm:class:authenticated-encryption",
        "label": "Authenticated Encryption"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:rfc-8446",
        "label": "RFC 8446"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:https",
        "label": "HTTPS"
      },
      {
        "@id": "urn:ngm:class:forward-secrecy",
        "label": "Forward Secrecy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS 1.2"
      },
      {
        "@id": "urn:ngm:class:ssl",
        "label": "SSL"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:certificate-transparency",
        "label": "Certificate Transparency"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      },
      {
        "@id": "urn:ngm:class:http-protocol",
        "label": "HTTP/3"
      },
      {
        "@id": "urn:ngm:class:mutual-tls",
        "label": "Mutual TLS"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transport-layer-security-1-3",
      "label": "Transport Layer Security 1.3"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[TLS 1.3]] is the dominant secure transport protocol standardised by the [[IETF]] in RFC 8446, achieving one round-trip handshakes, mandatory forward secrecy via ephemeral [[Key Exchange]], and a hardened cipher suite relying exclusively on AEAD constructions and modern [[Cryptography]].

- ### Relationships
  - TLS 1.3 underpins [[QUIC]] (which embeds TLS 1.3 for its handshake), is fundamental to [[Network Security]] across the internet, operates alongside [[Certificate Transparency]] for certificate verification, and represents the current version of [[Transport Layer Security]].

- ### Content
  - TLS 1.3 development began in 2014 as IETF Working Group TLS started addressing the structural weaknesses exposed by attacks on TLS 1.2 and earlier: BEAST, POODLE, DROWN, FREAK, Logjam, and others all exploited legacy RSA key exchange, RC4, CBC padding, or export-grade cryptography. After 28 drafts spanning four years—the longest IETF standardisation process for a security protocol—RFC 8446 was published in August 2018. Adoption was rapid: major browsers enabled TLS 1.3 by default within months.
  - The TLS 1.3 handshake requires only one round-trip (1-RTT) for a new connection and zero round-trips (0-RTT) for resumed sessions using pre-shared keys, halving or eliminating handshake latency relative to TLS 1.2. The handshake exclusively uses Diffie-Hellman key exchange (ECDHE with X25519, P-256, or FFDHE groups), eliminating static RSA key exchange and guaranteeing perfect forward secrecy. Supported cipher suites are restricted to three AEAD algorithms: AES-128-GCM, AES-256-GCM, and ChaCha20-Poly1305. Session tickets replace session IDs for resumption, and downgrade protection is built into the ServerHello random field.
  - TLS 1.3 is the security foundation for essentially all authenticated internet traffic: HTTPS, email (STARTTLS/SMTPS), LDAPS, database connections, and API calls. Its 0-RTT mode directly inspired QUIC's design, making TLS 1.3 integral to HTTP/3. The protocol's removal of obsolete cryptography has substantially reduced the attack surface for passive decryption and active downgrade attacks, and its mandatory forward secrecy means recorded traffic cannot be decrypted even if long-term keys are later compromised.
  - As of 2024–2025, TLS 1.3 accounts for over 90% of HTTPS connections observed by Cloudflare and Google, with TLS 1.2 persisting mainly for legacy enterprise systems. Post-quantum cryptography integration is the active frontier: IETF and NIST are standardising hybrid key exchange (X25519Kyber768, ML-KEM) for TLS 1.3 to maintain forward secrecy against future quantum adversaries. Several browsers and CDNs already ship experimental post-quantum TLS 1.3 support. RFC 8446bis (TLS 1.3 errata consolidation) is in progress, and TLS 1.3 is also the handshake layer for QUIC/HTTP3 deployments now covering over 30% of web traffic.

