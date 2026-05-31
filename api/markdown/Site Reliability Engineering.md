public:: true

# Site Reliability Engineering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:44a7bc95908649a0622146b221cbf637d79ee1d9112850d698a3e1be3d059875",
  "@type": "Page",
  "vc:slug": "site-reliability-engineering",
  "title": "Site Reliability Engineering",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:observability",
      "vc:label": "Observability"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:reliability-engineering",
      "vc:label": "Reliability Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Site Reliability Engineering"
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
  "@id": "urn:ngm:class:site-reliability-engineering",
  "@type": "Class",
  "label": "Site Reliability Engineering",
  "definition": "Site reliability engineering is a discipline that applies software engineering methods to operations work, aiming to build and run scalable and reliable systems.",
  "domain": "software-engineering",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reliability-engineering",
      "label": "Reliability Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:site-reliability-engineering:097b973e6250",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:44a7bc95908649a0622146b221cbf637d79ee1d9112850d698a3e1be3d059875"
  },
  "vc:resolutions": [
    {
      "raw": "[[Observability]]",
      "resolved": "urn:visionflow:linked:observability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reliability Engineering]]",
      "resolved": "urn:visionflow:linked:reliability-engineering",
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
  - Site reliability engineering is a discipline that applies software engineering methods to operations work, aiming to build and run scalable and reliable systems.

- ### Semantic Classification
  - owl-class:: software-engineering:SiteReliabilityEngineering
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Reliability Engineering]]
  - bridges-to:: [[Distributed Systems]]
  - requires:: [[Observability]]

- ### Content
  - Site reliability engineering originated at Google and treats operational problems as software problems. Practitioners automate operational tasks and define service level objectives that set explicit reliability targets for services.
  - The approach uses error budgets, the permitted amount of unreliability, to balance the pace of feature releases against stability, and it relies on observability data to measure and maintain service health.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
