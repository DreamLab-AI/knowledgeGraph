---
okf_version: "0.2"
type: Class
title: TypeScript
resource: urn:ngm:class:type-script
domain: infrastructure
description: TypeScript is a statically typed superset of JavaScript developed and maintained by Microsoft that adds optional type annotations, interfaces, generics, and compile-time type checking to the JavaScript language. Source code is transpiled by the TypeScript compiler (tsc) to plain JavaScript, making it compatible with any JavaScript runtime or browser without requiring runtime changes. The type syst
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:programming-language
hasPart:
  - urn:ngm:class:type-system
  - urn:ngm:class:interface
  - urn:ngm:class:generics
  - urn:ngm:class:typescript-compiler
requires:
  - urn:ngm:class:java-script
  - urn:ngm:class:node-js
enables:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:static-analysis
  - urn:ngm:class:refactoring
  - urn:ngm:class:web-application
dependsOn:
  - urn:ngm:class:ecmascript
  - urn:ngm:class:npm
implements:
  - urn:ngm:class:structural-typing
  - urn:ngm:class:type-inference
contrastsWith:
  - urn:ngm:class:java-script
  - urn:ngm:class:flow-type-checker
  - urn:ngm:class:dart
bridgesTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:api-design
uses:
  - urn:ngm:class:language-server-protocol
  - urn:ngm:class:abstract-syntax-tree
supports:
  - urn:ngm:class:re-act
  - urn:ngm:class:angular
  - urn:ngm:class:deno
standardizedBy:
  - urn:ngm:class:microsoft
  - urn:ngm:class:ecma-international
partOf:
  - urn:ngm:class:javascript-ecosystem
relatedTo:
  - urn:ngm:class:transpilation
  - urn:ngm:class:webpack
  - urn:ngm:class:eslint
---

# TypeScript

TypeScript is a statically typed superset of JavaScript developed and maintained by Microsoft that adds optional type annotations, interfaces, generics, and compile-time type checking to the JavaScript language. Source code is transpiled by the TypeScript compiler (tsc) to plain JavaScript, making it compatible with any JavaScript runtime or browser without requiring runtime changes. The type system enables large-scale application development by surfacing errors at development time, improving editor tooling such as intelligent autocompletion, safe refactoring, and inline documentation. TypeScript has become the dominant choice for enterprise front-end and Node.js back-end development, underpinning major frameworks such as Angular, NestJS, and Deno.
