
Rejection sampling is a Monte Carlo technique for drawing samples from a target probability distribution by sampling from a simpler proposal distribution and accepting or rejecting each draw according to a ratio test. It requires a proposal that bounds the target up to a constant and yields exact samples from the target when accepted. In machine learning it also names a practical method of generating candidate model outputs, scoring them and keeping only those that pass a quality or reward threshold.

- ### Overview
  - Classic rejection sampling generates a candidate from a tractable proposal distribution and accepts it with probability proportional to the target density divided by a scaled proposal density.
  - In modern generative AI, the same idea drives "best-of-n" generation: produce many candidate outputs, score them with a reward or verifier, and keep only the accepted ones.
- ### Mechanisms
  - Envelope condition: the proposal scaled by a constant must dominate the target everywhere.
  - Accept/reject step: a uniform draw decides whether each candidate is kept.
  - Efficiency: acceptance rate falls as proposal and target diverge, motivating tight envelopes.
- ### Applications
  - Exact simulation from distributions lacking direct sampling methods.
  - Rejection-sampling fine-tuning, filtering model generations by reward.
  - Bayesian inference and probabilistic programming primitives.
- ### Provenance

