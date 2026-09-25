An NVIDIA GPU is a graphics processing unit designed and manufactured by NVIDIA, providing massively parallel computation that has become the dominant hardware substrate for machine learning training and inference. These devices expose thousands of cores together with specialised tensor units optimised for the dense matrix multiplications central to deep learning. They are programmed predominantly through the CUDA platform and serve as the primary accelerator in modern data centres and high-performance computing systems.

### Overview

- NVIDIA GPUs originated as graphics accelerators but evolved into general-purpose parallel processors after the introduction of the CUDA programming model.
- Their architecture excels at the dense linear algebra that underpins neural network training and inference, making them the de facto standard for modern machine learning.
- Successive generations have added specialised tensor cores, higher-bandwidth memory, and faster interconnects to keep pace with growing model sizes.
- They are deployed at scale in cloud and on-premises clusters, where many devices are linked to train large models in parallel.

### Key aspects

- Massive parallelism: thousands of cores process many operations simultaneously.
- Tensor cores: dedicated units accelerate the mixed-precision matrix multiplications central to deep learning.
- High memory bandwidth: large, fast on-device memory feeds the compute units without starving them.
- CUDA ecosystem: a mature software stack of libraries, compilers, and frameworks targets the hardware.
- Scalable interconnect: high-speed links allow GPUs to be combined into large training clusters.

### Mechanisms

- Single-instruction, multiple-thread execution schedules thousands of threads across streaming multiprocessors.
- Mixed-precision arithmetic trades numerical precision for throughput while preserving model accuracy.
- Memory hierarchies and asynchronous data movement overlap computation with transfer to maximise utilisation.

### Applications

- Training and serving large [[Deep Learning]] models for language, vision, and multimodal tasks.
- Accelerating [[Computer Vision]] and other compute-intensive [[Inference]] workloads.
- Powering [[High-Performance Computing]] simulations and scientific workloads.
- Underpinning [[Model Serving]] infrastructure in production AI systems.

### Provenance

