An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.

### Semantic Classification

### Content

## Overview

Robotic System represents an abstract concept in the telecollaboration ontology hierarchy.

#### Related Concepts

- [[owl:Thing]]

### Current Landscape (2026)

- Vision-Language-Action (VLA) foundation models have become the dominant control architecture for general-purpose robotic systems, displacing hand-scripted behaviour trees: Figure AI's on-board Helix (unveiled February 2025, running motor control at 200 Hz) and its successor Helix-02 demonstrated the first multi-humanoid collaborative locomanipulation from a single learned network.
- NVIDIA's open humanoid foundation model GR00T advanced rapidly through 2025-2026 — GR00T N1 (arXiv:2503.14734, GTC March 2025), N1.5 at COMPUTEX May 2025, N1.6 on 15 December 2025 (Cosmos-2B backbone, 32-layer diffusion transformer), and the 3B-parameter N1.7 Early Access (17 April 2026, Apache 2.0 on HuggingFace) — alongside Cosmos world models trained on ~20M hours of video to close the sim-to-real gap.
- Humanoid robotic systems entered real production duty rather than demos: Figure 02 completed a roughly ten-month BMW Spartanburg deployment in late 2025 (over 90,000 parts moved, contributing to more than 30,000 X3 vehicles), Apptronik Apollo began piloting at Mercedes-Benz, Agility Digit passed 100,000 totes at a GXO site, and Toyota contracted seven Agility units for a Canadian factory in early 2026.
- Key players now cluster around cross-embodiment "universal robot brain" models — Physical Intelligence (pi0/pi0-FAST), NVIDIA GR00T, Skild AI (Skild Brain), Google DeepMind (Gemini Robotics, shipped March 2025 as a foundation-model API), Figure, Tesla Optimus, Boston Dynamics and Unitree — while open baselines such as OpenVLA and HuggingFace's 450M SmolVLA (June 2025, LeRobot framework) drive research.
- Safety standards were substantially rewritten: ISO 10218-1:2025 and ISO 10218-2:2025 (published February 2025, EN effective 13 February 2026) added explicit cybersecurity requirements, absorbed the former ISO/TS 15066 power-and-force-limited collaborative rules, and shifted certification from hardware-only to application-specific — aligned for the first time with ANSI/A3 R15.06-2025.
- Regulation tightened around deployed robotic systems: the EU AI Act (Regulation 2024/1689) reaches full application on 2 August 2026 (likely classing workplace-safety-critical humanoid AI stacks as high-risk), the EU Machinery Regulation 2023/1230 replaces the Machinery Directive in January 2027, and China's MIIT released the first national humanoid/embodied-AI standard system (HEIS 2026) on 28 February 2026.
- Open frontier as of 2026: no certified biomechanical model yet covers a falling biped, so the dedicated dynamic-stability standard ISO 25785-1 remains at Working Draft (targeting late 2026-2027) and deployments fall back on perimeter fencing, Type 4 light curtains and area scanners; liability for AI-misperception harm, on-board reasoning latency, hardware dexterity gaps and data-efficient sim-to-real transfer remain unresolved.

### References

- 1. NVIDIA / Bjorck et al. (2025). GR00T N1: An Open Foundation Model for Generalist Humanoid Robots. https://arxiv.org/abs/2503.14734
- 2. NVIDIA GEAR Lab (2025). GR00T N1.6: An Improved Open Foundation Model for Generalist Humanoid Robots. https://research.nvidia.com/labs/gear/gr00t-n1_6/
- 3. MarkTechPost (2026). Top 10 Physical AI Models Powering Real-World Robots in 2026. https://www.marktechpost.com/2026/04/28/top-10-physical-ai-models-powering-real-world-robots-in-2026/
- 4. FSD DSK (2026). Safeguarding Humanoid Robots in 2026 Factories — Light Curtains and Area Scanners. https://www.fsddsk.com/humanoid-robot-safety-standards-light-curtains-and-area-scanners-in-2026-factories
- 5. Embodied Global (2026). Humanoid Robot Safety Compliance: Navigating the Global Regulatory Framework. https://embodiedglobal.com/en/article/humanoid-robot-safety-compliance-global-regulatory-framework-2026
- 6. Midwest Industries (2026). Industrial Robot Safety: 2026 Standards, Hazards & Best Practices. https://midwestindustries.org/blog/industrial-robot-safety/

### Provenance

