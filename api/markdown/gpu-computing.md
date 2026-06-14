- ### Definition
  - [[GPU Computing]] is the discipline of exploiting the massively parallel architecture of [[Graphics Processing Unit]]s to accelerate general-purpose workloads that extend well beyond rendering, most notably [[Deep Learning]] training and inference, [[Scientific Computing]], and [[Signal Processing]]. It operates through programming models such as [[CUDA]] and [[OpenCL]] that expose thousands of lightweight shader cores as a unified compute fabric, enabling algorithms that decompose naturally into data-parallel threads to run orders of magnitude faster than on a conventional [[CPU Computing]] architecture.

- ### Overview
  - GPUs were originally designed for the fixed-function graphics pipeline of the 1980s and 1990s, which demanded high-throughput floating-point arithmetic for vertex transformation and pixel shading. The shift to fully programmable shader stages in the early 2000s—embodied in Microsoft's Shader Model 2.0 and 3.0—turned GPUs into highly flexible SIMT (Single Instruction, Multiple Threads) processors.
  - NVIDIA's 2006 launch of the [[CUDA]] toolkit was the decisive inflection point. By exposing the GPU's shader cores directly to C developers via a hierarchical thread model (grids, blocks, and warps), CUDA made general-purpose GPU (GPGPU) programming accessible without the awkward workaround of encoding compute as rasterisation operations.
  - The release of AlexNet in 2012, trained on two GTX 580 GPUs, demonstrated that [[Deep Learning]] at meaningful scale was feasible and set off an explosion in GPU demand that continues today. [[High-Performance Computing]] centres, cloud providers, and AI laboratories all converged on GPU clusters as their primary compute substrate.
  - Modern GPU computing is characterised by specialised compute blocks layered atop a general CUDA-programmable foundation: Tensor Cores (matrix arithmetic), RT Cores (ray-triangle intersection), and NVDec/NVEnc media engines share silicon with the general-purpose SM array, allowing diverse workloads to run concurrently.

- ### Key Components
  - **Streaming Multiprocessors (SMs)** — the fundamental compute unit; each SM contains multiple CUDA cores, Tensor Cores, load/store units, a register file, L1 cache, and shared memory. Warps of 32 threads execute in lockstep under SIMT semantics.
  - **[[CUDA]] Programming Model** — hierarchical abstractions: grid → block → warp → thread. Host (CPU) code launches kernels on the device (GPU). Memory spaces include global (DRAM), shared (on-SM scratchpad), constant, and texture memory.
  - **[[Tensor Cores]]** — matrix-multiply-accumulate units introduced in Volta (2017) that operate on mixed-precision (FP16/BF16 → FP32 accumulators), delivering dramatically higher throughput for the GEMM operations central to neural network training and inference. Hopper generation adds FP8 support.
  - **[[High-Bandwidth Memory]] (HBM)** — stacked DRAM technology (HBM2, HBM2e, HBM3) bonded directly to the GPU die, delivering multi-terabyte-per-second bandwidth essential for feeding the compute units without memory bottlenecks.
  - **[[Interconnect Fabric]]** — on-node: NVLink provides peer GPU bandwidth an order of magnitude higher than PCIe. Cross-node: InfiniBand (NDR/HDR) and RoCE Ethernet stitch GPU nodes into large training clusters. [[NVLink Switch]] (NVSwitch) enables all-to-all GPU connectivity within a rack.
  - **[[GPU Driver]] and Runtime Stack** — the driver exposes hardware to user-space through the CUDA runtime, cuDNN (deep neural network primitives), cuBLAS (linear algebra), NCCL (collective communications), and vendor-neutral layers such as OpenCL and Vulkan Compute.
  - **[[Compute Shader]] (HLSL/GLSL/SPIR-V)** — the graphics-API path for GPU compute, used in game engines, media processing, and cross-platform compute without requiring CUDA.
  - **[[Triton Compiler]]** — an open-source Python-embedded DSL and compiler (OpenAI/Meta) that lets developers write high-performance GPU kernels at a higher abstraction level than raw CUDA, with automatic tiling and vectorisation.

- ### Execution Model
  - Kernels are launched with a grid of thread blocks; the GPU scheduler assigns blocks to SMs as resources free, enabling efficient occupancy of thousands of cores.
  - **Warp divergence** — when threads in a warp take different branches, the warp serialises both paths (predication). Minimising divergence is a primary kernel optimisation.
  - **Memory hierarchy optimisation** — coalesced global memory accesses, shared memory bank-conflict avoidance, register pressure management, and asynchronous memory copies (CUDA streams/DMA engines) are all first-order concerns in kernel design.
  - **Occupancy** — the ratio of active warps to the maximum resident warps per SM; tuning block sizes, register counts, and shared memory usage to maximise occupancy is a foundational GPU performance discipline.

- ### Applications and Use Cases
  - **[[Deep Learning]] Training** — backpropagation through transformer, convolutional, and recurrent architectures maps onto batched GEMM, element-wise, and softmax kernels. Training frontier [[Large Language Model]]s now requires thousands of GPUs running for months.
  - **[[Neural Network Inference]]** — serving latency-critical inference at data-centre scale benefits from GPU throughput; dynamic batching, quantisation (INT8, FP8), and [[TensorRT]] graph optimisation are standard techniques.
  - **[[Scientific Computing]]** — molecular dynamics (GROMACS, AMBER), quantum chemistry (GPU-accelerated CCSD(T)), climate and weather simulation, computational fluid dynamics, and finite-element analysis all use GPU acceleration.
  - **[[Signal Processing]] and Computer Vision** — fast Fourier transforms (cuFFT), medical imaging (CT/MRI reconstruction), seismic processing, and video transcoding exploit GPU parallelism.
  - **[[Distributed Training]]** — model parallelism, tensor parallelism, pipeline parallelism, and data parallelism strategies (PyTorch DDP, Megatron-LM, DeepSpeed ZeRO) partition large models and datasets across GPU clusters.
  - **Rendering and [[Spatial Computing]]** — real-time ray tracing (DirectX Raytracing, Vulkan RayTracing) and AI-driven super-resolution (DLSS, FSR) link GPU compute to spatial and metaverse workloads.
  - **[[Digital Twin]] and Simulation** — NVIDIA Omniverse and Isaac Sim leverage GPU compute for physically-accurate simulation of robots and industrial environments.
  - **Cryptography and Blockchain** — proof-of-work mining was a major GPU workload until ASIC displacement; ZK-SNARK prover acceleration on GPUs remains active.
  - **Genomics** — GPU-accelerated sequence alignment (NVIDIA Parabricks) and variant calling dramatically reduce turnaround times for genome analysis pipelines.

- ### Architectural Families and Vendors
  - **NVIDIA** — dominant in AI/HPC; architecture generations: Fermi → Kepler → Maxwell → Pascal → Volta (Tensor Cores) → Turing (RT Cores) → Ampere → Hopper (FP8, Transformer Engine) → Blackwell. H100 and H200 are current data-centre flagships.
  - **AMD** — ROCm (Radeon Open Compute) provides a CUDA-competitive open-source software stack; CDNA architecture (MI300X) targets AI/HPC with unified CPU-GPU memory.
  - **Intel** — Xe-HPC (Ponte Vecchio / Gaudi) targets HPC and AI; oneAPI provides a cross-architecture programming model.
  - **Apple** — Metal compute shaders on Apple Silicon; the unified memory architecture eliminates GPU-CPU data copies.
  - **Qualcomm / ARM** — Adreno and Mali GPU compute targets mobile AI inference.

- ### Relationships
  - uses:: [[CUDA]]
  - uses:: [[OpenCL]]
  - uses:: [[Parallel Processing]]
  - uses:: [[Compute Shader]]
  - uses:: [[Triton Compiler]]
  - uses:: [[Mixed-Precision Training]]
  - enables:: [[Deep Learning]]
  - enables:: [[Distributed Training]]
  - enables:: [[High-Performance Computing]]
  - enables:: [[Large Language Model]]
  - enables:: [[Neural Network Inference]]
  - enables:: [[Scientific Computing]]
  - requires:: [[High-Bandwidth Memory]]
  - requires:: [[GPU Driver]]
  - requires:: [[Interconnect Fabric]]
  - contrastsWith:: [[Tensor Processing Unit]]
  - contrastsWith:: [[CPU Computing]]
  - contrastsWith:: [[Field-Programmable Gate Array]]
  - relatedTo:: [[GPU Compute]]
  - relatedTo:: [[Inference Hardware]]
  - relatedTo:: [[Render Pipeline]]
  - relatedTo:: [[Model Parallelism]]
  - relatedTo:: [[NVLink]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Digital Twin]]
  - subClassOf:: [[Hardware Acceleration]]

- ### Standards and Ecosystem
  - **[[CUDA]]** — NVIDIA's proprietary parallel computing platform and API; de facto industry standard for AI and HPC GPU programming.
  - **[[OpenCL]]** — Khronos Group open standard for heterogeneous compute across CPUs, GPUs, and FPGAs; vendor-neutral but less optimised than CUDA on NVIDIA hardware.
  - **Vulkan Compute** — Khronos Group cross-platform compute path via the same API used for graphics; well-suited to real-time and mobile GPU compute.
  - **[[ROCm]]** — AMD's open-source GPU software stack; implements HIP (Heterogeneous-compute Interface for Portability) as a CUDA-compatible programming surface.
  - **oneAPI / SYCL** — Intel's open standards-based programming model for heterogeneous hardware; SYCL is a C++-based abstraction over OpenCL.
  - **MLPerf** — industry benchmark suite run by MLCommons that measures GPU (and other accelerator) training and inference performance across standardised workloads; key mechanism for vendor competitive differentiation.
  - **PCIe / NVLink / CXL** — interconnect standards governing CPU-GPU and GPU-GPU bandwidth; CXL 3.0 is emerging as a fabric for cache-coherent memory pooling in heterogeneous systems.

- ### Challenges and Research Frontiers
  - **Memory wall** — GPU compute throughput has historically outpaced memory bandwidth growth; HBM stacking and near-memory computing are mitigation strategies.
  - **Scaling efficiency** — achieving near-linear strong scaling across thousands of GPUs requires careful attention to collective communication overlap, gradient compression, and load balancing.
  - **Energy efficiency** — frontier AI training clusters consume hundreds of megawatts; performance-per-watt is increasingly a design constraint.
  - **Programmability** — the gap between raw hardware capability and developer-accessible performance motivates higher-level compilers ([[Triton Compiler]], XLA, TVM) and auto-tuning frameworks.
  - **Hardware-software co-design** — model architectures (e.g., FlashAttention, grouped-query attention) are increasingly designed in concert with GPU memory hierarchy characteristics.

- ### Provenance
  - sources:: NVIDIA CUDA documentation; AMD ROCm documentation; Khronos OpenCL specification; MLCommons MLPerf benchmark reports; seminal publications (Krizhevsky et al. 2012, Vaswani et al. 2017)
  - updated:: 2026-06-13