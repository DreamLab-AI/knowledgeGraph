public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f63c6ae621dc587b31b0f451ab92be3e532b149dd6a977cf7670f1b7449e0a11",
  "@type": "Page",
  "vc:slug": "sc-standards-and-interop",
  "title": "Standards and Interoperability",
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
  "@id": "urn:ngm:class:sc-standards-and-interop",
  "label": "Standards and Interoperability",
  "definition": "Taxonomy hub for open standards, file formats, APIs, and cross-platform interoperability specifications that enable spatial computing content, devices, and services to work together. This category spans industry consortia output such as OpenXR, OpenUSD, glTF, and WebXR, along with avatar portability and cross-platform identity standards.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:open-xr", "label": "OpenXR"},
      {"@id": "urn:ngm:class:open-usd", "label": "OpenUSD"},
      {"@id": "urn:ngm:class:gl-tf-3-d-file-format", "label": "glTF (3D File Format)"},
      {"@id": "urn:ngm:class:web-xr-api", "label": "WebXR API"},
      {"@id": "urn:ngm:class:avatar-standard", "label": "Avatar Standard"},
      {"@id": "urn:ngm:class:cross-platform-interoperability", "label": "Cross-Platform Interoperability"},
      {"@id": "urn:ngm:class:asset-format-standards", "label": "Asset Format Standards"},
      {"@id": "urn:ngm:class:3-d-file-format", "label": "3D File Format"},
      {"@id": "urn:ngm:class:avatar-interoperability", "label": "Avatar Interoperability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sc-platform-and-environment", "label": "Platform and Environment"},
      {"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"},
      {"@id": "urn:ngm:class:universal-scene-description", "label": "Universal Scene Description"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:3-d-asset-standard", "label": "3D Asset Standard"}
    ]
  },
  "qualityScore": 0.8,
  "quality": 0.8,
  "maturity": "established"
}
```
