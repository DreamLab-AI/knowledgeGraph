A Virtual Private Network (VPN) is a security technology that establishes an encrypted tunnel between a user's device and a remote server, routing traffic through it so that data confidentiality and integrity are preserved across untrusted networks. By encapsulating and encrypting packets, a VPN conceals the user's originating address and protects communications from interception on shared or public infrastructure. VPNs are widely used for secure remote access to private networks, for privacy on public Wi-Fi, and for circumventing network-level filtering.

### Overview

- A VPN client encapsulates outbound packets, encrypts them, and forwards them to a VPN gateway that decrypts and relays them onward; return traffic is handled symmetrically.
- The tunnel hides packet contents and the originating address from observers on the intermediate path, mitigating eavesdropping and traffic analysis on shared links.
- Common protocol families include IPsec, WireGuard, and TLS-based designs; each negotiates keys, authenticates peers, and provides confidentiality and integrity.
- VPNs are deployed for enterprise remote access, secure interconnection of branch sites, and consumer privacy.

### Mechanisms

- **Tunnelling**: original packets are wrapped inside an outer transport for transit across the public network.
- **Encryption**: symmetric ciphers protect payload confidentiality once keys are negotiated via a handshake.
- **Authentication**: peers verify identity using certificates, pre-shared keys, or token-based credentials before the tunnel is established.
- **Integrity**: message authentication codes detect tampering of in-flight packets.

### Applications

- Secure remote access for employees connecting to corporate resources.
- Privacy protection on untrusted public Wi-Fi networks.
- Site-to-site connectivity linking distributed offices over the public Internet.
- Bypassing network-level filtering and censorship.

### Provenance

