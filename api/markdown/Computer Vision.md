- ### OntologyBlock
  id:: computer-vision-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0356
	- preferred-term:: Computer Vision
	- source-domain:: artificial-intelligence
	- status:: draft
- definition:: Computer Vision is the field of artificial intelligence concerned with enabling machines to interpret, understand, and process visual information from the world, emulating human visual perception capabilities. Computer vision encompasses image classification, object detection, segmentation, tracking, 3D reconstruction, and visual reasoning using deep learning architectures, particularly convolutional neural networks, to extract meaningful information from digital images and video.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :ComputerVision))

;; Annotations
(AnnotationAssertion rdfs:label :ComputerVision "Computer Vision"@en)
(AnnotationAssertion rdfs:comment :ComputerVision "Computer Vision is the field of artificial intelligence concerned with enabling machines to interpret, understand, and process visual information from the world, emulating human visual perception capabilities. Computer vision encompasses image classification, object detection, segmentation, tracking, 3D reconstruction, and visual reasoning using deep learning architectures, particularly convolutional neural networks, to extract meaningful information from digital images and video."@en)

;; Semantic Relationships
(SubClassOf :ComputerVision
  (ObjectSomeValuesFrom :relatedTo :ObjectDetection))
(SubClassOf :ComputerVision
  (ObjectSomeValuesFrom :relatedTo :SemanticSegmentation))
(SubClassOf :ComputerVision
  (ObjectSomeValuesFrom :relatedTo :ConvolutionalNeuralNetwork))
(SubClassOf :ComputerVision
  (ObjectSomeValuesFrom :relatedTo :ImageClassification))

;; Data Properties
(AnnotationAssertion dcterms:identifier :ComputerVision "AI-0356"^^xsd:string)
(DataPropertyAssertion :isAITechnology :ComputerVision "true"^^xsd:boolean)
```

## Core Characteristics

- **Image Understanding**: Semantic interpretation of visual content
- **Object Recognition**: Detection and classification of objects
- **Spatial Analysis**: 3D structure and geometric reasoning
- **Temporal Processing**: Video analysis and motion understanding
- **Deep Learning-Based**: CNN, Vision Transformer, Multi-Modal Models

## Relationships

- **Superclass**: AI Application Domain
- **Subclasses**: Image Classification, Object Detection, Semantic Segmentation
- **Related**: Deep Learning, Convolutional Neural Network, Vision Transformer
- **Applications**: Medical Imaging AI, Autonomous Vehicles, Robotics

## Key Literature

1. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep learning." *Nature*, 521(7553), 436-444.

2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet classification with deep convolutional neural networks." *NeurIPS*, 1097-1105.

3. Dosovitskiy, A., et al. (2020). "An image is worth 16x16 words: Transformers for image recognition at scale." *ICLR*.

4. He, K., et al. (2016). "Deep residual learning for image recognition." *CVPR*, 770-778.

## See Also

- [[Image Classification]]
- [[Object Detection]]
- [[Semantic Segmentation]]
- [[Convolutional Neural Network]]

## Metadata

- **Domain**: Computer Vision, Deep Learning
- **Maturity**: Mature field with widespread deployment
	- maturity:: draft
	- owl:class:: ai:ComputerVision
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: computer-vision-relationships
		- is-required-by:: [[Human Capture & Recognition]], [[Spatial Computing]], [[Augmented Reality (AR)]]
		- is-dependency-of:: [[Motion Capture Rig]], [[Intelligent Virtual Entity]], [[Extended Reality (XR)]], [[Mixed Reality (MR)]], [[Deepfakes]], [[Spatial Computing Layer]], [[Emotional Analytics Engine]]
- ## About Computer Vision
	- Computer Vision is the field of artificial intelligence concerned with enabling machines to interpret, understand, and process visual information from the world, emulating human visual perception capabilities. Computer vision encompasses image classification, object detection, segmentation, tracking, 3D reconstruction, and visual reasoning using deep learning architectures, particularly convolutional neural networks, to extract meaningful information from digital images and video.

	- ## Enterprise AI Adoption and Spending
		- AI spending increased from $2.3 billion in 2023 to $13.8 billion in 2024, a sixfold increase.
		- 72% of decision-makers anticipate broader adoption of generative AI tools soon.
		- Over a third of organisations lack a clear vision for implementing generative AI.
		- Generative AI adoption reflects a continuous, iterative process rather than a one-time transition.
		- There is a notable shift towards in-house AI development, with 47% of solutions now being built internally, compared to 80% of enterprises relying on third-party software in 2023.
		- Retrieval-Augmented Generation (RAG) has become the dominant architecture for building AI systems, with adoption rising to 51% in 2024 from 31% the previous year.

	- ### 3. The Foundational Layers: Bitcoin and Nostr
		- To realize this vision, we propose a stack of open, battle-tested protocols that provide the necessary layers for trust, communication, and value.

	- ### Shaping the Future of Digital Society:
		- As the Metaverse continues to evolve and grow, it will play an increasingly important role in shaping the future of digital society. By embracing an open-source vision, overcoming challenges, and unlocking new opportunities, the Metaverse can become a powerful platform that transforms how people live, work, and interact in the digital world.

- # Blender
- Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, and virtual reality.

		- ### Create Project Directory
			- Make a new folder on your computer named `cashew_wallet`.

- # Believably wrong answers
	- **[Study Details](https://dl.acm.org/doi/pdf/10.1145/3613904.3642596)**  by Purdue University. Presented at the Computer-Human Interaction Conference in Hawaii. (CHI)
	- **517 programming questions** from Stack Overflow.
		- **52%** contained incorrect information.
		- **77%** were verbose.
		- **78%** showed inconsistency compared to human answers.
	- **User Perception**
	  id:: 66e9741c-907c-440c-867c-5a76228a8216
		- Participants preferred ChatGPT answers **35%** of the time despite inaccuracies.
		- Misleading AI responses were not detected by programmers **39%** of the time.
		- ChatGPT's answers were more formal, analytical, and positive in tone.
		- Politeness and comprehensiveness made ChatGPT answers appear more convincing.

	- ### Emergence in Other Domains**
		- **Game Playing:** Imagine training an AI to play a game. The AI only sees a sequence of moves (e.g., F4, F3, D2, F5), not a visual representation of the board. However, researchers have observed that these systems can learn to represent the board state internally, keeping track of where pieces are located and how the game is evolving. The AI learns to understand the game, even though it's never seen a visual representation of the board.
		- **Computer Vision:** Similar phenomena have been observed in computer vision models. Researchers have discovered neurons in these systems that respond strongly to specific concepts, like "window," "wheel," and "car." These neurons act as detectors, recognizing specific features within an image.
		- **Reverse Engineering:** Researchers have developed techniques to reverse engineer these systems, figuring out what concepts are being represented by specific neurons. This involves creating images that maximize the activation of a particular neuron, allowing researchers to understand what that neuron is "seeing". These images often reveal fascinating patterns and concepts, showing us the AI's internal understanding of the world.

	- #### Mixed reality as a metaverse
		- [Spatial anchors](https://docs.microsoft.com/en-us/windows/mixed-reality/design/spatial-anchors) allow digital objects to be overlaid persistently in the real world. With a global ‘shared truth’ of such objects a different kind of metaverse can arise. One such example is clearly the [[Apple]] [[Vision Pro]]

		- ##### Tech for techs sake yielding unexpected outcomes
			- The whole question of what Bitcoin addresses, whether it’s been properly thought about, what the end goals are, and what the risks are is significant. It’s a computer science and engineering solutions gone completely wild. It’s clearly got benefits and there’s clearly human appetite for this technology, but it’s probably running ahead of the knowledge base around it. This is most exemplified in:

	- #### The Apple in the Room
		- Following the announcement of The Apple Vision Pro we start to see theconvergence of spatial computing, mixed reality, locally appliedtransformer based AI, and business. They have perhaps removed “gorillaarm syndrome”[[boring2009scroll]] where hands in the sky interfaces arepotentially uncomfortable over long periods.[[hansberger2017dispelling]]Nathan Gitter and Amy DeDonato from the Apple Design team [introducespatial design for thedevice](https://developer.apple.com/videos/play/wwdc2023/10072/).

- # Interfacing
	- https://www.linkedin.com/posts/dennyskuhnert_applevisionpro-metaquest3-handtracking-activity-7165761977531711490-R-XD?
	- ![video.mp4](assets/video_1708453959982_0.mp4)
-

	- ## Summary
		- **Project Name**: [[KnoWhere]]
		- **Objective**: Enabling Hyper-Personalized Experiences in Physical Spaces via Attention Tracking
		- **Competition**: AI Solutions to improve productivity in key sectors
		- **Innovation Area**: Creative industries
		- **Approach**: Using AI and computer vision for non-intrusive tracking of attention in museums and immersive experiences
		- **Technology**: AI, computer vision, steerable barrier lenticular displays
		- The project aims to revolutionize visitor experiences in museums and immersive spaces. Leveraging AI and computer vision, KnoWhere offers seamless integration into existing environments, tracking user attention and emotion in real time. This innovation allows for the adaptation and personalization of experiences, enhancing visitor engagement and providing actionable insights for curators and designers.

	- ## Need or Challenge
		- **Motivation**: Enhancing visitor experiences with AI-enabled narrative engines
		- **Market Opportunity**: Overcoming limitations of current intrusive and limited solutions
		- **Initial Work**: Development studies underlining the viability of seamless AI and computer vision integration

	- ### Neural Networks and Deep Learning id:: 659a9232-2320-494a-b922-968029718ad5
		- **Concept**: Advanced algorithms inspired by the structure of the human brain.
		- **Explain**: Like building a brain in a computer to solve complex problems.

	- #### Future Potential and AI Empowerment
		- **Empowering Future Generations**: Focus on computer literacy and AI tools to enable problem-solving and innovation.
		- **15-Year Vision**: Potential for a more computer-literate generation, capable of addressing community-specific problems.
-

	- #### Shaping the Future of Digital Society
		- As the Metaverse continues to evolve and grow, it will play an
		  increasingly important role in shaping the future of digital society. By
		  embracing an open-source vision, overcoming challenges, and unlocking
		  new opportunities, the Metaverse can become a powerful platform that
		  transforms how people live, work, and interact in the digital world.

- # The bad
	- **Price**: $3,500 is very expensive, especially for a Gen 1 product.
	- **App Store Restrictions**: Not available outside the US without an American Apple ID.
	- **Heavy and Bulky**: Takes up significant space, uncomfortable for long sessions.
	- **Light Seal Design**: Weak magnets, often feels like it's going to break.
	- **Battery Dependency**: Requires the battery pack, no internal battery.
	- **Limited USB-C Port**: Only for charging, cannot connect to other devices.
	- **Motion Blur**: Using on a train or in motion causes blurriness and nausea.
	- **Field of View**: Feels like looking through binoculars, can feel tunnel-visioned.
	- **Heat and Discomfort**: Gets heavy and uncomfortable over time, especially for workouts.
	- **Sound Leakage**: Built-in speakers leak sound, potentially disturbing others.
	- **Limited Gaming**: Not many VR games compared to other VR platforms.
	- **No Window Management**: Inability to save window setups, basic interface.
	- **Share Experience**: Difficult to share experience with others easily.
	- **Productivity Issues**: Feels less productive compared to traditional setups.
	- **Public Use**: Looks awkward and attracts attention when used outside.
- {{twitter https://twitter.com/tkexpress11/status/1780566909957910682?}}
- [The Vision Pro is a big flop (disconnect.blog)](https://disconnect.blog/the-vision-pro-is-a-big-flop/)
- [Apple can readily afford this experiment, they are operating at such scale that failure of the Vision Pro is meaningless](https://www.engadget.com/it-doesnt-matter-how-many-vision-pro-headsets-apple-sells-ming-chi-kuo-production-numbers-143112470.html?guccounter=1)

	- ## Enterprise AI Adoption and Spending
		- AI spending increased from $2.3 billion in 2023 to $13.8 billion in 2024, a sixfold increase.
		- 72% of decision-makers anticipate broader adoption of generative AI tools soon.
		- Over a third of organisations lack a clear vision for implementing generative AI.
		- Generative AI adoption reflects a continuous, iterative process rather than a one-time transition.
		- There is a notable shift towards in-house AI development, with 47% of solutions now being built internally, compared to 80% of enterprises relying on third-party software in 2023.
		- Retrieval-Augmented Generation (RAG) has become the dominant architecture for building AI systems, with adoption rising to 51% in 2024 from 31% the previous year.

	- ### 3. The Foundational Layers: Bitcoin and Nostr
		- To realize this vision, we propose a stack of open, battle-tested protocols that provide the necessary layers for trust, communication, and value.

	- ### Shaping the Future of Digital Society:
		- As the Metaverse continues to evolve and grow, it will play an increasingly important role in shaping the future of digital society. By embracing an open-source vision, overcoming challenges, and unlocking new opportunities, the Metaverse can become a powerful platform that transforms how people live, work, and interact in the digital world.

- # Blender
- Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, and virtual reality.

		- ### Create Project Directory
			- Make a new folder on your computer named `cashew_wallet`.

- # Believably wrong answers
	- **[Study Details](https://dl.acm.org/doi/pdf/10.1145/3613904.3642596)**  by Purdue University. Presented at the Computer-Human Interaction Conference in Hawaii. (CHI)
	- **517 programming questions** from Stack Overflow.
		- **52%** contained incorrect information.
		- **77%** were verbose.
		- **78%** showed inconsistency compared to human answers.
	- **User Perception**
	  id:: 66e9741c-907c-440c-867c-5a76228a8216
		- Participants preferred ChatGPT answers **35%** of the time despite inaccuracies.
		- Misleading AI responses were not detected by programmers **39%** of the time.
		- ChatGPT's answers were more formal, analytical, and positive in tone.
		- Politeness and comprehensiveness made ChatGPT answers appear more convincing.

	- ### Emergence in Other Domains**
		- **Game Playing:** Imagine training an AI to play a game. The AI only sees a sequence of moves (e.g., F4, F3, D2, F5), not a visual representation of the board. However, researchers have observed that these systems can learn to represent the board state internally, keeping track of where pieces are located and how the game is evolving. The AI learns to understand the game, even though it's never seen a visual representation of the board.
		- **Computer Vision:** Similar phenomena have been observed in computer vision models. Researchers have discovered neurons in these systems that respond strongly to specific concepts, like "window," "wheel," and "car." These neurons act as detectors, recognizing specific features within an image.
		- **Reverse Engineering:** Researchers have developed techniques to reverse engineer these systems, figuring out what concepts are being represented by specific neurons. This involves creating images that maximize the activation of a particular neuron, allowing researchers to understand what that neuron is "seeing". These images often reveal fascinating patterns and concepts, showing us the AI's internal understanding of the world.

	- #### Mixed reality as a metaverse
		- [Spatial anchors](https://docs.microsoft.com/en-us/windows/mixed-reality/design/spatial-anchors) allow digital objects to be overlaid persistently in the real world. With a global ‘shared truth’ of such objects a different kind of metaverse can arise. One such example is clearly the [[Apple]] [[Vision Pro]]

		- ##### Tech for techs sake yielding unexpected outcomes
			- The whole question of what Bitcoin addresses, whether it’s been properly thought about, what the end goals are, and what the risks are is significant. It’s a computer science and engineering solutions gone completely wild. It’s clearly got benefits and there’s clearly human appetite for this technology, but it’s probably running ahead of the knowledge base around it. This is most exemplified in:

	- #### The Apple in the Room
		- Following the announcement of The Apple Vision Pro we start to see theconvergence of spatial computing, mixed reality, locally appliedtransformer based AI, and business. They have perhaps removed “gorillaarm syndrome”[[boring2009scroll]] where hands in the sky interfaces arepotentially uncomfortable over long periods.[[hansberger2017dispelling]]Nathan Gitter and Amy DeDonato from the Apple Design team [introducespatial design for thedevice](https://developer.apple.com/videos/play/wwdc2023/10072/).

- # Interfacing
	- https://www.linkedin.com/posts/dennyskuhnert_applevisionpro-metaquest3-handtracking-activity-7165761977531711490-R-XD?
	- ![video.mp4](assets/video_1708453959982_0.mp4)
-

	- ## Summary
		- **Project Name**: [[KnoWhere]]
		- **Objective**: Enabling Hyper-Personalized Experiences in Physical Spaces via Attention Tracking
		- **Competition**: AI Solutions to improve productivity in key sectors
		- **Innovation Area**: Creative industries
		- **Approach**: Using AI and computer vision for non-intrusive tracking of attention in museums and immersive experiences
		- **Technology**: AI, computer vision, steerable barrier lenticular displays
		- The project aims to revolutionize visitor experiences in museums and immersive spaces. Leveraging AI and computer vision, KnoWhere offers seamless integration into existing environments, tracking user attention and emotion in real time. This innovation allows for the adaptation and personalization of experiences, enhancing visitor engagement and providing actionable insights for curators and designers.

	- ## Need or Challenge
		- **Motivation**: Enhancing visitor experiences with AI-enabled narrative engines
		- **Market Opportunity**: Overcoming limitations of current intrusive and limited solutions
		- **Initial Work**: Development studies underlining the viability of seamless AI and computer vision integration

	- ### Neural Networks and Deep Learning id:: 659a9232-2320-494a-b922-968029718ad5
		- **Concept**: Advanced algorithms inspired by the structure of the human brain.
		- **Explain**: Like building a brain in a computer to solve complex problems.

	- #### Future Potential and AI Empowerment
		- **Empowering Future Generations**: Focus on computer literacy and AI tools to enable problem-solving and innovation.
		- **15-Year Vision**: Potential for a more computer-literate generation, capable of addressing community-specific problems.
-

	- #### Shaping the Future of Digital Society
		- As the Metaverse continues to evolve and grow, it will play an
		  increasingly important role in shaping the future of digital society. By
		  embracing an open-source vision, overcoming challenges, and unlocking
		  new opportunities, the Metaverse can become a powerful platform that
		  transforms how people live, work, and interact in the digital world.

- # The bad
	- **Price**: $3,500 is very expensive, especially for a Gen 1 product.
	- **App Store Restrictions**: Not available outside the US without an American Apple ID.
	- **Heavy and Bulky**: Takes up significant space, uncomfortable for long sessions.
	- **Light Seal Design**: Weak magnets, often feels like it's going to break.
	- **Battery Dependency**: Requires the battery pack, no internal battery.
	- **Limited USB-C Port**: Only for charging, cannot connect to other devices.
	- **Motion Blur**: Using on a train or in motion causes blurriness and nausea.
	- **Field of View**: Feels like looking through binoculars, can feel tunnel-visioned.
	- **Heat and Discomfort**: Gets heavy and uncomfortable over time, especially for workouts.
	- **Sound Leakage**: Built-in speakers leak sound, potentially disturbing others.
	- **Limited Gaming**: Not many VR games compared to other VR platforms.
	- **No Window Management**: Inability to save window setups, basic interface.
	- **Share Experience**: Difficult to share experience with others easily.
	- **Productivity Issues**: Feels less productive compared to traditional setups.
	- **Public Use**: Looks awkward and attracts attention when used outside.
- {{twitter https://twitter.com/tkexpress11/status/1780566909957910682?}}
- [The Vision Pro is a big flop (disconnect.blog)](https://disconnect.blog/the-vision-pro-is-a-big-flop/)
- [Apple can readily afford this experiment, they are operating at such scale that failure of the Vision Pro is meaningless](https://www.engadget.com/it-doesnt-matter-how-many-vision-pro-headsets-apple-sells-ming-chi-kuo-production-numbers-143112470.html?guccounter=1)

- # Blender
- Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, and virtual reality.
	- **Sculpting:** Digital sculpting tools provide the power and flexibility required in several stages of the digital production pipeline.
	- **Animation & Rigging:** A production-ready camera and object tracking solution.

- # Believably wrong answers
	- **[Study Details](https://dl.acm.org/doi/pdf/10.1145/3613904.3642596)**  by Purdue University. Presented at the Computer-Human Interaction Conference in Hawaii. (CHI)
	- **517 programming questions** from Stack Overflow.

	- #### Mixed reality as a metaverse
		- [Spatial anchors](https://docs.microsoft.com/en-us/windows/mixed-reality/design/spatial-anchors) allow digital objects to be overlaid persistently in the real world. With a global ‘shared truth’ of such objects a different kind of metaverse can arise. One such example is clearly the [[Apple]] [[Vision Pro]]
		- The closest technology at this time seems to be [Lumus’ waveguideprojectors](https://lumusvision.com/) which are light, bright and highresolution. Peggy Johnson, CEO of Magic Leap, one of the market leaderssaid: it“If I had to guess, I think, maybe, five or so years out, forthe type of fully immersive augmented reality that we do.”
		- In a [GQprofile](https://www.gq.com/story/tim-cook-global-creativity-awards-cover-2023?mbid=social_twitter)Cook, the Apple CEO talked at length about the challenges andopportunities of AR headsets. He has been emphasizing the importance ofaugmented reality over VR for almost a decade, believing that AR canenhance communication and connection by overlaying digital elements onthe physical world. Cook’s vision aligns with Apple’s rumoured mixedreality headset, which is expected to cost around $3,000 and focus on‘copresence’, which we have discussed at length in this chapter. Apple’sapproach differs from Meta’s metaverse, as Apple aims to integratedigital aspects into the real world rather than create purely digitalspaces. This is an interesting area for our applications of bringingsmall teams together, but the pricing at this time is significantly atodds with our chosen market. Cook, like this book, has highlighted AR’spotential in education and its ability to bring people together in thereal world.

	- #### The Apple in the Room
		- Following the announcement of The Apple Vision Pro we start to see theconvergence of spatial computing, mixed reality, locally appliedtransformer based AI, and business. They have perhaps removed “gorillaarm syndrome”[[boring2009scroll]] where hands in the sky interfaces arepotentially uncomfortable over long periods.[[hansberger2017dispelling]]Nathan Gitter and Amy DeDonato from the Apple Design team [introducespatial design for thedevice](https://developer.apple.com/videos/play/wwdc2023/10072/).

- # Interfacing
	- https://www.linkedin.com/posts/dennyskuhnert_applevisionpro-metaquest3-handtracking-activity-7165761977531711490-R-XD?
	- ![video.mp4](assets/video_1708453959982_0.mp4)
-

			- ### Developer-Oriented Tools
		- **For Roleplay:** SillyTavern excels in flexibility with multiple backends.
		- **For Multimodal Needs:** Combine Open WebUI with specific vision or TTS backends.
		- **For Developers:** Use Llama.cpp for rapid updates or Koboldcpp for lightweight integration.
		  
		  ---

	- ### Neural Networks and Deep Learning id:: 659a9232-2320-494a-b922-968029718ad5
		- **Concept**: Advanced algorithms inspired by the structure of the human brain.
		- **Explain**: Like building a brain in a computer to solve complex problems.
		- {{video https://www.youtube.com/watch?v=aircAruvnKk&}}

	- #### Shaping the Future of Digital Society
		- As the Metaverse continues to evolve and grow, it will play an
		  increasingly important role in shaping the future of digital society. By
		  embracing an open-source vision, overcoming challenges, and unlocking
		  new opportunities, the Metaverse can become a powerful platform that
		  transforms how people live, work, and interact in the digital world.

	- #### Shaping the Future of Digital Society
		- As the Metaverse continues to evolve and grow, it will play an
		  increasingly important role in shaping the future of digital society. By
		  embracing an open-source vision, overcoming challenges, and unlocking
		  new opportunities, the Metaverse can become a powerful platform that
		  transforms how people live, work, and interact in the digital world.

	- #### Shaping the Future of Digital Society
		- As the Metaverse continues to evolve and grow, it will play an
		  increasingly important role in shaping the future of digital society. By
		  embracing an open-source vision, overcoming challenges, and unlocking
		  new opportunities, the Metaverse can become a powerful platform that
		  transforms how people live, work, and interact in the digital world.

	- #### Shaping the Future of Digital Society
		- As the Metaverse continues to evolve and grow, it will play an
		  increasingly important role in shaping the future of digital society. By
		  embracing an open-source vision, overcoming challenges, and unlocking
		  new opportunities, the Metaverse can become a powerful platform that
		  transforms how people live, work, and interact in the digital world.

- ## Apple Vision Pro
	- [This thing is mind-blowing 🤯 This demo is better than Apple's actual ads for the Vision Pro. Apple launched the Vision Pro a few days ago,… | Instagram](https://www.instagram.com/reel/C2-G8WgsLSj/?igsh=am93cXF4OWppa29l)
	-
	- This review (for me) asks the right questions, finally, of "spatial".

- ## See Also
	- [[Stable Diffusion]] is a text-to-image [[deep learning]] model that uses diffusion processes to generate high-quality images from textual descriptions, serving as the foundation for many [[computer vision]] applications

- ## Apple Vision Pro
	- [This thing is mind-blowing 🤯 This demo is better than Apple's actual ads for the Vision Pro. Apple launched the Vision Pro a few days ago,… | Instagram](https://www.instagram.com/reel/C2-G8WgsLSj/?igsh=am93cXF4OWppa29l)
	-
	- This review (for me) asks the right questions, finally, of "spatial".
		- https://www.theverge.com/24054862/apple-vision-pro-review-vr-ar-headset-features-price
	- Is using the Vision Pro so good that I’m willing to mess up my hair every time I put it on?

- ## See Also
	- [[Stable Diffusion]] is a text-to-image [[deep learning]] model that uses diffusion processes to generate high-quality images from textual descriptions, serving as the foundation for many [[computer vision]] applications

- ##### Tracking Technologies
	- For personalization, tracking viewers’ eyes, face, gestures, etc., is necessary. This can be done with cameras and computer vision algorithms, employing techniques like mesh abstraction for body tracking, facial landmark recognition, gaze estimation, micro expression recognition, and gross gesture detection.

- ## Artistic Vision
	- The Golden Key explores the concept of myth-making and the role of AI in shaping cultural narratives. It invites participants to consider the implications of living in a world where artificially generated stories are ubiquitous. The installation aims to encourage critical thinking about the impact of AI on creativity, diversity, and representation in media.

- ##### Tracking Technologies
	- For personalization, tracking viewers’ eyes, face, gestures, etc., is necessary. This can be done with cameras and computer vision algorithms, employing techniques like mesh abstraction for body tracking, facial landmark recognition, gaze estimation, micro expression recognition, and gross gesture detection.

- ## Artistic Vision
	- The Golden Key explores the concept of myth-making and the role of AI in shaping cultural narratives. It invites participants to consider the implications of living in a world where artificially generated stories are ubiquitous. The installation aims to encourage critical thinking about the impact of AI on creativity, diversity, and representation in media.

## Core Characteristics

- **Image Understanding**: Semantic interpretation of visual content
- **Object Recognition**: Detection and classification of objects
- **Spatial Analysis**: 3D structure and geometric reasoning
- **Temporal Processing**: Video analysis and motion understanding
- **Deep Learning-Based**: CNN, Vision Transformer, Multi-Modal Models

## Relationships

- **Superclass**: AI Application Domain
- **Subclasses**: Image Classification, Object Detection, Semantic Segmentation
- **Related**: Deep Learning, Convolutional Neural Network, Vision Transformer
- **Applications**: Medical Imaging AI, Autonomous Vehicles, Robotics

## Key Literature

1. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep learning." *Nature*, 521(7553), 436-444.

2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet classification with deep convolutional neural networks." *NeurIPS*, 1097-1105.

3. Dosovitskiy, A., et al. (2020). "An image is worth 16x16 words: Transformers for image recognition at scale." *ICLR*.

4. He, K., et al. (2016). "Deep residual learning for image recognition." *CVPR*, 770-778.

## See Also

- [[Image Classification]]
- [[Object Detection]]
- [[Semantic Segmentation]]
- [[Convolutional Neural Network]]

## Metadata

- **Domain**: Computer Vision, Deep Learning
- **Maturity**: Mature field with widespread deployment
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Computer Vision
		  
		  **Term ID**: AI-0356
		  **Category**: Domain Applications → Computer Vision
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Computer Vision is the field of artificial intelligence concerned with enabling machines to interpret, understand, and process visual information from the world, emulating human visual perception capabilities. Computer vision encompasses image classification, object detection, segmentation, tracking, 3D reconstruction, and visual reasoning using deep learning architectures, particularly convolutional neural networks, to extract meaningful information from digital images and video.
		  
		  ## Core Characteristics
		  
		  - **Image Understanding**: Semantic interpretation of visual content
		  - **Object Recognition**: Detection and classification of objects
		  - **Spatial Analysis**: 3D structure and geometric reasoning
		  - **Temporal Processing**: Video analysis and motion understanding
		  - **Deep Learning-Based**: CNN, Vision Transformer, Multi-Modal Models
		  
		  ## Relationships
		  
		  - **Superclass**: AI Application Domain
		  - **Subclasses**: Image Classification, Object Detection, Semantic Segmentation
		  - **Related**: Deep Learning, Convolutional Neural Network, Vision Transformer
		  - **Applications**: Medical Imaging AI, Autonomous Vehicles, Robotics
		  
		  ## Key Literature
		  
		  1. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep learning." *Nature*, 521(7553), 436-444.
		  
		  2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet classification with deep convolutional neural networks." *NeurIPS*, 1097-1105.
		  
		  3. Dosovitskiy, A., et al. (2020). "An image is worth 16x16 words: Transformers for image recognition at scale." *ICLR*.
		  
		  4. He, K., et al. (2016). "Deep residual learning for image recognition." *CVPR*, 770-778.
		  
		  ## See Also
		  
		  - [[Image Classification]]
		  - [[Object Detection]]
		  - [[Semantic Segmentation]]
		  - [[Convolutional Neural Network]]
		  
		  ## Metadata
		  
		  - **Domain**: Computer Vision, Deep Learning
		  - **Maturity**: Mature field with widespread deployment
		  
		  ```

    - uses-technique:: [[Image Classification]]

    - depends-on:: [[Convolutional Neural Network]]

- public-access:: true
	- definition:: Computer Vision is the field of artificial intelligence concerned with enabling machines to interpret, understand, and process visual information from the world, emulating human visual perception capabilities. Computer vision encompasses image classification, object detection, segmentation, tracking, 3D reconstruction, and visual reasoning using deep learning architectures, particularly convolutional neural networks, to extract meaningful information from digital images and video.



## Academic Context

- Computer Vision (CV) is a specialised subfield of artificial intelligence (AI) and computer science focused on enabling machines to interpret, analyse, and understand visual data from the environment, mimicking human visual perception.
  - It builds on foundational disciplines such as image processing, pattern recognition, and machine learning.
  - Key academic milestones include the development of the Neocognitron by Fukushima (1980), which introduced translation invariance and inspired modern convolutional neural networks (CNNs).
  - Contemporary CV research integrates deep learning architectures, particularly CNNs, to perform tasks like image classification, object detection, segmentation, tracking, 3D reconstruction, and visual reasoning.
  - The field is underpinned by mathematical models, statistical learning theory, and increasingly, multimodal AI combining vision with language and other sensory data.

## Current Landscape (2025)

- Computer vision is widely adopted across industries including healthcare, automotive, retail, security, and manufacturing.
  - Leading platforms and frameworks such as OpenCV, TensorFlow, and PyTorch facilitate CV development and deployment.
  - Real-time object detection, pose estimation, and facial recognition are among the most mature applications.
- UK and North England have active industry and academic participation:
  - Manchester and Leeds host research groups advancing CV algorithms and applications, often in collaboration with local tech companies.
  - Newcastle and Sheffield contribute through innovation in industrial automation and healthcare imaging.
- Technical capabilities:
  - State-of-the-art CV systems achieve high accuracy in controlled environments but still face challenges with domain adaptation, occlusion, and interpretability.
  - Edge AI is increasingly used for real-time processing on devices with limited connectivity.
- Standards and frameworks:
  - Ethical guidelines and data privacy regulations shape CV deployment, especially concerning facial recognition and surveillance.
  - Open standards for data formats and interoperability are evolving to support multi-vendor ecosystems.

## Research & Literature

- Key academic papers and sources:
  - Fukushima, K. (1980). Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position. *Biological Cybernetics*, 36(4), 193–202. https://doi.org/10.1007/BF00344251
  - Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Communications of the ACM*, 60(6), 84–90. https://doi.org/10.1145/3065386
  - He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)*, 770–778. https://doi.org/10.1109/CVPR.2016.90
- Ongoing research directions:
  - Explainability and fairness in CV models to mitigate bias and improve transparency.
  - Integration of synthetic data and simulation for scalable training.
  - Multimodal learning combining vision with natural language processing.
  - Advances in 3D vision and scene understanding for robotics and autonomous systems.

## UK Context

- The UK is a significant contributor to CV research and innovation, with government and private sector investment supporting AI hubs.
- North England innovation hubs:
  - Manchester’s AI and CV research centres collaborate with industry on healthcare imaging, autonomous systems, and smart city applications.
  - Leeds is known for work in industrial CV applications and data analytics.
  - Newcastle and Sheffield focus on manufacturing automation and medical imaging technologies.
- Regional case studies:
  - Collaborative projects between universities and local tech firms have developed CV solutions for automated quality control in manufacturing and real-time traffic monitoring in urban environments.
  - Ethical AI initiatives in the UK emphasise responsible CV deployment, particularly in public surveillance and biometric systems.

## Future Directions

- Emerging trends:
  - Increased use of edge computing for privacy-preserving, low-latency CV applications.
  - Growth of synthetic and augmented data to overcome data scarcity and bias.
  - Expansion of CV into multimodal AI systems integrating vision, audio, and language.
- Anticipated challenges:
  - Balancing performance with ethical considerations such as privacy, bias, and accountability.
  - Enhancing robustness of CV systems in unconstrained, real-world environments.
  - Regulatory compliance and public acceptance, especially in surveillance and biometric uses.
- Research priorities:
  - Developing explainable and trustworthy CV models.
  - Improving domain adaptation and generalisation.
  - Leveraging UK-specific datasets and contexts to ensure relevance and fairness.

## References

1. Fukushima, K. (1980). Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position. *Biological Cybernetics*, 36(4), 193–202. https://doi.org/10.1007/BF00344251

2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Communications of the ACM*, 60(6), 84–90. https://doi.org/10.1145/3065386

3. He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)*, 770–778. https://doi.org/10.1109/CVPR.2016.90


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
