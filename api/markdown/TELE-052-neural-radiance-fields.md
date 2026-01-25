- ### OntologyBlock
  id:: nerf-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: TC-0052
	- preferred-term:: Neural Radiance Fields
	- source-domain:: tc
	- owl:class:: tc:NeuralRadianceFields
	- status:: active
	- public-access:: true
	- definition:: "A neural rendering technique representing 3D scenes as continuous volumetric functions encoded by multilayer perceptrons, mapping 5D coordinates (3D position + 2D viewing direction) to colour and density, enabling photorealistic novel view synthesis from sparse input photographs through volumetric ray marching and gradient-based optimisation."
	- maturity:: developing
	- owl:role:: Process
	- #### Relationships
	  id:: nerf-relationships
	  collapsed:: true
		- is-subclass-of:: [[Real-Time Rendering Pipeline]]

## Definition

**Neural Radiance Fields** (NeRF), introduced by Mildenhall et al. (ECCV 2020), revolutionised 3D scene reconstruction by representing scenes as continuous neural functions rather than discrete meshes or voxels. A NeRF encodes a scene's geometry and appearance in the weights of a multilayer perceptron (MLP) that, given a 3D position (x, y, z) and viewing direction (θ, φ), outputs colour (RGB) and volume density (σ). Novel viewpoints are rendered by marching rays through the volume, sampling the neural function, and integrating colour/density via volumetric rendering equations, producing photorealistic images without explicit 3D geometry.

## Current Landscape (2025)

NeRF has spawned 1,000+ research papers and commercial applications in telepresence [[TELE-053-volumetric-video-conferencing]], virtual production, and VR [[TELE-020-virtual-reality-telepresence]].

**Technology Capabilities (2025)**:
- **Training Time**: 30 minutes for room-scale scenes (Instant-NGP [[TELE-060-instant-ngp]])
- **Rendering Speed**: 30 FPS real-time variants (Mobile-NeRF, TensoRF)
- **Quality**: 32-36 dB PSNR (exceeding mesh-based methods)

## Comparison to Gaussian Splatting

NeRF slower but more memory-efficient than [[TELE-051-3d-gaussian-splatting]]. Gaussian splatting now preferred for real-time telepresence.

## Related Concepts

- [[TELE-050-neural-rendering-telepresence]]
- [[TELE-051-3d-gaussian-splatting]]
- [[TELE-053-volumetric-video-conferencing]]

## Academic References

1. Mildenhall, B., et al. (2020). "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis". *ECCV 2020*.

## Metadata

- **Term-ID**: TELE-052
- **Last Updated**: 2025-11-16
- **Maturity**: Developing
- **Authority Score**: 0.89
