public:: true

# OpenID4VCI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-id4-vci",
  "@type": "Page",
  "vc:slug": "open-id4-vci",
  "title": "OpenID4VCI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-id4-vci",
  "@type": "Class",
  "label": "OpenID4VCI",
  "definition": "OpenID for Verifiable Credential Issuance (OpenID4VCI) is an OpenID Foundation protocol specification that defines a standard API by which an Issuer can deliver W3C Verifiable Credentials to a Holder's digital wallet using OAuth 2.0 and OpenID Connect as the underlying authorisation and identity layer. The protocol specifies credential offer flows, authorisation code and pre-authorised code grant types, credential endpoint interactions, and metadata discovery, enabling interoperable credential issuance across identity wallet implementations and issuing authority systems. It is designed to complement OpenID4VP (Verifiable Presentations) to form a complete self-sovereign identity exchange ecosystem.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:credential-issuance",
      "label": "Credential Issuance"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:sd-jwt",
        "label": "SD-JWT"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:credential-issuer-metadata",
        "label": "Credential Issuer Metadata"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:credential-format-standard",
        "label": "Credential Format Standard"
      },
      {
        "@id": "urn:ngm:class:authorization-code-flow",
        "label": "Authorization Code Flow"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:e-idas-2-0",
        "label": "eIDAS 2.0"
      },
      {
        "@id": "urn:ngm:class:eudi-wallet",
        "label": "EUDI Wallet"
      },
      {
        "@id": "urn:ngm:class:iso-mdoc",
        "label": "ISO mdoc"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:didcomm",
        "label": "DIDComm"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-id4-vp",
        "label": "OpenID4VP"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:openid-for-verifiable-credential-issuance",
      "label": "OpenID for Verifiable Credential Issuance"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[OpenID4VCI]] is the [[OpenID Foundation]]-specified protocol that extends [[OAuth 2.0]] and [[OpenID Connect]] with a standardised credential issuance API, enabling any Issuer to deliver [[Verifiable Credentials]] — in formats such as [[SD-JWT]] or W3C VCDM — directly into a Holder's [[Digital Identity Wallet]] through interoperable, wallet-agnostic flows.

- ### Relationships
  - OpenID4VCI sits at the issuance end of the self-sovereign identity stack and is architecturally paired with [[OpenID4VP]] for the presentation half of the credential lifecycle. It inherits the authorisation machinery of [[OAuth 2.0]] and [[OpenID Connect]], reusing access tokens, authorisation codes, and metadata discovery endpoints rather than reinventing them. The protocol is credential-format agnostic, supporting [[SD-JWT]] VC, W3C VCDM JSON-LD, and ISO mdoc formats, all discoverable via the Credential Issuer Metadata endpoint. It enables [[Digital Identity Wallet]] applications to receive [[Verifiable Credentials]] from government, educational, and enterprise issuers in a standardised way, underpinning broader [[Decentralized Identity]] ecosystems. The [[Credential Format Standard]] layer and [[Credential Verification]] processes downstream complete the trust chain.

- ### Content
  - OpenID4VCI emerged from the OpenID Foundation's Digital Credentials working group as the digital identity community sought to standardise what had previously been a fragmented landscape of proprietary credential delivery APIs. Earlier SSI systems each defined their own DIDComm-based issuance protocols or vendor-specific REST endpoints, creating interoperability barriers for wallet vendors and issuers alike. The OpenID Foundation, building on its established OAuth 2.0 and OIDC foundations, published the OpenID4VCI draft specification beginning in 2022, with rapid uptake from the eIDAS 2.0 European Digital Identity Wallet framework and the US digital driver's licence ecosystem.

  - The protocol defines two primary issuance flows. In the authorisation code flow, a Holder initiates a request to an Issuer, completes an authentication and consent step via standard OIDC, and receives a credential after the Issuer's Credential Endpoint processes a signed credential request. In the pre-authorised code flow — suited for in-person or out-of-band initiation — the Issuer provides a credential offer (typically via QR code or deep link) containing a pre-authorised code that the wallet redeems directly without a fresh authentication step. Both flows terminate at a Credential Endpoint that validates the request, generates the credential, and returns it in the format declared by the wallet.

  - The specification has become a cornerstone of the European Union's eIDAS 2.0 regulation implementation, which mandates that member states provide digital identity wallets capable of receiving government-issued credentials. National identity programmes in Germany (EUDI Wallet), France, and Spain are implementing OpenID4VCI as their issuance API. The specification also underlies the Open Wallet Foundation's wallet interoperability profiles, and major credential issuers including university degree and professional licence authorities are building issuance services conformant to the spec.

  - As of 2024-2025, OpenID4VCI is in advanced draft status progressing towards a finalised specification at the OpenID Foundation, with multiple implementations having passed interoperability testing at events like the IETF/OpenID hackathons. Key areas of active development include batch credential issuance for efficiency, deferred issuance flows for credentials that require background verification, and enhanced key attestation bindings to ensure that credentials are cryptographically bound to hardware-backed keys in the holder's device — a critical property for high-assurance government identity use cases.