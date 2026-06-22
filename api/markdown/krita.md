- ### Definition
  - **Krita** is an open-source raster graphics and digital painting application designed for professional illustrators, concept artists, and visual effects artists. Its plugin ecosystem includes krita-ai-diffusion, which provides an AI image-generation panel powered by a ComfyUI backend. Users can perform inpainting, outpainting, and image-to-image synthesis directly on canvas layers without leaving the application.

- ### Semantic Classification
  - owl-class:: infrastructure:Krita
  - owl-role:: Concept

- ### Relationships
  - Integrates with ComfyUI (via krita-ai-diffusion plugin) as an AI inference backend for Stable Diffusion and other diffusion models.
  - Relies on Python for plugin scripting and backend communication.
  - Serves as a creative tool bridging traditional digital painting workflows and generative AI image synthesis.

- ### Content
  - Remote server required plugins page [krita-ai-diffusion/doc/comfy-requirements.md at main · Acly/krita-ai-diffusion (github.com)](https://github.com/Acly/krita-ai-diffusion/blob/main/doc/comfy-requirements.md)
  - Port 8189 for my inference system
  - {{video https://www.youtube.com/watch?v=AF2VyqSApjA}}

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z