Zero-shot learning is a machine-learning setting in which a model performs a task on classes or instances it has never seen during training, generalising from auxiliary information such as semantic attributes, natural-language descriptions or a shared embedding space. Modern instances exploit large pre-trained language and vision-language models that align inputs and labels in a common representation, enabling prediction by similarity rather than by fitting task-specific examples. It contrasts with few-shot and supervised learning by requiring no labelled examples of the target classes.

### Overview

- Classical zero-shot learning maps inputs and class labels into a shared semantic space defined by human-authored attributes, so an unseen class can be recognised by its attribute signature.
- Embedding-based methods learn a joint space where image or text inputs lie near the representation of their correct label, enabling nearest-label prediction for novel categories.
- Vision-language models trained on large image-text corpora perform open-vocabulary classification by comparing an image embedding to embeddings of arbitrary textual class names.
- Instruction-tuned language models perform zero-shot tasks by following a natural-language prompt without task-specific fine-tuning.

### Key aspects

- Auxiliary semantic information bridges seen and unseen classes.
- A shared embedding space supports similarity-based inference.
- Generalised zero-shot evaluation tests both seen and unseen classes jointly.
- Performance depends on the quality and coverage of the pre-trained representation.

### Applications

- Open-vocabulary image and object classification.
- Cross-lingual and cross-domain text classification and intent detection.
- Rapid prototyping where labelled data for target classes is unavailable.
- Retrieval and tagging over previously unseen concept sets.

### Provenance

