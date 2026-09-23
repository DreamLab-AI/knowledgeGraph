
IPsec (Internet Protocol Security) is a suite of protocols that secures IP communications by authenticating and encrypting each packet at the network layer. It provides confidentiality, integrity and origin authentication through the Authentication Header and Encapsulating Security Payload protocols, with keys negotiated via the Internet Key Exchange. IPsec is the foundational technology for site-to-site and remote-access virtual private networks operating transparently beneath application protocols.

- ### Overview
  - IPsec secures traffic below the transport layer so that any application's packets gain confidentiality and integrity without modification. It can operate in transport mode, protecting payloads between hosts, or tunnel mode, encapsulating entire packets between gateways to form VPNs. Security associations and the IKE negotiation establish the cryptographic parameters protecting each flow.
- ### Mechanisms
  - Authentication Header: integrity and origin authentication without encryption.
  - Encapsulating Security Payload: confidentiality plus optional integrity for packet payloads.
  - Internet Key Exchange: authenticated negotiation of keys and security associations.
  - Transport vs tunnel mode: protecting host-to-host payloads versus full-packet gateway tunnels.
  - Security associations: the directional, parameterised state defining how each flow is protected.
- ### Applications
  - Site-to-site VPNs connecting branch offices over the public internet.
  - Remote-access VPNs securing mobile and home worker connectivity.
  - Securing host-to-host traffic in zero-trust network segments.
  - Protecting routing and control-plane communications between network devices.
- ### Provenance

