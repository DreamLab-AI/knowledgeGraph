- ### Definition
  - [[Benchmark Evaluation]] is the measurement of a system against a standardised dataset and scoring protocol to produce comparable results. It is a specialisation of [[Model Evaluation]] that fixes the task, data, and [[Evaluation Metric]] so that different systems can be ranked on equal terms.
- ### Relationships
  - Benchmark evaluation depends on [[Performance Benchmarks]] as its measurement instruments and is operationalised through an [[Evaluation Harness]] that automates dataset loading, prompting, and scoring. The choice of [[Evaluation Metric]] determines what aspect of capability the benchmark actually rewards.
- ### Content
  - Robust benchmark evaluation requires careful control of data contamination, since modern models trained on web-scale corpora may have memorised test items. Held-out, freshly collected, or private test sets mitigate this, as do dynamic benchmarks that refresh their contents.

  - Beyond raw scores, mature evaluation practice reports confidence intervals, per-category breakdowns, and qualitative error analysis. Leaderboard saturation — where top systems cluster near the ceiling — signals that a benchmark has exhausted its discriminative power and motivates the design of harder successor benchmarks.