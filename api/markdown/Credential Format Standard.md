schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#CredentialFormatStandard
legacy_uri:: urn:visionclaw:concept:infrastructure:credential-format-standard
public:: true

# Credential Format Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6dcc2c937fad1c9c2490437b829d9154c4d677d3d6c2a8caba78a05e4fed39a4",
  "@type": "Page",
  "vc:slug": "credential-format-standard",
  "title": "Credential Format Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:credential-verification",
      "vc:label": "Credential Verification"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-proofs",
      "vc:label": "Cryptographic Proofs"
    },
    {
      "@id": "urn:visionflow:linked:did",
      "vc:label": "DID"
    },
    {
      "@id": "urn:visionflow:linked:identity-portability",
      "vc:label": "Identity Portability"
    },
    {
      "@id": "urn:visionflow:linked:iso-m-dl",
      "vc:label": "ISO mDL"
    },
    {
      "@id": "urn:visionflow:linked:issuer-infrastructure",
      "vc:label": "Issuer Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:trust-interoperability",
      "vc:label": "Trust Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "vc:label": "W3C Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-standards",
      "vc:label": "Identity Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:standards-body",
      "vc:label": "Standards Body"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-65b10fa8e774"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#CredentialFormatStandard"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9834"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Credential Format Standard"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:credential-format-standard"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:credential-format-standard"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6dcc2c937fad1c9c2490437b829d9154c4d677d3d6c2a8caba78a05e4fed39a4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:credential-format-standard",
  "@type": "Class",
  "label": "Credential Format Standard",
  "definition": "Technical specifications defining the structure, encoding, and cryptographic verification mods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats ...",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-standards",
      "label": "Identity Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-proofs",
        "label": "Cryptographic Proofs"
      },
      {
        "@id": "urn:ngm:class:issuer-infrastructure",
        "label": "Issuer Infrastructure"
      },
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:identity-portability",
        "label": "Identity Portability"
      },
      {
        "@id": "urn:ngm:class:trust-interoperability",
        "label": "Trust Interoperability"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:credential-format-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6dcc2c937fad1c9c2490437b829d9154c4d677d3d6c2a8caba78a05e4fed39a4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Credential Verification]]",
      "resolved": "urn:visionflow:linked:credential-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Proofs]]",
      "resolved": "urn:visionflow:linked:cryptographic-proofs",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID]]",
      "resolved": "urn:visionflow:linked:did",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Portability]]",
      "resolved": "urn:visionflow:linked:identity-portability",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO mDL]]",
      "resolved": "urn:visionflow:linked:iso-m-dl",
      "kind": "StubLink"
    },
    {
      "raw": "[[Issuer Infrastructure]]",
      "resolved": "urn:visionflow:linked:issuer-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Interoperability]]",
      "resolved": "urn:visionflow:linked:trust-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Standards]]",
      "resolved": "urn:visionflow:owl:class:identity-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:owl:class:standards-body",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:6dcc2c937fad1c9c2490437b829d9154c4d677d3d6c2a8caba78a05e4fed39a4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Technical specifications defining the structure, encoding, and cryptographic verification methods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats like W3C Verifiable Credentials.

- ### Semantic Classification
  - owl-class:: infrastructure:CredentialFormatStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]]
  - is-subclass-of:: [[Identity Standards]]
  - requires:: [[Cryptographic Proofs]], [[Standards Body]], [[Issuer Infrastructure]]
  - enables:: [[Credential Verification]], [[Identity Portability]], [[Trust Interoperability]]

- ### Content

  - ## Technical Details
  - **W3C Verifiable Credentials 2.0** (Published May 2025):
		- Cryptographically secure, privacy-respecting, machine-verifiable
		- Extensible data model for identity credentials, university certificates, etc.
		- Three-party ecosystem: issuers, holders, verifiers
  - **Core Components**:
		- Subject and issuer identification
		- Claims/attributes about the subject
		- Cryptographic proofs for integrity
		- JSON-LD serialization for linked data
		- Decentralized Identifiers (DIDs) for unique identification
  - **EU Digital Identity Integration**:
		- European Commission assessing W3C VCDM v2.0 by December 2025
		- Comparison with ISO mDL (mobile Driver License) format
  - **Advantages**: Tamper-resistant, instantly verifiable, issued by anyone, verified by everyone
  - ## Applications
  - Digital driver licenses
  - Educational certificates
  - Professional certifications
  - Healthcare credentials
  - Government identity documents

- ### Provenance
  - sources:: [[W3C Verifiable Credentials]], [[ISO mDL]], [[DID]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
