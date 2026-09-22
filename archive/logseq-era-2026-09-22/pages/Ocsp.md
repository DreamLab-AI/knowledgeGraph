public:: true

# Ocsp

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ocsp", "@type":"Page", "title":"Ocsp", "vc:slug":"ocsp", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ocsp",
  "@type":"Class",
  "label":"Ocsp",
  "definition":"The Online Certificate Status Protocol (OCSP) is an internet protocol for obtaining the real-time revocation status of a digital certificate from a responder operated by or on behalf of the issuing certificate authority. A client queries the responder for a specific certificate and receives a signed reply stating whether it is good, revoked, or unknown. OCSP offers a more immediate and bandwidth-efficient alternative to downloading full certificate revocation lists, and OCSP stapling lets servers present a recent status to avoid client-side lookups.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:certificate-revocation","label":"Certificate Revocation"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"},{"@id":"urn:ngm:class:public-key-cryptography","label":"Public Key Cryptography"}],
    "requires":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}],
    "supports":[{"@id":"urn:ngm:class:tls","label":"Transport Layer Security"},{"@id":"urn:ngm:class:trust-model","label":"Trust Model"}],
    "enables":[{"@id":"urn:ngm:class:mutual-tls","label":"Mutual TLS"}],
    "contrastsWith":[{"@id":"urn:ngm:class:certificate-revocation-list","label":"Certificate Revocation List"}],
    "implements":[{"@id":"urn:ngm:class:certificate-revocation","label":"Certificate Revocation"}],
    "relatedTo":[{"@id":"urn:ngm:class:online-certificate-status-protocol","label":"Online Certificate Status Protocol"},{"@id":"urn:ngm:class:security","label":"Security"},{"@id":"urn:ngm:class:privacy","label":"Privacy"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:online-certificate-status-protocol","label":"Online Certificate Status Protocol"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- OCSP, the [[Online Certificate Status Protocol]], obtains the real-time revocation status of a digital certificate from a responder run by or for the issuing [[Certificate Authority]].
- A client queries a specific certificate and receives a signed good, revoked, or unknown reply, within a [[Public Key Infrastructure]].
- It is a form of [[Certificate Revocation]] checking, more immediate than downloading a full [[Certificate Revocation List]].
- ### Overview
- Revocation lets a certificate be invalidated before its natural expiry, for example after a key compromise; OCSP makes checking that status fast and targeted.
- Rather than fetching and parsing a large revocation list, a client asks only about the certificate it cares about.
- OCSP stapling improves both performance and privacy by having the server attach a recent, signed status to the TLS handshake.
- The protocol is a core part of the web's trust model, ensuring that compromised or mis-issued certificates can be rejected.
- ### Mechanisms
- Request and response: a client sends a certificate identifier and receives a CA-signed status.
- Responder infrastructure: highly available services answer status queries at scale.
- OCSP stapling: servers cache and present a recent response, removing client-side lookups.
- Must-staple: a certificate extension requiring a stapled response, hardening against soft-fail.
- Signed assertions: responses are cryptographically signed to prevent forgery.
- ### Applications
- TLS certificate validation in browsers and clients during the handshake.
- Mutual TLS and machine-to-machine authentication needing fresh status.
- Code-signing and document-signing trust chains.
- Enterprise PKI deployments managing certificate lifecycle and revocation.
- ### Relationships
- uses:: [[Public Key Infrastructure]]
- uses:: [[Public Key Cryptography]]
- requires:: [[Certificate Authority]]
- supports:: [[Transport Layer Security]]
- supports:: [[Trust Model]]
- enables:: [[Mutual TLS]]
- contrastsWith:: [[Certificate Revocation List]]
- implements:: [[Certificate Revocation]]
- relatedTo:: [[Online Certificate Status Protocol]]
- relatedTo:: [[Security]]
- relatedTo:: [[Privacy]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
