public:: true

# Screen Recording
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:screen-recording",
  "@type": "Page",
  "vc:slug": "screen-recording",
  "title": "Screen Recording",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:screen-recording",
  "@type": "Class",
  "label": "Screen Recording",
  "definition": "Screen recording is the capture of pixel-level output from a computer display — including cursor movement, application windows, and system UI — encoded into a video stream for later playback, streaming, or analysis. It combines display capture with optional audio recording and may include region selection, frame-rate control, hardware-accelerated encoding, and metadata tagging.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:screen-capture", "label": "Screen Capture"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:video-encoder", "label": "Video Encoder"},
      {"@id": "urn:ngm:class:audio-capture", "label": "Audio Capture"},
      {"@id": "urn:ngm:class:frame-buffer", "label": "Frame Buffer"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:display-compositor", "label": "Display Compositor"},
      {"@id": "urn:ngm:class:codec", "label": "Codec"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:tutorial-creation", "label": "Tutorial Creation"},
      {"@id": "urn:ngm:class:ui-test-automation", "label": "UI Test Automation"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:screen-capture-api", "label": "Screen Capture API"},
      {"@id": "urn:ngm:class:hardware-video-encoding", "label": "Hardware Video Encoding"},
      {"@id": "urn:ngm:class:container-format", "label": "Container Format"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"},
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"},
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:live-streaming", "label": "Live Streaming"},
      {"@id": "urn:ngm:class:screenshot", "label": "Screenshot"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:gui-agent-training", "label": "GUI Agent Training"},
      {"@id": "urn:ngm:class:accessibility-auditing", "label": "Accessibility Auditing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:display-capture", "label": "Display Capture"},
      {"@id": "urn:ngm:class:application-window-capture", "label": "Application Window Capture"},
      {"@id": "urn:ngm:class:browser-based-screen-capture", "label": "Browser-Based Screen Capture"},
      {"@id": "urn:ngm:class:obs-studio", "label": "OBS Studio"},
      {"@id": "urn:ngm:class:privacy-consent", "label": "Privacy Consent"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:screencast", "label": "Screencast"},
    {"@id": "urn:ngm:class:desktop-recording", "label": "Desktop Recording"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Screen recording captures the output of a display device — whether a full desktop, specific [[Application Window Capture]], or [[Display Capture]] region — as an encoded video, typically for tutorial creation, remote collaboration, or AI training data. Browser implementations use the [[Screen Capture API]] standardised by the W3C, enabling [[Browser-Based Screen Capture]] without native application installation.

- ### Relationships
  - Screen recording builds on [[Screen Capture]] (still-image capture) by adding temporal encoding, audio mixing, and variable frame rates. It integrates with [[Video Conferencing]] platforms as a participant stream source, allowing remote participants to observe a presenter's full display. [[Browser-Based Screen Capture]] via the [[Screen Capture API]] enables in-browser recording without plugins. [[Application Window Capture]] allows selective recording without exposing the full desktop.

- ### Content
  - Screen recording capability appeared in commercial products in the late 1990s with tools like Lotus ScreenCam and Camtasia (2002). Early implementations relied on DirectX or X11 frame-buffer reads and software encoding, which was CPU-intensive. The introduction of hardware video encoders on GPUs (NVENC on NVIDIA, VCE on AMD, QuickSync on Intel) in the early 2010s made high-framerate screen recording viable without significant performance impact. OBS Studio, released as open source in 2012, democratised high-quality recording and streaming.
  - Modern screen recording pipelines operate by periodically capturing frame buffers from the display compositor (e.g., via the Windows Desktop Duplication API, macOS ScreenCaptureKit, or the PipeWire/xdg-portal stack on Linux), passing frames through a hardware or software encoder (H.264, H.265/HEVC, AV1), and muxing the encoded video with audio into a container format (MP4, MKV, WebM). Lossless or near-lossless codecs (PNG video, FFV1) are used when pixel-perfect fidelity matters, as in accessibility auditing or UI test automation data collection.
  - Screen recording underpins numerous modern workflows: software documentation, tutorial creation, UI test replay, accessibility audit trails, and AI-driven browser automation where recorded sessions train agent models to operate GUIs. In enterprise contexts it supports compliance monitoring, call-centre quality assurance, and remote employee monitoring. In research, large-scale screen recording datasets (e.g., Mind2Web, AITW) are used to train GUI-agent models that can operate computers from pixel observations alone.
  - As of 2024–2025, AI-native screen recording tools have emerged that add real-time transcription, speaker identification, chapter generation, and searchable semantic indexes to recordings. Products such as Loom, Tella, and Screen Studio integrate LLM-powered summaries. On the browser side, the W3C Screen Capture API and Captured Surface Control API (Chrome 116+) allow fine-grained control including scrolling captured tabs programmatically. Privacy regulation (GDPR, CCPA) increasingly requires consent mechanisms for screen capture in enterprise and SaaS contexts.
