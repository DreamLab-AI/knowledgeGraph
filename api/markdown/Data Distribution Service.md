
The Data Distribution Service is a middleware standard for real-time, data-centric publish-subscribe communication between distributed system components. It defines a global data space in which publishers and subscribers exchange typed data samples without direct knowledge of one another, governed by configurable quality-of-service policies for reliability, latency, and durability. It is widely used in robotics, autonomous vehicles, and other systems requiring deterministic machine-to-machine messaging.

- The [[Data Distribution Service]] is a [[Middleware]] standard for real-time, data-centric publish-subscribe communication between distributed components.
- It defines a global data space with configurable [[Quality of Service]] policies governing reliability, latency, and durability.
- It is the messaging backbone of the [[Robot Operating System]] and many [[Real-Time Systems]].
- ### Overview
- The Data Distribution Service organises communication around data rather than connections. Publishers write typed samples to named topics and subscribers read them, with the middleware handling discovery, delivery, and matching so the two sides never need direct references to each other. This decoupling in time, space, and flow suits dynamic, fault-tolerant systems.
- A defining feature is its rich set of quality-of-service policies. Designers can independently configure reliability, deadlines, latency budgets, history depth, durability, and ownership, allowing a single bus to carry both best-effort sensor streams and strictly reliable command channels. This makes deterministic machine-to-machine messaging practical at scale.
- The standard is maintained by the Object Management Group and serves as the default transport for modern robot middleware. Its data-centric, peer-to-peer architecture provides interoperability across vendors and supports demanding domains such as autonomous vehicles, industrial control, and aerospace.
- ### Mechanisms
- Data-centric publish-subscribe: components exchange typed samples through named topics.
- Automatic discovery: publishers and subscribers find and match each other without central brokers.
- Quality-of-service contracts: per-topic policies tune reliability, latency, durability, and history.
- Global data space: a shared logical model of all distributed data the system holds.
- Vendor interoperability: a common wire and behaviour standard lets implementations interwork.
- ### Applications
- Carrying sensor, command, and state messages in the [[Robot Operating System]].
- Providing deterministic buses for [[Autonomous Vehicle]] and industrial control stacks.
- Connecting [[Sensor Fusion]] and [[Robot Control]] components in real time.
- Underpinning resilient [[Distributed Systems]] that need configurable delivery guarantees.
- ### Provenance

