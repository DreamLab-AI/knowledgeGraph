public:: true

# Digital Cinema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:digital-cinema",
  "@type": "Page",
  "vc:slug": "digital-cinema",
  "title": "Digital Cinema",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-cinema",
  "@type": "Class",
  "label": "Digital Cinema",
  "definition": "Digital cinema is the production, distribution, and theatrical projection of motion pictures using digital files rather than photochemical film. It is governed by the DCI specification, which defines the Digital Cinema Package (DCP) format, JPEG 2000 image compression, encryption, and colour standards for cinema-grade exhibition. It enables consistent high-resolution playback, secure content delivery, and the broader shift to file-based proprietary video pipelines.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:proprietary-video", "label": "Proprietary Video"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Digital cinema captures, distributes, and projects films as digital files under the DCI standard rather than on photochemical film. It is closely tied to [[Proprietary Video]] formats and codecs used in professional media pipelines.
- ### Content
  - A Digital Cinema Package bundles JPEG 2000 image essence, audio, and subtitles, optionally encrypted with KDM-controlled keys for secure exhibition. The standard fixed 2K/4K resolutions, XYZ colour, and frame-rate options, eliminating print costs and enabling instant global release while imposing strict conformance and key-management requirements.
