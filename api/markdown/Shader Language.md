iri:: http://narrativegoldmine.com/spatial-computing#ShaderLanguage
uri:: urn:visionclaw:concept:spatial-computing:shader-language
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:shader-language
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Shader Language
content-hash:: sha256-12-0eca651c4a3a
legacy-term-id:: MV-9139
status:: draft
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - ShaderLanguage is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:ShaderLanguage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # ShaderLanguage
  ShaderLanguage provides the syntax and semantics for expressing GPU-executable algorithms controlling rendering pipelines. Dominant languages include GLSL (OpenGL Shading Language) for OpenGL and WebGL with C-like syntax and built-in vector/matrix types, HLSL (High-Level Shading Language) for DirectX featuring similar syntax with subtle semantic differences, Cg (C for Graphics) historically used for cross-platform development before standardization, Metal Shading Language for Apple platforms optimizing iOS and macOS performance, and emerging languages like WGSL (WebGPU Shading Language) for next-generation web graphics. Shader languages support common programming constructs (conditionals, loops, functions) while restricting features incompatible with parallel execution like dynamic memory allocation or recursion. Specialized data types include vectors (vec2/vec3/vec4), matrices (mat3/mat4), samplers for texture access, and interpolated varyings passing data between shader stages. Modern shader compilation involves cross-compilation to intermediate representations like SPIR-V enabling tool-chain flexibility, runtime compilation optimizing for specific hardware, and shader variant generation handling material permutations. Domain-specific extensions include compute shader intrinsics, ray tracing shaders (ray generation, closest-hit, miss), and mesh shaders for programmable primitive processing.
  - https://www.khronos.org/files/opengles_shading_language.pdf - GLSL specification
  - https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-reference - HLSL reference
  - https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf - Metal Shading Language specification
  - https://gpuweb.github.io/gpuweb/wgsl/ - WGSL specification for WebGPU

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
