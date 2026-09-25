A Tensor Core is a specialised hardware execution unit within a GPU that performs small matrix multiply-accumulate operations in a single instruction, optimised for the dense linear algebra at the heart of deep learning. It operates on mixed-precision inputs, accumulating in higher precision while multiplying in reduced precision to maximise throughput. By accelerating matrix multiplication, Tensor Cores deliver large gains in training and inference performance over general-purpose GPU cores.

- A Tensor Core is a matrix-math execution unit inside a [[GPU]] that performs fused multiply-accumulate on small matrices each cycle. It is part of modern [[GPU Architecture]] and accelerates the [[Parallel Computing]] workloads that dominate [[Deep Learning]].

### Overview

- Deep learning is bottlenecked by dense matrix multiplication; Tensor Cores target exactly this operation in dedicated silicon.
- Compared with general-purpose shading cores, they offer dramatically higher arithmetic throughput for the matrix shapes used by neural networks.
- Each GPU generation has broadened the precision formats and sparsity features its Tensor Cores support, tracking the needs of ever-larger models.

### Mechanisms

- Each Tensor Core computes a small tile of a matrix product, multiplying in reduced precision and accumulating in higher precision to balance speed and numerical stability.
- Mixed-precision execution lets a [[Neural Network]] run faster and use less memory while keeping accuracy acceptable.
- Programming frameworks dispatch matrix operations to Tensor Cores through libraries layered on [[CUDA]].
- Achievable throughput depends on feeding the cores, which makes [[Memory Bandwidth]] a critical co-determinant of performance.

### Applications

- Training and serving [[Large Language Model]] and vision models at scale.
- Accelerating [[Inference]] in data centres and at the edge.
- Speeding up [[Model Training]] loops and high-performance computing kernels.
- Powering mixed-precision pipelines across deep-learning frameworks.

### Provenance

