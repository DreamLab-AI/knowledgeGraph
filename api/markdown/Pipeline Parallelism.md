Pipeline parallelism splits a computation into ordered stages assigned to different processing units, so that distinct items occupy different stages at once and throughput rises once the pipeline is filled. It is widely used to train large deep learning models across multiple devices by assigning successive layers or micro-batches to separate accelerators.

### Semantic Classification

### Content

- In pipeline parallelism a task is divided into sequential stages, each handled by a separate unit, allowing several inputs to be processed simultaneously at different stages. Throughput is limited by the slowest stage, and latency includes the time to traverse all stages.
- The graphics pipeline is a classic example, with vertex, rasterisation and fragment stages overlapping across many primitives. The pattern also appears in distributed training of large models split across devices.

### Provenance

