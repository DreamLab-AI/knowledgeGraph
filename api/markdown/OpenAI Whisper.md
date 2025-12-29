- ### OntologyBlock
  id:: openai-whisper-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8044
	- preferred-term:: OpenAI Whisper
	- status:: active
	- public-access:: true
	- definition:: Whisper is OpenAI's open-source automatic speech recognition (ASR) model released in September 2022, trained on 680,000 hours of supervised multilingual data. Using an encoder-decoder Transformer architecture, Whisper performs multilingual speech recognition, speech translation, language identification, and voice activity detection as a unified multitask model, achieving 50% fewer errors than specialized models in zero-shot evaluation.
	- maturity:: complete
	- owl:class:: ai:OpenaiWhisper
	- owl:physicality:: ConceptualEntity
	- owl:role:: Product
	- belongsToDomain:: [[Artificial Intelligence]]

- [How to use Open AI Text to Speech API in 3 mins | Text to Speech | OpenAI #ai #tts@aseemwangoo - YouTube](https://www.youtube.com/watch?v=y8-En6J9o-Y)
- Insanely fast local whisper transcription [Vaibhavs10/insanely-fast-whisper (github.com)](https://github.com/Vaibhavs10/insanely-fast-whisper)

### Relationships
- is-subclass-of:: [[Speech Recognition]], [[NaturalLanguageProcessing]]
- related-to:: [[AttentionMechanism]], [[Transformer Architecture]], [[OpenAI]]
- developed-by:: [[OpenAI]]
- enables:: [[Transcription]], [[Speech Translation]], [[Language Identification]]
- competes-with:: [[Google Speech-to-Text]], [[Azure Speech Services]]

## Technical Details

### Architecture
- **Type**: Encoder-decoder Transformer (sequence-to-sequence)
- **Input Processing**: Audio resampled to 16,000 Hz, converted to 80-channel (128 for v3) log-Mel spectrogram
- **Window**: 25ms with 10ms stride, split into 30-second chunks
- **Output**: Tokens predicted by decoder for multiple tasks

### Training Data
- 680,000 hours of supervised multilingual audio
- ~117,000 hours (1/3) is multilingual data across 99 languages
- Web-scraped audio with weak supervision

### Model Versions
| Model | Parameters | Multilingual | Release |
|-------|------------|--------------|---------|
| tiny | 39M | Yes/English-only | Sep 2022 |
| base | 74M | Yes/English-only | Sep 2022 |
| small | 244M | Yes/English-only | Sep 2022 |
| medium | 769M | Yes/English-only | Sep 2022 |
| large | 1.55B | Multilingual only | Sep 2022 |
| large-v2 | 1.55B | Multilingual | Dec 2022 |
| large-v3 | 1.55B | Multilingual | Nov 2023 |

### Key Capabilities
- **Multilingual**: Supports 99 languages
- **Zero-shot Translation**: Speech-to-English translation without task-specific training
- **Robustness**: Strong performance on accents, background noise, technical language
- **Open Source**: Weights and code available under MIT license

### Limitations
- Prone to repetitive text generation
- Hallucination of non-spoken content possible
- Not designed for real-time transcription out-of-box

## Applications

- **Transcription**: Meeting notes, podcasts, interviews
- **Accessibility**: Captions, subtitles for video content
- **Translation**: Cross-language speech-to-text
- **Voice Assistants**: Speech input for AI systems
- **Content Indexing**: Searchable audio/video archives

## Recent Developments

- **March 2025**: OpenAI released new GPT-4o-based transcription models with lower error rates than Whisper
- **Community Projects**: insanely-fast-whisper, whisper.cpp for optimized inference

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from research
- **Sources**: [OpenAI Whisper](https://openai.com/index/whisper/), [GitHub](https://github.com/openai/whisper), [Hugging Face](https://huggingface.co/openai/whisper-large-v3)
