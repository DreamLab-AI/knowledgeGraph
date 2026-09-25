Gradient Synchronisation is the process of aggregating and distributing gradient updates across multiple workers or devices during distributed training of a neural network, ensuring all replicas converge on a consistent set of model parameters. It typically uses all-reduce or parameter-server communication patterns, and is a major bottleneck in large-scale training due to network bandwidth constraints. Techniques such as gradient compression and asynchronous updates trade off consistency for throughput.

### Provenance

