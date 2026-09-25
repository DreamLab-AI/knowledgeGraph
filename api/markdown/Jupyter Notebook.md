An open-source interactive computing document format and execution environment that combines live code cells, rich text narrative, mathematical equations, visualisations, and widgets in a single shareable document. Jupyter Notebooks execute code through kernels (most commonly IPython for Python), enabling iterative, exploratory data analysis with immediate output inline. The format is widely adopted across data science, machine learning research, and scientific computing communities as a primary medium for reproducible research and educational content.

### Overview

- Originating as IPython Notebook in 2011 and rebranded to Jupyter in 2014, the platform introduced a browser-based interface for literate programming that transformed how data scientists and researchers iterate on analyses.
- The notebook JSON format (`.ipynb`) stores cell code, outputs, and metadata together, enabling full reproduction of results by anyone with the same kernel and data.
- JupyterHub enables multi-user deployments on shared infrastructure, while JupyterLab extends the interface with tabbed editors, file browsers, and terminal access.
- Integration with cloud platforms (Google Colab, Amazon SageMaker, Databricks) has made GPU-backed notebook execution accessible without local infrastructure.

### Key Aspects

- **Cell types** — code cells execute in the kernel; markdown cells render text; raw cells pass content through unchanged.
- **Kernel protocol** — ZeroMQ-based messaging between the notebook frontend and language kernels supports Python, R, Julia, and many others.
- **Output persistence** — cell outputs including plots and tables are stored in the notebook file, enabling offline review without re-execution.
- **Reproducibility challenges** — hidden state from out-of-order cell execution and pinned dependency versions are common sources of reproducibility failures.

### Applications

- Interactive [[Machine Learning Experimentation]] with inline loss curves and evaluation metrics.
- Data cleaning and feature engineering with immediate visual feedback on transformations.
- Teaching computational courses with narrative explanations surrounding executable examples.
- Publishing scientific papers as executable notebooks alongside traditional PDF formats.

### Provenance

