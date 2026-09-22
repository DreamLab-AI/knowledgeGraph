public:: true

# Cross-Platform Content
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-platform-content",
  "@type": "Page",
  "vc:slug": "cross-platform-content",
  "title": "Cross-Platform Content",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-platform-content",
  "@type": "Class",
  "label": "Cross-Platform Content",
  "definition": "Cross-platform content is digital media and 3D assets authored once and made usable across multiple platforms, engines, or devices through standardised formats and conversion pipelines. It depends on format parsers and content pipelines that normalise assets to each target's runtime requirements. It enables creators to reach diverse metaverse environments without bespoke re-authoring.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:format-parser", "label": "Format Parser"}, {"@id": "urn:ngm:class:metaverse-content-pipeline", "label": "Metaverse Content Pipeline"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-platform content is media authored once and consumable across many platforms via shared formats and conversion. It is enabled by a [[Format Parser]] and produced through a [[Metaverse Content Pipeline]].
- ### Content
  - Achieving portability requires ingesting and emitting interchange formats while preserving geometry, materials, animation, and metadata across heterogeneous runtimes. Robust parsers and pipelines automate validation, transcoding, and optimisation, but semantic mismatches between platform feature sets still require fallback or degradation strategies.
