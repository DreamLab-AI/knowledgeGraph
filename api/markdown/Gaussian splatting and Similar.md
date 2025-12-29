- ### OntologyBlock
  id:: gaussian-splatting-and-similar-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: mv
	- term-id:: MV-8002
	- preferred-term:: Gaussian splatting and Similar
	- definition:: 3D Gaussian Splatting (3DGS) is a radiance field rendering technique that represents scenes using millions of learnable 3D Gaussians as explicit volumetric primitives, enabling real-time novel view synthesis at 1080p resolution (30+ fps) while maintaining visual quality competitive with Neural Radiance Fields. Each Gaussian models position, size, orientation, colour, and opacity, with a differentiable rasterisation pipeline allowing end-to-end optimisation from multi-view images.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Metaverse]]
	- owl:class:: mv:GaussianSplattingAndSimilar

## Overview

3D Gaussian Splatting emerged from SIGGRAPH 2023 research as a breakthrough in real-time radiance field rendering. Unlike Neural Radiance Fields (NeRFs) which use implicit neural representations, 3DGS employs explicit Gaussian primitives that can be rendered orders of magnitude faster through efficient rasterisation.

## Technical Innovations

The method introduces three key elements:
1. **Sparse Point Initialisation** - Starting from camera calibration points, representing scenes with 3D Gaussians that preserve continuous volumetric properties while avoiding computation in empty space
2. **Anisotropic Covariance Optimisation** - Interleaved optimisation and density control achieving accurate scene representation
3. **Visibility-Aware Rendering** - Fast rendering algorithm supporting anisotropic splatting with real-time performance

## Extensions and Variants

- **4D Gaussian Splatting** - Dynamic scene representation with temporal dimension
- **Spacetime Gaussian Feature Splatting** - Real-time dynamic view synthesis
- **EndoGaussian** - Real-time endoscopic scene reconstruction
- **Deblur-GS** - Gaussian splatting with motion deblurring

## Resources

- [Original Paper](https://arxiv.org/abs/2308.04079) - Bernhard Kerbl et al. (INRIA)
- [Official Implementation](https://github.com/graphdeco-inria/gaussian-splatting)
- [Interactive Demo](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/)
- [Radiance Fields Community](https://radiancefields.com/)
- [AWS 3D Reconstruction Toolbox](https://aws.amazon.com/blogs/spatial/3d-gaussian-splatting-performant-3d-scene-reconstruction-at-scale/)

### Relationships
- is-subclass-of:: [[Computer Vision]]
- relatedTo:: [[Neural Radiance Fields]]
- relatedTo:: [[Real Time Rendering]]
- usedIn:: [[3D Reconstruction]]
- usedIn:: [[Virtual Reality]]
- usedIn:: [[Digital Twins]]
- belongsToDomain:: [[Metaverse]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Research agent enrichment with 2025 context
- **Verification**: Academic sources and SIGGRAPH proceedings verified
- **Regional Context**: UK/North England where applicable
