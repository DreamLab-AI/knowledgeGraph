public:: true

# Reproducibility
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:263bb723692d9a87974d158235545a69bda6f5a7a46547b400da9075d976ad00",
  "@type": "Page",
  "vc:slug": "reproducibility",
  "title": "Reproducibility",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:replication",
      "vc:label": "Replication"
    },
    {
      "@id": "urn:visionflow:linked:robustness",
      "vc:label": "Robustness"
    },
    {
      "@id": "urn:visionflow:linked:sensitivity",
      "vc:label": "Sensitivity"
    },
    {
      "@id": "urn:visionflow:linked:quality-assurance",
      "vc:label": "Quality Assurance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Reproducibility"
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
  "@id": "urn:ngm:class:reproducibility",
  "@type": "Class",
  "label": "Reproducibility",
  "definition": "The ability to obtain consistent results using the same data and methods, a central criterion for the reliability and credibility of scientific findings.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:quality-assurance",
      "label": "Quality Assurance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
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
  "@id": "urn:visionflow:annotation:link-resolutions:reproducibility:16cb8a02338a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:263bb723692d9a87974d158235545a69bda6f5a7a46547b400da9075d976ad00"
  },
  "vc:resolutions": [
    {
      "raw": "[[Replication]]",
      "resolved": "urn:visionflow:linked:replication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robustness]]",
      "resolved": "urn:visionflow:linked:robustness",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensitivity]]",
      "resolved": "urn:visionflow:linked:sensitivity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quality Assurance]]",
      "resolved": "urn:visionflow:linked:quality-assurance",
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
  - The ability to obtain consistent results using the same data and methods, a central criterion for the reliability and credibility of scientific findings.

- ### Semantic Classification
  - owl-class:: general:Reproducibility
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Quality Assurance]]
  - bridges-to:: [[Sensitivity]]
  - requires:: [[Replication]]
  - enables:: [[Robustness]]

- ### Content
  - Reproducibility refers to obtaining the same results when an analysis is repeated with the original data and procedures, and it is closely related to replicability, which concerns obtaining consistent results from new data. Both are foundations of trustworthy research.
  - Achieving reproducibility requires transparent reporting of methods, data and code, and is supported by practices such as version control, documented pipelines and open sharing of materials. Failures of reproducibility have prompted reform efforts across several disciplines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
