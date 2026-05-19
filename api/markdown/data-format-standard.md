- ### Definition
  - Technical specifications defining how data is structured, encoded, and exchanged across metaverse platforms and 3D applications, including standards like glTF for efficient 3D asset transmission and Universal Scene Description (USD) for complex scene composition and collaboration.

- ### Semantic Classification
  - owl-class:: infrastructure:DataFormatStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Technical Standards]]
  - requires:: [[Standards Body]], [[Implementation Libraries]], [[Validation Tools]]
  - enables:: [[3D Asset Interoperability]], [[Cross-Platform Exchange]], [[Content Portability]]

- ### Content

  - ## Technical Details
  - **Key 3D Format Standards**:
		- **glTF**: "JPEG of 3D" - fast, efficient, opinionated format by Khronos Group
		- **USD**: "Photoshop of 3D" - rich, extensible format for authoring and collaboration (Pixar)
		- **MaterialX**: Common language for shading and material definition
  - **Standards Organizations**:
		- Metaverse Standards Forum: 3D Asset Interoperability Domain Group
		- Alliance for OpenUSD (AOUSD): Pixar, Adobe, Apple, Autodesk, NVIDIA
		- Khronos Group: glTF development and promotion
  - **2024 Progress**:
		- USD and glTF communities building synergies to reduce fragmentation
		- NVIDIA added glTF plugin for direct USD scene referencing
		- Exploring NERFs and Gaussian Splats for new 3D representations
  - **Scope Expansion**: Beyond geometry to behaviors, sound, physics, scene composition
  - ## Applications
  - 3D asset exchange between platforms
  - Metaverse content creation workflows
  - Game engine asset pipelines
  - Virtual production environments
  - Digital twin visualization

- ### Provenance
  - bridges-to:: [[Computer Vision]] (ai)
  - sources:: [[glTF]], [[USD]], [[MaterialX]], [[Khronos Group]], [[Metaverse Standards Forum]]
  - migration-date:: 2026-04-26T00:00:00Z