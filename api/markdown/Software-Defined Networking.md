
Software-defined networking (SDN) is a network architecture that decouples the control plane, which decides how traffic is routed, from the data plane, which forwards packets, centralising control logic in a programmable software controller. By exposing the network through open interfaces, SDN allows traffic flows and policies to be configured dynamically and programmatically rather than device-by-device. This abstraction enables automation, virtualisation and centralised orchestration of network behaviour.

- ### Overview
  - SDN replaces per-device manual configuration with centralised, programmatic control.
  - A logically central controller maintains a global view of the network.
  - Open southbound interfaces (such as OpenFlow) instruct forwarding devices.
  - Northbound APIs let applications request network behaviour and policy.
- ### Mechanisms
  - Control plane computes forwarding decisions centrally.
  - Data plane devices forward packets according to installed flow rules.
  - Controller programs flows through standardised southbound protocols.
  - Network applications consume northbound APIs for orchestration.
- ### Applications
  - Data-centre and cloud network automation.
  - Network virtualisation and multi-tenant isolation.
  - Traffic engineering and dynamic policy enforcement.
  - Enabling [[Network Slicing]] in carrier networks.
- ### Provenance

