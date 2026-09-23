
Tensor computation is the set of mathematical operations performed on multi-dimensional arrays (tensors) that form the core numerical substrate of modern machine learning. These operations include contraction, element-wise arithmetic, broadcasting, decomposition, and automatic differentiation, typically executed on specialised hardware such as GPUs or TPUs. Tensor computation frameworks provide graph-based or eager execution models that map operations to hardware acceleration primitives.

- ### Overview
  - Modern machine learning depends almost entirely on tensor computation: forward passes through neural networks are sequences of matrix multiplications, activations, and normalisation operations on tensor arrays.
  - Frameworks such as TensorFlow and PyTorch provide APIs over tensor computation graphs, allowing automatic gradient computation via reverse-mode automatic differentiation.
  - Hardware accelerators (NVIDIA CUDA, Google TPUs, Apple Neural Engine) are designed specifically for the parallel arithmetic patterns that characterise tensor operations.
  - Compiler toolchains (XLA, TVM) lower high-level tensor graphs to optimised machine code targeting specific hardware backends.

- ### Key Aspects
  - Tensors are typed, shaped arrays; shape and dtype determine which operations are valid and how memory is laid out.
  - Broadcasting rules allow operations between tensors of different but compatible shapes without explicit data replication.
  - Contraction (generalised matrix multiplication, `einsum`) is the dominant computational primitive in attention mechanisms and convolutional layers.
  - Gradient tapes track operations for reverse-mode automatic differentiation during training.

- ### Mechanisms
  - Static or dynamic computation graphs representing the data-flow DAG of tensor operations.
  - Memory management through reference counting and arena allocators on GPU device memory.
  - Kernel fusion passes reduce memory bandwidth by combining multiple element-wise operations into a single GPU kernel.
  - Mixed-precision training (FP16/BF16) reduces memory footprint and increases arithmetic throughput.

- ### Applications
  - Training large language models and vision transformers using batched tensor contraction.
  - [[Fourier Transform]] computation for frequency-domain signal analysis in audio and vision tasks.
  - [[Euclidean Distance]] and cosine similarity computation for nearest-neighbour retrieval.
  - Scientific simulation and finite-element analysis where physical fields are discretised as tensors.

- ### Provenance

