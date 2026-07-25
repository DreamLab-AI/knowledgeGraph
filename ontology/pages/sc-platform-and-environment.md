public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ae61b3810618bd1fdbd9675e04ba3478eb29e08fdbb5fbe07cab0c54c475b3f",
  "@type": "Page",
  "vc:slug": "sc-platform-and-environment",
  "title": "Platform and Environment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:sc-platform-and-environment",
  "label": "Platform and Environment",
  "definition": "Taxonomy hub covering the software runtimes, hardware platforms, operating systems, and execution environments that host spatial computing applications. This category encompasses the infrastructure layer on which XR experiences are built and deployed, spanning cloud, edge, and on-device compute contexts.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:mixed-reality-platform", "label": "Mixed Reality Platform"},
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"},
      {"@id": "urn:ngm:class:rendering-engine", "label": "Rendering Engine"},
      {"@id": "urn:ngm:class:operating-system", "label": "Operating System"},
      {"@id": "urn:ngm:class:runtime-environment", "label": "Runtime Environment"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:wearable-computing-platform", "label": "Wearable Computing Platform"},
      {"@id": "urn:ngm:class:middleware", "label": "Middleware"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"},
      {"@id": "urn:ngm:class:sc-standards-and-interop", "label": "Standards and Interoperability"},
      {"@id": "urn:ngm:class:sc-interaction", "label": "Interaction Technology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:open-xr", "label": "OpenXR"}
    ]
  },
  "qualityScore": 0.8,
  "quality": 0.8,
  "maturity": "established"
}
```
