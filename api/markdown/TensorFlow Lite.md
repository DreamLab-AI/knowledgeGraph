TensorFlow Lite (now rebranded as LiteRT) is Google's open-source deep learning inference framework designed for on-device execution of machine learning models on mobile, embedded, and IoT edge hardware. It converts full TensorFlow or ONNX models into a FlatBuffers-based .tflite format and provides a lightweight interpreter that minimises memory footprint and latency without requiring network connectivity. The framework supports post-training optimisation techniques including quantisation, pruning, and weight clustering, and exposes hardware-acceleration delegates for GPUs, DSPs, NPUs, and the Coral Edge TPU. Its sister project TensorFlow Lite Micro (TFLite Micro) extends the same programming model to bare-metal microcontrollers with as little as 256 KB of RAM.

### Overview

- TensorFlow Lite was first announced by Google at Google I/O 2017 as part of the TensorFlow 1.x ecosystem and reached its first stable public release in 2019. The framework addresses a core tension in [[On-Device Machine Learning]]: full [[Deep Learning]] models trained on data-centre GPUs are typically too large and too compute-intensive to run on battery-powered handsets or microcontrollers without modification.
- The solution TFLite provides is a two-stage pipeline. First, a model is trained or fine-tuned in standard [[TensorFlow]] (or imported from [[ONNX]]) and then passed through the TFLite Converter, which folds constants, strips training-only ops, and serialises the graph into FlatBuffers. Second, the resulting `.tflite` file is deployed to the target device and executed by the TFLite Interpreter, a small C++ runtime that can be compiled with a footprint well under 1 MB.
- In 2024 Google began migrating the project under the umbrella brand **LiteRT** (short for Lite RunTime) to signal its independence from the broader TensorFlow brand, though the file format and APIs remain compatible.
- Key engineering trade-offs distinguish TFLite from server-side inference:
  - **Latency vs accuracy**: [[Model Quantisation]] reduces precision (e.g. FP32 → INT8) to shrink model size and accelerate arithmetic at the cost of a small accuracy drop.
  - **Portability vs performance**: the generic reference interpreter runs on any POSIX system; platform-specific delegates trade portability for speed.
  - **Privacy by design**: because inference runs entirely on-device, raw sensor data (camera frames, microphone audio) never leaves the handset, supporting [[Privacy-Preserving Inference]].

### Key Components

- **TFLite Converter**
  - Accepts [[TensorFlow]] SavedModel or Keras `.h5` as input.
  - Can import [[ONNX]] models via the `onnx-tf` bridge.
  - Applies graph optimisations: constant folding, dead-node pruning, operator fusion.
  - Outputs a `.tflite` FlatBuffers file containing the model graph and weights.
- **TFLite Interpreter**
  - A minimal C++ runtime; Python, Java (Android), Swift/Obj-C (iOS), and C# wrappers expose the same API.
  - Allocates tensors from a single pre-determined arena (no garbage-collected heap required), critical for [[Microcontroller]] deployment.
  - Executes ops from a built-in kernel library plus optional custom ops.
- **[[TensorFlow Lite Micro]] (TFLM)**
  - Strips the interpreter to an even smaller footprint targeting [[Microcontroller]] MCUs with no OS, no dynamic memory allocation, and as little as 256 KB RAM.
  - Supports [[Arduino]], STM32, and similar platforms.
  - Runs models for [[Keyword Spotting]], gesture recognition, and anomaly detection.
- **Hardware Acceleration Delegates**
  - *GPU Delegate*: OpenGL ES / Metal compute shaders for mobile GPU offload.
  - *NNAPI Delegate*: routes compute to Android's [[Neural Networks API]], abstracting vendor-specific accelerators (Qualcomm Hexagon DSP, Samsung NPU, etc.).
  - *[[Coral Edge TPU]] Delegate*: USB and PCIe accelerator from Google for ultra-low-power INT8 inference.
  - *XNNPACK Delegate*: CPU-side SIMD-optimised micro-kernels (NEON, AVX2) used as the default CPU path since TFLite 2.x.
- **[[Model Quantisation]] and Compression**
  - *Post-Training Quantisation (PTQ)*: INT8 weight quantisation applied after training; requires a small calibration dataset.
  - *Quantisation-Aware Training (QAT)*: inserts fake-quantisation nodes during fine-tuning so the model learns to be robust to reduced precision.
  - *Weight Clustering*: groups weights into clusters sharing a centroid value, reducing unique weight count.
  - *Magnitude Pruning*: zeros low-magnitude weights before conversion to reduce effective model size (via [[TensorFlow Model Optimisation Toolkit]]).
- **Task Library and Model Maker**
  - High-level APIs abstracting common [[Computer Vision]], [[Natural Language Processing]], and [[Audio Classification]] pipelines.
  - Model Maker wraps transfer-learning fine-tuning so developers can customise pre-trained models with small domain-specific datasets using a few lines of Python.

### Applications and Use Cases

- **Mobile Camera Features**: [[Image Classification]], [[Object Detection]], [[Pose Estimation]], and [[Semantic Segmentation]] run on-device in real time in Android camera apps, Google Lens, and third-party photography apps.
- **Voice Interfaces**: [[Keyword Spotting]] ("Ok Google") and on-device [[Speech Recognition]] using models such as RNN-T deployed via TFLite Micro on always-on DSP cores.
- **[[Augmented Reality]]**: AR frameworks such as [[MediaPipe]] (Google's perception pipeline) ship TFLite models for hand tracking, face mesh, and body pose, bridging [[Machine Learning]] to the [[Spatial Computing]] domain.
- **Health and Wearables**: heart-rate estimation, fall detection, and ECG anomaly detection on [[IoT]] wearables where cloud connectivity is unreliable or privacy-sensitive.
- **Industrial [[Edge Computing]]**: predictive maintenance models deployed on Raspberry Pi or [[Coral Edge TPU]]-equipped gateways performing [[Anomaly Detection]] without sending sensor data to the cloud.
- **[[Federated Learning]] clients**: TFLite serves as the local inference and update-computation runtime in Google's federated learning deployments (e.g. next-word prediction on Gboard), where model updates are aggregated without centralising private user data.
- **Robotics**: lightweight [[Object Detection]] and [[Depth Estimation]] models deployed on embedded [[Robotics]] compute boards (Jetson Nano, BeagleBone AI) for autonomous navigation without cloud round-trips.

### Comparison with Peer Frameworks

- **[[PyTorch Mobile]]** (Meta): similar scope but uses the TorchScript / ExecuTorch path; broader operator coverage but larger baseline footprint; popular in research-to-mobile pipelines.
- **[[ONNX Runtime]] Mobile**: vendor-neutral format; best when models originate in non-TF frameworks (e.g. HuggingFace [[Transformers]]); used widely in Windows on ARM and Azure IoT scenarios.
- **[[Core ML]]** (Apple): iOS/macOS only; deeply integrated with Apple's [[Neural Engine]]; superior performance on Apple silicon but zero Android portability.
- **[[NCNN]]** (Tencent): ultra-lightweight C++ framework popular in China's mobile ecosystem; no Python training integration but very small binary size.
- TFLite's principal advantages are its breadth of hardware delegate support, tight integration with [[MediaPipe]], and the TFLM path to bare-metal MCUs — a combination unmatched by any single competing framework as of 2025.

### Standards and Context

- TFLite itself is not governed by a formal standards body, but it interoperates with:
  - **[[ONNX]]** (Open Neural Network Exchange): community standard for model interchange; the `onnx-tf` converter bridges ONNX models into TFLite.
  - **[[Android Neural Networks API]] (NNAPI)**: Android platform API (API level 27+) that the NNAPI delegate uses to reach vendor-specific accelerators.
  - **[[MLCommons]] / MLPerf Inference**: TFLite-based submissions appear in MLPerf Inference benchmarks under the mobile and edge categories, providing standardised accuracy/latency characterisation.
  - **[[TensorFlow Model Optimisation Toolkit]]**: Google's companion library codifying quantisation and pruning recipes used with TFLite deployment.
- The Apache 2.0 licence covers all TFLite / LiteRT source code; Google coordinates development on GitHub under the `tensorflow/tensorflow` monorepo and, since 2024, the `google-ai-edge/LiteRT` repository.

### Current Landscape (2026)

- On 4 September 2024 Google rebranded TensorFlow Lite as LiteRT (short for "Lite Runtime"), reflecting a framework-neutral vision that runs models authored in PyTorch, JAX, Keras and TensorFlow; documentation moved to ai.google.dev/edge/litert and packages migrated to com.google.ai.edge.litert (Maven) and ai-edge-litert (PyPI), while the .tflite file format and Interpreter API stayed backward-compatible.
- The runtime is now positioned within the Google AI Edge suite, and a LiteRT 2.x line introduced a modern CompiledModel API that supersedes the legacy Interpreter/delegate model with automated accelerator selection; all new features and performance work ship under LiteRT rather than the frozen TFLite packages.
- At Google I/O 2025 (20 May 2025) Google previewed the "maximum performance, simplified" release built on ML Drift, its next-generation GPU engine spanning OpenCL, OpenGL, Metal and WebGPU across Android, iOS, macOS, Windows, Linux and Web; on 28 January 2026 these acceleration capabilities "fully graduated" into the production stack, averaging roughly 1.4x faster GPU inference than the legacy TFLite GPU delegate.
- Unified NPU acceleration became a headline feature, co-developed with Qualcomm and MediaTek: the LiteRT Qualcomm AI Engine Direct (QNN) Accelerator announced in November 2025 replaced the old TFLite QNN delegate, and on Snapdragon 8 Elite Gen 5 NPU inference is reported up to 100x faster than CPU (about 10x faster than GPU), with over 50 of 72 benchmarked models running under 5 ms via an ahead-of-time (AOT) compilation and Google Play On-device AI (PODAI) delivery workflow.
- On-device generative AI is now central through LiteRT-LM, a cross-platform LLM pipeline library shipping in Chrome, ChromeOS, Pixel Watch and the viral Google AI Edge Gallery app (announced with audio support and Google Play availability in September 2025); it runs models such as Gemma 4 E2B in the new .litertlm packaging format across CPU, GPU and NPU backends.
- Key players span Google (AI Edge / LiteRT team), silicon partners Qualcomm, MediaTek, Intel (OpenVINO offload to Intel NPUs on AI PCs) and Arm (SME2 acceleration), with pre-optimised models distributed via Qualcomm AI Hub and delivered through Google Play AI Packs.
- Open challenges as of 2026 include silicon fragmentation across NPU vendors and SoC variants despite the unified API, the added complexity of AOT compilation and runtime-library distribution, memory pressure from multi-gigabyte on-device LLMs (Gemma 4 E2B is around 2.58 GB), and a migration burden as the TFLite name and its support-library/Tasks components are progressively retired in favour of LiteRT and MediaPipe Tasks.

### References

- 1. Google AI Edge team / Google Developers Blog (2024). TensorFlow Lite is now LiteRT. https://developers.googleblog.com/en/tensorflow-lite-is-now-litert/
- 2. Google Developers Blog (2026). LiteRT: The Universal Framework for On-Device AI. https://developers.googleblog.com/litert-the-universal-framework-for-on-device-ai/
- 3. Google Developers Blog (2025). LiteRT: Maximum performance, simplified. https://developers.googleblog.com/litert-maximum-performance-simplified/
- 4. Edge AI and Vision Alliance (2025). Google Announces LiteRT Qualcomm AI Engine Direct Accelerator. https://www.edge-ai-vision.com/2025/11/google-announces-litert-qualcomm-ai-engine-direct-accelerator/
- 5. Google Developers Blog (2026). Blazing fast on-device GenAI with LiteRT-LM. https://developers.googleblog.com/blazing-fast-on-device-genai-with-litert-lm/

### Provenance

