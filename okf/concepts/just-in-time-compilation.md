---
okf_version: "0.2"
type: Class
title: Just-In-Time Compilation
resource: urn:ngm:class:just-in-time-compilation
domain: infrastructure
description: Just-in-time (JIT) compilation translates code, such as bytecode, an intermediate representation, or a traced computation graph, into native machine code at run time rather than fully ahead of time, allowing the compiler to specialise on the shapes, types and hot paths actually observed during execution. It trades a warm-up compilation cost for the performance of native code plus dynamic optimisat
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:compiler
uses:
  - urn:ngm:class:compiler
---

# Just-In-Time Compilation

Just-in-time (JIT) compilation translates code, such as bytecode, an intermediate representation, or a traced computation graph, into native machine code at run time rather than fully ahead of time, allowing the compiler to specialise on the shapes, types and hot paths actually observed during execution. It trades a warm-up compilation cost for the performance of native code plus dynamic optimisation opportunities unavailable to static ahead-of-time compilers. It is used both in general-purpose language runtimes and in machine learning frameworks such as JAX to accelerate numerical computation graphs.
