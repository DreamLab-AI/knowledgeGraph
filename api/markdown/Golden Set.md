
A small, carefully curated and human-verified collection of input-output examples that serves as the authoritative reference against which a model, prompt, agent, or pipeline is repeatedly evaluated. Each item pairs a representative input with an expected or ideal output, and the set is deliberately kept stable across versions so that regression can be measured, quality can be tracked over time, and changes can be accepted or rejected on the basis of a consistent benchmark rather than anecdote.

- ### In Plain Terms
  - A golden set is a hand-picked list of test cases with known-good answers that you check your system against every time you change it, so you can tell whether it got better or worse.

- ### Semantic Classification

- ### Content

  ## Definition

  A **golden set** — sometimes called a golden dataset, gold standard, or reference set — is the trusted yardstick of an evaluation programme. It is intentionally small so that it can be reviewed and maintained by hand, and intentionally stable so that a score computed today is comparable with a score computed months ago. Each entry captures an input the system will realistically encounter alongside the [[GroundTruth]] output that a knowledgeable human has judged correct or ideal. Because the labels are human-verified, the set carries more authority than automatically harvested data and is treated as the source of truth when automatic metrics and intuition disagree.

  Golden sets are the data backbone of an [[EvaluationHarness]]. The harness runs the system under test over every item, compares the produced output against the golden output using metrics appropriate to the task — exact match, semantic similarity, rubric-scored grading, or an LLM-as-judge — and reports aggregate scores plus per-item diffs. Holding the set fixed while the system changes is what makes regression detectable: a drop on a previously passing item is an unambiguous signal that a change caused harm.

  ## Curation and Maintenance

  Building a good golden set is a curation exercise, not a scraping one. Items are chosen for coverage and difficulty: common cases that must never break, edge cases that have caused incidents, and adversarial cases that probe known weaknesses. Diversity matters more than volume, because a hundred well-chosen, distinct examples discriminate between system versions far better than ten thousand near-duplicates. Every item should have a clear, documented rationale for its expected output so that disputes about grading can be resolved.

  Maintenance is ongoing. As the product encounters new failure modes in production, representative examples are promoted into the golden set; as items become stale or ambiguous they are retired. The set must be guarded against leakage into training data, since a golden item that the model has memorised no longer measures generalisation. Versioning the set, and recording which system version was scored against which set version, keeps the evaluation auditable.

  ## Role in Agent Systems

  In agent orchestration a golden set anchors [[Benchmarking]] and continuous [[LLMEvaluation]] across the many moving parts of a pipeline: prompt revisions, model swaps, tool changes, and routing logic can each be validated against the same fixed reference before they are shipped. This turns subjective "it feels better" judgements into measured deltas, and gives release gates an objective threshold to enforce.

