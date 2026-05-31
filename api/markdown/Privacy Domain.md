public:: true

# Privacy Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9582c2cc5287543f5e7e88993531cb6b2363f81d8d24228f9718b627d3a552d1",
  "@type": "Page",
  "vc:slug": "privacy-domain",
  "title": "Privacy Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-minimisation",
      "vc:label": "Data Minimisation"
    },
    {
      "@id": "urn:visionflow:linked:consent-management",
      "vc:label": "Consent Management"
    },
    {
      "@id": "urn:visionflow:linked:anonymisation",
      "vc:label": "Anonymisation"
    },
    {
      "@id": "urn:visionflow:linked:purpose-limitation",
      "vc:label": "Purpose Limitation"
    },
    {
      "@id": "urn:visionflow:linked:differential-privacy",
      "vc:label": "Differential Privacy"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-domain",
      "vc:label": "Cryptographic Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:confidential-processing",
      "vc:label": "Confidential Processing"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:security-domain",
      "vc:label": "Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:data-governance-domain",
      "vc:label": "Data Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-29100",
      "vc:label": "ISO/IEC 29100"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Privacy Domain"
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
  "@id": "urn:ngm:class:privacy-domain",
  "@type": "Class",
  "label": "Privacy Domain",
  "definition": "The Privacy Domain classifies concepts concerning the appropriate handling of personal information and the rights of individuals over data about them. It covers data minimisation, consent, purpose limitation and the techniques that protect identity. As a top-level subject axis it constrains how systems collect, process and disclose personal data.",
  "domain": "privacy",
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
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:anonymisation",
        "label": "Anonymisation"
      },
      {
        "@id": "urn:ngm:class:purpose-limitation",
        "label": "Purpose Limitation"
      },
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-domain",
        "label": "Cryptographic Domain"
      },
      {
        "@id": "urn:ngm:class:identity-domain",
        "label": "Identity Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:confidential-processing",
        "label": "Confidential Processing"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:privacy-domain:de448c1826eb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9582c2cc5287543f5e7e88993531cb6b2363f81d8d24228f9718b627d3a552d1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Minimisation]]",
      "resolved": "urn:visionflow:linked:data-minimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consent Management]]",
      "resolved": "urn:visionflow:linked:consent-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anonymisation]]",
      "resolved": "urn:visionflow:linked:anonymisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Purpose Limitation]]",
      "resolved": "urn:visionflow:linked:purpose-limitation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Differential Privacy]]",
      "resolved": "urn:visionflow:linked:differential-privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Domain]]",
      "resolved": "urn:visionflow:linked:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Confidential Processing]]",
      "resolved": "urn:visionflow:linked:confidential-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Domain]]",
      "resolved": "urn:visionflow:linked:security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Governance Domain]]",
      "resolved": "urn:visionflow:linked:data-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 29100]]",
      "resolved": "urn:visionflow:linked:iso-iec-29100",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
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
  - The Privacy Domain classifies concepts concerning the appropriate handling of personal information and the rights of individuals over data about them. It covers data minimisation, consent, purpose limitation and the techniques that protect identity. As a top-level subject axis it constrains how systems collect, process and disclose personal data.

- ### Semantic Classification
  - owl-class:: priv:PrivacyDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Security Domain]], [[Data Governance Domain]]
  - has-part:: [[Data Minimisation]], [[Consent Management]], [[Anonymisation]], [[Purpose Limitation]], [[Differential Privacy]]
  - requires:: [[Cryptographic Domain]], [[Identity Domain]]
  - enables:: [[Confidential Processing]], [[Regulatory Compliance]]

- ### Content
  - Privacy concerns the control individuals retain over information that relates to them and the obligations placed on those who process it. It is structured around principles including lawfulness, purpose limitation, minimisation and storage limitation. These principles translate into design choices that collect only what is necessary and retain it only as long as justified.
  - The domain provides techniques that reduce the identifiability of data, from pseudonymisation and anonymisation to formal guarantees such as differential privacy. Consent management records and enforces the permissions under which data may be used. Privacy by design embeds these protections into systems rather than adding them retrospectively.
  - Privacy bridges to security, which supplies enforcement mechanisms, and to data governance, which embeds privacy rules into organisational policy. It depends on the Cryptographic and Identity Domains for the techniques that limit exposure and attribute data correctly.

- ### Provenance
  - sources:: [[ISO/IEC 29100]], [[GDPR]]
  - migration-date:: 2026-05-29T00:00:00Z
