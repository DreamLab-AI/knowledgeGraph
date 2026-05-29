public:: true

# credential schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80225b5045b383185fe894e9030a5fdd25d828d9237fa2f68da3b7211ecfb9c6",
  "@type": "Page",
  "vc:slug": "credential-schema",
  "title": "credential schema",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-schema",
  "@type": "Class",
  "label": "Credential Schema",
  "definition": "A Credential Schema is a machine-readable, versioned specification — typically expressed in JSON Schema or JSON-LD vocabulary — that defines the mandatory and optional claims, data types, cardinality constraints, and value ranges within a Verifiable Credential. Schemas serve as a shared contract between issuers, holders, and verifiers: an issuer populates claims according to a declared schema, a holder's wallet stores it with schema metadata, and a verifier validates the credential's structure against the schema before applying trust decisions. Schemas are published at stable, resolvable URIs and referenced from the `credentialSchema` property defined in the W3C Verifiable Credentials Data Model.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "BC Governance and Regulation"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:verifiable-credential-vc", "label": "Verifiable Credential (VC)"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-schema", "label": "JSON Schema"},
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A Credential Schema is a machine-readable, versioned specification — typically expressed in JSON Schema or JSON-LD vocabulary — that defines the mandatory and optional claims, data types, cardinality constraints, and value ranges within a Verifiable Credential. Schemas serve as a shared contract between issuers, holders, and verifiers: an issuer populates claims according to a declared schema, a holder's wallet stores it with schema metadata, and a verifier validates the credential's structure against the schema before applying trust decisions. Schemas are published at stable, resolvable URIs and referenced from the `credentialSchema` property defined in the W3C Verifiable Credentials Data Model.

- ### Semantic Classification
  - owl-class:: credential-schema:Credential Schema
  - owl-role:: Concept

- ### Relationships
  - enables [[Verifiable Credentials]]
  - enables [[Verifiable Credential (VC)]]
  - uses [[JSON Schema]]
  - uses [[JSON-LD]]
  - relatedTo [[Decentralised Identity]]
  - relatedTo [[Credential Format Standard]]

- ### Content
  - Credential Schemas play a foundational role in interoperable Decentralised Identity ecosystems. Without a shared schema, verifiers cannot programmatically determine whether a credential's claims are structurally valid or semantically coherent. The W3C Verifiable Credentials Data Model 1.1 and its successor 2.0 define the `credentialSchema` property, which may point to a JSON Schema document or a semantic vocabulary term. JSON Schema (IETF draft standards) provides syntactic validation: required properties, string format constraints, enum values, and numeric ranges. JSON-LD vocabularies add semantic grounding, associating claim names with globally unique IRIs that resolve to machine-readable definitions.
  - In the AnonCreds specification (used by Hyperledger Indy and Aries ecosystems), schemas are written to a verifiable data registry (typically a distributed ledger) and referenced by schema ID, ensuring immutability and discoverability. Issuers create credential definitions bound to a published schema, enabling selective disclosure and zero-knowledge proof presentations. In the W3C ecosystem, Credential Format Standards such as SD-JWT VC and MDOC (ISO/IEC 18013-5) also reference schemas to define their claim structures.
  - Schema governance — who can publish and update schemas, how version changes are managed, and how deprecated schemas are handled — is a significant operational challenge in large-scale identity systems. Standards bodies including W3C, OpenID Foundation, and ISO/IEC JTC 1/SC 17 are active in this space. Metadata Registry and Metadata Schema concepts are closely related, as credential schemas are a specialised form of metadata schema applied to identity assertions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
