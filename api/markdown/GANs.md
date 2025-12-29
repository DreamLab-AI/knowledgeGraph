- ### OntologyBlock
  id:: gans-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8030
	- preferred-term:: GANs
	- definition:: Generative Adversarial Networks (GANs) are a class of machine learning frameworks introduced by Ian Goodfellow et al. in 2014, where two neural networks (generator and discriminator) compete in a zero-sum game - the generator creates synthetic data while the discriminator attempts to distinguish real from fake samples. This adversarial training enables generation of high-fidelity synthetic data for applications including image synthesis, data augmentation, medical imaging, and scientific simulation.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:Gans

public:: true

## Architecture
- **Generator**: Neural network that produces synthetic data from random noise
- **Discriminator**: Neural network that classifies samples as real or generated
- **Adversarial Training**: Generator and discriminator improve iteratively in competition
- **Loss Function**: Minimax game with binary cross-entropy

## GAN Variants
- **DCGAN (Deep Convolutional GAN)**: Uses only convolution-deconvolution layers
- **Conditional GAN (cGAN)**: Includes labels/conditions for controlled generation
- **Self-Attention GAN (SAGAN)**: Adds residually-connected self-attention modules
- **TransGAN**: Pure Transformer architecture without convolutions
- **StyleGAN**: Hierarchical style-based generation for photorealistic faces
- **CycleGAN**: Unpaired image-to-image translation

## Applications (2025)
- **Data Augmentation**: Synthetic training data for ML models
- **Image Enhancement**: Super-resolution, colourisation, denoising
- **Healthcare**: 3D organ models from 2D scans for surgical planning
- **Scientific Research**: Dark matter simulation, gravitational lensing, high-energy physics
- **Entertainment**: Realistic characters, faces, and animations for games/film
- **Privacy-Preserving Data**: Synthetic datasets without personal information

## Current Challenges
- **Mode Collapse**: Generator produces limited variety of outputs
- **Training Instability**: Balancing generator and discriminator training
- **Vanishing Gradients**: Discriminator becomes too strong early in training
- **Evaluation Metrics**: Lack of standardised quality assessment
- **Ethical Concerns**: Deepfakes and misinformation potential

### Relationships
- is-subclass-of:: [[Neural Networks]]
- is-subclass-of:: [[GenerativeModel]]
- createdBy:: [[Ian Goodfellow]]
- relatedTo:: [[Diffusion Models]]
- relatedTo:: [[Deep Learning]]
- usedFor:: [[Image Generation]]
- usedFor:: [[Data Augmentation]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 research context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable