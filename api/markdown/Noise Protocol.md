The Noise Protocol Framework is a toolkit for building secure cryptographic handshake protocols based on Diffie-Hellman key agreement. Rather than a single fixed protocol, it defines a set of composable handshake patterns from which designers select to obtain specific authentication, confidentiality, and forward-secrecy properties. Its simplicity and clear security properties have made it the basis for transport security in messaging and peer-to-peer systems.

### Content

- Handshake patterns (such as XX, IK, and NK) encode which keys are exchanged and authenticated, yielding a transport channel with chosen properties. Noise underpins WireGuard, the Lightning Network transport, and WhatsApp, demonstrating its appeal for systems that need analysable, low-overhead encrypted channels without the complexity of TLS.

