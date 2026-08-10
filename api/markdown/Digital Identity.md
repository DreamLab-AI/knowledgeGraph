public:: true
alias:: DigitalIdentity

# Digital Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:72e524c6383fe447ea9c31555ea22d5b18c67dae0a2c2d8b224e751e58b2719a",
  "@type": "Page",
  "vc:slug": "digital-identity",
  "title": "Digital Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:authorization",
      "vc:label": "Authorization"
    },
    {
      "@id": "urn:visionflow:linked:credential-storage",
      "vc:label": "Credential Storage"
    },
    {
      "@id": "urn:visionflow:linked:digital-presence",
      "vc:label": "Digital Presence"
    },
    {
      "@id": "urn:visionflow:linked:privacy-controls",
      "vc:label": "Privacy Controls"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:identity",
      "vc:label": "Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9860"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Identity"
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
  "@id": "urn:ngm:class:digital-identity",
  "@type": "Class",
  "label": "Digital Identity",
  "definition": "A digital representation of an entity encompassing personally identifiable information, behavioral data, credentials, and authentication attributes that enables individuals and organizations to establish presence, ownership, and trust within virtual environments, blockchain networks, and metaverse platforms.",
  "domain": "security",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:identity",
    "label": "Identity"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:credential-storage",
        "label": "Credential Storage"
      },
      {
        "@id": "urn:ngm:class:privacy-controls",
        "label": "Privacy Controls"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:did-nostr-identity",
        "label": "DID Nostr Identity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-did-specification",
        "label": "W3C DID Specification"
      },
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "KYC Know Your Customer"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:self-sovereign-identity",
      "label": "Self Sovereign Identity"
    },
    {
      "@id": "urn:ngm:class:electronic-identity",
      "label": "Electronic Identity"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-identity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:72e524c6383fe447ea9c31555ea22d5b18c67dae0a2c2d8b224e751e58b2719a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authorization]]",
      "resolved": "urn:visionflow:linked:authorization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Credential Storage]]",
      "resolved": "urn:visionflow:linked:credential-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Presence]]",
      "resolved": "urn:visionflow:linked:digital-presence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Controls]]",
      "resolved": "urn:visionflow:linked:privacy-controls",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity]]",
      "resolved": "urn:visionflow:owl:class:identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:owl:class:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
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
  - A digital representation of an entity encompassing personally identifiable information, behavioral data, credentials, and authentication attributes that enables individuals and organizations to establish presence, ownership, and trust within virtual environments, blockchain networks, and metaverse platforms.

- ### Semantic Classification
  - owl-class:: infrastructure:DigitalIdentity
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Identity]]
  - requires:: [[Identity Verification]], [[Credential Storage]], [[Privacy Controls]]
  - enables:: [[Authentication]], [[Authorization]], [[Digital Presence]]
  - bridges-to:: [[DID Nostr Identity]]

- ### Content

  - ## Technical Details
  - **Metaverse Identity Components**:
		- Representation: Avatars, digital personas
		- Data: Preferences, behaviors, transaction history
		- Identification: Credentials, keys, attestations
  - **Technology Stack**:
		- Decentralized identifiers (DIDs)
		- Verifiable credentials (VCs)
		- Blockchain-based identity anchoring
		- Biometric authentication
  - **Key Characteristics**:
		- Portable across platforms and metaverses
		- User-controlled with selective disclosure
		- Cryptographically verifiable
		- Persistent across sessions
  - **Current Trends**: Integration with physical identity, expanding regulatory frameworks (EU AI Act, eIDAS 2.0), interoperability focus across platforms
  - ## Applications
  - Metaverse user profiles
  - NFT and asset ownership
  - Cross-platform authentication
  - Virtual reputation systems
  - Decentralized social networks

- ### Current Landscape (2026)
  - The EU's eIDAS 2.0 (Regulation (EU) 2024/1183) entered into force on 20 May 2024, obliging every Member State to offer at least one certified European Digital Identity Wallet (EUDIW) to citizens and residents by the end of 2026, with mandatory acceptance by banks, VLOPs and other regulated relying parties performing Strong Customer Authentication following by late 2027.
  - The EUDIW rests on the Architecture and Reference Framework (ARF v1.4), which fixes ISO/IEC 18013-5 mdoc and IETF SD-JWT VC as credential formats, OpenID4VCI for issuance and OpenID4VP for presentation, ECDSA P-256/SHA-256 as the baseline cryptography, and the eIDAS Trusted Lists as the trust anchor; a fresh round of seven trust-service implementing regulations was published on 30 July 2025.
  - W3C published the Verifiable Credentials 2.0 family as a full Recommendation on 15 May 2025 (seven specifications including the VC Data Model v2.0), designed to be "crypto-modular" to accommodate emerging post-quantum cryptography and zero-knowledge proofs.
  - The W3C Digital Credentials API moved onto the standards track in the Federated Identity Working Group (First Public Working Draft 1 July 2025, format-agnostic), with Google and Apple already shipping early browser and OS implementations for wallet-mediated credential presentation.
  - Mobile driving licences reached mainstream US deployment: ISO/IEC 18013-5 mDLs are live in a large share of states via Apple, Google and Samsung Wallets (California passed roughly 600,000 enrolments in its first months), while ISO/IEC TS 18013-7:2024 standardised remote online presentation and a refreshed 18013-7 aligned to OpenID4VP and the High Assurance Interoperability Profile (HAIP) is expected in 2026.
  - On 5 May 2025 the OpenID Foundation ran the first public cross-region interoperability demonstration spanning OpenID4VP draft 24, HAIP ID2, the W3C Digital Credentials API, FIDO CTAP, ISO 18013-5/7 and SD-JWT, with multi-wallet remote testing reaching about 91.75% success.
  - FIDO passkeys (WebAuthn/FIDO2) are being positioned as the phishing-resistant authentication layer complementing verified digital credentials, with a September 2025 FIDO Alliance white paper recommending VDC-based identity proofing at enrolment and passkeys for repeated, pseudonymous re-authentication inside the EUDIW.
  - Open challenges as of 2026 include selective-disclosure privacy and unlinkability under real relying-party pressure, verifier trust management and issuer revocation at scale, cross-border and cross-format interoperability, migration to post-quantum signatures, and the practical strain of meeting the December 2026 wallet deadline flagged by the EDPS TechDispatch #3/2025.

- ### References
  - 1. European Data Protection Supervisor (2025). TechDispatch #3/2025 - Digital Identity Wallets. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en
  - 2. W3C (2025). The Verifiable Credentials 2.0 family of specifications is now a W3C Recommendation. https://www.w3.org/news/2025/the-verifiable-credentials-2-0-family-of-specifications-is-now-a-w3c-recommendation/
  - 3. W3C (2025). W3C Digital Credentials API publication: the next step to privacy-preserving identities on the web. https://www.w3.org/blog/2025/w3c-digital-credentials-api-publication-the-next-step-to-privacy-preserving-identities-on-the-web/
  - 4. OpenID Foundation (2025). OpenID Foundation Demonstrates Real-World Interoperability of New Digital Identity Standards. https://openid.net/openid-foundation-demonstrates-real-world-interoperabiity-of-new-digital-identity-standards/
  - 5. FIDO Alliance (2025). Passkeys and Verifiable Digital Credentials (White Paper). https://fidoalliance.org/wp-content/uploads/2025/09/FIDO-White-Paper-passkeys-and-verifiable-digital-credentials.pdf
  - 6. Corbado (2025). Mobile Driver's License are here: the ultimate Guide to mDLs. https://www.corbado.com/blog/mobile-drivers-license

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
