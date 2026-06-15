- ### Definition
  - Concurrency is the composition of independently executing computations that make progress within overlapping time periods, whether or not they run simultaneously on separate processors. It is a way of structuring a program so that multiple tasks can be in flight at once, coordinating access to shared state through synchronisation primitives. Concurrency is distinct from parallelism: it concerns the dealing with many things at once, while parallelism concerns the doing of many things at once.
  - Related concepts: [[Multithreading]] [[Message Passing]] [[Operating System]] [[Parallel Computing]] [[Asynchronous Programming]]

- ### Overview
  - Concurrency provides the conceptual and engineering foundation for software that must respond to many simultaneous events: servers handling thousands of connections, user interfaces that stay responsive during long operations, and distributed systems whose components run asynchronously. Its central challenge is coordinating access to shared resources without introducing race conditions, deadlocks, or starvation.

- ### Mechanisms
  - Threads and processes provide independent flows of control, scheduled onto cores by the operating system.
  - Synchronisation primitives such as locks, semaphores, monitors, and atomic operations enforce mutual exclusion and ordering on shared memory.
  - Message passing and the actor model avoid shared mutable state by communicating through channels or mailboxes instead.
  - Cooperative concurrency, built on event loops and asynchronous tasks, multiplexes many logical activities onto few threads without pre-emption.

- ### Applications
  - High-concurrency network servers and web back ends.
  - Responsive desktop and mobile user interfaces.
  - Pipelines and stream processing that overlap input, computation, and output.

- ### Relationships
  - requires:: [[Operating System]]
  - depends-on:: [[Multithreading]]
  - supports:: [[Parallel Computing]]
  - supports:: [[High-Throughput Computing]]
  - uses:: [[Message Passing]]
  - uses:: [[Multithreading]]
  - uses:: [[Event Loop]]
  - uses:: [[Asynchronous Programming]]
  - enables:: [[Real-Time Analytics]]
  - contrasts-with:: [[Parallel Computing]]
  - related-to:: [[Actor Model]]
  - related-to:: [[Parallel Processing]]
  - related-to:: [[Flow Control]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation