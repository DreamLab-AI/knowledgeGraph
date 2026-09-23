
A sampling procedure is the method by which a generative model draws output samples from its learned probability distribution. It governs how latent or noise variables are mapped to concrete outputs, including techniques such as ancestral sampling, temperature scaling, top-k and nucleus sampling, and iterative denoising in diffusion models. The choice of procedure controls the diversity, fidelity, and computational cost of generation.

- ### Content
  - Sampling balances exploration against quality: stochastic schemes increase diversity while deterministic or low-temperature schemes increase coherence. In diffusion and score-based models, the procedure defines the reverse-time trajectory and the number of denoising steps, directly trading sample quality against inference latency.

