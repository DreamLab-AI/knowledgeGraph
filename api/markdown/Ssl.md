public:: true

# Ssl
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ssl", "@type":"Page", "title":"Ssl", "vc:slug":"ssl", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ssl",
  "@type":"Class",
  "label":"Ssl",
  "definition":"SSL (Secure Sockets Layer) is a deprecated cryptographic protocol for establishing encrypted, authenticated connections between networked applications, and its name remains in common use as a colloquial label for its successor, TLS. SSL introduced the handshake model in which peers negotiate cipher suites, authenticate via certificates and derive symmetric session keys to protect subsequent traffic. All SSL versions are now considered insecure and have been superseded by Transport Layer Security. The term persists in product naming, certificates and developer vocabulary even though modern deployments use TLS.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:cryptographic-protocol","label":"Cryptographic Protocol"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:tls","label":"TLS"}],
    "uses":[{"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"},{"@id":"urn:ngm:class:asymmetric-encryption","label":"Asymmetric Encryption"}],
    "enables":[{"@id":"urn:ngm:class:secure-communication","label":"Secure Communication"}],
    "requires":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}],
    "dependsOn":[{"@id":"urn:ngm:class:cryptography","label":"Cryptography"},{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
    "supports":[{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "implements":[{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
    "standardizedBy":[{"@id":"urn:ngm:class:transport-layer-security","label":"Transport Layer Security"}],
    "bridgesTo":[{"@id":"urn:ngm:class:network-security","label":"Network Security"}],
    "relatedTo":[{"@id":"urn:ngm:class:transport-layer-security","label":"Transport Layer Security"},{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- SSL (Secure Sockets Layer) is a deprecated [[Cryptographic Protocol]] for encrypted, authenticated connections, whose name is still used colloquially for its successor [[TLS]]. It relies on [[Cryptography]], [[Encryption]] and a [[Certificate Authority]] to provide [[Secure Communication]].
- ### Overview
- SSL pioneered the handshake-based model now standard in transport security: negotiate parameters, authenticate, then encrypt.
- Every SSL version (1.0, 2.0, 3.0) has known weaknesses and is no longer considered safe to use.
- It has been fully superseded by [[Transport Layer Security]], though the SSL label survives in certificate and product terminology.
- ### Mechanisms
- Handshake: peers agree a cipher suite and exchange certificates to authenticate.
- Key exchange: [[Asymmetric Encryption]] establishes a shared secret used to derive symmetric session keys.
- Record protection: [[Symmetric Encryption]] secures bulk application data, providing confidentiality and integrity.
- ### Key aspects
- Certificate-based authentication anchored in a [[Certificate Authority]] and validated via [[Digital Signature]].
- Forward migration: all secure deployments use TLS while reusing SSL-era vocabulary.
- Known vulnerabilities in legacy versions drive deprecation across the industry.
- ### Applications
- Historic basis for HTTPS and other secured application protocols.
- Certificates still labelled "SSL certificates" in common usage.
- Conceptual foundation for understanding modern [[Network Security]] and [[TLS]].
- ### Relationships
- contrastsWith:: [[TLS]]
- uses:: [[Symmetric Encryption]]
- uses:: [[Asymmetric Encryption]]
- enables:: [[Secure Communication]]
- requires:: [[Certificate Authority]]
- dependsOn:: [[Cryptography]]
- dependsOn:: [[Encryption]]
- supports:: [[Authentication]]
- implements:: [[Encryption]]
- standardizedBy:: [[Transport Layer Security]]
- bridgesTo:: [[Network Security]]
- relatedTo:: [[Digital Signature]]
- ### Provenance
- updated:: 2026-06-15
