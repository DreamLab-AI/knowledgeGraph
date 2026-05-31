public:: true

# Content Portability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:content-portability",
  "@type": "Page",
  "vc:slug": "content-portability",
  "title": "Content Portability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-portability",
  "@type": "Class",
  "label": "Content Portability",
  "definition": "Content portability is the property that allows users to move their digital content and the associated rights between services, platforms, or virtual environments. It depends on standardised data formats and export mechanisms so that assets retain structure and meaning after transfer. It supports user ownership, reduces vendor lock-in, and is a stated goal of open data and open metaverse initiatives.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-standards-and-interop", "label": "Spatial Computing Standards and Interoperability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:asset-format-standards", "label": "Asset Format Standards"}, {"@id": "urn:ngm:class:data-format-standard", "label": "Data Format Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Content portability lets users carry their assets and rights between platforms, enabled by [[Asset Format Standards]] and an agreed [[Data Format Standard]].
- ### Content
  - Where interoperability concerns simultaneous cross-platform use, portability concerns the one-way export and re-import of content with its structure intact. It underpins user data rights and anti-lock-in regulation, and relies on documented schemas plus complete, lossless export tooling.
