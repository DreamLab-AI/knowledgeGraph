public:: true

# Universal Manifest
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:55be145132f9774e5dcefc4e44db79ed75b53d68802946e99bb6108388fdd50e",
  "@type": "Page",
  "vc:slug": "universal-manifest",
  "title": "Universal Manifest",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-interoperability",
      "vc:label": "Asset Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:asset-management-system",
      "vc:label": "Asset Management System"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identifier",
      "vc:label": "Decentralized Identifier"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-ownership",
      "vc:label": "Decentralized Ownership"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:identity-credentials",
      "vc:label": "Identity Credentials"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability Domain"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-case-register",
      "vc:label": "MSF Use Case Register"
    },
    {
      "@id": "urn:visionflow:linked:permission-grants",
      "vc:label": "Permission Grants"
    },
    {
      "@id": "urn:visionflow:linked:permissioned-access",
      "vc:label": "Permissioned Access"
    },
    {
      "@id": "urn:visionflow:linked:provenance-record",
      "vc:label": "Provenance Record"
    },
    {
      "@id": "urn:visionflow:linked:relationship-graph",
      "vc:label": "Relationship Graph"
    },
    {
      "@id": "urn:visionflow:linked:trust-registry",
      "vc:label": "Trust Registry"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credential",
      "vc:label": "Verifiable Credential"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-registry",
      "vc:label": "Asset Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:avatar-portability",
      "vc:label": "Avatar Portability"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-platform-identity",
      "vc:label": "Cross-Platform Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:data-format-standard",
      "vc:label": "Data Format Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-provider",
      "vc:label": "Identity Provider"
    },
    {
      "@id": "urn:visionflow:owl:class:interoperability-framework",
      "vc:label": "Interoperability Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-schema",
      "vc:label": "Metadata Schema"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "Trust And Governance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20114"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Universal Manifest"
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
  "@id": "urn:ngm:class:universal-manifest",
  "@type": "Class",
  "label": "Universal Manifest",
  "definition": "A standardized metadata document describing identifiers, permissions, relationships, and provenance of a user's digital assets and identities across platforms, enabling cross-platform portability and interoperability.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:identity-credentials",
        "label": "Identity Credentials"
      },
      {
        "@id": "urn:ngm:class:permission-grants",
        "label": "Permission Grants"
      },
      {
        "@id": "urn:ngm:class:provenance-record",
        "label": "Provenance Record"
      },
      {
        "@id": "urn:ngm:class:relationship-graph",
        "label": "Relationship Graph"
      },
      {
        "@id": "urn:ngm:class:asset-registry",
        "label": "Asset Registry"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:metadata-schema",
        "label": "Metadata Schema"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-interoperability",
        "label": "Asset Interoperability"
      },
      {
        "@id": "urn:ngm:class:decentralized-ownership",
        "label": "Decentralized Ownership"
      },
      {
        "@id": "urn:ngm:class:permissioned-access",
        "label": "Permissioned Access"
      },
      {
        "@id": "urn:ngm:class:avatar-portability",
        "label": "Avatar Portability"
      },
      {
        "@id": "urn:ngm:class:cross-platform-identity",
        "label": "Cross-Platform Identity"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:asset-management-system",
        "label": "Asset Management System"
      },
      {
        "@id": "urn:ngm:class:interoperability-framework",
        "label": "Interoperability Framework"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:universal-manifest:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:55be145132f9774e5dcefc4e44db79ed75b53d68802946e99bb6108388fdd50e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Interoperability]]",
      "resolved": "urn:visionflow:linked:asset-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Management System]]",
      "resolved": "urn:visionflow:linked:asset-management-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Signature]]",
      "resolved": "urn:visionflow:linked:cryptographic-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Identifier]]",
      "resolved": "urn:visionflow:linked:decentralized-identifier",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Ownership]]",
      "resolved": "urn:visionflow:linked:decentralized-ownership",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Credentials]]",
      "resolved": "urn:visionflow:linked:identity-credentials",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability Domain]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Use Case Register]]",
      "resolved": "urn:visionflow:linked:msf-use-case-register",
      "kind": "StubLink"
    },
    {
      "raw": "[[Permission Grants]]",
      "resolved": "urn:visionflow:linked:permission-grants",
      "kind": "StubLink"
    },
    {
      "raw": "[[Permissioned Access]]",
      "resolved": "urn:visionflow:linked:permissioned-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[Provenance Record]]",
      "resolved": "urn:visionflow:linked:provenance-record",
      "kind": "StubLink"
    },
    {
      "raw": "[[Relationship Graph]]",
      "resolved": "urn:visionflow:linked:relationship-graph",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Registry]]",
      "resolved": "urn:visionflow:linked:trust-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Verifiable Credential]]",
      "resolved": "urn:visionflow:linked:verifiable-credential",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Registry]]",
      "resolved": "urn:visionflow:owl:class:asset-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar Portability]]",
      "resolved": "urn:visionflow:owl:class:avatar-portability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Platform Identity]]",
      "resolved": "urn:visionflow:owl:class:cross-platform-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Format Standard]]",
      "resolved": "urn:visionflow:owl:class:data-format-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:owl:class:identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability Framework]]",
      "resolved": "urn:visionflow:owl:class:interoperability-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Schema]]",
      "resolved": "urn:visionflow:owl:class:metadata-schema",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust And Governance Domain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
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
  - A standardized metadata document describing identifiers, permissions, relationships, and provenance of a user's digital assets and identities across platforms, enabling cross-platform portability and interoperability.

- ### Semantic Classification
  - owl-class:: spatial-computing:UniversalManifest
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[Interoperability Domain]], [[Trust And Governance Domain]]
  - implemented-in-layer:: [[Data Layer]], [[Middleware Layer]]

- ### Relationships
  - has-part:: [[Asset Registry]], [[Identity Credentials]], [[Permission Grants]], [[Provenance Record]], [[Relationship Graph]]
  - is-part-of:: [[Interoperability Framework]], [[Asset Management System]]
  - requires:: [[Decentralized Identifier]], [[Verifiable Credential]], [[Metadata Schema]], [[Cryptographic Signature]]
  - enables:: [[Avatar Portability]], [[Asset Interoperability]], [[Cross-Platform Identity]], [[Decentralized Ownership]], [[Permissioned Access]]
  - depends-on:: [[Identity Provider]], [[Trust Registry]], [[Data Format Standard]]

- ### Content
  Universal Manifest — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Use Case Register]], [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
