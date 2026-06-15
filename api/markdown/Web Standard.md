public:: true

# Web Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5ae547043e6fa56d394f48be32ef345f79ad63c5c9aefc67d3a9b2bb525de5db",
  "@type": "Page",
  "vc:slug": "web-standard",
  "title": "Web Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9166"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Web Standard"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-standard",
  "@type": "Class",
  "label": "Web Standard",
  "definition": "A Web Standard is a formally published technical specification developed by recognised standards bodies—primarily the W3C, WHATWG, IETF, and ECMA International—that defines interoperable behaviours, data formats, APIs, or protocols for the open web. These specifications undergird every browser-rendered application by guaranteeing that HTML, CSS, JavaScript, and associated platform APIs behave consistently across vendor implementations. Web Standards are normative documents that pass through community drafting, multi-stakeholder review, and vendor implementation before reaching Recommendation or Living Standard status, ensuring that the web remains an open, royalty-free platform.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      },
      {
        "@id": "urn:ngm:class:css",
        "label": "CSS"
      },
      {
        "@id": "urn:ngm:class:java-script",
        "label": "JavaScript"
      },
      {
        "@id": "urn:ngm:class:web-api",
        "label": "Web API"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:whatwg",
        "label": "WHATWG"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:ecma-international",
        "label": "ECMA International"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Web Interoperability"
      },
      {
        "@id": "urn:ngm:class:progressive-web-app",
        "label": "Progressive Web App"
      },
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:browser-engine",
        "label": "Browser Engine"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vendor-lock-in",
        "label": "Vendor Lock-in"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:web-platform",
        "label": "Web Platform"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      },
      {
        "@id": "urn:ngm:class:web-gl",
        "label": "WebGL"
      },
      {
        "@id": "urn:ngm:class:web-assembly",
        "label": "WebAssembly"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:web-standards",
      "label": "Web Standards"
    },
    {
      "@id": "urn:ngm:class:open-web-standard",
      "label": "Open Web Standard"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5ae547043e6fa56d394f48be32ef345f79ad63c5c9aefc67d3a9b2bb525de5db"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **Web Standard** is a normative technical specification, produced by recognised bodies such as the [[W3C]], [[WHATWG]], [[IETF]], or [[ECMA International]], that defines how [[HTML]], [[CSS]], [[JavaScript]], and associated [[Web API]]s must behave across all conformant [[Browser Engine]]s. Standards exist on a maturity ladder—from early Editor's Draft through Working Draft, Candidate Recommendation, and ultimately W3C Recommendation or WHATWG Living Standard—ensuring that implementations from different vendors remain interoperable. The defining characteristic of a Web Standard is its royalty-free, openly accessible nature, which underpins the [[Open Web Platform]] and distinguishes it from [[Proprietary Technology]].

- ### Overview
  - Web Standards are the foundational agreements that make the web function as a single, cohesive platform across billions of devices and hundreds of browser versions.
  - Without convergence on shared specifications, the mid-1990s "browser wars" demonstrated how divergence creates fragmentation, inflating developer costs and locking users into specific vendors.
  - The standards process imposes rigour: a specification must achieve at least two interoperable implementations before achieving Recommendation status, so normative text reflects proven, shippable behaviour rather than aspiration.
  - The scope of Web Standards has expanded dramatically since HTML 4.01 — today encompassing graphics (via [[WebGL]] and [[WebGPU]]), immersive experiences (via [[WebXR]]), high-performance computation (via [[WebAssembly]]), real-time communication (via [[WebRTC]]), and offline-capable applications (via [[Service Worker]] and [[Progressive Web App]] APIs).
  - Collectively, these specifications constitute the [[Open Web Platform]], a layered architecture that sits above [[Network Protocol]]s and below application-level frameworks.

- ### Key Components
  - #### Core Document & Style Standards
    - [[HTML]] — the structural markup language; maintained as a Living Standard by the [[WHATWG]] and mirrored at the [[W3C]].
    - [[CSS]] — the cascade-based styling language, published as a modular family of Level 3 and Level 4 specifications (e.g. CSS Grid, CSS Flexbox, CSS Custom Properties).
    - [[DOM]] (Document Object Model) — the programmatic tree representation of an HTML or XML document; the primary target of [[JavaScript]] manipulation.
  - #### Scripting & Execution Standards
    - [[JavaScript]] (ECMAScript) — specified by [[ECMA International]] as ECMA-262; new editions released annually under TC39.
    - [[WebAssembly]] — a compact binary instruction format enabling near-native execution in the browser; maintained jointly by the [[W3C]] WebAssembly Working Group and the [[WHATWG]].
    - [[Web Worker]] and [[Service Worker]] — background thread primitives that extend JavaScript into concurrent and offline execution patterns.
  - #### Networking & Protocol Standards
    - [[HTTP]] (Hypertext Transfer Protocol) — defined by the [[IETF]] (RFC 9110 for HTTP semantics, RFC 9114 for HTTP/3 over QUIC).
    - [[WebSocket]] — a full-duplex, persistent TCP channel over HTTP Upgrade; standardised by IETF RFC 6455 and exposed via [[Web API]].
    - [[WebRTC]] — peer-to-peer audio, video, and data channels; defined jointly by [[IETF]] and [[W3C]].
    - [[CORS]] (Cross-Origin Resource Sharing) — a browser security mechanism governing cross-origin HTTP requests, specified in Fetch Standard.
  - #### Graphics & Immersive Standards
    - [[WebGL]] — a JavaScript binding for OpenGL ES 2.0/3.0, enabling GPU-accelerated 2D and 3D rendering in-browser.
    - [[WebGPU]] — a next-generation graphics and compute API offering lower-level GPU access than WebGL, addressing the capabilities of modern GPU architectures.
    - [[WebXR]] — the Device API for virtual and augmented reality experiences in the browser, bridging Web Standards with [[Spatial Computing]].
  - #### Security & Identity Standards
    - [[Content Security Policy]] (CSP) — a declarative [[Web Security]] mechanism mitigating cross-site scripting.
    - [[Web Authentication]] (WebAuthn) / FIDO2 — a passwordless [[Authentication]] standard enabling cryptographic credential binding to hardware authenticators.
    - [[Subresource Integrity]] (SRI) — cryptographic hash verification of externally hosted scripts and stylesheets.
  - #### Accessibility Standards
    - [[WAI-ARIA]] — roles, states, and properties enabling [[Accessibility]] for dynamic content and custom widgets.
    - [[WCAG]] (Web Content Accessibility Guidelines) — the normative benchmark for accessible web content, with legal force in many jurisdictions.

- ### Mechanisms
  - **Standardisation Process** — specifications progress through Editor's Draft → First Public Working Draft → Working Draft → Candidate Recommendation (requiring two implementations) → Proposed Recommendation → W3C Recommendation. The [[WHATWG]] operates a continuous Living Standard model without discrete release versions.
  - **Vendor Implementation** — browser vendors (Chromium/Blink, Firefox/Gecko, Safari/WebKit) implement specifications in their [[Browser Engine]], filing test results in the web-platform-tests (WPT) suite to demonstrate interoperability.
  - **Extensible Web Manifesto Pattern** — modern standards expose low-level primitives first (e.g. Streams API, Encoding API) so the developer community can build high-level abstractions, reducing standards latency.
  - **Living Standards** — the [[WHATWG]] HTML and URL standards update continuously, with fixes and new features landing incrementally rather than in versioned snapshots, accelerating implementation cycles.
  - **Royalty-Free Patent Commitment** — [[W3C]] Royalty-Free Licensing requirements ensure that implementors can ship conformant browsers without patent exposure, sustaining the open ecosystem.

- ### Applications
  - #### Web Application Development
    - Front-end frameworks such as React, Vue, and Angular compile to standards-compliant HTML, CSS, and JavaScript, relying on stable [[Web API]] contracts for DOM manipulation and event handling.
    - [[Progressive Web App]]s leverage Service Worker, Web App Manifest, and Push API standards to deliver native-like offline and notification experiences without an app store.
  - #### Immersive & Spatial Experiences
    - [[WebXR]] enables browser-native AR/VR applications on headsets including Meta Quest and Apple Vision Pro, drawing on [[WebGL]] or [[WebGPU]] for rendering — connecting Web Standards to [[Spatial Computing]] and [[Metaverse]] infrastructure.
    - [[WebGPU]] unlocks GPU compute shaders for in-browser machine-learning inference (e.g. running [[Large Language Model]] quantised weights via ONNX Runtime Web).
  - #### High-Performance Computation
    - [[WebAssembly]] ports C/C++/Rust codebases to the browser at near-native speed, enabling compute-intensive workloads (image processing, cryptography, scientific simulation) without plugins.
    - WebAssembly System Interface (WASI) extends the runtime beyond browsers to server-side and edge execution, bridging [[Distributed Systems]] deployments.
  - #### Security & Privacy
    - [[Web Authentication]] (WebAuthn) is the W3C standard that replaces passwords with [[Public Key Cryptography]]-based credentials, deployed by Google, Apple, Microsoft, and major financial institutions.
    - [[Privacy Sandbox]] initiative (driven partly by standards proposals such as Topics API and Protected Audience API) represents ongoing standardisation of privacy-preserving advertising signals.
  - #### Accessibility & Internationalisation
    - [[WAI-ARIA]] and [[WCAG]] are referenced in legislation (EN 301 549 in the EU, Section 508 in the US), making Web Standards directly implicated in [[Governance]] and regulatory compliance.

- ### Relationships
  - hasPart:: [[HTML]]
  - hasPart:: [[CSS]]
  - hasPart:: [[JavaScript]]
  - hasPart:: [[Web API]]
  - hasPart:: [[HTTP]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[WHATWG]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[ECMA International]]
  - enables:: [[Web Interoperability]]
  - enables:: [[Open Web Platform]]
  - enables:: [[Progressive Web App]]
  - enables:: [[WebXR]]
  - requires:: [[Browser Engine]]
  - requires:: [[Vendor Implementation]]
  - supports:: [[Accessibility]]
  - supports:: [[Web Security]]
  - supports:: [[Privacy]]
  - contrastsWith:: [[Proprietary Technology]]
  - contrastsWith:: [[Vendor Lock-in]]
  - relatedTo:: [[Open Source]]
  - relatedTo:: [[Interoperability]]
  - relatedTo:: [[Web Platform]]
  - bridgesTo:: [[WebGPU]]
  - bridgesTo:: [[WebGL]]
  - bridgesTo:: [[WebAssembly]]

- ### Standards & Context
  - #### Principal Bodies
    - **[[W3C]]** (World Wide Web Consortium) — the primary standards development organisation for the web, founded by Tim Berners-Lee in 1994; publishes Recommendations covering HTML (co-maintained with WHATWG), CSS, SVG, WebAssembly, WAI-ARIA, WCAG, WebAuthn, WebGPU, WebXR, and hundreds of other specifications.
    - **[[WHATWG]]** (Web Hypertext Application Technology Working Group) — founded in 2004 by Apple, Mozilla, and Opera in response to the W3C's XHTML direction; maintains Living Standards for HTML, DOM, Fetch, URL, Encoding, Streams, and Storage.
    - **[[IETF]]** (Internet Engineering Task Force) — publishes RFCs governing network-layer protocols used by the web: HTTP/1.1 (RFC 7230–7235), HTTP/2 (RFC 7540), HTTP/3 (RFC 9114), WebSocket (RFC 6455), TLS (RFC 8446), WebRTC media transport.
    - **[[ECMA International]]** — maintains ECMA-262 (ECMAScript/JavaScript), updated annually by TC39, and ECMA-404 (JSON data interchange format).
    - **[[Khronos Group]]** — manages WebGL and co-develops WebGPU alongside the W3C GPU for the Web Working Group; also governs OpenXR which informs [[WebXR]].
  - #### Key Specifications
    - HTML Living Standard (WHATWG)
    - CSS Snapshot (W3C, updated annually)
    - ECMAScript 2024 (ECMA-262)
    - WebAssembly Core Specification 2.0
    - WebGPU (W3C Candidate Recommendation)
    - WebXR Device API (W3C Working Draft)
    - Web Authentication (WebAuthn) Level 2 (W3C Recommendation)
    - WCAG 2.2 (W3C Recommendation, 2023)
  - #### Governance & Compliance
    - The W3C operates under a Process Document governing decision-making by Working Groups, the Advisory Committee, and the W3C Director.
    - Web Standards increasingly carry legal force: WCAG 2.1 AA is referenced in the EU Web Accessibility Directive and EN 301 549; HTTP security headers are mandated by government procurement frameworks (e.g. UK NCSC, US CISA guidance).
    - The [[Interoperability]] of Web Standards is enforced through the web-platform-tests (WPT) project, a shared test suite run continuously by browser vendors.

- ### Provenance
  - sources:: W3C Process Document; WHATWG Living Standards; IETF RFC index; ECMA-262 specification; MDN Web Docs; Khronos WebGL/WebGPU registry
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
