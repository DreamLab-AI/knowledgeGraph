public:: true

# High-Speed Networking

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:high-speed-networking", "@type": "Page", "title": "High-Speed Networking", "vc:slug": "high-speed-networking", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:high-speed-networking",
  "@type": "Class",
  "label": "High-Speed Networking",
  "definition": "High-speed networking refers to interconnect technologies and protocols engineered to sustain very high data-transfer rates, typically tens to hundreds of gigabits per second, with minimal latency, spanning link types such as fibre optics, InfiniBand and high-bandwidth Ethernet. It is a prerequisite wherever large data volumes must move between compute nodes, sensors or accelerators without becoming a system bottleneck. Applications range from ASIC-accelerated pipelines to synchronised multi-camera motion capture rigs.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-layer",
      "label": "Network Layer"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [],
    "requires": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      }
    ],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-fabric",
        "label": "Network Fabric"
      }
    ],
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
	- High-speed networking refers to interconnect technologies and protocols engineered to sustain very high data-transfer rates, typically tens to hundreds of gigabits per second, with minimal latency, spanning link types such as fibre optics, InfiniBand and high-bandwidth Ethernet. It is a prerequisite wherever large data volumes must move between compute nodes, sensors or accelerators without becoming a system bottleneck. Applications range from ASIC-accelerated pipelines to synchronised multi-camera motion capture rigs.
- ### Relationships
	- requires:: [[Network Layer]]
	- relatedTo:: [[Network Fabric]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
