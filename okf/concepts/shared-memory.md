---
okf_version: "0.2"
type: Class
title: Shared Memory
resource: urn:ngm:class:shared-memory
domain: infrastructure
description: Shared memory is a memory region that multiple processes or threads can access concurrently, providing a low-latency mechanism for interprocess communication without the overhead of copying data through the kernel. It is exposed by operating systems through APIs such as POSIX shm_open or System V IPC and is heavily used in high-performance computing, GPU programming, and multi-process architecture
maturity: established
quality: 0
is-a:
  - urn:ngm:class:memory-management
---

# Shared Memory

Shared memory is a memory region that multiple processes or threads can access concurrently, providing a low-latency mechanism for interprocess communication without the overhead of copying data through the kernel. It is exposed by operating systems through APIs such as POSIX shm_open or System V IPC and is heavily used in high-performance computing, GPU programming, and multi-process architectures. Because concurrent access requires explicit synchronisation, shared memory is typically paired with locks, semaphores, or atomic operations to avoid race conditions. It trades convenience for correctness risk, making it well-suited to performance-critical paths where the coordination cost is justified.
