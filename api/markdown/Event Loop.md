
An event loop is a programming construct that waits for and dispatches events or messages within a single-threaded execution model, repeatedly polling a queue of pending tasks and invoking their associated handlers. It is the engine of asynchronous, non-blocking programming, allowing a program to perform I/O and respond to many concurrent events without spawning a thread per operation. Event loops underpin runtime environments, user-interface frameworks, and high-concurrency network servers.

- ### Overview
  - The event loop solves the problem of handling many slow operations — network requests, disk reads, timers, user input — without blocking. Instead of waiting on each operation, the program registers a callback and continues; when the operation completes, its callback is queued for the loop to run.
  - This single-threaded, cooperative model avoids the complexity and overhead of locking shared state across threads, while still achieving high concurrency. Its trade-off is that long synchronous work in any handler stalls the entire loop.
- ### Mechanisms
  - A task queue holds ready callbacks awaiting execution in order.
  - Non-blocking I/O registers completion notifications rather than waiting inline.
  - Microtask and macrotask phases order promise resolutions ahead of timers and I/O callbacks.
  - Timer and idle phases schedule deferred and background work between dispatch cycles.
- ### Applications
  - JavaScript runtimes execute browser and server code on an event loop.
  - High-concurrency network servers handle thousands of connections per thread.
  - Graphical user-interface frameworks dispatch input and rendering events.
  - Simulation and game engines advance state through a per-frame loop.
- ### Provenance

