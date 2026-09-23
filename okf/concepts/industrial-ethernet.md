---
okf_version: "0.2"
type: Class
title: Industrial Ethernet
resource: urn:ngm:class:industrial-ethernet
domain: infrastructure
description: "Industrial Ethernet is the adaptation of standard IEEE 802.3 Ethernet for factory-floor and process control: ruggedised hardware combined with real-time protocol extensions — PROFINET, EtherNet/IP, EtherCAT, POWERLINK, Modbus TCP — that add the determinism, cyclic exchange, and device profiles plain Ethernet lacks. It delivers 100 Mbit/s and gigabit speeds, cycle times down to tens of microseconds"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:ethernet
hasPart:
  - urn:ngm:class:profinet
contrastsWith:
  - urn:ngm:class:fieldbus
partOf:
  - urn:ngm:class:industrial-automation
relatedTo:
  - urn:ngm:class:time-sensitive-networking
---

# Industrial Ethernet

Industrial Ethernet is the adaptation of standard IEEE 802.3 Ethernet for factory-floor and process control: ruggedised hardware combined with real-time protocol extensions — PROFINET, EtherNet/IP, EtherCAT, POWERLINK, Modbus TCP — that add the determinism, cyclic exchange, and device profiles plain Ethernet lacks. It delivers 100 Mbit/s and gigabit speeds, cycle times down to tens of microseconds in hard-real-time variants, and seamless connectivity between automation devices and IT systems, and has overtaken classic fieldbus as the dominant networking technology in new industrial installations.
