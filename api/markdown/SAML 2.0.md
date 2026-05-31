public:: true

# SAML 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f08cfe7e78db5b5b4ee1926fe4b5084166a5aace2d5771c816d7f2b1a6c1cb2",
  "@type": "Page",
  "vc:slug": "saml-2-0",
  "title": "SAML 2.0",
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
      "vc:value": "SAML 2.0"
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
  "@id": "urn:ngm:class:saml-2-0",
  "@type": "Class",
  "label": "SAML 2.0",
  "definition": "Version 2.0 of the Security Assertion Markup Language, an OASIS standard for exchanging authentication and authorisation assertions between identity providers and service providers.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:saml-2-0:12a16ce35004",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8f08cfe7e78db5b5b4ee1926fe4b5084166a5aace2d5771c816d7f2b1a6c1cb2"
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
  - Version 2.0 of the Security Assertion Markup Language, an OASIS standard for exchanging authentication and authorisation assertions between identity providers and service providers.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SAML20
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authentication]]
  - bridges-to:: [[Identity Management]]
  - requires:: [[Authentication]]
  - enables:: [[Single Sign-On]]

- ### Content
  - SAML 2.0 defines XML-based formats and protocols for conveying security assertions about a subject, typically a user, from an identity provider to a relying service provider. It is widely deployed for web single sign-on in enterprise environments.
  - The standard specifies assertion structures, request and response protocols, bindings to transport mechanisms and profiles for common scenarios. By delegating authentication to a trusted identity provider, it lets users access multiple services without separate credentials at each one.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
