public:: true

# OpenVR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-vr",
  "@type": "Page",
  "vc:slug": "open-vr",
  "title": "OpenVR",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-vr",
  "@type": "Class",
  "label": "OpenVR",
  "definition": "OpenVR is a software development kit and API, developed by Valve, that lets applications interface with virtual-reality hardware without targeting a specific vendor's runtime. It abstracts headset tracking, controller input, and rendering submission so a single application can run across compatible VR devices via the SteamVR runtime. OpenVR was an early de facto cross-vendor VR interface, later complemented by the open OpenXR standard.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-standards-and-interop", "label": "Standards and Interoperability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:vircadia", "label": "Vircadia"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - OpenVR is Valve's VR SDK and API that abstracts headset tracking, input, and rendering across vendors, used by virtual-world platforms such as [[Vircadia]] to support multiple devices.
- ### Content
  - Running atop the SteamVR runtime, OpenVR lets a single application drive compatible headsets without device-specific code. It served as an early cross-vendor VR interface and remains relevant, increasingly alongside the broader OpenXR standard.
