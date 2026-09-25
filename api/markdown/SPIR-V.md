SPIR-V is a binary intermediate representation for shaders and parallel-compute kernels standardised by the Khronos Group, used as the portable bytecode target for Vulkan, OpenCL, and OpenGL. High-level shading languages such as GLSL and HLSL compile to SPIR-V, which drivers then translate to native GPU instructions, decoupling source languages from hardware. It enables offline compilation, validation, and optimisation of graphics and compute programs across vendors.

### Content

- High-level languages like GLSL and HLSL compile to SPIR-V, which a [[Graphics API]] driver then lowers to vendor-specific GPU code, separating authoring languages from hardware targets. This intermediate layer lets a [[Rendering Pipeline]] precompile, validate, and optimise shaders offline, improving load times and enabling cross-vendor tooling and language interoperability.

