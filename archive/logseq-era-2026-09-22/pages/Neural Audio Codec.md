public:: true

# Neural Audio Codec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:neural-audio-codec",
  "@type": "Page",
  "vc:slug": "neural-audio-codec",
  "title": "Neural Audio Codec",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:neural-audio-codec",
  "@type": "Class",
  "label": "Neural Audio Codec",
  "definition": "A neural audio codec is a learned compression model that encodes audio into a compact discrete or latent representation and decodes it back to a waveform using neural networks. Unlike hand-designed codecs, it is trained end-to-end with reconstruction and adversarial objectives to maximise perceptual quality at very low bitrates. The discrete tokens it produces also serve as a representation for generative audio and speech models.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}, {"@id": "urn:ngm:class:ai-model-architecture", "label": "AI Model Architecture"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:music-and-audio", "label": "Music and Audio"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A neural audio codec is a learned model that compresses and reconstructs audio with neural encoders and decoders, used in [[Music and Audio]] processing.
- ### Content
  - Architectures such as residual vector-quantised autoencoders (for example SoundStream and EnCodec) achieve transparent quality at bitrates well below classical codecs. Their quantised token streams have become a standard interface for language-model-style audio generation, tying compression and synthesis together in a single learned representation.
