- ### OntologyBlock
  id:: speech-and-voice-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8007
	- preferred-term:: Speech and voice
	- definition:: AI speech synthesis and voice technologies encompass text-to-speech (TTS) systems using neural networks to generate natural human-like speech, voice cloning for replicating specific speakers from reference audio, and speech recognition for transcription. Modern TTS platforms like ElevenLabs achieve 150ms time-to-first-audio latency with 5000+ voices across 70+ languages, using deep learning for prosody, emotional expression, and context awareness.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:SpeechAndVoice
	- #### Relationships
	  id:: speech-voice-relationships
	  collapsed:: true
		- is-subclass-of:: [[Natural Language Processing]]

## 2025 TTS Landscape

### ElevenLabs
- Industry-leading TTS with 5000+ voices in 70+ languages
- Eleven v3 model features Text to Dialogue for multi-voice conversations
- Expressive control via audio tags: "[whispers] Something's coming... [sighs]"
- 150ms time-to-first-audio latency
- 81.97% pronunciation accuracy, 63.37% context awareness

### OpenAI TTS
- 6 high-quality preset synthetic voices with multilingual support
- "Steerability" feature for tone prompting ("speak in a calm, friendly tone")
- Designed for real-time streaming in voice-interactive agents
- 200ms time-to-first-audio latency

### Performance Comparison
| Metric | ElevenLabs | OpenAI TTS |
|--------|------------|------------|
| Context Awareness | 63.37% | 39.25% |
| Prosody Accuracy | 64.57% | 45.83% |
| Pronunciation | 81.97% | 77.30% |
| Latency | 150ms | 200ms |

### Other Notable Platforms
- **MiniMax Audio** - Top rankings in blind tests for naturalness
- **Resemble AI Chatterbox** - Open source TTS with emotion control and zero-shot voice cloning in 23 languages
- **Azure Custom Neural Voice** - Enterprise customisation leader

### Relationships
- is-subclass-of:: [[Natural Language Processing]]
- relatedTo:: [[Deep Learning]]
- relatedTo:: [[Large language models]]
- usedIn:: [[Accessibility]]
- usedIn:: [[Content Creation]]
- usedIn:: [[Automated Podcasting]]
- usedIn:: [[Virtual Assistants]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Research agent enrichment with 2025 context
- **Verification**: Platform documentation and benchmark data verified
- **Regional Context**: UK/North England where applicable