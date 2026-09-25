MLflow is an open-source platform for managing the machine learning lifecycle, covering experiment tracking, reproducible runs, model packaging, and a model registry. It records parameters, metrics, code versions, and artefacts including checkpoints, enabling teams to compare experiments and promote models to production. It is framework-agnostic and integrates with most training libraries and serving backends.

### Content

- The tracking server logs each run's hyperparameters, metrics, and artefacts, while the model registry adds stage transitions, annotations, and lineage. Being framework-agnostic, it wraps PyTorch, TensorFlow, scikit-learn, and custom flavours behind a common API for storage and serving.

