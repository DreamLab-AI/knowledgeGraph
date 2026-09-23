
A session key is a temporary symmetric cryptographic key generated for the duration of a single communication session, used to encrypt the data exchanged between parties after an initial key exchange handshake. Session keys have bounded lifetimes and are discarded at the end of the session, limiting the window of vulnerability if the key is compromised. Ephemeral session keys derived from asymmetric key exchanges (such as Diffie-Hellman) provide forward secrecy, ensuring past sessions remain private even if long-term private keys are later exposed.

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

- ### Provenance

