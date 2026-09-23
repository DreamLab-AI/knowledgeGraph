
Kullback-Leibler (KL) divergence is a measure from information theory that quantifies how one probability distribution differs from a second reference distribution, expressed as the expected excess surprise from using the wrong distribution. It is non-negative and zero only when the two distributions coincide, but it is asymmetric and does not satisfy the triangle inequality, so it is not a true metric. KL divergence is central to maximum-likelihood estimation, variational inference and many machine-learning objectives, where minimising it aligns a model distribution with a target. In reinforcement learning from human feedback it acts as a regulariser that keeps a fine-tuned policy close to its reference.

- [[Kl Divergence]] is an information-theoretic measure of how one [[Probability Distribution]] differs from a reference distribution, quantifying the expected excess surprise from using the wrong model.
- It is non-negative, zero only when the distributions match, but asymmetric, so it is a divergence rather than a true distance metric.
- Rooted in [[Information Theory]] and closely tied to [[Entropy]], it underpins [[Variational Inference]] and many learning objectives.
- ### Overview
- KL divergence emerges naturally from the difference between cross-entropy and the entropy of the reference distribution.
- Minimising KL divergence between a model and a data distribution is equivalent to maximum-likelihood estimation, linking it directly to model training.
- Its asymmetry means the forward and reverse directions produce different behaviours: forward KL is mass-covering while reverse KL is mode-seeking.
- In modern alignment pipelines a KL penalty constrains a fine-tuned policy to stay near its reference model, preventing reward over-optimisation.
- ### Mechanisms
- The divergence sums, over outcomes, the probability under one distribution times the log-ratio of the two distributions' probabilities.
- It requires the reference distribution to assign positive probability wherever the compared distribution does, otherwise it becomes unbounded.
- Variational inference uses KL divergence to make an intractable posterior approximable by an optimisable family.
- As a regulariser it trades off reward maximisation against drift from a trusted baseline policy.
- ### Applications
- Training generative models and classifiers via cross-entropy and maximum likelihood.
- Approximating posteriors in variational inference and variational autoencoders.
- Regularising policies in reinforcement learning from human feedback and direct preference optimisation.
- Detecting distribution shift and comparing learned versus reference distributions.
- ### Provenance

