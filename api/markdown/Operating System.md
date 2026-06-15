public:: true

# Operating System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2fcf3b0adb44e313b5568b2064d35088581137c792604ec7f1fd5af17556207b",
  "@type": "Page",
  "vc:slug": "operating-system",
  "title": "Operating System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9177"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Operating System"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operating-system",
  "@type": "Class",
  "label": "Operating System",
  "definition": "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for application programs — encompassing process scheduling, memory management, file-system abstraction, device-driver interfaces, networking stacks, and security enforcement. Acting as the intermediary between hardware and user-space applications, the OS exposes stable APIs that decouple software from underlying physical or virtualised hardware. Specialised variants range from real-time operating systems (RTOS) for deterministic control loops in embedded and robotic systems, to hypervisor-based OSes supporting full hardware virtualisation, to spatial-computing runtime stacks that coordinate sensor fusion, GPU pipelines, and display refresh at sub-millisecond latencies.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:os",
      "label": "OS"
    },
    {
      "@id": "urn:ngm:class:system-software",
      "label": "System Software"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:kernel",
        "label": "Kernel"
      },
      {
        "@id": "urn:ngm:class:process-scheduler",
        "label": "Process Scheduler"
      },
      {
        "@id": "urn:ngm:class:memory-management-unit",
        "label": "Memory Management Unit"
      },
      {
        "@id": "urn:ngm:class:file-system",
        "label": "File System"
      },
      {
        "@id": "urn:ngm:class:device-drivers",
        "label": "Device Driver"
      },
      {
        "@id": "urn:ngm:class:system-call-interface",
        "label": "System Call Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-machine",
        "label": "Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:containerisation",
        "label": "Containerisation"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      },
      {
        "@id": "urn:ngm:class:cpu",
        "label": "CPU"
      },
      {
        "@id": "urn:ngm:class:memory",
        "label": "Memory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:posix",
        "label": "POSIX"
      },
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:virtualisation",
        "label": "Virtualisation"
      },
      {
        "@id": "urn:ngm:class:hypervisor",
        "label": "Hypervisor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multithreading",
        "label": "Multithreading"
      },
      {
        "@id": "urn:ngm:class:inter-process-communication",
        "label": "Inter-Process Communication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:resource-management",
        "label": "Resource Management"
      },
      {
        "@id": "urn:ngm:class:firmware",
        "label": "Firmware"
      },
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Middleware"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:operating-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2fcf3b0adb44e313b5568b2064d35088581137c792604ec7f1fd5af17556207b"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - An Operating System (OS) is system software that manages a computer's [[Hardware]] resources and provides a stable, abstract interface for [[Application Software]]. It arbitrates access to the [[CPU]], [[Memory]], storage, and peripheral devices through a privileged [[Kernel]] layer, while exposing controlled services to user processes via a [[System Call Interface]]. Specialised forms include [[Real-Time Operating System]] variants for deterministic embedded control, hypervisor-based OSes supporting [[Virtualisation]], and spatial-runtime stacks required by [[Spatial Computing]] platforms. The OS is the foundational substrate upon which all higher-level software — from [[Middleware]] to [[Containerisation]] environments — depends.

- ### Overview
  - The operating system sits between raw [[Hardware]] and the applications that users and developers interact with directly.
  - Its central function is resource multiplexing: multiple competing programs share the same [[CPU]], [[Memory]], [[File System]], and network interfaces without interfering with each other.
  - By abstracting physical hardware behind stable APIs — most prominently [[POSIX]] on Unix-like systems — the OS allows application code to remain portable across different processor architectures and device configurations.
  - Security boundaries enforced by the OS (privilege rings, address-space isolation, capability-based access control) are the primary line of defence against malicious or buggy software.
  - Modern OSes also serve as the runtime foundation for [[Cloud Computing]] infrastructure: hypervisors such as Xen and KVM allow a single physical machine to host many independent [[Virtual Machine]] instances, each running its own OS image.
  - In constrained environments — [[Embedded Systems]], [[Robotics]], industrial controllers — a lightweight [[Real-Time Operating System]] replaces the general-purpose OS, providing deterministic scheduling with bounded interrupt latency.

- ### Key Components
  - #### Kernel
    - The [[Kernel]] is the privileged core that runs in supervisor mode and has direct hardware access.
    - Monolithic kernels (Linux, macOS XNU) run all core services in a single address space; microkernels (seL4, QNX) restrict the kernel to minimal primitives and run services in user space.
    - Hybrid kernels (Windows NT) combine elements of both architectures.
  - #### Process Scheduler
    - The [[Process Scheduler]] decides which [[Multithreading]] threads run on which CPU cores at any instant.
    - Scheduling algorithms include Completely Fair Scheduler (CFS, Linux), O(1) scheduler variants, and rate-monotonic scheduling for real-time workloads.
    - [[Real-Time Operating System]] schedulers guarantee bounded response times, critical for [[Robotics]] and avionics control loops.
  - #### Memory Management
    - The [[Memory Management Unit]] (hardware) and OS memory manager cooperate to provide each process with its own virtual address space.
    - Paging and segmentation isolate processes; demand paging swaps pages to disk transparently.
    - [[Security Isolation]] between processes is enforced at this layer, preventing one process from reading another's memory.
  - #### File System
    - The [[File System]] abstracts storage hardware (SSD, HDD, NVMe) into a hierarchical namespace of files and directories.
    - Common file systems include ext4 and Btrfs (Linux), APFS (macOS), NTFS (Windows), and ZFS (cross-platform).
    - Distributed file systems (NFS, CIFS/SMB) extend the abstraction across [[Network Stack]] boundaries.
  - #### Device Drivers
    - [[Device Driver]] modules mediate between the OS kernel and specific hardware peripherals.
    - The driver model (e.g., Linux kernel modules, Windows WDM) allows new hardware to be added without recompiling the entire OS.
    - In [[Spatial Computing]] platforms, specialised XR drivers coordinate [[GPU]] pipelines, IMU sensors, and depth cameras with strict latency budgets.
  - #### Network Stack
    - The [[Network Stack]] implements protocol layers (TCP/IP, UDP, QUIC) and exposes socket APIs to user-space applications.
    - Kernel bypass technologies (DPDK, io_uring) allow high-performance [[Distributed Systems]] applications to reduce network latency by avoiding repeated user/kernel context switches.
  - #### Inter-Process Communication
    - [[Inter-Process Communication]] (IPC) mechanisms — pipes, shared memory, message queues, sockets, D-Bus — allow cooperating processes to exchange data safely.
    - Modern microservice architectures running inside [[Containerisation]] environments use IPC extensively via Unix domain sockets and loopback networking.

- ### Applications and Use Cases
  - #### General-Purpose Desktop and Server
    - Linux, macOS, and Windows provide the OS substrate for billions of personal computers, servers, and data-centre nodes.
    - Server Linux distributions underpin virtually all [[Cloud Computing]] infrastructure, container orchestration ([[Kubernetes]]), and CI/CD pipelines.
  - #### Mobile
    - Android (Linux-based kernel) and iOS (XNU kernel) are mobile-specific OS variants tuned for power efficiency, touch input, and application sandboxing.
    - Mobile OSes enforce strict per-application [[Security Isolation]] via mandatory access control (SELinux on Android, sandbox profiles on iOS).
  - #### Embedded and Real-Time
    - [[Real-Time Operating System]] platforms — FreeRTOS, Zephyr, VxWorks, QNX — run on microcontrollers in automotive ECUs, medical devices, and factory automation.
    - Deterministic scheduling and minimal footprint are defining constraints; the OS may fit in tens of kilobytes of flash.
    - [[Embedded Systems]] without any OS (bare-metal programming) are still common for the simplest sensor nodes.
  - #### Robotics
    - The [[Robot Operating System]] (ROS / ROS2) is a middleware framework layered atop Linux that provides pub/sub messaging, hardware abstraction, and tool chains for [[Robotics]] development.
    - ROS2 uses DDS (Data Distribution Service) for real-time inter-node communication, addressing latency requirements that general Linux scheduling cannot guarantee alone.
  - #### Virtualisation and Cloud
    - [[Hypervisor]] software (KVM, VMware ESXi, Microsoft Hyper-V) partitions physical servers into multiple [[Virtual Machine]] instances, each running its own OS.
    - [[Containerisation]] (Docker, Podman) uses Linux namespaces and cgroups instead of full hardware emulation, sharing a single OS kernel across many isolated workload containers.
    - [[Edge Computing]] deployments run lightweight OS images (Alpine Linux, Flatcar Container Linux) at the network edge to reduce latency for IoT workloads.
  - #### Spatial Computing and XR
    - [[Spatial Computing]] platforms (Apple Vision Pro, Meta Quest, HoloLens) run proprietary or customised OSes that manage head-tracking at 1000 Hz, eye-tracking pipelines, and stereoscopic display refresh in synchrony.
    - [[OpenXR]] standardises the runtime API layer that sits atop the OS and abstracts XR hardware differences for cross-vendor application development.
    - Low-latency GPU access and sensor fusion pipelines require OS-level scheduling priorities not available in standard desktop Linux or Windows without modification.

- ### Relationships
  - hasPart:: [[Kernel]]
  - hasPart:: [[Process Scheduler]]
  - hasPart:: [[Memory Management Unit]]
  - hasPart:: [[File System]]
  - hasPart:: [[Device Driver]]
  - hasPart:: [[Network Stack]]
  - hasPart:: [[System Call Interface]]
  - enables:: [[Virtual Machine]]
  - enables:: [[Containerisation]]
  - enables:: [[Embedded Systems]]
  - enables:: [[Edge Computing]]
  - enables:: [[Cloud Computing]]
  - requires:: [[Hardware]]
  - requires:: [[CPU]]
  - requires:: [[Memory]]
  - implements:: [[POSIX]]
  - implements:: [[OpenXR]]
  - uses:: [[Virtualisation]]
  - uses:: [[Hypervisor]]
  - supports:: [[Multithreading]]
  - supports:: [[Inter-Process Communication]]
  - supports:: [[Security Isolation]]
  - contrastsWith:: [[Real-Time Operating System]]
  - contrastsWith:: [[Bare Metal]]
  - relatedTo:: [[Resource Management]]
  - relatedTo:: [[Firmware]]
  - relatedTo:: [[Middleware]]
  - bridges-to:: [[Robot Operating System]]
  - bridges-to:: [[Spatial Computing]]

- ### Standards and Context
  - **POSIX** (IEEE 1003): the portable operating system interface standard that defines the API contract for Unix-like systems, enabling software portability across Linux, macOS, and other compliant OSes.
  - **OpenXR** (Khronos Group): runtime API standard for XR runtimes, abstracting over OS- and vendor-specific display and tracking implementations.
  - **AUTOSAR** and **OSEK**: automotive OS standards used in vehicle ECU firmware, defining scheduling, memory protection, and communication services for safety-critical embedded systems.
  - **Linux Standard Base (LSB)**: a joint project to standardise the internal structure of Linux distributions, reducing fragmentation across distributions.
  - **Common Criteria (ISO/IEC 15408)**: security evaluation standard under which high-assurance OSes (SELinux, seL4) are certified for use in government and defence environments.
  - **Real-Time Linux (PREEMPT_RT)**: a patch set incorporated into mainline Linux that adds fully preemptible kernel paths, bringing Linux closer to RTOS latency characteristics for industrial and robotics use cases.
  - **OCI (Open Container Initiative)**: defines container image and runtime specifications that standardise how OS-level container isolation is implemented across different [[Containerisation]] engines.

- ### Provenance
  - sources:: IEEE POSIX specifications; Linux Kernel documentation; Tanenbaum, A. S. — Modern Operating Systems; Silberschatz, Galvin, Gagne — Operating System Concepts; Khronos OpenXR specification; ROS2 Design documentation
  - updated:: 2026-06-13
