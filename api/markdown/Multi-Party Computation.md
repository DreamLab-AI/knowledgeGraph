public:: true

# Multi-Party Computation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-party-computation",
  "@type": "Page",
  "vc:slug": "multi-party-computation",
  "title": "Multi-Party Computation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-party-computation",
  "@type": "Class",
  "label": "Multi-Party Computation",
  "definition": "Multi-Party Computation (MPC) is a subfield of cryptography that enables a set of mutually distrusting parties to jointly compute a function over their private inputs without revealing those inputs to any other participant. Correctness is guaranteed even when a bounded subset of participants behave maliciously, making MPC a cornerstone of privacy-preserving collaborative computation. The technique generalises two-party secure computation to arbitrary numbers of participants using secret-sharing or garbled-circuit protocols.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:secure-multi-party-computation", "label": "Secure Multi-Party Computation"},
      {"@id": "urn:ngm:class:threshold-cryptography", "label": "Threshold Cryptography"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:homomorphic-encryption", "label": "Homomorphic Encryption"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-data-sharing", "label": "Privacy Preserving Data Sharing"},
      {"@id": "urn:ngm:class:privacy-preserving-analytics", "label": "Privacy Preserving Analytics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Multi-Party Computation]] is a [[Cryptography]] protocol family that allows distrusting parties to jointly evaluate a function over secret inputs using [[Cryptographic Protocol]] primitives such as secret sharing and oblivious transfer, ensuring neither input leakage nor output manipulation even under a bounded adversarial coalition.

- ### Relationships
  - MPC is a direct generalisation of [[Secure Multi-Party Computation]] and shares deep connections with [[Zero-Knowledge Proof]] and [[Homomorphic Encryption]] as complementary privacy tools. [[Threshold Cryptography]] applies MPC principles to key management. Practically, MPC [[enables]] [[Privacy Preserving Data Sharing]] and [[Privacy Preserving Analytics]] without requiring a trusted third party, relying on [[Public-Key Cryptography]] foundations.

- ### Content
  - Andrew Yao introduced the two-millionaires problem in 1982 as the first formal treatment of secure two-party computation, proving that any polynomial-time function can be computed securely. Goldreich, Micali, and Wigderson extended this to the multi-party setting in 1987 with the GMW protocol, establishing that MPC is possible under standard cryptographic assumptions. The field remained largely theoretical until the mid-2000s when practical efficiency improvements made deployment feasible.

  - MPC protocols fall into two main families. Secret-sharing approaches (Shamir, BGW, SPDZ) distribute secrets among parties as polynomial shares; computation proceeds on shares without reconstruction until the final output. Garbled-circuit approaches (Yao) encode Boolean or arithmetic circuits so that one party evaluates them obliviously. Modern frameworks such as SCALE-MAMBA and MP-SPDZ combine both paradigms, supporting dishonest-majority security with near-linear communication overhead.

  - Deployed applications include privacy-preserving statistics in healthcare (Boston Women's Workforce Council salary study), threshold key management for digital asset custody (Fireblocks, Zengo), private set intersection for contact discovery (Signal, Apple Private Relay), and GDPR-compliant data collaboration between competing firms. The integration of MPC with federated learning produces models without exposing individual training records.

  - By 2024-2025, MPC has moved from niche academic deployments to mainstream fintech and cloud services: AWS, Google, and Azure offer managed MPC primitives. Lattice-based post-quantum MPC is an active research frontier. The convergence of MPC with zero-knowledge proofs in systems like zkSNARKs is enabling verifiable MPC where not only privacy but also correctness of computation can be publicly proven.

