- ### OntologyBlock
  id:: text-summarisation-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0370
	- preferred-term:: Text Summarisation
	- source-domain:: mv
	- status:: draft
- definition:: Text Summarisation is the NLP task of producing concise, coherent summaries that capture the essential information from longer documents or document collections. Summarisation systems employ extractive methods (selecting key sentences) or abstractive methods (generating new summary text) using transformer models to enable applications in news aggregation, document analysis, and information retrieval.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :TextSummarisation))

;; Annotations
(AnnotationAssertion rdfs:label :TextSummarisation "Text Summarisation"@en)
(AnnotationAssertion rdfs:comment :TextSummarisation "Text Summarisation is the NLP task of producing concise, coherent summaries that capture the essential information from longer documents or document collections. Summarisation systems employ extractive methods (selecting key sentences) or abstractive methods (generating new summary text) using transformer models to enable applications in news aggregation, document analysis, and information retrieval."@en)

;; Taxonomic Relationships
(SubClassOf :TextSummarisation :NaturalLanguageProcessing)

;; Semantic Relationships
(SubClassOf :TextSummarisation
  (ObjectSomeValuesFrom :relatedTo :TextGeneration))
(SubClassOf :TextSummarisation
  (ObjectSomeValuesFrom :relatedTo :Bart))
(SubClassOf :TextSummarisation
  (ObjectSomeValuesFrom :relatedTo :NaturalLanguageProcessing))

;; Data Properties
(AnnotationAssertion dcterms:identifier :TextSummarisation "AI-0370"^^xsd:string)
(DataPropertyAssertion :isAITechnology :TextSummarisation "true"^^xsd:boolean)
```

## Core Characteristics

- **Extractive or Abstractive**: Sentence selection vs. text generation approaches
- **Single or Multi-Document**: Summarisation of individual or multiple documents
- **Query-Focused**: Summaries tailored to specific information needs
- **Controllable Length**: Adjustable summary compression ratios
- **Factual Consistency**: Maintaining accuracy and avoiding hallucination

## Relationships

- **Subclass**: Natural Language Processing
- **Related**: Text Generation, Information Extraction, Language Modeling
- **Models**: BART, PEGASUS, T5, LED, BigBird
- **Applications**: News Aggregation, Document Analysis, Research Paper Summarisation

## Key Literature

1. Lewis, M., et al. (2020). "BART: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension." *ACL*, 7871-7880.

2. Zhang, J., et al. (2020). "PEGASUS: Pre-training with extracted gap-sentences for abstractive summarization." *ICML*, 11328-11339.

3. Nallapati, R., et al. (2016). "Abstractive text summarization using sequence-to-sequence RNNs and beyond." *CoNLL*, 280-290.

## See Also

- [[Natural Language Processing]]
- [[Text Generation]]
- [[BART]]

## Metadata

- **Domain**: NLP, Text Analysis
- **Maturity**: Production use
	- maturity:: draft
	- owl:class:: mv:TextSummarisation
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: text-summarisation-relationships
- ## About Text Summarisation
	- Text Summarisation is the NLP task of producing concise, coherent summaries that capture the essential information from longer documents or document collections. Summarisation systems employ extractive methods (selecting key sentences) or abstractive methods (generating new summary text) using transformer models to enable applications in news aggregation, document analysis, and information retrieval.

		- ### Implementation Approaches
			- RAG can utilise various search techniques:
				- Full-text search for exact matches
				- Vector search for semantic similarity
				- Metadata filtering for structured queries
				- Graph database traversal for relationship-based retrieval
				- Hybrid approaches combining multiple methods

		- ## Technical notes
			- For the A6000 CRM docker
				- ```text
				  machinelearn@MLAI:/mnt/mldata/GenerativeAI$ cd ../githubs/ComfyUI-Docker/
				  machinelearn@MLAI:/mnt/mldata/githubs/ComfyUI-Docker$ ls
				  docker-compose.yml  docs     megapak      README.zh.adoc  scripts  storage_known_good
				  Dockerfile          LICENSE  README.adoc  rocm            storage
				  machinelearn@MLAI:/mnt/mldata/githubs/ComfyUI-Docker$  docker run -d -it --rm --name comfyui-mega --gpus '"device=1"' -p 8182:8182 -v "$(pwd)"/storage:/root -e CLI_ARGS="--port 8182" yanwk/comfyui-boot:megapak
				  ```
			- to contact Ollama from within docker
				- ```text
				  curl http://172.17.0.1:11434/api/generate -d '{
				    "model": "llama3-8B",
				    "prompt": "Why is the sky blue?"
				  }'
				  
				  ```

	- ### Lessons from MMORGS
		- The concept of ‘instrumental play’ was introduced by literary theoristWolfgang Iser in his 1993 essay “The Fictive and theImaginary.”[[iser1993fictive]] Iser divided play into two categories,free play and instrumental play, based on their relationship to goals.In his view, play becomes instrumental the moment it has a goal or a setof rules. The application of this concept to massively multiplayeronline games was later explored by sociologist T.L Taylor in her 2006book ‘Play Between Worlds.’[[taylor2009play]] According to Taylor,instrumental play is a goal-oriented approach that values efficiency,expertise, and strategy optimization. The point of playing is not toreach the end but to find the best way to get there.
		- The distinction between instrumental play and fun is often seen as afalse dichotomy. The two are not mutually exclusive but exist intension. Optimization can result in player behaviours that are simply nofun, but achieving goals or improving skills can also bring enjoyment.René Glas in his book ‘Battlefields ofNegotiation’[[glas2013battlefields]] describes the movement betweeninstrumental and free play in World of Warcraft, which has thedistinction of evolving across entirely different iterations of theInternet.
		- These virtual worlds of massively multiplayer online games are"interactively stabilized" systems, the result of the interactionbetween game designers and players. The social codes of practiceestablished by players can shape what is considered legitimate play.Success in these games is dynamically defined by consensus, as seen inMark Chen’s study of World of Warcraft ‘Leet Noobs.’[[chen2011leet]]
		- Tom Boellstorff conducted a study of user experiences in SecondLife,[[serapis2008coming]] which was criticized for not involving reallife or other websites or software in the analysis. The virtual worldsof massively multiplayer online games are not enclosed and players canengage with these games through various platforms, such as Discord,Twitch, Twitter, and Google Docs, without physically inhabiting thevirtual world. This concept of "paratext" was first introduced by Frenchliterary theorist Gerard Genette. He saw a book as containing the textof the book and additional components, such as the cover, title,foreword, etc., that are necessary to complete the book but not part ofthe primary text. These additional texts influence the meaning of theprimary text. The definition was later expanded by Mia Consalvo, whodefined paratext as any text that “may alter the meanings of a text,further enhance meanings, or provide challenges to sedimented meanings.”Examples of paratext include reviews, pre-release trailers, etc.Kristine Ask observed the impact of paratext on theorycrafting expertisein World of Warcraft, which was later confirmed by the rise of twitchstreams. Mark Chen’s dissertation Leet Noobs focuses on how AddOns inWorld of Warcraft can become essential agents in raid groups by assumingcognitive load. The concept is based on the idea of object-orientedontology and actor-network theory.[[cole2013call]] These theories arecomplex and contested, but the boundaries between real people andvirtual AI actors in virtual social spaces are certainly blurred.
		- Virtual spaces are not separate from the real world, but are instead anextension of it. The key factor in making a virtual world compelling isnot its realism, but the fact that people give meaning to their lives byentangling themselves in projects with others, even when those othersare not other people. Worlds become real when people care about them,not when they look like the real world.

		- ### AI Research Assistant
		- Elicit is an AI research assistant that aims to make high quality reasoning abundant
		- Currently focused on text-based workflows, especially literature summarization and helping users understand what is known on a topic based on existing research
		- Long-term goal is to go further into reasoning and decision making

		- ### Roles under most threat
			- UK dept of education [10-30% can be automated away.](https://assets.publishing.service.gov.uk/media/656856b8cc1ec500138eef49/Gov.UK_Impact_of_AI_on_UK_Jobs_and_Training.pdf#:~:text=It%20has%20been%20estimated%20that%2010-30%25%20of%20jobs,the%20potential%20benefits%20advances%20in%20AI%20will%20bring.)  [[Layoff tracker and threatened roles]]
			- Knowledge worker, admin, law, etc. This will lower wages, NOT give more time back.
			- [Generative AI at Work Stanford research in the Philippines](https://www.nber.org/papers/w31161) found AI gave a 14% productivity boost overall, but importantly 34% improvement for novice workers, and actual hindrance for experts.
				- This suggests a flattening of skill levels, with likely impact on wages.
				- [Wanted: ‘New Collar’ Workers The New York Times](https://www.nytimes.com/interactive/2023/12/29/business/what-are-new-collar-jobs.html)

		- ### Implementation Approaches
			- RAG can utilise various search techniques:
				- Full-text search for exact matches
				- Vector search for semantic similarity
				- Metadata filtering for structured queries
				- Graph database traversal for relationship-based retrieval
				- Hybrid approaches combining multiple methods

		- ## Technical notes
			- For the A6000 CRM docker
				- ```text
				  machinelearn@MLAI:/mnt/mldata/GenerativeAI$ cd ../githubs/ComfyUI-Docker/
				  machinelearn@MLAI:/mnt/mldata/githubs/ComfyUI-Docker$ ls
				  docker-compose.yml  docs     megapak      README.zh.adoc  scripts  storage_known_good
				  Dockerfile          LICENSE  README.adoc  rocm            storage
				  machinelearn@MLAI:/mnt/mldata/githubs/ComfyUI-Docker$  docker run -d -it --rm --name comfyui-mega --gpus '"device=1"' -p 8182:8182 -v "$(pwd)"/storage:/root -e CLI_ARGS="--port 8182" yanwk/comfyui-boot:megapak
				  ```
			- to contact Ollama from within docker
				- ```text
				  curl http://172.17.0.1:11434/api/generate -d '{
				    "model": "llama3-8B",
				    "prompt": "Why is the sky blue?"
				  }'
				  
				  ```

	- ### Lessons from MMORGS
		- The concept of ‘instrumental play’ was introduced by literary theoristWolfgang Iser in his 1993 essay “The Fictive and theImaginary.”[[iser1993fictive]] Iser divided play into two categories,free play and instrumental play, based on their relationship to goals.In his view, play becomes instrumental the moment it has a goal or a setof rules. The application of this concept to massively multiplayeronline games was later explored by sociologist T.L Taylor in her 2006book ‘Play Between Worlds.’[[taylor2009play]] According to Taylor,instrumental play is a goal-oriented approach that values efficiency,expertise, and strategy optimization. The point of playing is not toreach the end but to find the best way to get there.
		- The distinction between instrumental play and fun is often seen as afalse dichotomy. The two are not mutually exclusive but exist intension. Optimization can result in player behaviours that are simply nofun, but achieving goals or improving skills can also bring enjoyment.René Glas in his book ‘Battlefields ofNegotiation’[[glas2013battlefields]] describes the movement betweeninstrumental and free play in World of Warcraft, which has thedistinction of evolving across entirely different iterations of theInternet.
		- These virtual worlds of massively multiplayer online games are"interactively stabilized" systems, the result of the interactionbetween game designers and players. The social codes of practiceestablished by players can shape what is considered legitimate play.Success in these games is dynamically defined by consensus, as seen inMark Chen’s study of World of Warcraft ‘Leet Noobs.’[[chen2011leet]]
		- Tom Boellstorff conducted a study of user experiences in SecondLife,[[serapis2008coming]] which was criticized for not involving reallife or other websites or software in the analysis. The virtual worldsof massively multiplayer online games are not enclosed and players canengage with these games through various platforms, such as Discord,Twitch, Twitter, and Google Docs, without physically inhabiting thevirtual world. This concept of "paratext" was first introduced by Frenchliterary theorist Gerard Genette. He saw a book as containing the textof the book and additional components, such as the cover, title,foreword, etc., that are necessary to complete the book but not part ofthe primary text. These additional texts influence the meaning of theprimary text. The definition was later expanded by Mia Consalvo, whodefined paratext as any text that “may alter the meanings of a text,further enhance meanings, or provide challenges to sedimented meanings.”Examples of paratext include reviews, pre-release trailers, etc.Kristine Ask observed the impact of paratext on theorycrafting expertisein World of Warcraft, which was later confirmed by the rise of twitchstreams. Mark Chen’s dissertation Leet Noobs focuses on how AddOns inWorld of Warcraft can become essential agents in raid groups by assumingcognitive load. The concept is based on the idea of object-orientedontology and actor-network theory.[[cole2013call]] These theories arecomplex and contested, but the boundaries between real people andvirtual AI actors in virtual social spaces are certainly blurred.
		- Virtual spaces are not separate from the real world, but are instead anextension of it. The key factor in making a virtual world compelling isnot its realism, but the fact that people give meaning to their lives byentangling themselves in projects with others, even when those othersare not other people. Worlds become real when people care about them,not when they look like the real world.

		- ### AI Research Assistant
		- Elicit is an AI research assistant that aims to make high quality reasoning abundant
		- Currently focused on text-based workflows, especially literature summarization and helping users understand what is known on a topic based on existing research
		- Long-term goal is to go further into reasoning and decision making

		- ### Roles under most threat
			- UK dept of education [10-30% can be automated away.](https://assets.publishing.service.gov.uk/media/656856b8cc1ec500138eef49/Gov.UK_Impact_of_AI_on_UK_Jobs_and_Training.pdf#:~:text=It%20has%20been%20estimated%20that%2010-30%25%20of%20jobs,the%20potential%20benefits%20advances%20in%20AI%20will%20bring.)  [[Layoff tracker and threatened roles]]
			- Knowledge worker, admin, law, etc. This will lower wages, NOT give more time back.
			- [Generative AI at Work Stanford research in the Philippines](https://www.nber.org/papers/w31161) found AI gave a 14% productivity boost overall, but importantly 34% improvement for novice workers, and actual hindrance for experts.
				- This suggests a flattening of skill levels, with likely impact on wages.
				- [Wanted: ‘New Collar’ Workers The New York Times](https://www.nytimes.com/interactive/2023/12/29/business/what-are-new-collar-jobs.html)

		- ### AI Research Assistant
		- Elicit is an AI research assistant that aims to make high quality reasoning abundant
		- Currently focused on text-based workflows, especially literature summarization and helping users understand what is known on a topic based on existing research
		- Long-term goal is to go further into reasoning and decision making

		- ## **LM Studio**
				- Integrates advanced tools like text-to-speech (TTS).
				- Highly optimised for macOS environments.
			- **Limitations:** UI is functional but lacks visual polish.
			- **Link:** [Koboldcpp GitHub](https://github.com/koboldcpp)

		- ## **LM Studio**
				- Integrates advanced tools like text-to-speech (TTS).
				- Highly optimised for macOS environments.
			- **Limitations:** UI is functional but lacks visual polish.
			- **Link:** [Koboldcpp GitHub](https://github.com/koboldcpp)

	- ## AI in [[Education and AI]]
		- I think the Rabbit is something I would buy for kids?! (lol, that didn't work out)
				- Multimodal interfaces, incorporating voice, text, and possibly visual or gestural inputs, would make the process more accessible and intuitive.
				- These interfaces would cater to a diverse range of users and preferences, allowing instructions to be given in various formats.
- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/5nr8blvyQwadadxV0gXaeu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> https://open.spotify.com/episode/3KrLw4xNAiEeylzm7gg0qr?si=e59f027065884c33

- ## Key Points
	- **VVIA Challenge Objective:** Utilize AI to interpret texts from ancient scrolls damaged in the eruption that destroyed Pompeii, without unrolling them.
	- **Winning Achievement:** The team identified 15 columns of text, suggesting a work by Philodemus on the pleasures of music and food. This success demonstrates AI's potential to reveal historical texts thought to be irretrievably lost.
	- **Future Implications:** Beyond the immediate findings, the challenge underscores the role of AI in historical preservation and research. It sets the stage for further discoveries within the remaining scrolls and potentially revolutionizes our understanding of ancient civilizations.

- ## Summary
	- The VVIA Challenge, with a $1 million prize, focused on utilizing AI to decipher ancient papyrus scrolls preserved yet damaged by the eruption that destroyed Pompeii. These scrolls, potentially containing lost historical, philosophical, and literary texts, were discovered in a villa believed to belong to Julius Caesar's father-in-law in Herculaneum. The challenge was to develop AI techniques to read the text without physically unrolling the scrolls. The winning team successfully read extensive portions of the scrolls, revealing works possibly by the Epicurean philosopher Philodemus. This endeavor not only showcases the power of AI in unlocking ancient secrets but also highlights the blend of technology, history, and human curiosity.

- ## Key Points
	- **VVIA Challenge Objective:** Utilize AI to interpret texts from ancient scrolls damaged in the eruption that destroyed Pompeii, without unrolling them.
	- **Historical Significance:** Scrolls believed to contain lost works from ancient Greece and Rome, offering insights into classical literature, philosophy, and possibly early Christian texts.
	- **Technical Challenges and Solutions:** The challenge involved using advanced medical imaging and AI to decipher the charred scrolls. Innovations included recognizing 'crackle' patterns as text and employing AI models to identify ink traces undetectable to the human eye.
	- **Winning Achievement:** The team identified 15 columns of text, suggesting a work by Philodemus on the pleasures of music and food. This success demonstrates AI's potential to reveal historical texts thought to be irretrievably lost.
	- **Future Implications:** Beyond the immediate findings, the challenge underscores the role of AI in historical preservation and research. It sets the stage for further discoveries within the remaining scrolls and potentially revolutionizes our understanding of ancient civilizations.
	- **Stage Two Goals:** Focus on automating the segmentation process to lower costs and enable the scanning of all 800 known scrolls, aiming for broader excavation and exploration of the villa's remains.

- ## Summary
	- The VVIA Challenge, with a $1 million prize, focused on utilizing AI to decipher ancient papyrus scrolls preserved yet damaged by the eruption that destroyed Pompeii. These scrolls, potentially containing lost historical, philosophical, and literary texts, were discovered in a villa believed to belong to Julius Caesar's father-in-law in Herculaneum. The challenge was to develop AI techniques to read the text without physically unrolling the scrolls. The winning team successfully read extensive portions of the scrolls, revealing works possibly by the Epicurean philosopher Philodemus. This endeavor not only showcases the power of AI in unlocking ancient secrets but also highlights the blend of technology, history, and human curiosity.

- ## Resources
	- [(2047) Discord | #💡-announcement | XLabs AI](https://discord.com/channels/1271080914692341801/1271086905743638591)
	- whatever this mad thing is [[FLUX] Diagram of UNET / DiT and exotic merging methods (v8.01) | Civitai](https://civitai.com/articles/3409/flux-diagram-of-unet-dit-and-exotic-merging-methods-v7)
	- [XLabs-AI/x-flux-comfyui (github.com)](https://github.com/XLabs-AI/x-flux-comfyui) [[Flux]] [[ComfyUI]]
	- https://www.reddit.com/r/StableDiffusion/comments/1er8q13/an_updated_flux_canny_controlnet_released_by/ [[Flux]] [[Stable Diffusion]] [[Controlnet and similar]]
	- https://huggingface.co/kudzueye/boreal-flux-dev-v2 [[Flux]] [[LoRA DoRA etc]]
	- https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[flux]] [[ComfyWorkFlows]]
	- [Text Guided Flux Inpainting - a Hugging Face Space by Gradio-Community](https://huggingface.co/spaces/Gradio-Community/Text-guided-Flux-Inpainting) [[Segmentation and Identification]]
	- [(17) Post | Feed | LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7230251219888316417/) [[KOHYA Dreambooth and similar]] [[Flux]]
	- https://huggingface.co/alimama-creative/FLUX.1-dev-Controlnet-Inpainting-Alpha [[Controlnet and similar]] [[Flux]]
	- https://github.com/cocktailpeanut/fluxgym [[Flux]]
	- https://civitai.com/models/731324 [[Flux]] Social Media Image Generator [[Death of the Internet]]
	- [docs/docs/getting-started/env-configuration.md at improve-flux-docs · JohnTheNerd/docs (github.com)](https://github.com/JohnTheNerd/docs/blob/improve-flux-docs/docs/getting-started/env-configuration.md) [[Flux]] [[ComfyUI]] [[Open Webui and Pipelines]]
	- https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[flux]]
	- [city96/ComfyUI-GGUF: GGUF Quantization support for native ComfyUI models (github.com)](https://github.com/city96/ComfyUI-GGUF) [[ComfyUI]] [[Model Optimisation and Performance]] [[Flux]]
		- [Excuse me? GGUF quants are possible on Flux now! : r/StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/1eslcg0/excuse_me_gguf_quants_are_possible_on_flux_now/)
	-
	- https://github.com/comfyanonymous/ComfyUI/commit/d0b7ab88ba0f1cb4ab16e0425f5229e60c934536 [[Flux]] [[Model Optimisation and Performance]]
	- https://medium.com/@furkangozukara/ultimate-flux-lora-training-tutorial-windows-and-cloud-deployment-abb72f21cbf8 [[Flux]] [[LoRA]]
	- https://github.com/ToTheBeginning/PuLID [[Face Swap]] [[Flux]] [[style transfer]]
		- https://huggingface.co/spaces/yanze/PuLID-FLUX
		- ![image.png](assets/image_1726490585592_0.png)
		-
- https://www.reddit.com/r/StableDiffusion/comments/1fkeei6/a_simple_flux_pipeline_workflow/
- [dagthomas/comfyui_dagthomas: ComfyUI SDXL Auto Prompter (github.com)](https://github.com/dagthomas/comfyui_dagthomas) [[flux]] [[ComfyUI]] [[Prompt Engineering]]
- https://www.reddit.com/r/StableDiffusion/comments/1fkdp6j/flux_stability_video_how_to_automate_short_videos/ [[AI Video]]
- https://huggingface.co/kudzueye/boreal-flux-dev-v2
- https://openart.ai/workflows/tenofas/flux-detailer-with-latent-noise-injection/TzQXKBjYhIKI75ctU209
- https://openart.ai/workflows/civet_fine_1/tenofas-flux-workflow-v33---txt2img-img2img-and-llm-prompt-facedetailer-faceswap-and-upscaler/mC53ge31vojzvo1gZrJs
- [ComfyUI — Flux Advanced - v5-OC | Stable Diffusion Workflows | Civitai](https://civitai.com/models/643835) [[ComfyWorkFlows]]
- https://huggingface.co/XLabs-AI/flux-ip-adapter
- https://huggingface.co/kudzueye/boreal-flux-dev-v2
- https://www.reddit.com/r/StableDiffusion/comments/1f92b9m/first_attempt_at_flux_lora_dreambooth_full/
- https://www.reddit.com/r/StableDiffusion/comments/1f2e1xp/hyper_flux_8_steps_lora_released/
- https://www.reddit.com/r/FluxAI/comments/1f1uhnm/new_flux_controlnet_union_model_just_dropped/
- https://www.reddit.com/r/comfyui/comments/1es8r9o/flux_controlnet_depth_canny_comfyui/?utm_source=diffusiondigest.beehiiv.com&utm_medium=referral&utm_campaign=trump-ai-pics-procreate-says-human-only-this-week-in-ai-art
- https://www.reddit.com/r/comfyui/comments/1ezlzsp/flux_controlnets_3d_scenes_in_playbook_web_editor/ [[visionflow]]
- https://huggingface.co/jbilcke-hf/flux-dev-panorama-lora-2
	- https://www.reddit.com/r/StableDiffusion/comments/1esz4hj/flux_hdr_seamless_panorama_links_in_comment/
- https://www.reddit.com/r/StableDiffusion/comments/1ex64jj/i_made_an_fp8_implementation_of_flux_which_gets/
- https://www.reddit.com/r/FluxAI/comments/1esyy3u/flux_dev_workflow_v20_for_loras_face_detailer_and/
- https://huggingface.co/spaces/Gradio-Community/Text-guided-Flux-Inpainting
- https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[ComfyWorkFlows]]
- https://comfyanonymous.github.io/ComfyUI_examples/flux/
- https://www.reddit.com/r/StableDiffusion/comments/1emcblr/flux_updates_realism_lora_cannynet_and_finetuning/
-

- ## Key Points
	- **VVIA Challenge Objective:** Utilize AI to interpret texts from ancient scrolls damaged in the eruption that destroyed Pompeii, without unrolling them.
	- **Historical Significance:** Scrolls believed to contain lost works from ancient Greece and Rome, offering insights into classical literature, philosophy, and possibly early Christian texts.
	- **Technical Challenges and Solutions:** The challenge involved using advanced medical imaging and AI to decipher the charred scrolls. Innovations included recognizing 'crackle' patterns as text and employing AI models to identify ink traces undetectable to the human eye.
	- **Winning Achievement:** The team identified 15 columns of text, suggesting a work by Philodemus on the pleasures of music and food. This success demonstrates AI's potential to reveal historical texts thought to be irretrievably lost.
	- **Future Implications:** Beyond the immediate findings, the challenge underscores the role of AI in historical preservation and research. It sets the stage for further discoveries within the remaining scrolls and potentially revolutionizes our understanding of ancient civilizations.
	- **Stage Two Goals:** Focus on automating the segmentation process to lower costs and enable the scanning of all 800 known scrolls, aiming for broader excavation and exploration of the villa's remains.

- ## Summary
	- The VVIA Challenge, with a $1 million prize, focused on utilizing AI to decipher ancient papyrus scrolls preserved yet damaged by the eruption that destroyed Pompeii. These scrolls, potentially containing lost historical, philosophical, and literary texts, were discovered in a villa believed to belong to Julius Caesar's father-in-law in Herculaneum. The challenge was to develop AI techniques to read the text without physically unrolling the scrolls. The winning team successfully read extensive portions of the scrolls, revealing works possibly by the Epicurean philosopher Philodemus. This endeavor not only showcases the power of AI in unlocking ancient secrets but also highlights the blend of technology, history, and human curiosity.

- ## Resources
	- [(2047) Discord | #💡-announcement | XLabs AI](https://discord.com/channels/1271080914692341801/1271086905743638591)
	- whatever this mad thing is [[FLUX] Diagram of UNET / DiT and exotic merging methods (v8.01) | Civitai](https://civitai.com/articles/3409/flux-diagram-of-unet-dit-and-exotic-merging-methods-v7)
	- [XLabs-AI/x-flux-comfyui (github.com)](https://github.com/XLabs-AI/x-flux-comfyui) [[Flux]] [[ComfyUI]]
	- https://www.reddit.com/r/StableDiffusion/comments/1er8q13/an_updated_flux_canny_controlnet_released_by/ [[Flux]] [[Stable Diffusion]] [[Controlnet and similar]]
	- https://huggingface.co/kudzueye/boreal-flux-dev-v2 [[Flux]] [[LoRA DoRA etc]]
	- https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[flux]] [[ComfyWorkFlows]]
	- [Text Guided Flux Inpainting - a Hugging Face Space by Gradio-Community](https://huggingface.co/spaces/Gradio-Community/Text-guided-Flux-Inpainting) [[Segmentation and Identification]]
	- [(17) Post | Feed | LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7230251219888316417/) [[KOHYA Dreambooth and similar]] [[Flux]]
	- https://huggingface.co/alimama-creative/FLUX.1-dev-Controlnet-Inpainting-Alpha [[Controlnet and similar]] [[Flux]]
	- https://github.com/cocktailpeanut/fluxgym [[Flux]]
	- https://civitai.com/models/731324 [[Flux]] Social Media Image Generator [[Death of the Internet]]
	- [docs/docs/getting-started/env-configuration.md at improve-flux-docs · JohnTheNerd/docs (github.com)](https://github.com/JohnTheNerd/docs/blob/improve-flux-docs/docs/getting-started/env-configuration.md) [[Flux]] [[ComfyUI]] [[Open Webui and Pipelines]]
	- https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[flux]]
	- [city96/ComfyUI-GGUF: GGUF Quantization support for native ComfyUI models (github.com)](https://github.com/city96/ComfyUI-GGUF) [[ComfyUI]] [[Model Optimisation and Performance]] [[Flux]]
		- [Excuse me? GGUF quants are possible on Flux now! : r/StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/1eslcg0/excuse_me_gguf_quants_are_possible_on_flux_now/)
	-
	- https://github.com/comfyanonymous/ComfyUI/commit/d0b7ab88ba0f1cb4ab16e0425f5229e60c934536 [[Flux]] [[Model Optimisation and Performance]]
	- https://medium.com/@furkangozukara/ultimate-flux-lora-training-tutorial-windows-and-cloud-deployment-abb72f21cbf8 [[Flux]] [[LoRA]]
	- https://github.com/ToTheBeginning/PuLID [[Face Swap]] [[Flux]] [[style transfer]]
		- https://huggingface.co/spaces/yanze/PuLID-FLUX
		- ![image.png](assets/image_1726490585592_0.png)
		-
- https://www.reddit.com/r/StableDiffusion/comments/1fkeei6/a_simple_flux_pipeline_workflow/
- [dagthomas/comfyui_dagthomas: ComfyUI SDXL Auto Prompter (github.com)](https://github.com/dagthomas/comfyui_dagthomas) [[flux]] [[ComfyUI]] [[Prompt Engineering]]
- https://www.reddit.com/r/StableDiffusion/comments/1fkdp6j/flux_stability_video_how_to_automate_short_videos/ [[AI Video]]
- https://huggingface.co/kudzueye/boreal-flux-dev-v2
- https://openart.ai/workflows/tenofas/flux-detailer-with-latent-noise-injection/TzQXKBjYhIKI75ctU209
- https://openart.ai/workflows/civet_fine_1/tenofas-flux-workflow-v33---txt2img-img2img-and-llm-prompt-facedetailer-faceswap-and-upscaler/mC53ge31vojzvo1gZrJs
- [ComfyUI — Flux Advanced - v5-OC | Stable Diffusion Workflows | Civitai](https://civitai.com/models/643835) [[ComfyWorkFlows]]
- https://huggingface.co/XLabs-AI/flux-ip-adapter
- https://huggingface.co/kudzueye/boreal-flux-dev-v2
- https://www.reddit.com/r/StableDiffusion/comments/1f92b9m/first_attempt_at_flux_lora_dreambooth_full/
- https://www.reddit.com/r/StableDiffusion/comments/1f2e1xp/hyper_flux_8_steps_lora_released/
- https://www.reddit.com/r/FluxAI/comments/1f1uhnm/new_flux_controlnet_union_model_just_dropped/
- https://www.reddit.com/r/comfyui/comments/1es8r9o/flux_controlnet_depth_canny_comfyui/?utm_source=diffusiondigest.beehiiv.com&utm_medium=referral&utm_campaign=trump-ai-pics-procreate-says-human-only-this-week-in-ai-art
- https://www.reddit.com/r/comfyui/comments/1ezlzsp/flux_controlnets_3d_scenes_in_playbook_web_editor/ [[visionflow]]
- https://huggingface.co/jbilcke-hf/flux-dev-panorama-lora-2
	- https://www.reddit.com/r/StableDiffusion/comments/1esz4hj/flux_hdr_seamless_panorama_links_in_comment/
- https://www.reddit.com/r/StableDiffusion/comments/1ex64jj/i_made_an_fp8_implementation_of_flux_which_gets/
- https://www.reddit.com/r/FluxAI/comments/1esyy3u/flux_dev_workflow_v20_for_loras_face_detailer_and/
- https://huggingface.co/spaces/Gradio-Community/Text-guided-Flux-Inpainting
- https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[ComfyWorkFlows]]
- https://comfyanonymous.github.io/ComfyUI_examples/flux/
- https://www.reddit.com/r/StableDiffusion/comments/1emcblr/flux_updates_realism_lora_cannynet_and_finetuning/
-

## Core Characteristics

- **Extractive or Abstractive**: Sentence selection vs. text generation approaches
- **Single or Multi-Document**: Summarisation of individual or multiple documents
- **Query-Focused**: Summaries tailored to specific information needs
- **Controllable Length**: Adjustable summary compression ratios
- **Factual Consistency**: Maintaining accuracy and avoiding hallucination

## Relationships

- **Subclass**: Natural Language Processing
- **Related**: Text Generation, Information Extraction, Language Modeling
- **Models**: BART, PEGASUS, T5, LED, BigBird
- **Applications**: News Aggregation, Document Analysis, Research Paper Summarisation

## Key Literature

1. Lewis, M., et al. (2020). "BART: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension." *ACL*, 7871-7880.

2. Zhang, J., et al. (2020). "PEGASUS: Pre-training with extracted gap-sentences for abstractive summarization." *ICML*, 11328-11339.

3. Nallapati, R., et al. (2016). "Abstractive text summarization using sequence-to-sequence RNNs and beyond." *CoNLL*, 280-290.

## See Also

- [[Natural Language Processing]]
- [[Text Generation]]
- [[BART]]

## Metadata

- **Domain**: NLP, Text Analysis
- **Maturity**: Production use
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Text Summarisation
		  
		  **Term ID**: AI-0370
		  **Category**: Domain Applications → NLP Applications
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Text Summarisation is the NLP task of producing concise, coherent summaries that capture the essential information from longer documents or document collections. Summarisation systems employ extractive methods (selecting key sentences) or abstractive methods (generating new summary text) using transformer models to enable applications in news aggregation, document analysis, and information retrieval.
		  
		  ## Core Characteristics
		  
		  - **Extractive or Abstractive**: Sentence selection vs. text generation approaches
		  - **Single or Multi-Document**: Summarisation of individual or multiple documents
		  - **Query-Focused**: Summaries tailored to specific information needs
		  - **Controllable Length**: Adjustable summary compression ratios
		  - **Factual Consistency**: Maintaining accuracy and avoiding hallucination
		  
		  ## Relationships
		  
		  - **Subclass**: Natural Language Processing
		  - **Related**: Text Generation, Information Extraction, Language Modeling
		  - **Models**: BART, PEGASUS, T5, LED, BigBird
		  - **Applications**: News Aggregation, Document Analysis, Research Paper Summarisation
		  
		  ## Key Literature
		  
		  1. Lewis, M., et al. (2020). "BART: Denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension." *ACL*, 7871-7880.
		  
		  2. Zhang, J., et al. (2020). "PEGASUS: Pre-training with extracted gap-sentences for abstractive summarization." *ICML*, 11328-11339.
		  
		  3. Nallapati, R., et al. (2016). "Abstractive text summarization using sequence-to-sequence RNNs and beyond." *CoNLL*, 280-290.
		  
		  ## See Also
		  
		  - [[Natural Language Processing]]
		  - [[Text Generation]]
		  - [[BART]]
		  
		  ## Metadata
		  
		  - **Domain**: NLP, Text Analysis
		  - **Maturity**: Production use
		  
		  ```

    - measured-by:: [[Natural Language Processing]]

- public-access:: true
	- definition:: Text Summarisation is the NLP task of producing concise, coherent summaries that capture the essential information from longer documents or document collections. Summarisation systems employ extractive methods (selecting key sentences) or abstractive methods (generating new summary text) using transformer models to enable applications in news aggregation, document analysis, and information retrieval.



## Academic Context

- Text summarisation is a core task within Natural Language Processing (NLP) focused on generating concise, coherent summaries that retain the essential information from longer texts or collections of documents.
  - It is academically grounded in linguistics, information retrieval, and machine learning, with early foundations in statistical and graph-based methods evolving to deep learning and transformer-based architectures.
  - Key developments include the transition from extractive summarisation, which selects key sentences verbatim, to abstractive summarisation, which generates novel text that paraphrases and condenses the source material.
  - The rise of large language models (LLMs) such as BERT, T5, BART, and PEGASUS has significantly advanced the field by improving semantic understanding and fluency in summaries, although challenges remain in handling very long documents and maintaining factual accuracy.

## Current Landscape (2025)

- Industry adoption of text summarisation is widespread across sectors including media, legal, healthcare, and customer service, where summarisation accelerates information digestion and decision-making.
  - Notable platforms integrate summarisation APIs and AI models to automate summarising calls, interviews, legal documents, and research papers.
  - Technical capabilities now include hybrid approaches combining extractive and abstractive methods, with transformer models fine-tuned for domain-specific summarisation tasks.
  - Limitations persist in summarising very long documents due to context window constraints of transformer models, addressed by emerging "block" or "divide-and-summarise" methods that segment texts before synthesising summaries.
  - Standards and evaluation metrics such as ROUGE and BLEU scores remain central for assessing summarisation quality, though human evaluation is still crucial for nuanced judgement.

## Research & Literature

- Key academic contributions include:
  - Krishna, K.M.R. (2025). "Deep learning for text summarization using NLP: Comparative analysis of T5, BART, and PEGASUS models." *Scientific Reports*. DOI: 10.1038/s41598-025-20224-1
  - Zhang, Y., et al. (2024). "Divide and Summarize: Improving Long Document Summarization with Block Methods." *Frontiers in Artificial Intelligence*. DOI: 10.3389/frai.2025.1604034
  - Brown, T., et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS*.
- Ongoing research focuses on improving semantic coherence, reducing hallucinations in abstractive summaries, scaling models for longer contexts, and enhancing domain adaptability.

## UK Context

- The UK has a vibrant NLP research community contributing to text summarisation advancements, with universities such as the University of Manchester and University of Leeds actively publishing in this domain.
  - North England innovation hubs, including Manchester’s MediaCityUK and Sheffield’s Digital Campus, foster collaborations between academia and industry to develop summarisation tools tailored for sectors like media monitoring and legal tech.
  - Regional case studies include pilot projects deploying summarisation in public sector document analysis and healthcare record summarisation, reflecting local needs for efficient information processing.

## Future Directions

- Emerging trends include:
  - Integration of multimodal summarisation combining text with audio and video inputs.
  - Development of more interpretable and controllable summarisation models to allow user-guided summary generation.
  - Enhanced handling of multilingual and cross-lingual summarisation tasks.
- Anticipated challenges:
  - Balancing summary brevity with completeness and factual accuracy.
  - Mitigating biases and ensuring ethical use of summarisation technologies.
- Research priorities:
  - Expanding context windows of transformer models.
  - Refining evaluation frameworks to better capture summary quality beyond lexical overlap.
  - Exploring lightweight summarisation models suitable for deployment in resource-constrained environments.

## References

1. Krishna, K.M.R. (2025). Deep learning for text summarization using NLP: Comparative analysis of T5, BART, and PEGASUS models. *Scientific Reports*. https://doi.org/10.1038/s41598-025-20224-1  
2. Zhang, Y., Chang, S., Wu, H., Moro, A., & Koh, J. (2024). Divide and Summarize: Improving Long Document Summarization with Block Methods. *Frontiers in Artificial Intelligence*. https://doi.org/10.3389/frai.2025.1604034  
3. Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language Models are Few-Shot Learners. *NeurIPS*.  
4. GeeksforGeeks. (2025). Text Summarization Techniques. Retrieved November 2025, from https://www.geeksforgeeks.org/nlp/text-summarization-techniques/  
5. DhiWise. (2025). Text Summarization Models That Support Better Focus. Retrieved July 2025, from https://www.dhiwise.com/post/text-summarization-models-that-support-better-focus  

(And yes, summarising this ontology entry was almost as challenging as summarising the entirety of Shakespeare’s works — but thankfully, less dramatic.)


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
