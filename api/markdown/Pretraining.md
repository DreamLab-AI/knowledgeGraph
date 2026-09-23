
Pretraining is the initial phase of training a model on a large, broad corpus using self-supervised objectives to learn general-purpose representations before any task-specific adaptation. It produces a foundation model whose learned features can be transferred to downstream tasks through fine-tuning or prompting. For language models this typically involves predicting masked or next tokens over vast text collections.

- [[Pretraining]] is the initial large-scale training phase using [[Self-Supervised Learning]] objectives over a broad [[Training Corpus]].
- It learns general representations that [[Transfer Learning]] and [[Fine-Tuning]] later adapt to specific tasks.
- For a [[Large Language Model]] this typically means [[Next Token Prediction]] or masked-token objectives over vast text.
- ### Overview
- Pretraining decouples generic capability acquisition from task specialisation, amortising the cost of learning broadly useful features.
- Self-supervised objectives derive supervision signals from the data itself, avoiding the need for human labels at scale.
- The result is a [[Foundation Model]] that can be reused across many downstream applications.
- This paradigm has become the dominant route to capable language, vision and multimodal models.
- ### Mechanisms
- Causal language modelling predicts the next token from preceding context, while masked language modelling reconstructs hidden tokens.
- Training proceeds over enormous corpora for many compute-hours to absorb statistical structure of the domain.
- [[Representation Learning]] produces dense embeddings that encode syntax, semantics and world knowledge.
- The pretrained weights are then specialised through fine-tuning, instruction tuning or in-context prompting.
- ### Applications
- Building the base of every modern [[Large Language Model]] and many vision systems.
- Providing transferable backbones for classification, retrieval and generation.
- Reducing data and compute requirements for downstream tasks via transfer.
- ### Provenance

