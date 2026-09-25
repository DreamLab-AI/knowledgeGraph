Containerisation is an operating-system-level virtualisation technique that packages an application together with its dependencies, libraries, and configuration into a single portable, isolated unit called a container. Containers share the host kernel yet maintain isolated user spaces, making them far lighter than full virtual machines while remaining reproducible across environments. The approach underpins cloud-native software delivery, providing consistent runtime behaviour from a developer's laptop to production clusters.

### Overview

- Containerisation solves the "works on my machine" problem by making the runtime environment part of the deliverable artefact.
- An image is an immutable, layered filesystem snapshot; a container is a running instance of that image.
- Kernel features such as namespaces and control groups provide process isolation and resource limits without a separate guest OS.
- The Open Container Initiative standardises image and runtime formats so artefacts are portable across vendors.

### Key aspects

- Isolation: each container has its own view of processes, network, and filesystem while sharing the host kernel.
- Immutability: images are built once and run unchanged, supporting reproducible deployments.
- Portability: the same image runs across laptops, CI, and production clusters.
- Density: many containers run on one host with minimal overhead compared with virtual machines.

### Applications

- Packaging microservices for independent build, ship, and scale cycles.
- Reproducible CI pipelines where build and test run in disposable containers.
- Edge and IoT deployment of lightweight workloads.
- Data-science environments pinned to exact dependency versions for reproducibility.

### Provenance

