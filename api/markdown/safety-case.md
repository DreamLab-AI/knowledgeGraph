- ### Definition
  - A safety case is a structured argument, supported by a body of evidence, that justifies the claim that a system is acceptably safe for a defined application in a defined operating environment. It is the primary deliverable of [[Functional Safety]] assurance and integrates the outputs of [[Hazard Analysis]] and [[Risk Assessment]].
  - The argument links top-level safety goals to sub-goals and ultimately to concrete evidence, making the rationale auditable and reviewable.

- ### Overview
  - The safety case answers a deceptively simple question: why should we believe this system is safe enough? It makes the reasoning explicit rather than implicit, so reviewers can challenge claims, inspect evidence, and identify gaps.
  - **Why it matters:** in [[Autonomous Systems]], medical robotics, automotive, rail, and aviation, regulators require a defensible, documented assurance argument before deployment. The safety case provides that argument and is maintained as the system evolves.
  - **How it works:**
    - Safety goals are derived from hazards and the associated risk-reduction targets.
    - Each goal is decomposed into a strategy and supporting sub-goals.
    - Evidence (analyses, test results, field data, process records) is attached to the lowest-level claims.
    - The argument is reviewed, and any defeaters or counter-evidence are addressed before approval.

- ### Key aspects
  - **Claims** — the assertions about safety properties the system must satisfy.
  - **Argument** — the explicit chain of reasoning connecting claims to evidence, often expressed in Goal Structuring Notation (GSN) or Claims-Arguments-Evidence (CAE).
  - **Evidence** — verification and validation results, [[Fault Tree Analysis]], formal analyses, simulation, and operational monitoring data.
  - **Confidence and counter-evidence** — assurance deficits and defeaters must be surfaced and resolved, not hidden.
  - **Lifecycle maintenance** — the safety case is a living document updated as the design, environment, or operational data change.

- ### Applications
  - Automotive systems certified under [[ISO 26262]], including driver-assistance and autonomous driving functions.
  - Personal-care and service robots assured against [[ISO 13482]].
  - Rail, aviation, nuclear, and defence systems where regulators mandate a documented assurance argument.
  - Medical devices and surgical robots requiring [[Regulatory Approval]] before market access.
  - Increasingly, assurance of machine-learning components within safety-critical autonomous platforms.

- ### Relationships
  - subClassOf:: [[Functional Safety]]
  - partOf:: [[Functional Safety]]
  - hasPart:: [[Hazard Analysis]]
  - hasPart:: [[Risk Assessment]]
  - hasPart:: [[Fault Tree Analysis]]
  - requires:: [[Hazard Analysis]]
  - requires:: [[Risk Assessment]]
  - enables:: [[Certification]]
  - enables:: [[Regulatory Approval]]
  - supports:: [[Autonomous Systems]]
  - standardizedBy:: [[ISO 26262]]
  - standardizedBy:: [[ISO 13482]]
  - relatedTo:: [[Safety]]
  - relatedTo:: [[Risk Mitigation]]

- ### Provenance
  - updated:: 2026-06-15