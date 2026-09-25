A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.

### Semantic Classification

### Content

#### OWL Restrictions

- hasErrorSignal some MeasurementError
- implements some CorrectionStrategy

### Current Landscape (2026)

- The frontier has shifted from classical PID/model-predictive loops towards learned visuomotor policies that close the perception-action loop directly; Diffusion Policy (Chi et al., IJRR 2024) established receding-horizon closed-loop action-chunk prediction as the dominant formulation, replanning roughly every 0.8s from as few as 50-150 teleoperation demonstrations.
- The central 2025 problem became running large flow/diffusion Vision-Language-Action models fast enough to close a real-time loop: Physical Intelligence's Real-Time Chunking (RTC, June 2025) reframes chunk transitions as an inpainting problem with "prefix guidance", holding 50Hz control on pi-0 and pi-0.5 and staying stable under 200-300ms of injected inference delay with no retraining.
- Generalist VLA policies are now the key players in closed-loop manipulation: Physical Intelligence's pi-0.5 (April 2025) runs a System-2 high-level text action at low frequency and a System-1 1-second (50-step) low-level action chunk at 50Hz, alongside OpenVLA, SmolVLA and pi-0-FAST in the open lerobot stack.
- Explicit feedback-driven frameworks have re-entered learning-based control: CLOVER (NeurIPS 2024) pairs a text-conditioned video-diffusion planner with a measurable error-embedding controller that triggers replans, improving on open-loop baselines by ~8% on CALVIN and nearly doubling completed-task length versus RT-1.
- Onboard latency remains the binding constraint: naive pi-0.5 runs at only ~0.7Hz (1.4s inference) on an NVIDIA Jetson Orin, so 2025-2026 work such as VLASH (up to 11.8x reaction-latency reduction) and Jetson-PI (8.66x control-frequency gain via scheduling and CUDA-graph reuse) targets edge deployment, with Intel shipping an OpenVINO pi-0.5+RTC pipeline in its 2026 Edge AI Suite.
- Real-world reinforcement learning for closed-loop control is maturing via human-in-the-loop and online model-based methods (HIL-SERL, 2024; online model-based RL training excavator and soft-robot arms directly on hardware within hours, 2025), but sample efficiency, safety certification and sim-to-real transfer for vision-based closed-loop grasping remain open challenges as of 2026.

### References

- 1. Physical Intelligence (2025). Real-Time Action Chunking with Large Models. https://www.pi.website/research/real_time_chunking
- 2. Kim, Black et al. (2025). Real-Time Execution of Action Chunking Flow Policies (RTC). arXiv:2506.07339. https://arxiv.org/html/2506.07339v1
- 3. Physical Intelligence (2025). pi-0.5: A VLA with Open-World Generalization. https://www.pi.website/blog/pi05
- 4. Bu et al. (2024). CLOVER: Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation. NeurIPS 2024. https://proceedings.neurips.cc/paper_files/paper/2024/file/fad8962279154544ed69bb63eb14d677-Paper-Conference.pdf
- 5. Jetson-PI (2026). Towards Onboard Real-Time Robot Control via Foresight Scheduling. arXiv:2607.12659. https://arxiv.org/html/2607.12659v4
- 6. Intel (2026). Pi0.5 with Real-Time Chunking, Robotics AI Suite. Open Edge Platform documentation. https://docs.openedgeplatform.intel.com/2026.0/edge-ai-suites/robotics-ai-suite/embodied/sample_pipelines/pi05_with_rtc.html

### Provenance

