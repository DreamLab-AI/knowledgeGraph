- ### OntologyBlock
  id:: rendering-engine-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7018
	- preferred-term:: Rendering Engine
	- source-domain:: ngm
	- definition:: A rendering engine is software that generates 2D images or animations from 3D scene descriptions through rasterisation, ray tracing, or hybrid approaches. Modern real-time engines like Unreal Engine 5 and Unity employ advanced techniques including global illumination (Lumen), virtualised geometry (Nanite), neural rendering with RTX Tensor Cores, and DLSS upscaling to achieve cinematic-quality visuals at interactive frame rates.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Metaverse]]
	- owl:class:: ngm:RenderingEngine
	- owl:role:: Concept

## Major Real-Time Engines (2025)

### Unreal Engine 5
- **Lumen** - Global illumination and reflections system
- **Nanite** - Virtualised geometry enabling film-quality assets
- **MegaLights** - Stochastic direct lighting for orders of magnitude more dynamic lights
- **Virtual Shadow Maps** - High-resolution shadows without pre-computation
- **DLSS 4 Plugin** - Available for UE 5.2-5.6
- Real-time ray tracing with NVIDIA RTX integration

### Unity 6.1
- Variable Rate Shading support
- Deferred+ rendering path in Universal Render Pipeline
- OctaneRender integration for GPU path tracing
- Unity 7 roadmap includes generative AI for 3D skyboxes and models

### NVIDIA RTX Neural Rendering
- **Neural Shaders** - Tiny neural networks within shaders for texture compression
- **RTX Mega Geometry** - Accelerated BVH builds for full-quality Nanite ray tracing
- **ReSTIR PT** - Path tracing with infinite lights and improved reflections
- **Cooperative Vectors** - DirectX 12 access to Tensor Cores from shaders

## SIGGRAPH 2025

The [Advances in Real-Time Rendering](https://advances.realtimerendering.com/s2025/index.html) course celebrates 20 years with presentations from Activision, Ubisoft, Epic Games, id Software, and NVIDIA on cutting-edge techniques.

### Relationships
- is-subclass-of:: [[Computer Graphics]]
- relatedTo:: [[Ray Tracing]]
- relatedTo:: [[Gaussian splatting and Similar]]
- usedIn:: [[Game Development]]
- usedIn:: [[Virtual Reality]]
- usedIn:: [[Film Production]]
- enabledBy:: [[NVIDIA]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Research agent enrichment with 2025 context
- **Verification**: NVIDIA developer documentation and SIGGRAPH proceedings verified
- **References**: 7 pages reference this concept
