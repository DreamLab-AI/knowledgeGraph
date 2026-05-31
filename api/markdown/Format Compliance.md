public:: true

# Format Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:format-compliance",
  "@type": "Page",
  "vc:slug": "format-compliance",
  "title": "Format Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:format-compliance",
  "@type": "Class",
  "label": "Format Compliance",
  "definition": "Format compliance is the property of a digital asset or file conforming exactly to the structural, encoding, and schema rules of a defined file or data format specification. Verifying compliance ensures that assets can be reliably parsed, exchanged, and rendered by conformant tools across the supply chain. It is a precondition for interoperability between content producers and consumers.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-standards-and-interop", "label": "Standards and Interoperability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:asset-format-standards", "label": "Asset Format Standards"}, {"@id": "urn:ngm:class:avatar-standard", "label": "Avatar Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Format compliance is the degree to which an asset satisfies the rules of a target format, as required by [[Asset Format Standards]] and the [[Avatar Standard]]. Compliance is what makes cross-tool exchange of 3D models, textures, and avatars predictable.
- ### Content
  - Compliance is typically checked by validators that test files against a schema, magic-number signatures, and semantic constraints (e.g. valid node hierarchies in glTF). Non-compliant assets may load partially, render incorrectly, or fail security checks. Certification programmes and automated CI validators are common deployment mechanisms.
