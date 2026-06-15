- ### Definition
  - Reproducible research is the practice of conducting and reporting scientific work so that an independent party can obtain the same results from the same data and code. It encompasses sharing datasets, source code, computational environments, and detailed methodology alongside published findings. In machine learning it is the discipline of making experiments verifiable through fixed seeds, versioned artefacts, recorded hyperparameters, and documented hardware, distinguishing genuine effects from artefacts of a particular run.
  - Related concepts: [[Reproducibility]] [[Version Control]] [[Open Science]] [[Peer Review]] [[Open Data]]

- ### Overview
  - Reproducible research responds to a credibility problem in computational science: results that cannot be re-run cannot be trusted or built upon. It treats the full computational pipeline, not just the prose of a paper, as the unit of scientific communication, so that claims can be independently re-executed and audited.

- ### Key aspects
  - Code and data sharing under open licences so the exact analysis can be repeated.
  - Environment capture through containers and dependency manifests that pin every software version.
  - Deterministic execution via fixed random seeds and recorded hardware and hyperparameter settings.
  - Experiment tracking and provenance that link each reported number to the run that produced it.

- ### Applications
  - Verifiable benchmarking and leaderboards in machine learning.
  - Auditable analyses in regulated and high-stakes domains.
  - Cumulative science where later work builds reliably on earlier code and data.

- ### Relationships
  - requires:: [[Version Control]]
  - requires:: [[Data Provenance]]
  - requires:: [[Container]]
  - uses:: [[Jupyter Notebook]]
  - uses:: [[Workflow Orchestration]]
  - uses:: [[Model Comparison]]
  - enables:: [[Peer Review]]
  - enables:: [[Open Science]]
  - implements:: [[Open Science]]
  - supports:: [[Open Data]]
  - supports:: [[Open Source]]
  - depends-on:: [[Reproducibility]]
  - related-to:: [[Scientific Computing]]
  - related-to:: [[Open Source Software]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation