public:: true

# BBS+ Signatures
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bbs-signatures",
  "@type": "Page",
  "vc:slug": "bbs-signatures",
  "title": "BBS+ Signatures",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bbs-signatures",
  "@type": "Class",
  "label": "BBS+ Signatures",
  "definition": "BBS+ Signatures is the collective term for the class of pairing-based multi-message signature schemes derived from the BBS construction, encompassing both the base signature algorithm and the proof-of-knowledge protocols that enable selective disclosure and unlinkable presentation of signed credential attributes. As a scheme family, BBS+ Signatures represent the cryptographic foundation for privacy-preserving digital credential ecosystems.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-signature",
      "label": "Cryptographic Signature"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bbs-signature",
        "label": "BBS+ Signature"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bilinear-pairing",
        "label": "Bilinear Pairing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:anonymous-credential",
        "label": "Anonymous Credential"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-proof-system",
        "label": "Cryptographic Proof System"
      },
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-identity",
        "label": "Privacy-Preserving Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bbs-signature-scheme",
      "label": "BBS Signature Scheme"
    },
    {
      "@id": "urn:ngm:class:pairing-based-signature-scheme",
      "label": "Pairing-Based Signature Scheme"
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

- ### Definition
  - BBS+ Signatures refers to the family of pairing-based signature protocols — including the core BBS+ signing algorithm and its associated zero-knowledge proof-of-knowledge (PoK) protocols — that together enable issuance of multi-attribute credentials and privacy-preserving, selectively disclosed presentations of those credentials. Distinct from single [[BBS+ Signature]] instances, the "Signatures" framing covers the complete scheme family including multiple proposed parameter sets, proof variants, and binding mechanisms. The family forms a cryptographic layer that underpins [[Verifiable Credentials]] ecosystems requiring both issuer authenticity and holder privacy.

- ### Relationships
  - BBS+ Signatures is closely related to the individual [[BBS+ Signature]] scheme, representing the broader class. The family uses [[Cryptographic Proof System]]s — specifically zero-knowledge proofs of knowledge of a BBS+ signature — to achieve [[Selective Disclosure]] and [[Privacy-Preserving Authentication]] without revealing unused attributes. It enables [[Verifiable Credentials]] presentations that are unlinkable across verifiers, a property that single-use JWT credentials cannot provide. Integration with [[Digital Identity]] standards and [[Privacy-Preserving Identity]] frameworks positions BBS+ Signatures as the recommended cryptographic method for next-generation identity wallets.

- ### Content
  - The BBS+ scheme family traces its roots to the 2004 Boneh-Boyen-Shacham paper and gained momentum when applied to anonymous credential systems in the 2010s. Early adoption came from the Hyperledger Indy/AnonCreds ecosystem, which used a closely related scheme called CL (Camenisch-Lysyanskaya) signatures — themselves predecessors of BBS+. The shift to BBS+ accelerated after 2019 when DIF members recognised that BBS+ offered better performance on modern pairing-friendly curves whilst preserving the unlinkability properties required for SSI.

  - The scheme family encompasses several cryptographic objects: the signing key pair (issuer private/public key), the signature over a committed message vector, the proof-of-knowledge (PoK) protocol for generating derived presentations, and the verifier algorithm that checks the PoK without learning the signature. Multiple parameter specifications exist — BBS (IETF draft-irtf-cfrg-bbs-signatures) uses BLS12-381; research variants explore BN254 for gas-efficient on-chain verification. The proof size is constant regardless of how many messages are signed or disclosed.

  - In deployment, BBS+ Signatures are implemented in libraries including the Mattrglobal bbs-signatures TypeScript library, the Hyperledger AnonCreds Rust library, and the W3C vc-di-bbs JavaScript library. These are integrated into SSI wallets (Trinsic, Esatus, Lissi) and government identity programmes including the EU EUDI Wallet pilot. The BBS cryptosuite for W3C Verifiable Credentials has reached Candidate Recommendation status.

  - By 2024–2025, BBS+ Signatures are positioned as the preferred cryptographic method for large-scale digital identity deployments requiring both interoperability and user privacy. The EUDI Wallet's selective disclosure requirements have driven substantial implementation work across EU member states. Open research questions include post-quantum security — pairing-based schemes are vulnerable to Shor's algorithm — and hardware security module (HSM) support for issuer signing operations, which most HSM vendors do not yet natively support for BLS12-381 curve operations.

