- ### Definition
  - A Kanban-style project planning board within a Logseq knowledge graph that aggregates query-driven progress views across active projects. It uses embedded block queries to surface tasks tagged with progress properties, enabling at-a-glance visibility of TODO, DOING, and DONE states across linked project nodes such as PlayerTwo and ParentsGuideToAI.

- ### Semantic Classification
  - owl-class:: infrastructure:PlanningKanbanCurrentlyBroken
  - owl-role:: Concept

- ### Relationships
  - hasPart: [[Active Research Projects Registry]], [[Player Two]]
  - uses: [[Automated Planning]]
  - relatedTo: [[Multi-Agent Systems]], [[Decentralised Agent Coordination Initiative]]

- ### Content
  - {{renderer :kboard-query, High level Projects View, progress, TODO, DOING, DONE, cover, 260px}}
  - {{query (and [[PlayerTwo]] (property :progress))}}
  - {{query (and [[KnoWhere]] (property :progress))}}
  - {{query (and [[Training Material]] (property :progress))}}
  - {{query (and [[Pete Woodbridge]] (property :progress))}}
  - {{query (and [[ParentsGuideToAI]] (property :progress))}}
  - {{query (and [[NLW education discord]] (property :progress))}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z