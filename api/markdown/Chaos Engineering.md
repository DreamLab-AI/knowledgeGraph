
Chaos engineering is the discipline of experimenting on a software system by deliberately injecting controlled faults — such as instance termination, network latency, or resource exhaustion — in order to build confidence in the system's ability to withstand turbulent, real-world conditions. Practitioners form a hypothesis about steady-state behaviour, introduce a failure in production or production-like environments, and observe whether the system maintains its service level. Originating with Netflix's Chaos Monkey, the practice surfaces hidden dependencies and weaknesses before they cause outages, complementing observability and resilient design.

- ### Overview
  - Rather than waiting for outages, chaos engineering treats reliability as an empirical property to be tested. An experiment begins by defining the system's normal steady state through measurable indicators, hypothesising that this state persists under a specific failure, then injecting that failure while carefully limiting the blast radius. If steady state is maintained, confidence grows; if it degrades, a weakness has been found before it caused a customer-facing incident.
  - The discipline was popularised by Netflix, whose Chaos Monkey randomly terminated production instances to enforce architectures that tolerate the loss of any single component. The broader Simian Army and later platforms generalised this to latency injection, region failover, and dependency degradation.

- ### Mechanisms
  - Fault injection: terminating instances, throttling I/O, dropping packets, or exhausting CPU and memory.
  - Blast radius control: scoping experiments to limited traffic, regions, or canary cohorts.
  - Automated experimentation with abort conditions tied to observability signals.

- ### Applications
  - Validating auto-scaling, failover, and redundancy in cloud-native systems.
  - Game days and disaster-recovery rehearsals that exercise on-call response.
  - Continuous resilience verification embedded in delivery pipelines.

- ### Provenance

