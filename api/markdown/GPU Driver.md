
A GPU driver is the system software that mediates between an operating system or application graphics API and the physical graphics processing unit, translating high-level rendering and compute commands into hardware-specific instructions. It manages GPU memory, command submission queues, context switching, and synchronisation, and exposes standard interfaces so that applications need not target individual hardware models. Driver quality and versioning directly affect performance, feature availability, and stability of graphics and GPU-compute workloads.

- ### Overview
	- The driver presents standard interfaces such as [[Vulkan]], [[OpenGL]], [[DirectX]], and [[CUDA]] so applications target a stable abstraction rather than specific silicon.
	- It cooperates with device [[Firmware]] and the OS kernel to schedule work and arbitrate access to the device.
	- Driver versions gate feature exposure, extension availability, and performance.
- ### Key aspects
	- Command submission and queue management for the [[Render Pipeline]] and [[Compute Shader]] workloads.
	- GPU [[Memory Management]], allocation, and residency control.
	- Context isolation and synchronisation across concurrent applications.
	- Power, thermal, and clock management in concert with [[Firmware]].
- ### Applications
	- Enabling [[Hardware Acceleration]] for rendering and general-purpose compute.
	- Backing real-time graphics in games, simulation, and spatial computing.
	- Exposing [[CUDA]] and compute interfaces for machine-learning workloads.
- ### Provenance

