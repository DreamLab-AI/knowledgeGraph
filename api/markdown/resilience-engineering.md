- ### Definition
  - [[Resilience Engineering]] is defined in relation to [[Reliability Engineering]], [[Fault Tolerance]], [[Observability]], [[Chaos Engineering]], building on [[Reliability Engineering]].
  - Resilience engineering is the discipline concerned with how complex socio-technical systems sustain required operation under expected and unexpected disturbances, and how they adapt, degrade gracefully, and recover. Rather than treating failure solely as a deviation to be eliminated, it studies the adaptive capacities that let systems anticipate, monitor, respond to, and learn from disruption. In computing it informs architectures and operational practices that bend rather than break under load spikes, partial outages, and cascading faults.

- ### Overview
  - Resilience engineering emerged from safety science studying how high-risk industries — aviation, healthcare, power grids — maintain operation despite ever-present hazards. Its central insight is that safety and reliability are produced by ongoing adaptive work, not by the mere absence of failure, and that the same adaptive capacity occasionally produces the conditions for breakdown.
  - Applied to software and infrastructure, resilience engineering reframes the goal from preventing every fault to preserving essential service while absorbing, isolating, and recovering from inevitable faults. It draws on redundancy, graceful degradation, bulkheading, circuit breaking, and rapid feedback through observability.

- ### Key aspects
  - Four cornerstones: anticipating future threats, monitoring current conditions, responding to disturbances, and learning from past events.
  - Graceful degradation and load shedding so that partial capacity is preserved when full capacity cannot be.
  - Isolation patterns — bulkheads and circuit breakers — to stop local faults cascading across a distributed system.

- ### Applications
  - Designing cloud-native services that survive zone or region loss without total outage.
  - Operational practices such as game days, blameless post-incident review, and on-call learning loops.
  - Critical infrastructure where continuity of service under stress is a regulatory or safety requirement.

- ### Relationships
  - subClassOf:: [[Reliability Engineering]]
  - partOf:: [[Reliability Engineering]]
  - hasPart:: [[Fault Tolerance]]
  - hasPart:: [[Redundancy]]
  - hasPart:: [[Disaster Recovery]]
  - enables:: [[High Availability]]
  - enables:: [[Fault Tolerance]]
  - requires:: [[Observability]]
  - requires:: [[Incident Response]]
  - uses:: [[Chaos Engineering]]
  - uses:: [[Redundancy]]
  - dependsOn:: [[Observability]]
  - dependsOn:: [[Monitoring]]
  - supports:: [[Distributed Systems]]
  - supports:: [[Site Reliability Engineering]]
  - bridgesTo:: [[Disaster Recovery]]
  - bridgesTo:: [[Complex Systems]]
  - contrastsWith:: [[Fault Tolerance]]
  - relatedTo:: [[Chaos Engineering]]
  - relatedTo:: [[High Availability]]
  - relatedTo:: [[Complex Systems]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation