public:: true

# Secure Multi-Party Computation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:76768eff07286846ad8d74934c391075acf755286ffcaff4bfb8a87d21e8ab32",
  "@type": "Page",
  "vc:slug": "secure-multi-party-computation",
  "title": "Secure Multi-Party Computation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mp-spdz",
      "vc:label": "MP-SPDZ"
    },
    {
      "@id": "urn:visionflow:linked:shamir-secret-sharing",
      "vc:label": "Shamir Secret Sharing"
    },
    {
      "@id": "urn:visionflow:linked:yao-s-garbled-circuits",
      "vc:label": "Yao's Garbled Circuits"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0419"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Secure Multi-Party Computation"
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
  "@id": "urn:ngm:class:secure-multi-party-computation",
  "@type": "Class",
  "label": "Secure Multi-Party Computation",
  "definition": "Secure Multi-Party Computation (MPC) is a cryptographic protocol enabling multiple parties to jointly compute functions over their combined private inputs without revealing individual inputs to other participants or third parties. Only the final output is disclosed; intermediate computations remain confidential. Key implementation techniques include secret sharing (Shamir), garbled circuits (Yao), and oblivious transfer primitives.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptography",
    "label": "Cryptography"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:secret-sharing", "label": "Secret Sharing"},
      {"@id": "urn:ngm:class:garbled-circuit", "label": "Garbled Circuit"},
      {"@id": "urn:ngm:class:oblivious-transfer", "label": "Oblivious Transfer"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:privacy-enhancing-computation-pec", "label": "Privacy-Enhancing Computation (PEC)"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"},
      {"@id": "urn:ngm:class:secure-channel", "label": "Secure Channel"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:homomorphic-encryption", "label": "Homomorphic Encryption"},
      {"@id": "urn:ngm:class:shamir-secret-sharing", "label": "Shamir Secret Sharing"},
      {"@id": "urn:ngm:class:yao-s-garbled-circuits", "label": "Yao's Garbled Circuits"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:privacy-preserving-data-sharing", "label": "Privacy Preserving Data Sharing"},
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"},
      {"@id": "urn:ngm:class:private-set-intersection", "label": "Private Set Intersection"},
      {"@id": "urn:ngm:class:secure-aggregation", "label": "Secure Aggregation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:trusted-execution-environment", "label": "Trusted Execution Environment"},
      {"@id": "urn:ngm:class:fully-homomorphic-encryption", "label": "Fully Homomorphic Encryption"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:privacy-preserving-machine-learning", "label": "Privacy-Preserving Machine Learning"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:privacy-preserving-technology", "label": "Privacy Preserving Technology"},
      {"@id": "urn:ngm:class:privacy-enhancing-computation-pec", "label": "Privacy-Enhancing Computation (PEC)"},
      {"@id": "urn:ngm:class:threshold-cryptography", "label": "Threshold Cryptography"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:mpc", "label": "MPC"},
    {"@id": "urn:ngm:class:multi-party-computation", "label": "Multi-Party Computation"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:secure-multi-party-computation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:76768eff07286846ad8d74934c391075acf755286ffcaff4bfb8a87d21e8ab32"
  },
  "vc:resolutions": [
    {
      "raw": "[[MP-SPDZ]]",
      "resolved": "urn:visionflow:linked:mp-spdz",
      "kind": "StubLink"
    },
    {
      "raw": "[[Shamir Secret Sharing]]",
      "resolved": "urn:visionflow:linked:shamir-secret-sharing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Yao's Garbled Circuits]]",
      "resolved": "urn:visionflow:linked:yao-s-garbled-circuits",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
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
  - Secure Multi-Party Computation is a cryptographic protocol enabling multiple parties to jointly compute functions over their combined private inputs without revealing individual inputs to other participants or trusted third parties, ensuring that only the final output is disclosed while intermediate computations remain confidential. This technique provides privacy guarantees through mathematical protocols where each party holds secret input x_i, parties execute cryptographic protocol computing function f(x_1, x_2, ..., x_n), and only the result is revealed while intermediate values remain hidden, with security models including semi-honest (honest-but-curious) adversaries following protocol but attempting to infer extra information, and malicious adversaries arbitrarily deviating from protocol requiring verification mechanisms. Implementation techniques span secret sharing methods where values are split into shares distributed across parties enabling computation through share manipulation (Shamir secret sharing for n parties with threshold t, replicated secret sharing for 3-party protocols), garbled circuits where one party creates encrypted circuit and another evaluates it without learning inputs or intermediate values (suitable for 2-party boolean circuits), and oblivious transfer primitives enabling receiver to obtain one of sender's inputs without sender knowing which was chosen or receiver learning others. ML applications include privacy-preserving model evaluation where parties jointly evaluate ML models without exposing proprietary models or sensitive test data, federated learning with secure aggregation preventing server from seeing individual participant updates even during aggregation, and private benchmarking enabling companies to compare ML model performance without revealing architectures or proprietary data. The 2024-2025 period demonstrated MPC feasibility for production systems though computational overheads remained significant (10-1000x slowdown), with successful deployments in financial consortia jointly training fraud detection models, healthcare collaborations enabling multi-institutional research without data sharing, and private set intersection protocols identifying common elements without revealing non-overlapping data.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SecureMultiPartyComputation
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Secure Multi-Party Computation — content pending enrichment.

- ### Provenance
  - sources:: [[Yao's Garbled Circuits]], [[Shamir Secret Sharing]], [[MP-SPDZ]]
  - migration-date:: 2026-04-26T00:00:00Z
