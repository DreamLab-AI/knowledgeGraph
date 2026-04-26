iri:: http://narrativegoldmine.com/infrastructure#EdgeComputing
uri:: urn:visionclaw:concept:infrastructure:edge-computing
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:edge-computing
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Edge Computing
content-hash:: sha256-12-000000000000
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T14:00:00Z
public:: true

- ### Definition
  - Distributed computing paradigm processing data close to sources of data generation rather than centralised data centres. Reduces latency, bandwidth usage, and dependency on centralised infrastructure by moving computation to network edge nodes.

- ### Semantic Classification
  - owl-class:: infrastructure:EdgeComputing
  - owl-role:: Object
  - belongs-to-domain:: [[Narrative Gold Mine]]

- ### Relationships
  - is-subclass-of:: [[ComputingParadigm]]
  - has-part:: [[Edge Node]], [[Local Processing]], [[Data Aggregation]], [[Synchronisation]], [[Fallback Mechanism]]
  - enables:: [[Reduced Latency]], [[Bandwidth Efficiency]], [[Decentralised Processing]], [[Resilience]]
  - bridges-to:: [[Compute Layer]], [[Network Layer]] (domain: ngm)
  - depends-on:: [[Infrastructure Layer]], [[Network Layer]]

- ### Content
  Edge Computing distributes computational workloads from centralised data centres to edge devices closer to end users and data sources. This approach reduces network latency, decreases bandwidth consumption, and improves resilience to connectivity failures. It is particularly valuable for narrative systems requiring real-time response and where network connectivity is limited or expensive.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
