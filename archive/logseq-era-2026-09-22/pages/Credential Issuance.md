public:: true

# Credential Issuance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-issuance",
  "@type": "Page",
  "vc:slug": "credential-issuance",
  "title": "Credential Issuance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-issuance",
  "@type": "Class",
  "label": "Credential Issuance",
  "definition": "Credential issuance is the process by which an authoritative entity — an issuer — creates, signs, and delivers a structured attestation about a subject's attributes, qualifications, or identity to that subject or to a designated holder. In the W3C Verifiable Credentials model, issuance involves binding claims to a subject's decentralised identifier using the issuer's cryptographic key, producing a tamper-evident credential that the holder can present to verifiers without returning to the issuer. The issuance process encompasses schema selection, claim population, signature generation, and delivery, and may be implemented with varying degrees of issuer privacy, holder binding strength, and revocability.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:credential-schema",
        "label": "Credential Schema"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:digital-trust",
        "label": "Digital Trust"
      },
      {
        "@id": "urn:ngm:class:credential-presentation",
        "label": "Credential Presentation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:identity-proofing",
        "label": "Identity Proofing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:credential-revocation",
        "label": "Credential Revocation"
      },
      {
        "@id": "urn:ngm:class:holder-binding",
        "label": "Holder Binding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials Data Model"
      },
      {
        "@id": "urn:ngm:class:sd-jwt-vc",
        "label": "SD-JWT VC"
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
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:e-idas",
        "label": "eIDAS"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:vc-issuance",
      "label": "VC Issuance"
    },
    {
      "@id": "urn:ngm:class:digital-credential-issuance",
      "label": "Digital Credential Issuance"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - [[Credential Issuance]] is the cryptographically secured process by which an issuer binds attested claims about a subject to a [[Decentralized Identifiers]] using a [[Cryptographic Signature]], producing a [[Verifiable Credentials]] artefact conforming to a [[Credential Schema]] that the holder can present for [[Credential Verification]] without intermediary involvement.

- ### Relationships
  - Credential issuance depends on [[Verifiable Credentials]] data models and [[Decentralized Identifiers]] as the subject binding mechanism, with [[Credential Schema]] defining the permitted claim vocabulary. The issuer's [[Cryptographic Signature]] provides tamper-evidence. Successful issuance enables [[Credential Verification]] by relying parties and supports [[Self Sovereign Identity]] architectures by removing dependence on centralised [[Certificate Authority]] intermediaries, advancing the goal of [[Decentralised Identity]] ecosystems.

- ### Content
  - Before verifiable credential frameworks, credential issuance was tightly coupled to verification: a diploma required the university to be contacted; an age assertion required showing a government-issued identity document. The X.509 certificate system, developed in the 1980s for TLS and PKI, introduced cryptographically signed credentials but kept issuance and verification tightly coupled to hierarchical certificate authority chains. The emergence of OpenID Connect and OAuth 2.0 in the 2010s created federated identity patterns, but these still routed verification through the issuer. The W3C Verifiable Credentials specification, reaching Recommendation status in 2019 and its second version in 2023, decoupled issuance from verification by cryptographically binding claims to a holder's decentralised identifier.

  - The technical issuance process involves the issuer selecting a credential type and conforming schema, populating claim fields with verified attribute values, selecting a signature suite (e.g. Ed25519Signature2020, BBS+, or SD-JWT), signing the credential data structure, and delivering the signed credential to the holder. Selective disclosure schemes such as BBS+ signatures and SD-JWT allow the holder to present only a subset of claims from the issued credential, preserving privacy. Status list mechanisms (revocation lists, status list credentials) allow the issuer to mark credentials as revoked without requiring holder interaction.

  - The significance of credential issuance lies in its role as the entry point to digital trust ecosystems. Governments issuing mobile driving licences (ISO/IEC 18013-5 mDL), universities issuing digital diplomas (Open Badges, Europass), and healthcare providers issuing professional qualifications all participate in credential ecosystems by performing the issuance step. The EU's eIDAS 2.0 regulation mandates that member states issue identity wallets capable of receiving verifiable credentials from public authorities, representing the largest credential issuance deployment mandate to date.

  - As of 2024–2025, credential issuance standards are converging across multiple specifications: W3C VC Data Model 2.0, OpenID for Verifiable Credential Issuance (OID4VCI), and the IETF SD-JWT VC specification. The OID4VCI protocol has become the de facto issuance transport, enabling wallets to request credentials from issuer endpoints using standard OAuth 2.0 flows. Hardware-bound credentials — where the holder's private key resides in a secure element — are emerging as a requirement for high-assurance issuance scenarios such as government identity and professional licensing.

