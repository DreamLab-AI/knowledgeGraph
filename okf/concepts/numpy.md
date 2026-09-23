---
okf_version: "0.2"
type: Class
title: Numpy
resource: urn:ngm:class:numpy
domain: machine-learning
description: NumPy (Numerical Python) is the foundational library for numerical and scientific computing in Python, providing the N-dimensional array (ndarray) object together with a comprehensive suite of vectorised mathematical, logical, linear algebra, Fourier transform, and random number operations. Its contiguous, typed memory layout and broadcasting semantics enable concise, high-performance array progra
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:scientific-computing
hasPart:
  - urn:ngm:class:ndarray
  - urn:ngm:class:broadcasting
  - urn:ngm:class:vectorisation
  - urn:ngm:class:n-dimensional-array
enables:
  - urn:ngm:class:pandas
  - urn:ngm:class:scipy
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:matplotlib
contrastsWith:
  - urn:ngm:class:py-torch
  - urn:ngm:class:cupy
bridgesTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:data-science
uses:
  - urn:ngm:class:blas
  - urn:ngm:class:lapack
  - urn:ngm:class:simd
supports:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:tensor
partOf:
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:python-ecosystem
relatedTo:
  - urn:ngm:class:python
  - urn:ngm:class:open-cv
---

# Numpy

NumPy (Numerical Python) is the foundational library for numerical and scientific computing in Python, providing the N-dimensional array (ndarray) object together with a comprehensive suite of vectorised mathematical, logical, linear algebra, Fourier transform, and random number operations. Its contiguous, typed memory layout and broadcasting semantics enable concise, high-performance array programming by delegating element-wise loops to compiled C and Fortran routines. NumPy underpins almost the entire Python data and machine learning ecosystem, serving as the in-memory array substrate that libraries such as pandas, SciPy, scikit-learn, and the deep learning frameworks build upon or interoperate with.
