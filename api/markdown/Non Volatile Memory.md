Non-volatile memory (NVM) is computer storage that retains its data after power is removed, in contrast to volatile memory such as DRAM and SRAM. It encompasses technologies including NAND and NOR flash, EEPROM, and emerging persistent-memory devices that combine byte-addressability with durability. NVM is fundamental to firmware storage, embedded systems, solid-state drives, and the bootstrapping of computing platforms.

- Non-volatile memory (NVM) is a [[Hardware]] component that retains stored data when power is removed, distinguishing it from volatile [[Memory]] technologies such as [[SRAM]]. It is the durable substrate on which [[Firmware]] and boot images live, and underpins persistent storage in [[Embedded Systems]] across the computing stack.

### Overview

- NVM technologies span EEPROM, NOR flash, NAND flash, and emerging storage-class persistent memory. NOR flash offers random-access read suited to executing code in place, while NAND flash provides high-density block storage used in solid-state drives and removable media.
- Retention, endurance (program/erase cycles), and write latency are the defining engineering trade-offs. Wear-levelling and error-correction extend usable lifetime, balancing durability against cost and density.
- Persistent memory blurs the historical boundary between storage and working memory by offering byte-addressable, durable access at near-DRAM speeds, reshaping how systems checkpoint and recover state.

### Key aspects

- Data retention without power, measured in years at rated temperatures.
- Endurance limits expressed as program/erase cycle counts.
- Read/write asymmetry: reads are typically far faster than writes or erases.
- Block-oriented erase granularity in flash, requiring wear-levelling.
- Error-correcting codes to manage bit-rot and disturb effects.

### Applications

- Firmware and bootloader storage in [[Microcontroller]] and [[Embedded Systems]] designs.
- Solid-state drives and removable media for bulk persistent storage.
- Configuration and calibration data retention in [[IoT]] sensors and devices.
- Local caching and checkpointing for [[Edge Computing]] workloads.

### Provenance

