Virtualisation is the creation of abstracted, software-defined representations of physical computing resources — processors, memory, storage and networks — allowing multiple isolated environments to share one set of hardware. A hypervisor or equivalent control layer presents each environment with the illusion of dedicated resources while multiplexing the underlying hardware. It is the foundational technology behind cloud computing, enabling consolidation, isolation, elastic provisioning and efficient utilisation of infrastructure.

### Overview

- A hypervisor partitions a physical host into multiple virtual machines, each running its own operating system as if on dedicated hardware.
- Type-1 (bare-metal) hypervisors run directly on hardware, while type-2 hypervisors run atop a host operating system.
- Beyond machine virtualisation, the same principle is applied to storage, networks and functions, decoupling logical services from physical devices.
- Virtualisation provides the isolation, portability and density that make multi-tenant cloud platforms economically viable.

### Mechanisms

- Hardware-assisted instructions trap and emulate privileged operations for guest environments.
- A control layer schedules and arbitrates physical resources among guests.
- Live migration moves running workloads between hosts without downtime.
- Snapshots and templates enable rapid, repeatable provisioning.

### Applications

- Server consolidation and data-centre efficiency.
- Cloud infrastructure and elastic provisioning.
- Network function virtualisation and software-defined networking.
- Development, testing and isolation of untrusted workloads.

### Provenance

