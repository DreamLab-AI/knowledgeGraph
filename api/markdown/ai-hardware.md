- ### Definition
  - AI Hardware encompasses specialized computing hardware designed to accelerate artificial intelligence and machine learning workloads, including GPUs, TPUs, NPUs, and other AI accelerators optimized for training neural networks and running inference at scale. These processors feature architectures specifically designed for the matrix operations, parallel processing, and low-precision arithmetic fundamental to modern AI algorithms.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiHardware
  - owl-role:: Technology
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Computer Hardware]]
  - enables:: [[Large Language Models]]
  - bridges-to:: [[Autonomous Robot]] (domain: rb)

- ### Content

  - #### Key Components
		- **Graphics Processing Units (GPUs)**: Parallel processors with thousands of cores optimized for matrix operations; NVIDIA Blackwell architecture leads in 2025
		- **Tensor Processing Units (TPUs)**: Google's custom ASICs for neural network acceleration; TPU v7 (Ironwood) delivers 4,614 TFLOP/s
		- **Neural Processing Units (NPUs)**: Low-power accelerators for edge AI and on-device inference with emphasis on energy efficiency
		- **AI Accelerators (ASICs)**: Application-specific chips like AWS Trainium/Inferentia, Microsoft Maia, Intel Habana Gaudi
		- **FPGAs**: Field-programmable gate arrays offering flexibility for custom AI workloads
  - #### Major Manufacturers (2025)
		- **NVIDIA**: Market leader with Blackwell architecture, H100/H200 GPUs
		- **Google**: TPU v7 Ironwood with 256-chip and 9,216-chip cluster configurations
		- **AMD**: MI400 series challenging NVIDIA with competitive performance
		- **Intel**: Habana Gaudi processors for enterprise AI
		- **Cerebras**: Wafer-scale engines for large model training
		- **Groq**: LPUs optimized for low-latency inference
		- **SambaNova**: RDUs for enterprise AI workloads
  - #### Performance Metrics
		- **TOPS (Trillions of Operations Per Second)**: 1-50 TOPS for edge NPUs, 90-420 TOPS for datacenter TPUs
		- **TFLOPS (Teraflops)**: Floating-point throughput for training workloads
		- **Power Efficiency**: Performance per watt critical for sustainable AI
		- **Memory Bandwidth**: HBM3 and HBM3e for high-bandwidth data transfer
  - #### Applications
		- Large-scale model training in data centers
		- Real-time inference for AI services
		- Edge AI for IoT and mobile devices
		- Autonomous vehicle perception systems
		- Scientific computing and simulation
		- AI-powered content generation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z