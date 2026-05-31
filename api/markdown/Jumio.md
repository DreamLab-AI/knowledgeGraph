public:: true

# Jumio
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cd2dd3ba010f009bbd14c248119e7a024911819da5a21a427f93e8d6ea277c18",
  "@type": "Page",
  "vc:slug": "jumio",
  "title": "Jumio",
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
      "@id": "urn:visionflow:linked:face-recognition",
      "vc:label": "Face Recognition"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Jumio"
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
  "@id": "urn:ngm:class:jumio",
  "@type": "Class",
  "label": "Jumio",
  "definition": "An identity verification company that provides automated document and biometric checks for online onboarding and fraud prevention. Its services support know-your-customer and anti-money-laundering compliance.",
  "domain": "identity",
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
  "@id": "urn:visionflow:annotation:link-resolutions:jumio:d0ff1b858684",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cd2dd3ba010f009bbd14c248119e7a024911819da5a21a427f93e8d6ea277c18"
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
      "raw": "[[Face Recognition]]",
      "resolved": "urn:visionflow:linked:face-recognition",
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
  - An identity verification company that provides automated document and biometric checks for online onboarding and fraud prevention. Its services support know-your-customer and anti-money-laundering compliance.

- ### Semantic Classification
  - owl-class:: identity:Jumio
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Identity Verification]]
  - bridges-to:: [[Face Recognition]]
  - requires:: [[Identity Verification]]
  - enables:: [[Biometric Authentication]]

- ### Content
  - Jumio provides online identity verification that captures and analyses government-issued documents and compares them with a live selfie to confirm that the person presenting the document is its rightful holder.
  - Its products are used by banks, financial services, and other regulated businesses to meet know-your-customer and anti-money-laundering requirements while reducing fraud during digital onboarding.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
