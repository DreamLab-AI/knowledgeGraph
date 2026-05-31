public:: true

# Worldcoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:234191a67f1725f08278562ec10d0c0395bf07511899c7dccaf43a8b556d12e2",
  "@type": "Page",
  "vc:slug": "worldcoin",
  "title": "Worldcoin",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    },
    {
      "@id": "urn:visionflow:linked:sybil-resistance",
      "vc:label": "Sybil Resistance"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Worldcoin"
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
  "@id": "urn:ngm:class:worldcoin",
  "@type": "Class",
  "label": "Worldcoin",
  "definition": "A digital identity and cryptocurrency project that uses iris biometrics to issue a unique identifier intended to distinguish individual humans online.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:worldcoin:61a0095fc92f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:234191a67f1725f08278562ec10d0c0395bf07511899c7dccaf43a8b556d12e2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Facial Recognition]]",
      "resolved": "urn:visionflow:linked:facial-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sybil Resistance]]",
      "resolved": "urn:visionflow:linked:sybil-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
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
  - A digital identity and cryptocurrency project that uses iris biometrics to issue a unique identifier intended to distinguish individual humans online.

- ### Semantic Classification
  - owl-class:: general:Worldcoin
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[Digital Identity]], [[Identity Verification]]
  - requires:: [[Biometric Authentication]], [[Facial Recognition]]
  - enables:: [[Sybil Resistance]]

- ### Content
  - Worldcoin is a project that issues a digital identifier derived from iris biometrics, with the stated aim of establishing proof of unique human identity for use in online systems. Enrolment involves a specialised device that captures an iris image and produces a code.
  - The project pairs the identifier with an associated cryptocurrency and wallet. Its use of biometric data has drawn scrutiny from data protection authorities in several jurisdictions concerning consent, storage and processing of sensitive information.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
