- ### OntologyBlock
  id:: sampling-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8052
	- preferred-term:: Sampling
	- status:: active
	- public-access:: true
	- definition:: Sampling in AI refers to the inference-time process of generating outputs from trained models, particularly in diffusion models where iterative denoising steps progressively refine random noise into coherent outputs. Key sampling methods include DDIM (Denoising Diffusion Implicit Models), Euler methods, Heun's method, and Latent Consistency Models (LCM), with optimized schedules significantly improving output quality and computational efficiency in few-step synthesis regimes.
	- maturity:: reviewed
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:Sampling

### Key Research
- [Align Your Steps: Optimizing Sampling Schedules in Diffusion Models](https://huggingface.co/papers/2404.14507) - NVIDIA research on optimal sampling schedules

### Sampling Methods
- **DDIM**: Denoising Diffusion Implicit Models - deterministic sampling enabling faster generation
- **Euler Method**: Simple numerical integration for diffusion ODEs
- **Heun's Method**: More accurate but twice as slow as Euler (two noise predictions per step)
- **LCM**: Latent Consistency Models enabling high-quality single-step generation (typically 1-4 steps)
- **DPM-Solver**: Fast high-order solvers for diffusion probabilistic models

### Practical Guidelines
- Optimal sampling steps: 20-30 for most cases
- Higher CFG scale values require more sampling steps
- Sampling schedule optimization provides significant gains in few-step synthesis

### Relationships
- is-subclass-of:: [[Artificial Intelligence]]
- related-to:: [[Model Training]]
- related-to:: [[Deep Learning]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub with technical definition