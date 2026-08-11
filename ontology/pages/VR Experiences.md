public:: true

# VR Experiences
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3e3e2ca5fc2975c5ce017fb969ce59bbc62bcbef8d7e6188956dfe596273389b",
  "@type": "Page",
  "vc:slug": "vr-experiences",
  "title": "VR Experiences",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:immersive-experience",
      "vc:label": "Immersive Experience"
    },
    {
      "@id": "urn:visionflow:linked:virtual-reality",
      "vc:label": "Virtual Reality"
    },
    {
      "@id": "urn:visionflow:linked:destination-marketing",
      "vc:label": "Destination Marketing"
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
  "@id": "urn:ngm:class:vr-experiences",
  "@type": "Class",
  "label": "VR Experiences",
  "definition": "Designed interactive episodes delivered through fully immersive virtual reality, in which a head-mounted display replaces the user's visual field with a rendered or captured environment they can look around, move through, and act within. VR experiences span entertainment, training, virtual tours, and destination previews; unlike AR experiences, which overlay content on the physical world, they substitute the world entirely, trading environmental awareness for presence and total authorial control of the scene.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:immersive-experience",
    "label": "Immersive Experience"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:virtual-environment",
        "label": "Virtual Environment"
      },
      {
        "@id": "urn:ngm:class:360-video",
        "label": "360 Video"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-tourism",
        "label": "Virtual Tourism"
      },
      {
        "@id": "urn:ngm:class:destination-marketing",
        "label": "Destination Marketing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
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
  - "Designed interactive episodes delivered through fully immersive virtual reality, in which a head-mounted display replaces the user's visual field with a rendered or captured environment they can look around, move through, and act within. VR experiences span entertainment, training, virtual tours, and destination previews; unlike AR experiences, which overlay content on the physical world, they substitute the world entirely, trading environmental awareness for presence and total authorial control of the scene."

- ### Semantic Classification
  - owl-class:: spatial-computing:VRExperiences
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Immersive Experience]]
  - requires:: [[Virtual Reality]]
  - requires:: [[Head-Mounted Display]]
  - enables:: [[Virtual Tourism]]

- ### Content

  ## Definition

  **VR experiences** are the authored artefacts of [[Virtual Reality]]: bounded, designed episodes—a game level, a guided tour, a training scenario, a narrative piece—that a user enters through a [[Head-Mounted Display]] and inhabits until they take it off. The defining property is substitution: the rendered [[Virtual Environment]] replaces the physical one completely, occupying the full visual field and, with spatial audio and hand tracking, most of the perceptual channel. This is what separates a VR experience from an AR experience as a modality, not merely a spelling variant—AR annotates the world the user still sees; VR authors a world of its own, gaining presence and total scene control at the cost of environmental awareness and physical mobility.

  The category spans a spectrum of interactivity. At one end sit passive captured experiences—[[360 Video]] tours and cinematic pieces where the user chooses only their gaze direction. In the middle are explorable real-time environments with teleport or smooth locomotion; at the far end, fully interactive simulations where users manipulate objects, collaborate with others, and change the scene's state. Fidelity has risen sharply as photogrammetry and Gaussian splatting allow real places to be captured photorealistically rather than hand-modelled, which matters particularly for tourism and heritage applications.

  For [[Destination Marketing]], VR experiences function as high-fidelity previews: a prospective visitor can stand on a hotel balcony, walk a museum gallery, or ride a mountain trail before committing to travel. Evidence from tourism-board deployments suggests such previews increase booking intent and shift choices towards the previewed destination—the "try before you fly" effect—while also serving accessibility, letting those who cannot travel experience a place at all.

  ## Current Landscape

  The installed base is dominated by standalone headsets—Meta's Quest line holds the majority of consumer share, with Apple Vision Pro anchoring the premium tier and PC-tethered and PlayStation VR2 devices serving enthusiast niches. Distribution runs through platform stores, location-based venues (VR arcades, museum installations, theme-park attractions), and increasingly the browser via WebXR, which lets tourism boards and brands deliver experiences without app-store friction.

  Design practice has matured around VR's specific constraints: comfort (locomotion techniques and frame-rate floors of 72–90 Hz to limit motion sickness), session length (most experiences target 10–30 minutes), and onboarding for first-time users. The commercial centre of gravity has broadened from gaming into enterprise training, simulation, and marketing, where measurable outcomes—retention rates in training, uplift in booking intent—justify production costs more readily than consumer entertainment alone. The unresolved question remains habitual use: headsets excel at occasional, high-intensity experiences, and turning those into daily routines is still the industry's open challenge.

  Recent developments (2025-2026):

  - **Meta dominates the headset market**: Meta held roughly **53% of standalone VR/MR headset shipments in 2025** (near 80% of dedicated VR sales on some trackers), with the **Quest 3, Quest 2, and Quest 3S** occupying the top three connected-headset slots (>63% combined on SteamVR, April 2026); cumulative Quest installed base is about **26.8 million lifetime units** (Treeview/coopboardgames, 2026).
  - **Dedicated VR headset shipments fell in 2025** (down ~14% year-on-year, ~4.3M units) even as the broader XR market grew ~42-44% to ~14.5M units — **all of that growth came from display-less smart glasses**, not headsets (Treeview; IDC).
  - **Premium and new entrants**: Apple Vision Pro shipped an estimated 85,000 units in 2025 (~475K lifetime) and remains a professional/premium niche; Samsung launched the Android XR **Galaxy XR** in October 2025 at $1,799.
  - The overall **VR market was valued at roughly $20.8 billion in 2025**, projected to about $26.7 billion in 2026, with over 171 million users worldwide (Fortune Business Insights via multiple trackers).
  - **WebXR** distribution continues to let tourism boards and brands deliver "try before you fly" previews without app-store friction, and **Gaussian splatting** (now standardised via the experimental Khronos glTF KHR_gaussian_splatting extension, September 2025) is raising photorealism for captured real-place experiences.

  **Sources**:
  - https://treeview.studio/blog/xr-spatial-computing-smart-glasses-market-statistics-report
  - https://coopboardgames.com/statistics/vr-headset-market-share/
  - https://www.g2.com/articles/virtual-reality-statistics
