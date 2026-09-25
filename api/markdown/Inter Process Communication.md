Inter-process communication (IPC) is the set of mechanisms an operating system provides for separate processes to exchange data and coordinate their actions despite running in isolated address spaces. Common mechanisms include pipes, message queues, shared memory, sockets and remote procedure calls, each trading off speed, structure and scope. IPC is foundational to modular system design, microservices and any architecture composed of cooperating processes.

### Overview

- Because processes are isolated for safety, the OS must supply explicit channels for them to cooperate; these channels are collectively called IPC.
- The choice of mechanism shapes performance and coupling: shared memory is fast but unstructured, while message queues and RPC add structure across machines.

### Mechanisms

- Pipes and message queues: ordered byte or message streams between processes.
- Shared memory: a common region mapped into multiple processes for low-latency exchange.
- Sockets and RPC: networked communication enabling distributed and microservice systems.

### Applications

- Microservice and modular architectures composed of cooperating processes.
- Operating-system services, daemons and client-server desktop software.
- Distributed systems and middleware bridging processes across hosts.

### Provenance

