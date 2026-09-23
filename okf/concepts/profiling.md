---
okf_version: "0.2"
type: Class
title: Profiling
resource: urn:ngm:class:profiling
domain: infrastructure
description: Profiling is the measurement of a running program's resource use -- CPU time, memory allocation, I/O and call frequency -- to locate the specific functions or code paths that dominate cost. Profilers sample or instrument execution to produce call graphs and hotspot reports that guide targeted optimisation rather than guesswork. Profiling data feeds compiler optimisation decisions and forms the evi
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:performance-optimization
enables:
  - urn:ngm:class:compiler-optimization
  - urn:ngm:class:performance-benchmarks
partOf:
  - urn:ngm:class:performance-optimization
---

# Profiling

Profiling is the measurement of a running program's resource use -- CPU time, memory allocation, I/O and call frequency -- to locate the specific functions or code paths that dominate cost. Profilers sample or instrument execution to produce call graphs and hotspot reports that guide targeted optimisation rather than guesswork. Profiling data feeds compiler optimisation decisions and forms the evidence base behind performance benchmarks.
