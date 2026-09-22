public:: true

# real-time transcription
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c7d780c1116ed1424077406e7497d22ced3ec188efb9be0b1789f0cb13baa4a8",
  "@type": "Page",
  "vc:slug": "real-time-transcription",
  "title": "real-time transcription",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-transcription",
  "@type": "Class",
  "label": "Real-time Transcription",
  "definition": "Real-time transcription is the automated conversion of streaming audio to text with latency sufficiently low (typically below 500 ms word latency) to support synchronous human use cases such as live captioning, voice-controlled interfaces, meeting assistance, and broadcast subtitling. It requires streaming automatic speech recognition (ASR) architectures that produce partial and final hypotheses incrementally as audio frames arrive, rather than processing complete utterances offline. Modern systems combine acoustic models (typically based on conformer or whisper-encoder architectures), language models for hypothesis rescoring, and punctuation/formatting post-processors to produce readable output in real time.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:automatic-speech-recognition", "label": "Automatic Speech Recognition"},
      {"@id": "urn:ngm:class:real-time-processing", "label": "Real-time Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:voice-interaction", "label": "Voice Interaction"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Real-time transcription is the automated conversion of streaming audio to text with latency sufficiently low (typically below 500 ms word latency) to support synchronous human use cases such as live captioning, voice-controlled interfaces, meeting assistance, and broadcast subtitling. It requires streaming automatic speech recognition (ASR) architectures that produce partial and final hypotheses incrementally as audio frames arrive, rather than processing complete utterances offline. Modern systems combine acoustic models (typically based on conformer or whisper-encoder architectures), language models for hypothesis rescoring, and punctuation/formatting post-processors to produce readable output in real time.

- ### Semantic Classification
  - owl-class:: real-time-transcription:Real-time Transcription
  - owl-role:: Concept

- ### Relationships
  - requires [[Automatic Speech Recognition]]
  - requires [[Real-time Processing]]
  - enables [[Voice Interaction]]
  - enables [[Accessibility]]
  - relatedTo [[Speech Recognition]]
  - relatedTo [[Natural Language Processing]]

- ### Content
  - Real-time ASR architectures fall into two principal categories. Streaming encoder-decoder models (such as RNN-T / Transducer) jointly train an encoder over acoustic features and a prediction network over token history, emitting output tokens incrementally without requiring an end-of-utterance boundary. CTC-based streaming models use connectionist temporal classification with chunked encoder attention, trading some accuracy for lower latency. OpenAI's Whisper, while primarily an offline model, can be adapted for streaming via chunked inference with overlapping windows, at the cost of increased end-to-end latency.
  - Latency in real-time transcription is decomposed into acoustic look-ahead (how many future frames the encoder needs to produce a hypothesis), network round-trip time for cloud-hosted inference, and post-processing delay. On-device ASR using quantised models eliminates network latency entirely and is critical for privacy-sensitive applications; models such as Whisper.cpp and Vosk run on consumer hardware with acceptable accuracy.
  - Accessibility is a primary driver of real-time transcription deployment: live captioning for deaf and hard-of-hearing users at conferences, broadcast, and video calls is mandated by accessibility legislation in many jurisdictions including the UK Equality Act and the US Americans with Disabilities Act. Speaker diarisation—identifying which speaker is talking at each moment—is commonly combined with real-time transcription in meeting assistant products to produce speaker-attributed transcripts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
