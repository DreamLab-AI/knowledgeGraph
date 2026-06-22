- ### Definition
  - `public:: true` is a Logseq property tag marking a knowledge-graph page for external publication. In the NarrativeGoldmine ontology it acts as an access-control classifier: pages bearing this annotation are included in export pipelines targeting the open WebVOWL visualisation and the public-facing OWL2 dataset. It functions analogously to an access-control label within the data-governance layer.

- ### Semantic Classification
  - owl-class:: infrastructure:Public
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Knowledge Graph]], [[Data Governance]]
  - relatedTo:: [[Metadata Standard]], [[Access Control]], [[Linked Data]]

- ### Content
  The `public:: true` property gates page inclusion in NarrativeGoldmine export pipelines. Only pages carrying this tag contribute nodes and edges to the published OWL2 EL++ graph and WebVOWL visualisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z