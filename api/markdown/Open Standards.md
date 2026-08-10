public:: true

# Open Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:89ce50e028d25527833466d993a9498c12986b31b27e1675137b6e9b8112caff",
  "@type": "Page",
  "vc:slug": "open-standards",
  "title": "Open Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards",
      "vc:label": "Standards"
    },
    {
      "@id": "urn:visionflow:linked:khronos-open-xr",
      "vc:label": "Khronos OpenXR"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    },
    {
      "@id": "urn:visionflow:linked:onnx-standard",
      "vc:label": "ONNX Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Open Standards"
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
  "@id": "urn:ngm:class:open-standards",
  "@type": "Class",
  "label": "Open Standards",
  "definition": "Open standards are publicly available, transparently developed technical specifications whose adoption is not contingent on royalties or proprietary licences, enabling any party to implement them independently. They are produced through open, consensus-driven processes—typically stewarded by recognised standards bodies such as W3C, IEEE, ISO, or IETF—and their normative texts are accessible to the public. By decoupling specification from implementation, open standards promote interoperability, vendor diversity, and long-term ecosystem resilience. They are foundational to the internet, the web, spatial computing, AI model exchange, and distributed collaboration infrastructures.",
  "domain": "standards",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:specification",
        "label": "Specification"
      },
      {
        "@id": "urn:ngm:class:standards-conformance-testing",
        "label": "Conformance Testing"
      },
      {
        "@id": "urn:ngm:class:reference-implementation",
        "label": "Reference Implementation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-process",
        "label": "Consensus Process"
      },
      {
        "@id": "urn:ngm:class:open-governance",
        "label": "Open Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:vendor-neutrality",
        "label": "Vendor Neutrality"
      },
      {
        "@id": "urn:ngm:class:khronos-open-xr",
        "label": "Khronos OpenXR"
      },
      {
        "@id": "urn:ngm:class:gl-tf",
        "label": "glTF"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:intellectual-property-rights",
        "label": "Intellectual Property Rights"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:frand-licensing",
        "label": "FRAND Licensing"
      },
      {
        "@id": "urn:ngm:class:royalty-free-licensing",
        "label": "Royalty-Free Licensing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:request-for-comments",
        "label": "Request for Comments"
      },
      {
        "@id": "urn:ngm:class:technical-committee",
        "label": "Technical Committee"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-sovereignty",
        "label": "Digital Sovereignty"
      },
      {
        "@id": "urn:ngm:class:technology-transfer",
        "label": "Technology Transfer"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:closed-specification",
        "label": "Closed Specification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:onnx-standard",
        "label": "ONNX Standard"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      },
      {
        "@id": "urn:ngm:class:api-design",
        "label": "API Design"
      },
      {
        "@id": "urn:ngm:class:protocol",
        "label": "Protocol"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:open-specifications",
      "label": "Open Specifications"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-standards:4769e69a9cfd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:89ce50e028d25527833466d993a9498c12986b31b27e1675137b6e9b8112caff"
  },
  "vc:resolutions": [
    {
      "raw": "[[Standards]]",
      "resolved": "urn:visionflow:linked:standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Khronos OpenXR]]",
      "resolved": "urn:visionflow:linked:khronos-open-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ONNX Standard]]",
      "resolved": "urn:visionflow:linked:onnx-standard",
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
  - Open standards are publicly available, transparently developed technical specifications that any party may implement without paying royalties or accepting restrictive licences. Produced through open [[Consensus Process]] governance by bodies such as [[W3C]], [[IETF]], [[IEEE]], and [[ISO]], they decouple the act of specification from any single implementation, thereby ensuring [[Interoperability]], [[Vendor Neutrality]], and long-term ecosystem resilience across the web, spatial computing, AI model exchange, and [[Distributed Collaboration]] infrastructures.

- ### Overview
  - Open standards underpin virtually every layer of digital infrastructure. Unlike [[Proprietary Standard]] specifications controlled by a single company, open standards are developed through transparent, multi-stakeholder processes and published so that any developer, organisation, or government can build conformant products.
  - The defining characteristics are:
    - **Public availability**: the normative text is accessible at no cost or minimal reproduction cost.
    - **Open development**: the drafting process allows participation without discriminatory barriers.
    - **Licence openness**: implementations are permitted under [[Royalty-Free Licensing]] or, where patents are unavoidable, [[FRAND Licensing]] (Fair, Reasonable, and Non-Discriminatory) terms.
    - **Consensus governance**: decisions emerge from broad stakeholder agreement via [[Technical Committee]] deliberation, not unilateral vendor control.
  - Why open standards matter:
    - They prevent vendor lock-in, preserving [[Digital Sovereignty]] for users and governments.
    - They lower barriers to entry for new implementations, spurring competition and innovation.
    - They increase security because [[Specification]] texts can be peer-reviewed globally.
    - They enable long-term archival and [[Technology Transfer]] across generations of software.

- ### Key Components
  - **Specification document** — the normative [[Specification]] text, versioned and publicly hosted (e.g. RFC, W3C Recommendation, ISO standard). See [[Request for Comments]] for the IETF model.
  - **[[Conformance Testing]]** — a test suite or certification programme verifying that implementations correctly interpret the spec; without it, interoperability claims are unverifiable.
  - **[[Reference Implementation]]** — an authoritative implementation released under an open licence to demonstrate feasibility and resolve ambiguities.
  - **[[Open Governance]]** — a charter, bylaws, or working-group process ensuring transparent decision-making, IPR policies, and appeal mechanisms.
  - **IPR Policy** — explicit rules governing patent disclosures; major bodies publish their [[Intellectual Property Rights]] policies alongside every standard.
  - **Versioning and revision** — errata processes and major-version cycles that keep standards current while preserving backward compatibility.

- ### Mechanisms
  - **IETF RFC process** — Internet standards progress through proposed standard → draft standard → full standard after multiple independent implementations. [[Request for Comments]] (RFCs) cover protocols from TCP/IP to TLS.
  - **W3C Recommendation track** — Working Drafts advance through Candidate Recommendation (interoperability testing) to Proposed Recommendation before final publication, ensuring royalty-free licensing via W3C Patent Policy.
  - **ISO/IEC JTC 1** — formal ballot process with national body voting; widely used for cryptographic algorithms, character encoding (Unicode), and programming languages.
  - **IEEE Standards Association** — develops standards for networking (802.11 Wi-Fi, 802.3 Ethernet) and emerging fields through IEEE SA working groups.
  - **Khronos Group** — industry consortium producing open [[API Design]] standards for graphics ([[Vulkan]], OpenGL), XR ([[Khronos OpenXR]]), and 3D content ([[glTF]]), with a royalty-free IP framework.
  - **De-facto vs. de-jure** — some open standards arise bottom-up (de-facto) when a community specification gains universal adoption without a formal body (e.g., JSON, Markdown); formal bodies later may ratify them.

- ### Applications and Use Cases
  - **Web platform** — HTML, CSS, HTTP, WebSocket, WebAssembly, and WebRTC are W3C/IETF open standards enabling cross-browser compatibility without vendor lock-in.
  - **Spatial computing and XR** — [[Khronos OpenXR]] provides a single [[API Design]] surface for VR/AR runtimes across hardware from multiple vendors, eliminating the fragmentation that plagued early XR development. [[glTF]] enables portable 3D asset exchange.
  - **AI model exchange** — [[ONNX Standard]] (Open Neural Network Exchange) allows [[Machine Learning]] models trained in one framework to run in another, bridging [[Federated Learning]] and [[Distributed Collaboration]] deployment scenarios.
  - **Networking and security** — TLS, QUIC, DNS, and BGP are open [[Protocol]] standards that collectively secure and route internet traffic.
  - **Decentralised identity** — W3C DIDs (Decentralised Identifiers) and Verifiable Credentials are open standards enabling [[Decentralised Identity]] without centralised registries.
  - **Government and public sector** — many jurisdictions mandate open standards in public procurement to avoid lock-in and ensure [[Digital Sovereignty]] (e.g., EU Interoperability Framework, UK Open Standards Principles).
  - **Scientific data** — NetCDF, HDF5, and OGC standards for geospatial data enable reproducible research and [[Open Data]] sharing.
  - **Supply chain and IoT** — OPC UA and MQTT are open standards enabling interoperability across industrial devices and platforms.

- ### Relationships
  - subClassOf:: [[Standards]]
  - hasPart:: [[Specification]], [[Conformance Testing]], [[Reference Implementation]]
  - partOf:: [[Standards Ecosystem]]
  - requires:: [[Consensus Process]], [[Open Governance]]
  - enables:: [[Interoperability]], [[Vendor Neutrality]], [[Khronos OpenXR]], [[glTF]]
  - dependsOn:: [[Open Source]], [[Intellectual Property Rights]]
  - implements:: [[FRAND Licensing]], [[Royalty-Free Licensing]]
  - uses:: [[Request for Comments]], [[Technical Committee]]
  - supports:: [[Digital Sovereignty]], [[Technology Transfer]]
  - standardizedBy:: [[W3C]], [[IETF]], [[IEEE]], [[ISO]], [[Khronos Group]]
  - contrastsWith:: [[Proprietary Standard]], [[Closed Specification]]
  - bridges-to:: [[ONNX Standard]], [[Decentralised Identity]], [[Federated Learning]]
  - relatedTo:: [[Open Data]], [[API Design]], [[Protocol]]
  - sameAs:: [[Open Specifications]]

- ### Standards Bodies and Context
  - **[[W3C]] (World Wide Web Consortium)** — stewards web platform standards; operates a royalty-free patent policy. Key outputs: HTML, CSS, WebXR, DIDs, Verifiable Credentials.
  - **[[IETF]] (Internet Engineering Task Force)** — open, volunteer-driven body producing internet [[Protocol]] standards via [[Request for Comments]]. Key outputs: TCP/IP, HTTP/3 (QUIC), TLS 1.3.
  - **[[IEEE]] (Institute of Electrical and Electronics Engineers)** — formal standards body covering networking (Wi-Fi, Ethernet), power, and emerging technologies.
  - **[[ISO]] (International Organisation for Standardisation)** — broad international coverage; collaborates with IEC on IT through JTC 1. Key outputs: C++ language standard, MPEG codecs, cryptographic hash standards.
  - **[[Khronos Group]]** — industry consortium specifically for open graphics and compute [[API Design]]. Key outputs: [[glTF]], [[Khronos OpenXR]], Vulkan, OpenCL, SYCL.
  - **OASIS** — produces structured information standards including SAML, OData, MQTT, and OpenDocument Format.
  - **OGC (Open Geospatial Consortium)** — open standards for geospatial data and services, enabling [[Open Data]] exchange in earth observation and mapping.
  - **Regulatory context** — the EU's European Interoperability Framework and Regulation (EU) 2022/2555 (NIS2) explicitly require or incentivise open standards for public digital infrastructure. The UK's Open Standards Principles (Cabinet Office) mandate royalty-free open standards for government technology.

- ### Challenges and Limitations
  - **Slow iteration** — consensus processes can lag rapidly evolving technology; de-facto standards (e.g., Protocol Buffers, GraphQL) often move faster but with fragmentation risk.
  - **Patent ambush** — undisclosed essential patents can undermine royalty-free commitments; robust [[Intellectual Property Rights]] disclosure policies mitigate but do not eliminate this risk.
  - **Implementation divergence** — optional features and under-specified behaviour lead to partial [[Conformance Testing]] failures even for nominally compliant products.
  - **Governance capture** — dominant vendors can steer [[Technical Committee]] outcomes even in ostensibly open bodies if participation is weighted by resource availability.
  - **Adoption friction** — open standards require critical mass; network effects can entrench proprietary incumbents even when superior open alternatives exist.
  - **Security lag** — formal standards processes may delay incorporating security mitigations; the TLS 1.0/1.1 deprecation cycle illustrated multi-year latency between discovery and standardised remediation.

- ### Current Landscape (2026)
  - The EU's Interoperable Europe Act (Regulation (EU) 2024/903), in force since 11 April 2024, moved from law to practice through 2025: interoperability assessments became mandatory on 12 January 2025, the implementing act on interoperability regulatory sandboxes was adopted on 17 July 2025, and the Commission published its first Annual Report on Interoperability in the Union on 16 December 2025 (projecting up to EUR 5 billion in annual savings).
  - On 3 June 2026 the Commission adopted the European Technological Sovereignty Package, including a Strategy for EU Open Digital Ecosystems (the "Open Source Strategy"), which commits to promoting open standards and open-source reference implementations in public procurement to reduce dependence on proprietary lock-in.
  - Open standards became the backbone of the agentic-AI stack: Anthropic's Model Context Protocol (MCP, launched November 2024) was adopted by OpenAI in March 2025 and by Google, and by December 2025 exceeded 10,000 published servers; Google's Agent2Agent (A2A) protocol launched April 2025 with 50+ partners.
  - Governance of these AI protocols was neutralised under the Linux Foundation: A2A was donated in June 2025, and in December 2025 the Linux Foundation formed the Agentic AI Foundation (AAIF) - co-founded by Anthropic, Block and OpenAI - receiving MCP, Block's goose and OpenAI's AGENTS.md, with the latest MCP specification revision dated 2025-11-25.
  - The EU Common Charger Directive (Directive (EU) 2022/2380) made USB-C the mandatory wired-charging standard for phones, tablets and most portable devices from 28 December 2024, extending to laptops on 28 April 2026; the complementary Ecodesign Regulation (EU) 2025/2052 (adopted October 2025) adds a common-charger logo and interoperability rules for external power supplies from 14 December 2028.
  - Standardisation bodies are formalising newer open specifications: CEN/CENELEC JTC 25 on data, dataspaces, cloud and edge was established in September 2024 (developing EN 303 760 and EN 304 199), and the OASIS Data Provenance Standards technical committee launched in 2025 - both partly driven by the EU Data Act and the Cyber Resilience Act (Regulation (EU) 2024/2847), which lean on harmonised standards.
  - Open frontiers as of 2026 include converging the fragmented agent-protocol landscape (MCP, A2A, IBM's ACP, community ANP) toward a first Joint Interoperability Specification expected in Q3 2026, unresolved Digital Markets Act messaging/cloud interoperability mandates that the Commission has yet to issue standardisation requests for, and reconciling fast-moving open-source de facto standards with slower formal standardisation processes.

- ### References
  - 1. European Commission (2026). Commission boosts open and interoperable digital ecosystems for public administrations (European Technological Sovereignty Package / Open Source Strategy). https://commission.europa.eu/news-and-media/news/commission-boosts-open-and-interoperable-digital-ecosystems-public-administrations-2026-06-03_en
  - 2. European Commission (2025). State of the interoperability in the Union - first Annual Report on Interoperability. https://commission.europa.eu/news-and-media/news/state-interoperability-union-2025-12-16_en
  - 3. Linux Foundation (2025). Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF), Anchored by MCP, goose and AGENTS.md. https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
  - 4. Wikipedia (2025). Model Context Protocol. https://en.wikipedia.org/wiki/Model_Context_Protocol
  - 5. European Commission (2024). One common charging solution for all (Common Charger Directive). https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red/one-common-charging-solution-all_en
  - 6. European Commission / Interoperable Europe (2026). Data interoperability (Rolling Plan for ICT Standardisation 2026) - CEN/CLC JTC 25 and OASIS Data Provenance Standards. https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/data-interoperability-rp-2026

- ### Provenance
  - sources:: W3C Process Document; IETF RFC 2026 (BCP 9); ISO/IEC Directives Part 1; EU European Interoperability Framework v2; Khronos Group IP Framework
  - updated:: 2026-06-13
