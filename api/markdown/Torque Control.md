
A low-level actuation strategy that directly commands the output torque of joints or motors rather than position or velocity, enabling compliant, force-sensitive interaction between a robot and its environment. Torque control is essential for safe human-robot collaboration and dexterous manipulation tasks.

- ### Semantic Classification

- ### Content
  Torque Control — content pending enrichment.

- ### Current Landscape (2026)
  - The safety baseline shifted in 2025: the 3rd editions of ISO 10218-1 and ISO 10218-2 were published (Jan/Feb 2025), folding the collaborative content of ISO/TS 15066 directly into the standard, making functional-safety requirements explicit and adding cybersecurity provisions; Power and Force Limiting (PFL) still leans on per-joint torque sensing to keep contact below the ISO/TS 15066 Annex A biomechanical limits, with the EU Cyber Resilience Act applying to connected robots from 11 December 2027.
  - Sensorless torque control matured: a 2025 framework combining Physics-Informed Neural Networks for friction modelling with an Unscented Kalman Filter (validated on the ergoCub humanoid) delivered better torque-tracking, energy efficiency and disturbance rejection than the classical Recursive Newton-Euler baseline, and generalised across robots without re-identification.
  - Quasi-direct-drive (QDD) and cycloidal QDD actuators became the default for dynamic legged robots, prized for backdrivability and high force-control bandwidth; Zhu, Tanaka and Hong's cycloidal QDD design (ICRA 2025) pairs the actuator with a GRU-based learned torque estimator to capture ripple and non-linearities and shrink the sim-to-real gap for reinforcement learning.
  - Reinforcement-learning locomotion increasingly targets the torque domain directly: the Joint Torque Space Perturbation Injection method (Cha et al., April 2025) replaces fixed domain randomisation with state-dependent torque-space perturbations for more robust zero-shot transfer, reflecting a broader move to torque-level policies over pure PD position control.
  - Whole-body impedance and compliant force control advanced on full-scale humanoids: 2025-2026 work demonstrated MPC-QP whole-body controllers with stiffness modulation for human-humanoid co-transport (on Digit), and reference implementations reporting roughly 5 ms impedance updates at 100 Hz with force tracking within about 2% of nominal stiffness.
  - Torque sensing is now saturating commercial hardware: Tesla's Optimus reportedly carries 14 torque sensors and 18 force sensors, while suppliers such as Sensodrive (SensoJoint, certified to ISO 13849/EN 61800-5-2/IEC 61508 up to SIL3/PLe) and FUTEK ship joint-level torque sensors as safety-certified drop-in drives for cobots and humanoids.
  - Open challenges as of 2026 remain the sim-to-real gap for high-gear-ratio, torque-sensorless joints (friction, backlash, ripple), real-time whole-body torque optimisation at scale (GPU-accelerated centroidal dynamics is one 2026 response to the CPU-GPU bottleneck), and certifying learning-based torque controllers against the functional-safety requirements now mandated by ISO 10218:2025.

- ### References
  - 1. International Organization for Standardization (2025). ISO 10218-1:2025 — Robotics: Safety requirements, Part 1: Industrial robots. https://www.iso.org/standard/73933.html
  - 2. Zhu, A., Tanaka, Y., Rafeedi, F. & Hong, D. (2024/2025). Cycloidal Quasi-Direct Drive Actuator Designs with Learning-based Torque Estimation for Legged Robotics (ICRA 2025). https://arxiv.org/pdf/2410.16591
  - 3. ergoCub / IIT team (2025). PINNs with UKF for Sensorless Joint Torque Estimation in Humanoid Robots. https://www.youtube.com/watch?v=FufYAPuL_nA
  - 4. Cha, J. et al. (2025). Sim-to-Real of Humanoid Locomotion Policies via Joint Torque Space Perturbation Injection. https://arxiv.org/html/2504.06585v1
  - 5. Transense (2025). Advances in Sensing for Robotics Applications (Tesla Optimus torque/force sensing; ISO 10218-1). https://www.transense.com/sawsense/advances-in-sensing-for-robotics-applications
  - 6. Authors (2025). Efficient and Compliant Control Framework for Versatile Human-Humanoid Co-Transportation (QP whole-body torque/force control on Digit). https://arxiv.org/html/2512.07819v1

- ### Provenance

