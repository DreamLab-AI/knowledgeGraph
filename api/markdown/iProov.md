public:: true

# iProov
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8d8d259e1c46824f654bae3b118c45547d6802094636a88cdc4f77f2d7ce30b",
  "@type": "Page",
  "vc:slug": "i-proov",
  "title": "iProov",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification-system",
      "vc:label": "Identity Verification System"
    },
    {
      "@id": "urn:visionflow:linked:onfido",
      "vc:label": "Onfido"
    },
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "iProov"
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
  "@id": "urn:ngm:class:i-proov",
  "@type": "Class",
  "label": "iProov",
  "definition": "iProov is a British company providing biometric face verification used for remote identity assurance. Its technology checks that a genuine, live person is present during authentication.",
  "domain": "identity",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:biometric-authentication",
      "label": "Biometric Authentication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification-system",
        "label": "Identity Verification System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:i-proov:e06b11b611b5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a8d8d259e1c46824f654bae3b118c45547d6802094636a88cdc4f77f2d7ce30b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Facial Recognition]]",
      "resolved": "urn:visionflow:linked:facial-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification System]]",
      "resolved": "urn:visionflow:linked:identity-verification-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Onfido]]",
      "resolved": "urn:visionflow:linked:onfido",
      "kind": "StubLink"
    },
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
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
  - iProov is a British company providing biometric face verification used for remote identity assurance. Its technology checks that a genuine, live person is present during authentication.

- ### Semantic Classification
  - owl-class:: identity:iProov
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Biometric Authentication]]
  - bridges-to:: [[Onfido]]
  - requires:: [[Facial Recognition]]
  - enables:: [[Identity Verification System]]

- ### Content
  - iProov supplies face biometric verification used by governments and financial institutions to confirm a person's identity during online enrolment and authentication. Its liveness technology, including a controlled illumination method, aims to detect presentation and injection attacks that use photos, videos or deepfakes.
  - The company has supplied identity assurance for public sector services and banking onboarding, where remote verification must resist impersonation. Its products sit within wider identity verification systems that also check documents and personal data.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
