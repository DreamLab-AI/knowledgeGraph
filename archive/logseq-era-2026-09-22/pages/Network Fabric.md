public:: true

# Network Fabric

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:network-fabric", "@type": "Page", "title": "Network Fabric", "vc:slug": "network-fabric", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-fabric",
  "@type": "Class",
  "label": "Network Fabric",
  "definition": "A network fabric is a switched interconnect topology, typically non-blocking and multi-path such as a fat-tree or dragonfly, that provides uniform high-bandwidth, low-latency connectivity between many compute nodes. It is the physical and logical substrate over which technologies such as InfiniBand move data between GPUs or servers in a cluster. It underpins distributed training and high-performance computing workloads that depend on collective communication primitives such as the Message Passing Interface.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-layer",
      "label": "Network Layer"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:infiniband",
        "label": "Infiniband"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:message-passing-interface",
        "label": "Message Passing Interface"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      }
    ],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [],
    "supports": []
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A network fabric is a switched interconnect topology, typically non-blocking and multi-path such as a fat-tree or dragonfly, that provides uniform high-bandwidth, low-latency connectivity between many compute nodes. It is the physical and logical substrate over which technologies such as InfiniBand move data between GPUs or servers in a cluster. It underpins distributed training and high-performance computing workloads that depend on collective communication primitives such as the Message Passing Interface.
- ### Relationships
	- uses:: [[Infiniband]]
	- enables:: [[Message Passing Interface]]
	- requires:: [[Compute Infrastructure]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
