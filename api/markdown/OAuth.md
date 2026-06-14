public:: true

# OAuth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c0a812752460d31d26bf4a338913faa7416f5b993ae6fd525ea1dbd4223456e",
  "@type": "Page",
  "vc:slug": "oauth",
  "title": "OAuth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authorisation",
      "vc:label": "Authorisation"
    },
    {
      "@id": "urn:visionflow:linked:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:linked:single-sign-on",
      "vc:label": "Single Sign-On"
    },
    {
      "@id": "urn:visionflow:linked:oauth-2-0",
      "vc:label": "OAuth 2.0"
    },
    {
      "@id": "urn:visionflow:linked:identity-provider",
      "vc:label": "Identity Provider"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OAuth"
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
  "@id": "urn:ngm:class:oauth",
  "@type": "Class",
  "label": "OAuth",
  "definition": "An open standard for delegated authorisation that allows a user to grant a third-party application limited access to resources without sharing their credentials.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authorisation",
      "label": "Authorisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
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
  "@id": "urn:visionflow:annotation:link-resolutions:oauth:6e306c515177",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c0a812752460d31d26bf4a338913faa7416f5b993ae6fd525ea1dbd4223456e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authorisation]]",
      "resolved": "urn:visionflow:linked:authorisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:linked:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Single Sign-On]]",
      "resolved": "urn:visionflow:linked:single-sign-on",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OAuth 2.0]]",
      "resolved": "urn:visionflow:linked:oauth-2-0",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:linked:identity-provider",
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
  - An open standard for delegated authorisation that allows a user to grant a third-party application limited access to resources without sharing their credentials.

- ### Semantic Classification
  - owl-class:: cryptographic:OAuth
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authorisation]]
  - bridges-to:: [[OAuth 2.0]], [[Identity Provider]]
  - requires:: [[Authorisation]], [[Access Control]]
  - enables:: [[Single Sign-On]]

- ### Content
  - OAuth is an authorisation framework that enables an application to obtain limited access to a user's resources held by another service, using access tokens rather than the user's password. The user authorises the access through a consent step.
  - By separating authentication from authorisation and issuing scoped, revocable tokens, OAuth reduces the exposure of credentials. The widely deployed OAuth 2.0 specification defines several grant types suited to different application architectures.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
