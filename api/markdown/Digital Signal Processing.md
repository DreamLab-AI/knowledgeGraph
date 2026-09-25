The mathematical and computational techniques for representing, transforming, and manipulating signals in digital form, including filtering, spectral analysis, compression, and enhancement — enabling real-time audio processing, video analysis, spatial audio for VR/AR, and sensor data interpretation critical for immersive and intelligent systems.

### Semantic Classification

### Content

## Technical Details

- **Core Operations**:
  - Filtering: Noise reduction, frequency separation
  - Transformation: FFT, wavelet analysis
  - Compression: Efficient data encoding
  - Enhancement: Quality improvement
- **Metaverse Applications**:
  - Spatial audio for VR/AR immersion
  - Real-time voice processing
  - Motion tracking signal analysis
  - Haptic feedback generation
- **Market Size (2025)**:
  - Global DSP processor market: ~$11-12B (estimates vary by scope; projected to reach ~$22B by 2034, CAGR ~8%)
  - Professional DSP market: $580M (CAGR 4.1%)
  - Audio processing: 58% market share
- **Current Trends**: AI/ML integration, immersive audio adoption, 5G and edge processing requirements, neural DSP acceleration

## Applications

- VR/AR spatial audio
- Voice recognition systems
- Video enhancement and compression
- Sensor data processing
- Real-time communication

### Current Landscape (2026)

- The biggest 2024-2026 shift is the rise of "neural receivers", where learned models replace classical DSP blocks (channel estimation, equalisation, demapping) in the wireless physical layer; NVIDIA released open research code and a TensorRT/Sionna/Aerial toolchain (2024), and by 2025-2026 DeepSig and partners demonstrated the industry-first AI/ML neural receiver in a live 5G macro network, reporting up to 2-3x uplink throughput at the extreme cell edge.
- Standards are formalising AI-in-the-PHY: 3GPP Release 18 (5G-Advanced) established an AI/ML air-interface framework (TR 38.843) for CSI feedback, beam management and positioning, with Releases 19-20 (deployments expected 2025-2027) extending it and laying groundwork for an AI-native 6G air interface.
- On the embedded side, DSP has fused with TinyML: vendors now compile ML kernels onto idle vector-DSP cores and add small NPUs rather than shipping discrete accelerators, exemplified by Texas Instruments' TinyEngine NPU rolled across its MCU portfolio (MSPM0G5187 and AM13Ex, announced March 2026) and STMicroelectronics' STM32N6/STM32U3 hardware signal processors cutting inference time by up to ~76-96%.
- Benchmarking matured with MLCommons MLPerf Tiny v1.4 (July 2026), which added streaming and sensing-hub workloads; Qualcomm's Snapdragon 8 Elite Gen 5 Sensing Hub posted sub-0.30 ms keyword-spotting latency and Syntiant's NDP120 ran always-on wake-word detection at a 3.3% duty cycle.
- The merchant DSP-chip market remains moderately concentrated and slow-growing (Mordor Intelligence puts it at ~USD 2.77 billion in 2026 at ~3.1% CAGR), with Texas Instruments, Analog Devices, Qualcomm, Intel and NXP holding roughly 64% of revenue; the higher-growth action has moved to DSP IP (CEVA, Cadence Tensilica, Synopsys ARC, Arm) and RISC-V vector extensions embedded inside SoCs.
- Software-defined radio plus O-RAN has become the standard experimentation substrate: OpenAirInterface, NI/Ettus USRP X410 testbeds and FlexRIC now host drop-in DeepRx neural receivers validated against LMMSE baselines, with 2025 work showing transformer-based receivers outperforming classical linear detection at high-order modulation.
- Open challenges as of 2026 centre on meeting hard real-time latency budgets (models need roughly 10x complexity reduction to fit PHY timing), poor generalisation of low-complexity models across channel conditions, reducing data movement rather than just compute (driving neuromorphic and in-sensor compute such as Sony's IMX500), and the lack of standardised, trustworthy validation for embedded AI replacing certified DSP algorithms.

### References

- 1. NVIDIA Developer Blog (2024). Real-Time Neural Receivers Drive AI-RAN Innovation. https://developer.nvidia.com/blog/real-time-neural-receivers-drive-ai-ran-innovation/
- 2. Ettus/NI Knowledge Base (2026). 5G OAI Neural Receiver Testbed with USRP X410 (DeepRx). https://kb.ettus.com/5G_OAI_Neural_Receiver_Testbed_with_USRP_X410
- 3. MLCommons (2026). MLPerf Tiny v1.4 Results: Benchmarking AI at the Edge. https://mlcommons.org/2026/07/mlperf-tiny-v1-4-results/
- 4. Texas Instruments (2026). TI expands microcontroller portfolio with TinyEngine NPU to enable edge AI. https://www.ti.com/about-ti/newsroom/news-releases/2026/2026-03-10-ti-expands-microcontroller-portfolio-and-software-ecosystem-to-enable-edge-ai-in-every-device.html
- 5. Mordor Intelligence (2026). Digital Signal Processor Market Size, Share Insights. https://www.mordorintelligence.com/industry-reports/global-digital-signal-processor-market
- 6. Hymel, S. (2026). State of Edge AI on Microcontrollers in 2026. https://shawnhymel.com/3125/state-of-edge-ai-on-microcontrollers-in-2026/

### Provenance

