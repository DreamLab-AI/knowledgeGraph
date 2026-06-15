public:: true

# Online Certificate Status Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:online-certificate-status-protocol",
  "@type": "Page",
  "title": "Online Certificate Status Protocol",
  "vc:slug": "online-certificate-status-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:online-certificate-status-protocol",
  "@type": "Class",
  "label": "Online Certificate Status Protocol",
  "definition": "The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of an X.509 digital certificate. A client queries an OCSP responder, which returns a signed good, revoked or unknown status, avoiding the need to download large certificate revocation lists. OCSP stapling allows a server to present a recent signed status during the TLS handshake to improve privacy and performance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:public-key-infrastructure",
      "label": "Public Key Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      },
      {
        "@id": "urn:ngm:class:tls-handshake",
        "label": "TLS Handshake"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:x509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:certificate-revocation",
        "label": "Certificate Revocation"
      },
      {
        "@id": "urn:ngm:class:ocsp",
        "label": "OCSP"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:x509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:certificate-revocation",
        "label": "Certificate Revocation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:tls-handshake",
        "label": "TLS Handshake"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:certificate-revocation",
        "label": "Certificate Revocation"
      }
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
  - [[Online Certificate Status Protocol]] is a [[Security]] protocol within [[Public Key Infrastructure]] that checks [[X.509 Certificate]] revocation in real time via a responder run by a [[Certificate Authority]].
- ### Overview
  - OCSP answers "is this certificate still valid?" by querying a responder rather than downloading a full certificate revocation list, lowering latency and bandwidth.
  - It is integral to the TLS trust model: browsers and clients consult OCSP (or stapled responses) before trusting a server certificate.
- ### Mechanisms
  - Request/response: client sends a certificate identifier; responder returns a CA-signed good, revoked or unknown status.
  - OCSP stapling: the server caches and presents a fresh signed status during the TLS handshake, improving privacy.
  - Nonce and validity windows guard against replay of stale responses.
- ### Applications
  - TLS server and client certificate validation in web and API security.
  - Code-signing and document-signing revocation checks.
  - Enterprise PKI and device-identity certificate lifecycles.
- ### Relationships
  - hasPart:: [[Digital Certificate]]
  - hasPart:: [[TLS Handshake]]
  - dependsOn:: [[Public Key Infrastructure]]
  - dependsOn:: [[Certificate Authority]]
  - relatedTo:: [[X.509 Certificate]]
  - relatedTo:: [[Certificate Revocation]]
  - relatedTo:: [[OCSP]]
  - requires:: [[X.509 Certificate]]
  - requires:: [[Certificate Authority]]
  - enables:: [[Authentication]]
  - enables:: [[Certificate Revocation]]
  - uses:: [[TLS]]
  - supports:: [[TLS Handshake]]
  - contrastsWith:: [[Trust Anchor]]
  - implements:: [[Certificate Revocation]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
