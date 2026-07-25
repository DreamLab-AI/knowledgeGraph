public:: true

# Regulatory Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cfa27974f3239ff59eb70e1f785866a7fccdd2f140b46ebd6b0a3406ed8d4dbf",
  "@type": "Page",
  "vc:slug": "regulatory-capture",
  "title": "Regulatory Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:regulation",
      "vc:label": "Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regulatory-capture",
      "vc:label": "https://en.wikipedia.org/wiki/Regulatory_capture"
    },
    {
      "@id": "urn:visionflow:linked:https-www-oecd-org-gov-regulatory-policy",
      "vc:label": "https://www.oecd.org/gov/regulatory-policy/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Regulatory Capture"
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
  "@id": "urn:ngm:class:regulatory-capture",
  "@type": "Class",
  "label": "Regulatory Capture",
  "definition": "Regulatory capture is a situation in which a regulator advances the interests of the entities it oversees rather than the public interest.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulation",
      "label": "Regulation"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:regulatory-capture:11d78da2e7a3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cfa27974f3239ff59eb70e1f785866a7fccdd2f140b46ebd6b0a3406ed8d4dbf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulation]]",
      "resolved": "urn:visionflow:linked:regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Regulatory_capture]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regulatory-capture",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.oecd.org/gov/regulatory-policy/]]",
      "resolved": "urn:visionflow:linked:https-www-oecd-org-gov-regulatory-policy",
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
  - Regulatory capture is a situation in which a regulator advances the interests of the entities it oversees rather than the public interest.

- ### Semantic Classification
  - owl-class:: governance:RegulatoryCapture
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulation]]
  - bridges-to:: [[Regulatory Frameworks]]

- ### Content
  - Regulatory capture occurs when the influence of regulated industries shapes regulatory decisions in their favour. It can arise through lobbying, information asymmetry, revolving-door employment or dependence on industry expertise.
  - Capture undermines the intended public benefits of regulation and can weaken enforcement. Measures to reduce it include transparency requirements, conflict-of-interest rules and independent oversight.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Regulatory_capture]], [[https://www.oecd.org/gov/regulatory-policy/]]
  - migration-date:: 2026-05-29T00:00:00Z
