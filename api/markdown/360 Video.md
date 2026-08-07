public:: true

# 360 Video
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0b671b647f173818c9b1ed7fd3026f3c7e5d1420f8502d76c23c5ce59bae03c",
  "@type": "Page",
  "vc:slug": "360-video",
  "title": "360 Video",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:immersive-media", "vc:label": "Immersive Media"},
    {"@id": "urn:visionflow:linked:vr-experiences", "vc:label": "VR Experiences"},
    {"@id": "urn:visionflow:linked:volumetric-video", "vc:label": "Volumetric Video"},
    {"@id": "urn:visionflow:linked:virtual-reality", "vc:label": "Virtual Reality"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:360-video",
  "@type": "Class",
  "label": "360 Video",
  "definition": "A spherical video format captured with omnidirectional camera rigs that records the full 360-degree field of view around a single vantage point, allowing viewers to look in any direction during playback on headsets, browsers, or mobile devices. Because the footage is fixed to the capture position, it offers rotational (three-degrees-of-freedom) immersion but no positional movement, distinguishing it from volumetric formats that reconstruct scene geometry.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:immersive-media",
    "label": "Immersive Media"
  },
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:vr-experiences", "label": "VR Experiences"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:video-streaming", "label": "Video Streaming"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:volumetric-video", "label": "Volumetric Video"},
      {"@id": "urn:ngm:class:volumetric-capture", "label": "Volumetric Capture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A spherical video format captured with omnidirectional camera rigs that records the full 360-degree field of view around a single vantage point, allowing viewers to look in any direction during playback on headsets, browsers, or mobile devices. Because the footage is fixed to the capture position, it offers rotational (three-degrees-of-freedom) immersion but no positional movement, distinguishing it from volumetric formats that reconstruct scene geometry."

- ### Semantic Classification
  - owl-class:: spatial-computing:ThreeSixtyVideo
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Immersive Media]]
  - enables:: [[VR Experiences]]
  - contrasts-with:: [[Volumetric Video]]
  - related-to:: [[Virtual Reality]]

- ### Content

  ## Definition

  **360 Video** (also called spherical or omnidirectional video) is recorded with multi-lens camera rigs whose overlapping views are stitched into a single equirectangular or cubemap projection covering the entire sphere around the camera. During playback the viewer controls the viewing direction — by dragging in a browser, moving a phone, or turning their head in a VR headset — while the playback engine reprojects the relevant portion of the sphere into a conventional rectilinear viewport.

  The format's defining constraint is its three-degrees-of-freedom (3DoF) nature: viewers can rotate (yaw, pitch, roll) but cannot translate, because the imagery exists only for the original camera position. This makes 360 video far cheaper to produce and distribute than six-degrees-of-freedom volumetric media, at the cost of weaker presence and no motion parallax. Within this graph it therefore serves as the canonical contrast case for [[Volumetric Video]] and volumetric capture pipelines, and as a widely deployed building block of [[VR Experiences]] such as virtual tours, immersive journalism, training scenarios, and live event coverage.

  Monoscopic 360 video presents the same sphere to both eyes; stereoscopic variants capture separate per-eye spheres for depth perception. Spatial (ambisonic) audio is commonly paired with the format so that sound sources remain anchored to scene directions as the viewer looks around.

  ## Technical Details

  - **Projection formats**: equirectangular (dominant), cubemap, and equi-angular cubemap (EAC, used by YouTube) trade pixel-density uniformity against encoder compatibility.
  - **Capture**: dual-fisheye consumer cameras (Insta360, Ricoh Theta) through professional multi-camera rigs; stitching performed on-device or in post-production.
  - **Resolution**: because pixels are spread across the full sphere, 8K spherical resolution yields only roughly HD quality in the visible viewport, driving demand for 8K+ capture.
  - **Delivery**: standard H.264/H.265/AV1 codecs over conventional streaming stacks; viewport-adaptive tiled streaming reduces bandwidth by prioritising the region being watched.
  - **Standards**: MPEG Omnidirectional Media Format (OMAF, ISO/IEC 23090-2) specifies projection, packing, and signalling for spherical media; WebXR and platform players (YouTube VR, Meta Quest TV) provide playback.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
