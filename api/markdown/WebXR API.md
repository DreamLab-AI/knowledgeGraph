public:: true

# WebXR API
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:def08e2ec95e724faeee46549a5f494f328999e1ba5ba0d08ebb2855036629fa",
  "@type": "Page",
  "vc:slug": "web-xr-api",
  "title": "WebXR API",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF taxonomy"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-4003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "WebXR API"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-xr-api",
  "@type": "Class",
  "label": "WebXR API",
  "definition": "A W3C web standard providing browser-native interfaces for rendering stereoscopic 3D content and handling spatial input from XR headsets and controllers, enabling AR/VR experiences without native application installation. WebXR supersedes the earlier WebVR specification and is implemented across Chromium-based browsers and Firefox.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:xr-headset", "label": "XR Headset"},
      {"@id": "urn:ngm:class:xr-hardware", "label": "XR Hardware"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:web-technology", "label": "Web Technology"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:web-xr-api:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:def08e2ec95e724faeee46549a5f494f328999e1ba5ba0d08ebb2855036629fa"
  },
  "vc:resolutions": [
    {
      "raw": "[[EWG/MSF taxonomy]]",
      "resolved": "urn:visionflow:linked:ewg-msf-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A W3C web standard providing browser-native interfaces for rendering stereoscopic 3D content and handling spatial input from XR headsets and controllers, enabling AR/VR experiences without native application installation. WebXR supersedes the earlier WebVR specification and is implemented across Chromium-based browsers and Firefox.

- ### Semantic Classification
  - owl-class:: spatial-computing:WebXRAPI
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **Enables**: [[Augmented Reality]], [[Virtual Reality]], [[Spatial Computing]]
  - **Requires**: [[XR Headset]], [[XR Hardware]] (device session negotiation)
  - **Uses**: [[Web Technology]] (browser rendering pipeline)
  - **Part-of**: [[Interoperability]] standards ecosystem

- ### Content
  - web interface enabling rendering and input for AR/VR experiences in browsers.
  - ### Original Content
		- ```
  # WebXR API

		  ## Core Properties

		  ## Classification

		  ## Ontological Relationships

		  ## Terminology

  #### References
  additional-sources:: W3C WebXR · EWG/MSF Taxonomy · ETSI GR ARF 010

		  ## Notes
		  Defines communication rules and exchange methods between digital systems to ensure interoperability.

- ### Provenance
  - sources:: [[EWG/MSF taxonomy]]
  - migration-date:: 2026-04-26T00:00:00Z
