public:: true

# Provenance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79bfcc9bc4e2cbac5a1f1fde914c5c38872241087db132b41967aa1914098139",
  "@type": "Page",
  "vc:slug": "provenance",
  "title": "Provenance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:linked:trust",
      "vc:label": "Trust"
    },
    {
      "@id": "urn:visionflow:linked:provenance-tracking",
      "vc:label": "Provenance Tracking"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:data-provenance",
      "vc:label": "Data Provenance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Provenance"
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
  "@id": "urn:ngm:class:provenance",
  "@type": "Class",
  "label": "Provenance",
  "definition": "The documented record of the origin, history and chain of custody of data or assets, used to establish authenticity, trust and accountability.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-provenance",
      "label": "Data Provenance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
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
  "@id": "urn:visionflow:annotation:link-resolutions:provenance:96d815328a42",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79bfcc9bc4e2cbac5a1f1fde914c5c38872241087db132b41967aa1914098139"
  },
  "vc:resolutions": [
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:linked:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust]]",
      "resolved": "urn:visionflow:linked:trust",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance Tracking]]",
      "resolved": "urn:visionflow:linked:provenance-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Provenance]]",
      "resolved": "urn:visionflow:linked:data-provenance",
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
  - The documented record of the origin, history and chain of custody of data or assets, used to establish authenticity, trust and accountability.

- ### Semantic Classification
  - owl-class:: general:Provenance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Provenance]]
  - bridges-to:: [[Provenance Tracking]], [[Supply Chain]]
  - requires:: [[Audit Trail]]
  - enables:: [[Trust]]

- ### Content
  - Provenance is the verifiable history of where data or an asset came from and how it has been transformed or transferred. Capturing this lineage as an audit trail allows consumers to assess authenticity, reproduce results and assign accountability for changes.
  - Provenance is important in supply chains, scientific data, digital media and machine learning datasets, where knowing the origin and processing history supports trust. Cryptographic and ledger-based techniques can make provenance records tamper-evident.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
