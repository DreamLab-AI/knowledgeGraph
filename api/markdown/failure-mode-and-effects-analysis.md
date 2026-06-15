- ### Definition
  - Failure Mode and Effects Analysis (FMEA) is a systematic, bottom-up technique for identifying potential failure modes of a system, product, or process, assessing their causes and effects, and prioritising corrective action. Each failure mode is rated for severity, occurrence, and detectability, often combined into a risk priority number that ranks issues for mitigation. FMEA is widely used in safety, reliability, and quality engineering, and is a core analysis within functional-safety lifecycles defined by standards such as IEC 61508 and ISO 26262.
  - Core related concepts: [[Reliability Engineering]], [[Hazard Analysis]], [[Fault Tree Analysis]], [[Risk Assessment]], [[Safety Lifecycle]].

- ### Overview
  - FMEA works from individual components and process steps upward, asking how each could fail, why, and what would happen. By scoring severity, likelihood, and detectability, it converts qualitative engineering judgement into a prioritised list of risks that focuses mitigation effort where it matters most. It complements top-down methods such as fault-tree analysis, which start from an undesired top event and work down to contributing causes.

- ### Mechanisms
  - Failure-mode identification: each function, component, or process step is examined for the ways it can fail.
  - Cause and effect analysis: for every failure mode the underlying causes and downstream consequences are documented.
  - Risk rating: severity, occurrence, and detectability are scored and combined into a risk priority number for ranking.
  - Action and re-evaluation: mitigations are assigned, implemented, and the analysis is updated to confirm reduced risk.

- ### Applications
  - Design FMEA for products and components in automotive and aerospace.
  - Process FMEA for manufacturing and assembly operations.
  - Functional-safety analysis feeding safety-lifecycle activities under IEC 61508 and ISO 26262.
  - Maintenance and reliability programmes prioritising preventive action.

- ### Relationships
  - subClassOf:: [[Reliability Engineering]]
  - partOf:: [[Reliability Engineering]]
  - hasPart:: [[Risk Assessment]]
  - dependsOn:: [[Hazard Analysis]]
  - dependsOn:: [[Reliability Engineering]]
  - uses:: [[Risk Assessment]]
  - supports:: [[Safety Lifecycle]]
  - supports:: [[Functional Safety]]
  - supports:: [[Safety Integrity Level]]
  - enables:: [[Reliability Engineering]]
  - contrastsWith:: [[Fault Tree Analysis]]
  - standardizedBy:: [[IEC 61508]]
  - standardizedBy:: [[ISO 26262]]
  - relatedTo:: [[HAZOP]]
  - relatedTo:: [[Safety Instrumented System]]
  - relatedTo:: [[Functional Safety]]
  - sameAs:: [[FMEA]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15