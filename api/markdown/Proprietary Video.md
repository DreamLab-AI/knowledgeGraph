- ### OntologyBlock
  id:: proprietary-video-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: mv
	- term-id:: MV-8007
	- preferred-term:: Proprietary Video
	- status:: active
	- public-access:: true
	- definition:: Commercial AI video generation platforms that create video content from text prompts, images, or other inputs using proprietary diffusion and transformer models. Major platforms include OpenAI Sora, Runway Gen-4, Pika Labs, Google Veo 3, and Luma Dream Machine. The field has advanced from 3-second clips in 2023 to cinematic-quality footage nearly indistinguishable from human-created content in 2025.
	- maturity:: complete
	- owl:class:: mv:ProprietaryVideo
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[Artificial Intelligence]]
	- belongsToDomain:: [[Generative AI]]

## Major Platforms (2025)

### OpenAI Sora
- **Release**: Public Dec 2024, Sora 2 early 2025
- **Capabilities**: Current gold standard for visual quality, physics understanding
- **Access**: ChatGPT Plus ($20/mo), ChatGPT Pro ($200/mo)
- **Innovation**: "World simulator" approach to visual data

### Runway
- **Evolution**: Gen-1 (video-to-video) -> Gen-2 (text-to-video) -> Gen-3 -> Gen-4 (Mar 2025)
- **Strengths**: Comprehensive creative toolkit, multi-scene consistency
- **Target**: Professional creative teams needing precise control
- **Pricing**: Teams of 10 from $76/user/month

### Pika Labs
- **Version**: Pika 2.1 Turbo (latest)
- **Strengths**: Democratized access, multi-style outputs, region-based edits
- **Target**: Social media creators, accessible entry point
- **Focus**: High-speed, high-quality with improved motion realism

### Google Veo
- **Version**: Veo 3 (May 2025)
- **Position**: Current leader combining Google's compute with cutting-edge research
- **Integration**: Google Cloud, YouTube ecosystem

### Other Notable Platforms
- **Luma Dream Machine**: Cinematic quality, 4K exports with native audio
- **Adobe Firefly Video**: Integrated in Creative Cloud
- **Kling AI (China)**: 3D spatio-temporal attention for fluid motion

- ## Closed Source Video id:: 659a922a-1d6b-4ae8-82ad-8d7c2814f25f
	- ### Pika Labs
		- **Current leader**:
		  {{tweet https://twitter.com/martial_artwork/status/1742138390517014918}}
		- **Prompt Creativity & Flexibility**: Excels in this area, enabling users to directly influence the animation with their prompts.
		- **Human Motion Animation**: Attempts adventurous animations but may result in distortions.
		- **Camera Motion Options**: Offers accurate, straightforward camera motions but lacks the dynamic range of Runway ML.
		- **Pros**: Free version (recently reduced quality), supports multiple aspect ratios, provides tutorials for prompt writing.
		- **Cons**: Creations are visible to other users, potential for idea theft, and traffic issues on Discord server​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​. Expensive to use through [Pika Art website](https://pika.art/login) $60pcm,
	- ### Runway ML
		- [twitter link to the render loading below](https://twitter.com/bennash/status/1746188870679400543)
		  {{twitter https://twitter.com/bennash/status/1746188870679400543}}
		- **Basic Animation**: Offers cinematic camera movements and more convincing human motion, but faces issues with brightness and image integrity.
		- **Prompt Creativity & Flexibility**: Less flexible in prompt creativity, occasionally disregarding user prompts.
		- **Human Motion Animation**: Produces high-quality animations but sometimes distorts the original image.
		- **Camera Motion Options**: Provides dynamic camera shots, including zooming, panning, and rotating, but may lead to distortion.
		- **Pros**: Web-based platform ensuring privacy, offers 120 free credits, advanced features, and the option to extend video length.
		- **Cons**: Limited to 16:9 aspect ratio, may not be as flexible as Pika Labs in prompt generation​[](https://www.toolify.ai/ai-news/revolutionary-ai-animation-tools-pika-vs-runway-78636)​​[](https://dragganaitool.uk/pika-labs-vs-runwayml-gen2/)​.
	- ### Mid Journey have said:
		- **Midjourney Video** "will not be like any other AI video products that are currently available out there and will be 10X better."
			- **David Holz**: “*MidJourney video may not be consistently making what you want, but the quality will be consistently good by default.*”
		- **Video Training**: The Midjourney team will start to train the video/animation model, which will come before 3D.
			- Already have all the data needed to train the model.
		- **3D:** needs more data to train, so it’s a bit slower than expected.
		- {{video https://youtu.be/LY3B0d623wA}}
	- ### [VideoPoet – Google Research](https://sites.research.google/videopoet/)
		- **Overview:** Google's text to video, linked to Bard, but not yet available.
	- ### [HeyGen](https://www.heygen.com/) for video avatars
		- **Overview**: HeyGen emphasises security and ethics in its AI video platform, being SOC 2 compliant and focusing on data protection.
		- **Notable Features**: Known for its user-friendly interface and effectiveness in creating short, engaging videos useful for various departments like HR and training.
		- **Target Audience**: Targets SMEs, offering a range of applications from casual to professional use​​.
	- ## Virtual production
		- ### Simulon (Virtual Production)
			- **Cloud rendered magic**: Still early, and I'm not QUITE sure how it works.
			- {{tweet https://twitter.com/diveshnaidoo/status/1735006300386336919}}
			- [Automotive example](https://www.linkedin.com/posts/divesh-naidoo-48809934_vfx-cgi-virtualproduction-activity-7186786217445711875-7ByY?)
			- https://www.instagram.com/reel/C6fQz81oDMS/
			-
		- ### My flossverse stuff from 2022
			- {{tweet https://twitter.com/flossverse/status/1629601804521537537}}
		- ### Skyglass
			- Straight up virtual production on iPhone
			- {{tweet https://twitter.com/skyglassapp/status/1712599252575412474}}
		- ### Adobe integrates everything to Premier
			- {{video https://www.youtube.com/watch?v=6de4akFiNYM&t=1s}}
		- ### Other Notable Research
			- ByteDance [MagicVideo-V2: Multi-Stage High-Aesthetic Video Generation (magicvideov2.github.io)](https://magicvideov2.github.io/)
	- ## What's next: 3D world creation
	  id:: 659a9247-f51f-4b45-9673-df22ec0476dd
		- Again, midjourney are working on a model. - 🟢 Best I can find is [Sudo AII](https://www.sudo.ai/)
		- <iframe src="https://www.sudo.ai" style="width: 100%; height: 600px"></iframe>
		- <iframe src="https://yueyang1996.github.io/holodeck/" style="width: 100%; height: 600px"></iframe>
		- https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/
		- [Mosaic-SDF for 3D Generative Models (connectedpapers.com)](https://www.connectedpapers.com/main/a7d6d07fdb631ce263ec2ddad72df269587fd3c9/Mosaic%20SDF-for-3D-Generative-Models/graph)
		- https://lioryariv.github.io/msdf/
		- ## Voice to CAD like Tony Stark is [obviously coming](https://www.linkedin.com/posts/bengeskin_i-feel-like-tony-stark-and-doctor-strange-activity-7152044309213519872-YUnm/?)
			- ![xrCAD.mp4](../assets/xrCAD_1705345928224_0.mp4){:height 44, :width 66}
			- # [[Metaverse and Telecollaboration]]
			- 🟢 I could go on all day about this, goods and bads. I literally wrote a book on it.
			- 🟢 A lot (for me) hinges on [[OpenUSD]] the universal scene language. It's been SO long since we have had something useful.
			- Nvidia have a text to 3D pipeline for [[Omniverse]]. Will be interesting to see what the use cases are. This is their new Cesium [geo tile integration](https://cesium.com/blog/2024/01/16/now-available-[[NVIDIA Omniverse]]-aeco-demo-pack/) giving global instant models.
			-
			- ![1705423306024.mp4](../assets/1705423306024_1705437842029_0.mp4)
	-
	-
	- {{tweet https://twitter.com/BlockadeLabs/status/1719818562917761094}}
- This is a [[presentation]] slide and the next slide is [[Open Generative AI tools]]


## 2025 Key Trends

- Native audio generation in consumer tools
- Physics and motion consistency improvements
- Cinematic camera control
- Multi-scene narrative coherence
- Near photorealistic human motion

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from research
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
- **Sources**: [Lovart AI](https://www.lovart.ai/blog/video-generators-review), [Ulaz AI](https://ulazai.com/ai-video-models-guide-2025/), [Synthesia](https://www.synthesia.io/post/best-ai-video-generators)

### Relationships
- is-subclass-of:: [[Generative AI]], [[AI Video]]
- related-to:: [[Diffusion Models]], [[Transformer Architecture]], [[Image Generation]]
- includes:: [[Sora]], [[Runway]], [[Pika Labs]], [[Veo]]
- enables:: [[Content Creation]], [[Virtual Production]], [[Marketing]]
- competes-with:: [[Open Source Video Generation]]
