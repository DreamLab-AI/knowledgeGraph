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
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance Record"
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
