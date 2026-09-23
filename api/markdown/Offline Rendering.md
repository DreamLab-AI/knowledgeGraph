
Offline rendering is the production of images or animation sequences where computation time per frame is not constrained to interactive rates, allowing each frame to take seconds, minutes, or hours to achieve maximum visual fidelity. It is the counterpart to real-time rendering and is typical of film, visual effects, and high-end visualisation, where physically based light transport such as path tracing is feasible. Offline rendering is commonly executed across render farms to parallelise the heavy computation.

- Offline rendering is a [[Computer Graphics]] mode that prioritises fidelity over interactivity, allowing long per-frame compute.
- It directly contrasts with [[Real-Time Rendering]].
- It relies on physically based [[Path Tracing]] and [[Global Illumination]].
- It underpins [[Film Production]] and [[Visual Effects]].
- ### Overview
- Because frames are not required at interactive rates, offline rendering can simulate complex light transport, volumetrics, and high sample counts.
- It is the dominant approach for cinematic imagery, product visualisation, and architectural presentation where photorealism matters.
- Workloads are typically distributed across render farms to parallelise the large compute demand.
- The trade-off is latency: results are not available instantly, unlike real-time pipelines.
- ### Key aspects
- Unbounded per-frame compute budget enabling high sample counts.
- Physically based light transport via path and ray tracing.
- Distributed execution across many machines or accelerators.
- Tight integration with compositing and visual-effects workflows.
- ### Applications
- Feature-film and animation rendering.
- Visual effects and digital matte work.
- High-end product and architectural visualisation.
- Reference imagery for validating real-time approximations.
- ### Provenance

