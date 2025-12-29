- ### OntologyBlock
  id:: diffusion-models-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8027
	- preferred-term:: Diffusion Models
	- definition:: Diffusion models (also called score-based generative models) are a class of latent variable generative models in machine learning that learn to generate data by reversing a gradual noising process. They consist of a forward diffusion process that progressively adds Gaussian noise transforming data to a tractable prior distribution, and a reverse sampling process where a neural network learns the score function (gradient of log probability density) to iteratively denoise and synthesize new samples.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:DiffusionModels

public:: true

## Core Concepts
- **Forward Process**: Gradually adds noise to data following a Markov chain
- **Reverse Process**: Neural network learns to denoise step-by-step
- **Score Matching**: Training objective equivalent to denoising score matching
- **DDPM**: Denoising Diffusion Probabilistic Models (Ho et al., 2020) - breakthrough paper

## Technical Foundations
- Score function learning: Estimates gradient of log probability density
- Stochastic Differential Equations (SDEs): Framework for continuous-time diffusion
- Variational lower bound optimization
- Langevin dynamics for sampling

## Key Applications (2025)
- **Image Generation**: Stable Diffusion, DALL-E 3, Midjourney
- **Video Generation**: Sora (OpenAI), HunyuanVideo, Runway Gen-3
- **Image Enhancement**: Denoising, super-resolution, inpainting
- **Audio Generation**: Music and speech synthesis
- **3D Generation**: Point cloud and mesh generation

## Notable Models
- **Stable Diffusion** (2022): 860M parameter latent diffusion model by Stability AI
- **SDXL**: Enhanced Stable Diffusion with improved quality
- **DiT (Diffusion Transformer)**: Used in Sora (2024)
- **Flow Matching**: Emerging alternative to traditional diffusion

## 2025 Research Advances
- Large learning rates prevent memorization via implicit regularisation
- Bias analysis in denoising score matching optimisation
- Improved understanding of generalisation vs memorisation trade-offs

### Relationships
- is-subclass-of:: [[GenerativeModel]]
- is-subclass-of:: [[Deep Learning]]
- usedBy:: [[Stable Diffusion]]
- usedBy:: [[DALL-E]]
- usedBy:: [[Midjourney]]
- usedBy:: [[Sora]]
- usedBy:: [[ComfyUI]]
- usedBy:: [[Fooocus]]
- relatedTo:: [[GANs]]
- relatedTo:: [[VAE]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 research context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable