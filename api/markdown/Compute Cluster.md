A compute cluster is a collection of interconnected computers that work together as a single system to execute large or parallel workloads. Nodes are coordinated by a scheduler that allocates jobs across processors, accelerators, and memory, sharing high-speed networking and often a common storage fabric. Clusters underpin large-scale model training, simulation, and data processing where a single machine cannot supply enough compute.

### Overview

- A compute cluster aggregates the processors, accelerators, memory, and storage of many machines into a unified resource pool.
- Nodes communicate over high-bandwidth, low-latency interconnects so that work can be split and recombined efficiently.
- A scheduler queues, places, and monitors jobs, enforcing fairness, priority, and resource quotas across many users.
- Clusters span on-premise data centres and elastic cloud regions, and are increasingly orchestrated by container platforms.

### Key aspects

- Node fabric: compute nodes equipped with CPUs and accelerators linked by fast networking.
- Scheduling and orchestration: software that places jobs and manages contention for shared resources.
- Shared storage: parallel or networked file systems feeding data to many nodes simultaneously.
- Interconnect: high-speed links enabling collective communication for distributed workloads.
- Resource isolation: quotas, namespaces, and partitions that separate tenants and workloads.

### Applications

- Training and fine-tuning large neural networks across many accelerators.
- Scientific simulation, modelling, and large-scale data analytics.
- Batch processing and high-throughput computing pipelines.
- Serving MLOps platforms that schedule training and inference jobs elastically.

### Provenance

