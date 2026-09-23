
A shader compiler is the toolchain component that translates high-level shading-language source code, such as GLSL or HLSL, into an intermediate representation or the native instruction set executed by a GPU. It performs parsing, optimisation, register allocation, and code generation so that programmable graphics and compute stages run efficiently on diverse hardware. Shader compilation may occur ahead of time or just in time, and its results are frequently cached to avoid costly recompilation.

- A shader compiler is a [[Compiler]] that translates shading-language source into GPU-executable code.
- It is part of the [[Graphics Pipeline]] and the [[Graphics API]] toolchain.
- It consumes [[GLSL]] or [[HLSL]] and often emits [[SPIR-V]].
- It enables programmable stages including the [[Compute Shader]].
- ### Overview
- Shaders are written in high-level languages that no GPU executes directly, so a compiler bridges source to hardware instructions.
- The compiler parses, optimises, allocates registers, and generates code targeted at a specific GPU architecture or an intermediate representation.
- Modern stacks often compile to a portable intermediate such as SPIR-V, then a driver back-end finalises native code.
- Compilation may be ahead of time during build or just in time at load, with caching to amortise cost.
- ### Mechanisms
- Lexing and parsing of shading-language source.
- Optimisation passes and register allocation.
- Generation of intermediate representation or native ISA.
- Pipeline and shader caching to avoid recompilation stalls.
- ### Applications
- Building graphics and compute pipelines in game and rendering engines.
- Driver-side finalisation of portable intermediate bytecode.
- Cross-platform shader portability via common intermediate formats.
- Reducing runtime hitching through precompiled pipeline caches.
- ### Provenance

