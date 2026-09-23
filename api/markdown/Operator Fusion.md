
Operator fusion is a compiler optimisation that combines several consecutive operations in a neural network computation graph into a single fused kernel. By merging operations such as a matrix multiply with its bias addition and activation function, fusion avoids writing intermediate tensors back to memory, reducing memory bandwidth pressure and kernel launch overhead. It is a core technique in machine learning compilers and inference runtimes for improving throughput and latency on accelerators. Fusion trades increased kernel complexity for fewer round trips to global memory.

- Operator fusion is a compiler optimisation that merges adjacent operations in a [[Neural Network]] computation graph into a single fused kernel. It is a form of [[Model Optimization]] that relies on the [[Compiler]] and targets [[GPU]] and other accelerators.
- ### Overview
- Deep learning models are graphs of tensor operations. Executing each operation as a separate kernel forces intermediate results to be written to and read back from global memory, which is bound by [[Memory Bandwidth]] rather than raw compute.
- Operator fusion collapses such sequences (for example matrix multiply, bias add, and activation) into one kernel that keeps intermediates in registers or shared memory.
- The result is fewer kernel launches, less memory traffic, and lower [[Latency]] for [[Inference]] and training.
- ### Mechanisms
- Pattern matching over the computation graph identifies fusible subgraphs (element-wise chains, reduction-followed-by-elementwise, epilogue fusion after GEMM).
- Code generation emits a single kernel that streams data through the fused stages without materialising intermediate tensors.
- Cost models decide when fusion helps versus when it harms occupancy or register pressure.
- ### Key aspects
- Vertical fusion chains element-wise operations; horizontal fusion combines independent operations sharing inputs.
- Epilogue fusion attaches bias, activation and scaling onto the tail of a matrix multiply.
- Fusion interacts with [[Hardware Acceleration]] features such as tensor cores and on-chip memory.
- ### Applications
- Inference runtimes and exporters (including [[ONNX]] based toolchains) apply fusion before deployment.
- Training frameworks fuse element-wise epilogues to raise throughput.
- Serving stacks use fused kernels to meet latency budgets in [[Model Serving]].
- ### Provenance

