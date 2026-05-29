- ### Definition
  - An Operating System (OS) is the foundational software layer that manages hardware resources — CPU scheduling, memory allocation, file systems, device drivers, and process isolation — and provides a stable interface for application software. In spatial computing and XR contexts, OS-level capabilities such as real-time scheduling, GPU access, and sensor integration are critical; specialised spatial OSes must coordinate head-tracking, display refresh, and input fusion at sub-millisecond latencies.

- ### Semantic Classification
  - owl-class:: infrastructure:OperatingSystem
  - owl-role:: Concept

- ### Relationships
  - hasPart [[Virtual Machine]]
  - hasPart [[Resource Management]]
  - enables [[Embedded Systems]]
  - enables [[Edge Computing]]
  - relatedTo [[Hardware]]

- ### Content
  # OperatingSystem
  An Operating System provides the software foundation upon which all other applications run. Core responsibilities include process scheduling, memory management, file-system abstraction, and device-driver interfaces. Virtualisation support enables multiple isolated OS instances on shared hardware via virtual machines or containers. For XR and spatial computing, the OS must additionally manage high-frequency sensor streams (IMU, cameras, depth sensors), coordinate with GPU drivers for low-latency display pipelines, and enforce security isolation between user applications and sensor data. Embedded variants — real-time operating systems (RTOS) — provide deterministic scheduling for safety-critical control loops in robotics and industrial automation. OpenXR, the Khronos standard, abstracts over OS-specific XR runtime differences to give developers a portable API.

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z