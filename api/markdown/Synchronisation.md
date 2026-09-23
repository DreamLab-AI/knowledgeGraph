
Synchronisation is the coordination of multiple processes, devices, or data replicas so that they reach a consistent state or act in a precise temporal relationship. In computing it covers concurrency primitives like locks and barriers; in distributed and robotic systems it covers clock alignment and coordinated motion. Accurate synchronisation is essential wherever independent components must agree on order, timing, or shared state.

- ### Content
  - At the systems level, synchronisation uses primitives such as mutexes, semaphores, barriers, and consensus protocols to serialise access to shared state and order events. In real-time and robotic control it relies on tight clock alignment and deterministic communication so that actuators move in concert. Distributed deployments add the harder problem of agreeing on time and order across nodes that have no shared clock, addressed by protocols like NTP, PTP, and logical-clock schemes.

