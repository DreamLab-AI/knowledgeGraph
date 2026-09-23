
Data labelling is the process of annotating raw data, such as images, text, audio or sensor readings, with the target outputs or categories a supervised model is expected to predict. It produces the ground-truth signal that links inputs to desired outputs and largely determines the achievable accuracy of trained models. Labelling combines human annotators, guidelines, tooling and quality control, increasingly augmented by model-assisted and active-learning workflows.

- ### Overview
	- Supervised machine learning learns a mapping from inputs to outputs by example, and labelling provides those examples by attaching correct answers to raw data.
	- Labelling spans classification tags, bounding boxes and segmentation masks for images, named-entity and sentiment spans for text, transcription for audio, and event markers for sensor streams.
	- Annotation quality is governed by clear guidelines, annotator training, inter-annotator agreement metrics and adjudication of disagreements.
	- Modern pipelines combine human labelling with model pre-labelling and active learning, where the model selects the most informative samples for human review.
- ### Mechanisms
	- Guideline definition specifying the label schema and edge-case rules.
	- Annotation tooling for efficient, consistent capture of labels.
	- Quality control via gold-standard checks and consensus.
	- Model-assisted pre-labelling to reduce human effort.
	- Active learning to prioritise high-value samples.
- ### Applications
	- Building training sets for computer vision and natural language models.
	- Creating evaluation benchmarks and held-out test data.
	- Reinforcement learning from human feedback preference data.
	- Domain-specific datasets for medical, legal and industrial models.
- ### Provenance

