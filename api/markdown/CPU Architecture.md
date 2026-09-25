CPU architecture is the design of general-purpose central processors optimised for low-latency execution of sequential and branch-heavy code: a small number of powerful cores with deep pipelines, aggressive out-of-order execution, sophisticated branch prediction, and large multi-level caches. It is the deliberate opposite pole to GPU architecture, which trades single-thread latency for massive throughput; CPUs devote silicon to making one instruction stream fast, GPUs to running tens of thousands of streams concurrently.

### Semantic Classification

### Content

## Definition

**CPU architecture** describes how general-purpose central processing units are organised to execute arbitrary programs with minimal latency. The defining commitment is to single-thread performance on unpredictable code: real workloads branch frequently, chase pointers through memory, and interleave many short dependent operations. CPU designs therefore spend most of their transistor budget not on arithmetic units but on machinery that hides these hazards — deep out-of-order execution windows, register renaming, speculative execution behind multi-level branch predictors, hardware prefetchers, and cache hierarchies that keep the hot working set within a few nanoseconds of the execution units.

A modern CPU exposes a small number of complex cores — typically 4 to 128 — each supporting one or two hardware threads, coherent shared memory, precise interrupts, privilege levels, and virtual memory. These properties make the CPU the platform on which operating systems, schedulers, and general software stacks run. Vector extensions (SSE/AVX on x86, SVE on Arm) add data parallelism within a core, but as an adjunct to, not a replacement for, the latency-optimised scalar pipeline.

The contrast with [[GPU Architecture]] is structural rather than incidental. Where a CPU uses caches and speculation to hide memory latency from one thread, a GPU hides latency by switching among thousands of resident threads, and spends the reclaimed silicon on wide SIMD arithmetic. The result is a complementary division of labour in modern systems: CPUs orchestrate, run control flow, and serve latency-critical paths; GPUs and other accelerators execute the regular, throughput-bound kernels the CPU dispatches to them.

## Technical Details

- **Instruction set architectures**: x86-64 (Intel, AMD), Arm AArch64 (Apple, Ampere, Qualcomm, AWS Graviton), and the open RISC-V ISA — the contract between hardware and software that a microarchitecture implements.
- **Microarchitectural techniques**: pipelining, superscalar issue (4–10 instructions/cycle), out-of-order execution with reorder buffers of 300+ entries, speculative execution, and simultaneous multithreading.
- **Memory hierarchy**: per-core L1/L2 caches, shared L3 in the tens of megabytes, coherent interconnects (mesh or ring), DDR5 and on-package memory; NUMA topologies on multi-socket servers.
- **Trends**: heterogeneous cores (performance plus efficiency), chiplet-based scaling, growing vector widths, on-die AI accelerators, and confidential-computing features — while the latency-first design philosophy that distinguishes CPUs from GPUs remains unchanged.

  ## Current Landscape

- **Arm's server ascent**: AWS Graviton4 (Arm Neoverse V2, Armv9.0-A, up to 96 cores per socket, 12-channel DDR5-5600, SVE2) reached general availability, and by 2025 independent benchmarks reported it leading comparable AMD/Intel x86 parts on price-performance across enterprise workloads; Google Axion, Azure Cobalt 100, Ampere AmpereOne (192 cores) and Nvidia Grace round out a mature Arm data-centre field.
- **Three-way ISA contest (2025)**: x86-64 still holds the highest per-thread performance and the deepest software ecosystem; Arm leads general-purpose performance-per-watt; and royalty-free RISC-V is emerging, with the RVA23 profile improving cross-implementation compatibility and vendors such as Ventana (Veyron V2, up to 192 cores) targeting servers.
- **Chiplet disaggregation via UCIe**: Heterogeneous multi-ISA, chiplet-based designs are consolidating around the UCIe die-to-die interconnect standard, enabling x86, Arm and RISC-V cores and accelerators to coexist on one package.
- **Vector and matrix extensions**: Arm SVE2 (scalable 128-2048-bit vectors) is now widespread, and SME/SME2 (a 2D tile matrix extension for outer-product operations) is arriving in cores such as Qualcomm's Oryon — though production auto-vectorisation for SME lags toolchains until roughly GCC 15 / LLVM 20.

  **Sources**:

- https://ts2.tech/en/risc-v-vs-arm-vs-x86-the-2025-silicon-architecture-showdown/
- https://developer.arm.com/community/arm-community-blogs/b/servers-and-cloud-computing-blog/posts/leading-hpc-performance-with-graviton4
- https://www.phoronix.com/review/aws-graviton4-benchmarks

