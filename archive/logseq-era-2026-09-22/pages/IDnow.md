public:: true

# IDnow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28eb8d5a64f55dd95b92692bf7df2b0301aa4e8a6198f50213550a355bf8c717",
  "@type": "Page",
  "vc:slug": "idnow",
  "title": "IDnow",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IDnow"
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
  "@id": "urn:ngm:class:idnow",
  "@type": "Class",
  "label": "IDnow",
  "definition": "A German identity verification company that provides electronic identification, know-your-customer, and digital signing services. It offers automated and agent-assisted verification of identity documents and biometrics.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-verification",
      "label": "Identity Verification"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "enables": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:idnow:820909653a33",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:28eb8d5a64f55dd95b92692bf7df2b0301aa4e8a6198f50213550a355bf8c717"
  },
  "vc:resolutions": [
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
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
  - A German identity verification company that provides electronic identification, know-your-customer, and digital signing services. It offers automated and agent-assisted verification of identity documents and biometrics.

- ### Semantic Classification
  - owl-class:: identity:IDnow
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Identity Verification]]
  - bridges-to:: [[Regulatory Compliance]]
  - requires:: [[Identity Verification]]
  - enables:: [[Biometric Authentication]]

- ### Content
  - IDnow, headquartered in Munich, provides identity verification used by banks, fintechs, and other regulated businesses to meet anti-money-laundering and know-your-customer obligations across Europe.
  - Its products combine document checks, biometric matching, and in some cases video-based verification with human agents, supporting compliance with national electronic identification frameworks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
