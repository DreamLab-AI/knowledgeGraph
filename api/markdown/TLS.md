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
  "definition": "Transport Layer Security (TLS) is an IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication channels over reliable transports such as TCP and QUIC. TLS 1.3 (RFC 8446, 2018) achieves a one-round-trip handshake using ephemeral Diffie-Hellman key exchange with mandatory forward secrecy, encrypting the server certificate within the handshake to prevent passive fingerprinting. It is the security foundation of HTTPS, gRPC, MQTT, SMTP-over-TLS, LDAPS, and virtually every application-layer protocol requiring channel security, with mutual TLS (mTLS) extending the model to bidirectional client and server authentication.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:ssl",
      "label": "SSL"
    },
    {
      "@id": "urn:ngm:class:transport-layer-security",
      "label": "Transport Layer Security"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      },
      {
        "@id": "urn:ngm:class:hkdf",
        "label": "HKDF"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTPS"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:mutual-tls",
        "label": "Mutual TLS"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Encrypted Communication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:forward-secrecy",
        "label": "Forward Secrecy"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Security"
      },
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      },
      {
        "@id": "urn:ngm:class:api-security",
        "label": "API Security"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ssl",
        "label": "SSL"
      },
      {
        "@id": "urn:ngm:class:ipsec",
        "label": "IPsec"
      },
      {
        "@id": "urn:ngm:class:wireguard",
        "label": "WireGuard"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC"
      },
      {
        "@id": "urn:ngm:class:encrypted-client-hello",
        "label": "Encrypted Client Hello"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[TLS]] (Transport Layer Security) is the IETF-standardised cryptographic protocol that provides authenticated, confidential, and integrity-protected communication over reliable transports. TLS uses [[Public-Key Cryptography]] for key agreement and authenticates parties via [[Digital Certificate]] chains rooted in trusted [[Certificate Authority]] hierarchies. The current version, TLS 1.3 (RFC 8446), eliminates legacy cipher suites, enforces [[Forward Secrecy]] by default, and encrypts the server certificate within the handshake. It forms the security backbone of [[HTTPS]], gRPC, SMTP, MQTT, and inter-service communication in [[Service Mesh]] architectures.

- ### Overview
  - TLS operates at the transport layer (between TCP/QUIC and the application), wrapping arbitrary byte streams in a session that provides:
    - **Confidentiality** — session data is encrypted with symmetric [[AEAD Cipher]] constructions (AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305).
    - **Integrity** — AEAD tags detect any modification or truncation of ciphertext.
    - **Authentication** — the server (and optionally the client) presents an [[X.509 Certificate]] signed by a [[Certificate Authority]] in the client's trust store.
    - **Forward Secrecy** — ephemeral [[Diffie-Hellman Key Exchange]] ensures that compromise of long-term private keys cannot decrypt past sessions.
  - TLS is not a standalone application; it is a library (OpenSSL, BoringSSL, mbedTLS, rustls, s2n-tls) that application protocols invoke. The handshake negotiates protocol version, cipher suite, and key material before any application data is sent.
  - Why it matters: TLS is the primary mechanism by which the open internet achieves confidentiality. Let's Encrypt (launched 2016) automated [[Certificate Authority]] issuance and drove near-universal HTTPS adoption on the web.

- ### Key Mechanisms
  - #### TLS Handshake (TLS 1.3)
    - Client sends `ClientHello` with supported cipher suites, TLS version, and a [[Diffie-Hellman Key Exchange]] key share (X25519 or P-256 by default).
    - Server replies with `ServerHello` (selecting cipher suite and providing its own DH key share), then sends `EncryptedExtensions`, `Certificate`, `CertificateVerify`, and `Finished` — all encrypted.
    - Client verifies the server's [[Digital Certificate]] against its trust store, checks the `CertificateVerify` signature, and sends its own `Finished`.
    - Application data flows. Total: **1 RTT** (0-RTT resumption with `session_ticket` is possible but carries replay-attack caveats).
  - #### Cipher Suites (TLS 1.3)
    - TLS 1.3 mandates only five cipher suites: `TLS_AES_128_GCM_SHA256`, `TLS_AES_256_GCM_SHA384`, `TLS_CHACHA20_POLY1305_SHA256`, and two AES-CCM variants. All use AEAD; unauthenticated encryption is eliminated.
    - Key derivation throughout uses [[HKDF]] (HMAC-based Extract-and-Expand Key Derivation Function) with SHA-256 or SHA-384.
  - #### Certificate Chain of Trust
    - Servers present a leaf certificate signed by an intermediate [[Certificate Authority]], which is in turn signed by a root CA embedded in the OS or browser trust store.
    - Certificate Transparency (RFC 6962) requires all publicly-trusted certificates to be logged in append-only [[Certificate Transparency Log]]s, enabling detection of mis-issuance.
    - OCSP Stapling allows servers to include a signed freshness proof from the CA, removing the need for the client to contact the CA during the handshake.
  - #### Mutual TLS (mTLS)
    - In [[Mutual TLS]], the server also requests a certificate from the client (`CertificateRequest` message). The client presents a client certificate signed by a CA trusted by the server.
    - mTLS is the default in [[Service Mesh]] deployments (Istio, Linkerd) where each workload sidecar holds a short-lived SPIFFE/SPIRE certificate; no passwords or API keys traverse the wire.
  - #### Record Layer
    - Application data is fragmented into TLS records (max 16 KiB), each encrypted and tagged independently. The record header includes a content type and protocol version (frozen at 0x0303 for TLS 1.3 for compatibility).
    - The `KeyUpdate` handshake message allows in-session key rotation without re-negotiation.
  - #### Session Resumption and 0-RTT
    - TLS 1.3 session tickets allow a client that previously connected to resume without a full handshake. With 0-RTT, early application data can be sent with the `ClientHello`, but the server must enforce idempotency because 0-RTT data is susceptible to replay.

- ### TLS Versions and History
  - **SSL 2.0 / 3.0** (Netscape, 1994–1996) — deprecated; POODLE, DROWN attacks.
  - **TLS 1.0** (RFC 2246, 1999) — successor to SSL 3.0; deprecated RFC 8996 (2021).
  - **TLS 1.1** (RFC 4346, 2006) — minor improvements; deprecated RFC 8996.
  - **TLS 1.2** (RFC 5246, 2008) — introduced AEAD ciphers, SHA-256; still widely deployed but complex due to legacy cipher negotiation.
  - **TLS 1.3** (RFC 8446, 2018) — current standard; complete handshake redesign, forward secrecy mandatory, 1-RTT by default.
  - Legacy TLS 1.0 and 1.1 removal was mandated by PCI DSS 3.2 (2018) and major browser vendors (2020).

- ### Applications and Use Cases
  - **Web (HTTPS)** — every HTTPS connection uses TLS. Chrome reports over 95% of page loads are HTTPS. [[HTTPS]] is the protocol; TLS is the security layer beneath it.
  - **API and microservices** — REST APIs, [[gRPC]], GraphQL endpoints use TLS for channel security. mTLS secures east-west traffic in [[Service Mesh]] architectures (Istio, Linkerd, Consul Connect).
  - **Email** — SMTP with STARTTLS and SMTPS (port 465), IMAP/POP3S use TLS. DANE (DNS-based Authentication of Named Entities) can pin server certificates via TLSA records.
  - **IoT** — [[MQTT]] over TLS (port 8883) secures device-to-broker communication in IoT platforms (AWS IoT Core, Azure IoT Hub).
  - **Databases** — PostgreSQL `sslmode=verify-full`, MySQL, MongoDB, Redis all support TLS for encrypted client-server communication.
  - **Container orchestration** — Kubernetes API server, etcd cluster, and kubelet all communicate over TLS; certificate rotation is managed by cert-manager or cloud provider CAs.
  - **VoIP and signalling** — SIP over TLS (SIPS) and DTLS-SRTP for WebRTC media encryption.
  - **VPN and overlay networks** — OpenVPN uses TLS for its control channel; [[WireGuard]] replaces TLS with Noise Protocol but serves a similar channel-security role.
  - **Federated learning** — privacy-preserving [[Federated Learning]] aggregation servers use TLS to protect gradient updates in transit, bridging security into the AI domain.
  - **Blockchain nodes** — peer-to-peer communication between nodes in Ethereum, Hyperledger Fabric, and similar [[Blockchain]] networks uses TLS or Noise Protocol for transport security.

- ### Post-Quantum Transition
  - Classical TLS 1.3 key exchange (X25519, P-256) is vulnerable to Harvest-Now-Decrypt-Later attacks by a future cryptographically-relevant quantum computer.
  - NIST finalised [[Post-Quantum Cryptography]] standards in 2024: ML-KEM (Kyber) for key encapsulation, ML-DSA (Dilithium) and SLH-DSA (SPHINCS+) for signatures.
  - Browser vendors and Cloudflare are trialling hybrid key exchange (X25519 + ML-KEM-768) in TLS 1.3, where both classical and post-quantum key shares are combined so that security holds if either algorithm is unbroken.
  - The IETF TLS working group is standardising new `supported_groups` values for post-quantum KEMs in TLS.
  - [[Encrypted Client Hello]] (ECH, replacing ESNI) addresses the last major plaintext metadata leak — the SNI extension — by encrypting the inner ClientHello using a public key published in DNS HTTPS records.

- ### Relationships
  - requires:: [[Certificate Authority]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Digital Certificate]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Diffie-Hellman Key Exchange]]
  - uses:: [[AEAD Cipher]]
  - uses:: [[HKDF]]
  - enables:: [[HTTPS]]
  - enables:: [[Network Security]]
  - enables:: [[Mutual TLS]]
  - enables:: [[Encrypted Communication]]
  - implements:: [[Forward Secrecy]]
  - implements:: [[Encryption]]
  - implements:: [[Authentication]]
  - supports:: [[Zero Trust Security]]
  - supports:: [[Service Mesh]]
  - supports:: [[API Security]]
  - contrastsWith:: [[SSL]]
  - contrastsWith:: [[IPsec]]
  - contrastsWith:: [[WireGuard]]
  - relatedTo:: [[Public-Key Cryptography]]
  - relatedTo:: [[X.509 Certificate]]
  - relatedTo:: [[Post-Quantum Cryptography]]
  - relatedTo:: [[QUIC]]
  - relatedTo:: [[Encrypted Client Hello]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Blockchain]]

- ### Standards and Context
  - **RFC 8446** — TLS 1.3 (IETF, 2018). The definitive specification.
  - **RFC 8996** — Deprecating TLS 1.0, 1.1, and DTLS 1.0 (IETF, 2021).
  - **RFC 5246** — TLS 1.2 (IETF, 2008); still in active deployment.
  - **RFC 6962** — Certificate Transparency (IETF, 2013; updated RFC 9162, 2021).
  - **RFC 8555** — ACME (Automatic Certificate Management Environment); protocol used by Let's Encrypt.
  - **RFC 9001** — Using TLS to Secure QUIC (IETF, 2021); TLS 1.3 integrated into QUIC.
  - **NIST SP 800-52r2** — Guidelines for TLS Implementations; governs US federal deployments.
  - **PCI DSS** — Payment Card Industry Data Security Standard mandates TLS 1.2 minimum (1.3 recommended) for cardholder data transmission.
  - Standardisation bodies: [[IETF]] (Internet Engineering Task Force) through the TLS working group, [[NIST]] for implementation guidance and post-quantum transitions.
  - Key implementations: OpenSSL, BoringSSL (Google), wolfSSL, mbedTLS (Arm), rustls (Rust), s2n-tls (AWS), SChannel (Windows), Secure Transport (Apple).

- ### Current Landscape (2026)
  - Post-quantum key agreement has gone mainstream: the hybrid X25519MLKEM768 group (ECDHE X25519 combined with NIST ML-KEM-768, FIPS 203) is now enabled by default in Chrome 131+, Firefox 132+, Safari 26+ and Edge 131+, and was formalised by the IETF as RFC 9954 (Hybrid Key Exchange in TLS 1.3) in July 2026.
  - Adoption has scaled fast to counter "harvest now, decrypt later" attacks: by mid-2025 over 30% of TLS 1.3 connections to Cloudflare's edge negotiated a PQC hybrid group (above 50% for modern browsers), and OpenSSL 3.5 (April 2025) shipped ML-KEM in the mainline tree so NGINX/Apache/HAProxy can negotiate it without patches.
  - Platform and library support matured through 2025-2026: hybrid ML-KEM TLS reached general availability in Windows 11 and Windows Server 2025 (Schannel GA, July 2026, opt-in via Enable-TlsEccCurve), and the JDK added it via JEP 527 in JDK 27; Akamai rolled PQC to origin and browser-facing edges across 2025.
  - Certificate lifetimes are being cut dramatically: the CA/Browser Forum passed Ballot SC-081v3 in April 2025, reducing maximum public TLS certificate validity from 398 days to 200 days (effective 15 March 2026), then 100 days (2027) and 47 days (2029), with domain-validation reuse falling to 10 days by 2029 - making certificate-lifecycle automation (ACME) essential.
  - Encrypted Client Hello (ECH), which encrypts the SNI and other ClientHello metadata under an HPKE server key, is now default-on in Chrome, Firefox and Safari (with DoH) and widely deployed by CDNs such as Cloudflare, Fastly, Amazon and Akamai, shifting hostname privacy across the web.
  - Key open challenges as of 2026: the authentication layer remains classical - the IETF has not yet finalised hybrid PQC certificates (ML-DSA/FN-DSA signatures), so measurement studies report roughly 0% PQC-certificate adoption; ML-KEM's ~1,184-byte keys push the ClientHello past a single packet and can trip old middleboxes; ECH erodes enterprise network visibility and compliance inspection; and around 15% of domains in banking and government still run legacy TLS 1.2.

- ### References
  - 1. Cloudflare (2025). The state of the post-quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 2. Akamai (2025). Post-Quantum Cryptography Implementation Considerations in TLS. https://www.akamai.com/blog/security/post-quantum-cryptography-implementation-considerations-tls
  - 3. IETF (2026). RFC 9954 - Hybrid Key Exchange in TLS 1.3. https://datatracker.ietf.org/doc/rfc9954/
  - 4. DigiCert (2025). TLS Certificate Lifetimes Will Officially Reduce to 47 Days. https://www.digicert.com/blog/tls-certificate-lifetimes-will-officially-reduce-to-47-days
  - 5. Microsoft (2026). ASP.NET, Kestrel and Schannel GA with TLS 1.3 Post-Quantum Cryptography. https://techcommunity.microsoft.com/blog/post-quantum-crypto-tech-blog/asp-net-kestrel-and-schannel-ga-with-tls-1-3-post-quantum-cryptography/4536649
  - 6. Systems Hardening (2026). Encrypted Client Hello (ECH) Deployment on NGINX, Cloudflare and Beyond. https://www.systemshardening.com/articles/network/encrypted-client-hello/

- ### Provenance
  - sources:: RFC 8446 (TLS 1.3), RFC 8996, RFC 9001, NIST SP 800-52r2, IETF TLS WG charter
  - updated:: 2026-06-13
