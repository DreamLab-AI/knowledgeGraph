- ### Definition
  - Python is a high-level, dynamically typed, interpreted programming language with a design philosophy emphasising code readability and the minimisation of syntactic ceremony. Its extensive standard library and the PyPI ecosystem of third-party packages—including NumPy, SciPy, Pandas, PyTorch, TensorFlow, and Scikit-learn—make it the dominant language for machine learning research, data science, and scientific computing. Python's combination of interactive development via Jupyter notebooks, a permissive licence, and first-class support in cloud ML platforms has made it the lingua franca of artificial intelligence development.

- ### Semantic Classification
  - owl-class:: python:Python
  - owl-role:: Concept

- ### Relationships
  - enables [[Machine Learning Discipline]]
  - enables [[Deep Learning]]
  - enables [[Machine Learning Pipeline]]
  - uses [[Machine Learning Framework]]
  - relatedTo [[Python PyTorch Deep Learning Stack]]

- ### Content
  - Python was created by Guido van Rossum and first released in 1991. Its Global Interpreter Lock (GIL) limits true multi-threaded CPU parallelism within a single process, but this constraint is largely irrelevant for ML workloads where the compute-intensive operations are delegated to C/C++/CUDA extensions (NumPy, PyTorch, XLA) that release the GIL. CPython, the reference implementation, is complemented by PyPy (a JIT-compiled alternative), MicroPython (for embedded systems), and Cython (a compiled Python superset).
  - The scientific Python stack (SciPy, NumPy, Matplotlib, Pandas) provides array computing, statistical functions, visualisation, and tabular data manipulation in a consistent API. PyTorch and TensorFlow are the dominant deep learning frameworks, both offering Python-first APIs, automatic differentiation, and GPU acceleration via CUDA. The Hugging Face Transformers library has standardised Python-based access to pre-trained language models and provided a training ecosystem around PyTorch and JAX.
  - Python's package management has evolved through setuptools, pip, virtualenv, and conda, with Poetry and uv emerging as modern dependency resolution tools. Type annotation support (PEP 484, PEP 526) and static analysis tools (mypy, Pyright, Ruff) have significantly improved code quality in large Python codebases. Python is the primary scripting language in ROS 2 (via rclpy), robotics simulation (via pybullet and mujoco-py), and knowledge graph tooling (via rdflib, owlready2, and SPARQLWrapper).

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z