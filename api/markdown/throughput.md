- ### Definition
  - Throughput is the rate of useful work completed per unit time, a core [[Performance Metrics]] concept distinct from [[Latency]] and [[Response Time]]. It is raised through [[Batching]], [[Parallel Processing]] and [[Load Balancing]].

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

- ### Relationships
  - subClassOf:: [[Performance Metrics]]
  - hasPart:: [[Request Rate]]
  - hasPart:: [[Batch Size]]
  - contrastsWith:: [[Latency]]
  - contrastsWith:: [[Response Time]]
  - requires:: [[Parallel Processing]]
  - enables:: [[Scalability]]
  - enables:: [[High Availability]]
  - uses:: [[Batching]]
  - uses:: [[Load Balancing]]
  - dependsOn:: [[Hardware Acceleration]]
  - dependsOn:: [[Resource Utilization]]
  - supports:: [[Model Serving]]
  - supports:: [[Performance Optimization]]
  - relatedTo:: [[Bandwidth]]
  - relatedTo:: [[Benchmarking]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation