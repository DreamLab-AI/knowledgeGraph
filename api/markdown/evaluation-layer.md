- ### Definition
  - The Evaluation Layer is the cross-cutting stratum that measures the quality, safety, and performance of system components against defined criteria. It sits alongside training and inference, drawing on their outputs to produce judgements that feed governance and research strata. It contains benchmarks, metrics, test harnesses, and the scoring procedures that quantify behaviour.

- ### Semantic Classification
  - owl-class:: eval:EvaluationLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Benchmark]], [[Statistical Significance]]
  - requires:: [[Model Layer]], [[Inference Layer]]
  - enables:: [[Research Layer]], [[Governance Layer]]

- ### Content
  - The Evaluation Layer turns observed behaviour into comparable measurements against explicit standards. Typical members include benchmark suites, metric definitions, held-out test sets, human-rating protocols, and statistical analyses that establish confidence in results. Its purpose is to judge rather than to produce.
  - It requires the Model and Inference Layers to supply the artefacts and outputs under test. It enables the Research Layer, which uses results to direct enquiry, and the Governance Layer, which relies on evidence to authorise deployment. Honest measurement here protects every decision built on it.
  - The layer bridges to the concepts of benchmarking and statistical significance, which guard against misleading conclusions. Reproducibility and the validity of chosen metrics determine whether the layer's verdicts can be trusted.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z