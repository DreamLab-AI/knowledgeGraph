- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1025
  - preferred-term:: Tensor Processing Unit
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:TensorProcessingUnit

### Relationships
- is-subclass-of:: [[AI Hardware]]
- is-subclass-of:: [[Training Hardware]]
- is-subclass-of:: [[Inference Hardware]]
- skos:related:: [[GPU]]
- skos:related:: [[ASIC]]
- developed-by:: Google
- optimized-for:: [[TensorFlow]]
- enables:: [[Large Language Models]]
- enables:: [[Deep Learning]]

### Definition
Tensor Processing Unit (TPU) is Google's custom-developed application-specific integrated circuit (ASIC) designed specifically to accelerate machine learning workloads, particularly TensorFlow operations. TPUs use a specialized architecture based on systolic arrays for matrix multiplication, prioritizing throughput and power efficiency over flexibility, and have been instrumental in training and serving some of the world's largest AI models including BERT, GPT-3, and PaLM.

### Architecture Overview
**Systolic Array:**
- 2D grid of multiply-accumulate units
- Data flows through array in synchronized waves
- Highly efficient matrix multiplication
- Minimal data movement (energy efficient)

**Design Philosophy:**
- Domain-specific (not general-purpose)
- Optimized for dense linear algebra
- High throughput over low latency
- Reduced precision (BF16, INT8)
- Large on-chip memory

**Key Components:**
- Matrix Multiply Unit (MXU): systolic array core
- Vector Processing Unit (VPU): element-wise ops
- High Bandwidth Memory (HBM)
- Scalar units for control flow
- Interconnects for multi-chip scaling

### TPU Generations
**TPU v1 (2016 - Inference Only):**
- First generation, inference-only
- 92 TOPS (INT8)
- 8-bit integer operations
- 28nm process
- Deployed in Google data centers

**TPU v2 (2017 - Training):**
- Training and inference
- 45 TFLOPS per chip (BF16)
- 16GB HBM memory
- 180 TFLOPS per TPU Pod (4 chips)
- bfloat16 precision

**TPU v3 (2018):**
- 420 TFLOPS per chip (BF16)
- 32GB HBM
- Liquid cooling required
- 8x performance vs. v2
- TPU Pods up to 1024 chips

**TPU v4 (2021):**
- 275 TFLOPS per chip (BF16)
- 2.6x performance-per-watt vs. v3
- Optical circuit switches (OCS)
- Pods up to 4096 chips
- 10x performance vs. v3 at Pod scale

**TPU v5e (2023 - Cost-Optimized):**
- Cost-efficient training/inference
- 197 TFLOPS (BF16)
- Pods up to 256 chips

**TPU v5p (2023 - Performance):**
- 459 TFLOPS per chip (BF16)
- 95GB HBM
- 4x performance vs. v4
- World's largest AI supercomputer (TPU v5p Pods)

### TPU Pod Architecture
**Pod Configuration:**
- Interconnected TPU chips
- High-speed custom interconnect (ICI)
- Pod slices: 8, 16, 32, 64, 128, 256, 512, 1024+ chips
- Torus/mesh network topology

**Pod v4:**
- 4096 chips per Pod
- 1.1 exaFLOPS (BF16)
- Optical circuit switches (reconfigurable)

**Pod v5p:**
- 8960 chips per Pod
- ~4 exaFLOPS (BF16)
- Largest publicly disclosed AI supercomputer

### BFloat16 (Brain Floating Point)
- 16-bit floating point format
- Same range as FP32 (8-bit exponent)
- Reduced precision (7-bit mantissa)
- Developed by Google for deep learning
- Avoids overflow/underflow issues of FP16
- Now industry standard

### Software Stack
**TensorFlow:**
- Native support (developed together)
- XLA compiler optimizes for TPU
- Automatic graph optimization

**JAX:**
- High-performance numerical computing
- Functional API
- JIT compilation
- Excellent TPU support

**PyTorch:**
- PyTorch/XLA bridge
- Growing TPU support
- Lags behind TensorFlow

**Cloud TPU:**
- Google Cloud Platform offering
- Pay-per-use (preemptible and on-demand)
- Integration with GKE, Vertex AI

### Performance Characteristics
**Strengths:**
- High throughput for large matrix ops
- Energy efficient (vs. GPUs)
- Excellent scaling to Pod level
- Fast inter-chip communication

**Limitations:**
- Less flexible than GPUs
- Requires TensorFlow/JAX (limited ecosystem)
- Not suitable for all workloads
- Smaller on-chip memory than latest GPUs

### Notable Models Trained on TPU
- **BERT:** Transformer pre-training
- **T5:** Text-to-Text Transfer Transformer
- **PaLM:** 540B parameter language model (6144 TPU v4)
- **Gemini:** Google's multimodal AI model
- **AlphaGo/AlphaZero:** Reinforcement learning
- **Imagen:** Text-to-image generation
- **Minerva:** Mathematical reasoning

### TPU vs. GPU Comparison
| Aspect | TPU v5p | NVIDIA H100 |
|--------|---------|-------------|
| Architecture | Systolic array (ASIC) | CUDA cores + Tensor cores |
| FP16/BF16 | 459 TFLOPS | 989 TFLOPS (BF16) |
| Memory | 95GB HBM | 80GB HBM3 |
| Power | ~450W | 700W |
| Flexibility | Lower (domain-specific) | Higher (general GPU) |
| Ecosystem | TensorFlow/JAX primary | CUDA (mature) |
| Cost | $4-8/hour (Cloud) | $2-4/hour (Cloud) |

### Use Cases
**Ideal For:**
- Large-scale transformer training
- High-throughput batch inference
- Research with TensorFlow/JAX
- Cost-sensitive training
- Google Cloud ecosystem

**Not Ideal For:**
- Low-latency single queries
- PyTorch-first workflows
- Specialized algorithms (not matmul-heavy)
- On-premise deployment (not available)

### Cloud TPU Pricing (Approximate)
- TPU v2: $1.35/hour
- TPU v3: $2.40/hour
- TPU v4: $2.50-5.00/hour
- TPU v5e: $1.50-3.00/hour
- TPU v5p: $6-12/hour
- Preemptible: 50-70% discount

### Energy Efficiency
- 1.7x-2.7x more efficient than comparable GPUs (per Google)
- Lower total cost of ownership for large workloads
- Critical for Google's AI services at scale
- Industry-leading FLOPS/watt

### Competitive Landscape
**Alternatives:**
- NVIDIA GPUs (dominant, more flexible)
- AWS Trainium/Inferentia (training/inference)
- AMD MI300 series
- Graphcore IPU
- Cerebras WSE

**TPU Advantages:**
- Integrated into Google Cloud
- Proven at massive scale (Google internal use)
- Cost-effective for large workloads
- Strong software integration (TensorFlow)

### Systolic Array Deep Dive
**How It Works:**
1. Weights pre-loaded into array
2. Activations stream through rows
3. Partial sums propagate through columns
4. Minimal data movement
5. High utilization

**Efficiency:**
- Data reuse (weights stay stationary)
- Predictable performance
- Simple control logic
- Scales well

### Limitations and Challenges
- **Ecosystem lock-in:** TensorFlow/JAX dependency
- **Availability:** Google Cloud only (no on-premise)
- **Flexibility:** Less suitable for non-matmul workloads
- **Debugging:** Less tooling vs. NVIDIA
- **Community:** Smaller than CUDA

### Research Impact
- Enabled Google's AI research at scale
- Influenced industry (BF16 adoption)
- Demonstrated ASIC viability for AI
- Inspired competitors (AWS, Microsoft custom chips)

### Future Directions
**Expected Improvements:**
- Continued performance scaling (6-12 month cadence)
- Larger memory capacity
- Better PyTorch support
- Edge TPU evolution (inference)
- Integration with quantum systems

**Industry Trends:**
- More companies developing custom AI ASICs
- Hyperscalers investing in proprietary silicon
- TPU demonstrates economic viability
- Shift from general-purpose to specialized hardware

### Edge TPU (Separate Product Line)
- ASIC for edge inference
- Small form factor (coin-sized)
- 4 TOPS (INT8)
- 2W power consumption
- Coral Dev Board and USB Accelerator
- TensorFlow Lite support
- IoT and embedded AI

Tensor Processing Units represent Google's strategic bet on custom silicon for AI, achieving world-leading performance and efficiency for machine learning workloads while demonstrating that domain-specific architectures can challenge general-purpose GPUs in the AI hardware landscape.
