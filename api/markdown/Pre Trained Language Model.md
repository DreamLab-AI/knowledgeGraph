
A pre-trained language model is a neural language model that has first been trained on a large, general corpus using self-supervised objectives such as masked or next-token prediction, then reused as a foundation for many downstream tasks. By learning broadly transferable linguistic and world knowledge during pre-training, it can be adapted with comparatively little task-specific data through fine-tuning, prompting, or instruction tuning. This pre-train-then-adapt paradigm, exemplified by BERT and the GPT family, is the foundation of modern natural language processing.

- ### Overview
	- Training a competent language model from scratch for every task is wasteful; the pre-train-then-adapt paradigm separates expensive general learning from cheap task adaptation.
	- During pre-training, the model optimises a self-supervised objective — masked-token prediction (encoder models like BERT) or next-token prediction (decoder models like GPT) — over vast unlabelled text.
	- The resulting parameters encode grammar, facts, and reasoning patterns that transfer across tasks. Adaptation then uses fine-tuning, lightweight parameter-efficient tuning, prompting, or instruction tuning.
	- Scaling model size, data, and compute yields predictable capability gains and, at large scale, emergent few-shot abilities, blurring the line with foundation models.
- ### Key aspects
	- Self-supervised pre-training objectives requiring no human labels.
	- The [[Transformer]] architecture providing scalable attention-based representation.
	- Adaptation strategies spanning full fine-tuning to prompting and instruction tuning.
	- Transfer of broad knowledge as the source of sample-efficient downstream performance.
- ### Applications
	- Text classification, named-entity recognition, and question answering.
	- Generative tasks including summarisation, translation, and dialogue.
	- Semantic search and retrieval-augmented generation embeddings.
	- Code understanding and generation built on the same paradigm.
- ### Provenance

