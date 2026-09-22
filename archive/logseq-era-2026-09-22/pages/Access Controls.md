public:: true

# Access Controls
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:69a153197509866ffad1ba51b59093e14eb6a256312bb8b8166a6a8cf0cc66e5",
  "@type": "Page",
  "vc:slug": "access-controls",
  "title": "Access Controls",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:authorisation",
      "vc:label": "Authorisation"
    },
    {
      "@id": "urn:visionflow:linked:https-csrc-nist-gov-glossary-term-access-control",
      "vc:label": "https://csrc.nist.gov/glossary/term/access_control"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-access-control",
      "vc:label": "https://en.wikipedia.org/wiki/Access_control"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Access Controls"
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
  "@id": "urn:ngm:class:access-controls",
  "@type": "Class",
  "label": "Access Controls",
  "definition": "Access controls are mechanisms that govern which subjects may perform which operations on resources, enforcing authorisation policies.",
  "domain": "distributed-systems",
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
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
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
  "@id": "urn:visionflow:annotation:link-resolutions:access-controls:eb8a10000cbc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:69a153197509866ffad1ba51b59093e14eb6a256312bb8b8166a6a8cf0cc66e5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authorisation]]",
      "resolved": "urn:visionflow:linked:authorisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://csrc.nist.gov/glossary/term/access_control]]",
      "resolved": "urn:visionflow:linked:https-csrc-nist-gov-glossary-term-access-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Access_control]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-access-control",
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
  - Access controls are mechanisms that govern which subjects may perform which operations on resources, enforcing authorisation policies.

- ### Semantic Classification
  - owl-class:: distributed-systems:AccessControls
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authorisation]]
  - bridges-to:: [[Identity Management]]
  - requires:: [[Authentication]]
  - enables:: [[Information Security]]

- ### Content
  - Access controls determine and enforce permissions for users, services and processes. They follow models such as discretionary, mandatory, role-based and attribute-based access control, each defining how rights are assigned.
  - Effective access control depends on prior authentication to establish identity. Controls are applied at operating system, network, application and data layers to limit actions to those that are authorised.

- ### Provenance
  - sources:: [[https://csrc.nist.gov/glossary/term/access_control]], [[https://en.wikipedia.org/wiki/Access_control]]
  - migration-date:: 2026-05-29T00:00:00Z
