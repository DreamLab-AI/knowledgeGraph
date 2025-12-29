- ### OntologyBlock
  id:: fooocus-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8029
	- preferred-term:: Fooocus
	- definition:: Fooocus is a free and open-source AI image generator built on Stable Diffusion XL (SDXL) that combines the power of Stable Diffusion with the ease-of-use of Midjourney. Developed by lllyasviel (creator of ControlNet), it provides a simplified interface for text-to-image generation with advanced features including inpainting, image prompting, and style mixing, requiring minimal technical configuration while offering advanced k-diffusion sampling.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:Fooocus

## Resources
- [lllyasviel/Fooocus: Focus on prompting and generating (github.com)](https://github.com/lllyasviel/Fooocus)
- [RuinedFooocus Fork](https://github.com/runew0lf/RuinedFooocus)
- [FooocusPlus Community Fork](https://github.com/DavidDragonsage/FooocusPlus)

## Project Status (2025)
- Currently in limited long-term support (LTS) with bug fixes only
- Built entirely on SDXL architecture
- No current plans to migrate to newer architectures like Flux
- Alternative recommendations from developer: WebUI Forge, ComfyUI, SwarmUI

## Technical Features
- **Automatic Downloads**: SDXL Base Model (3.5GB), SDXL Refiner (3GB), VAE (335MB)
- **Advanced Sampling**: Seamless native k-diffusion sampling with continuous refiner swap
- **Signal Compensation**: Adjusts positive/negative signals for high-resolution outputs
- **Hardware Requirements**: NVIDIA GPU with 8GB VRAM recommended; AMD support with 30-50% slower performance

### Relationships
- is-subclass-of:: [[Artificial Intelligence]]
- uses:: [[Stable Diffusion]]
- uses:: [[SDXL]]
- uses:: [[Diffusion Models]]
- createdBy:: [[lllyasviel]]
- relatedTo:: [[ComfyUI]]
- relatedTo:: [[ControlNet]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 research context
- **Verification**: Technical documentation verified
- **Regional Context**: UK/North England where applicable