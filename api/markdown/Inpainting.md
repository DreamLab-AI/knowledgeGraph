- ### OntologyBlock
  id:: inpainting-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8036
	- preferred-term:: Inpainting
	- status:: active
	- public-access:: true
	- definition:: Inpainting is an AI image generation technique that selectively modifies a portion of an existing image defined by a user-provided mask, filling the masked region with newly generated content based on a text prompt while maintaining coherence with surrounding areas. It is widely used for image restoration, object removal, and creative editing in metaverse content creation workflows.
	- owl:class:: ai:Inpainting
	- belongsToDomain:: [[Metaverse]]

### Relationships
- is-subclass-of:: [[AI Image Generation Techniques]]
- related-to:: [[Stable Diffusion]], [[ComfyUI]], [[Outpainting]], [[Image Editing]]
- enables:: [[Content Restoration]], [[Object Removal]], [[Creative Image Editing]]
- used-by:: [[Stable Diffusion Inpainting]], [[SDXL Inpainting]], [[Kandinsky 2.2 Inpainting]]

## How It Works
- **Mask Definition**: User specifies the area to modify using a mask (white pixels = inpaint, black pixels = preserve)
- **Context Analysis**: The model analyses surrounding content to understand visual context
- **Prompt-Guided Generation**: New pixels are generated based on text prompt and contextual understanding
- **Seamless Blending**: Generated content is matched to lighting, style, and texture of original image

## Key Features
- **Specialised Models**: Stable Diffusion Inpainting models have 5 additional input channels for mask processing
- **Resolution Support**: SDXL Inpainting produces higher resolution results than SD 1.5
- **SAM Integration**: Segment Anything Model can automatically create masks from object detection
- **Latent Space Operation**: Works in compressed latent space for efficiency (512x512 base)

## Use Cases
- **Object Removal**: Eliminating unwanted elements (photobombers, distracting objects) with intelligent fill
- **Photo Restoration**: Repairing damaged, torn, or faded photographs
- **Background Replacement**: Swapping boring backgrounds with creative alternatives
- **Texture Generation**: Creating seamless textures for 3D models and virtual environments
- **Metaverse Asset Editing**: Modifying existing virtual world assets without full regeneration
- **Product Photography**: Adjusting product images for marketing materials

## Inpainting vs Outpainting
- **Inpainting**: Focuses on defined regions within the image, maintaining consistency with surroundings
- **Outpainting**: Extends the image beyond original borders, with more creative freedom for new content

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub with 2025 research
- **Verification**: Technical documentation verified