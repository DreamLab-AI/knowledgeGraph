
Text classification is the supervised natural-language-processing task of assigning one or more predefined categorical labels to a span of text such as a document, sentence, or query. It maps variable-length text inputs to a fixed label space using learned representations and a decision function. Common formulations include binary, multi-class, and multi-label classification over topics, sentiment, intent, or content policy categories.

- Text classification assigns categorical labels to text using [[Supervised Learning]] over learned representations. It is a foundational task within [[Natural Language Processing]], typically realised with a [[Neural Network]] or [[Transformer Architecture]] feeding a [[Classification]] head.
- ### Overview
- The task reduces unstructured language to discrete decisions, letting downstream systems route, filter, rank, or summarise text at scale.
- Inputs range from short queries to long documents; outputs span a fixed label set that may be binary (spam vs not-spam), multi-class (topic categories), or multi-label (multiple simultaneous tags).
- Historically dominated by bag-of-words features with linear classifiers, the field shifted to dense embeddings and then to fine-tuned pretrained language models that capture context and word order.
- ### Mechanisms
- Preprocessing and [[Tokenisation]] convert raw characters into discrete units the model can consume.
- [[Feature Engineering]] or learned embeddings produce a vector representation of the text.
- A trained decision function maps the representation to label probabilities, optimised against labelled examples during [[Model Training]].
- Threshold selection and calibration turn probabilities into final label assignments, especially for multi-label settings.
- ### Applications
- Spam and abuse filtering, topic tagging, and routing of support tickets.
- [[Sentiment Analysis]] of reviews and social posts.
- [[Content Moderation]] pipelines that flag policy-violating text.
- Intent detection in conversational interfaces and search query understanding.
- ### Provenance

