- ### Definition
  - EtherCAT (Ethernet for Control Automation Technology) is an open, IEC 61158-standardised real-time Ethernet fieldbus protocol developed by Beckhoff Automation, designed for deterministic, high-bandwidth communication between industrial master controllers and distributed slave devices such as servo drives, I/O modules, and encoders. Its distinctive on-the-fly processing architecture allows each slave node to read addressed data and insert its response while the Ethernet frame propagates through the network, achieving sub-microsecond synchronisation across distributed axes with minimal wiring complexity. EtherCAT is governed by the EtherCAT Technology Group (ETG) and is widely deployed in robotics, CNC machining, and semiconductor manufacturing.

- ### Semantic Classification
  - owl-class:: ether-cat:EtherCAT
  - owl-role:: Concept

- ### Relationships
  - enables [[Motion Control]]
  - enables [[Real Time]]
  - supports [[Industrial Robot]]
  - supports [[Servo Motor]]
  - relatedTo [[IndustrialAutomation]]

- ### Content
  - EtherCAT's architectural innovation lies in its processing-on-the-fly mechanism: unlike conventional Ethernet where packets travel to a destination and are returned, EtherCAT frames pass sequentially through all slave nodes in a logical ring, each slave extracting and inserting data within nanoseconds as the frame transits. This eliminates the latency penalties associated with store-and-forward switching and achieves cycle times as low as 100 microseconds with jitter in the nanosecond range for large networks.
  - The Distributed Clock (DC) feature synchronises all nodes to a common time reference with sub-microsecond accuracy across the entire network, enabling coordinated multi-axis motion without external hardware synchronisation triggers. This makes EtherCAT particularly well suited for multi-axis robotic systems where coordinated interpolation between joints is essential for smooth, accurate path following.
  - EtherCAT uses standard Ethernet hardware (IEEE 802.3 physical layer) but operates with a modified frame format that does not conform to standard IP routing. The master runs on a standard Ethernet port of the motion controller, often implemented entirely in software, while slaves use dedicated ASICs that handle the on-the-fly processing in hardware. The ETG maintains an extensive catalogue of certified slave devices from hundreds of vendors, and the Safety over EtherCAT (FSoE) extension adds IEC 61784-3-compliant functional safety communication over the same network.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z