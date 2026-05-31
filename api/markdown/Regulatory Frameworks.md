public:: true

# Regulatory Frameworks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a934aa22b912a3fa426f180fd89e6af812aee14223061e80175a182e773d0f9f",
  "@type": "Page",
  "vc:slug": "regulatory-frameworks",
  "title": "Regulatory Frameworks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-requirements",
      "vc:label": "Regulatory Requirements"
    },
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:regulation",
      "vc:label": "Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-oecd-org-gov-regulatory-policy",
      "vc:label": "https://www.oecd.org/gov/regulatory-policy/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regulation",
      "vc:label": "https://en.wikipedia.org/wiki/Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Regulatory Frameworks"
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
  "@id": "urn:ngm:class:regulatory-frameworks",
  "@type": "Class",
  "label": "Regulatory Frameworks",
  "definition": "Regulatory frameworks are the structured systems of laws, rules, authorities and procedures that govern conduct within a sector or activity.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulation",
      "label": "Regulation"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-requirements",
        "label": "Regulatory Requirements"
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
  "@id": "urn:visionflow:annotation:link-resolutions:regulatory-frameworks:839e6dfae738",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a934aa22b912a3fa426f180fd89e6af812aee14223061e80175a182e773d0f9f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Requirements]]",
      "resolved": "urn:visionflow:linked:regulatory-requirements",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation]]",
      "resolved": "urn:visionflow:linked:regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.oecd.org/gov/regulatory-policy/]]",
      "resolved": "urn:visionflow:linked:https-www-oecd-org-gov-regulatory-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Regulation]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regulation",
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
  - Regulatory frameworks are the structured systems of laws, rules, authorities and procedures that govern conduct within a sector or activity.

- ### Semantic Classification
  - owl-class:: governance:RegulatoryFrameworks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulation]]
  - bridges-to:: [[Compliance]]
  - enables:: [[Regulatory Requirements]]

- ### Content
  - A regulatory framework combines primary legislation, subordinate rules, supervisory authorities and enforcement mechanisms. It defines who is regulated, what obligations apply and how compliance is monitored.
  - Frameworks differ by sector and jurisdiction and may follow rules-based, principles-based or hybrid designs. They establish the basis for authorisation, supervision and sanctions.

- ### Provenance
  - sources:: [[https://www.oecd.org/gov/regulatory-policy/]], [[https://en.wikipedia.org/wiki/Regulation]]
  - migration-date:: 2026-05-29T00:00:00Z
