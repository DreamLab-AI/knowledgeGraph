public:: true

# Image Synchronisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:image-synchronisation", "@type":"Page", "title":"Image Synchronisation", "vc:slug":"image-synchronisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:image-synchronisation",
  "@type":"Class",
  "label":"Image Synchronisation",
  "definition":"Image synchronisation is the precise temporal alignment of frame capture across two or more cameras so that corresponding images represent the same instant in the scene. It is essential for stereo vision, where depth is computed by triangulating matched features between left and right images, since even small timing offsets introduce triangulation error for moving scenes or moving cameras. Hardware synchronisation, typically a shared trigger signal, achieves tighter alignment than software timestamp matching, which is limited by operating system scheduling jitter. It is a prerequisite for reliable multi-camera sensor fusion in robotic perception systems operating on dynamic scenes.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:sensor-fusion","label":"Sensor Fusion"}],
  "relations":{}
}
```

- ### Definition
	- Image synchronisation is the precise temporal alignment of frame capture across two or more cameras so that corresponding images represent the same instant in the scene. It is essential for stereo vision, where depth is computed by triangulating matched features between left and right images, since even small timing offsets introduce triangulation error for moving scenes or moving cameras. Hardware synchronisation, typically a shared trigger signal, achieves tighter alignment than software timestamp matching, which is limited by operating system scheduling jitter. It is a prerequisite for reliable multi-camera sensor fusion in robotic perception systems operating on dynamic scenes.
- ### Relationships
	- subClassOf:: [[Sensor Fusion]]
