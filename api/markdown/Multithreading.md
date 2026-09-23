
Multithreading is a programming and execution model in which a single process contains multiple threads of execution that share the process's memory and resources while running concurrently. It enables responsiveness and parallel use of multiple CPU cores, but introduces the need for synchronisation to avoid race conditions and deadlocks. The operating system scheduler interleaves or parallelises threads, and shared mutable state must be coordinated with locks or other primitives.

- ### Overview
  - Threads are lightweight units of execution that share their parent process's address space, so they communicate cheaply but must guard shared state.
  - Multithreading improves responsiveness (one thread blocks while others proceed) and throughput (threads run in parallel on multiple cores).
- ### Key aspects
  - Shared memory model: threads see the same heap, requiring synchronisation primitives.
  - Scheduling: the OS interleaves threads on a single core and distributes them across many.
  - Hazards: race conditions, deadlocks and contention must be controlled with locks and atomics.
- ### Applications
  - High-throughput servers handling many concurrent connections.
  - Parallel computation across CPU cores for data and compute workloads.
  - Responsive user interfaces offloading work to background threads.
- ### Provenance

