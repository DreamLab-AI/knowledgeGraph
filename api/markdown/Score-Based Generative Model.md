
A score-based generative model is a class of generative model that learns the gradient of the log probability density of data — the score function — and samples by reversing a noising process using that learned score. Training perturbs data with noise at multiple scales and fits a neural network to estimate the score at each scale, after which Langevin-style or reverse stochastic-differential-equation dynamics transform noise into samples. The framework provides a unifying continuous-time view that subsumes denoising diffusion models.

- ### Overview
	- Rather than modelling the density directly, the model estimates its gradient, sidestepping the intractable normalising constant.
	- A forward process progressively corrupts data into noise; a learned reverse process, driven by the estimated score, transforms noise back into data.
	- Song and Ermon's continuous-time formulation casts both the forward and reverse processes as stochastic differential equations, unifying score matching with denoising diffusion.
- ### Mechanisms
	- Denoising score matching trains the network to predict the score across a continuum of noise levels.
	- Sampling uses annealed Langevin dynamics or numerical SDE/ODE solvers for the reverse process.
	- A probability-flow ODE gives a deterministic sampler and exact likelihood evaluation.
- ### Applications
	- High-fidelity image, audio, and video synthesis.
	- Robotic action generation via [[Diffusion Policy]].
	- Inverse problems, super-resolution, and conditional generation with [[Classifier-Free Guidance]].
- ### Provenance

