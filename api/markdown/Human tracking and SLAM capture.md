public:: true

# Human tracking and SLAM capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a6165d3e89a0f5333c88ae7c44537c14570f61efaf22a24a7eef46ae079f6d93",
  "@type": "Page",
  "vc:slug": "human-tracking-and-slam-capture",
  "title": "Human tracking and SLAM capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Human tracking and SLAM capture"
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
  "@id": "urn:ngm:class:human-tracking-and-slam-capture",
  "@type": "Class",
  "label": "Human tracking and SLAM capture",
  "definition": "Human tracking and SLAM (Simultaneous Localisation and Mapping) capture is the combined process of localising and mapping an environment while concurrently tracking human body pose, motion, and spatial position. Applied in XR headsets, autonomous robots, and motion capture rigs, it fuses depth sensing, inertial data, and computer vision to produce real-time skeletal and spatial models used for avatar animation, scene reconstruction, and safety-aware robot navigation.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:sensor-technology",
      "label": "Sensor Technology"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"},
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:human-tracking-and-slam-capture:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a6165d3e89a0f5333c88ae7c44537c14570f61efaf22a24a7eef46ae079f6d93"
  },
  "vc:resolutions": [],
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
  - Human tracking and SLAM capture is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: robotics:HumanTrackingAndSLAMCapture
  - owl-role:: Concept

- ### Relationships
  - uses:: [[SLAM]]
  - uses:: [[Depth Sensing]]
  - uses:: [[Pose Estimation]]
  - enables:: [[Spatial Mapping]]
  - enables:: [[Motion Capture]]
  - requires:: [[Computer Vision]]

- ### Content
  - #Public page
  - automatically published
  - Tracking and Capture
  - Physical Tracking
		- [Pico Motion Trackers first impressions: a potential game changer - The Ghost Howls (skarredghost.com)](https://skarredghost.com/2024/09/11/pico-motion-tracker-impressions/)
		- [CoTracker: It is Better to Track Together (co-tracker.github.io)](https://co-tracker.github.io/)
		- [Lens Studio (snap.com)](https://ar.snap.com/lens-studio)
		- Pose estimations [Standable](https://www.standablevr.com/)
		- [ScoreHMR (statho.github.io)](https://statho.github.io/ScoreHMR/)
		- Fast bounding [Kroery/DiffMOT: code for CVPR2024 paper: DiffMOT: A Real-time Diffusion-based Multiple Object Tracker with Non-linear Prediction (github.com)](https://github.com/Kroery/DiffMOT)
  - Emotion and remote biometric monitoring
		- emotion tracking
		- [laion empathetic](https://dct.openempathic.ai/guide/#:~:text=Rating%20Arousal%20and%20Valence%3A)
		- [Dense face fields from Microsoft](https://microsoft.github.io/DenseLandmarks/)
  - Ethics and Safety
		- The article discusses the potential risks and opportunities of motion tracking data in extended reality (XR) and the metaverse. While this data is often presumed to be innocuous, recent studies have shown that it has the potential to profile and deanonymize XR users, posing a significant threat to security and privacy in the metaverse. The article highlights the need for increased awareness and caution regarding the collection and use of motion data in XR and metaverse experiences. https://arxiv.org/abs/2306.06459
  - # Interfacing
  - https://www.linkedin.com/posts/dennyskuhnert_applevisionpro-metaquest3-handtracking-activity-7165761977531711490-R-XD?
  - ![video.mp4](../assets/video_1708453959982_0.mp4)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
