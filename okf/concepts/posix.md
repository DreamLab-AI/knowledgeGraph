---
okf_version: "0.2"
type: Class
title: POSIX
resource: urn:ngm:class:posix
domain: infrastructure
description: POSIX (Portable Operating System Interface) is a family of IEEE standards that defines the application programming interface, command-line shells, and utility interfaces for maintaining compatibility between operating systems. By specifying system calls, file-system semantics, process control, and shell behaviour, POSIX allows software written against the standard to be ported across conforming Un
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:standards
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:portability
implements:
  - urn:ngm:class:operating-system
  - urn:ngm:class:file-system
contrastsWith:
  - urn:ngm:class:api-standard
bridgesTo:
  - urn:ngm:class:operating-system
uses:
  - urn:ngm:class:file-system
supports:
  - urn:ngm:class:portability
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:api-standard
partOf:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:interoperability
---

# POSIX

POSIX (Portable Operating System Interface) is a family of IEEE standards that defines the application programming interface, command-line shells, and utility interfaces for maintaining compatibility between operating systems. By specifying system calls, file-system semantics, process control, and shell behaviour, POSIX allows software written against the standard to be ported across conforming Unix-like systems with minimal modification. It is the canonical contract underpinning portable system software.
