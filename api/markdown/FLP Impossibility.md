public:: true

# FLP Impossibility
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:23ee7a6b291bf5709f4fbc9dfd549f726606ec45a53dff58e31f980b5569985a",
  "@type": "Page",
  "vc:slug": "flp-impossibility",
  "title": "FLP Impossibility",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-consensus",
      "vc:label": "Distributed Consensus"
    },
    {
      "@id": "urn:visionflow:linked:consensus-algorithm",
      "vc:label": "Consensus Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:fault-tolerance",
      "vc:label": "Fault Tolerance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FLP Impossibility"
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
  "@id": "urn:ngm:class:flp-impossibility",
  "@type": "Class",
  "label": "FLP Impossibility",
  "definition": "A foundational result in distributed computing showing that no deterministic consensus protocol can guarantee agreement in an asynchronous system if even a single process may fail.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-consensus",
      "label": "Distributed Consensus"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-consensus",
        "label": "Distributed Consensus"
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
  "@id": "urn:visionflow:annotation:link-resolutions:flp-impossibility:9184045acf38",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:23ee7a6b291bf5709f4fbc9dfd549f726606ec45a53dff58e31f980b5569985a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Consensus]]",
      "resolved": "urn:visionflow:linked:distributed-consensus",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Algorithm]]",
      "resolved": "urn:visionflow:linked:consensus-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fault Tolerance]]",
      "resolved": "urn:visionflow:linked:fault-tolerance",
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
  - A foundational result in distributed computing showing that no deterministic consensus protocol can guarantee agreement in an asynchronous system if even a single process may fail.

- ### Semantic Classification
  - owl-class:: distributed-systems:FLPImpossibility
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Consensus]]
  - bridges-to:: [[Consensus Algorithm]], [[Fault Tolerance]]
  - requires:: [[Distributed Consensus]]

- ### Content
  - The FLP impossibility result, named after Fischer, Lynch and Paterson, proves that in a fully asynchronous distributed system there is no deterministic algorithm that always reaches consensus when at least one process can crash. Because messages can be delayed arbitrarily, no protocol can guarantee both safety and termination in all executions.
  - The result does not say consensus is impossible in practice; it shows that guarantees require additional assumptions such as partial synchrony, timeouts or randomisation. It frames the design of real consensus algorithms like Paxos and Raft, which sacrifice liveness under adverse timing rather than correctness.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
