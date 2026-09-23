
A debug linked node is a diagnostic artefact within a knowledge graph or ontology system — a placeholder page that is deliberately linked to from another node in order to verify that the wikilink resolution, graph edge creation, and link-traversal mechanisms are functioning correctly. It serves as a test fixture for the ontology pipeline, confirming that bidirectional link references are parsed, stored as edges, and retrievable through graph queries.

In automated ontology enrichment workflows, such nodes also serve as regression fixtures: if the pipeline ever fails to create an edge pointing to this node, the failure is immediately detectable through graph-query assertions, making it a lightweight but effective canary for pipeline health.

- ### Semantic Classification

- ### Content
  - This is a node linked to [[Debug Test Page]]

- ### Provenance

