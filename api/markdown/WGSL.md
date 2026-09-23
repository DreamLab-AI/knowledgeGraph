
WGSL (WebGPU Shading Language) is the shader programming language of the WebGPU API, used to write vertex, fragment, and compute shaders that run on the GPU from web applications. Designed for safety and portability, it maps cleanly onto native backends (Vulkan, Metal, Direct3D) while avoiding the platform-specific behaviours of older shading languages. WGSL is central to high-performance graphics and GPU compute on the modern web.

- ### Content
  - WGSL has a strongly typed, Rust-influenced syntax with explicit binding and group attributes for resources, and is compiled by the browser to the host platform's native shader format. Its design prioritises deterministic, portable behaviour and security sandboxing, making it the canonical way to express GPU programs in WebGPU-based engines and compute workloads.

