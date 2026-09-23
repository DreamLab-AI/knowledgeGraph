---
okf_version: "0.2"
type: Class
title: EtherCAT
resource: urn:ngm:class:ether-cat
domain: robotics
description: EtherCAT (Ethernet for Control Automation Technology) is an open, IEC 61158-standardised real-time Ethernet fieldbus protocol developed by Beckhoff Automation, enabling deterministic, high-bandwidth communication between industrial master controllers and distributed slave devices such as servo drives, I/O modules, and encoders. Its on-the-fly processing architecture allows each slave node to extra
maturity: mature
quality: 0.73
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:distributed-clocks
  - urn:ngm:class:safety-over-ethercat
  - urn:ngm:class:ethercat-automation-protocol
requires:
  - urn:ngm:class:ethernet
  - urn:ngm:class:ethercat-master
  - urn:ngm:class:ethercat-slave-controller
enables:
  - urn:ngm:class:motion-control
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:distributed-clock-synchronisation
  - urn:ngm:class:multi-axis-control
implements:
  - urn:ngm:class:iec-61158
  - urn:ngm:class:iec-61784
contrastsWith:
  - urn:ngm:class:profinet
  - urn:ngm:class:ethernet-ip
  - urn:ngm:class:powerlink
  - urn:ngm:class:sercos-iii
bridgesTo:
  - urn:ngm:class:time-sensitive-networking
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:industrial-io-t
supports:
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:servo-motor
  - urn:ngm:class:programmable-logic-controller
  - urn:ngm:class:cnc-machining
standardizedBy:
  - urn:ngm:class:iec
  - urn:ngm:class:ether-cat
relatedTo:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:functional-safety
  - urn:ngm:class:opc-ua
  - urn:ngm:class:ros
  - urn:ngm:class:industrial-automation
---

# EtherCAT

EtherCAT (Ethernet for Control Automation Technology) is an open, IEC 61158-standardised real-time Ethernet fieldbus protocol developed by Beckhoff Automation, enabling deterministic, high-bandwidth communication between industrial master controllers and distributed slave devices such as servo drives, I/O modules, and encoders. Its on-the-fly processing architecture allows each slave node to extract addressed data from and insert its response into a propagating Ethernet frame, achieving sub-microsecond synchronisation across large distributed networks. Governed by the EtherCAT Technology Group (ETG), the standard is widely deployed in industrial robotics, CNC machining, semiconductor manufacturing, and laboratory automation, with the Safety over EtherCAT (FSoE) extension providing IEC 61784-3-compliant functional safety over the same physical layer.
