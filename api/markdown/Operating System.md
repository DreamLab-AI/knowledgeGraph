An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for application programs — encompassing process scheduling, memory management, file-system abstraction, device-driver interfaces, networking stacks, and security enforcement. Acting as the intermediary between hardware and user-space applications, the OS exposes stable APIs that decouple software from underlying physical or virtualised hardware. Specialised variants range from real-time operating systems (RTOS) for deterministic control loops in embedded and robotic systems, to hypervisor-based OSes supporting full hardware virtualisation, to spatial-computing runtime stacks that coordinate sensor fusion, GPU pipelines, and display refresh at sub-millisecond latencies.

### Overview

- The operating system sits between raw [[Hardware]] and the applications that users and developers interact with directly.
- Its central function is resource multiplexing: multiple competing programs share the same [[CPU]], [[Memory]], [[File System]], and network interfaces without interfering with each other.
- By abstracting physical hardware behind stable APIs — most prominently [[POSIX]] on Unix-like systems — the OS allows application code to remain portable across different processor architectures and device configurations.
- Security boundaries enforced by the OS (privilege rings, address-space isolation, capability-based access control) are the primary line of defence against malicious or buggy software.
- Modern OSes also serve as the runtime foundation for [[Cloud Computing]] infrastructure: hypervisors such as Xen and KVM allow a single physical machine to host many independent [[Virtual Machine]] instances, each running its own OS image.
- In constrained environments — [[Embedded Systems]], [[Robotics]], industrial controllers — a lightweight [[Real-Time Operating System]] replaces the general-purpose OS, providing deterministic scheduling with bounded interrupt latency.

### Key Components

#### Kernel

- The [[Kernel]] is the privileged core that runs in supervisor mode and has direct hardware access.
- Monolithic kernels (Linux, macOS XNU) run all core services in a single address space; microkernels (seL4, QNX) restrict the kernel to minimal primitives and run services in user space.
- Hybrid kernels (Windows NT) combine elements of both architectures.

#### Process Scheduler

- The [[Process Scheduler]] decides which [[Multithreading]] threads run on which CPU cores at any instant.
- Scheduling algorithms include Completely Fair Scheduler (CFS, Linux), O(1) scheduler variants, and rate-monotonic scheduling for real-time workloads.
- [[Real-Time Operating System]] schedulers guarantee bounded response times, critical for [[Robotics]] and avionics control loops.

#### Memory Management

- The [[Memory Management Unit]] (hardware) and OS memory manager cooperate to provide each process with its own virtual address space.
- Paging and segmentation isolate processes; demand paging swaps pages to disk transparently.
- [[Security Isolation]] between processes is enforced at this layer, preventing one process from reading another's memory.

#### File System

- The [[File System]] abstracts storage hardware (SSD, HDD, NVMe) into a hierarchical namespace of files and directories.
- Common file systems include ext4 and Btrfs (Linux), APFS (macOS), NTFS (Windows), and ZFS (cross-platform).
- Distributed file systems (NFS, CIFS/SMB) extend the abstraction across [[Network Stack]] boundaries.

#### Device Drivers

- [[Device Driver]] modules mediate between the OS kernel and specific hardware peripherals.
- The driver model (e.g., Linux kernel modules, Windows WDM) allows new hardware to be added without recompiling the entire OS.
- In [[Spatial Computing]] platforms, specialised XR drivers coordinate [[GPU]] pipelines, IMU sensors, and depth cameras with strict latency budgets.

#### Network Stack

- The [[Network Stack]] implements protocol layers (TCP/IP, UDP, QUIC) and exposes socket APIs to user-space applications.
- Kernel bypass technologies (DPDK, io_uring) allow high-performance [[Distributed Systems]] applications to reduce network latency by avoiding repeated user/kernel context switches.

#### Inter-Process Communication

- [[Inter-Process Communication]] (IPC) mechanisms — pipes, shared memory, message queues, sockets, D-Bus — allow cooperating processes to exchange data safely.
- Modern microservice architectures running inside [[Containerisation]] environments use IPC extensively via Unix domain sockets and loopback networking.

### Applications and Use Cases

#### General-Purpose Desktop and Server

- Linux, macOS, and Windows provide the OS substrate for billions of personal computers, servers, and data-centre nodes.
- Server Linux distributions underpin virtually all [[Cloud Computing]] infrastructure, container orchestration ([[Kubernetes]]), and CI/CD pipelines.

#### Mobile

- Android (Linux-based kernel) and iOS (XNU kernel) are mobile-specific OS variants tuned for power efficiency, touch input, and application sandboxing.
- Mobile OSes enforce strict per-application [[Security Isolation]] via mandatory access control (SELinux on Android, sandbox profiles on iOS).

#### Embedded and Real-Time

- [[Real-Time Operating System]] platforms — FreeRTOS, Zephyr, VxWorks, QNX — run on microcontrollers in automotive ECUs, medical devices, and factory automation.
- Deterministic scheduling and minimal footprint are defining constraints; the OS may fit in tens of kilobytes of flash.
- [[Embedded Systems]] without any OS (bare-metal programming) are still common for the simplest sensor nodes.

#### Robotics

- The [[Robot Operating System]] (ROS / ROS2) is a middleware framework layered atop Linux that provides pub/sub messaging, hardware abstraction, and tool chains for [[Robotics]] development.
- ROS2 uses DDS (Data Distribution Service) for real-time inter-node communication, addressing latency requirements that general Linux scheduling cannot guarantee alone.

#### Virtualisation and Cloud

- [[Hypervisor]] software (KVM, VMware ESXi, Microsoft Hyper-V) partitions physical servers into multiple [[Virtual Machine]] instances, each running its own OS.
- [[Containerisation]] (Docker, Podman) uses Linux namespaces and cgroups instead of full hardware emulation, sharing a single OS kernel across many isolated workload containers.
- [[Edge Computing]] deployments run lightweight OS images (Alpine Linux, Flatcar Container Linux) at the network edge to reduce latency for IoT workloads.

#### Spatial Computing and XR

- [[Spatial Computing]] platforms (Apple Vision Pro, Meta Quest, HoloLens) run proprietary or customised OSes that manage head-tracking at 1000 Hz, eye-tracking pipelines, and stereoscopic display refresh in synchrony.
- [[OpenXR]] standardises the runtime API layer that sits atop the OS and abstracts XR hardware differences for cross-vendor application development.
- Low-latency GPU access and sensor fusion pipelines require OS-level scheduling priorities not available in standard desktop Linux or Windows without modification.

### Standards and Context

- **POSIX** (IEEE 1003): the portable operating system interface standard that defines the API contract for Unix-like systems, enabling software portability across Linux, macOS, and other compliant OSes.
- **OpenXR** (Khronos Group): runtime API standard for XR runtimes, abstracting over OS- and vendor-specific display and tracking implementations.
- **AUTOSAR** and **OSEK**: automotive OS standards used in vehicle ECU firmware, defining scheduling, memory protection, and communication services for safety-critical embedded systems.
- **Linux Standard Base (LSB)**: a joint project to standardise the internal structure of Linux distributions, reducing fragmentation across distributions.
- **Common Criteria (ISO/IEC 15408)**: security evaluation standard under which high-assurance OSes (SELinux, seL4) are certified for use in government and defence environments.
- **Real-Time Linux (PREEMPT_RT)**: a patch set incorporated into mainline Linux that adds fully preemptible kernel paths, bringing Linux closer to RTOS latency characteristics for industrial and robotics use cases.
- **OCI (Open Container Initiative)**: defines container image and runtime specifications that standardise how OS-level container isolation is implemented across different [[Containerisation]] engines.

### Current Landscape (2026)

- Windows 10 reached end of support on 14 October 2025 after a decade in service, forcing a mass migration to Windows 11; Microsoft's consumer Extended Security Updates programme now bridges eligible 22H2 devices with critical fixes through 12 October 2027.
- At Build 2026 (2 June) Microsoft repositioned Windows 11 as an "agent-native" OS, shipping Coreutils for Windows (a Rust reimplementation of GNU coreutils via the uutils project) to general availability, previewing WSL containers, and adding on-device SLMs Aion 1.0 Instruct and Aion 1.0 Plan for local agentic workflows.
- A defining 2026 theme is OS-level containment for AI agents: Microsoft Execution Containers (MXC) introduce a policy-driven runtime isolation layer with OS-enforced agent identity, integrated with Agent 365, Defender, Entra and Intune.
- Rust crossed a milestone in the Linux kernel: at the December 2025 Kernel Maintainers Summit in Tokyo it was declared no longer experimental and is now recognised as the kernel's second core language alongside C, underpinning drivers such as Apple AGX (Asahi), NVIDIA Nova and Android Binder, though it remains roughly 25,000 lines against 34 million lines of C.
- Memory-safe rewriting is spreading through core tooling, with Debian committing to migrate its APT package manager to Rust by May 2026 and Microsoft pushing Rust deeper into Windows components and its driver API.
- Apple released macOS Tahoe 26 on 15 September 2025 with the cross-platform "Liquid Glass" redesign, an on-device Foundation Models framework exposing Apple Intelligence to developers, and Live Translation; it is confirmed as the final macOS to support Intel Macs, with macOS 27 Golden Gate (late 2026) going Apple-silicon only.
- Open challenges as of 2026 centre on securing OS-level autonomy for AI agents (privilege containment, identity, auditability), the slow and contested pace of C-to-Rust migration, and vendor consolidation around proprietary on-device model stacks.

### References

- 1. Microsoft (2026). Build 2026: Furthering Windows as the trusted platform for development. https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development/
- 2. Microsoft (2025). Windows 10 reached end of support on October 14, 2025. https://www.microsoft.com/en-us/windows/end-of-support
- 3. Kent (2026). Rust in 2025-2026: From 'Most Loved Language' to Core Infrastructure (reporting the December 2025 Kernel Maintainers Summit, Tokyo). https://dev.to/kent-tokyo/rust-in-2025-2026-from-most-loved-language-to-core-infrastructure-4l5k
- 4. Steven Vaughan-Nichols, ZDNET (2026). Microsoft continues its big Linux push at Build 2026. https://www.zdnet.com/article/microsoft-continues-its-linux-company-shift/
- 5. Apple (2025). macOS Tahoe 26 makes the Mac more capable, productive, and intelligent than ever. https://www.apple.com/newsroom/2025/06/macos-tahoe-26-makes-the-mac-more-capable-productive-and-intelligent-than-ever/

### Provenance

