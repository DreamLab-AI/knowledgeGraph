- ### Definition
  - The Process Layer is the cross-cutting stratum that defines the ordered activities and workflows by which work is carried out. It sits above the Organisational structure that staffs it and supports operational execution. It contains process definitions, workflows, hand-offs, and the rules that sequence activity.

- ### Semantic Classification
  - owl-class:: proc:ProcessLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Business Process Management]], [[Workflow]]
  - requires:: [[Organisational Layer]]
  - enables:: [[Operational Layer]], [[Coordination Layer]]

- ### Content
  - The Process Layer specifies how activities are sequenced, who performs each step, and how work passes between them. Typical members include process and workflow definitions, decision and approval gates, hand-off rules, and the metrics that track flow. It describes how work proceeds rather than who is responsible in the abstract.
  - It requires the Organisational Layer to supply the roles that execute steps, and it enables the Operational Layer, which runs processes, and the Coordination Layer, which aligns multiple processes. Well-defined processes reduce variance and make outcomes repeatable.
  - The layer bridges to business process management and the concept of a workflow, disciplines that model and improve sequenced work. Clarity and measurability here are what allow processes to be optimised over time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z