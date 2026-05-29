public:: true

# TLS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tls",
  "@type": "Page",
  "vc:slug": "tls",
  "title": "TLS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tls",
  "@type": "Class",
  "label": "TLS",
  "definition": "Transport Layer Security (TLS) is a cryptographic protocol standardised by the IETF that provides authenticated, confidential, and integrity-protected communication channels over any reliable transport, most commonly TCP. TLS 1.3 (RFC 8446, 2018) is the current version, achieving a one-round-trip handshake that establishes a shared session key using Diffie-Hellman key exchange and authenticates the server via a certificate chain rooted in a trusted Certificate Authority. TLS is the security foundation of HTTPS, gRPC, SMTP, MQTT, and virtually every application-layer protocol requiring channel security.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"},
      {"@id": "urn:ngm:class:tls-encryption", "label": "TLS Encryption"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cryptographic-security", "label": "Cryptographic Security"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[TLS]] (Transport Layer Security) is the IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication over reliable transports, using [[Public-Key Cryptography]] for key exchange and [[Certificate Authority]] chains for server authentication, forming the security foundation of HTTPS and virtually all application-layer network protocols.

- ### Relationships
  - TLS is the primary deployment vehicle for [[Encryption]] and [[TLS Encryption]] in internet communications, relying on [[Certificate Authority]] infrastructure for identity assertions and [[Elliptic Curve Cryptography]] (ECDH, ECDSA) for efficient key exchange and signatures. It establishes [[Network Security]] at the transport layer and uses [[Digital Certificate]] formats (X.509) for server and optional client authentication. It underpins [[Cryptographic Security]] across the web, APIs, and inter-service communication in microservice architectures.

- ### Content
  - TLS is the direct successor to Netscape's SSL (Secure Sockets Layer), which was developed in 1994 to secure early e-commerce on the web. SSL 3.0 was formalised and renamed TLS 1.0 by the IETF in RFC 2246 (1999). TLS 1.1 and 1.2 followed with hardened cipher suites and algorithm agility, but TLS 1.2 accreted complexity — supporting dozens of cipher suites, many now broken — and required two round trips for the handshake. POODLE, BEAST, and Lucky13 attacks on TLS 1.0/1.1 prompted the IETF to deprecate both versions (RFC 8996, 2021).

  - TLS 1.3, standardised in RFC 8446 (2018), represents a complete redesign of the handshake. The key exchange now uses ephemeral Diffie-Hellman exclusively (eliminating RSA key exchange and achieving forward secrecy by default), the handshake completes in one round trip (0-RTT resumption with anti-replay protections), and the cipher suite list was pruned to five AEAD constructions (AES-GCM, ChaCha20-Poly1305). The server's certificate and authentication messages are encrypted within the handshake, preventing passive certificate fingerprinting. Record-layer processing uses HMAC-based key derivation (HKDF) throughout.

  - TLS is ubiquitous: as of 2024, over 95% of web traffic is TLS-encrypted (Chrome transparency report), and Let's Encrypt has issued over four billion certificates since 2016, commoditising PKI for the entire internet. TLS secures not only HTTPS but gRPC service meshes, MQTT for IoT, SIP for VoIP, LDAPS, database connections (postgres:// with sslmode=verify-full), and container orchestration control planes. Mutual TLS (mTLS), where both client and server present certificates, is the default authentication mechanism in service meshes like Istio and Linkerd.

  - In 2024-2025, the primary TLS challenge is quantum readiness. NIST finalised its post-quantum cryptography standards (ML-KEM/Kyber, ML-DSA/Dilithium, SLH-DSA/SPHINCS+) in 2024, and browser vendors are beginning hybrid X25519+ML-KEM key exchange experiments in TLS 1.3. The IETF is standardising TLS with post-quantum key exchange groups. QUIC (HTTP/3) ships TLS 1.3 as an integral component, not a layered add-on, and now carries a substantial fraction of global web traffic. Encrypted Client Hello (ECH, replacing ESNI) addresses the last major metadata leak in TLS: the server name indication (SNI) extension that was previously sent in plaintext.