
An animation rig is a hierarchical system of bones, controls, and constraints applied to a 3D character or object to enable articulated movement for animation. It abstracts underlying mesh deformation through a control interface that animators manipulate, translating high-level poses into low-level vertex transformations. Rigs range from simple skeletal setups to complex systems incorporating inverse kinematics, blend shapes, and procedural dynamics.

- ### Content
  - Rigging as a formal practice emerged alongside 3D character animation in the 1980s and 1990s, when studios such as Pixar needed repeatable, animatable control systems for complex creatures. Early rigs were simple joint chains; by the mid-1990s, blend-shape systems and constraint networks became standard, allowing nuanced facial animation. Software packages including Maya, Blender, and 3ds Max developed sophisticated rigging toolsets that became industry staples.

  - Technically, an animation rig is implemented as a directed acyclic graph where each node represents a bone or control object with a local transform matrix. Parent-child relationships propagate transforms down the hierarchy, and constraint nodes (aim, orient, point) introduce additional dependencies. Skinning—the binding of mesh vertices to bones via weighted influences—translates joint rotations into surface deformations, using algorithms such as linear blend skinning or dual quaternion skinning to avoid collapsing artefacts.

  - The broader ecosystem includes auto-rigging tools such as Rigify in Blender and Maya's HumanIK, which generate standard bipedal or quadrupedal rigs from annotated skeleton guides, dramatically reducing rigging time. Game engines such as Unreal Engine and Unity consume rigged FBX or glTF assets and apply runtime animation blending through their own animation graphs, making rig design decisions critical for real-time performance.

  - In 2024–2025, machine-learning-assisted rigging tools have begun to automate weight painting and control placement from scan data, reducing the manual craft burden. Cloud-based animation pipelines and virtual production workflows have increased demand for modular, re-usable rig components. MetaHuman Creator from Epic Games exemplifies the trend toward high-fidelity, pre-built rigs that non-specialists can animate, lowering the barrier to photorealistic character work.

