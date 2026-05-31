public:: true

# Regulatory Requirements
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af6d08fad2af265daf314aa1ce81a761d4db1cdb3f19bb772a7eb4a26586520a",
  "@type": "Page",
  "vc:slug": "regulatory-requirements",
  "title": "Regulatory Requirements",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
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
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regulatory-compliance",
      "vc:label": "https://en.wikipedia.org/wiki/Regulatory_compliance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Regulatory Requirements"
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
  "@id": "urn:ngm:class:regulatory-requirements",
  "@type": "Class",
  "label": "Regulatory Requirements",
  "definition": "Regulatory requirements are the obligations imposed on entities by laws, regulations and supervisory rules that they must meet to operate lawfully.",
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
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:regulatory-requirements:f25d67abfcd1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:af6d08fad2af265daf314aa1ce81a761d4db1cdb3f19bb772a7eb4a26586520a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
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
      "raw": "[[https://en.wikipedia.org/wiki/Regulatory_compliance]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regulatory-compliance",
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
  - Regulatory requirements are the obligations imposed on entities by laws, regulations and supervisory rules that they must meet to operate lawfully.

- ### Semantic Classification
  - owl-class:: governance:RegulatoryRequirements
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulation]]
  - bridges-to:: [[Regulatory Frameworks]]
  - enables:: [[Compliance]]

- ### Content
  - Regulatory requirements include licensing, capital, reporting, conduct and record-keeping obligations. They derive from primary legislation and from rules issued by supervisory authorities.
  - Entities demonstrate adherence through compliance programmes, audits and regulatory filings. Failure to meet requirements can result in penalties, restrictions or loss of authorisation.

- ### Provenance
  - sources:: [[https://www.oecd.org/gov/regulatory-policy/]], [[https://en.wikipedia.org/wiki/Regulatory_compliance]]
  - migration-date:: 2026-05-29T00:00:00Z
