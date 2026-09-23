
Lumen is Unreal Engine's fully dynamic global illumination and reflections system that computes indirect lighting in real time without precomputed lightmaps. It uses a combination of screen-space tracing, software ray tracing against signed distance fields, and optional hardware ray tracing to produce diffuse interreflection and reflections that update as scenes and lights change. Lumen enables physically plausible lighting in interactive applications and games.

- ### Content
  - Lumen scales across hardware by selecting software or hardware ray-tracing paths and adjusting trace resolution. It removes the lighting-bake workflow, letting artists move lights and geometry interactively, at the cost of careful performance tuning for high-resolution reflections and large open worlds.

