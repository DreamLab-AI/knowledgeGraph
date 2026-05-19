- ### Definition
  - The process of creating a hierarchical skeleton of interconnected bones and joints within a 3D character model, along with control systems and deformation rules, enabling animators to manipulate the mesh through inverse kinematics and forward kinematics for realistic movement.

- ### Semantic Classification
  - owl-class:: spatial-computing:CharacterRigging
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Animation Technique]]
  - requires:: [[Character Model]], [[Skinning]], [[Weight Painting]]
  - enables:: [[Character Animation]], [[Skeletal Animation]], [[Motion Capture Retargeting]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Core Components**:
		- Bone hierarchy (joints with parent-child relationships)
		- Control rig (animation controls)
		- Skinning (binding mesh to skeleton)
		- Weight painting (bone influence per vertex)
  - **Kinematics Types**:
		- **Forward Kinematics (FK)**: Animator moves each joint separately
		- **Inverse Kinematics (IK)**: Animate end effector, system calculates joint positions
		- Modern rigs include FK/IK switches for flexibility
  - **Bone Transform**: Position, scale, orientation relative to bind pose; child transforms are product of parent and own transform
  - **Auto-Rigging Tools**: Mixamo, AccuRIG, Anything World (AI-enhanced, 40% faster than manual)
  - **Software**: Blender, Maya, 3ds Max, Houdini, Cinema 4D, Unreal Engine
  - ## Applications
  - Video game character animation
  - Animated film production
  - VR avatar systems
  - Motion capture integration
  - Procedural animation systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z