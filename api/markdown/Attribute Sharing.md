public:: true

# Attribute Sharing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab3d0119d165ca6a2b30f33ce2fc56f8df4f38d4ab67d3dada8e4aaea4b3c4a4",
  "@type": "Page",
  "vc:slug": "attribute-sharing",
  "title": "Attribute Sharing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-anchoring",
      "vc:label": "Blockchain Anchoring"
    },
    {
      "@id": "urn:visionflow:linked:credential-verification",
      "vc:label": "Credential Verification"
    },
    {
      "@id": "urn:visionflow:linked:selective-disclosure",
      "vc:label": "Selective Disclosure"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-platform-identity",
      "vc:label": "Cross-Platform Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-identifiers",
      "vc:label": "Decentralized Identifiers"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9782"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Attribute Sharing"
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
  "@id": "urn:ngm:class:attribute-sharing",
  "@type": "Class",
  "label": "Attribute Sharing",
  "definition": "Attribute Sharing refers to identity federation mechanisms that enable selective disclosure of user credentials and identity attributes across metaverse platforms and blockchain applications, using Self-Sovereign Identity (SSI) principles and decentralized identifiers to maintain user control whi...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-anchoring",
        "label": "Blockchain Anchoring"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:cross-platform-identity",
        "label": "Cross-Platform Identity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:attribute-sharing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab3d0119d165ca6a2b30f33ce2fc56f8df4f38d4ab67d3dada8e4aaea4b3c4a4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Anchoring]]",
      "resolved": "urn:visionflow:linked:blockchain-anchoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Credential Verification]]",
      "resolved": "urn:visionflow:linked:credential-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Selective Disclosure]]",
      "resolved": "urn:visionflow:linked:selective-disclosure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Platform Identity]]",
      "resolved": "urn:visionflow:owl:class:cross-platform-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Identifiers]]",
      "resolved": "urn:visionflow:owl:class:decentralized-identifiers",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:owl:class:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:owl:class:verifiable-credentials",
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
  - Attribute Sharing refers to identity federation mechanisms that enable selective disclosure of user credentials and identity attributes across metaverse platforms and blockchain applications, using Self-Sovereign Identity (SSI) principles and decentralized identifiers to maintain user control while enabling verification without centralized authorities.

- ### Semantic Classification
  - owl-class:: spatial-computing:AttributeSharing
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]] (ngm)
  - is-subclass-of:: [[Identity Management]]
  - requires:: [[Decentralized Identifiers]], [[Verifiable Credentials]], [[Blockchain Anchoring]]
  - enables:: [[Cross-Platform Identity]], [[Selective Disclosure]], [[Credential Verification]]

- ### Content

  ### Technical Details
  Key components include:
  - **Self-Sovereign Identity (SSI)**: User-controlled digital identities without central authority reliance
  - **Three-Party Trust Model**: Issuer (credential creator), Holder (credential owner), Verifier (credential checker)
  - **Decentralized Oracle Networks**: Third-party identity management for metaverse avatar-to-real-identity mapping
  - **Public Key Cryptography**: Verification using blockchain-anchored cryptographic proofs

  ### Federation Architecture
  Blockchain-based decentralized federations mitigate single point of failure in traditional Identity Provider (IdP) systems, introducing immutability, transparency, and traceability.

  ### Metaverse Applications
  Virtual identity management across multiple avatars and applications, verifiable credentials for profile creation and transactions, and consent-based attribute sharing.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
