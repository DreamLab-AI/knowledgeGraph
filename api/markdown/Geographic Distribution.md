
Geographic distribution is the placement of computing resources, data, or services across physically separate locations and regions. In distributed systems it reduces latency for global users, improves fault tolerance against regional outages, and helps satisfy data-residency requirements. It introduces trade-offs around consistency, replication, and inter-region network costs.

- ### Content
  - Multi-region deployments replicate data and services close to users, using techniques such as geo-routing, edge caching, and regional failover. They force explicit choices on the consistency-availability spectrum, since synchronous cross-region replication adds latency while asynchronous replication risks staleness. Data-sovereignty and compliance rules often dictate where particular data may physically reside.

