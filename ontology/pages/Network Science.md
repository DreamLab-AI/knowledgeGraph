public:: true

# Network Science
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:network-science",
  "@type": "Page",
  "vc:slug": "network-science",
  "title": "Network Science",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-science",
  "@type": "Class",
  "label": "Network Science",
  "definition": "Network science is the interdisciplinary study of complex systems represented as graphs of nodes and edges, focusing on the structure, dynamics, and function of connections. It develops models and metrics, such as degree distributions, centrality, community structure, and small-world properties, to explain how topology shapes behaviour. It is applied across social, biological, technological, and economic networks.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"},
      {"@id": "urn:ngm:class:social-network-analysis", "label": "Social Network Analysis"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Network science studies systems as graphs to understand how connection structure drives behaviour. It relies on storage such as a [[Graph Database]] and includes applied subfields like [[Social Network Analysis]].
- ### Content
  - Core results include the prevalence of scale-free degree distributions, the small-world phenomenon, and the role of community structure in information and contagion spread. These tools support tasks from identifying influential nodes and detecting clusters to modelling resilience against targeted or random failures.
