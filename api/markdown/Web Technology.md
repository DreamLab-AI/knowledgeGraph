public:: true

# Web Technology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5483ce336250cce2b4b5334e1a0885f83981f34d6607f32a85cff27e57020845",
  "@type": "Page",
  "vc:slug": "web-technology",
  "title": "Web Technology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9018"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Web Technology"
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
  "@id": "urn:ngm:class:web-technology",
  "@type": "Class",
  "label": "Web Technology",
  "definition": "Web Technology encompasses the protocols, standards, frameworks, and distributed infrastructure that enable the authoring, delivery, and interaction of resources on the World Wide Web and its decentralised successors. It spans the foundational internet protocols (HTTP/HTTPS, DNS, TLS), client-side and server-side execution environments (browsers, JavaScript runtimes, WebAssembly), and the emerging Web3 stack (content-addressed storage, blockchain naming, decentralised identity) that shifts data sovereignty from centralised operators to individual users. Together these layers define how information is addressed, transmitted, rendered, and secured across heterogeneous networked devices at planetary scale.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      },
      {
        "@id": "urn:ngm:class:css",
        "label": "CSS"
      },
      {
        "@id": "urn:ngm:class:javascript",
        "label": "JavaScript"
      },
      {
        "@id": "urn:ngm:class:webassembly",
        "label": "WebAssembly"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:ens",
        "label": "ENS"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      },
      {
        "@id": "urn:ngm:class:progressive-web-app",
        "label": "Progressive Web App"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralized-storage",
        "label": "Decentralized Storage"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:graphql",
        "label": "GraphQL"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:whatwg",
        "label": "WHATWG"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:web-browser",
        "label": "Web Browser"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:web-stack",
      "label": "Web Stack"
    },
    {
      "@id": "urn:ngm:class:internet-technology",
      "label": "Internet Technology"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-technology:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5483ce336250cce2b4b5334e1a0885f83981f34d6607f32a85cff27e57020845"
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
  - Web Technology encompasses the layered protocols, markup languages, scripting runtimes, and distributed infrastructure through which resources are addressed, transmitted, rendered, and secured on the [[World Wide Web]]. It spans [[HTTP]] and [[HTTPS]] for transport, [[HTML]], [[CSS]], and [[JavaScript]] for document structure and interactivity, [[WebAssembly]] for near-native compute in the browser, and the emerging [[Web3]] stack — including [[IPFS]] for content-addressed storage, [[ENS]] for decentralised naming, and [[Decentralised Identity]] frameworks — that shifts data sovereignty away from centralised operators toward individual users.

- ### Overview
  - The Web is a layered system built atop the internet's packet-switching substrate ([[TCP/IP]]). Each layer adds abstraction: [[TLS]] secures the channel, [[HTTP]] structures request-response semantics, [[DNS]] resolves human-readable names to IP addresses, and HTML/CSS/JavaScript compose the rendered document experience.
  - Web Technology is broadly divided into three generations:
    - **Web 1.0** — static, read-only hypertext documents served from centralised origins; dominated by HTML, FTP, and early [[HTTP]] versions.
    - **Web 2.0** — dynamic, read-write platforms; introduced [[AJAX]], [[REST API]], [[JavaScript]] frameworks, [[Content Delivery Network]] edge caching, and cloud-hosted databases enabling participatory social media and SaaS.
    - **Web3** — decentralised, read-write-own paradigm; built on [[Blockchain]], [[Smart Contract]] execution environments, content-addressed storage ([[IPFS]], Arweave), and self-sovereign identity ([[Decentralised Identity]], [[DIDs]]).
  - Why it matters: The Web is the primary channel for information access, commerce, collaboration, and application delivery for billions of users. Advances in Web Technology directly shape the economics of software distribution, the architecture of enterprise systems, and the feasibility of new paradigms such as [[Spatial Computing]] and in-browser [[Machine Learning]].

- ### Key Components
  - #### Transport and Addressing Protocols
    - [[HTTP]] / HTTP/2 / HTTP/3 (QUIC) — stateless request-response protocols defining methods (GET, POST, PUT, DELETE) and status codes.
    - [[HTTPS]] — HTTP over [[TLS]]; provides encryption, server authentication, and integrity protection via X.509 certificates.
    - [[DNS]] — hierarchical name resolution translating domain labels (e.g. `example.com`) to IP addresses; a foundational dependency of the Web.
    - [[TCP/IP]] — the underlying packet-switched transport on which all Web protocols operate.
    - WebSocket — full-duplex persistent connection over a single TCP connection, enabling [[Real-Time Communication]] without polling.
  - #### Client-Side Technologies
    - [[HTML]] (HyperText Markup Language) — the semantic document structure standard maintained by [[WHATWG]] as a living standard.
    - [[CSS]] (Cascading Style Sheets) — declarative layout and styling language; CSS Grid, Flexbox, and Custom Properties underpin modern responsive design.
    - [[JavaScript]] — the primary scripting language of the browser; standardised as ECMAScript by TC39; powers both client-side interactivity and server-side runtimes (Node.js, Deno).
    - [[WebAssembly]] — a compact binary instruction format compiled from C, C++, Rust, or Go that executes at near-native speed in sandboxed browser environments; enables compute-intensive applications (3D rendering, codecs, [[Machine Learning]] inference).
    - [[Progressive Web App]] — a web application enhanced with service workers, manifests, and offline caching to approximate the capabilities of [[Native Application]] installs.
    - Web Components — a suite of browser APIs (Custom Elements, Shadow DOM, HTML Templates) enabling reusable, encapsulated UI components without framework dependencies.
  - #### Server-Side and API Layers
    - [[REST API]] — architectural style using HTTP verbs and resource URIs for interoperability between services; dominant in Web 2.0 integration.
    - [[GraphQL]] — query language and runtime for APIs enabling clients to specify exact data requirements, reducing over-fetching; widely adopted in [[Web3]] data indexing (The Graph protocol).
    - Server-Sent Events / gRPC / Webhooks — alternative server-push and RPC mechanisms for event-driven microservice architectures.
    - Edge Functions / Serverless — compute executed at [[Content Delivery Network]] edge nodes, minimising latency for global users.
  - #### Web3 and Decentralised Layer
    - [[IPFS]] (InterPlanetary File System) — content-addressed, peer-to-peer hypermedia protocol using cryptographic multihashes; enables permanent, location-independent content retrieval.
    - Filecoin / Arweave — incentivised decentralised storage networks built atop content-addressing; Filecoin uses proof-of-spacetime, Arweave uses a blockweave endowment model.
    - [[ENS]] (Ethereum Name Service) — on-chain hierarchical naming system mapping human-readable `.eth` names to Ethereum addresses, IPFS content hashes, and metadata via resolver contracts.
    - [[Decentralised Identity]] / [[DIDs]] — W3C specification for self-sovereign identifiers resolvable without centralised registries; paired with Verifiable Credentials for privacy-preserving attestations.
    - [[Smart Contract]] — self-executing code on blockchain VMs (EVM, Solana's SVM) that governs decentralised application logic, token economics, and DAO governance without intermediaries.
    - [[Decentralized Storage]] — broad category encompassing IPFS, Filecoin, Arweave, Storj, and Sia; contrasts with centralised [[Centralised Cloud]] object stores.
    - WalletConnect / Web3Modal — protocols enabling [[Web Browser]]-based dApps to communicate with hardware and mobile wallets via QR-code-paired encrypted relay channels.
  - #### Security and Identity
    - [[TLS]] (Transport Layer Security) — cryptographic protocol securing the channel between client and server; TLS 1.3 is the current standard.
    - CORS (Cross-Origin Resource Sharing) — browser-enforced policy restricting cross-origin HTTP requests; mitigates data-exfiltration attacks.
    - Content Security Policy (CSP) — HTTP header restricting resource origins permitted by a page; reduces XSS attack surface.
    - OAuth 2.0 / OpenID Connect — federated authentication and authorisation protocols enabling Single Sign-On across services.
    - [[Decentralised Identity]] / [[DIDs]] — eliminates reliance on centralised identity providers; enables self-sovereign, cryptographically verifiable authentication.

- ### Applications and Use Cases
  - **E-Commerce and Payments** — HTTP/2, PWA, and CDN edge caching reduce page-load latency, directly improving conversion rates on retail platforms; Web3 enables trustless on-chain payment rails.
  - **Real-Time Collaboration** — WebSocket, WebRTC ([[Real-Time Communication]]), and WebTransport underpin tools such as Google Docs, Figma, and video conferencing applications.
  - **In-Browser AI and ML** — [[WebAssembly]] and WebGPU enable [[Machine Learning]] model inference directly in the browser without server round-trips; frameworks like TensorFlow.js and ONNX Runtime Web exploit these primitives.
  - **Spatial and Immersive Web** — WebXR API exposes VR/AR device capabilities to the browser, bridging Web Technology with [[Spatial Computing]]; A-Frame and Three.js provide declarative scene graphs.
  - **Decentralised Applications (dApps)** — Web3 front-ends (React + Ethers.js) connect to [[Smart Contract]] back-ends via JSON-RPC, enabling DeFi, NFT marketplaces, and DAO governance interfaces without centralised servers.
  - **Progressive Enhancement** — service workers enable offline-first architectures (e.g. news readers, maps) by intercepting network requests and serving cached responses.
  - **IoT and Edge Web** — lightweight HTTP and WebSocket stacks run on microcontrollers; MQTT-over-WebSocket bridges constrained devices to Web dashboards.
  - **Developer Tooling and Build Pipelines** — bundlers (Webpack, Vite, esbuild), transpilers (Babel, TypeScript), and package ecosystems (npm, Yarn) standardise the modern Web development workflow.

- ### Relationships
  - hasPart:: [[HTTP]]
  - hasPart:: [[HTML]]
  - hasPart:: [[CSS]]
  - hasPart:: [[JavaScript]]
  - hasPart:: [[WebAssembly]]
  - hasPart:: [[IPFS]]
  - hasPart:: [[ENS]]
  - hasPart:: [[Web3]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[Content Addressing]]
  - enables:: [[Progressive Web App]]
  - enables:: [[Real-Time Communication]]
  - requires:: [[DNS]]
  - requires:: [[TLS]]
  - requires:: [[TCP/IP]]
  - uses:: [[Smart Contract]]
  - uses:: [[Decentralized Storage]]
  - uses:: [[REST API]]
  - uses:: [[GraphQL]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[WHATWG]]
  - contrastsWith:: [[Native Application]]
  - contrastsWith:: [[Centralised Cloud]]
  - bridgesTo:: [[Spatial Computing]]
  - bridgesTo:: [[Machine Learning]]
  - bridgesTo:: [[Blockchain]]
  - relatedTo:: [[Web Browser]]
  - relatedTo:: [[Web Server]]
  - relatedTo:: [[Content Delivery Network]]

- ### Standards and Governance
  - **[[W3C]]** (World Wide Web Consortium) — primary standards body for HTML, CSS, WebAssembly, SVG, accessibility guidelines (WCAG), WebXR, and decentralised identity (DIDs, Verifiable Credentials).
  - **[[WHATWG]]** (Web Hypertext Application Technology Working Group) — maintains the HTML Living Standard and the Fetch, URL, Encoding, and Streams specifications collaboratively with browser vendors.
  - **[[IETF]]** (Internet Engineering Task Force) — publishes RFCs governing HTTP (RFC 9110–9114 for HTTP/3), [[TLS]], [[DNS]], WebSocket (RFC 6455), and related transport protocols.
  - **TC39** — Ecma International technical committee standardising ECMAScript (JavaScript); follows a staged proposal process with annual release cadence.
  - **WHATWG / W3C Convergence (2019)** — W3C and WHATWG agreed a single HTML and DOM specification, ending the parallel HTML5 / HTML Living Standard duplication.
  - **Web Accessibility Initiative (WAI)** — W3C programme producing WCAG, ARIA, and ATAG; accessibility compliance is legally required in many jurisdictions (EU Accessibility Act, ADA in the US).
  - **Open Web Platform** — the collective label for the interoperable, royalty-free set of web standards that browser vendors (Google, Apple, Mozilla, Microsoft) implement according to W3C/WHATWG specifications.

- ### Evolution and Historical Context
  - **1989–1991** — Tim Berners-Lee proposes and implements the first [[HTTP]] server and [[HTML]] browser at CERN; the Web launches as a hypertext document system.
  - **1994** — W3C founded; Netscape Navigator popularises the graphical Web; SSL (predecessor to [[TLS]]) introduced for secure commerce.
  - **1995–2000** — [[JavaScript]] introduced by Netscape (1995); browser wars accelerate proprietary extensions; dot-com boom drives rapid adoption.
  - **2004–2008** — AJAX coined; Web 2.0 era begins; Gmail and Google Maps demonstrate dynamic single-page applications; Web 2.0 frameworks (jQuery, Prototype) emerge.
  - **2009–2015** — Node.js brings [[JavaScript]] server-side; responsive design and CSS media queries address the mobile shift; HTML5 canvas, WebGL, and WebSocket standardised.
  - **2015–2020** — HTTP/2 deployed; ES6/ES2015 modernises [[JavaScript]]; React, Angular, Vue popularise component-based front-ends; [[WebAssembly]] reaches MVP (2017).
  - **2020–present** — HTTP/3 (QUIC) rolls out; [[Web3]] ecosystem matures (DeFi, NFTs, DAOs); WebGPU standardised for GPU compute; [[Spatial Computing]] via WebXR gains traction; in-browser [[Machine Learning]] via TensorFlow.js and WebGPU accelerated runtimes.

- ### Provenance
  - sources:: W3C specifications; IETF RFCs; WHATWG Living Standards; Protocol Labs IPFS documentation; Ethereum Foundation developer docs; MDN Web Docs
  - updated:: 2026-06-13
