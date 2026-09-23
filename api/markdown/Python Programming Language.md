
Python is a high-level, interpreted, general-purpose programming language emphasising code readability and a clean syntax. It has become the dominant language for machine learning and data science due to its extensive ecosystem of numerical and scientific libraries. Python supports multiple programming paradigms including procedural, object-oriented, and functional styles, and its dynamic typing and interactive REPL accelerate experimentation.

- ### Overview
  - Python was created by Guido van Rossum and first released in 1991, designed around readability and developer productivity.
  - The language gained dominance in scientific computing through libraries such as NumPy, SciPy, and Pandas, which brought [[Numerical Methods]] and [[Linear Algebra]] operations to a high-level scripting interface.
  - The emergence of deep learning frameworks (TensorFlow, PyTorch) cemented Python as the primary language for training and deploying machine learning models.
  - CPython, the reference implementation, is extended through C and Fortran bindings that deliver near-native performance for numerical kernels.

- ### Key Aspects
  - Dynamic typing and duck typing enable rapid prototyping without verbose type declarations.
  - The Global Interpreter Lock (GIL) in CPython constrains true thread-level parallelism for CPU-bound tasks, driving adoption of multiprocessing and async patterns.
  - The PyPI package index hosts over half a million packages spanning domains from [[Data Modelling]] to cryptography.
  - Type hints (PEP 484 onwards) allow optional static analysis without sacrificing runtime flexibility.

- ### Mechanisms
  - Interpreted execution via bytecode compilation to a virtual machine (`.pyc` files), with JIT acceleration available via PyPy.
  - C-extension modules expose low-level numerical kernels (BLAS, LAPACK) for [[Tensor Computation]] and [[Fourier Transform]] operations.
  - Virtual environments (`venv`, `conda`) isolate dependency graphs per project.
  - The `__dunder__` protocol system allows operator overloading and metaclass customisation supporting domain-specific abstractions.

- ### Applications
  - Training and evaluating [[Machine Learning]] models using gradient-based optimisers over [[Tensor]] arrays.
  - Data ingestion, transformation, and validation pipelines underpinning [[Data Modelling]] workflows.
  - Scripting blockchain node interactions and smart contract deployment via Web3.py.
  - Scientific computing for [[Signal Processing]], [[Euclidean Distance]] computations, and simulation.

- ### Provenance

