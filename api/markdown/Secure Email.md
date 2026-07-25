public:: true

# Secure Email
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:secure-email", "@type":"Page", "title":"Secure Email", "vc:slug":"secure-email", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:secure-email",
  "@type":"Class",
  "label":"Secure Email",
  "definition":"Secure email is the set of technologies and practices that protect the confidentiality, integrity, and authenticity of electronic mail in transit and at rest. It combines transport encryption between mail servers, end-to-end message encryption and signing schemes, and sender-authentication and anti-spoofing controls, so that recipients can trust who sent a message and that its contents were not read or altered along the way.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:secure-communication","label":"Secure Communication"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:end-to-end-encryption","label":"End-to-End Encryption"},
      {"@id":"urn:ngm:class:tls","label":"Transport Layer Security"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:compliance","label":"Compliance"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:secure-communication","label":"Secure Communication"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:end-to-end-encryption","label":"End-to-End Encryption"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:tls","label":"Transport Layer Security"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- [[Secure Email]] protects the confidentiality, integrity, and authenticity of electronic mail. It applies [[End-to-End Encryption]] and [[Transport Layer Security]], depends on [[Digital Signature]] and [[Public Key Infrastructure]], and is grounded in [[Cryptography]].
- ### Overview
- Email was designed without built-in security, so secure email layers protections on top of the original protocols. These span the hop-by-hop transport between servers and the message body itself, addressing both eavesdropping and impersonation.
- A complete posture also includes sender authentication so that recipients can distinguish legitimate mail from spoofed messages, reducing phishing and fraud.
- ### Mechanisms
- Transport encryption secures the connection between mail servers using [[Transport Layer Security]].
- End-to-end schemes encrypt and sign message bodies so only intended recipients can read them and tampering is detectable.
- Sender-authentication frameworks let domains publish policies that receivers check to detect forgery.
- Key management via [[Public Key Infrastructure]] binds identities to verification keys.
- ### Applications
- Confidential business correspondence and regulated communications supporting [[Compliance]].
- Signed messages that prove sender identity and message integrity.
- Anti-phishing and anti-spoofing protection for organisational domains.
- ### Relationships
- subClassOf:: [[Secure Communication]]
- uses:: [[End-to-End Encryption]]
- uses:: [[Transport Layer Security]]
- requires:: [[Public Key Infrastructure]]
- requires:: [[Cryptography]]
- supports:: [[Compliance]]
- enables:: [[Secure Communication]]
- dependsOn:: [[Digital Signature]]
- implements:: [[End-to-End Encryption]]
- relatedTo:: [[Cryptography]]
- relatedTo:: [[Public Key Infrastructure]]
- contrastsWith:: [[Transport Layer Security]]
- standardizedBy:: [[Public Key Infrastructure]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
