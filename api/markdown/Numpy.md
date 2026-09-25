NumPy (Numerical Python) is the foundational library for numerical and scientific computing in Python, providing the N-dimensional array (ndarray) object together with a comprehensive suite of vectorised mathematical, logical, linear algebra, Fourier transform, and random number operations. Its contiguous, typed memory layout and broadcasting semantics enable concise, high-performance array programming by delegating element-wise loops to compiled C and Fortran routines. NumPy underpins almost the entire Python data and machine learning ecosystem, serving as the in-memory array substrate that libraries such as pandas, SciPy, scikit-learn, and the deep learning frameworks build upon or interoperate with.

### Overview

- NumPy originated from the merger of the earlier Numeric and Numarray projects, consolidated by Travis Oliphant in 2006 into a single, definitive array library. Its core abstraction, the ndarray, stores homogeneous data in a flat buffer described by a shape, strides, and a single dtype.
- Because the buffer is contiguous and typed, NumPy can dispatch arithmetic to optimised C loops, vectorised CPU instructions ([[SIMD]]), and threaded linear algebra libraries, achieving performance orders of magnitude beyond pure Python.
- Broadcasting rules let arrays of differing but compatible shapes participate in element-wise operations without explicit replication, producing concise, memory-efficient expressions.
- NumPy defines the de facto array interface and protocol that the wider ecosystem implements, making it the lingua franca for numerical interchange between libraries.

### Key aspects

#### N-Dimensional Array

- The ndarray packs homogeneous elements in a strided buffer, enabling zero-copy reshaping, slicing, and transposition. Links to: [[N-Dimensional Array]], [[Tensor]].

#### Broadcasting

- A set of rules for aligning array shapes so smaller arrays expand virtually across larger ones during element-wise operations. Links to: [[Broadcasting]], [[Vectorisation]].

#### Vectorisation

- Expressing computation as whole-array operations rather than explicit Python loops, delegating iteration to compiled kernels. Links to: [[Vectorisation]], [[SIMD]].

#### Linear Algebra Backend

- Matrix multiplication, decompositions, and solvers route through [[BLAS]] and [[LAPACK]] for hardware-tuned performance. Links to: [[Linear Algebra]].

### Applications

- Data preprocessing and feature engineering for [[Machine Learning]] pipelines, where arrays feed [[Scikit-Learn]] estimators.
- Numerical simulation, signal processing, and optimisation through [[SciPy]] built atop NumPy arrays.
- Image and tensor manipulation in [[OpenCV]] and the deep learning frameworks, which expose NumPy-compatible array interfaces.
- Exploratory data analysis and tabular computation via [[Pandas]], whose columns are NumPy arrays.

### Provenance

