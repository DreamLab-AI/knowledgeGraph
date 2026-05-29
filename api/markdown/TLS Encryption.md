public:: true

# TLS Encryption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tls-encryption",
  "@type": "Page",
  "vc:slug": "tls-encryption",
  "title": "TLS Encryption",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tls-encryption",
  "@type": "Class",
  "label": "TLS Encryption",
  "definition": "TLS (Transport Layer Security) encryption is the cryptographic protocol layer that provides confidentiality, integrity, and server authentication for communications over TCP/IP networks, most visibly as the foundation of HTTPS. It operates through a handshake that negotiates cipher suites, authenticates servers (and optionally clients) via X.509 certificates, establishes ephemeral session keys using asymmetric key exchange (ECDHE), and then encrypts all subsequent data using symmetric ciphers (AES-GCM). TLS 1.3 (RFC 8446, 2018) is the current standard, eliminating obsolete constructs and reducing handshake latency to one round trip.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:asymmetric-encryption", "label": "Asymmetric Encryption"},
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"},
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:secure-communication", "label": "Secure Communication"},
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tls", "label": "TLS"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"},
      {"@id": "urn:ngm:class:key-derivation-function", "label": "Key Derivation Function"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[TLS Encryption]] is a [[Cryptographic Protocol]] that secures TCP/IP communications through a negotiated handshake that authenticates servers via [[Digital Certificate]] chains rooted in trusted [[Certificate Authority]] hierarchies and establishes ephemeral [[Symmetric Encryption]] session keys using [[Asymmetric Encryption]] key exchange, forming the backbone of [[Secure Communication]] across the internet.

- ### Relationships
  - TLS encryption depends on [[Public Key Infrastructure]] and [[Certificate Authority]] hierarchies for server identity verification, [[Asymmetric Encryption]] (ECDHE) for forward-secret key exchange, and [[Symmetric Encryption]] (AES-GCM, ChaCha20-Poly1305) for bulk data encryption. [[Key Derivation Function]] operations derive independent session keys for each direction of the connection. It enables [[Secure Communication]] and is a foundational pillar of [[Network Security]]. The [[TLS]] abstraction is implemented in libraries such as OpenSSL, BoringSSL, and rustls and is referenced alongside [[Cryptographic Key Management]] lifecycle processes.

- ### Content
  - TLS is the successor to SSL (Secure Sockets Layer), developed by Netscape in 1994 to enable secure e-commerce on the early web. SSL 3.0 (1996) was the last SSL version, superseded by TLS 1.0 (RFC 2246, 1999), TLS 1.1 (2006), and TLS 1.2 (RFC 5246, 2008). TLS 1.2 remained the production standard for a decade, deploying AES-GCM authenticated encryption and ECDHE key exchange. TLS 1.0 and 1.1 were deprecated by RFC 8996 (2021). TLS 1.3 (RFC 8446, 2018) eliminated RSA key exchange, reduced the handshake to 1-RTT (0-RTT for session resumption), and removed weak cipher suites (RC4, DES, 3DES, SHA-1 in HMAC contexts).

  - The TLS 1.3 handshake proceeds as follows: the client sends a ClientHello with supported cipher suites and a key share (ECDHE public key). The server responds with a ServerHello selecting the cipher suite, its own key share, and its certificate. Both parties independently derive the same session keys from the shared ECDHE secret using HKDF (HMAC-based Key Derivation Function). The server immediately sends an encrypted Finished message; the client verifies it and responds. The symmetric session is then active. For 0-RTT resumption, the client can send application data in the first flight using a pre-shared ticket key, at the cost of losing forward secrecy for that data.

  - TLS encryption is deployed on virtually every HTTPS web connection, SMTP/IMAP email relay, MQTT IoT broker, gRPC API, database connection, and VPN tunnel. Let's Encrypt, launched in 2016, automated certificate issuance for the web, driving HTTPS deployment from around 40% to over 95% of web traffic within eight years. Certificate Transparency logs provide public auditability of certificate issuance, enabling detection of mis-issuance and domain hijacking.

  - As of 2024-2025, post-quantum TLS is the foremost standards challenge. NIST's FIPS 203 (ML-KEM/Kyber) is being integrated into TLS as a hybrid key exchange alongside ECDHE, with experimental deployments in Chrome and Cloudflare active from 2023. QUIC (RFC 9000), the UDP-based transport underlying HTTP/3, embeds TLS 1.3 natively into the transport layer, eliminating the head-of-line blocking of TCP-based TLS. Encrypted Client Hello (ECH) is a proposed extension to hide server identity from on-path observers even when SNI-based virtual hosting is used, addressing a persistent metadata leakage concern in current deployments.

