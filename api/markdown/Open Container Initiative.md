The Open Container Initiative (OCI) is an open governance structure under the Linux Foundation that produces vendor-neutral specifications for container formats and runtimes. Its core deliverables are the image specification, the runtime specification, and the distribution specification, which together standardise how container images are built, distributed, and executed. By defining these contracts, the OCI guarantees interoperability and portability across the container ecosystem.

### Overview

- Defines the lowest-common-denominator contracts that let any compliant tool build, ship, and run containers.
- Decouples image formats and runtimes from any single vendor, preventing lock-in.
- Underpins the broader cloud-native ecosystem by making containers a stable interoperability boundary.

### Key aspects

- Image specification fixing the layered filesystem and manifest format of container images.
- Runtime specification defining how a filesystem bundle is configured and executed.
- Distribution specification standardising how images are pushed to and pulled from registries.
- Open, consensus-driven governance under the Linux Foundation.
- Reference implementations such as runc that anchor conformance.

### Applications

- Guaranteeing images built by one tool run under any conformant runtime.
- Enabling Kubernetes to schedule workloads across heterogeneous runtimes via the CRI.
- Standardising registry distribution so images move freely between platforms.
- Providing a stable substrate for supply-chain signing and provenance tooling.

### Provenance

