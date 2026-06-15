public:: true

# OpenID4VP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-id4-vp",
  "@type": "Page",
  "vc:slug": "open-id4-vp",
  "title": "OpenID4VP",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-id4-vp",
  "@type": "Class",
  "label": "OpenID4VP",
  "definition": "OpenID for Verifiable Presentations (OpenID4VP) is an extension of the OpenID Connect and OAuth 2.0 framework that enables relying parties to request and receive W3C Verifiable Presentations from a holder's digital identity wallet using standard authorisation request-response flows. The specification defines a Presentation Exchange-compatible request syntax, transport bindings for cross-device and same-device wallets, and response encoding options for signed JWT VPs and JSON-LD credential formats. OpenID4VP allows verifiers to specify which credential types and claims are required, enabling selective disclosure and privacy-preserving identity verification without centralised identity providers holding user data.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:open-id-connect",
    "label": "OpenID Connect"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:presentation-exchange",
        "label": "Presentation Exchange"
      },
      {
        "@id": "urn:ngm:class:sd-jwt",
        "label": "SD-JWT"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-authentication",
        "label": "Privacy-Preserving Authentication"
      },
      {
        "@id": "urn:ngm:class:holder-binding",
        "label": "Holder Binding"
      },
      {
        "@id": "urn:ngm:class:cross-platform-authentication",
        "label": "Cross-Device Authentication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:w-3-c-verifiable-credentials-data-model",
        "label": "W3C Verifiable Credentials Data Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:iso-iec-18013-5-m-dl",
        "label": "ISO 18013-5 mDL"
      },
      {
        "@id": "urn:ngm:class:eudi-wallet",
        "label": "EUDI Wallet"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-id4-vci",
        "label": "OpenID4VCI"
      },
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:e-idas-2-0",
        "label": "eIDAS 2.0"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralized Identity Provider"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:openid-for-verifiable-presentations",
      "label": "OpenID for Verifiable Presentations"
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
  - [[OpenID4VP]] is an [[OpenID Connect]] extension that defines how a verifier can request [[Verifiable Credentials|verifiable credentials]] from a holder's [[Digital Identity Wallet]] using [[OAuth 2.0]]-compatible authorisation flows, returning a cryptographically signed [[W3C Verifiable Credentials|verifiable presentation]] that proves possession of specific claims.

- ### Relationships
  - [[OpenID4VP]] builds directly on [[OAuth 2.0]] and [[OpenID Connect]] and is designed as the presentation complement to [[OpenID4VCI]], which handles credential issuance. Together they form the wallet-centric identity layer for [[Decentralized Identity]] ecosystems. The protocol natively supports [[Selective Disclosure]], allowing holders to share only the specific claims a verifier needs, and enables [[Privacy-Preserving Authentication]] by reducing reliance on centralised identity providers. The [[W3C Verifiable Credentials]] data model provides the underlying credential format, and the [[Digital Identity Wallet]] is the agent that manages and presents them.

- ### Content
  - OpenID4VP originated from work within the OpenID Foundation's Self-Issued OpenID Provider (SIOP) working group, which sought to bring decentralised identity flows into the well-understood OpenID Connect ecosystem rather than requiring organisations to adopt entirely novel protocols. The initial draft specifications circulated from 2020, and the approach gained momentum through the EU's eIDAS 2.0 regulation, which references OpenID4VP alongside OpenID4VCI as the technical basis for the European Digital Identity (EUDI) Wallet Architecture Reference Framework (ARF).

  - The protocol flow begins with the verifier constructing an authorisation request that embeds a Presentation Definition object, describing required credential types, issuer constraints, and claim paths. This request is delivered to the wallet either via a redirect URI (same-device) or a QR code (cross-device). The wallet presents matching credentials to the holder, who consents; the wallet then constructs a Verifiable Presentation, signs it with the holder's key, and returns it in the authorisation response—either directly or via the verifier's redirect endpoint. The verifier validates the presentation against the credential issuer's public key material and the holder binding proof.

  - The specification is significant because it bridges the established OAuth 2.0 security model—already trusted by billions of web interactions—with the emerging world of self-sovereign credentials. This lowers the integration cost for relying parties who already support OIDC, and allows existing identity federations to progressively adopt holder-controlled credentials. Support for multiple credential formats (SD-JWT VC, ISO 18013-5 mdoc, JSON-LD with BBS+ signatures) makes OpenID4VP format-agnostic.

  - As of 2024–2025 OpenID4VP is at draft-20+ status within the OpenID Foundation and is referenced normatively by the EUDI Wallet ARF v1.4, the US mobile driver's licence (mDL) presentation ecosystem, and several national digital identity programmes in the United Kingdom, Canada, and Australia. Interoperability events (OWF wallets, HAIP profile) have validated multi-vendor implementations, and the specification is expected to reach final publication under OpenID Foundation governance in 2025.