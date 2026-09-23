
An AI accelerator is a class of specialised hardware designed to speed up machine learning workloads, particularly the dense linear algebra of neural network training and inference. Common forms include GPUs, tensor processing units, neural processing units, and custom application-specific integrated circuits that exploit massive parallelism, reduced-precision arithmetic, and high-bandwidth memory. By offloading matrix and tensor operations from general-purpose CPUs, AI accelerators deliver order-of-magnitude gains in throughput and energy efficiency for deep learning.

- ### Overview
  - The economics of training large models are dominated by the floating-point throughput, memory bandwidth, and interconnect efficiency of the underlying accelerators.
  - Modern accelerators pack thousands of arithmetic units, on-package high-bandwidth memory, and dedicated tensor cores that fuse multiply-accumulate operations at low precision.
  - They are typically aggregated into nodes and racks to form a [[GPU Cluster]], then exposed to users through [[Cloud Computing]] platforms.
- ### Key aspects
  - Massively parallel arithmetic units optimised for matrix and tensor maths.
  - Reduced-precision formats (FP16, BF16, FP8, INT8) that trade numerical range for throughput and energy efficiency.
  - On-package [[High-Bandwidth Memory]] to keep arithmetic units fed without stalling.
  - High-speed interconnects such as [[NVLink]] for multi-device scaling.
- ### Mechanisms
  - Systolic and dataflow architectures stream operands through a [[Systolic Array]] to maximise data reuse.
  - Operator fusion and graph compilation reduce memory traffic between layers.
  - Sparsity support and quantisation increase effective throughput per watt.
- ### Applications
  - Training and serving large language models and vision models at scale.
  - Real-time inference at the edge and in [[Data Centre]] deployments.
  - Scientific computing and simulation workloads expressed as dense tensor algebra.
- ### Provenance

