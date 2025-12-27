- ### OntologyBlock
  id:: animation-retargeting-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9766
	- source-domain:: mv
	- preferred-term:: Animation Retargeting
	- status:: active
	- definition:: Animation Retargeting is the process of transferring motion capture or animation data from one character skeleton to another with different proportions, joint configurations, or bone structures, enabling reuse of animation assets across diverse character models in games, film, and virtual environments.
	- owl:class:: mv:AnimationRetargeting
	- belongsToDomain:: [[metaverse]]
	- is-subclass-of:: [[Animation Technology]]
	- enables:: [[Character Animation Reuse]], [[Motion Capture Workflows]], [[Avatar Animation]]
	- requires:: [[Skeleton Mapping]], [[Pose Matching]], [[Inverse Kinematics]]
	- #### Relationships
	  id:: animation-retargeting-relationships
	  collapsed:: true

### Technical Details
Key components include:
- **Skeleton Mapping**: Associating bones between source and target characters using hierarchical tagging systems
- **Pose Matching**: Aligning rest poses between characters with different default configurations
- **Joint Binding**: Matching key skeletal parts with similar kinematics between different character rigs
- **Constraint Systems**: Maintaining joint limits and anatomical plausibility during motion transfer

### Advanced Techniques (2024)
- **ML-Based Retargeting**: Skeleton-aware and shape-aware methods retargeting between non-homeomorphic skeletons
- **Video-Based Retargeting**: Deep learning frameworks processing noisy monocular video motion data
- **Single-Camera Capture**: Solutions enabling motion capture from any video or iPhone
