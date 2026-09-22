public:: true

# GDPR Article 25
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3465832226bf268c9cbc7031b51b53ef57e586c6acc7f11418bb6a1e3cfdbb04",
  "@type": "Page",
  "vc:slug": "gdpr-article-25",
  "title": "GDPR Article 25",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:data-minimisation",
      "vc:label": "Data Minimisation"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:data-protection",
      "vc:label": "Data Protection"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GDPR Article 25"
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
  "@id": "urn:ngm:class:gdpr-article-25",
  "@type": "Class",
  "label": "GDPR Article 25",
  "definition": "GDPR Article 25 sets out the obligation of data protection by design and by default, requiring controllers to embed privacy safeguards into processing systems and to minimise data collection from the outset.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-protection",
      "label": "Data Protection"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gdpr-article-25:4a2e797ce2a4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3465832226bf268c9cbc7031b51b53ef57e586c6acc7f11418bb6a1e3cfdbb04"
  },
  "vc:resolutions": [
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Minimisation]]",
      "resolved": "urn:visionflow:linked:data-minimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:linked:data-protection",
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
  - GDPR Article 25 sets out the obligation of data protection by design and by default, requiring controllers to embed privacy safeguards into processing systems and to minimise data collection from the outset.

- ### Semantic Classification
  - owl-class:: metaverse:GDPRArticle25
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Protection]]
  - bridges-to:: [[Privacy]], [[Regulatory Compliance]]
  - requires:: [[GDPR]]
  - enables:: [[Data Minimisation]]

- ### Content
  - Article 25 requires that technical and organisational measures implementing data protection principles be designed into processing activities, and that by default only personal data necessary for each specific purpose is processed. It shifts privacy from an afterthought to a design constraint.
  - For immersive and connected systems that capture biometric and spatial data, the article frames how collection, retention and exposure should be limited. It connects directly to data minimisation and broader regulatory compliance duties.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
