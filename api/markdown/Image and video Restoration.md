- ### OntologyBlock
  id:: image-and-video-restoration-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ngm
	- term-id:: NGM-8002
	- preferred-term:: Image and video Restoration
	- definition:: AI-powered image and video restoration employs deep learning models including diffusion architectures and GANs to enhance degraded media through upscaling (SD to 4K/8K), denoising (luminance and chromatic noise removal), deblurring, compression artifact removal, frame interpolation, and stabilisation. Modern systems train on millions of image pairs to distinguish authentic detail from noise, enabling recovery of fine textures while maintaining temporal consistency in video.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:ImageAndVideoRestoration
	- #### Relationships
	  id:: image-video-restoration-relationships
	  collapsed:: true
		- is-subclass-of:: [[Computer Vision]]

## Overview

AI video restoration has become practical for improving low-resolution, noisy, or unstable footage. Tasks including upscaling SD/DVD content, reducing heavy grain, fixing compression artifacts, and stabilising handheld recordings can now be performed on desktop hardware without professional post-production expertise.

## Key Tools (2025)

### Aiarty Video Enhancer
- Combines diffusion and GAN technology for true-to-life detail restoration
- v3.0 features HDR conversion, Step Mode, and 4K upscaling with natural edge preservation
- Trained on 2.38 million image frames for texture and motion consistency
- Turbo mode achieves real-time 4K upscaling at 3x efficiency

### Topaz Labs
- AI denoising model trained on millions of images distinguishes real detail from noise
- Topaz Video offers fine-grained control over denoising and sharpening strength
- Industry standard for professional video enhancement

### VideoProc Converter AI
- AI enhancement for clarity improvement, noise reduction, and artifact removal
- AI stabilisation for smoothing shaky footage
- Frame interpolation for increased playback smoothness
- Photo upscaling support to 4K, 8K, or 10K resolution

## Research Projects

- [ObjectDrop](https://objectdrop.github.io/) - [[Google]] object insertion and removal
- [Deblur-GS](https://chaphlagical.icu/Deblur-GS/static/paper/Deblur_GS_author_version.pdf) - Gaussian splatting with deblurring

### Relationships
- is-subclass-of:: [[Computer Vision]]
- relatedTo:: [[Deep Learning]]
- relatedTo:: [[Generative Adversarial Networks]]
- usedFor:: [[Content Creation]]
- usedFor:: [[Film Restoration]]
- usedFor:: [[Archive Digitisation]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Research agent enrichment with 2025 context
- **Verification**: Product documentation and industry sources verified