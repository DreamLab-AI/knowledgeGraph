public:: true

# Heuristic Clustering
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:heuristic-clustering",
  "@type": "Page",
  "title": "Heuristic Clustering",
  "vc:slug": "heuristic-clustering",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:heuristic-clustering",
  "@type": "Class",
  "label": "Heuristic Clustering",
  "definition": "Heuristic clustering, in blockchain forensics, is the practice of grouping addresses that are inferred to be controlled by the same entity using behavioural heuristics such as common-input-ownership or change-address detection, rather than direct cryptographic proof of common control. It is the core analytic technique used by chain-analysis firms to de-anonymise transaction graphs and attribute activity to real-world actors. Its outputs are probabilistic, and heuristics can misfire against wallets that deliberately break the assumed patterns.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:clustering",
      "label": "Clustering"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:clustering",
        "label": "Clustering"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Heuristic clustering, in blockchain forensics, is the practice of grouping addresses that are inferred to be controlled by the same entity using behavioural heuristics such as common-input-ownership or change-address detection, rather than direct cryptographic proof of common control.
  - It is a subclass of [[Clustering]].
- ### Content
  - Heuristic clustering, in blockchain forensics, is the practice of grouping addresses that are inferred to be controlled by the same entity using behavioural heuristics such as common-input-ownership or change-address detection, rather than direct cryptographic proof of common control. It is the core analytic technique used by chain-analysis firms to de-anonymise transaction graphs and attribute activity to real-world actors. Its outputs are probabilistic, and heuristics can misfire against wallets that deliberately break the assumed patterns.
