- ### Definition
  - Latent Diffusion Models (LDMs) are a class of generative models that perform the iterative denoising diffusion process in the compressed latent space of a pre-trained variational autoencoder (VAE), rather than directly in pixel space. This design reduces the computational cost of training and inference by an order of magnitude whilst retaining perceptual quality, because the VAE encodes high-dimensional image data into a compact, semantically rich latent representation. LDMs are conditioned on text, image, or other modalities via cross-attention mechanisms inside a U-Net backbone, enabling text-to-image synthesis and image-to-image translation at practical compute budgets.

- ### Semantic Classification
  - owl-class:: latent-diffusion:Latent Diffusion
  - owl-role:: Concept

- ### Relationships
  - requires [[Variational Autoencoders]]
  - requires [[Diffusion Model]]
  - enables [[Image Generation]]
  - enables [[Text-to-Image]]
  - relatedTo [[Generative Model]]
  - relatedTo [[Neural Network Latent Space]]

- ### Content
  - Latent Diffusion Models emerged from research into efficient generative modelling that could match the quality of pixel-space diffusion models such as DDPM whilst running on consumer-grade hardware. The key insight is that the perceptual information relevant to image quality is largely captured by the low-dimensional latent code produced by a powerful VAE encoder, so diffusion and denoising can operate on this compact representation without losing fidelity.
  - The LDM architecture consists of three components: a VAE with encoder E and decoder D that compress images to latent codes z = E(x) and reconstruct them as x' = D(z); a conditional denoising U-Net that learns to reverse the Gaussian noise-addition forward process in the latent space; and a conditioning mechanism, typically a domain-specific encoder (CLIP text encoder for text-to-image tasks) whose embeddings are injected into the U-Net via cross-attention layers. At inference, the U-Net runs T denoising steps (typically 20–50 with DDIM scheduling) starting from a noise sample z_T, producing a clean latent z_0 that the VAE decoder renders to a full-resolution image.
  - Stable Diffusion is the most widely deployed open-source implementation of the LDM framework and has catalysed a broad ecosystem of fine-tuning methods (DreamBooth, LoRA, Textual Inversion), control mechanisms (ControlNet for pose/edge conditioning), and inpainting/outpainting applications. LDMs are also applied to audio synthesis (AudioLDM), video generation (VideoLDM), and 3D shape generation, demonstrating the generality of the latent-space diffusion approach beyond imagery.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z