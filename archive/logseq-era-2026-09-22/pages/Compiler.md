public:: true

# Compiler
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compiler",
  "@type": "Page",
  "vc:slug": "compiler",
  "title": "Compiler",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compiler",
  "@type": "Class",
  "label": "Compiler",
  "definition": "A software system that translates source code written in a high-level programming language into a lower-level representation — typically machine code, bytecode, or an intermediate representation — performing lexical analysis, syntactic parsing, semantic checking, optimisation, and code emission in a structured pipeline. Compilers are foundational to software development, enabling human-readable programs to run efficiently on hardware.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:code-generation", "label": "Code Generation"},
      {"@id": "urn:ngm:class:runtime-environment", "label": "Runtime Environment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:opcodes", "label": "Opcodes"},
      {"@id": "urn:ngm:class:onnx-runtime", "label": "ONNX Runtime"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-augmented-software-engineering", "label": "AI-Augmented Software Engineering"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Compiler is a program that reads source code in one language and produces equivalent output in another — most commonly translating a high-level [[Programming Language]] (C, Rust, Java, Swift) into native machine code, bytecode (JVM, WASM), or an intermediate representation. The compilation pipeline comprises multiple passes: a lexer tokenises source text, a parser constructs an abstract syntax tree, semantic analysis enforces type rules and scope, one or more optimisation phases transform the intermediate representation, and a back-end emits target code. Compilers are distinguished from interpreters by generating a reusable compiled artefact rather than executing code directly.

- ### Relationships
  - Compilers consume [[Programming Language]] definitions as their primary input specification. They produce artefacts that drive [[Code Generation]] and initialise [[Runtime Environment]] instances. The bytecodes they emit are decoded as [[Opcodes]] at execution time. Modern machine learning compilers such as TVM and XLA target AI hardware, bridging into [[ONNX Runtime]] compatibility layers. They increasingly support [[AI-Augmented Software Engineering]] toolchains through static analysis and language server integrations.

- ### Content
  - The history of compilers begins with Grace Hopper's A-0 system (1952), the first program that translated symbolic mathematical code into machine instructions, and FORTRAN (1957), the first commercially successful high-level language compiler, which demonstrated that machine-generated code could match hand-written assembly in performance. The Dragon Book (Aho, Sethi, Ullman, 1977; revised 1986) codified compiler theory and influenced curriculum and implementation for decades.

  - Modern compiler architectures are dominated by LLVM (Low Level Virtual Machine), an open-source compiler infrastructure released by Chris Lattner in 2003. LLVM provides a common intermediate representation (LLVM IR) and a suite of optimisation passes, enabling diverse front-ends (Clang for C/C++/Objective-C, Rust's rustc, Swift, Kotlin/Native) to share a common back-end targeting x86, ARM, WASM, RISC-V, and GPU instruction sets. GCC remains widely used in Linux systems programming and embedded contexts. Just-in-time (JIT) compilers — HotSpot for the JVM, V8 for JavaScript — compile at runtime, trading compilation overhead for profile-guided optimisation of hot code paths.

  - AI and machine learning have introduced specialised compiler toolchains. TVM (Apache), XLA (Google), and Triton (OpenAI) optimise neural network computation graphs for GPU, TPU, and custom silicon, applying operator fusion, memory layout optimisation, and hardware-specific instruction selection. These ML compilers bridge high-level framework graphs (PyTorch, TensorFlow, JAX) to the raw compute capabilities of accelerators, achieving throughput improvements of 2–10× over unoptimised execution.

  - In 2024–2025, LLM-assisted compiler development is an active research area: language models are used to suggest optimisation strategies, synthesise compiler passes from natural language specifications, and automatically fix compilation errors. Simultaneously, compilers targeting WebAssembly (WASM) are expanding the portability of native code to browser and serverless environments, while MLIR (Multi-Level Intermediate Representation) — an LLVM sub-project — is providing the infrastructure for defining custom compiler dialects tailored to domain-specific hardware such as neuromorphic chips and photonic processors.