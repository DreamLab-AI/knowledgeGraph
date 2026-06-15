- ### Definition
  - [[Chaos Engineering]] is the [[Site Reliability Engineering]] practice of deliberately injecting controlled failures to validate a system's resilience against a [[Steady-State Hypothesis]]. It depends on [[Observability]], enables [[Fault Tolerance]], and supports robust [[Distributed Systems]].

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

- ### Relationships
  - subClassOf:: [[Site Reliability Engineering]]
  - hasPart:: [[Fault Injection]]
  - hasPart:: [[Steady-State Hypothesis]]
  - partOf:: [[Resilience Engineering]]
  - uses:: [[Chaos Monkey]]
  - dependsOn:: [[Observability]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[High Availability]]
  - supports:: [[Distributed Systems]]
  - bridgesTo:: [[Disaster Recovery]]
  - contrastsWith:: [[Traditional QA Testing]]
  - relatedTo:: [[Reliability]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation