public:: true

# Propagation Delay

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:propagation-delay", "@type":"Page", "title":"Propagation Delay", "vc:slug":"propagation-delay", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:propagation-delay",
  "@type":"Class",
  "label":"Propagation Delay",
  "definition":"Propagation delay is the time a signal takes to travel from sender to receiver across a transmission medium, determined by the physical distance divided by the signal's propagation speed. Bounded by the speed of light and reduced in copper or fibre by the medium's refractive properties, it sets a hard floor on network latency that no amount of bandwidth can remove. Propagation delay is one of several additive components of end-to-end latency, alongside transmission, queuing, and processing delays.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:network-latency","label":"Network Latency"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:network-latency","label":"Network Latency"}],
    "hasPart":[
      {"@id":"urn:ngm:class:latency","label":"Latency"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"},
      {"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:round-trip-time","label":"Round Trip Time"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:low-latency","label":"Low Latency"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:transmission-delay","label":"Transmission Delay"},
      {"@id":"urn:ngm:class:jitter","label":"Jitter"},
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:transmission-delay","label":"Transmission Delay"},
      {"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Propagation delay is the time a signal takes to traverse a medium, equal to distance divided by propagation speed. It is a fundamental component of [[Network Latency]] and contributes to overall [[Latency]] and [[Round Trip Time]].
- Bounded by the speed of light, it sets a floor that distinguishes it from [[Transmission Delay]] and [[Bandwidth]] constraints.
- ### Overview
- End-to-end latency is the sum of several delays. Propagation delay is the portion attributable purely to distance: a signal in fibre travels at roughly two-thirds the speed of light, so intercontinental links incur tens of milliseconds no matter how fast the link.
- Unlike transmission delay, which shrinks as bandwidth grows, propagation delay is invariant to data rate. The only ways to reduce it are shortening the physical path or using a faster medium, which is why content delivery networks and edge computing push services geographically closer to users.
- For interactive and real-time systems, propagation delay dominates the latency budget over long distances, making placement and routing decisive design factors.
- ### Mechanisms
- Distance dependence: delay scales linearly with path length.
- Medium speed: copper and fibre propagate slower than light in vacuum due to refractive index.
- Routing path: actual geographic and topological path, not straight-line distance, sets the value.
- Additive composition: propagation combines with transmission, queuing, and processing delays.
- ### Applications
- Latency budgeting for real-time communications and gaming.
- Edge and CDN placement to minimise user-perceived delay.
- Financial trading networks where microseconds of path length matter.
- Satellite versus terrestrial link trade-offs.
- ### Relationships
- partOf:: [[Network Latency]]
- hasPart:: [[Latency]]
- dependsOn:: [[Network Topology]]
- dependsOn:: [[Packet Switching]]
- requires:: [[Network Topology]]
- enables:: [[Round Trip Time]]
- supports:: [[Low Latency]]
- relatedTo:: [[Transmission Delay]]
- relatedTo:: [[Jitter]]
- relatedTo:: [[Bandwidth]]
- contrastsWith:: [[Transmission Delay]]
- contrastsWith:: [[Bandwidth]]
- bridgesTo:: [[Infrastructure]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
