Network bandwidth is the maximum rate at which data can be transferred across a network path, typically measured in bits per second. It defines the capacity of a communication channel rather than its current utilisation or the time taken for an individual message to traverse the path. Bandwidth interacts with latency and packet loss to determine the effective throughput experienced by applications.

### Overview

- Network bandwidth is a fundamental capacity constraint in any distributed or networked system. It is often conflated with throughput and latency, but the three are distinct: bandwidth is the theoretical maximum capacity, throughput is the achieved data rate under real conditions, and latency is the delay before transfer begins. Real-world performance depends on how protocols manage flow control, congestion, and the bandwidth-delay product of a path.

### Key aspects

- Bandwidth describes channel capacity, distinct from achieved throughput and from latency.
- The bandwidth-delay product determines how much data can be in flight on a path.
- Congestion control and quality-of-service mechanisms allocate shared bandwidth among flows.
- Effective bandwidth is reduced by packet loss, protocol overhead, and contention.

### Applications

- Provisioning capacity for video streaming and real-time media.
- Designing content delivery networks to minimise origin load and improve delivery.
- Sizing interconnects between cloud regions and data centres.
- Shaping and prioritising traffic to meet service-level objectives.

### Provenance

