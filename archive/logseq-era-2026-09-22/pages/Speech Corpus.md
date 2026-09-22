public:: true

# Speech Corpus

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:speech-corpus", "@type":"Page", "title":"Speech Corpus", "vc:slug":"speech-corpus", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:speech-corpus",
  "@type":"Class",
  "label":"Speech Corpus",
  "definition":"A speech corpus is a curated collection of recorded audio, usually paired with transcriptions, speaker metadata or other annotations, used to train and evaluate speech and voice systems. Applications such as speech recognition and voice cloning both require a sufficiently large and diverse speech corpus to learn accurate acoustic and linguistic models. Corpus quality factors, including recording conditions, speaker diversity and transcription accuracy, directly bound the performance achievable by models trained on it.",
  "domain":"artificial-intelligence",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:dataset","label":"Dataset"}],
  "relations":{
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Speech Corpus]] A speech corpus is a curated collection of recorded audio, usually paired with transcriptions, speaker metadata or other annotations, used to train and evaluate speech and voice systems. Applications such as speech recognition and voice cloning both require a sufficiently large and diverse speech corpus to learn accurate acoustic and linguistic models. Corpus quality factors, including recording conditions, speaker diversity and transcription accuracy, directly bound the performance achievable by models trained on it.
- ### Relationships
	- subClassOf:: [[Dataset]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
