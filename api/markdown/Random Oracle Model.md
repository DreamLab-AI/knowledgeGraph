public:: true

# Random Oracle Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:796b976af707e4d661c0959f38771233bfe836f743d00831b7afadbbacfb1f41",
  "@type": "Page",
  "vc:slug": "random-oracle-model",
  "title": "Random Oracle Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Random Oracle Model"
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
  "@id": "urn:ngm:class:random-oracle-model",
  "@type": "Class",
  "label": "Random Oracle Model",
  "definition": "The Random Oracle Model (ROM) is a theoretical framework in cryptography that idealises a cryptographic hash function as a publicly accessible, truly random function: for every distinct input the oracle returns an independent, uniformly random output, while repeated queries return the same value. Introduced formally by Bellare and Rogaway in 1993, the ROM enables security proofs for practical schemes such as RSA-OAEP, ECDSA, and Schnorr signatures that cannot currently be proved secure under standard computational assumptions alone. Because no concrete hash function perfectly instantiates a random oracle, ROM proofs are treated as strong heuristic evidence rather than unconditional guarantees, and pathological counterexamples exist that are ROM-secure but concretely insecure under any hash instantiation.",
  "domain": "security",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation Function"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computational-complexity-theory",
        "label": "Computational Complexity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      },
      {
        "@id": "urn:ngm:class:sha-3",
        "label": "SHA-3"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:fiat-shamir-transform",
        "label": "Fiat-Shamir Transform"
      },
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:verifiable-random-function",
        "label": "Verifiable Random Function"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:rom",
      "label": "ROM"
    },
    {
      "@id": "urn:ngm:class:random-oracle-methodology",
      "label": "Random Oracle Methodology"
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
  "@id": "urn:visionflow:annotation:link-resolutions:random-oracle-model:0557a4fa7f57",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:796b976af707e4d661c0959f38771233bfe836f743d00831b7afadbbacfb1f41"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:linked:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
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
  - The **Random Oracle Model** (ROM) is a theoretical framework in [[Cryptography]] in which a [[Cryptographic Hash Function]] is idealised as a publicly accessible, truly random function. Every party — including the adversary — may query this oracle, receiving an independent, uniformly random response for each fresh input and the same response for repeated inputs. This idealisation, formalised by Bellare and Rogaway (1993), underpins [[Provable Security]] proofs for a wide range of practical schemes, including [[Digital Signature]] schemes, [[Public-Key Encryption]], and [[Zero-Knowledge Proof]] systems.

- ### Overview
  - The ROM addresses a fundamental tension in modern [[Cryptography]]: practical, efficient cryptographic schemes often lack security proofs under purely [[Standard Model]] assumptions, yet they are demonstrably secure in real deployments. The random oracle provides a powerful abstraction that permits tight, concrete security reductions.
  - **Why it matters**
    - Many widely deployed protocols — [[RSA-OAEP]], [[Schnorr Signature]], [[ECDSA]], [[Fiat-Shamir Transform]]-based non-interactive proofs — are ROM-secure but not known to be standard-model-secure.
    - ROM proofs give quantitative bounds linking adversarial advantage to the hardness of an underlying mathematical problem (e.g. factoring, discrete logarithm).
    - The model is a proof heuristic: no concrete [[Hash Function]] is provably a random oracle, but schemes proven in the ROM are considered sound engineering practice in the absence of structural attacks.
  - **Historical context**
    - The ROM was implicitly used in earlier signature schemes, then formalised by Mihir Bellare and Phillip Rogaway in their 1993 paper "Random Oracles are Practical: A Paradigm for Designing Efficient Protocols."
    - Canetti, Goldreich, and Halevi (1998) constructed pathological counterexamples: cryptographic schemes that are ROM-secure yet insecure under every concrete [[Hash Function]] instantiation, highlighting the model's theoretical limits.
    - Despite this foundational gap, the ROM remains the dominant proof methodology for practical [[Public-Key Encryption]] and [[Digital Signature]] schemes.

- ### Key Mechanisms
  - **Oracle access semantics**
    - All parties share access to a single function H: {0,1}* → {0,1}^n.
    - For each distinct query x, H(x) is sampled uniformly at random from {0,1}^n.
    - Identical queries return the same pre-sampled value (consistency).
    - The adversary is limited to a polynomial number of oracle queries.
  - **Security reduction structure**
    - A [[Reduction Proof]] shows that any efficient adversary breaking the scheme can be turned into an efficient algorithm solving the underlying hard problem (e.g. [[Computational Complexity]] problem such as integer factorisation or [[Discrete Logarithm]]).
    - The reduction "programs" oracle responses to embed the hard-problem instance, exploiting the adversary's oracle queries.
    - Tightness of the reduction (loss factor) determines the concrete security level at a given parameter size.
  - **Programmability and extractability**
    - ROM proofs often rely on the simulator's ability to *program* the oracle — to retroactively set H(x) = y for a chosen y — without the adversary noticing.
    - This allows the reduction to extract witness information from the adversary's queries (used in, e.g., [[Fiat-Shamir Transform]] security proofs).
  - **Concrete instantiation**
    - In deployed systems, the random oracle is replaced by a concrete [[Cryptographic Hash Function]] such as [[SHA-256]] or [[SHA-3]].
    - Security in practice relies on the hash function behaving sufficiently "random-like" — a property not formally provable from standard assumptions alone.

- ### Applications and Use Cases
  - **Signature schemes**
    - [[Schnorr Signature]]: the Fiat-Shamir paradigm converts an interactive Sigma protocol into a non-interactive signature by replacing the verifier's challenge with a hash output; ROM is essential to the security proof.
    - [[ECDSA]]: widely used in TLS, [[Blockchain]] (Bitcoin, Ethereum), and code signing; its security analysis relies on ROM.
    - [[EdDSA]] (Ed25519): deterministic signature scheme with ROM security proof.
  - **Public-key encryption**
    - [[RSA-OAEP]]: the OAEP padding transform converts textbook RSA into a semantically secure encryption scheme in the ROM; standardised in PKCS#1 v2.x and NIST FIPS.
    - ECIES (Elliptic Curve Integrated Encryption Scheme): hybrid encryption combining ECDH key agreement with a [[Key Derivation Function]] modelled as a random oracle.
  - **Zero-knowledge and proof systems**
    - [[Fiat-Shamir Transform]]: transforms interactive zero-knowledge proofs into non-interactive proofs usable as signatures or in [[Smart Contract]] verification on-chain.
    - zk-SNARK constructions (Groth16, PLONK) use ROM in their security arguments for the hash-to-curve and Fiat-Shamir components.
  - **Post-quantum constructions**
    - [[Post-Quantum Cryptography]] schemes such as CRYSTALS-Kyber and CRYSTALS-Dilithium (NIST PQC standards) rely heavily on ROM proofs in the quantum random oracle model (QROM) to account for quantum adversaries able to query the oracle in superposition.
  - **Blockchain and decentralised systems**
    - [[Verifiable Random Function]] (VRF) protocols used in proof-of-stake leader election (e.g. Algorand, Cardano) model the underlying hash as a random oracle.
    - [[Smart Contract]] audits assess whether hash-dependent logic (Fiat-Shamir-based proofs, commit-reveal schemes) maintains ROM-level security guarantees.

- ### Relationships
  - requires:: [[Hash Function]], [[Cryptographic Hash Function]], [[Provable Security]]
  - enables:: [[Digital Signature]], [[Public-Key Encryption]], [[Key Derivation Function]], [[Zero-Knowledge Proof]]
  - uses:: [[Reduction Proof]], [[Adversarial Model]], [[Computational Complexity]]
  - implements:: [[SHA-256]], [[SHA-3]]
  - contrastsWith:: [[Standard Model]], [[Generic Group Model]], [[Ideal Cipher Model]]
  - relatedTo:: [[RSA-OAEP]], [[Schnorr Signature]], [[Fiat-Shamir Transform]], [[ECDSA]], [[Post-Quantum Cryptography]], [[Indistinguishability Obfuscation]]
  - bridges-to:: [[Blockchain]], [[Smart Contract]], [[Verifiable Random Function]]
  - is-subclass-of:: [[Cryptographic Proof Model]]

- ### Limitations and Debates
  - **Uninstantiability**
    - The Canetti-Goldreich-Halevi (CGH) theorem proves that there exist ROM-secure schemes that are insecure under every concrete hash instantiation, making ROM a non-conservative security notion.
    - In practice, no natural scheme has been broken via the CGH construction, but the gap motivates ongoing research into [[Standard Model]] alternatives.
  - **Quantum random oracle model (QROM)**
    - Classical ROM proofs do not automatically extend to quantum adversaries, who can query H in superposition.
    - The QROM — introduced by Boneh, Dagdelen, Fischlin, Lehmann, Schaffner, and Zhandry (2011) — is now required for [[Post-Quantum Cryptography]] security arguments.
    - QROM proofs are technically harder; some schemes (e.g. hash-based signatures) have tight QROM proofs while others (e.g. Fiat-Shamir from Sigma protocols) require additional conditions.
  - **Programmability in multi-instance settings**
    - ROM proofs assume a single shared oracle; multi-instance or multi-user settings require careful analysis to avoid security degradation.
  - **Comparison with the [[Ideal Cipher Model]]**
    - The [[Ideal Cipher Model]] treats a block cipher as a uniformly random permutation for each key; it is related to but distinct from the ROM and used in compression-function and sponge-construction analysis.

- ### Standards and Context
  - **NIST standards using ROM**
    - FIPS 186-5 (Digital Signature Standard, 2023) specifies ECDSA and EdDSA, both ROM-secure.
    - FIPS 203/204/205 (ML-KEM, ML-DSA, SLH-DSA — post-quantum standards, 2024) include QROM security arguments.
    - PKCS#1 v2.2 / RFC 8017 specifies RSA-OAEP and RSA-PSS, both with ROM proofs.
  - **IETF and industry**
    - RFC 9380 (Hashing to Elliptic Curves) formalises hash-to-curve functions used in pairing-based and VRF protocols, modelling them as ROM components.
    - TLS 1.3 (RFC 8446) uses HKDF with a ROM-justified security analysis.
  - **Academic lineage**
    - Bellare–Rogaway 1993 (CCS): foundational ROM paper.
    - Canetti–Goldreich–Halevi 1998 (STOC): uninstantiability result.
    - Boneh et al. 2011 (ASIACRYPT): quantum random oracle model.
    - Pointcheval–Stern 1996, 2000: forking lemma formalising ROM proofs for Schnorr-type signatures.

- ### Semantic Classification
  - owl-class:: security:RandomOracleModel
  - owl-role:: Class

- ### Provenance
  - sources:: Bellare & Rogaway (1993); Canetti, Goldreich & Halevi (1998); NIST FIPS 186-5; NIST PQC standards (2024); RFC 8017; RFC 8446; RFC 9380
  - updated:: 2026-06-13
