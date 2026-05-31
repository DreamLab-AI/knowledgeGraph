public:: true

# Regulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:25ea82264cab617c37b9d91bbedb62b54858ea815904a29b882f56d866360243",
  "@type": "Page",
  "vc:slug": "regulation",
  "title": "Regulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
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
      "vc:value": "Regulation"
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
  "@id": "urn:ngm:class:regulation",
  "@type": "Class",
  "label": "Regulation",
  "definition": "Regulation is the use of rules and authority by government or designated bodies to direct, constrain or oversee the conduct of activities.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
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
  "@id": "urn:visionflow:annotation:link-resolutions:regulation:383b6630e824",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:25ea82264cab617c37b9d91bbedb62b54858ea815904a29b882f56d866360243"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
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
  - Regulation is the use of rules and authority by government or designated bodies to direct, constrain or oversee the conduct of activities.

- ### Semantic Classification
  - owl-class:: governance:Regulation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - bridges-to:: [[Compliance]]
  - enables:: [[Regulatory Frameworks]]

- ### Content
  - Regulation establishes binding rules that govern how individuals and organisations behave within a defined domain. It is implemented through legislation, subordinate rules and the activity of supervisory authorities.
  - Objectives include protecting consumers, maintaining market integrity, ensuring safety and managing systemic risk. Regulation is enforced through monitoring, inspection and sanctions for non-compliance.

- ### Provenance
  - sources:: [[https://www.oecd.org/gov/regulatory-policy/]], [[https://en.wikipedia.org/wiki/Regulation]]
  - migration-date:: 2026-05-29T00:00:00Z
