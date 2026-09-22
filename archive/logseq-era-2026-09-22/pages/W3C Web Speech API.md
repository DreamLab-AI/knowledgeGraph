public:: true

# W3C Web Speech API
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:w3-c-web-speech-api",
  "@type": "Page",
  "vc:slug": "w3-c-web-speech-api",
  "title": "W3C Web Speech API",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-web-speech-api",
  "@type": "Class",
  "label": "W3C Web Speech API",
  "definition": "The W3C Web Speech API is a browser interface specification that exposes speech recognition (speech-to-text) and speech synthesis (text-to-speech) to web applications through standardised JavaScript objects. It lets pages capture spoken input and produce spoken output without bespoke plugins, underpinning voice-driven and accessibility features on the web. Implementation depth and recognition backends vary across browsers, with some delegating recognition to cloud services.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:speech-and-voice", "label": "Speech and Voice"}, {"@id": "urn:ngm:class:real-time-translation", "label": "Real-time Translation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The W3C Web Speech API standardises browser-based speech recognition and synthesis, the interop layer for [[Speech and Voice]] features and web-delivered [[Real-Time Translation]].
- ### Content
  - The specification defines two interfaces: SpeechRecognition for capturing and transcribing audio with interim and final results, and SpeechSynthesis with SpeechSynthesisUtterance for configurable voices, pitch, and rate. Cross-browser inconsistency, dependence on remote recognition servers, and privacy implications of streaming audio are the main adoption considerations.
