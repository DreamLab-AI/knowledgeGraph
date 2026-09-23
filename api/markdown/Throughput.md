
Throughput is the rate at which a system completes useful work over a unit of time, such as requests served per second, tokens generated per second or bytes transferred per second. It measures sustained productive capacity rather than the time to complete a single operation. In machine learning serving it captures how many inferences or training samples a system can process under load. Maximising throughput typically involves batching, parallelism and resource utilisation, often trading off against per-request latency.

- ### Overview
  - Throughput expresses sustained productive capacity: how much work a system accomplishes in aggregate rather than how quickly any single operation finishes. It is typically reported in operations per second, such as requests, transactions, tokens or bytes per second.
  - In machine learning serving, throughput governs how many inference requests or training samples a system processes under load, directly shaping cost-efficiency and the ability to meet demand at scale.

- ### Mechanisms
  - Batching aggregates many requests into a single execution so fixed overheads and accelerator pipelines amortise across more work.
  - Parallelism across cores, devices and nodes multiplies the number of operations in flight at once.
  - Load balancing distributes work evenly so no resource becomes a bottleneck while others sit idle.
  - High resource utilisation keeps compute, memory bandwidth and I/O busy, which is the practical ceiling on throughput.

- ### Applications
  - Online inference services where many concurrent users must be served economically.
  - Training pipelines where samples processed per second determines time-to-convergence.
  - Network and storage systems measured in sustained data transfer rates.
  - Capacity planning and benchmarking of distributed systems.

- ### Provenance

