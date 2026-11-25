---
okf_version: "0.2"
type: Class
title: Sandboxed Execution
resource: urn:ngm:class:sandboxed-execution
domain: security
description: Sandboxed execution is the practice of running untrusted or partially trusted code inside an isolated environment with restricted access to the host filesystem, network and system resources. It contains the effects of faulty or malicious code by enforcing resource and permission boundaries at the process, container or virtual-machine level. Sandboxed execution underpins both security-sensitive con
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:sandbox-environment
requires:
  - urn:ngm:class:sandbox-environment
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sandboxed Execution

Sandboxed execution is the practice of running untrusted or partially trusted code inside an isolated environment with restricted access to the host filesystem, network and system resources. It contains the effects of faulty or malicious code by enforcing resource and permission boundaries at the process, container or virtual-machine level. Sandboxed execution underpins both security-sensitive contexts, such as running third-party plugins, and autonomous AI agents that must be prevented from taking unintended actions on a host system.
