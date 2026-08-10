```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:open-source-software",
  "title": "Open Source Software",
  "vc:slug": "open-source-software",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-source-software",
  "@type": "Class",
  "label": "Open Source Software",
  "definition": "Open Source Software (OSS) is software distributed with source code made publicly available under a licence that grants users the rights to inspect, modify, and redistribute the software and its derivatives. OSS development follows collaborative models coordinated through version-controlled repositories, issue trackers, and community governance structures, enabling distributed contribution at global scale. Canonical licence categories range from permissive instruments (MIT, Apache 2.0, BSD) to copyleft instruments (GPL, LGPL, AGPL) that impose viral redistribution obligations. In the AI, spatial-computing, and broader technology infrastructure landscape, OSS underpins foundational frameworks — including deep learning toolkits, container runtimes, distributed databases, and interoperability specifications — reducing vendor lock-in and accelerating innovation through transparent, auditable codebases.",
  "domain": "infrastructure",
  "maturity": "mature",
  "quality": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:open-source-licence", "label": "Open Source Licence"},
      {"@id": "urn:ngm:class:software-repository", "label": "Software Repository"},
      {"@id": "urn:ngm:class:community-governance", "label": "Community Governance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:intellectual-property-licence-instrument", "label": "Intellectual Property Licence Instrument"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"},
      {"@id": "urn:ngm:class:software-supply-chain", "label": "Software Supply Chain"},
      {"@id": "urn:ngm:class:community-driven-innovation", "label": "Community-Driven Innovation"},
      {"@id": "urn:ngm:class:reproducible-research", "label": "Reproducible Research"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:software-library", "label": "Software Library"},
      {"@id": "urn:ngm:class:continuous-integration", "label": "Continuous Integration"},
      {"@id": "urn:ngm:class:package-manager", "label": "Package Manager"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"},
      {"@id": "urn:ngm:class:open-source-definition", "label": "Open Source Definition"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralised-governance", "label": "Decentralised Governance"},
      {"@id": "urn:ngm:class:open-source-framework", "label": "Open Source Framework"},
      {"@id": "urn:ngm:class:digital-public-goods", "label": "Digital Public Goods"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:open-source-initiative", "label": "Open Source Initiative"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proprietary-software", "label": "Proprietary Software"},
      {"@id": "urn:ngm:class:closed-source-software", "label": "Closed-Source Software"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:inner-source", "label": "Inner Source"},
      {"@id": "urn:ngm:class:free-software-movement", "label": "Free Software Movement"},
      {"@id": "urn:ngm:class:software-commons", "label": "Software Commons"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:open-source", "label": "Open Source"},
    {"@id": "urn:ngm:class:foss", "label": "FOSS"},
    {"@id": "urn:ngm:class:floss", "label": "FLOSS"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Open Source Software (OSS) is software distributed with its source code under terms that permit any user to study, modify, and redistribute the software and derivative works. The [[Open Source Definition]], maintained by the [[Open Source Initiative]], codifies the ten criteria a licence must satisfy — including free redistribution, access to source code, and non-discrimination against persons, groups, and fields of endeavour — to be recognised as genuinely open source. OSS contrasts with [[Proprietary Software]] by making the implementation fully auditable, enabling community-driven bug discovery and security review. Modern OSS ecosystems rely on [[Version Control]] platforms (principally [[Git]] and hosting services such as GitHub and GitLab), [[Package Manager]] infrastructure, and [[Continuous Integration]] pipelines to coordinate global contributor networks.

- ### Overview
  - OSS emerged from academic computing culture and the hacker tradition of the 1960s–1970s, was formalised by Richard Stallman's [[Free Software Movement]] in 1983 (GNU Project, GPL), and gained commercial legitimacy through the term "open source" coined by the [[Open Source Initiative]] in 1998.
  - The distinction between the [[Free Software Foundation]]'s philosophical framing and the pragmatic "open source" label remains contested but reflects a spectrum rather than a binary — both are captured under the umbrella term [[FLOSS]] (Free/Libre and Open Source Software).
  - OSS succeeds because of network effects in contribution: a large, transparent codebase attracts more reviewers and contributors than a closed codebase of equal size, compressing time-to-fix for defects and enabling rapid feature evolution.
  - Economic models have evolved from pure volunteer contribution to commercially backed foundations (Linux Foundation, Apache Software Foundation, Eclipse Foundation, CNCF), dual-licensing, open-core SaaS, and support/services businesses.
  - The global [[Software Supply Chain]] now depends critically on OSS components: nearly all cloud infrastructure, AI frameworks, web servers, container runtimes, and programming language toolchains are open source.

- ### Key Components
  - **Licence Instruments** — the legal instrument governing reuse:
    - Permissive: [[MIT Licence]], [[Apache 2.0 Licence]], [[BSD Licence]] — impose minimal obligations; allow proprietary derivative works.
    - Copyleft: [[GPL]], [[LGPL]], [[AGPL]] — require derivative works to carry the same licence; strong copyleft (AGPL) extends to network-accessed services.
    - Creative Commons — applied to OSS documentation and non-code assets.
    - Managed by the [[Open Source Initiative]] (OSI) approved list.
  - **Source Code Repository** — the canonical artefact store:
    - [[Git]] version control with branching, tagging, and merge-request workflows.
    - [[Software Repository]] platforms: GitHub, GitLab, Codeberg, SourceForge (legacy).
    - Monorepo vs poly-repo architecture choices affect dependency management and release cadence.
  - **Community Governance**:
    - Benevolent Dictator For Life (BDFL) model (Python, Linux historically).
    - Foundation-steered meritocracy (Apache Way, CNCF TOC).
    - [[Decentralised Governance]] via on-chain voting in some Web3-adjacent projects.
    - Contributor Covenant and similar [[Code of Conduct]] instruments for community standards.
  - **Build and Distribution Infrastructure**:
    - [[Package Manager]] ecosystems: npm, PyPI, Maven Central, crates.io, Homebrew, apt/rpm.
    - [[Continuous Integration]] / [[Continuous Deployment]] (CI/CD) pipelines: GitHub Actions, Jenkins, CircleCI.
    - Container images published to Docker Hub, GitHub Container Registry.
    - Software Bill of Materials ([[SBOM]]) for supply-chain transparency.
  - **Documentation and Community Tooling**:
    - Issue trackers, discussion forums, mailing lists, and RFCs as async coordination mechanisms.
    - Wiki and generated API documentation (Sphinx, Javadoc, rustdoc).
    - [[Roadmap]] and deprecation lifecycle management.

- ### Applications and Use Cases
  - **AI and Machine Learning**:
    - [[Open-Source AI]] frameworks — TensorFlow, PyTorch, JAX, Hugging Face Transformers — are almost universally open source, enabling reproducibility and democratised access to large-model training.
    - [[Federated Learning]] frameworks (Flower, OpenFL, PySyft) are open source, facilitating privacy-preserving collaborative training across organisations.
    - Open model weights and model cards extend OSS principles to AI artefacts beyond code.
  - **Cloud and Infrastructure**:
    - Linux kernel, Kubernetes, Docker, Terraform, Prometheus, and Grafana collectively define the modern cloud-native stack.
    - [[Digital Twin]] simulation platforms (Eclipse Ditto, Siemens OpenTwin) rely on OSS middleware.
    - Hyperledger Fabric and similar blockchain frameworks for enterprise distributed ledgers draw on OSS to enable auditability.
  - **Spatial Computing and the Metaverse**:
    - OpenXR specification implemented by open-source runtimes (Monado) supports [[Spatial Computing]] interoperability.
    - Godot Engine provides an open-source alternative to proprietary game engines for immersive applications.
    - USD (Universal Scene Description) ecosystem includes open-source tools from Pixar, enabling interoperable 3D content pipelines.
  - **Security and Cryptography**:
    - OpenSSL, libsodium, Bouncy Castle, and Signal Protocol are OSS cryptographic libraries underpinning internet-scale [[Security]] infrastructure.
    - Open-source security scanners (Trivy, Snyk OSS, OWASP ZAP) audit the [[Software Supply Chain]].
  - **Governance and Standards**:
    - [[Digital Public Goods]] frameworks (UN DPGA) require OSS as a condition for recognition.
    - Government-mandated OSS policies (EU, India, Germany) for public-sector digital services align with sovereignty and transparency objectives.
    - [[Smart Contract]] platforms (Ethereum clients: Geth, Nethermind) are open source, enabling trustless verification of blockchain logic.
  - **Research and Reproducibility**:
    - [[Reproducible Research]] in science depends on OSS toolchains (Jupyter, R, Python SciPy stack).
    - OSS genomics, climate modelling, and particle physics pipelines (ROOT, OpenMM) are canonical examples.

- ### Relationships
  - hasPart:: [[Open Source Licence]]
  - hasPart:: [[Software Repository]]
  - hasPart:: [[Community Governance]]
  - requires:: [[Version Control]]
  - requires:: [[Intellectual Property Licence Instrument]]
  - enables:: [[Open-Source AI]]
  - enables:: [[Distributed Collaboration]]
  - enables:: [[Software Supply Chain]]
  - enables:: [[Community-Driven Innovation]]
  - enables:: [[Reproducible Research]]
  - uses:: [[Software Library]]
  - uses:: [[Continuous Integration]]
  - uses:: [[Package Manager]]
  - implements:: [[Open Standard]]
  - implements:: [[Open Source Definition]]
  - supports:: [[Decentralised Governance]]
  - supports:: [[Open Source Framework]]
  - supports:: [[Digital Public Goods]]
  - standardizedBy:: [[Open Source Initiative]]
  - contrastsWith:: [[Proprietary Software]]
  - contrastsWith:: [[Closed-Source Software]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Inner Source]]
  - relatedTo:: [[Free Software Movement]]
  - relatedTo:: [[Software Commons]]

- ### Standards and Governance Context
  - **Open Source Definition (OSD)** — the normative ten-point definition maintained by the [[Open Source Initiative]] (OSI) since 1998; the authoritative criterion for licence certification.
  - **SPDX (Software Package Data Exchange)** — Linux Foundation standard for communicating software licence and copyright metadata; underpins SBOM interoperability.
  - **OpenChain (ISO/IEC 5230)** — international standard for open source compliance programme management in organisations.
  - **EU Cyber Resilience Act** — imposes security requirements on products with OSS components; shapes how open source foundations manage vulnerability disclosure.
  - **NTIA SBOM minimum elements** — US government guidance requiring SBOM documentation in software acquired for federal use, affecting OSS project packaging obligations.
  - **Foundations**: [[Apache Software Foundation]], [[Linux Foundation]], [[Eclipse Foundation]], Cloud Native Computing Foundation (CNCF), Software Freedom Conservancy, GNOME Foundation.
  - **Licence compatibility** — copyleft licence interaction creates incompatibility graphs that maintainers and legal teams must navigate when combining components; the OSI maintains compatibility guidance.
  - **CRA (EU Cyber Resilience Act)** exemptions and obligations for open source stewards represent an evolving regulatory frontier as of 2024–2025.

- ### Current Landscape (2026)
  - The EU Cyber Resilience Act (Regulation (EU) 2024/2847) entered into force on 10 December 2024 and is reshaping open-source obligations: manufacturer vulnerability and incident reporting duties apply from 11 September 2026, with full applicability on 11 December 2027, and the Commission published practical implementation guidance on 27 July 2026.
  - The CRA introduces a new legal category, the "open-source software steward" (Article 24) — foundations or organisations that sustain FOSS intended for commercial use face a light-touch regime (a cybersecurity policy plus vulnerability reporting) and, under Article 64(10), are exempt from administrative fines; individual maintainers and non-monetised projects remain out of scope.
  - The Act elevates the Software Bill of Materials from best practice to a legal requirement, with manufacturers obliged to produce machine-readable SBOMs (SPDX or CycloneDX) covering at least top-level dependencies, given that roughly 76% of a typical application is open-source code.
  - The OSI's Open Source AI Definition (OSAID v1.0, released October 2024) continues to set the openness benchmark, requiring the four freedoms plus available training-data information; systems such as Pythia, OLMo, Amber and T5 passed validation while Llama 2, Grok, Phi-2 and Mixtral did not, and OSI plans to run an issues process and update the definition by Q4 2026.
  - Ecosystem coordination is intensifying: OpenSSF, Linux Foundation Research and Linux Foundation Europe published "Unaware and Uncertain: The Stark Realities of Cyber Resilience Act Readiness in Open Source" in 2025, and on 30 July 2026 the Eclipse Foundation and OWASP signed an MoU on CRA readiness, steward support and SBOM adoption.
  - Security is the dominant frontier: following the 2024 xz Utils backdoor, OpenSSF CTO Christopher Robinson (CROB) warned at KubeCon 2026 of a likely major AI-driven attack, citing AI-scaled sock-puppet social engineering, "slot squatting" on hallucinated package names, and the risk that a simultaneous flood of CRA-driven upstream patches overwhelms under-resourced maintainers.
  - Maintainer sustainability and funding remain unresolved as regulatory expectations rise faster than volunteer capacity, prompting OSI's 2025 launch of the Open Technology Research initiative to build the evidence base for future open-source policy.

- ### References
  - 1. European Commission (2026). Cyber Resilience Act — Open source. Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/cra-open-source
  - 2. Open Source Security Foundation (2026). EU Cyber Resilience Act (CRA). https://openssf.org/public-policy/eu-cyber-resilience-act/
  - 3. Open Source Initiative (2026). The OSI 2025 Annual Report Is Now Available. https://opensource.org/blog/the-osi-2025-annual-report-is-now-available
  - 4. Open Source Initiative (2024). Final Board Report — Open Source AI Definition v1.0. https://opensource.org/ai/final-board-report
  - 5. Eclipse Foundation and OWASP (2026). Eclipse Foundation and OWASP Join Forces to Strengthen Open Source Security and CRA Readiness. https://www.globenewswire.com/news-release/2026/07/30/3335836/0/en/eclipse-foundation-and-owasp-join-forces-to-strengthen-open-source-security-and-cra-readiness.html
  - 6. Techzine (2026). Why open source faces its biggest security threat in 2026. https://www.techzine.eu/blogs/security/141699/why-open-source-faces-its-biggest-security-threat-in-2026/

- ### Provenance
  - sources:: Open Source Initiative (opensource.org), Linux Foundation, Apache Software Foundation, FSF GNU Project, SPDX specification, ISO/IEC 5230 (OpenChain), NTIA SBOM guidance
  - updated:: 2026-06-13
