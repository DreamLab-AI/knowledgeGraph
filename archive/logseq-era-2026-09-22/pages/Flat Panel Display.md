public:: true

# Flat Panel Display

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:flat-panel-display", "@type":"Page", "title":"Flat Panel Display", "vc:slug":"flat-panel-display", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:flat-panel-display",
  "@type":"Class",
  "label":"Flat Panel Display",
  "definition":"A flat panel display is a thin, lightweight electronic display that produces images on a flat surface using technologies such as liquid crystal, organic light-emitting diode or micro-LED panels. It contrasts with bulky cathode-ray-tube displays and forms the dominant display category for monitors, mobile devices and near-eye optics in head-mounted hardware. Key characteristics include resolution, refresh rate, contrast and pixel density.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:holographic-display","label":"Holographic Display"}],
    "partOf":[{"@id":"urn:ngm:class:display-hardware","label":"Display Hardware"}],
    "uses":[{"@id":"urn:ngm:class:rendering","label":"Rendering"}],
    "enables":[{"@id":"urn:ngm:class:head-mounted-display","label":"Head-Mounted Display"}],
    "supports":[{"@id":"urn:ngm:class:virtual-reality","label":"Virtual Reality"},{"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"}],
    "dependsOn":[{"@id":"urn:ngm:class:graphics-processing-unit","label":"Graphics Processing Unit"}],
    "implements":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
    "relatedTo":[{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"},{"@id":"urn:ngm:class:latency","label":"Latency"}],
    "bridgesTo":[{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}],
    "requires":[{"@id":"urn:ngm:class:gpu","label":"GPU"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Flat Panel Display]] is a thin, lightweight [[Display Technology]] that renders images on a flat surface using liquid crystal, OLED or micro-LED panels.
- It is a core part of [[Display Hardware]] and the dominant alternative to bulky cathode-ray-tube displays.
- Flat panels supply the near-eye optics inside a [[Head-Mounted Display]].
- ### Overview
- Flat panel displays emerged as the standard form factor for monitors, televisions, laptops and mobile devices.
- Liquid crystal displays modulate a backlight, whereas emissive technologies such as OLED and micro-LED light each pixel directly.
- Emissive panels offer superior contrast and per-pixel control at the cost of manufacturing complexity.
- Display quality is characterised by resolution, pixel density, refresh rate, response time, brightness and colour gamut.
- ### Key aspects
- Pixel density and resolution determine perceived sharpness, which is especially demanding for near-eye applications.
- High refresh rate and low persistence reduce motion blur, critical for immersive comfort.
- Response time and latency affect perceived responsiveness in interactive and head-tracked rendering.
- Form factor, weight and power efficiency shape suitability for wearable devices.
- ### Applications
- Consumer monitors, phones and televisions.
- Near-eye displays in [[Virtual Reality]] and [[Augmented Reality]] headsets.
- Embedded and automotive instrument panels.
- ### Relationships
- subClassOf:: [[Display Technology]]
- contrastsWith:: [[Holographic Display]]
- partOf:: [[Display Hardware]]
- uses:: [[Rendering]]
- enables:: [[Head-Mounted Display]]
- supports:: [[Virtual Reality]]
- supports:: [[Augmented Reality]]
- dependsOn:: [[Graphics Processing Unit]]
- implements:: [[Display Technology]]
- relatedTo:: [[Real-Time Rendering]]
- relatedTo:: [[Latency]]
- bridgesTo:: [[Spatial Computing]]
- requires:: [[GPU]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
