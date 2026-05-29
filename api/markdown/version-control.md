- ### Definition
  - Version control is a system for tracking, managing, and auditing changes to files—principally source code—over time, enabling multiple contributors to work in parallel branches and merge changes systematically. Distributed version control systems such as Git maintain a full change history locally on each node, enabling offline operation, branching, rebasing, and cryptographically signed commits. Version control is a prerequisite for reproducible AI training pipelines, dataset lineage tracking, collaborative 3D asset workflows, and Infrastructure-as-Code practices.

- ### Semantic Classification
  - owl-class:: version-control:Version Control
  - owl-role:: Concept

- ### Relationships
  - enables [[Collaboration]]
  - enables [[Code Generation]]
  - supports [[AI-Augmented Software Engineering]]
  - relatedTo [[Data Provenance]]
  - relatedTo [[Knowledge Management]]

- ### Content
  Version control systems (VCS) maintain a directed acyclic graph (DAG) of immutable change snapshots called commits, each identified by a cryptographic hash of its content and parent references. This structure makes it possible to reconstruct the exact state of a codebase at any past point, compare arbitrary revisions, and trace the origin of any line of code to its introducing commit and author.

  Distributed VCS implementations—most prominently Git—extend this model by allowing every contributor to hold a complete copy of the history, communicate changes through push and pull operations, and resolve divergent histories through merge or rebase operations. Git's branch model enables parallel development streams that can be integrated through pull request workflows, supporting code review, automated continuous integration checks, and staged deployment practices.

  Beyond source code, version control principles are increasingly applied to machine learning artefacts: dataset versioning tools such as DVC (Data Version Control) extend Git semantics to large binary assets stored in object storage, enabling reproducible model training experiments. In 3D content pipelines, version control for assets enables teams to track changes to scene files, shaders, and geometry without losing intermediate states. The provenance properties of version control—who changed what, when, and why—directly support compliance, audit, and data lineage requirements in regulated domains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z