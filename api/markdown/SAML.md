public:: true

# SAML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9b358e2f5211595dbdaa8c6a9ffb2ecc55c7d806a824bffbd67892fd3990f06",
  "@type": "Page",
  "vc:slug": "saml",
  "title": "SAML",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:single-sign-on",
      "vc:label": "Single Sign-On"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SAML"
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
  "@id": "urn:ngm:class:saml",
  "@type": "Class",
  "label": "SAML",
  "definition": "Security Assertion Markup Language: an XML-based open standard for exchanging authentication and authorisation data between an identity provider and a service provider.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication",
      "label": "Authentication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
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
  "@id": "urn:visionflow:annotation:link-resolutions:saml:78e43414e313",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9b358e2f5211595dbdaa8c6a9ffb2ecc55c7d806a824bffbd67892fd3990f06"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Single Sign-On]]",
      "resolved": "urn:visionflow:linked:single-sign-on",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
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
  - Security Assertion Markup Language: an XML-based open standard for exchanging authentication and authorisation data between an identity provider and a service provider.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SAML
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authentication]]
  - bridges-to:: [[Identity Management]]
  - requires:: [[Authentication]]
  - enables:: [[Single Sign-On]]

- ### Content
  - SAML defines XML formats for security assertions and protocols for requesting and transmitting them. Its principal use is web single sign-on, where an identity provider authenticates a user and issues assertions that service providers trust.
  - The most widely deployed version is SAML 2.0. By centralising authentication at a trusted identity provider, SAML lets organisations grant access to many applications from a single login and enforce consistent identity and access policies.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
