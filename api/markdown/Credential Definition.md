public:: true

# Credential Definition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-definition",
  "@type": "Page",
  "vc:slug": "credential-definition",
  "title": "Credential Definition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-definition",
  "@type": "Class",
  "label": "Credential Definition",
  "definition": "A credential definition is an on-ledger or registry artefact, published by a credential issuer, that binds a credential schema to the issuer's cryptographic public keys and signing parameters. It specifies the attributes a credential will contain and the cryptographic material verifiers use to validate signatures and zero-knowledge proofs derived from issued credentials. Central to decentralised-identity ecosystems such as those built on AnonCreds, a credential definition lets a holder prove possession of an issuer-signed credential, selectively disclosing only chosen attributes.",
  "domain": "identity",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:verifiable-credential-standard", "label": "Verifiable Credential Standard"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A credential definition is an issuer-published artefact binding a credential schema to the issuer's cryptographic keys and signing parameters, providing the material verifiers use to validate proofs derived from issued credentials.

- ### Relationships
  - Credential Definition is a subclass of the [[Verifiable Credential Standard]] family and uses [[Digital Signature]] schemes to bind issued claims to an issuer. It enables [[Decentralized Identity]] and [[Self-Sovereign Identity]] by anchoring trust in published issuer keys, and relates to the [[Identity Provider]] role an issuer fulfils.

- ### Content
  - In verifiable-credential ecosystems, three artefacts work together: a schema defines which attributes a credential carries; a credential definition binds that schema to a specific issuer and its keys; and the issued credential is a signed instance held by a subject. The credential definition is the trust anchor — it is the public, discoverable record that says "this issuer signs credentials of this shape using these keys," so that anyone can later verify a credential without contacting the issuer directly.

  - Publishing the definition to a verifiable data registry, often a distributed ledger, is what makes the system decentralised. Verifiers resolve the issuer's identifier and credential definition from the registry rather than relying on a central authority's API, and the registry's immutability and availability properties guarantee that the keys cannot be silently swapped and remain accessible even if the issuer is offline. This separation of issuance from verification is the architectural core of self-sovereign identity.

  - The cryptography behind a credential definition typically supports more than simple signature checking. In privacy-preserving systems such as AnonCreds, the definition includes parameters for a signature scheme that allows zero-knowledge proofs: a holder can prove they possess a valid, issuer-signed credential and disclose only selected attributes — proving they are over eighteen without revealing their birth date — or prove predicates over attributes without revealing the values themselves.

  - This model inverts the privacy posture of conventional identity. Instead of a verifier phoning an identity provider and learning that an interaction occurred, the holder presents a proof verifiable offline against the published definition, so the issuer never learns where or when its credential is used. As government and industry pilots of digital identity wallets expand, credential definitions and the registries that host them form the infrastructure layer that lets issuers, holders, and verifiers interoperate while preserving holder control and minimising disclosure.
