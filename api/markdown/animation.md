- ### Definition
  - Animation is the process of generating the illusion of motion through sequential image display or mathematical interpolation of [[Skeletal Animation]] states, underpinning interactive experiences in [[Game Engine]] environments, [[Virtual Reality]] platforms, and cinematic rendering pipelines.

- ### Relationships
  - Animation relies on an [[Animation Controller]] to blend and sequence states, draws on [[Motion Capture]] data for realistic performance, applies [[Inverse Kinematics]] to satisfy positional constraints, and integrates with a [[Rendering Engine]] to produce final imagery. It is a core component of [[Computer Graphics]] and enables [[Real-Time Rendering]] in interactive applications.

- ### Content
  - Animation as a formal discipline emerged from hand-drawn cel techniques in the early twentieth century, evolving through stop-motion, rotoscoping, and eventually computer-generated imagery. The shift to digital pipelines in the 1980s and 1990s introduced parametric and keyframe-based workflows that replaced manual frame-by-frame drawing with mathematically defined motion curves.

  - Modern digital animation operates through a layered system: a rig defines the hierarchical bone structure of a character, animators author keyframe poses at specific time indices, and the engine or rendering software interpolates between those poses using curves such as Bezier or Hermite splines. Physics-based systems add secondary motion for cloth, hair, and rigid bodies, while procedural animation generates motion algorithmically—for example, footstep placement using inverse kinematics against uneven terrain.

  - Animation is critical across entertainment (film, games, VR), simulation (training, medical visualization), and product design (AR previews, robotics). Real-time animation in game engines such as Unreal and Unity drives character behavior, environmental effects, and UI transitions, directly impacting user presence and interactivity in immersive experiences.

  - In 2024–2025, machine learning is reshaping animation through neural motion synthesis, which can generate context-appropriate locomotion from sparse control signals, and through AI-driven facial animation from audio input. Diffusion-based generative models are beginning to produce video-consistent motion sequences, and physics-informed neural networks are replacing hand-authored secondary dynamics, accelerating production timelines significantly.