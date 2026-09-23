
A texture atlas is a single large image that packs many smaller textures or sprites into one bitmap, accompanied by coordinate metadata mapping each sub-image to a region of the atlas. By consolidating textures, it lets a renderer draw many objects that share one bound texture, reducing state changes and draw calls and improving GPU efficiency in real-time graphics. UV coordinates of meshes are remapped to address sub-regions within the atlas. It is widely used in game engines, 2D sprite rendering, and font glyph caching to optimise throughput on the graphics pipeline.

- A texture atlas packs many small textures into one bitmap with coordinate metadata, so a renderer can draw many objects sharing one bound texture. It is a [[Real-Time Rendering]] optimisation that depends on [[UV Mapping]] and reduces work on the [[GPU]] via [[Batching]].
- ### Overview
- Binding and switching textures on the GPU incurs cost; consolidating assets into an atlas minimises those state changes.
- Each sub-image occupies a known rectangle; mesh UVs are offset and scaled to address it, so multiple distinct surfaces sample from a single texture object.
- Atlases trade some memory and packing effort for substantially higher draw throughput.
- ### Key aspects
- Bin-packing of sub-textures with padding to avoid bleeding artefacts.
- A coordinate table mapping logical assets to atlas regions.
- UV remapping in the [[Shader]] or content pipeline.
- ### Applications
- Sprite batching in 2D games for high object counts.
- Glyph atlases for efficient text rendering.
- Material consolidation in [[Game Engine]] scenes to cut draw calls.
- ### Provenance

