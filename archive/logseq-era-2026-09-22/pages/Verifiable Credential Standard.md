public:: true

# Verifiable Credential Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4c9e9ce7353e369aa20075224e67c5245d1ad0cf45d47f2ade2b574a856621c6",
  "@type": "Page",
  "vc:slug": "verifiable-credential-standard",
  "title": "Verifiable Credential Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:standards",
      "vc:label": "Standards"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10100"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Verifiable Credential Standard"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:verifiable-credential-standard",
  "@type": "Class",
  "label": "Verifiable Credential Standard",
  "definition": "The W3C Verifiable Credentials Data Model specification defines a structured, cryptographically verifiable format for expressing claims about subjects. Credentials are issued by a trusted issuer, held by a subject, and verified by relying parties using digital signatures and Decentralized Identifiers (DIDs), enabling portable, privacy-preserving identity across metaverse and web platforms without centralised databases.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards", "label": "Standards"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:verifiable-credential-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4c9e9ce7353e369aa20075224e67c5245d1ad0cf45d47f2ade2b574a856621c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards]]",
      "resolved": "urn:visionflow:owl:class:standards",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The W3C specification that defines a standard data model and format for expressing cryptographically verifiable claims about subjects, enabling portable, privacy-preserving digital credentials for identity and attribute verification.

- ### Semantic Classification
  - owl-class:: spatial-computing:VerifiableCredentialStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Standards]]
  - **requires**: [[Decentralized Identifiers]], [[Cryptography]] — DIDs provide the subject identifier and cryptographic proofs authenticate the credential
  - **enables**: [[Identity Verification]], [[Digital Identity]] — VCs are the primary mechanism for portable, privacy-preserving identity claims
  - **standardizedBy**: [[Standards]] — the W3C VC Data Model 1.1 is the normative specification
  - **relatedTo**: [[Digital Signature]], [[Interoperability Standard]] — credentials rely on signature schemes and enable cross-platform identity interoperability

- ### Content

  - ## Overview
  - The W3C Verifiable Credentials Data Model defines a standard way to express credentials that are cryptographically verifiable, privacy-respecting, and machine-readable. This enables interoperable digital identity across metaverse platforms.
  - ## Technical Details
  - ### Core Components
		- **Credential Subject**: Entity the credential is about
		- **Issuer**: Entity that creates and signs the credential
		- **Claim**: Assertion about the subject
		- **Proof**: Cryptographic verification mechanism
  - ### Key Standards
		- **W3C VC Data Model 1.1**: Core specification (2022)
		- **W3C DID Core**: Decentralized Identifier specification
		- **JSON-LD**: Linked data serialization format
		- **JWT-VC**: JSON Web Token encoding
  - ### Verification Process
		- Check cryptographic signature validity
		- Verify issuer DID resolution
		- Confirm credential not revoked
		- Validate credential schema conformance
  - ## Applications
  - Metaverse identity verification
  - Age and access control credentials
  - Educational and professional certifications
  - Event tickets and memberships
  - Digital asset provenance attestations

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
