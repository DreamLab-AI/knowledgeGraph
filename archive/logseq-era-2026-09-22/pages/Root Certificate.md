public:: true

# Root Certificate
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:root-certificate",
  "@type": "Page",
  "title": "Root Certificate",
  "vc:slug": "root-certificate",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:root-certificate",
  "@type": "Class",
  "label": "Root Certificate",
  "definition": "A root certificate is a self-signed X.509 certificate that identifies a root certificate authority and serves as the trust anchor at the top of a certificate chain. Relying parties pre-install trusted root certificates in trust stores, and any certificate that chains back to a trusted root is accepted as authentic. Because a compromised root undermines all certificates beneath it, root keys are protected with the highest assurance and kept offline.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-certificate",
      "label": "Digital Certificate"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      }
    ],
    "partOf": [
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
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ocsp",
        "label": "OCSP"
      },
      {
        "@id": "urn:ngm:class:certificate-revocation",
        "label": "Certificate Revocation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
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
  - [[Root Certificate]] is a [[Security]] artefact: a self-signed [[X.509 Certificate]] held by a [[Certificate Authority]] that acts as the [[Trust Anchor]] for a chain within [[Public Key Infrastructure]].
- ### Overview
  - Root certificates sit at the apex of the chain of trust. They are not signed by any higher authority but are instead distributed and pre-trusted by operating systems and browsers.
  - Validation succeeds when a leaf certificate chains, through any intermediate certificates, up to a root present in the relying party's trust store.
- ### Key aspects
  - Self-signed: the issuer and subject are identical, with the root's own key.
  - Trust store distribution: roots are bundled into platforms and curated by root programmes.
  - Offline key protection: root private keys are stored in HSMs and used sparingly to sign intermediates.
- ### Applications
  - TLS server authentication and the public web PKI.
  - Enterprise and government PKI hierarchies for device and user identity.
  - Code-signing and document trust ecosystems.
- ### Relationships
  - relatedTo:: [[Certificate Authority]]
  - relatedTo:: [[Trust Anchor]]
  - relatedTo:: [[X.509 Certificate]]
  - hasPart:: [[Digital Certificate]]
  - partOf:: [[Public Key Infrastructure]]
  - enables:: [[Authentication]]
  - enables:: [[TLS]]
  - requires:: [[Certificate Authority]]
  - supports:: [[OCSP]]
  - supports:: [[Certificate Revocation]]
  - uses:: [[Digital Certificate]]
  - dependsOn:: [[Public Key Infrastructure]]
  - implements:: [[Trust Anchor]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
