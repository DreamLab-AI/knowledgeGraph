
Latency optimisation is the set of techniques used to minimise the time between a request and its corresponding response in networked and distributed systems. It targets propagation, processing, queueing, and serialisation delays through measures such as edge placement, caching, protocol tuning, and concurrency. Low latency is critical for real-time communication, interactive collaboration, and responsive user experiences.

- ### Overview
  - Latency optimisation reduces the end-to-end delay experienced by users and services. Total latency is the sum of propagation delay (limited by distance and the speed of light), transmission delay, queueing delay, and processing delay; effective optimisation attacks each component.
  - In collaborative and real-time systems, even tens of milliseconds materially affect perceived responsiveness, making latency a first-class engineering concern alongside [[Throughput]] and correctness.
- ### Key aspects
  - Decomposition of latency into propagation, transmission, queueing, and processing.
  - Proximity strategies: [[Edge Computing]] and geo-distribution.
  - Caching at multiple tiers to avoid repeated work and round trips.
  - Protocol tuning: connection reuse, multiplexing, and reduced handshakes.
  - Tail latency (p99) management versus average latency.
- ### Mechanisms
  - [[Content Delivery Network]] edge nodes serving content near users.
  - [[Caching]] of computed results and static assets.
  - Asynchronous and pipelined processing to hide round-trip time.
  - Adaptive [[Bandwidth Adaptation]] and prefetching for interactive media.
- ### Applications
  - Real-time video conferencing and collaborative editing.
  - Interactive web applications and low-latency APIs.
  - Online gaming and cloud-rendered experiences.
  - Financial trading and other time-sensitive [[Distributed Systems]].
- ### Provenance

