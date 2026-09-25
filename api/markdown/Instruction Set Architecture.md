An Instruction Set Architecture (ISA) is the abstract contract between hardware and software that defines the instructions a processor can execute, its registers, data types, addressing modes and memory model. It is the stable interface that allows compilers and operating systems to target a processor family without knowing its microarchitectural implementation. Examples include x86, ARM and the open RISC-V ISA, each balancing complexity, power efficiency and ecosystem support.

### Overview

- The ISA is the durable boundary that decouples software portability from hardware evolution. By specifying exactly what instructions mean and how the programmer-visible state behaves, it lets generations of processors run the same binaries while their internal pipelines, caches and execution units change radically. ISA design choices shape the entire software toolchain and performance envelope.

### Key aspects

- Instruction repertoire: the operations, encodings and formats the processor recognises.
- Register model: the architecturally visible registers and their roles.
- Memory model: addressing modes, alignment rules and ordering guarantees.
- Design philosophy: RISC versus CISC trade-offs in instruction complexity and count.
- Extensibility: optional extensions for vectors, cryptography and domain-specific acceleration.

### Applications

- Targeting compilers and toolchains to a processor family.
- Defining binary compatibility across processor generations.
- Enabling emulation and virtual machines that interpret or translate the ISA.
- Guiding hardware-software co-design for power and performance optimisation.

### Provenance

