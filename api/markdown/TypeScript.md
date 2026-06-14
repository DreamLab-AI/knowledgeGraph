public:: true

# TypeScript
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ce5e3912e70101a60f278a73b4d30f085d209b152de076da4280a75b9085e94",
  "@type": "Page",
  "vc:slug": "type-script",
  "title": "TypeScript",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TypeScript"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:type-script",
  "@type": "Class",
  "label": "TypeScript",
  "definition": "TypeScript is a statically typed superset of JavaScript developed and maintained by Microsoft that adds optional type annotations, interfaces, generics, and compile-time type checking to the JavaScript language. Source code is transpiled by the TypeScript compiler (tsc) to plain JavaScript, making it compatible with any JavaScript runtime or browser without requiring runtime changes. The type system enables large-scale application development by surfacing errors at development time, improving editor tooling such as intelligent autocompletion, safe refactoring, and inline documentation. TypeScript has become the dominant choice for enterprise front-end and Node.js back-end development, underpinning major frameworks such as Angular, NestJS, and Deno.",
  "domain": "infrastructure",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-language",
      "label": "Programming Language"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      },
      {
        "@id": "urn:ngm:class:generics",
        "label": "Generics"
      },
      {
        "@id": "urn:ngm:class:interface",
        "label": "Interface"
      },
      {
        "@id": "urn:ngm:class:typescript-compiler",
        "label": "TypeScript Compiler"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:javascript-ecosystem",
        "label": "JavaScript Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:javascript",
        "label": "JavaScript"
      },
      {
        "@id": "urn:ngm:class:node-js",
        "label": "Node.js"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      },
      {
        "@id": "urn:ngm:class:static-analysis",
        "label": "Static Analysis"
      },
      {
        "@id": "urn:ngm:class:refactoring",
        "label": "Refactoring"
      },
      {
        "@id": "urn:ngm:class:web-application",
        "label": "Web Application"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ecmascript",
        "label": "ECMAScript"
      },
      {
        "@id": "urn:ngm:class:npm",
        "label": "npm"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:structural-typing",
        "label": "Structural Typing"
      },
      {
        "@id": "urn:ngm:class:type-inference",
        "label": "Type Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:abstract-syntax-tree",
        "label": "Abstract Syntax Tree"
      },
      {
        "@id": "urn:ngm:class:language-server-protocol",
        "label": "Language Server Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:react",
        "label": "React"
      },
      {
        "@id": "urn:ngm:class:angular",
        "label": "Angular"
      },
      {
        "@id": "urn:ngm:class:deno",
        "label": "Deno"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:microsoft",
        "label": "Microsoft"
      },
      {
        "@id": "urn:ngm:class:ecma-international",
        "label": "ECMA International"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:javascript",
        "label": "JavaScript"
      },
      {
        "@id": "urn:ngm:class:flow-type-checker",
        "label": "Flow Type Checker"
      },
      {
        "@id": "urn:ngm:class:dart",
        "label": "Dart"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transpilation",
        "label": "Transpilation"
      },
      {
        "@id": "urn:ngm:class:webpack",
        "label": "Webpack"
      },
      {
        "@id": "urn:ngm:class:eslint",
        "label": "ESLint"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ts",
      "label": "TS"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:type-script:6348933a3b3c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4ce5e3912e70101a60f278a73b4d30f085d209b152de076da4280a75b9085e94"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Engineering]]",
      "resolved": "urn:visionflow:linked:software-engineering",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - TypeScript is a statically typed, compiled superset of [[JavaScript]] created by Microsoft and first released in 2012. It adds an optional [[Type System]] with structural typing, [[Generics]], [[Interface]] declarations, and rich compile-time error detection to the JavaScript language, while remaining fully backward-compatible. The [[TypeScript Compiler]] (tsc) transforms TypeScript source into plain [[JavaScript]] that executes in any browser, [[Node.js]] runtime, or [[Deno]] environment. Its adoption across [[Web Application]] development, server-side services, and even [[Embedded Systems]] tooling reflects a maturity level comparable to Java or C# in enterprise software contexts.

- ### Overview
  - TypeScript addresses a fundamental weakness in [[JavaScript]]: the absence of static typing in a dynamically typed language used at massive scale. As codebases grow beyond a single developer or a few thousand lines, the lack of compile-time guarantees makes reasoning about code increasingly difficult and error-prone.
  - TypeScript introduces optional yet progressively enforceable types: developers may annotate variables, function parameters, return types, and object shapes. The compiler validates these annotations against actual usage, flagging type mismatches before any code runs.
  - Because TypeScript compiles down to [[JavaScript]], there is no runtime overhead and no dependency on any TypeScript-specific runtime. Type information is erased at compile time, leaving only clean JavaScript output. This design decision means TypeScript integrates seamlessly into existing [[JavaScript Ecosystem]] toolchains.
  - TypeScript's structural type system (as opposed to nominal typing) checks compatibility by the shape of objects rather than their declared class hierarchy, aligning naturally with JavaScript's prototype-based object model.
  - Editor integration via the [[Language Server Protocol]] provides instant feedback, intelligent autocompletion, and safe rename-refactoring across entire codebases — capabilities that were difficult or impossible to offer for dynamically typed JavaScript.

- ### Key Components
  - **[[TypeScript Compiler]] (tsc)**
    - The reference compiler that type-checks and [[Transpilation|transpiles]] TypeScript to JavaScript.
    - Configurable via `tsconfig.json`, controlling strictness, target [[ECMAScript]] version, module format, and path resolution.
    - Produces declaration files (`.d.ts`) that expose type information to consumers without shipping source code.
  - **[[Type System]]**
    - Primitive types: `string`, `number`, `boolean`, `symbol`, `bigint`, `null`, `undefined`, `void`, `never`, `unknown`, `any`.
    - Composite types: [[Interface]], `type` aliases, union types, intersection types, tuple types, mapped types, conditional types.
    - Utility types: `Partial<T>`, `Required<T>`, `Readonly<T>`, `Record<K,V>`, `Pick<T,K>`, `Omit<T,K>` and more from the standard library.
  - **[[Type Inference]]**
    - TypeScript infers types without explicit annotation in most cases, reducing boilerplate while maintaining safety.
    - Control-flow analysis narrows union types within `if`/`switch` branches automatically.
  - **[[Generics]]**
    - Parameterised types that allow reusable, type-safe data structures and functions.
    - Equivalent in expressiveness to generics in Java or C#, with constraints (`extends`) and default type parameters.
  - **[[Interface]] and `type` Aliases**
    - Interfaces describe object shapes and can be merged (declaration merging) across multiple files — useful for extending third-party library types.
    - `type` aliases support unions, intersections, and computed types that interfaces cannot express.
  - **[[Structural Typing]]**
    - Type compatibility is based on structural shape: any object with the required properties satisfies an interface, regardless of what class it belongs to.
    - Enables duck-typing patterns natural to [[JavaScript]] while still providing compile-time verification.
  - **Declaration Files (`.d.ts`)**
    - Provide type information for JavaScript libraries that have no TypeScript source.
    - The DefinitelyTyped community repository (`@types/*`) supplies declaration files for thousands of popular packages.
  - **[[Abstract Syntax Tree]] Tooling**
    - The TypeScript compiler exposes a public API for AST traversal used by linters ([[ESLint]]), code generators, and language servers.
    - ts-morph and ts-query build higher-level tooling on top of this API.

- ### Applications and Use Cases
  - **Large-Scale Front-End Development**
    - [[Angular]] adopted TypeScript as its primary language from version 2 onwards, making it the default for Angular projects.
    - [[React]] projects commonly use TypeScript for component prop-type checking, reducing runtime errors and improving developer experience.
    - Vue.js 3 was rewritten in TypeScript, providing first-class type support.
  - **Server-Side and Full-Stack Development**
    - [[Node.js]] applications written in TypeScript benefit from the same compile-time guarantees as front-end code.
    - NestJS, a popular Node.js framework, is TypeScript-first and uses decorators extensively for dependency injection.
    - [[Deno]], a modern JavaScript/TypeScript runtime, executes TypeScript natively without a separate compile step.
  - **[[API Design]] and Contract Definition**
    - TypeScript interfaces and types serve as machine-verifiable API contracts between services, reducing integration bugs.
    - Tools such as tRPC use TypeScript types to create end-to-end type-safe RPC APIs between client and server.
    - OpenAPI generators produce TypeScript types from OpenAPI specifications, bridging REST API descriptions to typed client code.
  - **Developer Tooling and CLI Tools**
    - [[Webpack]], Vite, and esbuild have TypeScript-aware plugins.
    - Major cloud provider SDKs (AWS, Azure, GCP) ship TypeScript types, enabling typed infrastructure-as-code.
    - [[Large Language Model]] SDKs such as the Anthropic TypeScript SDK and OpenAI Node.js SDK are TypeScript-first.
  - **Testing and Quality Assurance**
    - [[Static Analysis]] via TypeScript catches a class of bugs (null dereferences, wrong argument types) before tests run.
    - Integration with [[ESLint]] via `@typescript-eslint` provides linting rules aware of type information.
    - Vitest and Jest both support TypeScript out of the box through ts-jest or native ESM transforms.
  - **Embedded and Edge Environments**
    - TypeScript compiles to JavaScript that runs on edge runtimes (Cloudflare Workers, Fastly Compute) and embedded environments (Espruino).

- ### Relationships
  - partOf:: [[JavaScript Ecosystem]]
  - requires:: [[JavaScript]]
  - requires:: [[Node.js]]
  - dependsOn:: [[ECMAScript]]
  - dependsOn:: [[npm]]
  - implements:: [[Structural Typing]]
  - implements:: [[Type Inference]]
  - hasPart:: [[Type System]]
  - hasPart:: [[Generics]]
  - hasPart:: [[Interface]]
  - hasPart:: [[TypeScript Compiler]]
  - enables:: [[Software Engineering]]
  - enables:: [[Static Analysis]]
  - enables:: [[Refactoring]]
  - enables:: [[Web Application]]
  - uses:: [[Abstract Syntax Tree]]
  - uses:: [[Language Server Protocol]]
  - supports:: [[React]]
  - supports:: [[Angular]]
  - supports:: [[Deno]]
  - standardizedBy:: [[Microsoft]]
  - standardizedBy:: [[ECMA International]]
  - contrastsWith:: [[JavaScript]]
  - contrastsWith:: [[Flow Type Checker]]
  - contrastsWith:: [[Dart]]
  - bridges-to:: [[Large Language Model]]
  - bridges-to:: [[API Design]]
  - relatedTo:: [[Transpilation]]
  - relatedTo:: [[Webpack]]
  - relatedTo:: [[ESLint]]

- ### Standards and Context
  - TypeScript is maintained by Microsoft under the Apache 2.0 licence and developed as an open-source project on GitHub.
  - The language tracks [[ECMAScript]] standards closely; each new ECMAScript proposal is typically supported in TypeScript before it reaches final standardisation in [[ECMA International]].
  - The TypeScript specification historically followed its own language specification document, though the compiler itself is now considered the normative reference.
  - Declaration files for third-party libraries are coordinated through the DefinitelyTyped repository, which undergoes peer review and automated testing before publication to [[npm]].
  - The [[Language Server Protocol]], standardised by Microsoft, enables TypeScript's language intelligence to be embedded in any compliant editor (VS Code, Neovim, Emacs, JetBrains IDEs).
  - Strict mode (`"strict": true` in tsconfig) enables a battery of the most impactful type-checking options, including `strictNullChecks`, `noImplicitAny`, and `strictFunctionTypes`, and is recommended for all new projects.

- ### Provenance
  - sources:: Microsoft TypeScript documentation; ECMAScript specification; DefinitelyTyped repository; Angular, NestJS, and Deno project documentation
  - updated:: 2026-06-13
