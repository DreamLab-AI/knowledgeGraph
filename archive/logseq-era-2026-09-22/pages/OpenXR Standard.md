public:: true

# OpenXR Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d09f236263abea577ee04670a644f4b807c7d349fada3e1ef32258305f777c8",
  "@type": "Page",
  "vc:slug": "openxr-standard",
  "title": "OpenXR Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:open-standard",
      "vc:label": "Open Standard"
    },
    {
      "@id": "urn:visionflow:linked:khronos-group",
      "vc:label": "Khronos Group"
    },
    {
      "@id": "urn:visionflow:linked:extended-reality",
      "vc:label": "Extended Reality"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:openxr-standard",
  "@type": "Class",
  "label": "OpenXR Standard",
  "definition": "A royalty-free open standard from the Khronos Group defining a common application programming interface between XR applications and virtual, augmented, and mixed reality hardware, covering device tracking, input actions, frame timing, and composition, so that an application written once against the OpenXR runtime interface runs across headsets from different vendors without engine-specific porting.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:open-standard",
    "label": "Open Standard"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:xr-headset",
        "label": "XR Headset"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A royalty-free open standard from the Khronos Group defining a common application programming interface between XR applications and virtual, augmented, and mixed reality hardware, covering device tracking, input actions, frame timing, and composition, so that an application written once against the OpenXR runtime interface runs across headsets from different vendors without engine-specific porting."

- ### Semantic Classification
  - owl-class:: standards:OpenXRStandard
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Open Standard]]
  - enables:: [[Extended Reality]] interoperability
  - related-to:: [[Khronos Group]]
  - bridges-to:: [[WebXR]]

- ### Content

  ## Definition

  The **OpenXR standard** is the Khronos Group's answer to the early fragmentation of XR development, when every headset shipped its own proprietary SDK — Oculus, SteamVR/OpenVR, Windows Mixed Reality — and applications had to be ported to each. Ratified at version 1.0 in 2019, OpenXR defines a single C API sitting between the application (or game engine) and a vendor-supplied runtime. The application expresses what it needs — tracked poses, controller and hand input as abstract "actions", swapchain images, frame timing — and the runtime maps those requests onto whatever display hardware and trackers are present.

  The specification covers session lifecycle, reference spaces (view, local, stage), input action systems with rebindable profiles, compositor layers, and a formal extension mechanism through which vendors expose capabilities such as hand tracking, eye tracking, passthrough, foveated rendering, and spatial anchors before they are standardised in the core. This extension pipeline is how the standard has absorbed successive waves of hardware innovation without breaking application compatibility.

  As a distinct, named standard, OpenXR is a specialisation of the generic [[Open Standard]] concept: it is the concrete specification that XR headsets implement and against which display hardware is standardised, rather than the abstract idea of openly governed specifications.

  ## Current Landscape

  OpenXR has effectively won its category. Meta retired its proprietary native VR API in favour of OpenXR on Quest; SteamVR, Windows Mixed Reality, Varjo, HTC, Pico, and Magic Leap all ship conformant runtimes; and Unity and Unreal Engine target OpenXR as their default XR backend. Apple's visionOS remains the notable holdout, though engine-level abstraction layers paper over the gap for most developers.

  Version 1.1, ratified in April 2024, folded widely adopted extensions (such as `XR_KHR_locate_spaces`, `XR_EXT_local_floor` and `XR_EXT_palm_pose`) into the core specification and tightened conformance requirements, reducing the divergence between runtimes. In the browser, the separate but related [[WebXR]] Device API plays the same interoperability role for web content, and browser implementations commonly sit on top of a native OpenXR runtime — making the two standards complementary layers of the same portability story. For enterprise and telepresence deployments, OpenXR conformance is now a routine procurement requirement, since it decouples content investment from any single headset vendor's fortunes.

  ## Current Landscape

  - The specification is under active point-release development: version 1.1.52 was published on 19 September 2025, following 1.1.51 (28 August 2025) and a steady cadence of roughly monthly maintenance releases through 2025 (1.1.45–1.1.47 landed February–April 2025).
  - OpenXR 1.1 remains the current major line; Khronos continues to promote proven multi-vendor and vendor extensions into ratified core and KHR status rather than issuing a 2.0, keeping application compatibility stable.
  - The 1.1.52 release added a new ratified Khronos extension defining a fallback interaction profile, illustrating the ongoing consolidation of input handling across heterogeneous controllers.
  - Conformance is gated by the Adopter Programme: implementers must be Khronos Adopters and pay the Adopter Fee to use the OpenXR trademark, though the Conformance Test Suite source is openly available.
  - Runtime adoption is effectively universal across the non-Apple ecosystem — Meta Quest, SteamVR, Windows Mixed Reality, Varjo, HTC, Pico and Magic Leap all ship conformant runtimes, with Unity and Unreal Engine defaulting to OpenXR back ends.

  - **Sources**:
    - https://github.com/KhronosGroup/OpenXR-Registry/releases
    - https://github.com/KhronosGroup/OpenXR-Docs/blob/main/CHANGELOG.Docs.md
    - https://www.khronos.org/openxr/
    - https://registry.khronos.org/OpenXR/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-07T00:00:00Z
