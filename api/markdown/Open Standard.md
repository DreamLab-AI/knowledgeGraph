public:: true

# Open Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f476fc0bb512e412522d806433b47fffae8610cf9418c3e818c1155d5a43cd22",
  "@type": "Page",
  "vc:slug": "open-standard",
  "title": "Open Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9119"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Open Standard"
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
  "@id": "urn:ngm:class:open-standard",
  "@type": "Class",
  "label": "Open Standard",
  "definition": "An open standard is a publicly accessible specification for a technology, protocol, format, or interface that is developed through a transparent, consensus-based process and can be implemented and used without discriminatory restrictions. Open standards enable interoperability between systems from different vendors by providing a shared, stable technical baseline. They are maintained by recognised standards bodies and are typically available royalty-free or under FRAND (Fair, Reasonable And Non-Discriminatory) licensing terms. Open standards contrast with proprietary specifications controlled by a single vendor and are foundational to open, competitive ecosystems.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:specification-document",
        "label": "Specification Document"
      },
      {
        "@id": "urn:ngm:class:conformance-test-suite",
        "label": "Conformance Test Suite"
      },
      {
        "@id": "urn:ngm:class:reference-implementation",
        "label": "Reference Implementation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-process",
        "label": "Consensus Process"
      },
      {
        "@id": "urn:ngm:class:intellectual-property-policy",
        "label": "Intellectual Property Policy"
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
        "@id": "urn:ngm:class:ecosystem-competition",
        "label": "Ecosystem Competition"
      },
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-development-organisation",
        "label": "Standards Development Organisation"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proprietary-format",
        "label": "Proprietary Format"
      },
      {
        "@id": "urn:ngm:class:closed-specification",
        "label": "Closed Specification"
      },
      {
        "@id": "urn:ngm:class:vendor-lock-in",
        "label": "Vendor Lock-in"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      },
      {
        "@id": "urn:ngm:class:protocol",
        "label": "Protocol"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      },
      {
        "@id": "urn:ngm:class:frand-licensing",
        "label": "FRAND Licensing"
      },
      {
        "@id": "urn:ngm:class:digital-sovereignty",
        "label": "Digital Sovereignty"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:gltf",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:webxr",
        "label": "WebXR"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:open-specification",
      "label": "Open Specification"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9119"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:open-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f476fc0bb512e412522d806433b47fffae8610cf9418c3e818c1155d5a43cd22"
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
  - An **open standard** is a publicly accessible [[Technical Specification]] developed through a transparent, consensus-based process and available for implementation without discriminatory restrictions. Open standards establish a shared technical baseline that enables [[Interoperability]] between systems from different vendors, preventing [[Vendor Lock-in]] and fostering competitive ecosystems. They are maintained by recognised [[Standards Development Organisation]]s such as the [[W3C]], [[IETF]], [[ISO]], and [[Khronos Group]], and are generally available royalty-free or under [[FRAND Licensing]] (Fair, Reasonable And Non-Discriminatory) terms. Open standards are a foundational pillar of the open web, distributed infrastructure, spatial computing, and emerging AI ecosystems.

- ### Overview
  - Open standards underpin virtually every layer of modern digital infrastructure, from low-level networking ([[TCP/IP]], [[HTTP]]) to high-level application formats ([[HTML]], [[JSON]], [[glTF]]) and cross-platform runtime APIs ([[OpenXR]], [[WebXR]]).
  - The defining characteristics of a genuine open standard are:
    - **Transparency**: the specification and its development history are publicly accessible.
    - **Openness**: any party may participate in or observe the standards process.
    - **Impartiality**: the governing body is not controlled by a single vendor.
    - **Consensus**: adoption of changes requires broad stakeholder agreement.
    - **Availability**: the specification can be read, implemented, and deployed without prohibitive fees.
    - **Maintenance**: a stewardship body accepts bug reports and issues revisions.
  - The distinction between an open standard and [[Open Source Software]] is important: a standard is a specification (a document describing behaviour), whereas open-source software is a working implementation. The two often coexist — e.g. [[OpenXR]] is an open standard whose reference implementation is open-source.
  - Open standards reduce systemic risk in critical infrastructure by ensuring that no single vendor can unilaterally withdraw access or raise prices once the ecosystem depends on the technology. This is central to [[Digital Sovereignty]] concerns in government and enterprise procurement.

- ### Key Components
  - **Specification Document** — the normative written description of the standard, typically divided into informative background and normative requirements (using RFC 2119 language: MUST, SHOULD, MAY).
  - **[[Conformance Test Suite]]** — automated or manual tests that verify whether an implementation correctly realises the specification; essential for interoperability.
  - **[[Reference Implementation]]** — a canonical, often open-source, implementation that demonstrates the specification's intent and serves as a ground-truth for ambiguous cases.
  - **[[Intellectual Property Policy]]** — the legal framework governing patents that read on the standard; FRAND or royalty-free (RF) policies are required for broad open adoption.
  - **[[Consensus Process]]** — the governance mechanism (working groups, ballots, public review) through which changes are proposed, debated, and ratified.
  - **Versioning and Errata** — a process for issuing corrections and new editions while preserving backward compatibility.
  - **Namespace / Registry** — a controlled registry of identifiers (MIME types, URI schemes, codec parameters) that prevents collisions across implementations.

- ### Mechanisms
  - **Ballot-based ratification** (ISO, IEEE): national bodies cast votes; supermajority required for approval.
  - **Rough consensus** ([[IETF]]): working groups reach broad agreement documented in RFCs; no formal vote.
  - **Member-driven working groups** ([[W3C]], [[Khronos Group]]): member organisations contribute engineers who draft, review, and ratify specifications.
  - **Community group / incubation** ([[W3C]] CGs): lightweight track for early-stage exploration before formal standardisation.
  - **FRAND licensing commitments**: patent holders declare they will license essential patents on FRAND terms, enabling independent implementations.
  - **Royalty-free pledges**: stricter than FRAND; patent holders commit to zero royalties, enabling truly open ecosystems (common in web standards).

- ### Applications and Use Cases
  - **[[Spatial Computing]] and the [[Metaverse]]**
    - [[glTF]] (GL Transmission Format, Khronos): royalty-free format for 3D asset transmission; the "JPEG of 3D".
    - [[USD]] (Universal Scene Description, Pixar/AOUSD): open format for complex scene interchange with layering and composition.
    - [[OpenXR]] (Khronos): cross-platform [[XR]] application runtime API, abstracting headsets and controllers from application code.
    - [[WebXR]] Device API (W3C): browser-native API for immersive experiences on the open web.
  - **Networking and the Web**
    - [[TCP/IP]], [[HTTP]], [[TLS]], [[DNS]]: open IETF standards underpinning internet connectivity.
    - [[HTML]], [[CSS]], [[JavaScript]]: W3C/WHATWG open standards for the web platform.
    - [[WebAssembly]] (Wasm): W3C standard for portable, near-native execution in browsers and beyond.
  - **Data and [[Interoperability]]**
    - [[JSON-LD]], [[RDF]], [[OWL]]: W3C semantic web standards enabling machine-readable linked data.
    - [[OpenAPI Specification]]: de-facto open standard for describing RESTful [[API]]s.
    - [[FHIR]] (HL7): open standard for health data exchange.
  - **[[Distributed Systems]] and [[Blockchain]]**
    - [[Ethereum]] [[ERC]] token standards: community-ratified interface standards for smart contracts.
    - [[DID]] (Decentralised Identifiers, W3C): open standard for self-sovereign identity.
    - [[ActivityPub]] (W3C): federated social networking protocol powering the [[Fediverse]].
  - **[[Artificial Intelligence]]**
    - [[ONNX]] (Open Neural Network Exchange): open format for AI model portability across frameworks.
    - [[MLflow]] model registry schemas and [[OpenTelemetry]] for AI observability pipelines.
    - Emerging standards for [[AI Safety]] evaluation and [[Model Card]]s.

- ### Relationships
  - subClassOf:: [[Technical Specification]]
  - hasPart:: [[Specification Document]]
  - hasPart:: [[Conformance Test Suite]]
  - hasPart:: [[Reference Implementation]]
  - requires:: [[Consensus Process]]
  - requires:: [[Intellectual Property Policy]]
  - enables:: [[Interoperability]]
  - enables:: [[Vendor Neutrality]]
  - enables:: [[Data Portability]]
  - enables:: [[Ecosystem Competition]]
  - standardizedBy:: [[Standards Development Organisation]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[ISO]]
  - standardizedBy:: [[IEEE]]
  - standardizedBy:: [[Khronos Group]]
  - contrastsWith:: [[Proprietary Format]]
  - contrastsWith:: [[Vendor Lock-in]]
  - contrastsWith:: [[Closed Specification]]
  - relatedTo:: [[Open Source Software]]
  - relatedTo:: [[Protocol]]
  - relatedTo:: [[API]]
  - relatedTo:: [[FRAND Licensing]]
  - relatedTo:: [[Digital Sovereignty]]
  - bridges-to:: [[OpenXR]]
  - bridges-to:: [[glTF]]
  - bridges-to:: [[WebXR]]

- ### Standards Bodies and Context
  - **[[W3C]]** (World Wide Web Consortium) — governs web platform standards including HTML, CSS, WebXR, JSON-LD, DID. Uses royalty-free patent policy.
  - **[[IETF]]** (Internet Engineering Task Force) — governs internet protocols (TCP/IP, HTTP, TLS, DNS, QUIC) via RFC process and rough-consensus model.
  - **[[ISO]]** (International Organisation for Standardisation) — ballot-based body; covers broad range including document formats (ISO 32000 for PDF), management systems, and measurement.
  - **[[IEEE]]** — covers electrical engineering, wireless (802.11 Wi-Fi, 802.3 Ethernet), and computing standards.
  - **[[Khronos Group]]** — member-driven industry consortium; governs OpenGL, Vulkan, OpenXR, glTF, SPIR-V. Royalty-free policy.
  - **[[AOUSD]]** (Alliance for OpenUSD) — stewards the USD format for 3D scene description; includes Apple, Autodesk, NVIDIA, Pixar.
  - **[[OASIS]]** — governs MQTT, STIX, SAML, AMQP and other enterprise standards.
  - **[[OpenID Foundation]]** — stewards OpenID Connect and related identity federation standards.
  - Regulatory relevance: EU mandates open standards via the [[European Interoperability Framework]] (EIF); the UK Government [[Open Standards Principles]] require open standards in central government procurement.

- ### Considerations and Tensions
  - **Openness vs Quality**: consensus processes can be slow; open standards sometimes lag behind proprietary innovation.
  - **Patent ambush**: undisclosed essential patents can emerge post-ratification, undermining royalty-free commitments (e.g. GIF/LZW controversy).
  - **Embrace-extend-extinguish**: vendors implementing open standards may add proprietary extensions that fragment the ecosystem.
  - **De-facto vs de-jure standards**: some standards (e.g. [[PDF]] before ISO adoption, [[Markdown]]) achieve broad adoption informally before or without formal ratification.
  - **Standards capture**: large vendors with significant engineering resources can dominate working groups and shape standards to their advantage.
  - **Versioning fragmentation**: rapid iteration (e.g. [[OpenAPI]] 2.x vs 3.x) can create incompatible islands within a nominally open ecosystem.
  - **AI and open standards**: the emergence of large language model APIs raises questions about open standard governance for [[AI Model API]]s; current efforts (e.g. OpenAPI-based LLM specs) are nascent.

- ### Provenance
  - sources:: Khronos Group documentation; W3C Process Document; IETF RFC 2026; ISO/IEC Directives; AOUSD; EU EIF; UK Open Standards Principles
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
