public:: true

# eIDAS Regulation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:eidas-regulation", "@type":"Page", "title":"eIDAS Regulation", "vc:slug":"eidas-regulation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:eidas-regulation",
  "@type":"Class",
  "label":"eIDAS Regulation",
  "definition":"The eIDAS Regulation is the European Union framework on electronic identification and trust services for electronic transactions in the internal market. It establishes legal recognition and cross-border interoperability for electronic identification schemes and for trust services such as electronic signatures, seals, timestamps and website authentication. Its revision introduces the European Digital Identity Wallet, extending qualified trust services to verifiable digital credentials.",
  "domain":"security",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"},
      {"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"},
      {"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"},
      {"@id":"urn:ngm:class:qualified-electronic-signature","label":"Qualified Electronic Signature"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:electronic-signature","label":"Electronic Signature"},
      {"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},
      {"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"},
      {"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:gdpr","label":"GDPR"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:qualified-electronic-signature","label":"Qualified Electronic Signature"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:gdpr","label":"GDPR"},
      {"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"},
      {"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - The eIDAS Regulation is an EU [[Regulatory Compliance]] framework giving cross-border legal recognition to electronic identification and trust services within a common [[Trust Framework]].
  - It governs [[Electronic Signature]], seals and timestamps, enabling pan-European [[Digital Identity]].

- ### Overview
  - eIDAS makes a qualified electronic signature legally equivalent to a handwritten one and mandates mutual recognition of notified national eID schemes.
  - Trust services are provided by qualified trust service providers supervised against the regulation, underpinned by [[PKI]] and a [[Certificate Authority]].
  - The revised regulation introduces the European Digital Identity Wallet, allowing citizens to hold and present verifiable credentials.

- ### Key aspects
  - Levels of assurance for electronic identification schemes.
  - Qualified electronic signatures, seals, timestamps and website authentication certificates.
  - A trusted-list mechanism publishing qualified providers across member states.
  - Cross-border interoperability obligations for public services.

- ### Applications
  - Legally binding e-signing of contracts and public-sector documents.
  - Cross-border authentication to government and banking services.
  - Issuing and verifying credentials through the Digital Identity Wallet.
  - Underpinning [[Identity Verification]] in regulated onboarding.

- ### Relationships
  - subClassOf:: [[Regulatory Compliance]]
  - partOf:: [[Trust Framework]]
  - requires:: [[Certificate Authority]]
  - requires:: [[PKI]]
  - enables:: [[Digital Identity]]
  - enables:: [[Qualified Electronic Signature]]
  - implements:: [[Electronic Signature]]
  - standardizedBy:: [[Trust Framework]]
  - uses:: [[Digital Signature]]
  - supports:: [[Identity Verification]]
  - contrastsWith:: [[GDPR]]
  - bridgesTo:: [[Qualified Electronic Signature]]
  - relatedTo:: [[GDPR]]
  - relatedTo:: [[Certificate Authority]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
