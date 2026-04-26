iri:: http://narrativegoldmine.com/spatial-computing#AnimationRetargeting
uri:: urn:visionclaw:concept:spatial-computing:animation-retargeting
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:animation-retargeting
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Animation Retargeting
content-hash:: sha256-12-ea55511aad76
legacy-term-id:: MV-9766
status:: active
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T20:30:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - Animation Retargeting is the process of transferring motion capture or animation data from one character skeleton to another with different proportions, joint configurations, or bone structures, enabling reuse of animation assets across diverse character models in games, film, and virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:AnimationRetargeting
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Animation Technology]]
  - requires:: [[Skeleton Mapping]], [[Pose Matching]], [[Inverse Kinematics]]
  - enables:: [[Character Animation Reuse]], [[Motion Capture Workflows]], [[Avatar Animation]]
  - bridges-to:: [[Computer Vision]] (ai)

- ### Content

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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
