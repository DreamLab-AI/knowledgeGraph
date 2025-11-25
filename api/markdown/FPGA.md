- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1026
  - preferred-term:: FPGA
  - alternate-terms:: Field-Programmable Gate Array
  - source-domain:: ai
  - status:: draft

### Relationships
- is-subclass-of:: [[AI Hardware]]
- is-subclass-of:: [[Inference Hardware]]
- skos:related:: [[ASIC]]
- skos:related:: [[Reconfigurable Computing]]
- skos:related:: [[Hardware Acceleration]]
- enables:: [[Custom Neural Architectures]]
- enables:: [[Low-Latency Inference]]
- used-in:: [[Edge Computing]]

### Definition
Field-Programmable Gate Arrays (FPGAs) are integrated circuits that can be configured by users after manufacturing to implement custom digital logic, offering a middle ground between flexible but slower CPUs/GPUs and fast but fixed ASICs. For AI applications, FPGAs provide reconfigurable hardware acceleration, enabling optimized implementations of neural networks with low latency, deterministic performance, and energy efficiency, particularly suited for inference at the edge and specialized deployment scenarios.

### Architecture Overview
**Core Components:**
- **Logic Blocks (CLBs):** Configurable logic cells with LUTs (Look-Up Tables), flip-flops, multiplexers
- **Routing Resources:** Programmable interconnects between blocks
- **DSP Slices:** Dedicated multiply-accumulate units
- **Block RAM (BRAM):** On-chip memory blocks
- **I/O Blocks:** Configurable input/output interfaces

**Reconfiguration:**
- Hardware behavior defined by bitstream
- Can be reprogrammed in field (hence "field-programmable")
- Partial reconfiguration possible (some regions while others operate)
- Configuration stored in SRAM (volatile) or flash

### FPGA vs. Other Hardware
| Aspect | FPGA | GPU | ASIC |
|--------|------|-----|------|
| Flexibility | Reconfigurable | Fixed architecture | Fixed design |
| Performance | Medium-High | High | Highest |
| Power | Low-Medium | High | Lowest (optimized) |
| Development | HDL programming | Software libraries | Months-years |
| Cost | $100s-$10,000s | $1,000s-$10,000s | High NRE, low per-unit |
| Latency | Microseconds | Milliseconds | Microseconds |
| NRE Cost | None | None | $1M-$100M+ |

### AI Advantages
**Low Latency:**
- Direct hardware implementation
- Microsecond response times
- Deterministic execution (no OS jitter)
- Ideal for real-time systems

**Energy Efficiency:**
- Optimized data paths
- No unnecessary operations
- 10-100x better than CPU/GPU for specific tasks
- <10W for edge FPGAs

**Flexibility:**
- Adapt to new model architectures
- Optimize for specific models
- Support multiple models (time-multiplexed)
- Update without hardware replacement

**Customization:**
- Variable precision (not limited to INT8/FP16)
- Custom memory hierarchies
- Specialized operators
- Model-specific optimizations

### Challenges for AI
**Programming Complexity:**
- Requires HDL knowledge (Verilog/VHDL)
- Long development cycles
- Harder to debug than software
- Steep learning curve

**Tool Ecosystem:**
- Less mature than CUDA/TensorFlow
- Compilation times (hours for large designs)
- Vendor lock-in
- Limited open-source tools

**Resource Constraints:**
- Limited DSP blocks, BRAM
- Large models may not fit
- Balancing resource usage tricky

**Performance:**
- Raw compute lower than GPUs
- Memory bandwidth limited
- Best for specific architectures (CNNs better than Transformers)

### Major FPGA Vendors
**Xilinx (AMD):**
- Versal AI Edge/Core (AI accelerators)
- Alveo accelerator cards (data center)
- Zynq UltraScale+ MPSoC (embedded)
- Vitis AI framework

**Intel (Altera):**
- Stratix, Agilex families
- Arria (mid-range)
- Intel FPGA AI Suite

**Lattice:**
- Low-power FPGAs
- Sensai stack (edge AI)
- <1W power consumption

**Microchip (Microsemi):**
- PolarFire FPGAs
- Radiation-hardened (aerospace)

### FPGA AI Frameworks
**Xilinx Vitis AI:**
- High-level synthesis (C++/Python to HDL)
- Model compiler (TensorFlow/PyTorch → bitstream)
- Quantization tools
- Pre-optimized neural network libraries

**Intel OpenVINO:**
- Inference optimization
- Support for Intel FPGAs
- Model compression

**FINN (Xilinx Research):**
- Binarized neural networks
- Extreme quantization (1-2 bit)
- Open-source

**hls4ml:**
- High-Level Synthesis for ML
- Low-latency inference
- Physics experiments (particle accelerators)

### Deployment Scenarios
**Edge AI:**
- Autonomous drones
- Industrial IoT sensors
- Smart cameras
- Medical devices
- 5G base stations

**Data Center:**
- Bing search acceleration (Microsoft)
- Database acceleration
- Video transcoding
- Genomics processing

**Real-Time Systems:**
- ADAS (Advanced Driver Assistance)
- Financial trading (HFT)
- Robotics control
- Radar/sonar processing

**Aerospace/Defense:**
- Radiation-hardened computing
- Satellite imaging
- Signal intelligence
- Secure enclaves

### Quantization and Precision
**Custom Bit-Widths:**
- Not limited to 8/16/32-bit
- 3-bit, 5-bit, arbitrary precision
- Per-layer precision tuning
- Ternary/binary neural networks

**Benefits:**
- Reduced BRAM usage
- More parallelism
- Lower power
- Minimal accuracy loss (with tuning)

### FPGA AI Accelerator Cards
**Xilinx Alveo:**
- U50, U200, U250, U280 (PCIe cards)
- HBM memory (up to 32GB)
- Data center inference
- Virtualization support

**Intel PAC (Programmable Acceleration Card):**
- N3000, D5005
- PCIe Gen3/Gen4
- Integrated with OpenVINO

### Performance Examples
**Image Classification (ResNet-50):**
- Xilinx U50: 2000-5000 fps (INT8)
- <10ms latency
- 75W power

**Object Detection (YOLO):**
- Edge FPGA: 30-60 fps at 5-10W
- Data center FPGA: 200-500 fps

### Development Flow
1. **Model Training:** Standard frameworks (PyTorch, TensorFlow)
2. **Quantization:** Reduce precision (8-bit, custom)
3. **Compilation:** Model → HDL/bitstream (Vitis AI, etc.)
4. **Synthesis:** HDL → gate-level netlist
5. **Place & Route:** Physical layout on FPGA
6. **Bitstream Generation:** Final configuration file
7. **Deployment:** Load onto FPGA
8. **Profiling:** Optimize resource usage, timing

**Time:** Days to weeks (vs. hours for GPU software)

### Hybrid Approaches
**CPU + FPGA:**
- CPU for control, FPGA for acceleration
- Zynq SoCs (ARM + FPGA fabric)
- Xilinx Versal (AI Engines + FPGA)

**FPGA + HBM:**
- High-bandwidth memory integration
- Alveo U50/U280
- Overcome memory bottleneck

**Multi-FPGA:**
- Scale across cards
- Data center racks
- FPGA clusters

### Cost Considerations
**Hardware:**
- Low-end FPGAs: $10-100 (edge)
- Mid-range: $500-5,000
- High-end data center: $5,000-15,000
- Development boards: $200-2,000

**Development:**
- Tool licenses (free to $50,000+/year)
- Engineering time (longer than software)
- NRE (no manufacturing cost)

**Operating:**
- Low power (edge FPGAs <10W)
- Deterministic behavior (maintenance)

### Use Case Suitability
**Best For:**
- Low-latency requirements (<1ms)
- Edge deployment (power-constrained)
- Custom/evolving architectures
- Deterministic performance needed
- Medium batch sizes
- CNNs, RNNs (structured models)

**Not Ideal For:**
- Large transformer models (limited resources)
- Rapid prototyping (slow compile)
- High-throughput batch processing (GPUs better)
- Standard models on cloud (GPU mature ecosystem)

### Future Trends
**Heterogeneous SoCs:**
- Versal AI Engines (Xilinx)
- Integrated AI accelerators + FPGA fabric
- Best of both worlds

**High-Level Tools:**
- Python-to-bitstream workflows
- Automated optimization
- Lower barrier to entry

**Datacenter Integration:**
- Kubernetes support
- Cloud FPGA offerings (AWS F1)
- Disaggregated infrastructure

**Chiplet Integration:**
- FPGA fabric + HBM + AI cores
- UCIe standard interfaces
- Modular computing

### Notable Deployments
- **Microsoft Bing:** Project Catapult (FPGA acceleration)
- **AWS:** F1 instances (FPGA cloud)
- **Alibaba:** FPGA inference in data centers
- **Autonomous Vehicles:** Xilinx in many platforms
- **5G Base Stations:** Acceleration and flexibility

### Research Directions
- NeuroFPGA (neural architecture search for FPGA)
- Binarized/ternary neural networks (extreme efficiency)
- In-FPGA training (not just inference)
- Optical-FPGA hybrid systems
- FPGA overlays (abstraction layers)

FPGAs occupy a unique niche in AI hardware, offering a compelling balance of flexibility, efficiency, and low latency for applications where GPUs are overkill or too power-hungry and ASICs are too rigid or costly, making them particularly valuable for edge AI, real-time systems, and specialized deployment scenarios requiring deterministic performance.
