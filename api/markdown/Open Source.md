public:: true

# Open Source
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c346b98da2893b22de15510021f2bbd882cef94c17dcc0844c80e385fe018ab4",
  "@type": "Page",
  "vc:slug": "open-source",
  "title": "Open Source",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:git-hub",
      "vc:label": "GitHub"
    },
    {
      "@id": "urn:visionflow:linked:https-opensource-org-osd",
      "vc:label": "https://opensource.org/osd"
    },
    {
      "@id": "urn:visionflow:linked:https-opensource-org-licenses",
      "vc:label": "https://opensource.org/licenses"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Open Source"
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
  "@id": "urn:ngm:class:open-source",
  "@type": "Class",
  "label": "Open Source",
  "definition": "Open source designates software whose source code is released under a licence conforming to the Open Source Definition, granting anyone the rights to use, study, modify, and redistribute the code and derivative works. It is a development paradigm rooted in decentralised, community-driven collaboration where peer review, transparent workflows, and shared governance replace proprietary, closed development. Open source underpins the majority of modern computing infrastructure — from operating systems and compilers to cloud platforms and AI frameworks — and has expanded beyond software into hardware designs, datasets, models, and scientific research artefacts. Licences range from permissive (MIT, Apache 2.0) to copyleft (GPL, AGPL), with the choice of licence shaping how downstream users may integrate the code.",
  "domain": "distributed-collaboration",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-development",
      "label": "Software Development"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:open-source-licence",
        "label": "Open Source Licence"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      },
      {
        "@id": "urn:ngm:class:package-management",
        "label": "Package Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:commons-based-peer-production",
        "label": "Commons-Based Peer Production"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:open-source-licence",
        "label": "Open Source Licence"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-development",
        "label": "Collaborative Development"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:reproducible-research",
        "label": "Reproducible Research"
      },
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:issue-tracking",
        "label": "Issue Tracking"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:software-supply-chain",
        "label": "Software Supply Chain"
      },
      {
        "@id": "urn:ngm:class:ai-model-transparency",
        "label": "AI Model Transparency"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-source-initiative",
        "label": "Open Source Initiative"
      },
      {
        "@id": "urn:ngm:class:free-software-foundation",
        "label": "Free Software Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proprietary-software",
        "label": "Proprietary Software"
      },
      {
        "@id": "urn:ngm:class:closed-source",
        "label": "Closed Source"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:open-source-ai",
        "label": "Open Source AI"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inner-source",
        "label": "Inner Source"
      },
      {
        "@id": "urn:ngm:class:software-bill-of-materials",
        "label": "Software Bill of Materials"
      },
      {
        "@id": "urn:ngm:class:open-hardware",
        "label": "Open Hardware"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:free-and-open-source-software",
      "label": "Free and Open Source Software"
    },
    {
      "@id": "urn:ngm:class:foss",
      "label": "FOSS"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-source:403cae7d3bfc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c346b98da2893b22de15510021f2bbd882cef94c17dcc0844c80e385fe018ab4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GitHub]]",
      "resolved": "urn:visionflow:linked:git-hub",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://opensource.org/osd]]",
      "resolved": "urn:visionflow:linked:https-opensource-org-osd",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://opensource.org/licenses]]",
      "resolved": "urn:visionflow:linked:https-opensource-org-licenses",
      "kind": "StubLink"
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
  - Open source is a development paradigm in which [[Software Development]] artefacts — primarily [[Source Code]] but increasingly [[Open Hardware]] designs, [[AI Model Transparency|AI model weights]], and datasets — are distributed under licences conforming to the [[Open Source Definition]], granting any recipient the rights to use, inspect, modify, and redistribute the work and its derivatives. Formalised in 1998 by the [[Open Source Initiative]], the concept grew from the earlier [[Free Software]] movement championed by the [[Free Software Foundation]], which framed the same freedoms in explicitly ethical terms. Together, the two traditions are commonly grouped as [[Free and Open Source Software]] (FOSS). Open source has become the default mode of infrastructure construction for cloud computing, AI, and distributed systems.

- ### Overview
  - Open source inverts the secrecy assumptions of [[Proprietary Software]] by treating transparency as an engineering asset: public code is auditable, peer-reviewed, and improvable by a global contributor pool. The model rests on three mutually reinforcing pillars — licensing (defining the legal grant), [[Version Control]] (enabling asynchronous distributed contribution), and community governance (coordinating decision-making without central ownership).
  - Adoption is now pervasive. [[Linux Kernel]], [[Apache HTTP Server]], [[Python]], [[Kubernetes]], and the [[LLVM]] compiler infrastructure are illustrative anchors of critical internet and computing infrastructure built entirely through open collaboration. The same model has propagated into machine learning through projects such as [[PyTorch]], [[TensorFlow]], and [[Hugging Face]] model repositories, and into hardware design through efforts such as [[RISC-V]].
  - Economic incentives have not prevented commercial success: firms routinely build products on open source foundations, contribute upstream to reduce maintenance burden, and monetise support, hosting, or proprietary add-ons. This dynamic is the basis of the [[Inner Source]] pattern, where corporate teams apply open source practices internally.

- ### Key Components
  - #### Licensing
    - [[Open Source Licence]] — the legal instrument granting the four freedoms. Two major families:
      - Permissive licences (MIT, BSD, Apache 2.0): minimal restrictions; derivative works may be [[Closed Source]].
      - Copyleft licences (GPL, LGPL, AGPL, MPL): require derivative works to carry the same licence terms, ensuring freedoms propagate.
    - Licence compatibility is an important concern when combining code under different licences in the same [[Software Supply Chain]].
  - #### Version Control & Collaboration Infrastructure
    - [[Git]] — the dominant [[Version Control]] system, enabling branching, forking, and merging workflows that allow parallel contribution at scale.
    - [[GitHub]], [[GitLab]], and [[Gitea]] — hosting platforms that layer [[Issue Tracking]], [[Code Review]], CI/CD pipelines, and [[Package Management]] registries on top of Git.
    - [[Continuous Integration]] — automated build and test pipelines triggered on each commit, enforcing quality gates across distributed contributor bases.
  - #### Community Governance Models
    - Benevolent Dictator For Life (BDFL): single trusted maintainer with final authority (e.g. early [[Python]] under Guido van Rossum).
    - Foundation-backed: neutral legal entities (Apache Software Foundation, Linux Foundation, CNCF) hold IP and set contribution norms.
    - [[Decentralised Governance]]: multi-stakeholder steering committees with documented contribution policies (RFCs, ADRs, governance files).
  - #### Package & Dependency Ecosystems
    - [[Package Management]] registries (npm, PyPI, crates.io, Maven Central) distribute pre-built open source components as versioned packages.
    - Dependency graphs underpin the modern [[Software Supply Chain]]; a vulnerability in a widely-used transitive dependency can cascade across millions of downstream projects (e.g. Log4Shell).
    - [[Software Bill of Materials]] (SBOM) — machine-readable inventories of components and their licences, increasingly mandated by regulation.

- ### Applications / Use Cases
  - **Operating Systems & Virtualisation** — [[Linux Kernel]] powers Android, most cloud servers, and embedded devices. [[KVM]] and [[Xen]] are the hypervisor foundations of cloud infrastructure.
  - **Cloud-Native Infrastructure** — [[Kubernetes]] for container orchestration, [[Prometheus]] for monitoring, [[Envoy]] for service mesh; the CNCF open source catalogue defines the de facto cloud-native stack.
  - **AI & Machine Learning** — [[PyTorch]], [[TensorFlow]], [[JAX]], and [[Hugging Face]] Transformers accelerate research and production ML. Open model weights (Llama, Mistral, Falcon) extend the paradigm to [[Open Source AI]], enabling [[Reproducible Research]] and local deployment without vendor lock-in.
  - **Security Tooling** — [[OpenSSL]], [[WireGuard]], [[Snort]], and [[Suricata]] illustrate open source domination of cryptographic libraries and network security. Community audit of public code improves assurance, though [[Supply Chain Transparency]] depends on active maintenance.
  - **Scientific Research** — [[Reproducible Research]] workflows increasingly require open data, open code, and open methodology. Projects like [[Jupyter]], [[SciPy]], and [[R]] are standard scientific computing infrastructure.
  - **Decentralised Systems** — protocols such as [[Bitcoin Core]] and [[Ethereum]] are open source by design; open implementations are essential to trust in [[Decentralised Autonomous Organisation|DAOs]] and [[Blockchain]] infrastructure.
  - **Hardware** — [[RISC-V]] and [[OpenSPARC]] apply open source principles to instruction-set architecture; [[KiCad]] enables open PCB design.
  - **Enterprise Inner Source** — corporations apply [[Inner Source]] patterns: internal repositories governed with open source norms, reducing silos while maintaining IP control.

- ### Relationships
  - partOf:: [[Software Development]]
  - partOf:: [[Commons-Based Peer Production]]
  - hasPart:: [[Open Source Licence]]
  - hasPart:: [[Version Control]]
  - hasPart:: [[Code Review]]
  - hasPart:: [[Package Management]]
  - requires:: [[Version Control]]
  - requires:: [[Open Source Licence]]
  - enables:: [[Collaborative Development]]
  - enables:: [[Continuous Integration]]
  - enables:: [[Reproducible Research]]
  - enables:: [[Supply Chain Transparency]]
  - uses:: [[Git]]
  - uses:: [[Continuous Integration]]
  - uses:: [[Issue Tracking]]
  - supports:: [[Decentralised Governance]]
  - supports:: [[Software Supply Chain]]
  - supports:: [[AI Model Transparency]]
  - standardizedBy:: [[Open Source Initiative]]
  - standardizedBy:: [[Free Software Foundation]]
  - contrastsWith:: [[Proprietary Software]]
  - contrastsWith:: [[Closed Source]]
  - bridges-to:: [[Open Source AI]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[Federated Learning]]
  - relatedTo:: [[Inner Source]]
  - relatedTo:: [[Software Bill of Materials]]
  - relatedTo:: [[Open Hardware]]

- ### Standards & Context
  - **Open Source Definition (OSD)** — the normative specification maintained by the [[Open Source Initiative]] (OSI) at opensource.org/osd. Defines 10 criteria a licence must satisfy to be OSI-approved, including free redistribution, source code availability, and no discrimination against persons, fields of endeavour, or technology stacks.
  - **OSI Licence List** — a curated catalogue of OSI-approved licences at opensource.org/licenses. Procurement and compliance teams use this list as an authoritative reference.
  - **GNU GPL / LGPL / AGPL** — copyleft licences produced by the [[Free Software Foundation]]. AGPL extends copyleft to network services, closing the "SaaS loophole".
  - **Apache 2.0** — a widely adopted permissive licence with an explicit patent grant; the default for many Apache Software Foundation and Linux Foundation projects.
  - **SPDX (Software Package Data Exchange)** — an open standard (ISO/IEC 5962:2021) for communicating software licensing and component information, the technical substrate of [[Software Bill of Materials]] documents.
  - **Executive Order 14028 (US, 2021)** and subsequent CISA guidance mandated SBOM production for federal software suppliers, elevating open source licence compliance to a regulatory concern.
  - **EU Cyber Resilience Act (CRA)** — imposes security requirements on products with digital elements, including open source components in commercial distributions; creates obligations for maintainers whose code is incorporated in commercial products.
  - **OpenChain (ISO/IEC 5230)** — a compliance standard for open source licence management processes in supply chains, maintained by the Linux Foundation.

- ### Provenance
  - sources:: [[https://opensource.org/osd]], [[https://opensource.org/licenses]]
  - updated:: 2026-06-13
