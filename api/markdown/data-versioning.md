- ### Definition
  - Version control system for datasets and ML models, tracking changes to data over time to ensure reproducibility and lineage in machine learning workflows (e.g., DVC).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataVersioning
  - owl-role:: Process
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Blockchain]]

- ### Content
  Data Versioning applies the principles of software version control — branching, tagging, diffing, and rollback — to the large binary assets that underpin machine learning: raw datasets, processed feature stores, and trained model artefacts. Unlike source code, data files are rarely stored in Git directly; instead, tools such as DVC maintain a lightweight pointer file tracked in Git while storing the actual data in remote object stores (S3, GCS, Azure Blob). This allows teams to reproduce any historical experiment by checking out a specific commit and pulling the matching dataset version.

  Beyond reproducibility, data versioning enables auditability and regulatory compliance by recording the provenance of every training run — which data slice, which preprocessing script, and which hyperparameters produced a given model checkpoint. In combination with experiment tracking and model registries, data versioning forms a core pillar of mature MLOps practice, closing the loop between data engineering pipelines and model deployment lifecycles.

- ### Provenance
  - sources:: [[MLOps]], [[Data Engineering]], [[DVC]]
  - migration-date:: 2026-04-26T00:00:00Z