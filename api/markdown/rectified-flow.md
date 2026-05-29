- ### Definition
  - Rectified Flow is a generative modelling framework that trains a velocity field to transport samples along straight-line trajectories in the ODE sense between a source noise distribution and a target data distribution. By reflow iterations—repeatedly pairing coupled samples and re-training—the learned trajectories become increasingly linear, minimising the number of function evaluations (NFEs) required at inference time. The approach unifies flow matching and score-based diffusion models, offering competitive image and video generation quality with substantially faster sampling compared to standard diffusion schedules.

- ### Semantic Classification
  - owl-class:: rectified-flow:Rectified Flow
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Flow Matching]]
  - relatedTo [[Diffusion Model]]
  - enables [[Image Generation]]
  - enables [[Sampling]]
  - uses [[Generative Model]]

- ### Content
  - Rectified Flow frames generative modelling as learning an ordinary differential equation (ODE) whose velocity field transports samples from a tractable source (e.g. a standard Gaussian) to the empirical data distribution. Unlike score-based diffusion models that follow curved stochastic differential equation paths, Rectified Flow explicitly encourages straight-line transport by minimising the expected squared deviation between the velocity field and the linear interpolation between paired noise and data samples.
  - The key insight is that straighter trajectories require fewer discretisation steps at inference time, enabling high-fidelity generation with as few as one or two NFEs after sufficient reflow iterations. This makes Rectified Flow particularly attractive for real-time or interactive generation applications where latency is constrained.
  - Rectified Flow is closely related to Flow Matching—both formulate generation as learning an ODE velocity field—but Rectified Flow's reflow procedure provides an explicit mechanism to iteratively linearise trajectories. The framework has been applied to text-to-image synthesis, video generation, and point cloud generation, consistently matching or exceeding the quality of diffusion models at lower inference cost. Its connection to latent diffusion architectures enables drop-in replacement of the diffusion schedule in existing pipelines such as those based on VAE encoders.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z