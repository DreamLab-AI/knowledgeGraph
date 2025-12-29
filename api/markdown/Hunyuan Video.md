- ### OntologyBlock
  id:: hunyuan-video-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8033
	- preferred-term:: Hunyuan Video
	- definition:: HunyuanVideo is an open-source video foundation model developed by Tencent that achieves state-of-the-art performance in AI video generation, outperforming closed-source models including Runway Gen-3 and Luma 1.6 in professional human evaluations. Version 1.5 (released November 2025) features 8.3 billion parameters optimized to run on consumer-grade GPUs with 14GB VRAM, using a dual-stream to single-stream Transformer architecture with 3D Causal VAE compression.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:HunyuanVideo

## Resources
- [Official Demo](https://aivideo.hunyuan.tencent.com/)
- [HunyuanVideo GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo)
- [HunyuanVideo-1.5 GitHub](https://github.com/Tencent-Hunyuan/HunyuanVideo-1.5)
- [HunyuanVideo-I2V (Image-to-Video)](https://github.com/Tencent-Hunyuan/HunyuanVideo-I2V)
- [Hugging Face Models](https://huggingface.co/tencent/HunyuanVideo-1.5)

## Technical Architecture
- **Model Size**: 8.3B parameters (reduced from 13B in v1.0)
- **3D Causal VAE**: Compresses video by 16x spatially and 4x temporally
- **SSTA (Selective and Sliding Tile Attention)**: Prunes redundant spatiotemporal key/value blocks for 1.87x speedup
- **Dual-Stream Architecture**: Video and text tokens process independently through initial Transformer blocks, then concatenate for multimodal fusion
- **Text Encoding**: Uses large language model for prompt conditioning

## Capabilities
- **Text-to-Video**: High-resolution video generation up to 720p
- **Image-to-Video**: HunyuanVideo-I2V supports up to 129 frames (5 seconds) at 720p
- **TeaCache**: Training-free 2x speedup technique with minimal quality degradation
- **Consumer GPU Support**: Runs on GPUs with 14GB VRAM

### Relationships
- is-subclass-of:: [[AI Video]]
- developedBy:: [[Tencent]]
- uses:: [[Diffusion Models]]
- uses:: [[Transformers]]
- competesWith:: [[Runway Gen-3]]
- competesWith:: [[Luma AI]]
- relatedTo:: [[Sora]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 research context
- **Verification**: Technical documentation verified
- **Regional Context**: UK/North England where applicable