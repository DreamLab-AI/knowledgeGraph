
Real-time graphics is the field of computer graphics concerned with generating and displaying images fast enough to produce interactive, continuously updating visuals, typically at frame rates of sixty frames per second or higher. It prioritises low and predictable latency over photorealistic fidelity, relying on hardware acceleration and approximate rendering techniques. It is the foundation for games, simulations and immersive spatial computing experiences.

- [[Real Time Graphics]] is the branch of [[Computer Graphics]] that renders interactive images at high, sustained frame rates.
- It depends on the [[Graphics Processing Unit]] and an efficient [[Rendering Pipeline]] to keep [[Latency]] low and predictable.
- It is the technical basis for [[Virtual Reality]] and [[Augmented Reality]] experiences.
- ### Overview
- Unlike offline rendering, which can spend minutes or hours per frame, real-time graphics must produce each frame within a few milliseconds.
- Achieving this requires hardware acceleration, parallelism across thousands of shader cores and aggressive use of approximations.
- Frame budgets are tight: a sixty-frames-per-second target leaves roughly sixteen milliseconds per frame for all simulation, culling and drawing.
- The discipline trades absolute physical accuracy for perceptual plausibility and responsiveness.
- ### Mechanisms
- Rasterisation converts geometry into fragments efficiently, complemented increasingly by hardware ray tracing for selected effects.
- Level-of-detail, frustum and occlusion culling reduce the work submitted to the GPU.
- Programmable shaders compute lighting, shadows and post-processing on the GPU in parallel.
- Temporal techniques reuse information across frames to amortise cost and improve stability.
- ### Applications
- Powers the [[Game Engine]] ecosystem and interactive simulations.
- Drives head-mounted immersive rendering where motion-to-photon latency is critical.
- Supports scientific and architectural visualisation requiring interactive navigation.
- ### Provenance

