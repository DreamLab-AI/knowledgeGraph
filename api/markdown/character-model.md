- ### Definition
  - A 3D digital representation of a character consisting of a polygonal mesh, textures, and materials, designed with clean topology optimized for animation and real-time rendering, serving as the foundation for rigging, skinning, and character animation workflows.

- ### Semantic Classification
  - owl-class:: spatial-computing:CharacterModel
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D Model]]
  - requires:: [[3D Modeling Software]], [[Texture Mapping]], [[Topology Design]]
  - enables:: [[Character Animation]], [[Virtual Avatars]], [[Game Characters]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Topology Requirements**:
		- Clean, evenly distributed mesh (preferably quads)
		- Suitable polycount for target platform
		- Symmetrical neutral pose (T-pose or A-pose)
		- Dense mesh around deformation areas (eyes, shoulders, elbows)
  - **Common Issues to Avoid**:
		- N-Gons (faces with more than 4 edges)
		- Flipped faces and open edges
		- Isolated vertices
		- Poor edge flow around joints
  - **Retopology**: Process of converting high-resolution models into optimized meshes suitable for animation and real-time use
  - **Tools**: Blender, Maya, 3ds Max, ZBrush, Character Creator, AccuRIG
  - ## Applications
  - Video game character creation
  - Virtual avatar systems
  - Animated film production
  - VR/AR character representation
  - Metaverse identity systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z