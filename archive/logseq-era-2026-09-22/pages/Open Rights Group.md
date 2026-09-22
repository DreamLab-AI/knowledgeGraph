public:: true

# Open Rights Group
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8afd17d2e7f353fe278a5e7d1e60b5efd03fc57dce970126c0be6c1f6374b8f",
  "@type": "Page",
  "vc:slug": "open-rights-group",
  "title": "Open Rights Group",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:user-sovereignty",
      "vc:label": "User Sovereignty"
    },
    {
      "@id": "urn:visionflow:linked:digital-rights",
      "vc:label": "Digital Rights"
    },
    {
      "@id": "urn:visionflow:linked:https-www-openrightsgroup-org",
      "vc:label": "https://www.openrightsgroup.org"
    },
    {
      "@id": "urn:visionflow:linked:https-www-openrightsgroup-org-about",
      "vc:label": "https://www.openrightsgroup.org/about/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Open Rights Group"
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
  "@id": "urn:ngm:class:open-rights-group",
  "@type": "Class",
  "label": "Open Rights Group",
  "definition": "Open Rights Group is a United Kingdom organisation that campaigns for digital rights, including privacy, free expression, and data protection. It is a membership-funded non-profit.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-rights",
      "label": "Digital Rights"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-rights-group:584e3d1631a7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e8afd17d2e7f353fe278a5e7d1e60b5efd03fc57dce970126c0be6c1f6374b8f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Sovereignty]]",
      "resolved": "urn:visionflow:linked:user-sovereignty",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Rights]]",
      "resolved": "urn:visionflow:linked:digital-rights",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.openrightsgroup.org]]",
      "resolved": "urn:visionflow:linked:https-www-openrightsgroup-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.openrightsgroup.org/about/]]",
      "resolved": "urn:visionflow:linked:https-www-openrightsgroup-org-about",
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
  - Open Rights Group is a United Kingdom organisation that campaigns for digital rights, including privacy, free expression, and data protection. It is a membership-funded non-profit.

- ### Semantic Classification
  - owl-class:: governance:OpenRightsGroup
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Digital Rights]]
  - bridges-to:: [[User Sovereignty]]
  - enables:: [[Privacy]]

- ### Content
  - Open Rights Group works to protect digital rights in the United Kingdom, focusing on issues such as surveillance, data protection, online privacy, and freedom of expression. It engages in policy advocacy, legal action, and public campaigns.
  - The organisation is funded by its members and publishes analysis of legislation and government practice affecting digital rights. It participates in consultations and coordinates with other civil society groups.

- ### Provenance
  - sources:: [[https://www.openrightsgroup.org]], [[https://www.openrightsgroup.org/about/]]
  - migration-date:: 2026-05-29T00:00:00Z
