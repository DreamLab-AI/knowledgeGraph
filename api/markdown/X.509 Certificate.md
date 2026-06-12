public:: true

# X.509 Certificate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f931480bf8389e68d171adc6f8c3d406a58c4c4524214b1e0d4866adead7d592",
  "@type": "Page",
  "vc:slug": "x-509-certificate",
  "title": "X.509 Certificate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:certificate-authority",
      "vc:label": "Certificate Authority"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:transport-layer-security",
      "vc:label": "Transport Layer Security"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:digital-certificate",
      "vc:label": "Digital Certificate"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "X.509 Certificate"
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
  "@id": "urn:ngm:class:x-509-certificate",
  "@type": "Class",
  "label": "X.509 Certificate",
  "definition": "A standardised digital certificate format that binds a public key to an identity and is signed by a certificate authority within a public key infrastructure.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-certificate",
      "label": "Digital Certificate"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
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
  "@id": "urn:visionflow:annotation:link-resolutions:x-509-certificate:273c7176befb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f931480bf8389e68d171adc6f8c3d406a58c4c4524214b1e0d4866adead7d592"
  },
  "vc:resolutions": [
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:linked:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Certificate Authority]]",
      "resolved": "urn:visionflow:linked:certificate-authority",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transport Layer Security]]",
      "resolved": "urn:visionflow:linked:transport-layer-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Certificate]]",
      "resolved": "urn:visionflow:linked:digital-certificate",
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
  - A standardised digital certificate format that binds a public key to an identity and is signed by a certificate authority within a public key infrastructure.

- ### Semantic Classification
  - owl-class:: cryptographic:X509Certificate
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Certificate]]
  - bridges-to:: [[Digital Signature]]
  - requires:: [[Public Key Infrastructure]], [[Certificate Authority]]
  - enables:: [[Authentication]], [[Transport Layer Security]]

- ### Content
  - An X.509 certificate is a structured data record that associates a public key with a subject identity, together with metadata such as validity period and intended usage. It is signed by a trusted certificate authority so that relying parties can verify its authenticity.
  - The format is foundational to public key infrastructure and is used in Transport Layer Security, secure email and code signing. Certificate chains link an end-entity certificate to a trusted root through one or more intermediate authorities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
