Command Query Responsibility Segregation (CQRS) is a software architecture pattern that separates the model used to update state (commands) from the model used to read state (queries). By using distinct write and read paths, systems can independently optimise, scale, and secure each side, often pairing the write model with event sourcing. It is commonly applied in high-throughput, complex-domain systems where read and write workloads diverge.

### Content

- Commands mutate aggregate state and emit events, while queries serve denormalised read models built for fast retrieval. The pattern trades increased complexity and eventual consistency for scalability, clearer domain boundaries, and the ability to project the same event stream into multiple specialised read stores.

