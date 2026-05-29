public:: true

# Skeletal Animation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:skeletal-animation",
  "@type": "Page",
  "vc:slug": "skeletal-animation",
  "title": "Skeletal Animation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:skeletal-animation",
  "@type": "Class",
  "label": "Skeletal Animation",
  "definition": "Skeletal animation is a character animation technique in which a hierarchical rig of bones (joints) defines the articulated structure of a character or creature, and mesh vertices are deformed by the weighted influence of surrounding bones through a process known as skinning. Artists author motion by keyframing or procedurally driving bone transforms over time; the underlying mesh deforms accordingly in real time on the GPU. Skeletal animation is the dominant method for animating characters in games, virtual reality, film visual effects, and virtual avatar systems due to its runtime efficiency, data compactness, and amenability to motion capture retargeting.",
  "domain": "graphics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:character-animation", "label": "Character Animation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"},
      {"@id": "urn:ngm:class:character-rigging", "label": "Character Rigging"},
      {"@id": "urn:ngm:class:animation-retargeting", "label": "Animation Retargeting"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:avatar-animation", "label": "Avatar Animation"},
      {"@id": "urn:ngm:class:real-time-character-animation", "label": "Real Time Character Animation"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:physics-based-animation", "label": "Physics-Based Animation"},
      {"@id": "urn:ngm:class:procedural-animation", "label": "Procedural Animation"},
      {"@id": "urn:ngm:class:gl-tf-3-d-file-format", "label": "glTF (3D File Format)"},
      {"@id": "urn:ngm:class:animation-controller", "label": "Animation Controller"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Skeletal Animation]] is a [[Character Animation]] technique in which a hierarchical bone rig defines articulated character structure, with mesh vertices skinned to bone transforms, driven by keyframe data, [[Motion Capture]] retargeting, or [[Inverse Kinematics]] solvers to produce [[Real Time Character Animation]] on GPU hardware.

- ### Relationships
  - Skeletal animation is built on [[Character Rigging]] pipelines where artists bind mesh geometry to bone hierarchies with painted vertex weights. [[Motion Capture]] data is retargeted onto rigs via [[Animation Retargeting]] workflows, while [[Inverse Kinematics]] constrains end effectors (hands, feet) to contact points at runtime. [[Animation Controller]] state machines blend between locomotion cycles and actions. The technique enables [[Avatar Animation]] in metaverse and VR contexts and is serialised in [[glTF (3D File Format)]] for web-native delivery. [[Physics-Based Animation]] and [[Procedural Animation]] systems layer dynamic secondary motion on top of the skeletal base.

- ### Content
  - Skeletal (or "rigged") animation was systematised in the computer graphics community through the 1980s-90s, building on the mathematical foundations of forward and inverse kinematics from robotics. The technique became commercially dominant with the adoption of real-time GPU vertex shaders in the early 2000s, which allowed smooth skinning (linear blend skinning) to be executed per-frame in hardware. Prior to this, characters required pre-baked morph targets or were represented as rigid segmented meshes. Software tools including Maya, Softimage, and 3ds Max standardised the workflow.

  - A skeletal animation system consists of four components. The rig is a directed acyclic graph of joints with parent-child transform relationships; the root joint's world transform determines character placement. Skinning binds each vertex to a set of joints with normalised blend weights, typically stored as up to 4 joints per vertex for hardware efficiency. The animation clip stores joint rotation (and optionally translation and scale) curves sampled at discrete keyframes and interpolated at runtime. The animation state machine selects, blends, and layers clips based on gameplay events, velocity, and physics contacts, with blend trees handling smooth transitions.

  - Skeletal animation is ubiquitous in AAA video games, virtual reality avatars, film visual effects (digital doubles), architectural visualisation with human-scale characters, virtual production (real-time motion capture for live broadcast), and social VR platforms. In healthcare and biomechanics, skeletal models drive clinical simulation and rehabilitation monitoring. Industrial digital twins use skeletal rigs to model human workers for ergonomic analysis and safety planning.

  - As of 2024-2025, machine learning-driven motion synthesis is augmenting or replacing hand-authored animation for locomotion, crowd simulation, and reactive character behaviour. Physics-informed motion synthesis models (e.g., trained neural motion planners) generate physically plausible motion from high-level goals without per-clip authoring. Real-time neural skinning methods using learned deformation networks are beginning to replace linear blend skinning for high-fidelity character deformation, particularly for organic forms where linear skinning produces candy-wrapper artefacts. The glTF 2.0 format with the KHR_animation_pointer extension is the dominant interchange standard for web, XR, and real-time applications.

