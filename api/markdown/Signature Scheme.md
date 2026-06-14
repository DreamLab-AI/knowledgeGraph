public:: true

# Signature Scheme
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7d0b377e0fccd23d55b97463873b098520e0037e5d769eca4bf2cb361a8d1217",
  "@type": "Page",
  "vc:slug": "signature-scheme",
  "title": "Signature Scheme",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-primitive",
      "vc:label": "CryptographicPrimitive"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0039"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Signature Scheme"
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
  "@id": "urn:ngm:class:signature-scheme",
  "@type": "Class",
  "label": "Signature Scheme",
  "definition": "A Signature Scheme is a cryptographic primitive that provides a triple of algorithms—key generation, signing, and verification—enabling a party holding a private key to produce an unforgeable authentication tag over arbitrary messages that any holder of the corresponding public key can verify. In blockchain systems, signature schemes authenticate transactions, authorise state transitions, and underpin identity and ownership semantics across the distributed ledger.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography", "label": "Public-Key Cryptography"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:digital-signature-verification", "label": "Digital Signature Verification"},
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:signature-scheme:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7d0b377e0fccd23d55b97463873b098520e0037e5d769eca4bf2cb361a8d1217"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicPrimitive]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  A Signature Scheme is a cryptographic primitive that provides a triple of algorithms—key generation, signing, and verification—enabling a party holding a private key to produce an unforgeable authentication tag over arbitrary messages that any holder of the corresponding public key can verify. In blockchain systems, signature schemes authenticate transactions, authorise state transitions, and underpin identity and ownership semantics across the distributed ledger.

- ### Semantic Classification
  - owl-class:: blockchain:SignatureScheme
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]
  - hasPart:: [[Digital Signature]], [[Public-Key Cryptography]]
  - requires:: [[Hash Function]], [[Elliptic Curve Cryptography]]
  - enables:: [[Blockchain Transaction]], [[Digital Signature Verification]], [[Authentication]]
  - uses:: [[Public Key Infrastructure]], [[Key Management]]
  - relatedTo:: [[Distributed Ledger Technology]], [[Smart Contract]]

- ### Content

  ## Class Declaration
  Declaration(Class(:SignatureScheme))

  ## Subclass Relationships
  SubClassOf(:SignatureScheme :CryptographicPrimitive)
  SubClassOf(:SignatureScheme :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:SignatureScheme
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:SignatureScheme
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :SignatureScheme "BC-0039"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :SignatureScheme "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :SignatureScheme "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :SignatureScheme :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :SignatureScheme :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :SignatureScheme "Signature Scheme"@en)
  AnnotationAssertion(rdfs:comment :SignatureScheme
    "Digital signature algorithm"@en)
  AnnotationAssertion(dct:description :SignatureScheme
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :SignatureScheme "BC-0039")
  AnnotationAssertion(:priority :SignatureScheme "1"^^xsd:integer)
  AnnotationAssertion(:category :SignatureScheme "cryptographic-foundations"@en)
  )
      ```

  - ## About Signature Scheme

  A signature scheme is the cryptographic backbone of every blockchain transaction. When a user initiates a transfer, their wallet software hashes the transaction data and applies the signing algorithm using the user's private key, producing a compact signature. Nodes on the network then apply the verification algorithm using the sender's public key—derived from the corresponding blockchain address—to confirm authenticity and integrity before accepting the transaction into the mempool.

  The dominant signature scheme in early blockchain deployments is ECDSA over the secp256k1 elliptic curve, used by both Bitcoin and Ethereum. ECDSA provides approximately 128-bit security with 32-byte private keys and 64-byte signatures. More recent deployments favour EdDSA (Ed25519), which offers deterministic signing (eliminating the nonce-reuse vulnerability that has caused historical key compromises), faster verification, and simpler implementation. Schnorr signatures, adopted by Bitcoin via the Taproot upgrade, additionally enable native signature aggregation: multiple signers can produce a single compact signature indistinguishable from a single-signer signature, enabling privacy-preserving multi-party authorisation and significant block space savings.

  BLS (Boneh–Lynn–Shacham) signatures have emerged as the standard for proof-of-stake consensus layers (Ethereum Beacon Chain, Algorand, Filecoin). BLS supports non-interactive aggregation: thousands of validator attestation signatures can be collapsed into a single constant-size signature, reducing the consensus bandwidth overhead that would otherwise make large validator sets impractical. The security of BLS rests on the hardness of the computational Diffie–Hellman problem on pairing-friendly curves (BLS12-381 being the current standard).

  Post-quantum signature schemes are an active area: NIST's standardised lattice-based schemes (CRYSTALS-Dilithium, FALCON) and hash-based schemes (SPHINCS+) offer resistance to Shor's algorithm, at the cost of larger key and signature sizes. Blockchain protocol developers are actively researching migration paths to ensure long-term transaction authenticity even against quantum adversaries.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
