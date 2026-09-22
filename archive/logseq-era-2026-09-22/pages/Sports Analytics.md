public:: true

# Sports Analytics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sports-analytics",
  "@type": "Page",
  "vc:slug": "sports-analytics",
  "title": "Sports Analytics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sports-analytics",
  "@type": "Class",
  "label": "Sports Analytics",
  "definition": "Sports analytics is the application of data capture, statistical modelling, and machine learning to athletic performance, tactics, and injury prevention, drawing on tracking data, biomechanics, and event logs. Computer-vision pipelines increasingly supply the underlying movement data by extracting player positions and body pose from video. It informs coaching decisions, talent evaluation, broadcast insight, and load management.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sports analytics is an [[AI Application]] that applies data capture, statistical modelling, and machine learning to athletic performance, tactics, and injury prevention across tracking, biomechanical, and event data.
- ### Content
  - Modern systems increasingly derive their raw inputs from vision pipelines: [[Pose Estimation]] reconstructs player kinematics from broadcast or sideline video, while marker-based or markerless [[Motion Capture]] yields high-fidelity biomechanics for technique and load analysis. The resulting models support coaching strategy, recruitment, automated highlight generation, and athlete welfare monitoring.
