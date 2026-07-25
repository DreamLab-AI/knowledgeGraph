public:: true

# C2PA Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6226eda5aac6476d3ed5d08a3732716f62f3e781283ec9da0dd1ba075c7a5e80",
  "@type": "Page",
  "vc:slug": "c2-pa-standard",
  "title": "C2PA Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authenticity-certification",
      "vc:label": "Authenticity Certification"
    },
    {
      "@id": "urn:visionflow:linked:content-provenance",
      "vc:label": "Content Provenance"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signing",
      "vc:label": "Cryptographic Signing"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    },
    {
      "@id": "urn:visionflow:linked:media-verification",
      "vc:label": "Media Verification"
    },
    {
      "@id": "urn:visionflow:linked:metadata-framework",
      "vc:label": "Metadata Framework"
    },
    {
      "@id": "urn:visionflow:linked:trust-model",
      "vc:label": "Trust Model"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-world-wide-web-consortium",
      "vc:label": "W3C (World Wide Web Consortium)"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9802"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "C2PA Standard"
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
  "@id": "urn:ngm:class:c2-pa-standard",
  "@type": "Class",
  "label": "C2PA Standard",
  "definition": "An open technical standard developed by the Coalition for Content Provenance and Authenticity that establishes cryptographically-signed Content Credentials to certify the origin, history, and authenticity of digital media, functioning like a tamper-evident nutrition label for digital content.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:technical-standard",
        "label": "Technical Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-signing",
        "label": "Cryptographic Signing"
      },
      {
        "@id": "urn:ngm:class:trust-model",
        "label": "Trust Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authenticity-certification",
        "label": "Authenticity Certification"
      },
      {
        "@id": "urn:ngm:class:content-provenance",
        "label": "Content Provenance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:c2-pa-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6226eda5aac6476d3ed5d08a3732716f62f3e781283ec9da0dd1ba075c7a5e80"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authenticity Certification]]",
      "resolved": "urn:visionflow:linked:authenticity-certification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Provenance]]",
      "resolved": "urn:visionflow:linked:content-provenance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Signing]]",
      "resolved": "urn:visionflow:linked:cryptographic-signing",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Media Verification]]",
      "resolved": "urn:visionflow:linked:media-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metadata Framework]]",
      "resolved": "urn:visionflow:linked:metadata-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Model]]",
      "resolved": "urn:visionflow:linked:trust-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C (World Wide Web Consortium)]]",
      "resolved": "urn:visionflow:linked:w3-c-world-wide-web-consortium",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:owl:class:technical-standard",
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
  - An open technical standard developed by the Coalition for Content Provenance and Authenticity that establishes cryptographically-signed Content Credentials to certify the origin, history, and authenticity of digital media, functioning like a tamper-evident nutrition label for digital content.

- ### Semantic Classification
  - owl-class:: spatial-computing:C2paStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Cryptographic Signing]], [[Metadata Framework]], [[Trust Model]]
  - enables:: [[Content Provenance]], [[Media Verification]], [[Authenticity Certification]]

- ### Content

  - ## Technical Details
  - **Core Framework**:
		- Provenance Model: Structures and stores provenance information
		- Trust Model: Verifies content creator identities
		- Claim Model: Defines claims made about content
		- Binding Techniques: Cryptographically links provenance to content
  - **Content Credentials Include**:
		- Content ingredients used in production
		- Date, time, and location of creation
		- Device or software used in production process
		- Cryptographic hash and signature for tamper detection
  - **Organizational Structure**: Joint Development Foundation under Linux Foundation, founded by Adobe, Arm, Intel, Microsoft, and Truepic
  - **Adoption**: 5000+ member organizations as of 2024, including Microsoft, Adobe, BBC, OpenAI, Google, Meta, and Amazon
  - **Standardization**: Expected ISO adoption by 2025; W3C examining browser-level integration
  - ## Applications
  - Digital media authenticity verification
  - AI-generated content identification
  - News and journalism provenance tracking
  - Disinformation mitigation
  - Creative asset rights management

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]], [[W3C (World Wide Web Consortium)]]
  - migration-date:: 2026-04-26T00:00:00Z
