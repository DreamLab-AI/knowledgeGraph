public:: true

# Certificate Revocation List

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:certificate-revocation-list", "@type":"Page", "title":"Certificate Revocation List", "vc:slug":"certificate-revocation-list", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:certificate-revocation-list",
  "@type":"Class",
  "label":"Certificate Revocation List",
  "definition":"A Certificate Revocation List (CRL) is a digitally signed, periodically published list of digital certificates that a certificate authority has revoked before their scheduled expiry. Each entry records the serial number of a revoked certificate, the revocation date, and an optional reason code, allowing relying parties to reject certificates that are no longer trustworthy. CRLs are a core revocation mechanism of X.509 public key infrastructure, complemented or replaced in many deployments by the Online Certificate Status Protocol.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:revocation-registry","label":"Revocation Registry"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cryptographic-infrastructure","label":"Public Key Infrastructure"}],
    "hasPart":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
    "implements":[{"@id":"urn:ngm:class:rfc-5280","label":"RFC 5280"}],
    "dependsOn":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}],
    "requires":[{"@id":"urn:ngm:class:public-key-cryptography","label":"Public-Key Cryptography"}],
    "uses":[{"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}],
    "supports":[{"@id":"urn:ngm:class:x-509-certificate","label":"X.509 Certificate"},{"@id":"urn:ngm:class:trust-anchor","label":"Trust Anchor"}],
    "enables":[{"@id":"urn:ngm:class:digital-certificate","label":"Digital Certificate"}],
    "standardizedBy":[{"@id":"urn:ngm:class:ietf","label":"IETF"}],
    "contrastsWith":[{"@id":"urn:ngm:class:ocsp","label":"OCSP"}],
    "relatedTo":[{"@id":"urn:ngm:class:certificate-transparency","label":"Certificate Transparency"},{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A **Certificate Revocation List** is a signed list, issued by a [[Certificate Authority]], of [[X.509 Certificate]]s that have been revoked before expiry.
- It is a [[Revocation Registry]] within a [[Public Key Infrastructure]] that lets relying parties reject compromised or invalidated certificates.
- Its structure and processing are defined by [[RFC 5280]], and each list is protected by a [[Digital Signature]].
- ### Overview
- When a certificate must be invalidated early — for example because its private key is compromised, the subject has changed, or the certificate was mis-issued — the issuing CA adds the certificate's serial number to a CRL.
- The CRL is itself a signed object; relying parties verify the CA's signature over the list before trusting its contents, ensuring the revocation information has not been forged or tampered with.
- CRLs are published at well-known distribution points (referenced in the certificate's CRL Distribution Point extension) and are reissued on a schedule with a defined next-update time.
- Because full CRLs can grow large, deployments use delta CRLs, partitioned CRLs, or shift entirely to online status checking to keep revocation data fresh and bandwidth-efficient.
- ### Mechanisms
- Entry structure: each revoked certificate is identified by serial number with a revocation date and optional reason code.
- Signing: the whole list is signed by the issuing CA so it is self-authenticating.
- Distribution points: certificates carry pointers to where their controlling CRL can be fetched.
- Freshness: thisUpdate and nextUpdate fields bound how stale a cached CRL may be.
- Delta CRLs: incremental lists that reference a base CRL to reduce transfer size.
- ### Applications
- TLS clients checking whether a server's certificate has been revoked.
- Enterprise PKI validating employee, device, and code-signing certificates.
- Browser and operating-system trust stores consuming revocation feeds.
- Smart-card and government identity systems relying on periodic revocation publication.
- ### Relationships
- partOf:: [[Public Key Infrastructure]]
- hasPart:: [[Digital Signature]]
- implements:: [[RFC 5280]]
- dependsOn:: [[Certificate Authority]]
- requires:: [[Public-Key Cryptography]]
- uses:: [[Digital Signature]]
- supports:: [[X.509 Certificate]]
- supports:: [[Trust Anchor]]
- enables:: [[Digital Certificate]]
- standardizedBy:: [[IETF]]
- contrastsWith:: [[OCSP]]
- relatedTo:: [[Certificate Transparency]]
- relatedTo:: [[Certificate Authority]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
