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
  - urn:ngm:class:machine-learning-discipline
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
  - urn:ngm:class:python-pytorch-deep-learning-stack
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
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:python-pytorch-deep-learning-stack
---

# Python

Python is a high-level, dynamically typed, interpreted programming language designed by Guido van Rossum with an explicit emphasis on code readability, expressive syntax, and developer productivity. Its reference implementation, CPython, executes code via a bytecode interpreter protected by the Global Interpreter Lock (GIL), whilst third-party runtimes such as PyPy provide JIT compilation for CPU-bound workloads. Python's extensive standard library and the PyPI ecosystem—encompassing NumPy, Pandas, PyTorch, TensorFlow, Scikit-learn, and the Hugging Face stack—have established it as the dominant language for machine learning research, data science, scientific computing, and AI infrastructure automation. Its clean syntax, interactive tooling via Jupyter notebooks, and first-class cloud-platform support have made it the lingua franca of artificial intelligence development globally.
