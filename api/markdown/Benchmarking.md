
Benchmarking is the disciplined practice of measuring the performance, accuracy, efficiency, or quality of a system, component, or model against a standardised workload and a set of comparable baselines. It produces reproducible quantitative metrics — such as latency, throughput, resource utilisation, or task accuracy — that allow engineers to compare alternatives, detect regressions, and guide optimisation. Robust benchmarking requires controlled environments, representative workloads, statistically sound measurement, and transparent reporting to avoid misleading or non-generalisable results.

- ### Overview
  - The purpose of benchmarking is to convert subjective claims about "fast" or "good" into objective, comparable evidence. A benchmark consists of a defined workload, a measurement methodology, and a reporting format. The combination allows two systems to be compared on a like-for-like basis, or a single system to be tracked over time to detect regressions and improvements.
  - Benchmarks span many domains: microbenchmarks isolate a single operation; macrobenchmarks exercise an entire application under realistic load; and standardised industry suites (such as SPEC, TPC, or MLPerf) provide community-agreed workloads that enable cross-vendor comparison.
  - Sound benchmarking is harder than it appears. Common pitfalls include unrepresentative workloads, warm-up and caching effects, measurement noise, and "benchmarketing" — selecting or tuning a benchmark to flatter a particular system. Statistical rigour, transparent methodology, and reproducibility are the antidotes.

- ### Key aspects
  - **Representative workloads** — A benchmark is only as useful as the degree to which its workload mirrors real usage. Synthetic workloads are easy to control but may miss real-world bottlenecks; trace-driven and production-derived workloads improve fidelity.
  - **Metrics and dimensions** — Common metrics include [[Latency]] (response time), throughput (operations per unit time), tail latency (p95/p99), resource utilisation, and task-specific accuracy. The right metric depends on the user-facing goal.
  - **Baselines and comparison** — Benchmarking is comparative by nature. A measured value is meaningful only against a baseline: a prior version, a competing system, or a theoretical limit such as available [[Bandwidth]].
  - **Controlled environment** — Reproducibility requires controlling for hardware, software versions, thermal state, background load, and caching. Containerisation and dedicated benchmark hosts reduce variance.
  - **Statistical soundness** — Single measurements are unreliable. Repeated trials, confidence intervals, and outlier handling distinguish genuine differences from noise.
  - **Regression detection** — Integrating benchmarks into [[Continuous Integration]] pipelines catches performance regressions before they reach production, treating performance as a first-class quality attribute.

- ### Applications
  - **Software performance engineering** — Profiling and benchmarking guide [[Performance Optimization]] by identifying hot paths and quantifying the impact of changes.
  - **Machine learning evaluation** — Standardised benchmarks measure model [[Classification]] accuracy and training throughput, enabling fair comparison of architectures and hardware.
  - **Hardware and HPC** — Vendors and operators of [[High Performance Computing]] clusters use benchmarks to validate procurement decisions and tune system configuration.
  - **Continuous delivery** — Performance gates in [[Continuous Integration]] block deployments that regress critical metrics.
  - **Capacity planning** — Benchmarks inform how a system scales with load, supporting infrastructure sizing and cost modelling.

- ### Provenance

