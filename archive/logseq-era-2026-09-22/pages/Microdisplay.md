public:: true

# Microdisplay

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:microdisplay", "@type":"Page", "title":"Microdisplay", "vc:slug":"microdisplay", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:microdisplay",
  "@type":"Class",
  "label":"Microdisplay",
  "definition":"A microdisplay is a miniature display panel, typically under an inch diagonal, with very high pixel density, used in near-eye optical systems such as headsets, viewfinders and projectors. Built on technologies including micro-OLED, liquid-crystal-on-silicon (LCoS) and microLED, it produces a small bright image that magnifying or waveguide optics expand into a large virtual image for the eye. Microdisplays are a critical enabling component for augmented and virtual reality head-mounted displays, where size, brightness, resolution and power efficiency are paramount.",
  "domain":"spatial-computing",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:display-hardware","label":"Display Hardware"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:head-mounted-display","label":"Head-Mounted Display"},{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
    "enables":[{"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"},{"@id":"urn:ngm:class:virtual-reality","label":"Virtual Reality"}],
    "supports":[{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}],
    "uses":[{"@id":"urn:ngm:class:display-hardware","label":"Display Hardware"}],
    "requires":[{"@id":"urn:ngm:class:display-hardware","label":"Display Hardware"}],
    "implements":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
    "dependsOn":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
    "hasPart":[{"@id":"urn:ngm:class:display-hardware","label":"Display Hardware"}],
    "bridgesTo":[{"@id":"urn:ngm:class:head-mounted-display","label":"Head-Mounted Display"}],
    "contrastsWith":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
    "relatedTo":[{"@id":"urn:ngm:class:head-mounted-display","label":"Head-Mounted Display"},{"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A microdisplay is a miniature, high-pixel-density panel and a key form of [[Display Hardware]] used in near-eye optics.
- It is the image source inside a [[Head-Mounted Display]], magnified by lenses or waveguides into a large virtual image.
- As a building block of [[Display Technology]], it directly enables [[Augmented Reality]] and [[Virtual Reality]] experiences.
- ### Overview
- Microdisplays compress a full image into a chip a centimetre or two across, demanding pixel pitches measured in micrometres. The tiny emitting or modulating surface is paired with optics that expand the apparent field of view.
- Competing substrate families trade off brightness, contrast and efficiency: micro-OLED offers excellent contrast, LCoS suits high-resolution projection, and microLED promises the brightness needed to compete with daylight in see-through AR.
- Because headsets must be light, cool and long-lasting, advances in microdisplay efficiency and brightness are pacing items for the broader [[Spatial Computing]] roadmap.
- ### Key aspects
- Sub-inch panels with extreme pixel density and small pixel pitch.
- Substrate families: micro-OLED, LCoS and emerging microLED.
- Pairing with magnifying or waveguide optics to form a virtual image.
- Brightness and efficiency budgets dominating headset design.
- Eye-box, field-of-view and resolution trade-offs at the system level.
- ### Applications
- Augmented and virtual reality head-mounted displays.
- Electronic viewfinders in cameras.
- Pico-projectors and heads-up displays.
- ### Relationships
- partOf:: [[Head-Mounted Display]]
- partOf:: [[Display Technology]]
- enables:: [[Augmented Reality]]
- enables:: [[Virtual Reality]]
- supports:: [[Spatial Computing]]
- uses:: [[Display Hardware]]
- requires:: [[Display Hardware]]
- implements:: [[Display Technology]]
- dependsOn:: [[Display Technology]]
- hasPart:: [[Display Hardware]]
- bridgesTo:: [[Head-Mounted Display]]
- contrastsWith:: [[Display Technology]]
- relatedTo:: [[Head-Mounted Display]]
- relatedTo:: [[Augmented Reality]]
- relatedTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
