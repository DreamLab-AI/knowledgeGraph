- ### Definition
  - A GPU cluster is a group of interconnected computers each equipped with graphics processing units, used together for parallel computation. Such clusters are central to training large AI models and high-performance computing.

- ### Semantic Classification
  - owl-class:: computing:GPUCluster
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[GPU Computing]]
  - bridges-to:: [[GPU Computing]]
  - requires:: [[GPU]], [[NVIDIA H100]]
  - enables:: [[Deep Learning]]

- ### Content
  - A GPU cluster links many GPU-equipped nodes through high-speed networking so that work can be distributed across thousands of accelerators. Interconnects such as NVLink and InfiniBand and software for distributed training coordinate computation and gradient exchange across the nodes.
  - These clusters provide the scale needed to train large neural networks within practical timeframes and to serve high-throughput inference. Their design balances compute, memory bandwidth, networking and power and cooling constraints.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z