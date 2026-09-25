A pre-trained model is a machine-learning model whose parameters have already been learned on a large, often general-purpose dataset, so that it can be reused as a starting point for downstream tasks. Rather than training from random initialisation, practitioners adapt the pre-trained weights through fine-tuning or use the model directly for inference, transferring learned representations to new problems. Pre-trained models underpin transfer learning and are the practical foundation of modern deep learning across language, vision and multimodal tasks.

### Overview

- Pre-training amortises the heavy cost of learning general representations once, on a broad corpus, so that many downstream tasks can benefit without training from scratch.
- Downstream use takes two main forms: fine-tuning, where the pre-trained weights are further adjusted on task-specific data, and feature extraction or direct prompting, where the model is used as-is.
- This paradigm dramatically lowers the data and compute required for new applications and is the reason a small team can build capable systems by adapting an existing model rather than training a large network independently.

### Key aspects

- Parameters are initialised from large-scale training rather than random values.
- Learned representations capture transferable structure such as language syntax or visual features.
- Self-supervised objectives let pre-training proceed on unlabelled data at scale.
- Adaptation strategies range from full fine-tuning to lightweight parameter-efficient methods and prompting.

### Applications

- Adapting language models to classification, extraction and generation tasks.
- Reusing vision backbones for detection, segmentation and retrieval.
- Few-shot and zero-shot inference where labelled data is scarce.
- Producing embeddings for search, clustering and recommendation.

### Provenance

