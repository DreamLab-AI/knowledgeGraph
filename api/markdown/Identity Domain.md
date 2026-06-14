public:: true

# Identity Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9ad391f6c68fc3e36089178e6221950ebcc95682ae3dccbb5dc84ea1d32de530",
  "@type": "Page",
  "vc:slug": "identity-domain",
  "title": "Identity Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:credential",
      "vc:label": "Credential"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:identity-provider",
      "vc:label": "Identity Provider"
    },
    {
      "@id": "urn:visionflow:linked:attribute-assertion",
      "vc:label": "Attribute Assertion"
    },
    {
      "@id": "urn:visionflow:linked:self-sovereign-identity",
      "vc:label": "Self-Sovereign Identity"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-domain",
      "vc:label": "Cryptographic Domain"
    },
    {
      "@id": "urn:visionflow:linked:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:security-domain",
      "vc:label": "Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:privacy-domain",
      "vc:label": "Privacy Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:nist-sp-800-63",
      "vc:label": "NIST SP 800-63"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Domain"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-domain",
  "@type": "Class",
  "label": "Identity Domain",
  "definition": "The Identity Domain classifies concepts concerning the representation, verification and management of the identities of people, organisations and devices. It covers credentials, authentication assurance and the lifecycle of identity records and their attributes. As a top-level subject axis it provides the foundation on which access control, accountability and personalisation depend.",
  "domain": "security",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:credential",
        "label": "Credential"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      },
      {
        "@id": "urn:ngm:class:attribute-assertion",
        "label": "Attribute Assertion"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:identity-lifecycle-management",
        "label": "Identity Lifecycle Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-domain",
        "label": "Cryptographic Domain"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:personalisation",
        "label": "Personalisation"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Service"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-sp-800-63",
        "label": "NIST SP 800-63"
      },
      {
        "@id": "urn:ngm:class:w3c-did-core",
        "label": "W3C DID Core"
      },
      {
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:openid-connect",
        "label": "OpenID Connect"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:anonymity",
        "label": "Anonymity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-domain",
        "label": "Security Domain"
      },
      {
        "@id": "urn:ngm:class:privacy-domain",
        "label": "Privacy Domain"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      },
      {
        "@id": "urn:ngm:class:credential-revocation",
        "label": "Credential Revocation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    },
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity-domain:bfddc75add23",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9ad391f6c68fc3e36089178e6221950ebcc95682ae3dccbb5dc84ea1d32de530"
  },
  "vc:resolutions": [
    {
      "raw": "[[Credential]]",
      "resolved": "urn:visionflow:linked:credential",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:linked:identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Attribute Assertion]]",
      "resolved": "urn:visionflow:linked:attribute-assertion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Self-Sovereign Identity]]",
      "resolved": "urn:visionflow:linked:self-sovereign-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Domain]]",
      "resolved": "urn:visionflow:linked:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:linked:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Domain]]",
      "resolved": "urn:visionflow:linked:security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy Domain]]",
      "resolved": "urn:visionflow:linked:privacy-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NIST SP 800-63]]",
      "resolved": "urn:visionflow:linked:nist-sp-800-63",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Identity Domain classifies concepts concerning the representation, verification and management of the identities of people, organisations and devices. It covers credentials, authentication assurance and the lifecycle of identity records and their attributes. As a top-level subject axis it provides the foundation on which access control, accountability and personalisation depend.

- ### Semantic Classification
  - owl-class:: id:IdentityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Security Domain]], [[Privacy Domain]]
  - has-part:: [[Credential]], [[Authentication]], [[Identity Provider]], [[Attribute Assertion]], [[Self-Sovereign Identity]]
  - requires:: [[Cryptographic Domain]]
  - enables:: [[Access Control]], [[Accountability]]

- ### Content
  - Identity concerns the binding between an entity and a set of attributes that systems can recognise and rely upon. It distinguishes enrolment, which establishes an identity, from authentication, which proves a claim to that identity at a later time. Assurance levels quantify confidence in both the initial proofing and the ongoing verification.
  - The domain covers federated models, where a relying party trusts an external identity provider, and decentralised models, where holders control their own credentials. Attribute assertions allow selective disclosure, presenting only the claims a transaction requires. Lifecycle management addresses issuance, rotation, revocation and the eventual retirement of identities.
  - Identity bridges to security, which consumes its assurances for access decisions, and to privacy, which constrains how identity data may be collected and shared. It depends on the Cryptographic Domain for the signatures and proofs that make credentials verifiable.

- ### Provenance
  - sources:: [[NIST SP 800-63]]
  - migration-date:: 2026-05-29T00:00:00Z
