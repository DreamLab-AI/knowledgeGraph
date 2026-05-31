public:: true

# Yoti
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3755d665cfedc145e4bc239290da7dd108487abfb7cf88cf54cf2fa47f49c14a",
  "@type": "Page",
  "vc:slug": "yoti",
  "title": "Yoti",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:linked:age-verification",
      "vc:label": "Age Verification"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Yoti"
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
  "@id": "urn:ngm:class:yoti",
  "@type": "Class",
  "label": "Yoti",
  "definition": "A digital identity company that provides identity verification, age estimation and authentication services for individuals and organisations.",
  "domain": "general",
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
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:age-verification",
        "label": "Age Verification"
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
  "@id": "urn:visionflow:annotation:link-resolutions:yoti:d5d41153f3d0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3755d665cfedc145e4bc239290da7dd108487abfb7cf88cf54cf2fa47f49c14a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Age Verification]]",
      "resolved": "urn:visionflow:linked:age-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Facial Recognition]]",
      "resolved": "urn:visionflow:linked:facial-recognition",
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
  - A digital identity company that provides identity verification, age estimation and authentication services for individuals and organisations.

- ### Semantic Classification
  - owl-class:: general:Yoti
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Identity Verification]]
  - bridges-to:: [[Digital Identity]], [[Facial Recognition]]
  - requires:: [[Biometric Authentication]]
  - enables:: [[Identity Verification]], [[Age Verification]]

- ### Content
  - Yoti is a digital identity provider offering services that allow individuals to verify their identity and prove attributes such as age, and that allow organisations to confirm those claims. Its products include a reusable digital identity application and age estimation tools.
  - The company's services are used in contexts including age-restricted purchases, account onboarding and access control. It operates within the data protection frameworks applicable in the jurisdictions where it provides services.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
