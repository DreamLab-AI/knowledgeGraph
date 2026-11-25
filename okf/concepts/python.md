---
okf_version: "0.2"
type: Class
title: Python
resource: urn:ngm:class:python
domain: artificial-intelligence
description: Python is a high-level, dynamically typed, interpreted programming language designed by Guido van Rossum with an explicit emphasis on code readability, expressive syntax, and developer productivity. Its reference implementation, CPython, executes code via a bytecode interpreter protected by the Global Interpreter Lock (GIL), whilst third-party runtimes such as PyPy provide JIT compilation for CPU-
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:programming-language
hasPart:
  - urn:ngm:class:cpython
  - urn:ngm:class:python-standard-library
  - urn:ngm:class:python-package-index
requires:
  - urn:ngm:class:virtual-environment
  - urn:ngm:class:package-manager
enables:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:data-science
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
contrastsWith:
  - urn:ngm:class:r-language
  - urn:ngm:class:julia-language
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:robotics
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:numpy
  - urn:ngm:class:py-torch
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:jupyter-notebook
  - urn:ngm:class:pandas
  - urn:ngm:class:py-torch
supports:
  - urn:ngm:class:rest-api
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:web-framework
relatedTo:
  - urn:ngm:class:py-torch
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:py-torch
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Python

Python is a high-level, dynamically typed, interpreted programming language designed by Guido van Rossum with an explicit emphasis on code readability, expressive syntax, and developer productivity. Its reference implementation, CPython, executes code via a bytecode interpreter protected by the Global Interpreter Lock (GIL), whilst third-party runtimes such as PyPy provide JIT compilation for CPU-bound workloads. Python's extensive standard library and the PyPI ecosystem—encompassing NumPy, Pandas, PyTorch, TensorFlow, Scikit-learn, and the Hugging Face stack—have established it as the dominant language for machine learning research, data science, scientific computing, and AI infrastructure automation. Its clean syntax, interactive tooling via Jupyter notebooks, and first-class cloud-platform support have made it the lingua franca of artificial intelligence development globally.
