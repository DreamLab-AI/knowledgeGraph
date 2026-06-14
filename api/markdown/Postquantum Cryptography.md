public:: true

# Postquantum Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af028d9159334bb7f0da12e41ff1afd976b2ee2e3ea28bae30346d37bb78fd4a",
  "@type": "Page",
  "vc:slug": "postquantum-cryptography",
  "title": "Postquantum Cryptography",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "ME-0019"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Postquantum Cryptography"
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
  "@id": "urn:ngm:class:postquantum-cryptography",
  "@type": "Class",
  "label": "Postquantum Cryptography",
  "definition": "Postquantum Cryptography (PQC) is the class of cryptographic algorithms designed to remain secure against adversaries equipped with large-scale quantum computers, replacing public-key schemes such as RSA and elliptic-curve cryptography that are broken by Shor's algorithm. PQC families include lattice-based, hash-based, code-based, and isogeny-based constructions, several of which NIST standardised in 2024 (e.g. CRYSTALS-Kyber, CRYSTALS-Dilithium).",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:asymmetric-encryption", "label": "Asymmetric Encryption"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cyber-security-and-cryptography", "label": "Cyber Security and Cryptography"},
      {"@id": "urn:ngm:class:cybersecurity-standard", "label": "Cybersecurity Standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:quantum-computation-paradigm", "label": "Quantum Computation Paradigm"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:blockchain-application", "label": "Blockchain Application"},
      {"@id": "urn:ngm:class:digital-signature-verification", "label": "Digital Signature Verification"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:post-quantum-cryptography",
      "label": "Post-Quantum Cryptography"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:postquantum-cryptography:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:af028d9159334bb7f0da12e41ff1afd976b2ee2e3ea28bae30346d37bb78fd4a"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
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
  - [Generated from Gartner emerging tech analysis]

- ### Semantic Classification
  - owl-class:: infrastructure:PostquantumCryptography
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **Contrasts with** the quantum-vulnerable [[Elliptic Curve Cryptography]], [[Public-Key Cryptography]], and [[Asymmetric Encryption]] schemes it is designed to supersede.
  - **Requires** [[Cryptographic Hash Function]] primitives and sound [[Cryptographic Key Management]] for hybrid and hash-based constructions.
  - **Enables** quantum-safe [[Digital Signature]]s, forward-secure [[Public-Key Infrastructure]], and [[Censorship Resistance]] for long-lived data.
  - **Uses** [[Encryption]] and [[Hash Function]] building blocks; **supports** [[Cyber Security and Cryptography]] practice and [[Cybersecurity Standard]] compliance.
  - **Related to** [[Quantum Computation Paradigm]], [[Zero-Knowledge Proof]] systems, [[Blockchain Application]]s, and [[Digital Signature Verification]].

- ### Content

  ## Overview

  - Post-Quantum Cryptography (PQC)
  - Precise technical definition
    - Post-quantum cryptography refers to cryptographic algorithms designed to be secure against attacks from both classical and quantum computers, particularly targeting the vulnerabilities of current public-key cryptosystems such as RSA, Diffie-Hellman, and Elliptic Curve Cryptography when faced with quantum algorithms like Shor’s algorithm.
    - These algorithms are typically based on mathematical problems believed to be hard for quantum computers to solve, such as lattice-based, hash-based, code-based, multivariate, and isogeny-based problems.
  - Current state and implementations (2024–2025)
    - The National Institute of Standards and Technology (NIST) has standardised several PQC algorithms, including CRYSTALS-Kyber for key encapsulation and CRYSTALS-Dilithium, Falcon, and SPHINCS+ for digital signatures.
    - Organisations globally are beginning hybrid deployments, combining classical and post-quantum algorithms to ensure forward secrecy and mitigate risks from future quantum attacks.
    - Major technology firms, financial institutions, and cloud providers are integrating PQC into their security stacks, with early adopters focusing on protecting long-term sensitive data.
    - In the UK, the National Cyber Security Centre (NCSC) has issued guidance recommending that organisations begin planning for PQC migration, especially those handling data with long-term confidentiality requirements.
  - UK context and examples, especially North England
    - The UK government, through the NCSC and the Department for Science, Innovation and Technology, is actively supporting the transition to quantum-safe cryptography, with specific guidance for critical national infrastructure and public sector organisations.
    - In North England, universities such as the University of Manchester and Newcastle University are involved in PQC research, often collaborating with industry partners and government agencies.
    - Regional initiatives, such as the Northern Quantum Initiative, foster collaboration between academia, industry, and government to advance quantum technologies and cybersecurity, including PQC.
    - UK financial institutions and healthcare providers in the North are beginning to assess their cryptographic posture and plan for PQC migration, driven by regulatory expectations and the need to protect sensitive data.
  - Key research papers and sources with full citations
    - National Institute of Standards and Technology (NIST). (2022). *NIST Standardizes Post-Quantum Cryptography Algorithms*. NISTIR 8413. https://doi.org/10.6028/nist.ir.8413
    - Bernstein, D. J., Lange, T., & Schwabe, P. (2017). *Post-quantum cryptography*. In *Handbook of Applied Cryptography* (2nd ed.). CRC Press.
    - Alagic, G., et al. (2022). *Status Report on the Third Round of the NIST Post-Quantum Cryptography Standardization Process*. NISTIR 8413. https://doi.org/10.6028/nist.ir.8413
    - National Cyber Security Centre (NCSC). (2023). *Post-Quantum Cryptography: Guidance for UK Organisations*. https://www.ncsc.gov.uk/collection/post-quantum-cryptography
    - University of Manchester. (2024). *Quantum-Safe Cryptography Research*. https://www.manchester.ac.uk/research/quantum-safe-cryptography
  - Future outlook
    - The transition to PQC is expected to accelerate over the next decade, driven by regulatory mandates, technological advancements, and the increasing threat of quantum attacks.
    - Hybrid cryptographic solutions will remain prevalent during the transition period, ensuring backward compatibility and robust security.
    - Ongoing research will focus on improving the efficiency, scalability, and practicality of PQC algorithms, as well as addressing implementation challenges such as side-channel attacks and interoperability.
    - The UK is likely to play a leading role in PQC adoption and research, with continued investment in quantum technologies and cybersecurity infrastructure.

  #### UK Context
  - British contributions and implementations
  - Research institutions and programmes
  - Industry adoption
  - North England innovation (where relevant)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
