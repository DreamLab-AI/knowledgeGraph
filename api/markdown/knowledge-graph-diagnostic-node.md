- ### Definition
  - A debug linked node is a deliberately minimal ontology page created to exercise and verify the link-resolution and edge-creation subsystems of a knowledge graph pipeline. By linking to this node from a test page, developers can confirm that wikilink parsing, URN resolution, and graph edge persistence all operate correctly end-to-end.

  In automated ontology enrichment workflows, such nodes also serve as regression fixtures: if the pipeline ever fails to create an edge pointing to this node, the failure is immediately detectable through graph-query assertions, making it a lightweight but effective canary for pipeline health.

- ### Semantic Classification
  - owl-class:: infrastructure:DebugLinkedNode
  - owl-role:: Concept

- ### Relationships
  - Used in software testing of knowledge graph construction pipelines; related to the Node concept and linked-data infrastructure.
  - Part of the broader knowledge graph; depends on lognet for link resolution.

- ### Content
  - This is a node linked to [[Debug Test Page]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z