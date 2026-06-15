public:: true

# JSON Web Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:json-web-token",
  "@type": "Page",
  "vc:slug": "json-web-token",
  "title": "JSON Web Token",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:json-data-interchange-format-web-token",
  "@type": "Class",
  "label": "JSON Web Token",
  "definition": "A JSON Web Token (JWT) is a compact, URL-safe representation of claims transmitted between parties, defined by IETF RFC 7519. A JWT consists of three Base64URL-encoded parts — header, payload, and signature — concatenated with periods. The header specifies the token type and signing algorithm; the payload carries claims (assertions about a subject such as user identity, roles, and expiry time); and the signature is computed using either a symmetric shared secret (HMAC) or an asymmetric key pair (RSA, ECDSA), allowing the receiving party to verify token integrity without a round-trip to an authorisation server. JWTs are the dominant stateless session mechanism in REST API and OAuth 2.0 / OpenID Connect identity architectures.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication-mechanism",
      "label": "Authentication Mechanism"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:base64url-encoding",
        "label": "Base64URL Encoding"
      },
      {
        "@id": "urn:ngm:class:hmac",
        "label": "HMAC"
      },
      {
        "@id": "urn:ngm:class:rsa-algorithm",
        "label": "RSA Algorithm"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-digital-signature-algorithm",
        "label": "Elliptic Curve Digital Signature Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Stateless Session Management"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bearer-token",
        "label": "Bearer Token"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:saml-assertion",
        "label": "SAML Assertion"
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
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:sd-jwt",
        "label": "SD-JWT"
      },
      {
        "@id": "urn:ngm:class:json-web-encryption",
        "label": "JSON Web Encryption"
      },
      {
        "@id": "urn:ngm:class:refresh-token",
        "label": "Refresh Token"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:jwt",
      "label": "JWT"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[JSON Web Token]] (JWT) is an [[IETF]] RFC 7519-standardised compact token format that encodes cryptographically signed claims — including identity, roles, and expiry — as Base64URL JSON, enabling stateless [[Authentication]] and [[Access Control]] verification for [[REST API]] services without server-side session state.

- ### Relationships
  - JWTs derive their integrity guarantees from [[Cryptographic Signature]] schemes: symmetric HMAC-SHA256 for shared-secret contexts and asymmetric RSA or ECDSA via [[Public-Key Cryptography]] when issuers and verifiers are separate services. They serve as the bearer token format within [[OAuth 2.0]] access token responses and as the ID token format specified by [[OpenID Connect]], making them the foundational credential artifact in modern [[Digital Identity]] federation. [[SD-JWT]] (Selective Disclosure JWT) extends the format to support privacy-preserving partial disclosure for verifiable credential use cases.

- ### Content
  - JWTs emerged from the web application community's need for stateless session management as REST APIs replaced session-cookie web applications. Earlier approaches required servers to maintain session state, creating clustering and scalability problems. The JWT specification, drafted within the IETF JSON Object Signing and Encryption (JOSE) working group, was finalised as RFC 7519 in May 2015, accompanied by companion specifications for JSON Web Signature (JWS, RFC 7515), JSON Web Encryption (JWE, RFC 7516), and JSON Web Algorithms (JWA, RFC 7518). OAuth 2.0's adoption of JWTs as access token format accelerated deployment across the industry.

  - The token structure is straightforward. The header JSON object specifies "alg" (algorithm, e.g., "RS256") and "typ" ("JWT"). The payload JSON object carries registered claim names — "iss" (issuer), "sub" (subject), "aud" (audience), "exp" (expiry epoch), "iat" (issued-at epoch) — alongside private claims carrying application-specific data such as user roles, permission scopes, or tenant identifiers. The signature is computed over the concatenated Base64URL(header) + "." + Base64URL(payload) string, allowing any party with the verification key to confirm integrity and authenticity without contacting the issuer. The resulting compact format (typically 200-400 bytes) is well-suited for HTTP Authorization headers and URL parameters.

  - JWTs have become the de facto session credential format for microservices, single-page applications, and mobile API clients because they eliminate the session state synchronisation problem across horizontally scaled service instances. An API gateway or individual microservice can verify a JWT locally using a cached public key (retrieved from the issuer's JWKS endpoint), making authorisation decisions without database lookups. This statelessness comes at the cost of revocability: a signed JWT remains valid until its "exp" claim is reached, so revoking a compromised token requires either short expiry windows or a token revocation list that reintroduces server-side state.

  - In 2024-2025, JWT security practices have matured in response to documented attack classes: algorithm confusion attacks (exploiting "none" algorithm or RS256/HS256 confusion), claim injection via loose validation libraries, and excessively long expiry windows. Best practices now specify: rejecting unverified headers for algorithm selection, pinning expected algorithms in verifier configuration, enforcing short access token lifetimes (5-15 minutes) with refresh token rotation, and using audience ("aud") validation to prevent token misuse across services. [[SD-JWT]] is gaining traction in digital identity wallet implementations (EU eIDAS 2.0, mDL specifications) as a privacy-preserving extension that allows holders to selectively disclose individual claims from a signed credential without revealing the full token payload.

