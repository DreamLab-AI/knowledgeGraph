
A network interface is the hardware or software point at which a computing device connects to a network, mediating the transmission and reception of data frames. In hardware it is realised as a network interface controller bearing a unique MAC address; in software it appears as a named, addressable endpoint that the operating system binds to a protocol stack. The interface bridges the physical and data-link layers to the network layer, allowing higher-level protocols to send and receive packets without managing the underlying medium.

- ### Overview
  - In hardware the interface is a network interface controller, with a burned-in MAC address identifying it on a local segment.
  - The operating system exposes each interface as a named, configurable object that protocols bind to.
  - The interface abstracts the transmission medium, so higher layers send packets without knowing whether the link is Ethernet, wireless or virtual.
  - Virtual interfaces extend the concept to containers, virtual machines and overlay networks.
- ### Key aspects
  - Addressing: a hardware MAC address at the link layer and one or more IP addresses at the network layer.
  - Driver mediation: the operating system driver translates between the controller and the protocol stack.
  - Layering: the interface sits across physical, data-link and network layers, presenting a uniform send/receive abstraction.
  - Configuration: speed, duplex, MTU and addressing parameters govern its behaviour.
- ### Applications
  - Connecting servers, workstations and embedded devices to wired and wireless networks.
  - Virtual networking for containers and virtual machines via software interfaces.
  - High-throughput data-centre links and network function virtualisation.
  - Multi-homing and link aggregation for redundancy and bandwidth.
- ### Provenance

