- ### Definition
  - The Consensus Layer is the stratum responsible for agreement on a single canonical ordering of events across distributed participants. In the canonical stack it sits directly above the Protocol Layer and below the Data Layer, converting peer-to-peer message exchange into a shared, append-only history. It contains the agreement algorithms, fork-choice rules, and finality conditions that all participants follow.

- ### Semantic Classification
  - owl-class:: arch:ConsensusLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Byzantine Fault Tolerance]], [[Proof of Stake]]
  - requires:: [[Protocol Layer]]
  - enables:: [[Data Layer]]

- ### Content
  - The Consensus Layer ensures that independent nodes converge on the same state despite failures, delays, and adversarial behaviour. Typical members include leader election, voting and quorum protocols, fork-choice rules, and finality gadgets. Its guarantees are usually framed in terms of safety, the property that honest nodes never disagree, and liveness, the property that progress continues.
  - It builds on the Protocol Layer, which delivers the messages that consensus reasons over, and supplies the Data Layer above it with an agreed ordering on which durable records depend. Without this layer the strata above could hold divergent histories.
  - The layer bridges to Byzantine fault tolerance and to specific schemes such as proof of stake and proof of work. The chosen mechanism fixes the trust assumptions, throughput, and finality time inherited by every higher layer.

- ### Provenance
  - sources:: [[IETF (Internet Engineering Task Force)]]
  - migration-date:: 2026-05-29T00:00:00Z