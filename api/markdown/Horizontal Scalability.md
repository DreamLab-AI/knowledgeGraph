Horizontal scalability is the capacity of a system to increase throughput by adding more independent nodes rather than upgrading a single machine (vertical scaling). It relies on partitioning work and state so that load can be distributed across commodity servers behind a balancer. Horizontal scaling underpins cloud-native and distributed architectures because it offers near-linear, fault-tolerant growth.

### Content

- Achieving it requires sharding or replicating state, stateless service tiers, and consistency strategies that tolerate partial failure. The pattern favours commodity hardware and elastic autoscaling, but introduces coordination, data-locality, and consistency trade-offs that vertical scaling avoids.

