- ### Definition
  - NumPy is the array-programming foundation of the Python numerical stack. Built on [[Scientific Computing]] principles, it introduces the typed, contiguous [[N-Dimensional Array]] and a vectorised computation model that replaces slow Python loops with compiled kernels. It supplies the in-memory data structure that [[Pandas]], [[SciPy]], and [[Scikit-Learn]] depend on, and interoperates with [[Linear Algebra]] backends such as [[BLAS]] and [[LAPACK]].

- ### Overview
  - NumPy originated from the merger of the earlier Numeric and Numarray projects, consolidated by Travis Oliphant in 2006 into a single, definitive array library. Its core abstraction, the ndarray, stores homogeneous data in a flat buffer described by a shape, strides, and a single dtype.
  - Because the buffer is contiguous and typed, NumPy can dispatch arithmetic to optimised C loops, vectorised CPU instructions ([[SIMD]]), and threaded linear algebra libraries, achieving performance orders of magnitude beyond pure Python.
  - Broadcasting rules let arrays of differing but compatible shapes participate in element-wise operations without explicit replication, producing concise, memory-efficient expressions.
  - NumPy defines the de facto array interface and protocol that the wider ecosystem implements, making it the lingua franca for numerical interchange between libraries.

- ### Key aspects
  - #### N-Dimensional Array
    - The ndarray packs homogeneous elements in a strided buffer, enabling zero-copy reshaping, slicing, and transposition. Links to: [[N-Dimensional Array]], [[Tensor]].
  - #### Broadcasting
    - A set of rules for aligning array shapes so smaller arrays expand virtually across larger ones during element-wise operations. Links to: [[Broadcasting]], [[Vectorisation]].
  - #### Vectorisation
    - Expressing computation as whole-array operations rather than explicit Python loops, delegating iteration to compiled kernels. Links to: [[Vectorisation]], [[SIMD]].
  - #### Linear Algebra Backend
    - Matrix multiplication, decompositions, and solvers route through [[BLAS]] and [[LAPACK]] for hardware-tuned performance. Links to: [[Linear Algebra]].

- ### Applications
  - Data preprocessing and feature engineering for [[Machine Learning]] pipelines, where arrays feed [[Scikit-Learn]] estimators.
  - Numerical simulation, signal processing, and optimisation through [[SciPy]] built atop NumPy arrays.
  - Image and tensor manipulation in [[OpenCV]] and the deep learning frameworks, which expose NumPy-compatible array interfaces.
  - Exploratory data analysis and tabular computation via [[Pandas]], whose columns are NumPy arrays.

- ### Relationships
  - partOf:: [[Scientific Computing]]
  - partOf:: [[Python Ecosystem]]
  - hasPart:: [[N-Dimensional Array]]
  - hasPart:: [[Broadcasting]]
  - hasPart:: [[Vectorisation]]
  - uses:: [[BLAS]]
  - uses:: [[LAPACK]]
  - uses:: [[SIMD]]
  - enables:: [[Pandas]]
  - enables:: [[SciPy]]
  - enables:: [[Scikit-Learn]]
  - enables:: [[Matplotlib]]
  - supports:: [[Linear Algebra]]
  - supports:: [[Tensor]]
  - contrastsWith:: [[PyTorch]]
  - contrastsWith:: [[CuPy]]
  - bridges-to:: [[Deep Learning]]
  - bridges-to:: [[Data Science]]
  - relatedTo:: [[Python]]
  - relatedTo:: [[OpenCV]]

- ### Provenance
  - updated:: 2026-06-15