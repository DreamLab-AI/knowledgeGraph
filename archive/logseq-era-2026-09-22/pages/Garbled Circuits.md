public:: true

# Garbled Circuits

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:garbled-circuits",
  "@type": "Page",
  "title": "Garbled Circuits",
  "vc:slug": "garbled-circuits",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:garbled-circuits",
  "@type": "Class",
  "label": "Garbled Circuits",
  "definition": "Garbled Circuits is a cryptographic technique, introduced by Yao in 1986, that enables two-party secure computation by encoding a Boolean circuit such that one party (the garbler) produces an encrypted representation of the circuit and the other party (the evaluator) can compute the output without learning the garbler's private inputs. Each gate of the circuit is replaced by a garbled truth table consisting of four ciphertexts, and the evaluator decrypts exactly one row per gate using wire labels obtained through [[Oblivious Transfer]]. Modern optimisations — including Free XOR, Half Gates, and Three Halves — reduce the communication and computation overhead to practical levels. Garbled circuits are foundational to general-purpose [[Multi-Party Computation]] and form the basis of many practical secure function evaluation protocols.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:oblivious-transfer", "label": "Oblivious Transfer"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:multi-party-computation", "label": "Multi-Party Computation"},
      {"@id": "urn:ngm:class:privacy-preserving-computation", "label": "Privacy-Preserving Computation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:oblivious-transfer", "label": "Oblivious Transfer"},
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:secure-data-sharing", "label": "Secure Data Sharing"},
      {"@id": "urn:ngm:class:privacy-preserving-machine-learning", "label": "Privacy-Preserving Machine Learning"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:cryptographic-key", "label": "Cryptographic Key"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:homomorphic-encryption", "label": "Homomorphic Encryption"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"},
      {"@id": "urn:ngm:class:secure-aggregation", "label": "Secure Aggregation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:privacy-preserving-analytics", "label": "Privacy Preserving Analytics"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:homomorphic-encryption-for-machine-learning", "label": "Homomorphic Encryption for Machine Learning"}
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
  - [[Garbled Circuits]] is a foundational [[Cryptographic Primitive]] enabling two-party secure function evaluation, invented by Andrew Yao, wherein a Boolean circuit is encrypted gate-by-gate so that the evaluator computes the output without learning any intermediate wire values.
  - The protocol depends critically on [[Oblivious Transfer]] to deliver input wire labels to the evaluator without revealing the garbler's input choice.
  - It is contrasted with [[Homomorphic Encryption]], which supports computation over encrypted data without the interactive two-party structure.

- ### Overview
  - Garbled circuits were the first general solution to the two-party secure computation problem ("Yao's millionaires' problem").
  - Practical performance has improved by multiple orders of magnitude through Free XOR (halving XOR gate cost), Half Gates (two rows per AND gate), and Three Halves (1.5 rows per AND gate) optimisations.
  - Modern frameworks — EMP-toolkit, SCALE-MAMBA, ABY — implement garbled circuits alongside secret sharing for hybrid [[Multi-Party Computation]].

- ### Key aspects
  - **Garbling scheme**: probabilistic encoding mapping each Boolean wire to two semantically secure labels.
  - **Gate garbling**: four ciphertexts per AND gate (or zero for XOR under Free XOR); evaluation decrypts exactly one.
  - **[[Oblivious Transfer]] extension**: reduces the cost of transferring input labels from O(n) public-key ops to O(n) symmetric-key ops.
  - **Circuit optimisation**: standardised circuit representation (Bristol Fashion) enables compiler-level gate minimisation.
  - **Composability**: garbled circuits can be composed with arithmetic secret sharing for mixed-protocol computation.

- ### Mechanisms
  - The garbler assigns two random labels (W₀, W₁) to each wire, encoding the 0 and 1 values.
  - For each gate, four ciphertexts are produced by double-encrypting the output label using the input wire labels as keys.
  - The evaluator, holding one label per input wire via [[Oblivious Transfer]], decrypts exactly one ciphertext per gate following the circuit topology.
  - Output labels are revealed to the evaluator by the garbler only after evaluation completes.

- ### Applications
  - Privacy-preserving biometric matching (fingerprint, iris) where templates stay encrypted.
  - [[Privacy-Preserving Machine Learning]] inference on sensitive client inputs without exposing model weights.
  - Secure auctions and tender submissions where bids remain private until the closing moment.
  - Financial benchmarking allowing banks to compute aggregate statistics without revealing individual positions.

- ### Relationships
  - uses:: [[Oblivious Transfer]], [[Cryptographic Protocol]], [[Cryptographic Commitment]]
  - implements:: [[Multi-Party Computation]], [[Privacy-Preserving Computation]]
  - hasPart:: [[Oblivious Transfer]], [[Cryptographic Primitive]]
  - enables:: [[Secure Data Sharing]], [[Privacy-Preserving Machine Learning]]
  - dependsOn:: [[Cryptographic Hash Function]], [[Cryptographic Key]]
  - contrastsWith:: [[Homomorphic Encryption]], [[Zero-Knowledge Proof]]
  - relatedTo:: [[Cryptographic Protocol]], [[Secure Aggregation]]
  - supports:: [[Privacy Preserving Analytics]]
  - bridgesTo:: [[Homomorphic Encryption for Machine Learning]]

- ### Provenance
  - updated:: 2026-06-15
