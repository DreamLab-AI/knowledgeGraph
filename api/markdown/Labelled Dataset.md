A labelled dataset is a collection of data examples each paired with one or more target annotations that specify the correct output for a learning task. The labels constitute the supervisory signal that allows a model to learn the mapping from inputs to outputs during training. Label quality, coverage and balance strongly determine the performance and fairness of the resulting model.

### Overview

- Supervised models learn by example, so the existence and quality of labels is foundational.
- Labelling may be manual, crowdsourced, weakly supervised or programmatically generated.
- Annotation guidelines, inter-annotator agreement and adjudication govern label consistency.
- Class imbalance, label noise and annotation bias propagate directly into model behaviour.

### Key aspects

- Ground-truth labels define the correct output the model is trained to predict.
- Splits into training, validation and test partitions prevent leakage and support evaluation.
- Annotation schemas standardise the meaning and granularity of labels.
- Quality control measures agreement and detects noisy or erroneous labels.

### Applications

- Image classification and object detection from annotated images.
- Text classification, named-entity recognition and sentiment labelling.
- Speech transcription and acoustic model training.
- Industrial inspection where defects are labelled for [[Classification]].

### Provenance

