public:: true

# W3C Verifiable Credentials Data Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7155afbccc4bdff2272b5c41ddc183cef29a6264b72f77f8bb6bd66f024d84d1",
  "@type": "Page",
  "vc:slug": "w-3-c-verifiable-credentials-data-model",
  "title": "W3C Verifiable Credentials Data Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:w-3-c",
      "vc:label": "W3C"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "W3C Verifiable Credentials Data Model"
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
  "@id": "urn:ngm:class:w-3-c-verifiable-credentials-data-model",
  "@type": "Class",
  "label": "W3C Verifiable Credentials Data Model",
  "definition": "The W3C Verifiable Credentials Data Model (VCDM) is a W3C Recommendation that defines a standardised, machine-readable data model for expressing and cryptographically verifying claims about subjects on the Web. It establishes a three-party trust triangle comprising an issuer that creates and signs credentials, a holder that stores and presents them, and a verifier that checks their authenticity and validity. Credentials are expressed as JSON or JSON-LD documents and may be signed using proof mechanisms such as Data Integrity Proofs or JWT/SD-JWT, enabling selective disclosure and privacy-preserving presentation. The model underpins decentralised identity systems and Self-Sovereign Identity architectures by separating identity assertion from centralised identity providers.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decentralised-identifiers",
        "label": "Decentralised Identifiers"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:linked-data-proofs",
        "label": "Linked Data Proofs"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:verifiable-presentation",
        "label": "Verifiable Presentation"
      },
      {
        "@id": "urn:ngm:class:credential-subject",
        "label": "Credential Subject"
      },
      {
        "@id": "urn:ngm:class:credential-status",
        "label": "Credential Status"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:bitstring-status-list",
        "label": "Bitstring Status List"
      },
      {
        "@id": "urn:ngm:class:trust-registry",
        "label": "Trust Registry"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralised Identity Provider"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "European Digital Identity Wallet"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:vcdm",
      "label": "VCDM"
    },
    {
      "@id": "urn:ngm:class:verifiable-credentials",
      "label": "Verifiable Credentials"
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-verifiable-credentials-data-model:175f7d8680d0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7155afbccc4bdff2272b5c41ddc183cef29a6264b72f77f8bb6bd66f024d84d1"
  },
  "vc:resolutions": [
    {
      "raw": "[[W3C]]",
      "resolved": "urn:visionflow:linked:w-3-c",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - The W3C Verifiable Credentials Data Model (VCDM) is a [[W3C]] Recommendation that defines a standardised, machine-readable structure for expressing cryptographically verifiable claims about subjects on the Web. It establishes a three-party trust triangle involving an [[Issuer]], a [[Holder]], and a [[Verifier]], and underpins [[Decentralised Identity]] and [[Self-Sovereign Identity]] architectures by removing reliance on centralised [[Identity Provider]] services. Credentials are serialised as [[JSON-LD]] or plain [[JSON]] documents, signed using [[Data Integrity Proofs]] or [[JSON Web Token]] formats, and may support [[Selective Disclosure]] to minimise unnecessary personal data exposure.

- ### Overview
  - The VCDM emerged from the [[W3C Credentials Community Group]] and was first published as a W3C Recommendation in 2019 (v1.0), with a major revision (v2.0) reaching Recommendation status in 2024.
  - Its central insight is separating the act of making an assertion from the mechanism of distributing or proving it, enabling credentials to flow across trust boundaries without requiring direct communication between issuer and verifier.
  - A credential carries: a subject identifier (typically a [[Decentralised Identifiers]] DID), a set of typed claims, metadata (issuance date, expiry, credential type), and a cryptographic proof.
  - Presentations wrap one or more credentials into a holder-signed bundle so verifiers can confirm the holder controls the credential without contacting the issuer.
  - The model is proof-mechanism agnostic: implementations may use [[Linked Data Proofs]], [[JSON Web Token]] (VC-JWT), or [[Selective Disclosure JWT]] (SD-JWT-VC), chosen to suit performance, privacy, and tooling constraints.

- ### Key Components
  - **Credential Subject** — the entity described by the claims; identified by a URI or [[Decentralised Identifiers]].
  - **Issuer** — the authority asserting the claims; signs the credential with a [[Digital Signature]] tied to its [[Decentralised Identifiers]] or other verifiable key material.
  - **Holder** — stores credentials in a [[Digital Identity Wallet]] and produces [[Verifiable Presentation]] bundles for verifiers.
  - **Verifier** — checks signature validity, credential status, and conformance to expected credential types.
  - **Proof** — the cryptographic envelope; may be a [[Linked Data Proofs]] Data Integrity Proof (e.g. Ed25519Signature2020, BLS12-381 for [[Zero-Knowledge Proof]]) or a compact [[JSON Web Token]].
  - **Credential Status** — an optional mechanism (e.g. [[Bitstring Status List]]) allowing issuers to revoke or suspend credentials without contacting the holder.
  - **`@context`** — a [[JSON-LD]] context array providing semantic disambiguation for claim vocabularies; at minimum includes the VCDM context URI.
  - **Credential Type** — a string array declaring what kind of credential this is (e.g. `VerifiableCredential`, `UniversityDegreeCredential`), enabling schema-based validation.
  - **`credentialSchema`** — optional pointer to a [[JSON Schema]] or OWL-based schema for machine-readable claim validation.
  - **`termsOfUse`** — policies constraining how verifiers may use the credential data, supporting [[Data Governance]] use cases.

- ### Mechanisms
  - **Data Integrity Proofs** — the [[W3C]] Data Integrity specification wraps a credential with a detached proof object; supports key types including Ed25519, P-256, and BLS12-381 for [[Zero-Knowledge Proof]] with [[BBS+ Signatures]].
  - **VC-JWT** — encodes the credential as a [[JSON Web Token]] signed with standard JWS algorithms; optimised for REST ecosystems and compatible with [[OAuth 2.0]] / [[OpenID Connect]] flows.
  - **SD-JWT-VC** — combines [[Selective Disclosure JWT]] with the VCDM, letting holders reveal only chosen claims; each claim is individually hashed and selectively disclosed on presentation.
  - **Revocation** — [[Bitstring Status List]] (formerly StatusList2021) encodes revocation state in a compressed bitstring published at a stable URL; verifiers fetch the list and check the credential's bit position.
  - **Presentation Exchange** — a companion specification (from the Decentralised Identity Foundation, DIF) defines how verifiers express proof requirements and how wallets fulfil them, interoperating with the VCDM.

- ### Applications / Use Cases
  - **Digital Diplomas and Academic Credentials** — universities issue VCDM credentials for degrees; students hold them in [[Digital Identity Wallet]] apps and share with employers without contacting the university.
  - **Healthcare** — vaccination certificates, prescriptions, and professional licences expressed as verifiable credentials enable cross-border recognition with privacy controls.
  - **Government Digital Identity** — national identity schemes (e.g. [[European Digital Identity Wallet]] eIDAS 2.0) mandate VCDM as the credential format, enabling citizens to prove age or address without sharing full identity documents.
  - **Know Your Customer (KYC) Reuse** — a regulated institution issues a KYC credential; the holder reuses it at other institutions, reducing duplication and data exposure.
  - **Supply Chain** — provenance claims (organic certification, customs clearance) encoded as credentials flow through [[Supply Chain]] participants, each verifying the chain of trust.
  - **Access Control** — employee or membership credentials replace username/password flows, integrating with [[OAuth 2.0]] via the VC-in-JWT profile.
  - **Decentralised Finance** — [[Blockchain]] DeFi platforms use VCDM credentials for on-chain compliance assertions (e.g. accredited investor status) without publishing personal data to public ledgers.
  - **Internet of Things** — [[IoT]] devices hold credentials attesting to firmware provenance and certification, enabling zero-touch provisioning.

- ### Relationships
  - standardizedBy:: [[W3C]]
  - subClassOf:: [[Technical Standard]]
  - implements:: [[Self-Sovereign Identity]]
  - implements:: [[Decentralised Identity]]
  - requires:: [[Decentralised Identifiers]]
  - requires:: [[Cryptographic Proof]]
  - requires:: [[JSON-LD]]
  - uses:: [[Linked Data Proofs]]
  - uses:: [[JSON Web Token]]
  - uses:: [[Selective Disclosure JWT]]
  - uses:: [[Digital Signature]]
  - enables:: [[Selective Disclosure]]
  - enables:: [[Zero-Knowledge Proof]]
  - enables:: [[Privacy-Preserving Authentication]]
  - enables:: [[Digital Identity Wallet]]
  - hasPart:: [[Verifiable Presentation]]
  - hasPart:: [[Credential Subject]]
  - hasPart:: [[Credential Status]]
  - relatedTo:: [[OAuth 2.0]]
  - relatedTo:: [[OpenID Connect]]
  - relatedTo:: [[Bitstring Status List]]
  - relatedTo:: [[Trust Registry]]
  - contrastsWith:: [[SAML]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - bridgesTo:: [[Blockchain]]
  - bridgesTo:: [[European Digital Identity Wallet]]

- ### Standards & Context
  - **W3C VCDM 1.0** (2019) — first Recommendation; established core data model, JSON-LD serialisation, and JWT encoding.
  - **W3C VCDM 2.0** (2024) — added `credentialStatus` flexibility, media type `application/vc`, SD-JWT-VC profile references, and improved context stability.
  - **Companion Standards**
    - [[W3C]] Data Integrity — proof mechanism specification.
    - [[W3C]] DID Core — [[Decentralised Identifiers]] specification providing subject and issuer identifiers.
    - IETF SD-JWT — [[Selective Disclosure JWT]] encoding for compact selective disclosure.
    - DIF Presentation Exchange — query language for credential requests.
    - OpenID for Verifiable Credential Issuance (OID4VCI) — [[OpenID Connect]]-based issuance protocol.
    - OpenID for Verifiable Presentations (OID4VP) — [[OpenID Connect]]-based presentation protocol.
  - **Regulatory Alignment**
    - EU eIDAS 2.0 mandates VCDM for the [[European Digital Identity Wallet]], directly driving government adoption across EU member states.
    - ISO/IEC 18013-5 (mDL) is a parallel mobile driving licence standard that intersects with VCDM in cross-scheme interoperability work.
  - The [[W3C Credentials Community Group]] and the W3C Verifiable Credentials Working Group continue to develop extensions including status mechanisms, schema registries, and [[Decentralised Web Node]] integration.
  - The Decentralised Identity Foundation (DIF) produces complementary open standards (Presentation Exchange, DIDComm, Sidetree) that interoperate with the VCDM ecosystem.

- ### Security & Privacy Considerations
  - **Holder Binding** — without explicit holder binding, any party in possession of a credential can present it; SD-JWT-VC and [[Linked Data Proofs]] support key-binding proofs to mitigate this.
  - **Correlation Risks** — reuse of credential identifiers or proofs across verifiers can enable tracking; [[Zero-Knowledge Proof]] approaches (BBS+) and unlinkable presentations mitigate correlation.
  - **Revocation Privacy** — naive revocation checks leak presentation timing to the issuer; [[Bitstring Status List]] allows offline verification to reduce this leakage.
  - **Phishing** — credentials presented over unverifier-authenticated channels are vulnerable; [[Presentation Exchange]] combined with [[OpenID Connect]] nonces addresses this.
  - **Key Management** — loss of holder private keys results in credential inaccessibility; recovery mechanisms are an active area of [[Digital Identity Wallet]] design.

- ### Semantic Classification
  - owl-class:: security:W3CVerifiableCredentialsDataModel
  - owl-role:: Standard

- ### Provenance
  - sources:: W3C VCDM 2.0 Recommendation (2024); W3C VCDM 1.0 Recommendation (2019); DIF Presentation Exchange specification
  - updated:: 2026-06-13
