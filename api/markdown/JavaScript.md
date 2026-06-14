public:: true

# JavaScript
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c57050455ebb7fb5bf2774aedd6fdbcbe835b3832a6179a17d4a7429054cf27f",
  "@type": "Page",
  "vc:slug": "java-script",
  "title": "JavaScript",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "JavaScript"
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
  "@id": "urn:ngm:class:java-script",
  "@type": "Class",
  "label": "JavaScript",
  "definition": "JavaScript is a high-level, dynamically typed, interpreted programming language standardised as ECMAScript by ECMA International, originally designed by Brendan Eich at Netscape in 1995 to add interactivity to web pages. It features first-class functions, prototype-based object orientation, event-driven and asynchronous programming via the event loop, and runs natively in all major web browsers as the sole client-side scripting language. Beyond browsers, server-side runtimes such as Node.js and Deno have extended JavaScript into backend services, command-line tooling, and cloud functions, making it one of the most widely deployed programming languages across the full web stack.",
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
    "standardizedBy": [
      {"@id": "urn:ngm:class:ecmascript", "label": "ECMAScript"},
      {"@id": "urn:ngm:class:ecma-international", "label": "ECMA International"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:javascript-engine", "label": "JavaScript Engine"},
      {"@id": "urn:ngm:class:event-loop", "label": "Event Loop"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:dom-api", "label": "DOM API"},
      {"@id": "urn:ngm:class:node-js", "label": "Node.js"},
      {"@id": "urn:ngm:class:web-assembly", "label": "WebAssembly"},
      {"@id": "urn:ngm:class:typescript", "label": "TypeScript"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:web-application", "label": "Web Application"},
      {"@id": "urn:ngm:class:single-page-application", "label": "Single Page Application"},
      {"@id": "urn:ngm:class:progressive-web-app", "label": "Progressive Web App"},
      {"@id": "urn:ngm:class:serverless-computing", "label": "Serverless Computing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:prototype-chain", "label": "Prototype Chain"},
      {"@id": "urn:ngm:class:asynchronous-programming", "label": "Asynchronous Programming"},
      {"@id": "urn:ngm:class:json", "label": "JSON"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:ecmascript", "label": "ECMAScript"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:python", "label": "Python"},
      {"@id": "urn:ngm:class:webassembly", "label": "WebAssembly"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:html", "label": "HTML"},
      {"@id": "urn:ngm:class:css", "label": "CSS"},
      {"@id": "urn:ngm:class:web-browser", "label": "Web Browser"},
      {"@id": "urn:ngm:class:npm", "label": "NPM"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ecmascript", "label": "ECMAScript"},
    {"@id": "urn:ngm:class:js", "label": "JS"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:java-script:2d1ae8e7aa29",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c57050455ebb7fb5bf2774aedd6fdbcbe835b3832a6179a17d4a7429054cf27f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
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
  - JavaScript is a high-level, dynamically typed [[Programming Language]] standardised as [[ECMAScript]] by [[ECMA International]], first designed by Brendan Eich at Netscape in 1995 to add interactivity to web pages. It operates within a single-threaded [[Event Loop]] that handles asynchronous I/O without blocking, making it suitable for both [[Web Application]] front-ends and server-side services via runtimes such as [[Node.js]]. Its prototype-based object model, first-class functions, closures, and ubiquitous browser presence have made it one of the most widely deployed programming languages in existence.

- ### Overview
  - JavaScript was conceived as a lightweight scripting companion to [[HTML]] and [[CSS]], executed directly in the [[Web Browser]] without a separate compilation step. The language became the exclusive scripting language supported natively by all major browsers, cementing its role as the foundation of interactive web experiences.
  - Standardisation through the ECMAScript specification (maintained by the TC39 committee of [[ECMA International]]) ensures cross-browser consistency. Major annual releases — ES2015 (ES6), ES2017, ES2020, ES2022 — introduced classes, async/await, modules, optional chaining, and top-level await, substantially modernising the language.
  - The [[Node.js]] runtime (using the V8 [[JavaScript Engine]]) extended JavaScript to server processes, enabling full-stack development in a single language. Competing runtimes [[Deno]] and Bun offer alternative runtime environments with native TypeScript support and improved security defaults.
  - [[TypeScript]], a statically typed superset of JavaScript, has become the de-facto standard for large-scale JavaScript projects, compiling back to plain JavaScript for deployment.
  - [[WebAssembly]] provides a compilation target for performance-critical code that runs alongside JavaScript in the browser, extending the browser platform to languages such as C++, Rust, and Go.

- ### Key Components
  - **Language Core**
    - Dynamic typing and type coercion via the [[Prototype Chain]]
    - First-class functions, closures, and higher-order programming
    - [[Asynchronous Programming]] primitives: callbacks, Promises, async/await
    - ES Modules (`import`/`export`) for static dependency graphs
    - Destructuring, spread/rest operators, template literals
  - **Runtime Model**
    - [[Event Loop]] — single-threaded, non-blocking I/O architecture
    - Call stack, task queue, and microtask queue execution model
    - Garbage collection via mark-and-sweep in V8, SpiderMonkey, JavaScriptCore
  - **Browser Platform**
    - [[DOM API]] — programmatic access to and manipulation of HTML document structure
    - Web APIs: Fetch, WebSockets, Web Workers, Service Workers, WebGL
    - [[Progressive Web App]] capabilities via Service Workers and Cache API
    - [[WebAssembly]] integration for near-native compute within the browser
  - **Server-Side and Tooling**
    - [[Node.js]] — event-driven server runtime; powers REST services, CLI tools, build pipelines
    - [[NPM]] (Node Package Manager) — the world's largest open-source package registry
    - Bundlers: Webpack, Rollup, Vite, esbuild
    - Test runners: Jest, Vitest, Mocha
  - **Supersets and Transpilers**
    - [[TypeScript]] — static type annotations, interfaces, generics compiled to JavaScript
    - Babel — transpiles modern ECMAScript to older syntax for broader compatibility
    - JSX — XML-in-JavaScript syntax extension used by [[React]]

- ### Applications and Use Cases
  - **Front-End Web Development**
    - Building [[Single Page Application]] interfaces using frameworks [[React]], Vue.js, Angular, and Svelte
    - DOM manipulation, form validation, client-side routing, and state management
    - Progressive enhancement and graceful degradation across device types
  - **Server-Side Development**
    - REST and GraphQL [[REST API]] services via Express, Fastify, Hapi on [[Node.js]]
    - Real-time applications (chat, collaborative editing) using WebSockets and Socket.IO
    - Middleware and proxy layers in microservice architectures
  - **Serverless and Edge Computing**
    - [[Serverless Computing]] functions on AWS Lambda, Cloudflare Workers, Vercel Edge
    - Edge-side rendering and personalisation at CDN nodes
  - **Build Tooling and DevOps**
    - Task runners, code linters (ESLint), formatters (Prettier), bundlers
    - CI pipeline scripting and code generation tooling
  - **Data Visualisation and Graphics**
    - D3.js for [[Data Visualisation]], Chart.js, Three.js for 3-D WebGL rendering
    - Integration with [[Spatial Computing]] APIs: WebXR, A-Frame, Babylon.js
  - **Machine Learning in the Browser**
    - TensorFlow.js and ONNX Runtime Web enabling on-device [[Machine Learning]] inference
    - Large-language model integrations via streaming [[REST API]] calls from the browser
  - **Mobile and Desktop Applications**
    - React Native for cross-platform mobile apps targeting iOS and Android
    - Electron for desktop applications (VS Code, Slack, Figma use Electron)

- ### Relationships
  - standardizedBy:: [[ECMAScript]]
  - standardizedBy:: [[ECMA International]]
  - requires:: [[JavaScript Engine]]
  - requires:: [[Event Loop]]
  - hasPart:: [[DOM API]]
  - hasPart:: [[Node.js]]
  - hasPart:: [[WebAssembly]]
  - hasPart:: [[TypeScript]]
  - enables:: [[Web Application]]
  - enables:: [[Single Page Application]]
  - enables:: [[Progressive Web App]]
  - enables:: [[Serverless Computing]]
  - uses:: [[Prototype Chain]]
  - uses:: [[Asynchronous Programming]]
  - uses:: [[JSON]]
  - uses:: [[REST API]]
  - implements:: [[ECMAScript]]
  - contrastsWith:: [[Python]]
  - contrastsWith:: [[WebAssembly]]
  - relatedTo:: [[HTML]]
  - relatedTo:: [[CSS]]
  - relatedTo:: [[Web Browser]]
  - relatedTo:: [[NPM]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Spatial Computing]]

- ### Standards and Context
  - **ECMAScript Specification** — JavaScript is formally specified as ECMAScript (ECMA-262). The TC39 committee, comprising browser vendors, major technology companies, and community members, governs language evolution through a staged proposal process (Stage 0–4).
  - **Key Releases**
    - ES5 (2009) — strict mode, JSON support, Array extras
    - ES2015 / ES6 — classes, arrow functions, let/const, Promises, modules, destructuring
    - ES2017 — async/await, Object.entries/values
    - ES2020 — optional chaining (`?.`), nullish coalescing (`??`), BigInt, dynamic import
    - ES2022 — top-level await, class fields, Array.at()
  - **WHATWG and W3C** — browser Web APIs (DOM, Fetch, Service Worker, WebXR) are standardised separately by the Web Hypertext Application Technology Working Group ([[WHATWG]]) and the World Wide Web Consortium ([[W3C]]).
  - **OpenJS Foundation** — stewards major JavaScript projects including [[Node.js]], jQuery, and Electron under a vendor-neutral governance model.
  - **Security Considerations**
    - Cross-Site Scripting ([[XSS]]) is the most common JavaScript-related vulnerability; Content Security Policy mitigates injection risks.
    - Supply chain attacks via [[NPM]] packages represent a significant [[Security]] concern in large dependency graphs.
    - Browser sandbox isolation prevents direct filesystem or OS access, but prototype pollution and deserialization bugs remain attack surfaces.

- ### Provenance
  - sources:: MDN Web Docs (developer.mozilla.org), ECMA-262 specification, Node.js documentation, TC39 proposals repository
  - updated:: 2026-06-13
