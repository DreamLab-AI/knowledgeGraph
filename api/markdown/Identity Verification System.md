public:: true

# Identity Verification System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1e4e08721b1f8a5774d9e8146ff062cf2da115ddbe4e3859549ae2b20fc134ac",
  "@type": "Page",
  "vc:slug": "identity-verification-system",
  "title": "Identity Verification System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:onfido",
      "vc:label": "Onfido"
    },
    {
      "@id": "urn:visionflow:linked:i-proov",
      "vc:label": "iProov"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Verification System"
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
  "@id": "urn:ngm:class:identity-verification-system",
  "@type": "Class",
  "label": "Identity Verification System",
  "definition": "An identity verification system is a set of processes and technologies that confirm a person is who they claim to be, often during onboarding. It typically combines document checks, biometrics and data validation.",
  "domain": "identity",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity-verification-system:d8faf5b79cd7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1e4e08721b1f8a5774d9e8146ff062cf2da115ddbe4e3859549ae2b20fc134ac"
  },
  "vc:resolutions": [
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Onfido]]",
      "resolved": "urn:visionflow:linked:onfido",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[iProov]]",
      "resolved": "urn:visionflow:linked:i-proov",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
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
  - An identity verification system is a set of processes and technologies that confirm a person is who they claim to be, often during onboarding. It typically combines document checks, biometrics and data validation.

- ### Semantic Classification
  - owl-class:: identity:IdentityVerificationSystem
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Identity Management]]
  - bridges-to:: [[Onfido]], [[iProov]]
  - requires:: [[Biometric Authentication]]

- ### Content
  - An identity verification system establishes that a claimed identity is genuine by validating evidence such as government documents, comparing a live image against the document photo, and cross-checking personal data against authoritative records. It is widely used in regulated onboarding for banking, fintech and government services.
  - Such systems combine document authentication, facial biometrics with liveness detection, and data verification to resist fraud and impersonation. Vendors including Onfido and iProov provide components used within these workflows.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
