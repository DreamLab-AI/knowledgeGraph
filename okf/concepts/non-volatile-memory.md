---
okf_version: "0.2"
type: Class
title: Non Volatile Memory
resource: urn:ngm:class:non-volatile-memory
domain: infrastructure
description: Non-volatile memory (NVM) is computer storage that retains its data after power is removed, in contrast to volatile memory such as DRAM and SRAM. It encompasses technologies including NAND and NOR flash, EEPROM, and emerging persistent-memory devices that combine byte-addressability with durability. NVM is fundamental to firmware storage, embedded systems, solid-state drives, and the bootstrapping
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware
hasPart:
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:power-management
enables:
  - urn:ngm:class:firmware
dependsOn:
  - urn:ngm:class:hardware
contrastsWith:
  - urn:ngm:class:sram
bridgesTo:
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:embedded-systems
relatedTo:
  - urn:ngm:class:memory
  - urn:ngm:class:energy-efficiency
  - urn:ngm:class:io-t
  - urn:ngm:class:reliability
---

# Non Volatile Memory

Non-volatile memory (NVM) is computer storage that retains its data after power is removed, in contrast to volatile memory such as DRAM and SRAM. It encompasses technologies including NAND and NOR flash, EEPROM, and emerging persistent-memory devices that combine byte-addressability with durability. NVM is fundamental to firmware storage, embedded systems, solid-state drives, and the bootstrapping of computing platforms.
