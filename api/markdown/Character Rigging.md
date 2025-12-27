- ### OntologyBlock
  id:: character-rigging-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9820
	- source-domain:: mv
	- preferred-term:: Character Rigging
	- definition:: The process of creating a hierarchical skeleton of interconnected bones and joints within a 3D character model, along with control systems and deformation rules, enabling animators to manipulate the mesh through inverse kinematics and forward kinematics for realistic movement.
	- status:: active
	- owl:class:: mv:CharacterRigging
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: character-rigging-relationships
	  collapsed:: true
		- is-subclass-of:: [[Animation Technique]]
		- enables:: [[Character Animation]], [[Skeletal Animation]], [[Motion Capture Retargeting]]
		- requires:: [[Character Model]], [[Skinning]], [[Weight Painting]]
		- related-to:: [[Inverse Kinematics]], [[Bone Structure]], [[Animation Controller]]
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

