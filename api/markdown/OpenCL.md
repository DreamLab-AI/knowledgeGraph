
OpenCL (Open Computing Language) is an open, royalty-free standard for writing programs that execute across heterogeneous platforms including CPUs, GPUs, and other accelerators. It defines a C-based kernel language and host API for expressing data-parallel and task-parallel computation portably across vendors. OpenCL underpins general-purpose GPU computing where cross-vendor portability is valued over the deepest single-vendor optimisation.

- OpenCL is an open, royalty-free standard for [[Parallel Computing]] across heterogeneous devices — [[GPU]]s, CPUs and accelerators such as [[FPGA]] — using a portable kernel language and host API.
- It is a cornerstone of cross-vendor [[GPU Computing]], standardised by the [[Khronos Group]], and contrasts with the single-vendor [[CUDA]] model.
- ### Overview
- OpenCL abstracts compute devices into a common model: a host program enqueues kernels that run as many parallel work-items across compute units.
- Its central value is portability — the same kernel can target GPUs and CPUs from different vendors, and increasingly FPGAs, without rewriting to a proprietary API.
- This breadth trades some peak performance against deeply optimised, vendor-specific stacks, but preserves freedom from lock-in.
- OpenCL kernels can be compiled to the [[SPIR-V]] intermediate representation shared with [[Vulkan]], unifying parts of the Khronos compute and graphics ecosystem.
- ### Key aspects
- Heterogeneous model: a single API targets diverse devices for [[GPU Acceleration]].
- Kernel language: C-based kernels express data-parallel work as a [[Compute Shader]]-like dispatch.
- Portability: the same code runs across vendors, delivering [[Portability]] as a first-class goal.
- Memory hierarchy: explicit global, local and private memory regions guide [[Performance Optimization]].
- ### Mechanisms
- The host enqueues kernels and data transfers to one or more compute devices.
- Work-items are grouped into work-groups mapped onto [[GPU]] compute units for [[Parallel Computing]].
- Kernels may be delivered as source or as [[SPIR-V]] binaries for portable distribution.
- Vendor runtimes implement the standard, allowing the same program to run on diverse hardware including [[FPGA]] accelerators.
- ### Applications
- Scientific and numerical computing requiring vendor-neutral [[GPU Computing]].
- Image and signal processing pipelines benefiting from [[GPU Acceleration]].
- Embedded and edge accelerators where [[FPGA]] and GPU targets coexist.
- Cross-platform compute libraries that prioritise [[Portability]].
- ### Provenance

