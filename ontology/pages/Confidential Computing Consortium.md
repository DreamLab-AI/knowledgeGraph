public:: true

# Confidential Computing Consortium

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:confidential-computing-consortium",
  "@type": "Page",
  "title": "Confidential Computing Consortium",
  "vc:slug": "confidential-computing-consortium",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:confidential-computing-consortium",
  "@type": "Class",
  "label": "Confidential Computing Consortium",
  "definition": "The Confidential Computing Consortium is a Linux Foundation project that brings together hardware vendors, cloud providers and software firms to advance the adoption and standardisation of confidential computing. It defines confidential computing as protecting data in use by performing computation within a hardware-based trusted execution environment. The consortium stewards open-source projects, terminology and best practices that promote interoperable enclave technologies.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-documentation",
      "label": "Standards Documentation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:standards-documentation",
        "label": "Standards Documentation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-documentation",
        "label": "Standards Documentation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:secure-enclave",
        "label": "Secure Enclave"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The Confidential Computing Consortium is a Linux Foundation project that brings together hardware vendors, cloud providers and software firms to advance the adoption and standardisation of confidential computing. It defines confidential computing as protecting data in use by performing computation within a hardware-based trusted execution environment. The consortium stewards open-source projects, terminology and best practices that promote interoperable enclave technologies.
  - Related concepts: [[Confidential Computing]] [[Trusted Execution Environment]] [[Secure Enclave]] [[Standards Documentation]]
- ### Overview
  - The Confidential Computing Consortium organises industry collaboration around protecting data while it is being processed. Its members host and govern open-source projects spanning enclave runtimes, attestation frameworks and SDKs, and it publishes a shared technical vocabulary that distinguishes data in use from data at rest and in transit. By coordinating across competing hardware platforms it aims to make confidential computing portable and verifiable.
- ### Key aspects
  - Linux Foundation governance and neutral stewardship
  - Shared definitions for data-in-use protection
  - Hosting of open-source enclave and attestation projects
  - Cross-vendor interoperability for trusted execution
  - Best-practice guidance and a technical advisory council
- ### Mechanisms
  - Linux Foundation governance and neutral stewardship
  - Shared definitions for data-in-use protection
  - Hosting of open-source enclave and attestation projects
- ### Applications
  - Coordinating enclave runtime open-source projects
  - Standardising remote attestation approaches
  - Promoting confidential cloud workload patterns
  - Aligning hardware vendor TEE terminology
  - Educating industry on data-in-use protection
- ### Relationships
  - subClassOf:: [[Standards Documentation]]
  - partOf:: [[Standards Documentation]]
  - standardizedBy:: [[Standards Documentation]]
  - supports:: [[Confidential Computing]]
  - supports:: [[Trusted Execution Environment]]
  - enables:: [[Secure Enclave]]
  - relatedTo:: [[Trusted Execution Environment]]
  - relatedTo:: [[Homomorphic Encryption]]
  - uses:: [[Attestation]]
  - bridgesTo:: [[Confidential Computing]]
  - contrastsWith:: [[Homomorphic Encryption]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
