- ### OntologyBlock
  id:: gaussian-splatting-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: TC-0051
	- preferred-term:: 3D Gaussian Splatting
	- source-domain:: tc
	- owl:class:: tc:ThreeDGaussianSplatting
	- status:: active
	- public-access:: true
	- definition:: "A neural rendering technique that represents 3D scenes as collections of millions of 3D Gaussian primitives with learnable positions, colours, opacities, and covariances, enabling photorealistic real-time rendering at 100+ frames per second through GPU-accelerated rasterisation, revolutionising telepresence and immersive collaboration with unprecedented visual fidelity."
	- maturity:: developing
	- owl:physicality:: ConceptualEntity
	- owl:role:: Process
	- #### Relationships
	  id:: gaussian-splatting-relationships
	  collapsed:: true
		- is-subclass-of:: [[NeuralRendering]]
		- is-subclass-of:: [[TELE-050-neural-rendering-telepresence]]
		- is-subclass-of:: [[3DReconstruction]]
		- requires:: [[MultiViewImages]]
		- requires:: [[DifferentiableRendering]]
		- requires:: [[GPUAcceleration]]
		- requires:: [[GradientDescent]]
		- enables:: [[PhotorealisticTelepresence]]
		- enables:: [[NovelViewSynthesis]]
		- enables:: [[RealTimeRendering]]
		- ngm:relatedTo:: [[TELE-053-volumetric-video-conferencing]]
		- ngm:relatedTo:: [[TELE-052-neural-radiance-fields]]
		- ngm:relatedTo:: [[TELE-060-instant-ngp]]

## Definition

**3D Gaussian Splatting** is a breakthrough neural rendering method published at SIGGRAPH 2023 by Kerbl et al., representing 3D scenes as explicit collections of anisotropic 3D Gaussian distributions rather than implicit neural networks. Each Gaussian primitive encodes a 3D position (mean), colour, opacity, and 3×3 covariance matrix defining its shape and orientation in space. Rendering involves "splatting" these Gaussians onto the image plane through differentiable rasterisation, achieving photorealistic quality at 100-300 frames per second on consumer GPUs—over 100× faster than Neural Radiance Fields ([[TELE-052-neural-radiance-fields]]) whilst matching or exceeding visual fidelity.

The technique trains by optimising Gaussian parameters (positions, colours, covariances) to match input multi-view photographs through gradient descent, starting with sparse 3D point clouds from Structure-from-Motion (SfM). Gaussians are adaptively split, cloned, or pruned during optimisation to capture fine detail (hair strands, foliage) or remove redundancy. The explicit scene representation enables real-time rendering through GPU rasterisation pipelines, unlocking applications in [[TELE-020-virtual-reality-telepresence]], [[TELE-053-volumetric-video-conferencing]], and immersive telepresence where photorealistic environments must render at 90+ FPS for comfortable VR.

## Current Landscape (2025)

3D Gaussian Splatting has rapidly transitioned from academic novelty to production deployment, with major telepresence platforms integrating the technology for photorealistic avatars and environments.

**Adoption Statistics**:
- 67% of neural rendering research papers (2024-2025) employ Gaussian splatting variants (arXiv analysis)
- Meta, Apple, Niantic incorporate Gaussian splatting in AR/VR pipelines
- 14,000+ GitHub stars on official implementation (most-starred graphics paper 2023)
- Consumer apps (Luma AI, PolyCam) enable smartphone Gaussian capture

**Technology Capabilities (2025)**:
- **Training Time**: 30 minutes for room-scale scene on RTX 4090 (vs. 24 hours for NeRF)
- **Rendering Speed**: 150-300 FPS at 1080p resolution
- **Quality**: PSNR 30-35 dB (comparable to NeRF, exceeding mesh-based methods)
- **Scene Size**: Millions of Gaussians represent entire buildings

**UK Context**:
- **Luma AI** (London office): Develops NeRF-to-Gaussian conversion tools
- **PolyCam** (UK users): Gaussian splatting mode in 3D scanning app
- **University of Oxford**: Research on dynamic Gaussian splatting for moving objects
- **Imperial College London**: Compression techniques for streaming Gaussian scenes

## Technical Details

### Scene Representation

Each 3D Gaussian primitive 𝒢ᵢ defined by:
- **Mean μᵢ ∈ ℝ³**: 3D position in world space
- **Covariance Σᵢ ∈ ℝ³ˣ³**: Defines ellipsoidal shape/orientation
- **Colour cᵢ ∈ ℝ³** (or spherical harmonics for view-dependent appearance)
- **Opacity αᵢ ∈ [0,1]**: Transparency

Gaussian function: G(x) = exp(-½(x-μ)ᵀΣ⁻¹(x-μ))

### Rendering Pipeline

1. **Projection**: Transform 3D Gaussians to 2D image space
   - Project mean μᵢ via camera matrix
   - Approximate 2D covariance via Jacobian of projection

2. **Sorting**: Order Gaussians by depth (painter's algorithm with α-blending)

3. **Rasterisation**: For each pixel, accumulate colours of overlapping Gaussians
   - Front-to-back traversal with early stopping when opacity saturates
   - GPU-accelerated parallel processing

4. **Output**: Photorealistic rendered image from novel viewpoint

### Optimisation

**Input**: 50-200 multi-view photographs with camera poses (from SfM)

**Initialisation**: Sparse 3D point cloud → one Gaussian per point

**Loss Function**: L1 + SSIM (Structural Similarity Index) between rendered and ground truth images

**Optimisation**:
- Stochastic gradient descent with Adam optimiser
- 30,000 iterations (~30 minutes on RTX 4090)
- Adaptive density control: split under-reconstructed regions, prune low-opacity Gaussians

**Result**: Millions of optimised Gaussians encoding scene

### Advantages Over NeRF

| Aspect | Gaussian Splatting | Neural Radiance Fields ([[TELE-052-neural-radiance-fields]]) |
|--------|-------------------|--------------------------------------------------------------|
| **Rendering Speed** | 100-300 FPS | 0.1-1 FPS (real-time variants: 30 FPS) |
| **Training Time** | 30 minutes | 12-48 hours |
| **Quality** | Photorealistic (30-35 dB PSNR) | Photorealistic (30-36 dB PSNR) |
| **Representation** | Explicit (Gaussians) | Implicit (MLP weights) |
| **Memory** | 100-500 MB per scene | 10-50 MB (more compact) |
| **Editability** | Easy (move/delete Gaussians) | Difficult (retrain network) |

## Applications in Telepresence

### Photorealistic Virtual Environments ([[TELE-020-virtual-reality-telepresence]])
- Scan real office spaces with smartphones (50-100 photos)
- Train Gaussian scene in 30 minutes
- Render in VR at 90 FPS for telepresence meetings
- Example: Meta Horizon Workrooms experimenting with Gaussian environments (2025)

### Volumetric Video Conferencing ([[TELE-053-volumetric-video-conferencing]])
- Capture participant with multi-camera rig (6-12 cameras)
- Real-time Gaussian optimisation (30 Hz update rate)
- Stream compressed Gaussians to remote clients
- Render photorealistic avatar from any angle
- Example: Microsoft Mesh exploring dynamic Gaussian avatars

### Virtual Tourism
- Museums digitise exhibits with Gaussian scans
- Remote visitors navigate photorealistic 3D environments
- Example: Luma AI captures heritage sites for virtual tours

### Remote Site Inspection
- Construction sites scanned with drones
- Engineers inspect progress remotely in photorealistic 3D
- Example: UK engineering firms use PolyCam for site documentation

## Technical Challenges and Solutions

### Challenge: Large File Sizes
- **Problem**: Millions of Gaussians → 500 MB+ per scene
- **Solution**: Neural compression, quantisation (reduce to 50-100 MB)
- **Research**: Compact 3DGS, EAGLES (entropy-aware compression)

### Challenge: Dynamic Scenes
- **Problem**: Original technique assumes static scenes
- **Solution**: 4D Gaussian splatting (add time dimension), deformable Gaussians
- **Research**: Dynamic 3DGS, 4DGaussians (moving people, avatars)

### Challenge: Training Data Requirements
- **Problem**: Needs 50-200 high-quality photos with accurate poses
- **Solution**: Structure-from-Motion automation, smartphone capture apps
- **Tools**: COLMAP (SfM), Luma AI app, PolyCam

### Challenge: Real-Time Streaming
- **Problem**: 500 MB scenes unsuitable for network streaming
- **Solution**: Progressive transmission (coarse-to-fine), level-of-detail rendering
- **Research**: Streamable Gaussians, LoD-GS

## Future Directions

**Near-Term (2025-2027)**:
- Real-time Gaussian capture from single RGB-D camera (iPhone LiDAR)
- Compression to <50 MB per scene for mobile deployment
- Integration into WebXR standard (browser-based Gaussian rendering)

**Medium-Term (2027-2030)**:
- Photorealistic full-body Gaussian avatars updating at 60 Hz
- Gaussian-based telepresence as default in Meta/Apple platforms
- Semantic Gaussians (each primitive labelled: "table", "wall", etc.)

**Long-Term (2030+)**:
- Neural codecs compressing Gaussians 100× further
- Light-field displays rendering Gaussians holographically (no headset)
- Real-time global illumination in Gaussian scenes (ray tracing)

## Related Concepts

- [[TELE-050-neural-rendering-telepresence]]
- [[TELE-052-neural-radiance-fields]]
- [[TELE-053-volumetric-video-conferencing]]
- [[TELE-020-virtual-reality-telepresence]]
- [[TELE-060-instant-ngp]]

## Academic References

1. Kerbl, B., Kopanas, G., Leimkühler, T., & Drettakis, G. (2023). "3D Gaussian Splatting for Real-Time Radiance Field Rendering". *ACM Transactions on Graphics (SIGGRAPH)*, 42(4), 1-14.
2. Luiten, J., et al. (2023). "Dynamic 3D Gaussians: Tracking by Persistent Dynamic View Synthesis". *arXiv preprint*.
3. Niedermayr, S., et al. (2024). "Compressed 3D Gaussian Splatting for Accelerated Novel View Synthesis". *CVPR 2024*.

## Open-Source Implementations

- **Official**: https://github.com/graphdeco-inria/gaussian-splatting
- **Nerfstudio**: Gaussian splatting module in unified NeRF framework
- **gsplat**: PyTorch library for differentiable Gaussian rasterisation
- **WebGL Viewer**: Real-time browser-based Gaussian rendering

## Metadata

- **Term-ID**: TELE-051
- **Last Updated**: 2025-11-16
- **Maturity**: Developing
- **Authority Score**: 0.91
- **UK Context**: High (Luma AI, university research)
- **Cross-Domain**: Bridges to AI, Metaverse

## Related Content: Gaussian splatting and Similar

public:: true

- #Public page automatically published
- {{video https://www.youtube.com/watch?v=lG3g8mYKfqU}}
- # Gaussian Splatting
	- [Instantsplat: Unbounded Sparse-view Pose-free Gaussian Splatting in 40 Seconds](https://instantsplat.github.io/)
	- [The Rise Of 3D Gaussian Splatting: What Is It And How Is It Changing The Immersive Media Industry? — Magnopus](https://www.magnopus.com/blog/the-rise-of-3d-gaussian-splatting)
	- 4D [[Gaussian splatting and Similar]] [with time domain](https://github.com/hustvl/4DGaussians)
	- [[Gaussian splatting and Similar]] [gsgen](https://github.com/gsgen3d/gsgen)
	- Room scale [[Gaussian splatting and Similar]] technique for single lens (#SLAM) [[Scene Capture and Reconstruction]]  [Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting (vladimiryugay.github.io)](https://vladimiryugay.github.io/gaussian_slam/)
	- [Mip-Splatting (niujinshuchong.github.io)](https://niujinshuchong.github.io/mip-splatting/) reduced artefacts in [[Gaussian splatting and Similar]]
	- [Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting (vladimiryugay.github.io)](https://vladimiryugay.github.io/gaussian_slam/)
	- GaussianDiffusion: 3D Gaussian Splatting for Denoising Diffusion Probabilistic Models with Structured Noise
		- logseq://graph/researchpapers?block-id=6579a51f-5e6d-4570-903f-9458f84e845f
	- Gaussian [[SLAM]] rooms scale scanning
		- logseq://graph/researchpapers?block-id=6579a880-ce7f-4a79-b3d3-9135ff4348b3
		- [Gaussian Splatting SLAM (rmurai.co.uk)](https://rmurai.co.uk/projects/GaussianSplattingSLAM/)  is near real-time
	- [Paper page TRIPS: Trilinear Point Splatting for Real-Time Radiance Field Rendering (huggingface.co)](https://huggingface.co/papers/2401.06003)
	- [Deblurring 3D Gaussian Splatting (benhenryl.github.io)](https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/)
	- [huggingface/gsplat.js: JavaScript Gaussian Splatting library. (github.com)](https://github.com/huggingface/gsplat.js/)
	- [[Gaussian splatting and Similar]] in Houdini
	- [Triplane Meets Gaussian Splatting: Fast and Generalizable Single-View 3D Reconstruction with Transformers (zouzx.github.io)](https://zouzx.github.io/TriplaneGaussian/) understandable [[3D and 4D]] from [[Gaussian splatting and Similar]]
	- [dynamic3dgaussians.github.io](https://dynamic3dgaussians.github.io/) using a multi [[Motion Capture]] dome and [[Gaussian splatting and Similar]] for 6DOF [[Human tracking and SLAM capture]]
	- [LangSplat: 3D Language Gaussian Splatting](https://langsplat.github.io/)
- # NeRFs
	- MobileNeRF: This approach adapts NeRFs for mobile devices by exploiting the polygon rasterization pipeline for efficient neural field rendering. It achieves very fast rendering times (0.016-0.017s) but requires long training times[](https://spectrum.ieee.org/ai-graphics-neural-rendering).
	- MobileR2L: This method uses a full CNN-based neural light field model with a super-resolution model in its second stage. It achieves real-time inference on mobile devices while maintaining high image quality, rendering a 1008x756 image of real 3D scenes in 18.04ms on an iPhone 13[](https://spectrum.ieee.org/ai-graphics-neural-rendering).
	- Instant NGP (Neural Graphics Primitives): Developed by NVIDIA, this technique significantly speeds up the training and rendering of NeRFs, allowing for near-instantaneous scene reconstruction[](https://github.com/weihaox/awesome-neural-rendering/blob/master/docs/INTRODUCTION-AND-SURVEY.md).
	- Plenoxels (Plenoptic Voxels): This method replaces neural networks with a sparse 3D grid of spherical harmonics, enabling faster training and competitive quality compared to NeRFs[](https://github.com/weihaox/awesome-neural-rendering/blob/master/docs/INTRODUCTION-AND-SURVEY.md).
	- NGLOD (Neural Geometric Level of Detail): This approach combines neural implicit representations with explicit geometric representations, allowing for multi-resolution rendering and faster training[](https://arxiv.org/abs/2402.00028).
	- NeRF-MAE (Masked AutoEncoders for NeRFs): This technique applies the concept of masked autoencoders to NeRFs for self-supervised 3D representation learning, potentially improving generalization and efficiency[](https://ideas-ncbr.pl/en/research/neural-rendering/).
	- ## NeRFs vs Hardware Acceleration
		- old page, needs [[Update Cycle]]
		- [Neural Rendering and Its Hardware Acceleration: A Review (arxiv.org)](https://arxiv.org/html/2402.00028v1)
		- | Paper                                  | Neural Network Type | Residual Layer | Concatenation Layer | Suitability for Low-end Mobile Hardware |
		  |----------------------------------------|---------------------|----------------|---------------------|----------------------------------------|
		  | GIRAFFE                                | MLP, CNN            | Required       | Required            | 7                                      |
		  | Render Net                             | MLP, CNN            | Not Required   | Required            | 6                                      |
		  | Neural Voxel Renderer                  | MLP, CNN            | Not Required   | Required            | 5                                      |
		  | Neural Volumes                         | MLP, CNN            | Not Required   | Required            | 5                                      |
		  | NeRF                                   | MLP                 | Not Required   | Required            | 8                                      |
		  | NeRF in the Wild                       | MLP                 | Not Required   | Required            | 7                                      |
		  | KiloNeRF                               | MLP                 | Not Required   | Required            | 8                                      |
		  | FastNeRF                               | MLP                 | Not Required   | Required            | 9                                      |
		  | Plenoctrees                            | MLP                 | Not Required   | Required            | 8                                      |
		  | Instant Neural Graphics Primitives     | MLP                 | Not Required   | Required            | 9                                      |
		  | Scene Representation Networks          | MLP                 | Not Required   | Required            | 7                                      |
		  | Extracting Motion and Appearance       | MLP, CNN, Transformer | Required   | Required            | 6                                      |
		  | Instant 3D                             | MLP                 | Not Required   | Required            | 8                                      |
		  | Neural Point Cloud Rendering           | CNN, U-Net          | Not Required   | Required            | 6                                      |
		  | Deep Shading                           | CNN                 | Not Required   | Required            | 6                                      |
		  | Neural Reflectance Fields              | CNN                 | Required       | Not Required        | 7                                      |
		  | Deep Illumination                      | GAN, U-Net          | Not Required   | Required            | 5                                      |
		  | Common Objects in 3D                   | MLP, Transformer    | Required       | Required            | 7                                      |
		  | GeoNeRF                                | Transformer         | Required       | Required            | 7                                      |
		  | Gen-NeRF                               | Transformer         | Required       | Required            | 7                                      |
	- [playcanvas/supersplat: 3D Gaussian Splat Editor](https://github.com/playcanvas/supersplat/) [[Gaussian splatting and Similar]]
- [Long Volumetric Video](https://zju3dv.github.io/longvolcap/) [[Gaussian splatting and Similar]]
- [AniGS](https://lingtengqiu.github.io/2024/AniGS/) [[Humans, Avatars , Character]] [[Gaussian splatting and Similar]]
-

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
