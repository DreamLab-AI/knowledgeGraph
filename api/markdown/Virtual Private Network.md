A virtual private network (VPN) is a technology that establishes an encrypted tunnel over a shared or public network, allowing devices to communicate as if they were directly connected to a private network. It authenticates endpoints, encrypts traffic in transit, and encapsulates packets so that data confidentiality and integrity are preserved across untrusted links. VPNs are used for secure remote access to corporate resources, site-to-site connectivity, and privacy-preserving internet use. Common implementations rely on protocols such as IPsec, TLS, and WireGuard, though zero-trust architectures increasingly complement or supersede perimeter VPN models.

- A virtual private network establishes an encrypted tunnel over a public network so devices communicate as though privately connected. As a [[Network Security]] mechanism it combines [[Encryption]], [[Tunneling]], and [[Authentication]] to deliver secure [[Remote Access]] and [[Privacy]].

### Overview

- VPNs solve the problem of trusting an untrusted transport: by encrypting and authenticating, they extend a private network's security boundary across the open internet.
- They are central to remote work, connecting branch offices, and shielding traffic from interception.
- The perimeter-centric VPN model is increasingly supplemented by [[Zero Trust]] approaches that authenticate per-request rather than per-tunnel.

### Key aspects

- Endpoint authentication and key exchange.
- Packet encapsulation and [[Encryption]] in transit.
- Protocol choices: [[IPsec]], [[TLS]]-based, and WireGuard.

### Applications

- Secure remote access to corporate systems.
- Site-to-site connectivity between offices.
- Privacy-preserving consumer internet usage.
- Complementing a [[Firewall]] and [[Access Control]] perimeter.

### Provenance

