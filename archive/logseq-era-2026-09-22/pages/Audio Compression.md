public:: true

# Audio Compression

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:audio-compression", "@type":"Page", "title":"Audio Compression", "vc:slug":"audio-compression", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:audio-compression",
  "@type":"Class",
  "label":"Audio Compression",
  "definition":"Audio Compression is the process of reducing the storage size or bandwidth required for audio data, using lossy codecs that discard perceptually less-important information or lossless codecs that preserve the exact waveform. It underlies streaming, spatial audio delivery, and real-time voice communication, balancing fidelity against transmission constraints. Common lossy approaches use psychoacoustic models to remove sound outside human hearing thresholds.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-compression","label":"Data Compression"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Audio Compression is the process of reducing the storage size or bandwidth required for audio data, using lossy codecs that discard perceptually less-important information or lossless codecs that preserve the exact waveform. It underlies streaming, spatial audio delivery, and real-time voice communication, balancing fidelity against transmission constraints. Common lossy approaches use psychoacoustic models to remove sound outside human hearing thresholds.
- ### Relationships
	- subClassOf:: [[Data Compression]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
