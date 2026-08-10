public:: true

# Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8503151b6ddd55a3649f93fa0022367dbad643f7304fc4768c97e78101f5078d",
  "@type": "Page",
  "vc:slug": "standards",
  "title": "Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10076"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Standards"
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
  "@id": "urn:ngm:class:standards",
  "@type": "Class",
  "label": "Standards",
  "definition": "Established tools, protocols, formats, services, and specifications that support the creation, operation, continuous improvement, and common use of metaverse technologies, enabling interoperability between disparate systems, platforms, and applications.",
  "domain": "standards",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:sc-standards-and-interop",
    "label": "Standards and Interoperability"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:technical-standards",
        "label": "Technical Standards"
      },
      {
        "@id": "urn:ngm:class:standards-compliance",
        "label": "Standards Compliance"
      },
      {
        "@id": "urn:ngm:class:standards-conformance",
        "label": "Standards Conformance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Protocols"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-compatibility",
        "label": "Cross-Platform Compatibility"
      },
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      },
      {
        "@id": "urn:ngm:class:avatar-portability",
        "label": "Avatar Portability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gltf-standard",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:universal-scene-description",
        "label": "Universal Scene Description"
      },
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-development-organisation",
        "label": "Standards Development Organisation"
      },
      {
        "@id": "urn:ngm:class:metaverse-standards-forum",
        "label": "Metaverse Standards Forum"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proprietary-protocol",
        "label": "Proprietary Protocol"
      },
      {
        "@id": "urn:ngm:class:vendor-lock-in",
        "label": "Vendor Lock-In"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:technical-specification",
      "label": "Technical Specification"
    },
    {
      "@id": "urn:ngm:class:protocol-standard",
      "label": "Protocol Standard"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8503151b6ddd55a3649f93fa0022367dbad643f7304fc4768c97e78101f5078d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:owl:class:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
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
  - Established tools, protocols, formats, services, and specifications that support the creation, operation, continuous improvement, and common use of metaverse technologies, enabling interoperability between disparate systems, platforms, and applications.
- ### Semantic Classification
  - owl-class:: spatial-computing:Standards
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]
- ### Relationships
  - is-subclass-of:: [[Metaverse]]
- ### Content
  - #### Inverse Relationships (Inferred by Reasoner)
	    - Standards Compliance is-subclass-of Standards
	    - Standards Conformance is-subclass-of Standards
	    - Technical Standards is-subclass-of Standards
		- related-to:: [[Interoperability]]
  - ## Overview
  - In the metaverse, standards are defined as tools, protocols, formats, services, and engines that support the creation, operation, continuous improvement, and common use. The Metaverse Standards Forum (MSF), founded in June 2022 with over 2,600 members, fosters interoperability standards for an open and inclusive metaverse.
  - ## Technical Details
  - ### Key Standards Organizations
		- **IEEE Standards Association**: Develops metaverse-related standards through the Metaverse Standards Committee (CTS/MSC)
		- **Metaverse Standards Forum**: Brings together technology providers, developers, and standards organizations
		- **Khronos Group**: Maintains glTF for 3D object transmission and loading
		- **Web3D Consortium**: Develops interactive 3D graphics standards
  - ### Core Interoperability Standards
		- **glTF**: Efficient transmission and loading of 3D scenes and models
		- **3D Tiles**: Streams massive 3D data sets in real time
		- **Universal Scene Description (USD)**: Organizes collections of objects into scenes
		- **PhysX**: Shares physics and behavioral properties of objects
		- **WebXR**: Enables XR experiences in web browsers (Safari support added 2024)
  - ### OMA3 Inter-World Portaling System (IWPS)
		- Introduced November 2024 as the 3D equivalent of web hyperlinks
		- Peer-to-peer protocol for Web2 and Web3 virtual environments
		- 80+ members spanning metaverse, gaming, NFT, and identity organizations
  - ## Applications
  - Cross-platform avatar and asset portability
  - Seamless user travel between metaverse platforms
  - Real-time 3D data streaming for large virtual environments
  - Physical computing and AI integration
- ### Current Landscape (2026)
  - Standards-setting in 2024-2026 has been dominated by AI: ISO, IEC and ITU launched the first International AI Standards Summit (New Delhi 2024; second edition Seoul, 2-3 December 2025), issuing the Seoul Statement pledging joint work on socio-technical, human-rights-aligned AI standards in response to the UN Global Digital Compact (September 2024).
  - The ISO/IEC JTC 1/SC 42 catalogue expanded rapidly around the ISO/IEC 42001:2023 AI management system standard, adding ISO/IEC 42005:2025 (AI system impact assessment, published May 2025), ISO/IEC 42006:2025 (requirements for bodies auditing/certifying AI management systems) and ISO/IEC 12792:2025 (transparency taxonomy of AI systems).
  - The EU AI Act drove the largest coordinated European standardisation effort in history: CEN-CENELEC JTC 21, with over 1,000 experts, is producing harmonised standards under Commission request C(2025)3871; prEN 18286 (Quality Management System for AI Act, Article 17) became the first AI harmonised standard to enter public enquiry on 30 October 2025 (closed 22 January 2026), reaching Formal Vote/Approval by mid-2026 with Q4 2026 availability targeted.
  - Regulatory reshaping: the Digital Omnibus, Regulation (EU) 2026/1744, was published in the Official Journal on 24 July 2026 (in force 27 July 2026), postponing high-risk obligations to 2 December 2027 (Annex III) and 2 August 2028 (Annex I) because harmonised standards were not ready in time, while keeping transparency and prohibition rules.
  - EN ISO/IEC 42001:2026 (European adoption of the AI management system standard) was published on 18 March 2026, and first UKAS-accredited ISO/IEC 42001 certifications appeared in January 2026, though no AI Act harmonised standard had yet been cited in the Official Journal as of mid-2026, so none yet confers Article 40 presumption of conformity.
  - Infrastructure and process modernisation: ISO and IEC rolled out the mandatory Online Standards Development (OSD) tool for all new eligible projects from January 2025, and ITU launched the AI Standards Exchange Database under the World Standards Cooperation, cataloguing over 700 AI standards from ISO, IEC, ITU, IEEE and IETF.
  - Frontier and open challenges as of 2026 include standardising agentic AI (A2A, Model Context Protocol, agent registries), multimedia authenticity and deepfake provenance via the AMAS collaboration (IEC/ISO/ITU with C2PA, Microsoft, WITNESS), post-quantum cryptography migration, and closing the gap between voluntary organisational standards and legally binding harmonised conformity routes.

- ### References
  - 1. ISO (2025). World-first International AI Standards Summit announced in Davos. https://www.iso.org/news/2025/01/world-first-international-ai-standards-summit-announced-in-davos
  - 2. ITU (2025). Key international organizations align on AI standards (Seoul Statement). https://www.itu.int/hub/2025/12/key-international-organizations-align-on-ai-standards/
  - 3. European Commission (2026). Standardisation of the AI Act — prEN 18286. https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation
  - 4. KLA Digital (2026). JTC 21 Standards Tracker: CEN-CENELEC AI Act Deliverables (June 2026 snapshot). https://kla.digital/blog/jtc-21-standards-tracker
  - 5. Modulos (2026). AI Governance Framework Updates — EU AI Act, ISO 42001, Digital Omnibus. https://docs.modulos.ai/frameworks/updates
  - 6. ISO (2025). ISO/IEC 42005:2025 — Artificial intelligence — AI system impact assessment. https://www.iso.org/standard/42005

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
