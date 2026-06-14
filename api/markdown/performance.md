public:: true

# performance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3c883c528605d7b3f05271daac57ae8c35f660aaf39c3134fad928c7fa31927c",
  "@type": "Page",
  "vc:slug": "performance",
  "title": "performance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:observability",
      "vc:label": "Observability"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "performance"
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
  "@id": "urn:ngm:class:performance",
  "@type": "Class",
  "label": "performance",
  "definition": "Performance is a measure of how efficiently a system completes its work, commonly expressed through throughput, latency, and resource usage.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:performance:4a1898716ef6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3c883c528605d7b3f05271daac57ae8c35f660aaf39c3134fad928c7fa31927c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Observability]]",
      "resolved": "urn:visionflow:linked:observability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Performance is a measure of how efficiently a system completes its work, commonly expressed through throughput, latency, and resource usage.

- ### Semantic Classification
  - owl-class:: software-engineering:performance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Observability]]

- ### Content
  - In computing, performance is characterised by metrics including latency, the time to complete a single operation, and throughput, the number of operations completed per unit time. Resource utilisation of processors, memory, and network is also tracked.
  - Performance work involves measuring against defined targets and identifying bottlenecks, often using profiling and observability data to locate where time or resources are consumed.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
