Load balancing is the distribution of incoming work across multiple compute resources to maximise throughput, minimise latency, and avoid overloading any single node. It operates at network layers from L4 transport to L7 application routing, using algorithms such as round-robin, least-connections, and consistent hashing. Health checking and failover make it foundational to scalable, resilient distributed systems.

### Content

- L4 balancers route by IP and port while L7 balancers inspect application data to make content-aware decisions. Combined with active health checks and connection draining, load balancing enables horizontal scaling and graceful handling of node failures without client disruption.

