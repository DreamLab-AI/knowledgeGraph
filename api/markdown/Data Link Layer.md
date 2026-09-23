
The data link layer is the second layer of the OSI model, responsible for node-to-node data transfer across a single physical link and for framing raw bits from the physical layer into structured frames. It provides addressing through hardware (MAC) addresses, error detection, and media access control that arbitrates shared transmission media. By presenting a reliable link to the network layer above, it abstracts away the imperfections of the underlying physical medium.

- ### Overview
  - The data link layer sits between the physical layer and the network layer in the OSI reference model.
  - It frames bits into structured units, adds hardware addressing, and applies error-detection codes.
  - Media access control governs how multiple devices share a common transmission medium without collision.
  - Ethernet is the dominant data link technology for wired local area networks.
- ### Mechanisms
  - Framing groups raw bits from the [[Physical Layer]] into delimited frames.
  - MAC addressing identifies devices uniquely on a local link.
  - Error detection via checksums flags corrupted frames for discard or retransmission.
  - Media access control arbitrates shared-medium access among contending devices.
  - [[Ethernet]] implements the layer for most wired local networks.
- ### Applications
  - Ethernet local area networking in offices and data centres.
  - Wi-Fi link management for wireless devices sharing a radio channel.
  - Switch operation forwarding frames based on MAC addresses.
  - Providing a dependable link abstraction to the [[Network Layer]] above.
- ### Provenance

