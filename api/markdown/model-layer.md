- ### Definition
  - The Model Layer is the stratum that holds trained machine learning models as deployable artefacts with fixed parameters. In the canonical stack it sits above the Algorithm Layer and below the Inference Layer, packaging learned functions for use. It contains weight sets, model metadata, and the serialised representations that inference engines load.

- ### Semantic Classification
  - owl-class:: ml:ModelLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Machine Learning]], [[Model Registry]]
  - requires:: [[Algorithm Layer]], [[Training Layer]]
  - enables:: [[Inference Layer]]

- ### Content
  - The Model Layer is where a learned function becomes a concrete, versioned artefact. Typical members include parameter tensors, tokenizer and preprocessing configurations, model cards, and registry entries that track lineage and evaluation results. It represents the captured result of learning rather than the process of learning.
  - It requires the Algorithm Layer for the operations the model is built from and the Training Layer that fitted its parameters. It enables the Inference Layer above, which executes the model to produce predictions. The model's measured quality and limits travel with it as metadata.
  - The layer bridges to machine learning and to the concept of a model registry, which governs versioning, approval, and rollback. Reproducibility and provenance recorded here let downstream consumers trust and audit the artefacts they deploy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z