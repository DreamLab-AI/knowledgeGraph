public:: true

# Onfido
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f840577bbf9a7bb81f080a251b16b6e97c33c0db511e394ee4814c14c3b91886",
  "@type": "Page",
  "vc:slug": "onfido",
  "title": "Onfido",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    },
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:i-proov",
      "vc:label": "iProov"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification-system",
      "vc:label": "Identity Verification System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Onfido"
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
  "@id": "urn:ngm:class:onfido",
  "@type": "Class",
  "label": "Onfido",
  "definition": "Onfido is an identity verification company that combines document checks with facial biometrics to confirm users during remote onboarding. It was acquired by Entrust in 2024.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-verification-system",
      "label": "Identity Verification System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      },
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:onfido:ed92cb33c83f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f840577bbf9a7bb81f080a251b16b6e97c33c0db511e394ee4814c14c3b91886"
  },
  "vc:resolutions": [
    {
      "raw": "[[Facial Recognition]]",
      "resolved": "urn:visionflow:linked:facial-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[iProov]]",
      "resolved": "urn:visionflow:linked:i-proov",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification System]]",
      "resolved": "urn:visionflow:linked:identity-verification-system",
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
  - Onfido is an identity verification company that combines document checks with facial biometrics to confirm users during remote onboarding. It was acquired by Entrust in 2024.

- ### Semantic Classification
  - owl-class:: identity:Onfido
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Identity Verification System]]
  - bridges-to:: [[iProov]]
  - requires:: [[Facial Recognition]], [[Biometric Authentication]]
  - enables:: [[Identity Management]]

- ### Content
  - Onfido verifies identity by capturing an image of a government document, validating its authenticity, and matching it against a live selfie using facial recognition and liveness detection. It is used in regulated onboarding flows for banking, fintech and the gig economy.
  - Founded in London, the company was acquired by Entrust in 2024 to extend that vendor's identity portfolio. Its services automate know-your-customer checks that would otherwise require manual review.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
