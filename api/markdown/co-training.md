- ### Definition
  - A semi-supervised learning technique where two or more models with different views of the data train each other by labelling unlabelled examples. Co-training leverages complementary feature sets or model architectures to improve performance through mutual teaching.

bridges-to:: [[Autonomous Robot]]

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CoTraining
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - part-of:: [[Semi-Supervised Learning]]
  - related-to:: [[Self Training]], [[Active Learning]]
  - uses:: [[Machine Learning]], [[Machine Learning Model]]
  - enables:: [[Generative AI]]

- ### Content
  - A semi-supervised learning technique where two or more models with different views of the data train each other by labelling unlabelled examples. Co-training leverages complementary feature sets or model architectures to improve performance through mutual teaching.

  - ### Key Techniques and Tools
		- **DeepSpeed**: [DeepSpeed by Microsoft](https://github.com/microsoft/DeepSpeed) is an advanced deep learning optimization software suite that significantly accelerates the training of deep learning models. It offers various features like model parallelism, gradient accumulation, and sparsity to achieve unprecedented scale and speed. *DeepSpeed is pivotal for researchers and practitioners aiming to push the boundaries of model size and training speed.*
		- **Nvidia DASK**: [Tutorial for distributed computing with GPUs](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/) provides insights into using Nvidia DASK for distributed computing, enhancing the performance of LLMs by leveraging GPU resources more efficiently. *This tutorial is a valuable resource for anyone looking to understand and implement distributed computing with GPUs.*
		- **SWARM Training Paper**: [SWARM: A Paradigm for Distributed Training of LLMs](https://arxiv.org/pdf/2301.11913.pdf) discusses innovative methods for distributed training of large language models, addressing challenges related to scalability and efficiency. *The SWARM approach represents a significant advancement in distributed training techniques, offering insights into overcoming the limitations of traditional training methodologies.*

  - ### **CLIP-Forge**
		- [CLIP-Forge GitHub](https://github.com/autodeskailab/clip-forge) - CLIP Forge is a framework to organise, train, and evaluate CLIP (Contrastive Language–Image Pre-training) models, supporting various training strategies.

  - The tool enables users to train [[machine learning]] models efficiently, especially when dealing with custom datasets that might require adjustments to training procedures.

  - The framework provides a modular structure, allowing users to customise different components such as the dataset loading, model architectures, and [[optimization]] strategies.

  - It offers utilities for [[data management]], including pre-processing and augmentation techniques to improve the model's performance on specific tasks.

  - CLIP Forge contains tools for evaluating the performance of trained models on various downstream tasks, with options for [[visualization]] of the results and comparing different models.

  - The project supports [[research]] tracking and management, allowing users to organise and compare results from different training runs and hyperparameter settings.

  - It offers pre-trained models and example configurations to get users started quickly and demonstrate the capabilities of the framework.

  - The codebase is designed to be extensible, making it easier for [[research]] and practitioners to integrate new features, datasets, and evaluation metrics.

  - It provides mechanisms for saving and loading model checkpoints, which allows for resuming training, fine-tuning, and deploying trained models.

  - The project includes comprehensive documentation and tutorials to help users understand how to use the different features and components of the framework effectively.

  - ### **LION by Toronto AI Lab**
		- [LION](https://nv-tlabs.github.io/LION/) - *   LION (EvoLved sIgn Optimisation) is a new optimisation algorithm designed as an alternative to Adam, intended for training large language models.

  -   LION utilises the sign of the gradient for updates, rather than the gradient itself, leading to more stable and efficient training.

  -   The algorithm employs a momentum mechanism similar to Adam but with a crucial difference in how updates are applied.

  -   LION claims to achieve better generalisation performance than Adam, often with fewer training steps.

  -   The paper offers empirical evidence demonstrating LION's effectiveness across various language modelling tasks and architectures.

  -   The lighter computational overhead of LION compared to Adam allows for training larger models or training existing models more quickly.

  -   The LION algorithm is easy to implement and can be incorporated into existing training pipelines with minimal code changes.

  -   The researchers provide code and pre-trained models to encourage adoption and further [[research]].

  -   LION's stability makes it suitable for training models with mixed precision formats (e.g., FP16), helping to reduce memory usage.

  -   The paper explores the theoretical properties of LION, offering insights into its convergence behaviour and relationship to other optimisation algorithms.

  - ### Hardware
		- **[Trainium3](https://siliconangle.com/2024/12/04/aws-unveils-next-generation-ai-chips-trainium3-graviton5/)**: Amazon's next-generation AI training chip, expected in late 2025.
  - Meta
  - Meta has made significant advancements in AI in 2024 and 2025, with a focus on new hardware, advanced AI models, and enhanced user experiences.

  - ### Privacy Risks
		- The vast datasets used to train general-purpose AI models present significant privacy risks. A key concern is the "memorization" of sensitive personal data from training datasets, which can then be unintentionally reproduced.

  - ### Resampling Methods
		- **Holdout Method (Train / Test Split):** A basic approach to split the dataset into training and testing sets.
			- [Train/Test Split in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html)
		- **Repeated Holdout:** Running the holdout method multiple times to get a better estimate of model performance.
			- [RepeatedKFold in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)
		- **Cross-validation:** A technique for assessing how the results of a statistical analysis will generalize to an independent data set.
			- [Cross-validation in scikit-learn](https://scikit-learn.org/stable/modules/cross_validation.html)

		- #### More like industrial application
		- As the word metaverse has gained in use, so have some traditional usersand researchers in mixed reality switched to use of the term. Siyaev andJo describe an aircraft training metaverse which incorporates ML basedspeech recognition.[[siyaev2021towards]] This class of mixed realitytrainer traditionally finds positive results, but is highly taskspecific.

  - # Wait!
  - Positives. AI is potentially very good at continuous, patient, optimised delivery of education, especially where there is a paucity of skilled teachers. This is a equalising force.
  - Negatives. AI is inherently a closed system, and training people within a closed system which is just a mashup of prior knowledge may have a deleterious impact on the peak creative potential of individuals.
  - Solution. We need to be intentional about a hybrid model, where practitioners bridge the things that AI cannot provide.
  - This is about to be a major new page. It is currently a mess right now but it's next on my list as of Sept 24.
  - {{embed ((666d6535-5da6-4e7c-ae08-624de6a1ee54))}}

  - # Training
  - If using the Fp8 dev Flux model, to get good results make sure and use the fp8_e4m3fn version.
  - Use the lora at about strength of 0.7-.75. Higher strengths will increase likelihood of generating the little details better but also increase chances of unwanted artifacts like messy fingers and other unwanted things. Lowering the strength below 0.7 will increase the cohesion of the image.
  - In comfy for the model sampling flux node make sure and use the mas_shift strength of .5 and base_shift at 0.5 respectively.
  - Use Euler as the sampler and Beta as the scheduler with 25 steps minimum.
  - Higher resolutions like 1024x1400 or 1024x1216 seem to produce best results. Also use 2x3 aspect ratio (portrait) for best results.
  - It was trained on 100 images and manual caption pair's all in "cowboy shot" where the subject is seen from thighs up, so the images generated with this lora will be very biased in that camera shot and angle. A person seen from different angles can be generated successfully with good quality but you need to reduce the strength of the lora to prevent mutations and other cohesion issues for other angles, so play around with the strength of the lora for best results in your use case.
  - This lora was trained on an A100 using the simple tuner training script (props to the dev!). The lora was trained on an fp16 dev base flux model, during training it was using about 27gb worth of VRAM for the following settings. The training speeds are about 2.3 sec/it on the A100. We used prodigy with constant, 64 rank and 64 alpha, bf16, gamma 5. No dropout used, batch size of 1 (batch size 1 yields better results versus using any other batch size).
  - It takes quite a while for the concept to converge decently at about 350 steps per image minimum and 650 steps per image for good results. Lots of tests were performed to converge on the best hyperparameters and this is what we settled on (more testing needed for manual hyperparameters as I expect a large speedup with use of adam8w and such..).
  - Some other notes of interest. We trained on an fp8 flux variant and results were just as good as the fp16 flux model at the cost of 2x convergence speed. That means it now took 700 minimum steps to converge on the subject decently and 1400 steps to converge on a good result. Training on an fp8 flux model took about 16.3gb worth of vram with our settings so I don't see a reason training cant happen on any card that has that VRAM, and possibly with some optimizations maybe could even happen on cards with 16gb of vram for fp8 lora training.

  - # Text Encoder settings (CLIP and T5):
	  train_clip_l = true # or false
	  train_t5 = true # or false
	  clip_learning_rate = 1e-6 # Usually lower than unet LR
	  t5_learning_rate = 1e-6 # Usually lower than unet LR
	  Use code with caution.
	  Toml
	  ComfyUI Workflow for Inference: Use the resulting .safetensors file like the base Flux model. You can also extract LoRAs from the FFT checkpoint with 2kpr's extraction script (or equivalent).

	  3. Training Text Encoders (CLIP and T5):

	  Status: Still experimental and needs careful consideration. Some find it beneficial for improving concept separation and flexibility. Others find it makes little difference or degrades results, depending on the dataset, captions, and task.

	  Software: Currently enabled in Kohya's sd-scripts and Kijai's ComfyUI nodes. 2kpr's trainer will also offer this functionality.

	  LR: Generally much lower than the Unet/transformer LR. Start with 1e-6 for CLIP and even lower for T5 (1e-7 or less). Separate LRs for CLIP and T5 are often required.

	  ComfyUI workflow: Use Kijai's Flux Train node, enabling Train Clip L and/or Train T5. Provide appropriate learning rates in the respective inputs.

	  4. LoRA Merging and Pruning:

	  Merging in ComfyUI: Use two (or more) Lora Loader nodes, followed by a Lora Merge node.

	  Pruning in ComfyUI: Use Kijai's Block Lora Loader node to selectively load and adjust the strength of individual blocks from a LoRA. This can be used to identify which blocks are responsible for desired (or undesired) effects and effectively prune the LoRA by setting unimportant block strengths to 0. Currently, no direct save functionality exists for the pruned LoRA, but merging it with the base model is possible.

	  Merging in Kohya: Use merge_lora.py

	  Alternative Strategy: Fine-tune a LoRA, then merge it into the base model, then fine-tune again.

	  Scaling LoRAs: Use 2kpr's scale_lora.py script to adjust the overall strength of a LoRA. This can be helpful to normalize LoRAs from different trainers or training runs.

	  5. Other Key Tools and Techniques:

	  Captioning: TagGUI locally supports various VLMs (including CogVLM) for improved captioning. Prompt engineering for captioning is important.

	  Background Removal: Use BRIA, InspyreNet, SAM2, or Photoroom Pro for higher-quality masks.

	  Upscaling: Ultimate SD Upscale can be used. Consider generating at your desired resolution directly, as Flux handles high resolutions well.

	  Inpainting: ComfyUI's Inpaint node with appropriate mask generation.

	  Regularization: Experiment with different ratios of captioned vs. uncaptioned and style-varied regularization images. Further research is needed in this area for Flux.

	  Debugging and Monitoring: Use ComfyUI's built-in logging, Tensorboard, and 2kpr's trainer's periodic loss charts.

	  This expanded information should provide a more concrete starting point for fine-tuning Flux 1D. Remember to experiment, document your findings, and share your results with the community. The field is still under active development, so continuous learning and adaptation are key.


	  User
	  can you add in any tips and tricks and prompts?


	  Model
	  83.7s
	  Let's add some prompts, tips, and tricks to fine-tune Flux 1D effectively:

	  Prompts for Captioning (using an LLM like CogVLM):

	  General: "A detailed, objective description of this image, focusing on visual elements only. Avoid subjective interpretations or artistic descriptions."

	  Character Focus: "A detailed description of this character, including their physical attributes, clothing, pose, and expression. The character's name is [character name]."

	  Style Focus: "Describe the artistic style of this image, focusing on lines, colors, composition, and textures. The type of art is [painting/photo/illustration/etc.]. The style is [style name]."

	  Specific Details: You can combine the above with instructions for specific details: "Describe this image. Focus on the character's facial features. The character's name is [character name]."

	  Tips and Tricks for Fine-Tuning:

	  Start Simple, Then Scale: Begin with LoRA and small datasets before moving to FFT and larger datasets. This helps develop intuition and find good starting parameters.

	  Test Extensively: Use a variety of prompts, styles, and resolutions during and after training. Don't rely solely on validation images. Pay close attention to details like anatomy, coherence, and concept bleed.

	  Iterative Approach: Fine-tuning is an iterative process. Train, test, adjust parameters, and retrain. Don't be afraid to experiment.

	  Document Everything: Keep track of your datasets, captions, parameters, and results. This allows for better analysis and reproduction. Version your LoRAs and checkpoints.

	  Community Resources: Follow the Flux fine-tuning communities (Discord, Reddit, etc.) for the latest developments, tips, and shared experiences.

	  Pre-trained Models: Explore existing LoRAs and checkpoints on Civitai and Hugging Face for inspiration and as starting points for your own fine-tuning.

	  Seed Exploration: Even with Flux, seed variation can have a noticeable effect on outputs. Try different seeds to see the range of possibilities with your fine-tuned model.

	  Guidance Scale Tweaking: Experiment with lower guidance scales (2-3) during inference, especially for artistic styles.

	  LoRA Weight Adjustment: Fine-tune the LoRA weight during inference to control its strength and balance it with other LoRAs or concepts.

	  Prompts for Testing Generalization and Flexibility:

	  Likeness:

	  Simple Prompts: "[character name], portrait photo"

	  Style Variations: "[character name], painting by [artist name]" , "[character name], anime style"

	  Complex Prompts: "[character name] riding a unicorn in a cyberpunk city, photorealistic"

	  Negative Prompts: While not directly supported in Flux training, test with negative prompts during inference to see if they work as expected.

	  Style:

	  Basic Prompts: "a woman in a dress, [style name] artstyle"

	  Different Subjects: "a cat, [style name] artstyle", "a spaceship, [style name] artstyle"

	  Complex Scenes: "A group of people in a medieval market, [style name] painting"

	  Multi-Concept: Combine prompts that test each concept individually and together. For example, if you trained a LoRA with a character and a specific object, test with prompts that include only the character, only the object, and both.

	  Specific Prompting Tips for Flux:

	  Two-Word Classes: For style and character LoRAs, use a two-word class to provide more context. Example: "ohwx character name, woman elf" or "ohwx style name, painting artstyle"

	  Descriptive Captions: For complex subjects or scenes, provide short, clear, natural language descriptions focusing on the elements you want Flux to learn.

	  Object and Background Specificity: For styles and characters, if you don't want certain objects or backgrounds to be associated with the LoRA, include them in the captions without the trigger word. This helps prevent overfitting and bleeding.

	  "Unpromptable" Concepts: Flux can struggle with some artistic styles or concepts that are hard to describe with prompts. In these cases, using an IPAdapter (when available) might be a more effective approach.

	  Prompt Engineering: Experiment with different phrasing and prompt structures to see how Flux interprets them. Some concepts might require more specific or descriptive language than others.

	  Leverage Prior Knowledge: Flux has extensive prior knowledge. Start with simple prompts and gradually add detail as needed. See if you can get the desired results without explicitly mentioning every detail.

	  By combining these tips, tricks, and prompts, you'll be well on your way to mastering the art of Flux 1D fine-tuning. Remember, experimentation and community engagement are your best allies in this rapidly evolving field.

  - # NeRFs
  - MobileNeRF: This approach adapts NeRFs for mobile devices by exploiting the polygon rasterization pipeline for efficient neural field rendering. It achieves very fast rendering times (0.016-0.017s) but requires long training times[](https://spectrum.ieee.org/ai-graphics-neural-rendering).
  - MobileR2L: This method uses a full CNN-based neural light field model with a super-resolution model in its second stage. It achieves real-time inference on mobile devices while maintaining high image quality, rendering a 1008x756 image of real 3D scenes in 18.04ms on an iPhone 13[](https://spectrum.ieee.org/ai-graphics-neural-rendering).
  - Instant NGP (Neural Graphics Primitives): Developed by NVIDIA, this technique significantly speeds up the training and rendering of NeRFs, allowing for near-instantaneous scene reconstruction[](https://github.com/weihaox/awesome-neural-rendering/blob/master/docs/INTRODUCTION-AND-SURVEY.md).
  - Plenoxels (Plenoptic Voxels): This method replaces neural networks with a sparse 3D grid of spherical harmonics, enabling faster training and competitive quality compared to NeRFs[](https://github.com/weihaox/awesome-neural-rendering/blob/master/docs/INTRODUCTION-AND-SURVEY.md).
  - NGLOD (Neural Geometric Level of Detail): This approach combines neural implicit representations with explicit geometric representations, allowing for multi-resolution rendering and faster training[](https://arxiv.org/abs/2402.00028).
  - NeRF-MAE (Masked AutoEncoders for NeRFs): This technique applies the concept of masked autoencoders to NeRFs for self-supervised 3D representation learning, potentially improving generalization and efficiency[](https://ideas-ncbr.pl/en/research/neural-rendering/).

  - ### Key Techniques and Tools
		- **DeepSpeed**: [DeepSpeed by Microsoft](https://github.com/microsoft/DeepSpeed) is an advanced deep learning optimization software suite that significantly accelerates the training of deep learning models. It offers various features like model parallelism, gradient accumulation, and sparsity to achieve unprecedented scale and speed. *DeepSpeed is pivotal for researchers and practitioners aiming to push the boundaries of model size and training speed.*
		- **Nvidia DASK**: [Tutorial for distributed computing with GPUs](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/) provides insights into using Nvidia DASK for distributed computing, enhancing the performance of LLMs by leveraging GPU resources more efficiently. *This tutorial is a valuable resource for anyone looking to understand and implement distributed computing with GPUs.*
		- **SWARM Training Paper**: [SWARM: A Paradigm for Distributed Training of LLMs](https://arxiv.org/pdf/2301.11913.pdf) discusses innovative methods for distributed training of large language models, addressing challenges related to scalability and efficiency. *The SWARM approach represents a significant advancement in distributed training techniques, offering insights into overcoming the limitations of traditional training methodologies.*

  - # The Trillion-Dollar Cluster and Beyond
  - ![situationalawareness.pdf](assets/situationalawareness_1717941860620_0.pdf)
  - [WEBPAGE LINK](https://situational-awareness.ai/)
  - This podcast and PDF explores the thesis advanced  Leopold Aschenbrenner, delving into by the trajectory of [[Artificial Intelligence]] and [[Artificial Superintelligence]], within the contexts of [[Hardware and Edge]], [[Energy and Power]], and [[Politics, Law, Privacy]].
		- **Compute Requirements Skyrocketing:** The conversation begins with a stark examination of the escalating computational resources necessary for training advanced AI models. They reference GPT-4's estimated $500 million training cluster as a benchmark, projecting a future where trillion-dollar clusters become commonplace by 2030, demanding power equivalent to significant portions of national grids.
		- **Unlocking the Power of Test-Time Compute:** While training compute garners most attention, the guests emphasise the equally crucial role of "test-time compute." They argue that current AI models, despite their capabilities, operate far below their potential cognitive capacity. Analogous to human "System 2" thinking, they believe training AI to think strategically over millions of tokens, simulating months of cognitive work, will be essential to unlocking breakthroughs. This suggests AI systems that can plan, debug, iterate, and reason far beyond current capabilities.

  - ### Efficiency
		- LLaMA-3 models are notably smaller than comparable LLMs. They were more efficient to train.
		- Sizes are currently:
			- 7B parameters, outperforming the previous 70B models on some metrics
			- 70B parameters, approaching or exceeding some closed source online models
			- 400B parameters (still in training), expected to outperform SOTA models
		- This efficiency allows them to run on less powerful hardware, broadening accessibility for researchers.
			- They can be fine tuned more easily.

  - ### The Fifth Paradigm Explained
		- The fifth paradigm involves using simulators to generate synthetic training data for deep learning systems.
		- These trained systems act as "emulators," providing faster predictions compared to traditional simulations.
		- Example: Predicting molecule properties by training a model on data from Schrödinger's equation simulations.
		- This method can achieve three-to-four-order-of-magnitude acceleration, making it highly disruptive.


  - This Microsoft  LinkedIn report contains very interesting findings ![2024_Work_Trend_Index_Annual_Report_663d45200a4ad.pdf](assets/2024_Work_Trend_Index_Annual_Report_663d45200a4ad_1715414237615_0.pdf)
  - | Statistic | Value |
  |-----------|-------|
  | Percentage of global knowledge workers using generative AI | 75% |
  | Percentage of AI users who started using it less than 6 months ago | 46% |
  | Percentage of AI users who say it helps them save time | 90% |
  | Percentage of AI users who say it helps them focus on their most important work | 85% |
  | Percentage of AI users who say it helps them be more creative | 84% |
  | Percentage of AI users who say it helps them enjoy their work more | 83% |
  | Percentage of emails read in under 15 seconds | 85% |
  | Ratio of emails read to emails sent | 4 to 1 |
  | Percentage of time Microsoft 365 users spend on emails, chats, and meetings | 60% |
  | Percentage of time Microsoft 365 users spend in creation apps like Word and PowerPoint | 40% |
  | Percentage of leaders who agree their company needs to adopt AI to stay competitive | 79% |
  | Percentage of leaders who worry about quantifying the productivity gains of AI | 59% |
  | Percentage of leaders who worry their organization's leadership lacks a plan and vision to implement AI | 60% |
  | Percentage of AI users who are bringing their own AI tools to work (BYOAI) | 78% |
  | Percentage of AI users at small and medium-sized companies who are bringing their own AI to work | 80% |
  | Percentage of AI users reluctant to admit using AI for their most important tasks | 52% |
  | Percentage of AI users who worry using AI on important work tasks makes them look replaceable | 53% |
  | Percentage of people who struggle with the pace and volume of work | 68% |
  | Percentage of people who feel burned out | 46% |
  | Increase in hiring for technical AI talent in the past eight years | 323% |
  | Percentage of leaders who wouldn't hire someone without AI skills | 66% |
  | Percentage of leaders who would rather hire a less experienced candidate with AI skills than a more experienced candidate without them | 71% |
  | Percentage of leaders who say early-in-career talent will be given greater responsibilities with AI | 77% |
  | Percentage of US executives not currently investing in AI tools or products for employees | 45% |
  | Percentage of AI users globally who have received AI training from their company | 39% |
  | Percentage of companies planning to offer training on generative AI this year | 25% |
  | Percentage of leaders concerned about having enough talent to fill roles in the year ahead | 55% |
  | Percentage of cybersecurity, engineering, and creative design leaders concerned about having enough talent | 60%+ |
  | Percentage of people who worry AI will replace their job | 45% |
  | Percentage of people considering quitting in the year ahead | 46% |
  | Increase in job applications per role in the US since last fall | 14% |
  | Percentage of US professionals considering a new job this year | 85% |
  | Projected change in skills globally by 2030 (from 2016) | 50% |
  | Projected acceleration of skills change due to generative AI | 68% |
  | Percentage of this year's LinkedIn Jobs on the Rise in the US that didn't exist 20 years ago | 68% |
  | Percentage of recruiters already creating new roles tied to generative AI usage | 12% |
  | Growth of Head of AI roles over the past five years | 3x |
  | Growth of Head of AI roles in 2023 | 28% |
  | Increase in use of LinkedIn Learning courses to build AI aptitude among non-technical professionals in the past six months | 160% |
  | Increase in LinkedIn members globally adding AI skills to their profiles | 142x |
  | Percentage of people who say they need AI skills to remain competitive in the job market | 76% |
  | Percentage of people who say AI can help them get promoted faster | 69% |
  | Percentage of people who say AI skills will broaden their job opportunities | 79% |
  | Percentage of recruiters updating job descriptions to reflect generative AI usage in the role | 22% |
  | Additional application growth for LinkedIn job posts mentioning artificial intelligence or generative AI over the past two years | 17% |
  | Percentage of early-in-career and individual contributor employees who said AI access would influence their choice of employer | 54% |
  | Percentage of AI power users who say AI makes their overwhelming workload more manageable | 92% |
  | Percentage of AI power users who say AI boosts their creativity | 92% |
  | Percentage of AI power users who say AI helps them focus on the most important work | 93% |
  | Percentage of AI power users who say AI helps them feel more motivated | 91% |
  | Percentage of AI power users who say AI helps them enjoy work more | 91% |
  | How much more likely AI power users are to frequently experiment with different ways of using AI compared to other respondents | 68% |
  | How much more likely AI power users are to frequently pause before a task and ask if AI can help compared to other respondents | 49% |
  | How much more likely AI power users are to keep trying if they don't get the perfect AI response the first time compared to other respondents | 30% |
  | How much more likely AI power users are to research and try new AI prompts compared to other respondents | 56% |
  | Percentage of AI power users who use AI to start their day | 85% |
  | Percentage of AI power users who use AI to get ready for the following workday | 85% |
  | How much more likely AI power users are to use AI to catch up on missed meetings compared to other respondents | 56% |
  | How much more likely AI power users are to use AI to analyze information compared to other respondents | 51% |
  | How much more likely AI power users are to use AI to design visual content compared to other respondents | 49% |
  | How much more likely AI power users are to use AI to interact with customers compared to other respondents | 49% |
  | How much more likely AI power users are to use AI to brainstorm or problem-solve compared to other respondents | 37% |
  | How much more likely AI power users are to redesign their business processes and workflows with AI compared to other respondents | 66% |
  | How much more likely AI power users are to hear from their CEO about the importance of using generative AI at work compared to other respondents | 61% |
  | How much more likely AI power users are to hear from the leader of their department about the importance of using generative AI at work compared to other respondents | 40% |
  | How much more likely AI power users are to hear from their manager's manager about the importance of using generative AI at work compared to other respondents | 42% |
  | How much more likely AI power users are to receive encouragement from leadership to consider how AI can transform their function compared to other respondents | 53% |
  | How much more likely AI power users are to say their company encourages innovation compared to other respondents | 18% |
  | How much more likely AI power users are to say their company has a virtual learning program compared to other respondents | 37% |
  | How much more likely AI power users are to have received training on prompt writing compared to other respondents | 37% |
  | How much more likely AI power users are to have received training on how to use AI for their role or function compared to other respondents | 35% |
  | How much more likely AI power users are to have received training on specific AI use cases such as writing or analyzing data compared to other respondents | 32% |

  - ### Tools and Frameworks for Quantization
		- **TensorFlow Lite**: Provides tools for post-training quantization and quantization-aware training.
	 - [TensorFlow Lite Guide](https://www.tensorflow.org/lite)
		- **PyTorch Quantization**: Supports dynamic quantization, static quantization, and quantization-aware training.
	 - [PyTorch Quantization](https://pytorch.org/docs/stable/quantization.html)
		- **ONNX Runtime**: Offers support for quantized models, enabling optimized inference on different hardware.
	 - [ONNX Runtime Quantization](https://onnxruntime.ai/docs/performance/quantization.html)

		- #### Training, Simulation, and Education
		- The modular open-source system can be applied to various training,
		   simulation, and education scenarios. By integrating AI and generative ML
		   technologies, these tools can provide personalized learning experiences
		   and create realistic simulations that cater to different learning styles
		   and requirements.

		- ##### Visual Training Support Systems
		- The infrastructure could be further extended to visual training support
		   systems using low-cost, low-power components. These systems could
		   provide interactive, immersive learning experiences for community
		   members, helping them better understand the local ecosystem and develop
		   skills in environmental monitoring and management.

		- ##### Capacity Building and Local Empowerment
		- An essential aspect of this initiative is building capacity and
		   empowering local communities to take ownership of their environment and
		   resources. By providing training, resources, and support, the proposed
		   infrastructure can help communities develop the skills and knowledge
		   needed to manage their ecosystems effectively.

		   Furthermore, the integration of digital tools and technologies can
		   promote digital inclusion and bridge the digital divide, giving isolated
		   communities access to valuable information and resources while fostering
		   a sense of global connectedness and collaboration.

  - ### Mid Journey have said:
		- **Midjourney Video** "will not be like any other AI video products that are currently available out there and will be 10X better."
			- **David Holz**: “*MidJourney video may not be consistently making what you want, but the quality will be consistently good by default.*”
		- **Video Training**: The Midjourney team will start to train the video/animation model, which will come before 3D.
			- Already have all the data needed to train the model.
		- **3D:** needs more data to train, so it’s a bit slower than expected.
		- {{video https://youtu.be/LY3B0d623wA}}

  - ### Hinton
		- ![2024-10-12 08-54-13.mp4](assets/2024-10-12_08-54-13_1728720039197_0.mp4){:width 100}
  - ![](https://jnnnthnn.com/leike.png){:width 600}
  - A survey of 2778 AI researchers, to assess the pace of AI progress and the broader societal implications. The increased participation in this third iteration points to growing importance and concern surrounding AI in the scientific community.
  - Most of the 39 tasks will likely be feasible within the next ten years, showcasing AI's anticipated versatility and rapid advancement. It's cheaper, so it will likely become ubiquitous without a new [[Social contract and jobs]] initiative.
  - Median prediction indicates a 50% chance of achieving High-Level Machine Intelligence by 2047 and Full Automation of Labour, by 2116
  - Strong hints of potential differences in technological development speeds, cultural attitudes, or economic motivations across regions. This suggests incoming legislative arbitrage.
		- [EU’s new AI Act risks hampering innovation, warns Emmanuel Macron (ft.com)](https://www.ft.com/content/9339d104-7b0c-42b8-9316-72226dd4e4c0)
		- [Japan Goes All In: Copyright Doesn't Apply To AI Training | News | Communications of the ACM](https://cacm.acm.org/news/273479-japan-goes-all-in-copyright-doesnt-apply-to-ai-training/fulltext#:~:text=In%20a%20surprising%20move%2C%20Japan%27s%20government%20recently%20reaffirmed,is%20content%20obtained%20from%20illegal%20sites%20or%20otherwise.%22)
		- [China’s plan to judge the safety of generative AI | MIT Technology Review](https://www.technologyreview.com/2023/10/18/1081846/generative-ai-safety-censorship-china/)
  - Broad agreement exists on some future AI traits, like finding unexpected ways to achieve goals, but significant uncertainty remains, especially for traits with sinister implications.
  - Scepticism exists about future AI systems' ability to provide intelligible and truthful explanations of decisions, posing challenges for risk management and bias mitigation.
  - Researchers express substantial concern for various AI-related scenarios, particularly the spread of false information and manipulation of public opinion.
  - A considerable fraction of respondents attribute a non-trivial probability to AI leading to human extinction or severe disempowerment.

				- ### Adco survey of 2,000 executives
					- 41% expected to employ fewer people because of AI
					- 46% would redeploy employees internally if their jobs were impacted by AI
					- 2/3 planned on recruiting people skilled in AI
					- 1/3 would train their existing workforce in AI

				- ### Censuswide survey
					- 68% said they don't have enough understanding of generative AI for their current roles
					- 53% want more training and guidance

		- ### SDXL
			- Higher resolution, better prompt control
			- Will often mess up human bodies due to constrained training
			- More resource intensive
			- Less compatible extensions

		- ### Learning Rules from Sequences (Othello Mamba)
			- Mamba learns rules of Othello from just a sequence of moves, achieving higher board accuracy than OthelloGPT
			- More data efficient, but becomes less accurate as game progresses and requires longer training than same-sized Transformer

		- ### DONE In-Context Training (think ChatGPT memory)
			- DOING [[Gemini]] connected to Google Drive and all you data.
			- DONE Loading data inline on each session gives precise control but can be time-consuming and requires expertise. Alternatively the platforms can manage this for you.
			- DONE Available free with the [[ChatGPT]] tool. Convenient, but you may find it hard to separate business and personal content, and the process is largely a black box.

  - ### **CLIP-Forge**
		- [CLIP-Forge GitHub](https://github.com/autodeskailab/clip-forge) - CLIP Forge is a framework to organise, train, and evaluate CLIP (Contrastive Language–Image Pre-training) models, supporting various training strategies.

  - The tool enables users to train [[machine learning]] models efficiently, especially when dealing with custom datasets that might require adjustments to training procedures.

  - The framework provides a modular structure, allowing users to customise different components such as the dataset loading, model architectures, and [[optimization]] strategies.

  - It offers utilities for [[data management]], including pre-processing and augmentation techniques to improve the model's performance on specific tasks.

  - CLIP Forge contains tools for evaluating the performance of trained models on various downstream tasks, with options for [[visualization]] of the results and comparing different models.

  - The project supports [[research]] tracking and management, allowing users to organise and compare results from different training runs and hyperparameter settings.

  - It offers pre-trained models and example configurations to get users started quickly and demonstrate the capabilities of the framework.

  - The codebase is designed to be extensible, making it easier for [[research]] and practitioners to integrate new features, datasets, and evaluation metrics.

  - It provides mechanisms for saving and loading model checkpoints, which allows for resuming training, fine-tuning, and deploying trained models.

  - The project includes comprehensive documentation and tutorials to help users understand how to use the different features and components of the framework effectively.

  - ### **LION by Toronto AI Lab**
		- [LION](https://nv-tlabs.github.io/LION/) - *   LION (EvoLved sIgn Optimisation) is a new optimisation algorithm designed as an alternative to Adam, intended for training large language models.

  -   LION utilises the sign of the gradient for updates, rather than the gradient itself, leading to more stable and efficient training.

  -   The algorithm employs a momentum mechanism similar to Adam but with a crucial difference in how updates are applied.

  -   LION claims to achieve better generalisation performance than Adam, often with fewer training steps.

  -   The paper offers empirical evidence demonstrating LION's effectiveness across various language modelling tasks and architectures.

  -   The lighter computational overhead of LION compared to Adam allows for training larger models or training existing models more quickly.

  -   The LION algorithm is easy to implement and can be incorporated into existing training pipelines with minimal code changes.

  -   The researchers provide code and pre-trained models to encourage adoption and further [[research]].

  -   LION's stability makes it suitable for training models with mixed precision formats (e.g., FP16), helping to reduce memory usage.

  -   The paper explores the theoretical properties of LION, offering insights into its convergence behaviour and relationship to other optimisation algorithms.

  - ### Hardware
		- **[Trainium3](https://siliconangle.com/2024/12/04/aws-unveils-next-generation-ai-chips-trainium3-graviton5/)**: Amazon's next-generation AI training chip, expected in late 2025.
  - Meta
  - Meta has made significant advancements in AI in 2024 and 2025, with a focus on new hardware, advanced AI models, and enhanced user experiences.

  - ### Privacy Risks
		- The vast datasets used to train general-purpose AI models present significant privacy risks. A key concern is the "memorization" of sensitive personal data from training datasets, which can then be unintentionally reproduced.

  - ### Resampling Methods
		- **Holdout Method (Train / Test Split):** A basic approach to split the dataset into training and testing sets.
			- [Train/Test Split in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html)
		- **Repeated Holdout:** Running the holdout method multiple times to get a better estimate of model performance.
			- [RepeatedKFold in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)
		- **Cross-validation:** A technique for assessing how the results of a statistical analysis will generalize to an independent data set.
			- [Cross-validation in scikit-learn](https://scikit-learn.org/stable/modules/cross_validation.html)

		- #### More like industrial application
		- As the word metaverse has gained in use, so have some traditional usersand researchers in mixed reality switched to use of the term. Siyaev andJo describe an aircraft training metaverse which incorporates ML basedspeech recognition.[[siyaev2021towards]] This class of mixed realitytrainer traditionally finds positive results, but is highly taskspecific.

  - # Wait!
  - Positives. AI is potentially very good at continuous, patient, optimised delivery of education, especially where there is a paucity of skilled teachers. This is a equalising force.
  - Negatives. AI is inherently a closed system, and training people within a closed system which is just a mashup of prior knowledge may have a deleterious impact on the peak creative potential of individuals.
  - Solution. We need to be intentional about a hybrid model, where practitioners bridge the things that AI cannot provide.
  - This is about to be a major new page. It is currently a mess right now but it's next on my list as of Sept 24.
  - {{embed ((666d6535-5da6-4e7c-ae08-624de6a1ee54))}}

  - # Training
  - If using the Fp8 dev Flux model, to get good results make sure and use the fp8_e4m3fn version.
  - Use the lora at about strength of 0.7-.75. Higher strengths will increase likelihood of generating the little details better but also increase chances of unwanted artifacts like messy fingers and other unwanted things. Lowering the strength below 0.7 will increase the cohesion of the image.
  - In comfy for the model sampling flux node make sure and use the mas_shift strength of .5 and base_shift at 0.5 respectively.
  - Use Euler as the sampler and Beta as the scheduler with 25 steps minimum.
  - Higher resolutions like 1024x1400 or 1024x1216 seem to produce best results. Also use 2x3 aspect ratio (portrait) for best results.
  - It was trained on 100 images and manual caption pair's all in "cowboy shot" where the subject is seen from thighs up, so the images generated with this lora will be very biased in that camera shot and angle. A person seen from different angles can be generated successfully with good quality but you need to reduce the strength of the lora to prevent mutations and other cohesion issues for other angles, so play around with the strength of the lora for best results in your use case.
  - This lora was trained on an A100 using the simple tuner training script (props to the dev!). The lora was trained on an fp16 dev base flux model, during training it was using about 27gb worth of VRAM for the following settings. The training speeds are about 2.3 sec/it on the A100. We used prodigy with constant, 64 rank and 64 alpha, bf16, gamma 5. No dropout used, batch size of 1 (batch size 1 yields better results versus using any other batch size).
  - It takes quite a while for the concept to converge decently at about 350 steps per image minimum and 650 steps per image for good results. Lots of tests were performed to converge on the best hyperparameters and this is what we settled on (more testing needed for manual hyperparameters as I expect a large speedup with use of adam8w and such..).
  - Some other notes of interest. We trained on an fp8 flux variant and results were just as good as the fp16 flux model at the cost of 2x convergence speed. That means it now took 700 minimum steps to converge on the subject decently and 1400 steps to converge on a good result. Training on an fp8 flux model took about 16.3gb worth of vram with our settings so I don't see a reason training cant happen on any card that has that VRAM, and possibly with some optimizations maybe could even happen on cards with 16gb of vram for fp8 lora training.

  - # Text Encoder settings (CLIP and T5):
	  train_clip_l = true # or false
	  train_t5 = true # or false
	  clip_learning_rate = 1e-6 # Usually lower than unet LR
	  t5_learning_rate = 1e-6 # Usually lower than unet LR
	  Use code with caution.
	  Toml
	  ComfyUI Workflow for Inference: Use the resulting .safetensors file like the base Flux model. You can also extract LoRAs from the FFT checkpoint with 2kpr's extraction script (or equivalent).

	  3. Training Text Encoders (CLIP and T5):

	  Status: Still experimental and needs careful consideration. Some find it beneficial for improving concept separation and flexibility. Others find it makes little difference or degrades results, depending on the dataset, captions, and task.

	  Software: Currently enabled in Kohya's sd-scripts and Kijai's ComfyUI nodes. 2kpr's trainer will also offer this functionality.

	  LR: Generally much lower than the Unet/transformer LR. Start with 1e-6 for CLIP and even lower for T5 (1e-7 or less). Separate LRs for CLIP and T5 are often required.

	  ComfyUI workflow: Use Kijai's Flux Train node, enabling Train Clip L and/or Train T5. Provide appropriate learning rates in the respective inputs.

	  4. LoRA Merging and Pruning:

	  Merging in ComfyUI: Use two (or more) Lora Loader nodes, followed by a Lora Merge node.

	  Pruning in ComfyUI: Use Kijai's Block Lora Loader node to selectively load and adjust the strength of individual blocks from a LoRA. This can be used to identify which blocks are responsible for desired (or undesired) effects and effectively prune the LoRA by setting unimportant block strengths to 0. Currently, no direct save functionality exists for the pruned LoRA, but merging it with the base model is possible.

	  Merging in Kohya: Use merge_lora.py

	  Alternative Strategy: Fine-tune a LoRA, then merge it into the base model, then fine-tune again.

	  Scaling LoRAs: Use 2kpr's scale_lora.py script to adjust the overall strength of a LoRA. This can be helpful to normalize LoRAs from different trainers or training runs.

	  5. Other Key Tools and Techniques:

	  Captioning: TagGUI locally supports various VLMs (including CogVLM) for improved captioning. Prompt engineering for captioning is important.

	  Background Removal: Use BRIA, InspyreNet, SAM2, or Photoroom Pro for higher-quality masks.

	  Upscaling: Ultimate SD Upscale can be used. Consider generating at your desired resolution directly, as Flux handles high resolutions well.

	  Inpainting: ComfyUI's Inpaint node with appropriate mask generation.

	  Regularization: Experiment with different ratios of captioned vs. uncaptioned and style-varied regularization images. Further research is needed in this area for Flux.

	  Debugging and Monitoring: Use ComfyUI's built-in logging, Tensorboard, and 2kpr's trainer's periodic loss charts.

	  This expanded information should provide a more concrete starting point for fine-tuning Flux 1D. Remember to experiment, document your findings, and share your results with the community. The field is still under active development, so continuous learning and adaptation are key.


	  User
	  can you add in any tips and tricks and prompts?


	  Model
	  83.7s
	  Let's add some prompts, tips, and tricks to fine-tune Flux 1D effectively:

	  Prompts for Captioning (using an LLM like CogVLM):

	  General: "A detailed, objective description of this image, focusing on visual elements only. Avoid subjective interpretations or artistic descriptions."

	  Character Focus: "A detailed description of this character, including their physical attributes, clothing, pose, and expression. The character's name is [character name]."

	  Style Focus: "Describe the artistic style of this image, focusing on lines, colors, composition, and textures. The type of art is [painting/photo/illustration/etc.]. The style is [style name]."

	  Specific Details: You can combine the above with instructions for specific details: "Describe this image. Focus on the character's facial features. The character's name is [character name]."

	  Tips and Tricks for Fine-Tuning:

	  Start Simple, Then Scale: Begin with LoRA and small datasets before moving to FFT and larger datasets. This helps develop intuition and find good starting parameters.

	  Test Extensively: Use a variety of prompts, styles, and resolutions during and after training. Don't rely solely on validation images. Pay close attention to details like anatomy, coherence, and concept bleed.

	  Iterative Approach: Fine-tuning is an iterative process. Train, test, adjust parameters, and retrain. Don't be afraid to experiment.

	  Document Everything: Keep track of your datasets, captions, parameters, and results. This allows for better analysis and reproduction. Version your LoRAs and checkpoints.

	  Community Resources: Follow the Flux fine-tuning communities (Discord, Reddit, etc.) for the latest developments, tips, and shared experiences.

	  Pre-trained Models: Explore existing LoRAs and checkpoints on Civitai and Hugging Face for inspiration and as starting points for your own fine-tuning.

	  Seed Exploration: Even with Flux, seed variation can have a noticeable effect on outputs. Try different seeds to see the range of possibilities with your fine-tuned model.

	  Guidance Scale Tweaking: Experiment with lower guidance scales (2-3) during inference, especially for artistic styles.

	  LoRA Weight Adjustment: Fine-tune the LoRA weight during inference to control its strength and balance it with other LoRAs or concepts.

	  Prompts for Testing Generalization and Flexibility:

	  Likeness:

	  Simple Prompts: "[character name], portrait photo"

	  Style Variations: "[character name], painting by [artist name]" , "[character name], anime style"

	  Complex Prompts: "[character name] riding a unicorn in a cyberpunk city, photorealistic"

	  Negative Prompts: While not directly supported in Flux training, test with negative prompts during inference to see if they work as expected.

	  Style:

	  Basic Prompts: "a woman in a dress, [style name] artstyle"

	  Different Subjects: "a cat, [style name] artstyle", "a spaceship, [style name] artstyle"

	  Complex Scenes: "A group of people in a medieval market, [style name] painting"

	  Multi-Concept: Combine prompts that test each concept individually and together. For example, if you trained a LoRA with a character and a specific object, test with prompts that include only the character, only the object, and both.

	  Specific Prompting Tips for Flux:

	  Two-Word Classes: For style and character LoRAs, use a two-word class to provide more context. Example: "ohwx character name, woman elf" or "ohwx style name, painting artstyle"

	  Descriptive Captions: For complex subjects or scenes, provide short, clear, natural language descriptions focusing on the elements you want Flux to learn.

	  Object and Background Specificity: For styles and characters, if you don't want certain objects or backgrounds to be associated with the LoRA, include them in the captions without the trigger word. This helps prevent overfitting and bleeding.

	  "Unpromptable" Concepts: Flux can struggle with some artistic styles or concepts that are hard to describe with prompts. In these cases, using an IPAdapter (when available) might be a more effective approach.

	  Prompt Engineering: Experiment with different phrasing and prompt structures to see how Flux interprets them. Some concepts might require more specific or descriptive language than others.

	  Leverage Prior Knowledge: Flux has extensive prior knowledge. Start with simple prompts and gradually add detail as needed. See if you can get the desired results without explicitly mentioning every detail.

	  By combining these tips, tricks, and prompts, you'll be well on your way to mastering the art of Flux 1D fine-tuning. Remember, experimentation and community engagement are your best allies in this rapidly evolving field.

  - # NeRFs
  - MobileNeRF: This approach adapts NeRFs for mobile devices by exploiting the polygon rasterization pipeline for efficient neural field rendering. It achieves very fast rendering times (0.016-0.017s) but requires long training times[](https://spectrum.ieee.org/ai-graphics-neural-rendering).
  - MobileR2L: This method uses a full CNN-based neural light field model with a super-resolution model in its second stage. It achieves real-time inference on mobile devices while maintaining high image quality, rendering a 1008x756 image of real 3D scenes in 18.04ms on an iPhone 13[](https://spectrum.ieee.org/ai-graphics-neural-rendering).
  - Instant NGP (Neural Graphics Primitives): Developed by NVIDIA, this technique significantly speeds up the training and rendering of NeRFs, allowing for near-instantaneous scene reconstruction[](https://github.com/weihaox/awesome-neural-rendering/blob/master/docs/INTRODUCTION-AND-SURVEY.md).
  - Plenoxels (Plenoptic Voxels): This method replaces neural networks with a sparse 3D grid of spherical harmonics, enabling faster training and competitive quality compared to NeRFs[](https://github.com/weihaox/awesome-neural-rendering/blob/master/docs/INTRODUCTION-AND-SURVEY.md).
  - NGLOD (Neural Geometric Level of Detail): This approach combines neural implicit representations with explicit geometric representations, allowing for multi-resolution rendering and faster training[](https://arxiv.org/abs/2402.00028).
  - NeRF-MAE (Masked AutoEncoders for NeRFs): This technique applies the concept of masked autoencoders to NeRFs for self-supervised 3D representation learning, potentially improving generalization and efficiency[](https://ideas-ncbr.pl/en/research/neural-rendering/).

  - ### Key Techniques and Tools
		- **DeepSpeed**: [DeepSpeed by Microsoft](https://github.com/microsoft/DeepSpeed) is an advanced deep learning optimization software suite that significantly accelerates the training of deep learning models. It offers various features like model parallelism, gradient accumulation, and sparsity to achieve unprecedented scale and speed. *DeepSpeed is pivotal for researchers and practitioners aiming to push the boundaries of model size and training speed.*
		- **Nvidia DASK**: [Tutorial for distributed computing with GPUs](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/) provides insights into using Nvidia DASK for distributed computing, enhancing the performance of LLMs by leveraging GPU resources more efficiently. *This tutorial is a valuable resource for anyone looking to understand and implement distributed computing with GPUs.*
		- **SWARM Training Paper**: [SWARM: A Paradigm for Distributed Training of LLMs](https://arxiv.org/pdf/2301.11913.pdf) discusses innovative methods for distributed training of large language models, addressing challenges related to scalability and efficiency. *The SWARM approach represents a significant advancement in distributed training techniques, offering insights into overcoming the limitations of traditional training methodologies.*

  - # The Trillion-Dollar Cluster and Beyond
  - ![situationalawareness.pdf](assets/situationalawareness_1717941860620_0.pdf)
  - [WEBPAGE LINK](https://situational-awareness.ai/)
  - This podcast and PDF explores the thesis advanced  Leopold Aschenbrenner, delving into by the trajectory of [[Artificial Intelligence]] and [[Artificial Superintelligence]], within the contexts of [[Hardware and Edge]], [[Energy and Power]], and [[Politics, Law, Privacy]].
		- **Compute Requirements Skyrocketing:** The conversation begins with a stark examination of the escalating computational resources necessary for training advanced AI models. They reference GPT-4's estimated $500 million training cluster as a benchmark, projecting a future where trillion-dollar clusters become commonplace by 2030, demanding power equivalent to significant portions of national grids.
		- **Unlocking the Power of Test-Time Compute:** While training compute garners most attention, the guests emphasise the equally crucial role of "test-time compute." They argue that current AI models, despite their capabilities, operate far below their potential cognitive capacity. Analogous to human "System 2" thinking, they believe training AI to think strategically over millions of tokens, simulating months of cognitive work, will be essential to unlocking breakthroughs. This suggests AI systems that can plan, debug, iterate, and reason far beyond current capabilities.

  - ### Efficiency
		- LLaMA-3 models are notably smaller than comparable LLMs. They were more efficient to train.
		- Sizes are currently:
			- 7B parameters, outperforming the previous 70B models on some metrics
			- 70B parameters, approaching or exceeding some closed source online models
			- 400B parameters (still in training), expected to outperform SOTA models
		- This efficiency allows them to run on less powerful hardware, broadening accessibility for researchers.
			- They can be fine tuned more easily.

  - ### The Fifth Paradigm Explained
		- The fifth paradigm involves using simulators to generate synthetic training data for deep learning systems.
		- These trained systems act as "emulators," providing faster predictions compared to traditional simulations.
		- Example: Predicting molecule properties by training a model on data from Schrödinger's equation simulations.
		- This method can achieve three-to-four-order-of-magnitude acceleration, making it highly disruptive.


  - This Microsoft  LinkedIn report contains very interesting findings ![2024_Work_Trend_Index_Annual_Report_663d45200a4ad.pdf](assets/2024_Work_Trend_Index_Annual_Report_663d45200a4ad_1715414237615_0.pdf)
  - | Statistic | Value |
  |-----------|-------|
  | Percentage of global knowledge workers using generative AI | 75% |
  | Percentage of AI users who started using it less than 6 months ago | 46% |
  | Percentage of AI users who say it helps them save time | 90% |
  | Percentage of AI users who say it helps them focus on their most important work | 85% |
  | Percentage of AI users who say it helps them be more creative | 84% |
  | Percentage of AI users who say it helps them enjoy their work more | 83% |
  | Percentage of emails read in under 15 seconds | 85% |
  | Ratio of emails read to emails sent | 4 to 1 |
  | Percentage of time Microsoft 365 users spend on emails, chats, and meetings | 60% |
  | Percentage of time Microsoft 365 users spend in creation apps like Word and PowerPoint | 40% |
  | Percentage of leaders who agree their company needs to adopt AI to stay competitive | 79% |
  | Percentage of leaders who worry about quantifying the productivity gains of AI | 59% |
  | Percentage of leaders who worry their organization's leadership lacks a plan and vision to implement AI | 60% |
  | Percentage of AI users who are bringing their own AI tools to work (BYOAI) | 78% |
  | Percentage of AI users at small and medium-sized companies who are bringing their own AI to work | 80% |
  | Percentage of AI users reluctant to admit using AI for their most important tasks | 52% |
  | Percentage of AI users who worry using AI on important work tasks makes them look replaceable | 53% |
  | Percentage of people who struggle with the pace and volume of work | 68% |
  | Percentage of people who feel burned out | 46% |
  | Increase in hiring for technical AI talent in the past eight years | 323% |
  | Percentage of leaders who wouldn't hire someone without AI skills | 66% |
  | Percentage of leaders who would rather hire a less experienced candidate with AI skills than a more experienced candidate without them | 71% |
  | Percentage of leaders who say early-in-career talent will be given greater responsibilities with AI | 77% |
  | Percentage of US executives not currently investing in AI tools or products for employees | 45% |
  | Percentage of AI users globally who have received AI training from their company | 39% |
  | Percentage of companies planning to offer training on generative AI this year | 25% |
  | Percentage of leaders concerned about having enough talent to fill roles in the year ahead | 55% |
  | Percentage of cybersecurity, engineering, and creative design leaders concerned about having enough talent | 60%+ |
  | Percentage of people who worry AI will replace their job | 45% |
  | Percentage of people considering quitting in the year ahead | 46% |
  | Increase in job applications per role in the US since last fall | 14% |
  | Percentage of US professionals considering a new job this year | 85% |
  | Projected change in skills globally by 2030 (from 2016) | 50% |
  | Projected acceleration of skills change due to generative AI | 68% |
  | Percentage of this year's LinkedIn Jobs on the Rise in the US that didn't exist 20 years ago | 68% |
  | Percentage of recruiters already creating new roles tied to generative AI usage | 12% |
  | Growth of Head of AI roles over the past five years | 3x |
  | Growth of Head of AI roles in 2023 | 28% |
  | Increase in use of LinkedIn Learning courses to build AI aptitude among non-technical professionals in the past six months | 160% |
  | Increase in LinkedIn members globally adding AI skills to their profiles | 142x |
  | Percentage of people who say they need AI skills to remain competitive in the job market | 76% |
  | Percentage of people who say AI can help them get promoted faster | 69% |
  | Percentage of people who say AI skills will broaden their job opportunities | 79% |
  | Percentage of recruiters updating job descriptions to reflect generative AI usage in the role | 22% |
  | Additional application growth for LinkedIn job posts mentioning artificial intelligence or generative AI over the past two years | 17% |
  | Percentage of early-in-career and individual contributor employees who said AI access would influence their choice of employer | 54% |
  | Percentage of AI power users who say AI makes their overwhelming workload more manageable | 92% |
  | Percentage of AI power users who say AI boosts their creativity | 92% |
  | Percentage of AI power users who say AI helps them focus on the most important work | 93% |
  | Percentage of AI power users who say AI helps them feel more motivated | 91% |
  | Percentage of AI power users who say AI helps them enjoy work more | 91% |
  | How much more likely AI power users are to frequently experiment with different ways of using AI compared to other respondents | 68% |
  | How much more likely AI power users are to frequently pause before a task and ask if AI can help compared to other respondents | 49% |
  | How much more likely AI power users are to keep trying if they don't get the perfect AI response the first time compared to other respondents | 30% |
  | How much more likely AI power users are to research and try new AI prompts compared to other respondents | 56% |
  | Percentage of AI power users who use AI to start their day | 85% |
  | Percentage of AI power users who use AI to get ready for the following workday | 85% |
  | How much more likely AI power users are to use AI to catch up on missed meetings compared to other respondents | 56% |
  | How much more likely AI power users are to use AI to analyze information compared to other respondents | 51% |
  | How much more likely AI power users are to use AI to design visual content compared to other respondents | 49% |
  | How much more likely AI power users are to use AI to interact with customers compared to other respondents | 49% |
  | How much more likely AI power users are to use AI to brainstorm or problem-solve compared to other respondents | 37% |
  | How much more likely AI power users are to redesign their business processes and workflows with AI compared to other respondents | 66% |
  | How much more likely AI power users are to hear from their CEO about the importance of using generative AI at work compared to other respondents | 61% |
  | How much more likely AI power users are to hear from the leader of their department about the importance of using generative AI at work compared to other respondents | 40% |
  | How much more likely AI power users are to hear from their manager's manager about the importance of using generative AI at work compared to other respondents | 42% |
  | How much more likely AI power users are to receive encouragement from leadership to consider how AI can transform their function compared to other respondents | 53% |
  | How much more likely AI power users are to say their company encourages innovation compared to other respondents | 18% |
  | How much more likely AI power users are to say their company has a virtual learning program compared to other respondents | 37% |
  | How much more likely AI power users are to have received training on prompt writing compared to other respondents | 37% |
  | How much more likely AI power users are to have received training on how to use AI for their role or function compared to other respondents | 35% |
  | How much more likely AI power users are to have received training on specific AI use cases such as writing or analyzing data compared to other respondents | 32% |

  - ### Tools and Frameworks for Quantization
		- **TensorFlow Lite**: Provides tools for post-training quantization and quantization-aware training.
	 - [TensorFlow Lite Guide](https://www.tensorflow.org/lite)
		- **PyTorch Quantization**: Supports dynamic quantization, static quantization, and quantization-aware training.
	 - [PyTorch Quantization](https://pytorch.org/docs/stable/quantization.html)
		- **ONNX Runtime**: Offers support for quantized models, enabling optimized inference on different hardware.
	 - [ONNX Runtime Quantization](https://onnxruntime.ai/docs/performance/quantization.html)

		- #### Training, Simulation, and Education
		- The modular open-source system can be applied to various training,
		   simulation, and education scenarios. By integrating AI and generative ML
		   technologies, these tools can provide personalized learning experiences
		   and create realistic simulations that cater to different learning styles
		   and requirements.

		- ##### Visual Training Support Systems
		- The infrastructure could be further extended to visual training support
		   systems using low-cost, low-power components. These systems could
		   provide interactive, immersive learning experiences for community
		   members, helping them better understand the local ecosystem and develop
		   skills in environmental monitoring and management.

		- ##### Capacity Building and Local Empowerment
		- An essential aspect of this initiative is building capacity and
		   empowering local communities to take ownership of their environment and
		   resources. By providing training, resources, and support, the proposed
		   infrastructure can help communities develop the skills and knowledge
		   needed to manage their ecosystems effectively.

		   Furthermore, the integration of digital tools and technologies can
		   promote digital inclusion and bridge the digital divide, giving isolated
		   communities access to valuable information and resources while fostering
		   a sense of global connectedness and collaboration.

  - ### Mid Journey have said:
		- **Midjourney Video** "will not be like any other AI video products that are currently available out there and will be 10X better."
			- **David Holz**: “*MidJourney video may not be consistently making what you want, but the quality will be consistently good by default.*”
		- **Video Training**: The Midjourney team will start to train the video/animation model, which will come before 3D.
			- Already have all the data needed to train the model.
		- **3D:** needs more data to train, so it’s a bit slower than expected.
		- {{video https://youtu.be/LY3B0d623wA}}

  - ### Hinton
		- ![2024-10-12 08-54-13.mp4](assets/2024-10-12_08-54-13_1728720039197_0.mp4){:width 100}
  - ![](https://jnnnthnn.com/leike.png){:width 600}
  - A survey of 2778 AI researchers, to assess the pace of AI progress and the broader societal implications. The increased participation in this third iteration points to growing importance and concern surrounding AI in the scientific community.
  - Most of the 39 tasks will likely be feasible within the next ten years, showcasing AI's anticipated versatility and rapid advancement. It's cheaper, so it will likely become ubiquitous without a new [[Social contract and jobs]] initiative.
  - Median prediction indicates a 50% chance of achieving High-Level Machine Intelligence by 2047 and Full Automation of Labour, by 2116
  - Strong hints of potential differences in technological development speeds, cultural attitudes, or economic motivations across regions. This suggests incoming legislative arbitrage.
		- [EU’s new AI Act risks hampering innovation, warns Emmanuel Macron (ft.com)](https://www.ft.com/content/9339d104-7b0c-42b8-9316-72226dd4e4c0)
		- [Japan Goes All In: Copyright Doesn't Apply To AI Training | News | Communications of the ACM](https://cacm.acm.org/news/273479-japan-goes-all-in-copyright-doesnt-apply-to-ai-training/fulltext#:~:text=In%20a%20surprising%20move%2C%20Japan%27s%20government%20recently%20reaffirmed,is%20content%20obtained%20from%20illegal%20sites%20or%20otherwise.%22)
		- [China’s plan to judge the safety of generative AI | MIT Technology Review](https://www.technologyreview.com/2023/10/18/1081846/generative-ai-safety-censorship-china/)
  - Broad agreement exists on some future AI traits, like finding unexpected ways to achieve goals, but significant uncertainty remains, especially for traits with sinister implications.
  - Scepticism exists about future AI systems' ability to provide intelligible and truthful explanations of decisions, posing challenges for risk management and bias mitigation.
  - Researchers express substantial concern for various AI-related scenarios, particularly the spread of false information and manipulation of public opinion.
  - A considerable fraction of respondents attribute a non-trivial probability to AI leading to human extinction or severe disempowerment.

				- ### Adco survey of 2,000 executives
					- 41% expected to employ fewer people because of AI
					- 46% would redeploy employees internally if their jobs were impacted by AI
					- 2/3 planned on recruiting people skilled in AI
					- 1/3 would train their existing workforce in AI

				- ### Censuswide survey
					- 68% said they don't have enough understanding of generative AI for their current roles
					- 53% want more training and guidance

		- ### SDXL
			- Higher resolution, better prompt control
			- Will often mess up human bodies due to constrained training
			- More resource intensive
			- Less compatible extensions

		- ### Learning Rules from Sequences (Othello Mamba)
			- Mamba learns rules of Othello from just a sequence of moves, achieving higher board accuracy than OthelloGPT
			- More data efficient, but becomes less accurate as game progresses and requires longer training than same-sized Transformer

		- ### DONE In-Context Training (think ChatGPT memory)
			- DOING [[Gemini]] connected to Google Drive and all you data.
			- DONE Loading data inline on each session gives precise control but can be time-consuming and requires expertise. Alternatively the platforms can manage this for you.
			- DONE Available free with the [[ChatGPT]] tool. Convenient, but you may find it hard to separate business and personal content, and the process is largely a black box.

  - ### **CLIP-Forge**
		- [CLIP-Forge GitHub](https://github.com/autodeskailab/clip-forge) - CLIP Forge is a framework to organise, train, and evaluate CLIP (Contrastive Language–Image Pre-training) models, supporting various training strategies.

  - The tool enables users to train [[machine learning]] models efficiently, especially when dealing with custom datasets that might require adjustments to training procedures.

  - The framework provides a modular structure, allowing users to customise different components such as the dataset loading, model architectures, and [[optimization]] strategies.

  - The unsupervised training eliminates the need for expensive and scarce paired text-3D data, making the process more scalable.
  - The proposed method shows promising results in creating plausible 3D meshes from textual prompts, outperforming existing baselines in terms of visual quality and text alignment, using metrics such as CLIP score.
  - The authors demonstrate the ability to edit the generated 3D meshes by modifying the input text description, allowing for control over the shape and colour of the generated objects.

  - ### Resampling Methods
		- **Holdout Method (Train / Test Split):** A basic approach to split the dataset into training and testing sets.
		- **Repeated Holdout:** Running the holdout method multiple times to get a better estimate of model performance.
			- [GridSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
		- **Random Search:** A search over a specified parameter distribution.
			- [RandomizedSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

  - # What we can expect
  - The potential of AI to dominate warfare in the next decade, exacerbating issues of disinformation and misinformation.
  - The accessibility of AI tools for creating realistic content, enhancing the capabilities of bad actors in misinformation campaigns.
  - The critical need for investment in data infrastructure and preparation to counter the threats posed by AI in warfare.
  - The concept of deterrence in military thinking and how it might evolve with the advent of AI technologies.
  - The importance of data as a new form of ammunition in AI-driven warfare.
  - The mission of the speaker and like-minded technologists to leverage AI for improving national security and maintaining global stability.
  - The urgent call for more technologists to understand the critical nature of the current era and commit to supporting national security efforts.
  - Swarms of lethal drones equipped with facial recognition technology.
  - Unmanned armed robots that are nearly impossible to defeat.
		- {{video https://www.youtube.com/watch?v=KX0ji1sAXl8}}
  - Autonomous fighter jets capable of supersonic speeds and enduring greater gravitational forces than human pilots.
  - Cyberattacks aimed at disabling critical port infrastructure.
  - Disinformation campaigns and deepfakes that can manipulate presidential elections.
  - The reluctance of the U.S. tech industry to engage in government contracts, hindering AI advancements in defence.
  - China demands signoff and approval on all new [[Large Language Models]]
  - USA invokes defence production act to force cloud providers to monitor training, and asserts all USA training should notify the pentagon. [OpenAI and Other Tech Giants Will Have to Warn the US Government When They Start New AI Projects | WIRED](https://www.wired.com/story/openai-tech-giants-us-government-ai-projects/)
  - ```text
	  "A new Chinese study claims that machine gun-armed robot dogs are as accurate as trained human marksmen. 
	  “The urban landscape, with its maze of intersecting streets and towering edifices packed tightly together, 
	  poses unique challenges for unmanned combat platforms. These platforms must negotiate unstructured terrain 
	  and execute intricate actions such as maneuvering, scaling, and leaping – rendering traditional wheeled and 
	  tracked designs inadequate,” added the team."

  - ### Emergence in Other Domains**
  - **Example:** Imagine training an AI to perform modular addition. This involves taking two numbers, adding them together, and then dividing by a third number, taking the remainder. (e.g., 5 + 12 modulo 12 = 0; 17 + 8 modulo 10 = 5). Initially, the AI might do well on the training data but struggle with new examples. This is a classic case of overfitting.
  - **Significance:** This "grokking" phenomenon suggests that AI systems can go beyond simply memorizing examples and truly understand the underlying principles. This ability to generalize knowledge is crucial for developing AI systems that can solve real-world problems.

		- #### More like industrial application
		- As the word metaverse has gained in use, so have some traditional usersand researchers in mixed reality switched to use of the term. Siyaev andJo describe an aircraft training metaverse which incorporates ML basedspeech recognition.[[siyaev2021towards]] This class of mixed realitytrainer traditionally finds positive results, but is highly taskspecific.

  - # Product research programme
  - I'm working on an InnovateUK-funded programme in a lab in MediaCity. We have money to spend on training people.
  - You have followed this link because you've been specifically invited to [this WhatsApp group](https://chat.whatsapp.com/KwuFsntcsFdHYtPOjnt8EE), where we can lightly kick ideas about. You don't need to say anything in the group. You can come and go as you please. It's mainly friends and family at this stage. You likely know everyone in the room a bit, but anyone can invite anyone they see fit, so bear in mind it's a public forum to a degree.
  - I want to deliver pragmatic, useful tools for teachers, which save time on the organising and admin side of the job, freeing up more time for work-life balance. I have a lot of tricks but I don't know how to apply them to your domains.
  - I am going to run a short and brisk seminar series. The sessions will be 45 minutes, likely starting at 4pm. Likely just four or five of them, on a weekly cadence. Probably Nov/Dec. Might be more early next year.
  - Nothing is yet decided; I want to find the most convenient fit for teachers at all levels.
  - Once the programme is developed, you'd be welcome to join the formal sessions delivered from the lab. You can promote them in your institutions as something you have had a hand in building, and disseminate the online material as widely as you like.
  - If there's appetite, we might push to physical sessions and there's potentially a bit of (self-reporting into your institution) clout to be had as the council and unis get more involved.
  - Overview of specific tools.
  - Introduction to techniques.

  - # Training
  - If using the Fp8 dev Flux model, to get good results make sure and use the fp8_e4m3fn version.
  - Use the lora at about strength of 0.7-.75. Higher strengths will increase likelihood of generating the little details better but also increase chances of unwanted artifacts like messy fingers and other unwanted things. Lowering the strength below 0.7 will increase the cohesion of the image.
  - In comfy for the model sampling flux node make sure and use the mas_shift strength of .5 and base_shift at 0.5 respectively.
  - Use Euler as the sampler and Beta as the scheduler with 25 steps minimum.
  - Higher resolutions like 1024x1400 or 1024x1216 seem to produce best results. Also use 2x3 aspect ratio (portrait) for best results.
  - It was trained on 100 images and manual caption pair's all in "cowboy shot" where the subject is seen from thighs up, so the images generated with this lora will be very biased in that camera shot and angle. A person seen from different angles can be generated successfully with good quality but you need to reduce the strength of the lora to prevent mutations and other cohesion issues for other angles, so play around with the strength of the lora for best results in your use case.
  - This lora was trained on an A100 using the simple tuner training script (props to the dev!). The lora was trained on an fp16 dev base flux model, during training it was using about 27gb worth of VRAM for the following settings. The training speeds are about 2.3 sec/it on the A100. We used prodigy with constant, 64 rank and 64 alpha, bf16, gamma 5. No dropout used, batch size of 1 (batch size 1 yields better results versus using any other batch size).
  - It takes quite a while for the concept to converge decently at about 350 steps per image minimum and 650 steps per image for good results. Lots of tests were performed to converge on the best hyperparameters and this is what we settled on (more testing needed for manual hyperparameters as I expect a large speedup with use of adam8w and such..).
  - Some other notes of interest. We trained on an fp8 flux variant and results were just as good as the fp16 flux model at the cost of 2x convergence speed. That means it now took 700 minimum steps to converge on the subject decently and 1400 steps to converge on a good result. Training on an fp8 flux model took about 16.3gb worth of vram with our settings so I don't see a reason training cant happen on any card that has that VRAM, and possibly with some optimizations maybe could even happen on cards with 16gb of vram for fp8 lora training.

  - ### Key Techniques and Tools
		- **DeepSpeed**: [DeepSpeed by Microsoft](https://github.com/microsoft/DeepSpeed) is an advanced deep learning optimization software suite that significantly accelerates the training of deep learning models. It offers various features like model parallelism, gradient accumulation, and sparsity to achieve unprecedented scale and speed. *DeepSpeed is pivotal for researchers and practitioners aiming to push the boundaries of model size and training speed.*
		- **Nvidia DASK**: [Tutorial for distributed computing with GPUs](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/) provides insights into using Nvidia DASK for distributed computing, enhancing the performance of LLMs by leveraging GPU resources more efficiently. *This tutorial is a valuable resource for anyone looking to understand and implement distributed computing with GPUs.*
		- **SWARM Training Paper**: [SWARM: A Paradigm for Distributed Training of LLMs](https://arxiv.org/pdf/2301.11913.pdf) discusses innovative methods for distributed training of large language models, addressing challenges related to scalability and efficiency. *The SWARM approach represents a significant advancement in distributed training techniques, offering insights into overcoming the limitations of traditional training methodologies.*

  - ### Tools and Frameworks for Quantization
		- **TensorFlow Lite**: Provides tools for post-training quantization and quantization-aware training.
	 - [TensorFlow Lite Guide](https://www.tensorflow.org/lite)
		- **PyTorch Quantization**: Supports dynamic quantization, static quantization, and quantization-aware training.

		- #### 2️⃣ Deep Learning
		- **Description**: Involves training large neural networks.
		- **Explain**: Larger scale engineering of neural nets, to solve much harder problems.
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)

		- #### Training, Simulation, and Education
		- The modular open-source system can be applied to various training,
		   The open-source system can be adapted to serve various industries,
		   making remote collaboration more efficient and inclusive.

  - ### Runway ML
		- [twitter link to the render loading below](https://twitter.com/bennash/status/1746188870679400543)
		- **Midjourney Video** "will not be like any other AI video products that are currently available out there and will be 10X better."
			- **David Holz**: “*MidJourney video may not be consistently making what you want, but the quality will be consistently good by default.*”
		- **Video Training**: The Midjourney team will start to train the video/animation model, which will come before 3D.
			- Already have all the data needed to train the model.
		- **3D:** needs more data to train, so it’s a bit slower than expected.
		- {{video https://youtu.be/LY3B0d623wA}}

				- ### Adco survey of 2,000 executives
					- 41% expected to employ fewer people because of AI
					- 46% would redeploy employees internally if their jobs were impacted by AI
					- 2/3 planned on recruiting people skilled in AI
					- 1/3 would train their existing workforce in AI

				- ### Censuswide survey
					- 68% said they don't have enough understanding of generative AI for their current roles
					- 53% want more training and guidance

		- ### DONE In-Context Training (think ChatGPT memory)
			- DOING [[Gemini]] connected to Google Drive and all you data.
			- DONE Loading data inline on each session gives precise control but can be time-consuming and requires expertise. Alternatively the platforms can manage this for you.
			- DONE Available free with the [[ChatGPT]] tool. Convenient, but you may find it hard to separate business and personal content, and the process is largely a black box.

  - ### **Point·E System**
  -   The lighter computational overhead of LION compared to Adam allows for training larger models or training existing models more quickly.

  -   The LION algorithm is easy to implement and can be incorporated into existing training pipelines with minimal code changes.

  -   The researchers provide code and pre-trained models to encourage adoption and further [[research]].

  -   LION's stability makes it suitable for training models with mixed precision formats (e.g., FP16), helping to reduce memory usage.

  -   The paper explores the theoretical properties of LION, offering insights into its convergence behaviour and relationship to other optimisation algorithms.

  - ### Resampling Methods
		- **Holdout Method (Train / Test Split):** A basic approach to split the dataset into training and testing sets.
		- **Repeated Holdout:** Running the holdout method multiple times to get a better estimate of model performance.
			- [GridSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
		- **Random Search:** A search over a specified parameter distribution.
			- [RandomizedSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

  - ### Emergence in Other Domains**
  - **Example:** Imagine training an AI to perform modular addition. This involves taking two numbers, adding them together, and then dividing by a third number, taking the remainder. (e.g., 5 + 12 modulo 12 = 0; 17 + 8 modulo 10 = 5). Initially, the AI might do well on the training data but struggle with new examples. This is a classic case of overfitting.
  - **Significance:** This "grokking" phenomenon suggests that AI systems can go beyond simply memorizing examples and truly understand the underlying principles. This ability to generalize knowledge is crucial for developing AI systems that can solve real-world problems.

  - # Product research programme
  - I'm working on an InnovateUK-funded programme in a lab in MediaCity. We have money to spend on training people.
  - Workshop 1 – Prompting techniques.

  - # Training
  - If using the Fp8 dev Flux model, to get good results make sure and use the fp8_e4m3fn version.
  - Use the lora at about strength of 0.7-.75. Higher strengths will increase likelihood of generating the little details better but also increase chances of unwanted artifacts like messy fingers and other unwanted things. Lowering the strength below 0.7 will increase the cohesion of the image.
  - In comfy for the model sampling flux node make sure and use the mas_shift strength of .5 and base_shift at 0.5 respectively.
  - Use Euler as the sampler and Beta as the scheduler with 25 steps minimum.
  - Higher resolutions like 1024x1400 or 1024x1216 seem to produce best results. Also use 2x3 aspect ratio (portrait) for best results.
  - It was trained on 100 images and manual caption pair's all in "cowboy shot" where the subject is seen from thighs up, so the images generated with this lora will be very biased in that camera shot and angle. A person seen from different angles can be generated successfully with good quality but you need to reduce the strength of the lora to prevent mutations and other cohesion issues for other angles, so play around with the strength of the lora for best results in your use case.
  - This lora was trained on an A100 using the simple tuner training script (props to the dev!). The lora was trained on an fp16 dev base flux model, during training it was using about 27gb worth of VRAM for the following settings. The training speeds are about 2.3 sec/it on the A100. We used prodigy with constant, 64 rank and 64 alpha, bf16, gamma 5. No dropout used, batch size of 1 (batch size 1 yields better results versus using any other batch size).
  - It takes quite a while for the concept to converge decently at about 350 steps per image minimum and 650 steps per image for good results. Lots of tests were performed to converge on the best hyperparameters and this is what we settled on (more testing needed for manual hyperparameters as I expect a large speedup with use of adam8w and such..).
  - Some other notes of interest. We trained on an fp8 flux variant and results were just as good as the fp16 flux model at the cost of 2x convergence speed. That means it now took 700 minimum steps to converge on the subject decently and 1400 steps to converge on a good result. Training on an fp8 flux model took about 16.3gb worth of vram with our settings so I don't see a reason training cant happen on any card that has that VRAM, and possibly with some optimizations maybe could even happen on cards with 16gb of vram for fp8 lora training.

  - # What to use and when
  - **Deploy Pre-trained Models:**
		- If API solutions are insufficient due to privacy, cost, or latency issues, consider deploying a generic, pre-trained model (like MixL or LLaMA) behind your own API.
		- **DeepSpeed**: [DeepSpeed by Microsoft](https://github.com/microsoft/DeepSpeed) is an advanced deep learning optimization software suite that significantly accelerates the training of deep learning models. It offers various features like model parallelism, gradient accumulation, and sparsity to achieve unprecedented scale and speed. *DeepSpeed is pivotal for researchers and practitioners aiming to push the boundaries of model size and training speed.*
		- **Nvidia DASK**: [Tutorial for distributed computing with GPUs](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/) provides insights into using Nvidia DASK for distributed computing, enhancing the performance of LLMs by leveraging GPU resources more efficiently. *This tutorial is a valuable resource for anyone looking to understand and implement distributed computing with GPUs.*
		- **SWARM Training Paper**: [SWARM: A Paradigm for Distributed Training of LLMs](https://arxiv.org/pdf/2301.11913.pdf) discusses innovative methods for distributed training of large language models, addressing challenges related to scalability and efficiency. *The SWARM approach represents a significant advancement in distributed training techniques, offering insights into overcoming the limitations of traditional training methodologies.*

  - ### Drug Discovery Case Study
		- Microsoft collaborated with the Global Health Drug Discovery Institute (GHDDI) and the Gates Foundation on molecules to combat tuberculosis and coronaviruses.
		- The molecule was synthesised and tested at GHDDI, confirming its properties.
			- Training models to predict binding affinity and protein interactions is a challenging task. Overfitting is a common issue, where models perform well on training data but fail to generalize to new data. Proper data splitting based on sequence and structural similarity is crucial to ensure the model's ability to generalize to unseen data. This is particularly challenging for protein interaction models, where similar sequences might be present in both training and testing sets, leading to overfitting and poor generalization.
			- These advanced AI models can be integrated into practical workflows for drug discovery and protein engineering. For example, to design a protein inhibitor, the workflow may involve identifying a problematic protein-protein interaction, extracting the interaction motif using RF Diffusion, scaffolding a new protein structure incorporating the motif, optimizing the structure using Partial Diffusion and Ligand and PNN, and validating the interaction using AlphaFold Multimer.
			- The speed and efficiency of these models allow for rapid iteration and generation of many potential candidates with high accuracy and effectiveness. Hundreds or thousands of backbones can be designed, and hundreds or thousands of sequences can be designed for each backbone using Ligand and PNN in a matter of minutes. When synthesized and tested, these designed proteins often demonstrate high thermal stability, specificity, and binding affinity.

  - #### [Overview of GGUF quantization methods : LocalLLaMA (reddit.com)](https://www.reddit.com/r/LocalLLaMA/comments/1ba55rj/overview_of_gguf_quantization_methods/)
  - **Quantization:**
		- Rounding of weights and activations to lower precision representation.
		- **Example:**

		  ```
		  Quantized Weight = Round(Original Weight / Scale)
		  ```
  - **Binary Quantization:**
  - **Quantization-Aware Training (QAT):**
		- Integrate quantization effects into the training process for smoother transitions and less accuracy loss.

		  **Quantization Schemes**
  - Often requires integer math operations, leading to computational efficiency gains.
		- Real-time applications
		- Resource-constrained environments

  - ### Neural Networks and Deep Learning id:: 659a9232-2320-494a-b922-968029718ad5
		- **Description**: Involves training large neural networks.
		- **Explain**: Larger scale engineering of neural nets, to solve much harder problems.
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)
			- **Explain**: Like two brains, one creating art and the other judging it, helping each other improve.
			- **Paper**: [Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/8253599?)

  - ### Runway ML
		- [twitter link to the render loading below](https://twitter.com/bennash/status/1746188870679400543)
		- **Midjourney Video** "will not be like any other AI video products that are currently available out there and will be 10X better."
			- **David Holz**: “*MidJourney video may not be consistently making what you want, but the quality will be consistently good by default.*”
		- **Video Training**: The Midjourney team will start to train the video/animation model, which will come before 3D.
			- Already have all the data needed to train the model.
		- **3D:** needs more data to train, so it’s a bit slower than expected.
		- {{video https://youtu.be/LY3B0d623wA}}
			- {{tweet https://twitter.com/skyglassapp/status/1712599252575412474}}

				- ### Adco survey of 2,000 executives
					- 41% expected to employ fewer people because of AI
					- 46% would redeploy employees internally if their jobs were impacted by AI
					- 2/3 planned on recruiting people skilled in AI
					- 1/3 would train their existing workforce in AI

				- ### Censuswide survey
					- 68% said they don't have enough understanding of generative AI for their current roles
					- 53% want more training and guidance

		- ## Images
			- [lama image cleanup](https://github.com/Sanster/lama-cleaner)
			- [Simple stock image generator](https://stockimg.ai/)
			- [Patterned: Generates royalty-free patterns.](https://www.patterned.ai/)
			- [Cleanup.picture: Removes objects, defects, people or text from your images.](https://cleanup.pictures/)
			- [GitHub kanewallmann/Dreambooth-Stable-Diffusion: Implementation of Dreambooth with Stable Diffusion (tweaks focused on training faces)](https://github.com/kanewallmann/dreambooth-stable-diffusion)
			- [GitHub sedthh/pyxelate: Python class that generates pixel art from images (other)](https://github.com/sedthh/pyxelate)
			- [GitHub upscayl/upscayl: Free and Open Source AI Image Upscaler for Linux, MacOS and Windows built with Linux-First philosophy. (other)](https://github.com/upscayl/upscayl)
			- [GitHub YuxinWenRick/hard-prompts-made-easy: Contribute to YuxinWenRick/hard-prompts-made-easy development by creating an account on GitHub.](https://github.com/YuxinWenRick/hard-prompts-made-easy)
			- [SD model mixer](https://github.com/wkpark/sd-webui-model-mixer)
			- Textual Inversion character creation [tutorials/consistent_character_embedding/README.md at main · BelieveDiffusion/tutorials (github.com)](https://github.com/BelieveDiffusion/tutorials/blob/main/consistent_character_embedding/README.md)
			- [%3 e](https://github.com/nitrosocke/dreambooth-training-guide/blob/main/README.md#how-to-fine-tune-stable-diffusion-20%22/%3E)
			- [AI Creating 'Art' Is An Ethical And [[Copyright]] Nightmare](https://kotaku.com/ai-art-dall-e-midjourney-stable-diffusion-[[copyright]]-1849388060)
			- [CompVis/stable-diffusion: A latent text-to-image diffusion model](https://github.com/CompVis/stable-diffusion)
			- [Consistency in Stable Diffusion Definitive Guide to Having Multiple Faces of the Same Character](https://www.youtube.com/watch?v=Ig1S2guCfKM%22%2F%3E)
			- [From the StableDiffusion community on Reddit](https://www.reddit.com/r/StableDiffusion/comments/132rcou/30_stable_diffusion_tutorials_automatic1111_web)

  - ## Mixture of Experts (MoE) Architectures
			- Integrating Mamba with other architectural advances (e.g., memory tokens)
		- Potential for transformative impact, especially in biology and vision applications
		- Approaches:
			- U-Mamba (U-Mamba): Hybrid CNN-SSM architecture outperforming CNN and Transformers in biomedical image segmentation
			- Swin-UMamba (Swin-UMamba): Combines Mamba with ImageNet pre-training, outperforms U-Mamba
			- Turning images into sequences is crucial, can be done through multi-scan approaches
		- Major force in frontier models (GPT-4, Gemini 1.5)
		- MoE-Mamba and BlackMamba demonstrate MoE's effectiveness with Mamba
		- Open questions around scaling and infrastructure requirements for large-scale MoE-Mamba models
  - Applications:
		- KANs show promise in image processing, speech recognition, and financial modeling[](https://theaiinsider.tech/2024/05/27/what-are-kolmogorov-arnold-networks-a-guide-to-what-might-be-the-next-big-thing-in-artificial-intelligence/).
		- They have been used to help scientists (re)discover mathematical and physical laws[](https://www.reddit.com/r/MachineLearning/comments/1chrafb/r_kan_kolmogorovarnold_networks/).
  - Challenges:
		- KANs are more complex to design and implement than traditional neural networks[](https://theaiinsider.tech/2024/05/27/what-are-kolmogorov-arnold-networks-a-guide-to-what-might-be-the-next-big-thing-in-artificial-intelligence/).
		- They require specialized knowledge and are not yet widely adopted[](https://theaiinsider.tech/2024/05/27/what-are-kolmogorov-arnold-networks-a-guide-to-what-might-be-the-next-big-thing-in-artificial-intelligence/).
		- Training speed is currently slower (about 10 times) compared to MLPs of the same size[](https://www.reddit.com/r/MachineLearning/comments/1chrafb/r_kan_kolmogorovarnold_networks/).
  - Implementation:
		- A Python library called "pykan" is available for implementing KANs[](https://www.reddit.com/r/MachineLearning/comments/1chrafb/r_kan_kolmogorovarnold_networks/)

		  4

		  .

		  While KANs show promising results and potential advantages over traditional neural networks, they are still in the early stages of development and research. Further studies and real-world applications are needed to fully understand their capabilities and limitations compared to established neural network architectures.

  - ### **Point·E System**
  -   The lighter computational overhead of LION compared to Adam allows for training larger models or training existing models more quickly.

  -   The LION algorithm is easy to implement and can be incorporated into existing training pipelines with minimal code changes.



  - # Mess
  ![1713028555251.jpg](assets/1713028555251_1713029092792_0.jpg){:height 2309, :width 999}

			  [Class Companion Puts AI To Work Helping Teachers Help Students (forbes.com)](https://www.forbes.com/sites/rayravaglia/2023/10/05/class-companion-puts-ai-to-work-helping-teachers-help-students/)
		- By challenging decision biases and encouraging diverse perspectives, AI acts as a catalyst for developing critical thinking skills.

				- ### EDX survey of 800 executives
					- 1/3 would train their existing workforce in AI

				- ### Goldman Sachs report
					- Nearly 75% were concerned about AI's impact on their industry
					- 78.1% believed AI could reduce some stress on the job
					- 65% of Gen Z employees said they don't have the right skills for the AI era
					- 53% want more training and guidance

  - ### **Point·E System**
  -   The lighter computational overhead of LION compared to Adam allows for training larger models or training existing models more quickly.

  -   The LION algorithm is easy to implement and can be incorporated into existing training pipelines with minimal code changes.


  -   The project highlights the potential of [[automation]] to simplify 3D content creation and make it more accessible to a wider audience.

  - # Mess
  ![1713028555251.jpg](assets/1713028555251_1713029092792_0.jpg){:height 2309, :width 999}

			  [Class Companion Puts AI To Work Helping Teachers Help Students (forbes.com)](https://www.forbes.com/sites/rayravaglia/2023/10/05/class-companion-puts-ai-to-work-helping-teachers-help-students/)
		- [[Education and AI]] [(1) Ethan Mollick on X: "New randomized, controlled trial of students using GPT-4 as a tutor in Nigeria. 6 weeks of after-school AI tutoring = 2 years of typical learning gains, outperforming 80% of other educational interventions. And it helped all students, especially girls who were initially behind https://t.co/abE1JMUBEs" / X](https://x.com/emollick/status/1879633485004165375) [[Ethan Mollick]]
		- [Teen deepfake pornography victim warns future generation is 'at risk' if AI crime bill fails | Fox News](https://www.foxnews.com/media/teen-deepfake-porn-victim-warns-future-generation-risk-ai-crime-bill-passed-protect-people) [[Deepfakes and fraudulent content]] [[Education and AI]] [[Social contract and jobs]] [[Trust and Safety]]
		- https://hbsp.harvard.edu/inspiring-minds/an-ai-prompting-template-for-teaching-tasks [[Education and AI]]
		- Michelle Kassorla, Ph.D. on LinkedIn [discussing](https://www.linkedin.com/posts/mkassorla_here-is-a-great-example-of-a-student-using-activity-7208178612556967936-R-YE?) a student's use of [[Generative AI]] in a prospectus paragraph for an assignment. The post includes the student's paragraph, feedback from Dr Kassorla, and a rubric for the assignment. The feedback highlights the need for a clear, specific claim, clear writing, and a connection to the story being analysed. The post also includes comments from other professionals in the field of AI [[Education and AI]].

				- ### EDX survey of 800 executives
					- 1/3 would train their existing workforce in AI

				- ### Goldman Sachs report
					- 65% of Gen Z employees said they don't have the right skills for the AI era
					- 53% want more training and guidance
				- The impact of job losses will be uneven, with some industries and regions hit harder than others, exacerbating existing inequalities. Low-skill and routine jobs are most at risk of automation, which could widen the gap between high- and low-income earners (Acemoglu & Restrepo, 2018).
		- The New York Times (nytimes.com)](https://www.nytimes.com/2024/01/29/technology/us-jobs-ai-chatgpt-tech.html)
			- **Fostering social dialogue and consensus:** The future of work must be determined through open discussions involving workers, policymakers, and technologists. The "art of the desirable" requires a democratic approach, prioritising social consensus over top-down dictates from Silicon Valley.

  - #### Challenges and Considerations
  - Balancing AI and Traditional Methods:
		- While AI presents new challenges, it also offers significant opportunities for enhancing education, requiring a balanced approach to its integration. We need to be doing more.
		- {{embed ((657d1029-63aa-4766-8324-e7d6e5e19001))}}
		- [[Education and AI]] [(1) Ethan Mollick on X: "New randomized, controlled trial of students using GPT-4 as a tutor in Nigeria. 6 weeks of after-school AI tutoring = 2 years of typical learning gains, outperforming 80% of other educational interventions. And it helped all students, especially girls who were initially behind https://t.co/abE1JMUBEs" / X](https://x.com/emollick/status/1879633485004165375) [[Ethan Mollick]]
		- [Teen deepfake pornography victim warns future generation is 'at risk' if AI crime bill fails | Fox News](https://www.foxnews.com/media/teen-deepfake-porn-victim-warns-future-generation-risk-ai-crime-bill-passed-protect-people) [[Deepfakes and fraudulent content]] [[Education and AI]] [[Social contract and jobs]] [[Trust and Safety]]
		- https://hbsp.harvard.edu/inspiring-minds/an-ai-prompting-template-for-teaching-tasks [[Education and AI]]
		- Michelle Kassorla, Ph.D. on LinkedIn [discussing](https://www.linkedin.com/posts/mkassorla_here-is-a-great-example-of-a-student-using-activity-7208178612556967936-R-YE?) a student's use of [[Generative AI]] in a prospectus paragraph for an assignment. The post includes the student's paragraph, feedback from Dr Kassorla, and a rubric for the assignment. The feedback highlights the need for a clear, specific claim, clear writing, and a connection to the story being analysed. The post also includes comments from other professionals in the field of AI [[Education and AI]].

  - ### Session 4
  - Workshop 2 – Diagrams as code.
  - Closeout.
  My custom tooling looks like this, I hope to open it up to you all over time:

  - ## Next Word/Token Prediction
  - **Method:** This technique unlocks the entire body of human text as a potential training dataset. Imagine having access to every book, article, blog post, and conversation ever written.
  - **Process:** The AI system learns by predicting the next word in a sequence. It takes into account the preceding words, trying to decipher the underlying grammar, semantics, and even the author's style.

  - ## Next Word/Token Prediction
  - **Method:** This technique unlocks the entire body of human text as a potential training dataset. Imagine having access to every book, article, blog post, and conversation ever written.
  - **Process:** The AI system learns by predicting the next word in a sequence. It takes into account the preceding words, trying to decipher the underlying grammar, semantics, and even the author's style.
  - **Process:** Instead of relying on labeled datasets, we intentionally degrade images by adding noise. This could be random pixels, blurring, or other forms of distortion. The AI's task is to learn to reverse this degradation, reconstructing the original, pristine image.
  - **Concept:** By learning to remove noise, the AI learns to identify the fundamental features and patterns within an image. It becomes better at distinguishing between real details and random noise. This process is similar to how our own brains filter out distractions to focus on relevant information.
  - **Significance:** This approach opens up a vast new world of possibilities for training AI systems, enabling them to learn from unlabeled image data.

  - ## A Simple Example: Image Classification
  - **Process:** The first step is to break down that image into its individual pixels. This raw pixel data is then fed through layers of the AI system. Each layer processes the information, learning patterns and features.
  - **Initial Stage:** At the beginning of the training process, the numbers within the AI's matrices are typically assigned randomly. Think of it like a scrambled puzzle, where the pieces are initially in the wrong places. This leads to what we call "garbage in, garbage out" – the AI's initial predictions are often wildly inaccurate.
  - **Scoring:** The loss function comes into play by comparing the AI's output with the correct answer. It then calculates a score, essentially telling the AI how far off it is from the desired outcome.
  - **Backpropagation:** This score is then used in a process called "backpropagation". Here, the system works backward through all the layers, adjusting the values within the matrices. Imagine each number in the matrix as a tiny knob – backpropagation asks "Do I need to tweak this knob up or down to make the overall score a little better?" This adjustment is based on the chain rule of calculus.
  - **Traditional Approach:** Historically, AI training relied heavily on curated datasets. These datasets are carefully constructed, containing labeled data. For instance, the MNIST dataset contains thousands of images of handwritten digits, each labeled with its corresponding number.
  - **Training Phase:** The AI system is trained on this labeled data, learning patterns and relationships between the data and its labels. The goal is to minimize the loss function, effectively teaching the AI to make accurate predictions.
  - **Testing Phase:** Once the training is complete, the AI's performance is evaluated on a separate validation or test set. This set contains data that the AI hasn't seen during training. The idea is to test how well the AI generalizes its knowledge to new, unseen examples.
  - **Overfitting:** However, a common problem is overfitting. This happens when the AI system learns the idiosyncrasies of the training data too closely. It might memorize the exact patterns in the training data but fail to generalize to new, slightly different examples. Imagine if a student only studied the exact questions from previous exams – they might do well on those specific questions but struggle with new material.

  - ### Distributed Technology
  - **Optimizations and Scaling**
		- [Nvidia DASK](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/): Tutorial for distributed computing with GPUs.
		- [SWARM Training Paper](https://arxiv.org/pdf/2301.11913.pdf): Discusses methods for distributed training of LLMs.
  - Interfaces and scaling
  - [LobeHub (github.com)](https://github.com/lobehub)
  - Distributed tech
  - [horde image and llm](https://horde.koboldai.net/)
  - Browser based whole models
  - [The Web LLM project has created a browser-based version of the vicuna-7b Large Language Model, which is impressively accurate and fast. The model is able to handle complex prompts and provide accurate responses, although it does sometimes make mistakes.](https://simonwillison.net/2023/Apr/16/web-llm/)
  - [Nvidia DASK](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/)
  - [SWARM training paper](https://arxiv.org/pdf/2301.11913.pdf)
  - immersive spaces
  - Why you should use now generative AI in your metaverse company. Or maybe not
		- The Ghost Howls https://skarredghost.com/2023/02/11/generative-ai-metaverse-company/
  - [games dev](https://www.traffickinggame.com/ai-assisted-graphics/)
  - [Instant app from prompts](https://twitter.com/ronithhh/status/1641318606549176321)
  - [endless runner without any coding experience](https://replit.com/@asrsubs/SkyRoads-GPT-4)
  - [Edge (phone deployment on android)](https://github.com/mlc-ai/mlc-llm/tree/main/android)
  - [Tree of thought github](https://github.com/ysymyth/tree-of-thought-llm)
  - [Scaling challenges paper](https://arxiv.org/abs/2307.10169)
  - [Flow node based LLM design](https://github.com/FlowiseAI/Flowise)
  - [TensorRT-LLM optimisation repo](https://github.com/NVIDIA/TensorRT-LLM)
  - [Flowchat](https://github.com/flatypus/flowchat)
  - Multi Modal
  - [MultimodalC4 is a multimodal extension of c4 that interleaves millions of images with text. The corpus contains over a billion images, and the text is interleaved with the images to provide context.](https://github.com/allenai/mmc4)
  - [Otter with weights](https://otter-ntu.github.io/)
  - [minigpt](https://minigpt-4.github.io/)
  - [MiniGPT local multimodal](https://github.com/Vision-CAIR/MiniGPT-4)
  - [Fuya](https://www.adept.ai/blog/fuyu-8b?)
  - emotion tracking
  - [laion empathetic](https://dct.openempathic.ai/guide/#:~:text=Rating%20Arousal%20and%20Valence%3A)
  - [entity identify open LLM](https://www.numind.ai/blog/a-foundation-model-for-entity-recognition)
  - Optimisations
  - [𝐃𝐞𝐞𝐩𝐒𝐩𝐞𝐞𝐝 is an easy-to-use deep learning optimization software suite that enables unprecedented scale and speed for DL Training and Inference. Visit us at deepspeed.ai or our Github repo.
  - 📌Megatron-LM GPT2 tutorial: https://lnkd.in/gXvPhXqb](https://github.com/microsoft/DeepSpeed)
  - [The text provides instructions on how to train your own large language models using Replit. It explains that you will need to first create a Replit account and then follow the instructions on the website.](https://blog.replit.com/llm-training)
  - [Futurepedia is the largest AI tools directory, with over 700 tools in various categories. It is updated daily, and features search and filter options to help you find the right tool for your needs.](http://Futurepedia.io)
  - [GitHub
		- gitnomad24601/ShogScript: ShogScript: The GitHub repository "ShogScript" contains a proof-of-concept pseudocode for GPT-4 AI interactions, ideal for storytelling & communication. The code is released under the MIT license.](https://github.com/gitnomad24601/ShogScript)
  - [Flash decoding 8x](https://together.ai/blog/flash-decoding-for-long-context-inference?)
  - [Understanding Large Language Models: A Cross-Section of the Most Relevant Literature To Get Up to Speed](https://magazine.sebastianraschka.com/p/understanding-large-language-models)
  - [The text describes a change to support the GPTQ triton commit c90adef. This change allows for the disabling of quant attention.](https://github.com/oobabooga/text-generation-webui/pull/1229)
  - [2000x performance improvement paper](https://arxiv.org/abs/2305.02301)
  - [Flexgen](https://github.com/FMInference/FlexGen#get-started-with-a-single-gpu)
  - [4bit compression](https://github.com/johnsmith0031/alpaca_lora_4bit)
  - [GPT4 self hallucination checking](https://www.reddit.com/r/MachineLearning/comments/123b66w/dgpt4_might_be_able_to_tell_you_if_it_hallucinated/)
  - [Sparse LLM, half the size, all the power](https://arxiv.org/abs/2301.00774)
  - [SpQR lossless optimisation paper](https://arxiv.org/abs/2306.03078)
  - [Landmark attention qlora oogabooga](https://github.com/eugenepentland/landmark-attention-qlora)
  - [LobeHub (github.com)](https://github.com/lobehub)
		- We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC, and creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation. Whether for users or professional developers, LobeHub will be your AI Agent playground.
  - Training & Finetuning
  - Lora
  - [alpaca lora training](https://discord.com/channels/1086739839761776660/1087508281758584852)
  - [Github](https://github.com/tloen/alpaca-lora)
  - [CPU offload lora training](https://github.com/oobabooga/text-generation-webui/commit/09d8119e3cf36257496acfb44e6445a9f40c3d02)
  - [llamatard 4bit chat instructions](https://rentry.org/llama-tard-v2#llama-int8-4bit-chatbot-guide-v2)
  - [The text provides a guide on how to make your own Loras, which are easy and free to create. The process is described in detail, and the text includes instructions on how to create and customize your own Loras.](https://civitai.com/models/22530)
  - Deep retraining
  - Deepspeed chat retraining in hours
  - microsoft just released a new finetuning pipeline
  they finetuned a 65B model in 10 hours using RLHF
  - [TRL
  - Transformer Reinforcement Learning](https://github.com/lvwerra/trl)
  - Hardware requirements for retraining (links to state of the art)
  - [Finetuning blog post](https://www.databricks.com/blog/2023/03/20/fine-tuning-large-language-models-hugging-face-and-deepspeed.html)
  - Pruning
  - [Seems that both 4 bit and straight up pruning don't harm the models much](https://arxiv.org/abs/1803.03635)
  - Merging
  - [diffusion style LLM block merging](https://github.com/TehVenomm/LM_Transformers_BlockMerge)
  - [Domain expert model merging](https://docs.google.com/document/d/1JCzJ1wdBMBVwsFW4CWGUbX-YEDXB0yS4mfFbvwPLQrI/edit)
  - Toolkits and distributed
  - [𝐌𝐞𝐬𝐡 𝐓𝐞𝐧𝐬𝐨𝐫𝐅𝐥𝐨𝐰 (mtf) is a language for distributed deep learning, capable of specifying a broad class of distributed tensor computations. The purpose of Mesh TensorFlow is to formalize and implement distribution strategies for your computation graph over your hardware/processors. For example: "Split the batch over rows of processors and split the units in the hidden layer across columns of processors." Mesh TensorFlow is implemented as a layer over TensorFlow.](https://github.com/tensorflow/mesh)
  - [𝐁𝐌𝐓𝐫𝐚𝐢𝐧 is an efficient large model training toolkit that can be used to train large models with tens of billions of parameters. It can train models in a distributed manner while keeping the code as simple as stand-alone training.](https://github.com/OpenBMB/BMTrain)
  - [𝐂𝐨𝐥𝐨𝐬𝐬𝐚𝐥-𝐀𝐈 provides a collection of parallel components for you. It aim to support us to write our distributed deep learning models just like how we write our model on our laptop. It provide user-friendly tools to kickstart distributed training and inference in a few lines.
  📌Open source solution replicates ChatGPT training process.Ready to go with only 1.6GB GPU memory and gives you 7.73 times faster training: https://lnkd.in/gp4XTCnz](https://colossalai.org/)
  - [EasyLM one stop scaleable toolkit](https://github.com/young-geng/EasyLM)
  - [databerry training and deployment](https://github.com/gmpetrov/databerry)
  - [Petals collaborative fine tuning](https://arxiv.org/abs/2209.01188)
  - [Goodle openXLA training accelerator](https://opensource.googleblog.com/2023/03/openxla-is-ready-to-accelerate-and-simplify-ml-development.html)
  - Adversarial and self instructed
  - [Use GPT API as a GAN (twitter thread)](https://twitter.com/BrianRoemmele/status/1637871062246649856)
  - [Bigscience petals run training through torrents](https://github.com/bigscience-workshop/petals)
  - [airoboros_a_rewrite_of_selfinstructalpaca/](https://www.reddit.com/r/MachineLearning/comments/136vt7b/p_airoboros_a_rewrite_of_selfinstructalpaca/)
  - [A Cookbook of Self-Supervised Learning](https://arxiv.org/abs/2304.12210)
  - [Lora training lessons blog post](https://lightning.ai/pages/community/lora-insights/?)
  - [lit-gpt hackable training platform apache 2](https://github.com/Lightning-AI/lit-gpt)
  - [ChatLLaMA  is a library that allows you to create hyper-personalized ChatGPT-like assistants using your own data and the least amount of compute possible. Instead of depending on one large assistant that “rules us all”, we envision a future where each of us can create our own personalized version of ChatGPT-like assistants.](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/chatllama)
  - [Substack on retraining a 30B model in an A100](https://abuqader.substack.com/p/releasing-alpaca-30b)
  - [𝐀𝐥𝐩𝐚 is a system for training and serving large-scale neural networks. Scaling neural networks to hundreds of billions of parameters has enabled dramatic breakthroughs such as GPT-3, but training and serving these large-scale neural networks require complicated distributed system techniques. Alpa aims to automate large-scale distributed training and serving with just a few lines of code.
  - 📌Alpa:
  - 📌Serving OPT-175B, BLOOM-176B and CodeGen-16B using Alpa: https://lnkd.in/g_ANHH6f](https://github.com/alpa-projects/alpa)
  - [𝐌𝐞𝐠𝐚𝐭𝐫𝐨𝐧-𝐋𝐌 / Megatron is a large, powerful transformer developed by the Applied Deep Learning Research team at NVIDIA. Below repository is for ongoing research on training large transformer language models at scale. Developing efficient, model-parallel (tensor, sequence, and pipeline), and multi-node pre-training of transformer based models such as GPT, BERT, and T5 using mixed precision.
  - 📌pretrain_gpt3_175B.sh: https://lnkd.in/gFA9h8ns](https://github.com/NVIDIA/Megatron-LM)
  - [Koala paper on training with minimal noise for chatbots](https://bair.berkeley.edu/blog/2023/04/03/koala/?ref=emergentmind)
  - [Emmet twitter and github on fine tuning](https://twitter.com/ehalm_/status/1652373239044112388)
  - [Ensure structured json](https://github.com/1rgs/jsonformer)
  - [Lora training guide from Pytorch lightning.ai people](https://lightning.ai/pages/community/tutorial/lora-llm/)
  - [GPTQ paper code](https://github.com/ist-daslab/gptq)
  - [Microsoft guidance](https://github.com/microsoft/guidance)
  - [QLoRA fast retraining of large models](https://github.com/artidoro/qlora)
  - [paper](https://arxiv.org/pdf/2305.14314.pdf)
  - [Some kind of inscrutable training thing](https://readthedocs.org/projects/alibi/downloads/pdf/latest/)
  - [Llama 2 training guide](https://www.philschmid.de/sagemaker-llama2-qlora)
  - [RLHF cheap paper](https://arxiv.org/pdf/2308.01320.pdf)
  - [Sparse LLM cpu training breakthrough](https://huggingface.co/blog/mwitiderrick/llm-infrerence-on-cpu)
  - Evaluation
  - [github of comparisons](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - [compare open source vs closed](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - [LLM zoo](https://github.com/FreedomIntelligence/LLMZoo)
  - [Can AI-Generated Text be Reliably Detected?:](https://arxiv.org/abs/2303.11156)
  - In the paper "Can AI-Generated Text be Reliably Detected?", the authors show that current methods for detecting AI-generated text are not reliable in practical scenarios. They first demonstrate that paraphrasing attacks can break a range of detectors, including those using watermarking schemes and neural network-based detectors. They then provide a theoretical impossibility result showing that for a sufficiently good language model, even the best-possible detector can only perform marginally better than a random classifier. Finally, they show that even LLMs protected by watermarking schemes can be vulnerable to spoofing attacks where adversarial humans can add hidden watermarking signatures to their generated text.
  - [gptzero spots AI authoring](http://gptzero.me/)
  - [GPTZero Case Study (Exploring False Positives): Introduction In this case study, I will be sharing the vast amounts of false positives current AI detection software gives, specifically for this case study I will be demonstrating GPTZero. I personally want to thank the supposed “Healthcare professional” who brought this to my attention via my contact link. It has motivated me to look more into this issue rather than just posting bypasses to these popular AI detection software programs, it will be only more beneficial to highlight their real usability in general.](https://gonzoknows.com/posts/GPTZero-Case-Study/)
  - The text describes a case study on false positives with AI detection software. The study found that the software often gives false positives, particularly with regard to healthcare. The study recommends that users be aware of this issue and take it into account when using such software.
  - [Fake detector product](https://hivemoderation.com/ai-generated-content-detection)
  - [Huggingface leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
  - [[Base models]]
  - Prompt engineering and injection
  - Character injection
  - [json builder](https://oobabooga.github.io/character-creator.html)
  - [Huggingface commodity card retrainer](https://huggingface.co/blog/trl-peft)
  - Prompt model tips for learning
  - 1. Improve your writing by getting feedback.
  - Use this prompt:
  - [paste your writing]
  - "Proofread my writing above. Fix grammar and spelling mistakes. And make suggestions that will improve the clarity of my writing"
  - 2. Use the 80/20 principle to learn faster than ever.
  - "I want to learn about [insert topic]. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it."
  - 3. Learn and develop any new skill.
  - "I want to learn / get better at [insert desired skill]. I am a complete beginner. Create a 30 day learning plan that will help a beginner like me learn and improve this skill."
  - 4. Get short and insight-packed book summaries.
  - "Summarize the book [insert book] by the author [insert author] and give me a list of the most important learnings and insights."
  - 5. Get feedback from history's greatest minds.
  - "Assume you are [insert famous person e.g. Steve Jobs]. Read my argument below and give me feedback as if you were [insert person again]"
  - [insert your argument]
  - 6. Enhance your problem solving skills.
  - "Your role is that of a problem solver. Give me a step-by-step guide to solving [insert your problem]."
  - 7. Generate new ideas and overcome writers block:
  - "I am writing a blog post about [insert topic]. Give me an outline for this blog post with 10 bullet points. Also give me 5 options for a catchy headline."
  - You can adapt this prompt for whatever you're writing.
  - 8. Summarize long texts and accelerate your learning:
  - "Summarize the text below into 500 words or less. Create sections for each important point with a brief summary of that point."
  - 9. Use stories and metaphors to aid your memory.
  - "I am currently learning about [insert topic]. Convert the key lessons from this topic into engaging stories and metaphors to aid my memorization."
  - 10. Strengthen your learning by testing yourself.
  - "I am currently learning about [insert topic]. Ask me a series of questions that will test my knowledge. Identify knowledge gaps in my answers and give me better answers to fill those gaps."
  - [Prompt injection: what s the worst that can happen?](https://simonwillison.net/2023/Apr/14/worst-that-can-happen/)
  - [To jailbreak ChatGPT, you need to get it to really do what you want. This can be done by editing the source code or by using a third-party tool.](https://www.digitaltrends.com/computing/how-to-jailbreak-chatgpt/)
  - General purpose super short prompt
  - develop+extend+support(ideas), vocab(wide+natural+sophisticated), grammar(wide+flexible), cohesion(logical+smooth), clarity(precise+concise), engagement(attention+interest), mood(objective+explanatory), viewpoint(forward_looking)
  - [Mollick methods post on linkedin](https://www.linkedin.com/posts/emollick_there-are-now-three-research-backed-approaches-activity-7089472152701136896-aZNQ?utm_source=share&utm_medium=member_desktop)
  - [Large Language Models are Human-Level Prompt Engineers: We propose an algorithm for automatic instruction generation and selection for large language models with human level performance.](https://openreview.net/forum?id=92gvk82DE-)
  - [Using models to learn well, blog and paper](https://www.oneusefulthing.org/p/how-to-use-ai-to-teach-some-of-the)
  - [Guide to prompting LLMs](https://olickel.com/everything-i-know-about-prompting-llms)
  - basic software primitives
      Transformers are a new type of machine learning model that have been making headlines recently. They are very good at keeping track of context, which is why the text they generate makes sense. In this blog post, we will go over their architecture and how they work.
       <https://txt.cohere.ai/what-are-transformer-models/>
      Datasets 101
       <https://www.latent.space/p/datasets-101?utm_source=substack&utm_medium=email#details>
      implementations
          pytorch/numpty
          tensorflow/jax
      LLM youtube bootcamp 2023
       <https://www.youtube.com/playlist?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ>
      Linkedin LLM roundup
       <https://www.linkedin.com/posts/francesco-saverio-zuppichini-94659a150_ai-ml-ds-activity-7072868294000566272-kV83/?utm_source=share&utm_medium=member_android>
          This is the list of resources I've recommended him
          Where everything started:
  - Attention is all you need Paper: https://lnkd.in/eJWz6ShV Blog: https://lnkd.in/eaUMMy6v
  - GPT-3 Language models are few-shot learners Paper: https://lnkd.in/eUgFk7Db Video: https://lnkd.in/ev8whzkb The first one is where Attention was introduced, the main building block of Transformers. The second one shows that LLMs can actually do zero and few shots Then, I suggest having a look at how we went from GPT3 -> ChatGPT. So how it was possible to make LLMs better at human instructions. I suggest reading this Hugging Face blog post about Reinforcement Learning with Human Feedback (RLHF) https://lnkd.in/eAkM_FUj The next step is what happen later, Meta leaked LLama a smaller language model that was actually very good, the takeaway there is that if you train with more stuff and for longer you obtain a better model. Paper: https://lnkd.in/efZRu4mY The next wave is all built upon that model, so how do we make it better at following human instruction. So I suggest looking at the Stanford Alpaca model. Blog: https://lnkd.in/eqCwvVDZ I also said other interesting models are Vicuna (https://lnkd.in/eCYT3yWx) and WizardLM (https://lnkd.in/efvUD8AD). Saying that people have been focused on finding better and cheaper way to instruct the base LLama model. Another important thing is how to prompt, I've recommended chain of thoughts (https://lnkd.in/eYGxFaeS) and tree of thouhts (https://lnkd.in/ejcfkAeN) I've also shared the LLM leaderboard from Hugging Face : https://lnkd.in/eF6C_W6D YT channels that I think are the bests are: AI Explained: https://lnkd.in/emhTmsds Yannic Kilcher: https://lnkd.in/eRGUVme4 Sam Witteveen: https://lnkd.in/e4EiE5iY What do you think? Any resources that may be useful? Resourced shared Pritam Kumar Ravi Stanford CS25 Course https://lnkd.in/e2PrcwTu
  - LLM and creating new LLM
  - Safefty, alignment, and breaking
  - [image perturbation of multimodal](https://arxiv.org/abs/2307.10490)
  - [universal jailbreaks](https://arxiv.org/abs/2307.15043)
  - Consumer tools using LLM
  - [NexusGPT is a freelancer platform that uses AI to help businesses find the right freelancers for their needs. The platform offers a variety of features to help businesses find the perfect freelancer for their project, including a searchable database of freelancers, a rating system, and a feature that allows businesses to post their project and receive bids from freelancers.](https://nexus.snikpic.io)
  - [RadioGPT: 'World’s first' AI-driven radio station is here (other)](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - Some experts are predicting that the metaverse, a shared online space where users can interact with each other and digital objects, will eventually replace the internet as we know it.
  - [GitHub
  - MatveyM11/Mine-ChatGPT: OpenSourced ChatGPT downloader in markdown format. Download all text or markdown-styled code blocks Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all yours chat's with you locally in the simple .md files.: OpenSourced ChatGPT downloader in markdown format. Download all text or markdown-styled code blocks Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all your...](https://github.com/MatveyM11/Mine-ChatGPT)
  - This repository contains a ChatGPT downloader that can be used to download all text or markdown-styled code blocks from a chat. Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all yours chat's with you locally in the simple .md files.
  - [Linkedin bot to make LLM posts](https://github.com/FrancescoSaverioZuppichini/LinkedInGPT)
  - [ArcAngel Falcon based custom chat](https://www.arcangelai.com/)
  - [OpenAI community Pages](https://community.openai.com/c/announcements/6)
  - ChatGPT stuff
  - Code interpreter
  - [setup prompt by mollick](https://www.linkedin.com/feed/update/urn:li:activity:7083969476685099008/)
  - You are going to be an expert at making powerful and beautiful visualizations using principles from Tufte and other experts. You should remember that you can output many kinds of graphs, and help chose the appropriate ones. You also can output jpgs, html, interactive maps, and animated gifs.
  - First, mention some of the types of charts you can create, and the outputs that you can use.
  Next, read these does and don'ts of data from Angela Zoss
  Do:
  1. Do use the full axis.
  - Avoid distortion.
  - For bar charts, the numerical axis (often the y axis) must start at zero.  Our eyes are very sensitive to the area of bars, and we draw inaccurate conclusions when those bars are truncated.
    (But for line graphs, it may be okay to truncate the y axis.
  - Wide ranges:
  If you have one or two very tall bars, you might consider using multiple charts to show both the full scale and a "zoomed in" view
  - also called a Panel Chart.
  - Consistent intervals:
  - Finally, using the full axis also means that you should not skip values when you have numerical data.  See the charts below that have an axis with dates.  The trend is distorted if you do not have even intervals between your dates.  Make sure your spreadsheet has a data point for every date at a consistent interval, even if that data point is zero
  - 2. Do simplify less important information.
  - Chart elements like gridlines, axis labels, colors, etc. can all be simplified to highlight what is most important/relevant/interesting.  You may be able to eliminate gridlines or reserve colors for isolating individual data series and not for differentiating between all of the series being presented
  - 3. Do be creative with your legends and labels.
  - Possibilitiess
    Label lines individually
    Put value labels on bars to preserve the clean lines of the bar lengths
  - 4. Do pass the squint test.
  - "When you squint at your page, so that you cannot read any of the text, do you still 'get' something about the page?"
  - Which elements draw the most attention? What color pops out?
    Do the elements balance? Is there a clear organization?
    Do contrast, grouping, and alignment serve the function of the chart?
  - Don't:
  1. Don't use 3D or blow apart effects.
  - Studies show that 3D effects reduce comprehension. Blow apart effects likewise make it hard to compare elements and judge areas.
  - 2. Don't use more than (about) six colors.
  - Using color categories that are relatively universal makes it easier to see differences between color
  - The more colors you need (that is, the more categories you try to visualize at once), the harder it is to do this.
  - But different colors should be used for different categories
  (e.g., male/female, types of fruit), not different values in a range (e.g., age, temperature).
  - If you want color to show a numerical value, use a range
  that goes from white to a highly saturated color in one of
  the universal color categories
  - 3. Don't change (style) boats midstream.
  - One of the easiest ways to get the most out of charts is to rely on comparison to do the heavy lifting.
  - Our visual system can detect anomalies in patterns.
  Try keeping the form of a chart consistent across a series so differences from one chart to another will pop out.
  - Use the same colors, axes, labels, etc. across multiple charts.
  - 4. Don't make users do "visual math."
  - If the chart makes it hard to understand an important relationship between variables, do the extra calculation and visualize that as well.
  - This includes using pie charts with wedges that are too similar to each other, or bubble charts with bubbles that are too similar to each other.  Our visual processing system is not well suited to comparing these types of visual areas.
  - We are also not good at holding precise visual imagery in our memory and comparing it to new stimuli; if you are giving a presentation and want the audience to be able to compare two charts, they need to be on the same slide.
  - 5. Don't overload the chart.
  - Adding too much information to a single chart eliminates the advantages of processing data visually; we have to read every element one by one! Try changing chart types, removing or splitting up data points, simplifying colors or positions, etc.
  - Now ask what kind of data visualization I might be interested in, or if I want to upload some data for yout co consider visualizing.
  - [loads of experiments](https://github.com/SkalskiP/awesome-chatgpt-code-interpreter-experiments)
  - General links and papers
  - [Think of language models like ChatGPT as a “calculator for words”: One of the most pervasive mistakes I see people using with large language model tools like ChatGPT is trying to use them as a search engine. As with other LLM …](https://simonwillison.net/2023/Apr/2/calculator-for-words/)
  - Language models like ChatGPT are not reliable for use as a search engine, but can be thought of as a "calculator for words". This means that they are good for manipulating language, but not for retrieving accurate information.
  - [Peak LLM: Prompt injection might be just the beginning](https://ihavemanythoughts.substack.com/p/peak-llm)
  - [Language models as inductive reasoners paper](https://sentic.net/language-models-as-inductive-reasoners.pdf)
  - [This repository contains a collection of papers and resources on Reasoning in Large Language Models. The papers survey the state of the art in this area, and discuss how large language models can be used to obtain emergent abilities.](https://github.com/jeffhj/LM-reasoning)
  - [Full trainingset used by bloombergAI](https://mobile.twitter.com/omarsar0/status/1641788196550856704)
  - [Zain Kahn on LinkedIn reports that over 1,000 AI tools were released in March. He states that ChatGPT is just the tip of the iceberg, and that there are 20 AI tools that will transform productivity forever.](https://www.linkedin.com/posts/zainkahn_1000-ai-tools-were-released-in-march-activity-7048285306101358592-4wAA?utm_source=share&utm_medium=member_android)
  - [Language driven shell for OS (ooft)](https://www.reddit.com/r/MachineLearning/comments/129wzdk/p_engshell_a_gpt4_driven_englishlanguage_shell/)
  - [The text contains information on the release of guidelines by the DPA for the use of AI, as well as on similar efforts by other organizations. It also provides links to resources on the topic.](https://www.linkedin.com/posts/ezra-eeman-8a5ba64_dpa-just-released-its-guidelines-for-the-activity-7048985893910519808-921y?utm_source=share&utm_medium=member_android)
  - [Mind AI team website](https://mind.ai/technology)
  - [LMStudio model manager](https://lmstudio.ai/)
  - [Ahead of AI substack](https://magazine.sebastianraschka.com/archive)
  - [Meta research paper](https://drive.google.com/file/d/1i4NJKAggS82wqMamCJ1OHRGgViuyoY6R/view)
  - [State of AI report](https://www.stateof.ai/)
  - [AI ML passes American medical exams](https://www.medpagetoday.com/special-reports/exclusives/102705)
  - [Travelling salesman problem](https://github.com/diego-vicente/som-tsp)
  - [How the compression is so huge in diffusion models](https://medium.com/@socialemail/how-diffusion-models-can-achieve-seemingly-arbitrarily-large-compression-ratios-through-learning-2b21a317a46a)
  - [Understanding deep learning book](https://udlbook.github.io/udlbook/)
  - The book "Understanding Deep Learning" by Simon J.D. Prince covers a wide range of topics related to deep learning, from supervised and unsupervised learning to different types of neural networks and training methods. There are also chapters on measuring performance, regularization, and why deep learning works. The book includes many resources for instructors, such as slides, notebooks, and figures.
  - [This repository is a collection of links to various courses and resources about Artificial Intelligence (AI).](https://github.com/SkalskiP/courses)
  - [Top courses link github](https://github.com/SkalskiP/courses)
  - [State of GPT youtube presentation with great overview](https://www.youtube.com/watch?v=bZQun8Y4L2A)
  - Infrastructure
  - [rubbrband github auto deployments](https://rubbrband.com/)
  - [Hosting VPS](https://1984.hosting/)
  - [Free custom domains VPS](https://codesphere.com/pricing?anonymousId=YTQLcRg)
  - [Arch linux for laptop](https://wiki.archlinux.org/title/HP_Spectre_x360_(2020))
  - [360 camera compression paper](https://www.researchgate.net/publication/368728037_Masked360_Enabling_Robust_360-degree_Video_Streaming_with_Ultra_Low_Bandwidth_Consumption)
  - Multiligual and abstract translation
  - [meta seamless M4T](https://github.com/facebookresearch/seamless_communication#seamlessm4t)
  - | 
         | 
          CustomGPT is a platform that enables businesses to create their own chatbot using their own content, resulting in accurate responses without making up facts. The tool is designed to help businesses increase customer engagement and improve employee efficiency, ultimately leading to revenue growth and a competitive advantage. CustomGPT offers easy integration of content through seamless website integration or file uploading. The chatbot comes with various pricing plans, depending on the number of custom chatbots, content pages, and queries. The platform is trusted by global companies and customers, and it can be deployed for customer service, support helpdesk, and topic research. CustomGPT is powered by ChatGPT-4 and can be deployed through API or ChatGPT Plugins. The company offers a live demo and contact email for further inquiries. https://customgpt.ai/
         | 
       |
  - [h2o document summary / summariser with long context](https://github.com/h2oai/h2ogpt)
  - | 
         | 
          The website replit.com has blocked your access due to the presence of potentially harmful actions, such as submitting a certain word or phrase, a SQL command or malformed data. This is a security measure to protect the website from online attacks. To resolve the issue, you can contact the site owner and provide details of the actions that caused the block and the Cloudflare Ray ID found at the bottom of the page. https://blog.replit.com/llm-training
         | 
       |
  - | 
         | 
          NodePad is an LLM-assisted brainstorming experiment that helps users capture, expand, question, and organize their ideas visually. To create a new node, users simply write their thoughts in the input field and hit Enter. Nodes can be edited by double-clicking on them, linked through connectors, and deleted by clicking on them and hitting Backspace or Delete. Users can explore the app or consult the User Guide for further assistance. NodePad is designed for rapid note-taking and serendipitous ideation. https://nodepad.space/#
         | 
       |
  - [Patterns for building LLMs blog post](https://eugeneyan.com/writing/llm-patterns/)
  - [textgenerator io self host](https://github.com/TextGeneratorio)
  - [Orca: The Model Few Saw Coming](https://www.youtube.com/watch?v=Dt_UNg7Mchg%22%3E%3Crichcontent)
  - OpenOrca includes trained in tree of thought examples and is down to 500k training tokens for the same performance as the original Microsoft Orca paper
  - [Mistral Zephyr tune for exceptional performance](https://github.com/huggingface/alignment-handbook)
  - [youtube on it](https://www.youtube.com/watch?v=Up7VKg6ZE90)
  - LLMs
  - The AnythingLLM project is a full-stack application designed to allow users to turn any document or piece of content into reference data that can be used by any LLM during conversations. The application can be hosted remotely, but also supports local instances. It utilizes Pinecone, ChromaDB, and other vector storage solutions, as well as OpenAI for LLM and chatting capabilities. Documents are organized into workspaces, which function like threads and allow for context to be kept clean. The monorepo consists of three main sections: the collector, frontend, and server. Requirements include yarn, node, Python 3.8+, access to an LLM such as GPT-3.5 or GPT-4, and a free account with Pinecone.io. The Docker setup enables users to get started in minutes, and the development environment includes instructions for setting up the necessary .env files and collector scripts to embed content. The project is open source and contributors can create issues and pull requests following the designated format. https://github.com/Mintplex-Labs/anything-llm
	         | 
	       |
  - [AWQ 4 bit quants](https://github.com/mit-han-lab/llm-awq)
  - [Tinychat](https://github.com/mit-han-lab/llm-awq/tree/main/tinychat)
  - [Openshat model](https://github.com/imoneoi/openchat)
  - | 
         | 
          NodePad is a brainstorming tool that allows users to create nodes for their thoughts. Users can create new nodes by typing in the input field, and edit nodes by double-clicking on them. Nodes can be connected through connectors, and both nodes and connectors can be deleted by selecting and pressing Backspace or Delete. NodePad is an LLM-assisted brainstorming experiment that helps users capture, expand, question, and organize their ideas visually. The app offers a User Guide for assistance and is available for download through React Flow. https://nodepad.space/#
         | 
       |
  | 
         | 
          AnythingLLM is a full-stack personalized AI assistant application that allows users to turn any document or piece of content into a piece of data that can be used as reference when chatting. The application uses LLMs that can be hosted remotely or locally, and supports Pinecone, ChromaDB and more for vector storage and OpenAI for LLM chatting. AnythingLLM aims to be a full-stack application that can be run locally as well as hosted remotely and allows for intelligent chatting with any document provided to it. It divides documents into workspaces and provides simple UI-based tools to atomically manage the documents. There are two chat modes, conversation and query, and each chat response contains a citation that is linked to the original content. The monorepo consists of three main sections- collector, frontend and server, and requirements for the application include yarn and node on the user's machine, Python 3.8+ for running scripts in the collector, access to an LLM like GPT-3.5, GPT-4 or a drop-in replacement, and a Pinecone.io free account. https://github.com/Mintplex-Labs/anything-llm
         | 
       |
  - [This text provides instructions on how to run LLM-As-Chatbot in your cloud using dstack. The steps are as follows:  1. Install and set up dstack by running the command pip install dstack[aws,gcp,azure] -U and then dstack start to start the server.  2. Create a profile by creating a .dstack/profiles.yml file that points to your created project and describes the resources you need. Example:  ``` profiles:   - name: gcp     project: gcp     resources:       memory: 48GB       gpu:         memory: 24GB     default: true ```  3. Run the initialization command: dstack init.  4. Finally, use the dstack run . command to build the environment and run LLM-As-Chatbot in your cloud. dstack will automatically forward the port to your local machine, providing secure and convenient access.  The instructions emphasize the use of dstack to automate the provisioning of cloud resources and simplify the process of running LLM-As-Chatbot in the cloud. More information about dstack and its documentation can be found for further details.](https://github.com/dstackai/LLM-As-Chatbot/wiki/Running-LLM-As-Chatbot-in-your-cloud)
  - [This text describes a project called Simple LLM Finetuner, which is a user-friendly interface designed to facilitate fine-tuning various language models using the LoRA method via the PEFT library on NVIDIA GPUs. The interface allows users to easily manage their datasets, customize parameters, train the models, and evaluate their inference capabilities.   The project includes several features such as the ability to paste datasets directly into the UI, adjustable parameters for fine-tuning and inference, and a beginner-friendly interface with explanations for each parameter. It also provides instructions on how to get started, including prerequisites such as Linux or WSL, a modern NVIDIA GPU with at least 16 GB of VRAM, and the installation of required packages using a virtual environment.  To use the project, users are instructed to clone the repository and install the required packages. Then, they can launch the interface by running the app.py file and accessing it in a browser. They can input their training data, specify the PEFT adapter name, and start the training process. After training is complete, users can navigate to the Inference tab to perform inference using their trained models.  The project provides a YouTube walkthrough for additional guidance and is licensed under the MIT License.  Overall, the Simple LLM Finetuner project aims to simplify the process of fine-tuning language models using the LoRA method and provide a user-friendly interface for managing and evaluating models.](https://github.com/lxe/simple-llama-finetuner)
  - [Maverick is an AI-driven video marketing platform that helps ecommerce stores enhance customer interactions. By creating personalized videos for each customer, Maverick enables brands to build trust, improve brand perception, and increase customer satisfaction. The platform has been well-received by ecommerce brands, with users praising the personalized videos for their effectiveness in engaging with customers and increasing subscription enrollments.  Testimonials from merchants highlight the positive impact of Maverick on their businesses. Merchants have seen a significant increase in customer engagement, with over 100 email responses per week expressing gratitude for the personalized videos. This level of interaction helps strengthen customer relationships and loyalty.  Customers of these ecommerce brands have also expressed their appreciation for the personalized videos. They mention feeling valued and delighted by the direct communication from the brand, which sets the companies apart from others in the market. The personalized videos have made customers more loyal, with some even becoming lifetime members of the brands they previously patronized.  Overall, Maverick's AI-generated video marketing approach has proven to be a game changer for ecommerce brands. It enables personalized interactions with customers at scale, leading to increased customer satisfaction, brand loyalty, and reduced refund requests. The platform has received positive feedback from both merchants and their customers, highlighting the impact and success of Maverick in the ecommerce industry.](https://lnkd.in/eptCVijb)
  - [A Twitter user named Justin Alvey recently tweeted about advancements in artificial intelligence. He mentioned a tool called LLM chaining, which allows users to perform various tasks with emails. This tool was inspired by LangChainAI. Justin Alvey also noted that this functionality is now available in real-time, thanks to OpenAI's gpt-3.5-turbo model. The tweet has gained significant attention, with hundreds of thousands of views, retweets, likes, quotes, and bookmarks.](https://twitter.com/justLV/status/1637876167763202053)
  - [The text is a LinkedIn post by Francesco Saverio Zuppichini, a Machine Learning Engineer, recommending resources to learn about Language Learning Models (LLMs).  The post includes a list of resources that Zuppichini recommended to a friend who wanted to quickly learn about LLMs. The recommended resources include academic papers, blogs, videos, and YouTube channels. Zuppichini also mentions the importance of training models with more data and for longer durations to achieve better results. He suggests looking at models like Vicuna and WizardLM, as well as different methods of prompting, such as chain of thoughts and tree of thoughts. Additionally, Zuppichini shares the LLM leaderboard from Hugging Face and encourages others to share any useful resources they may have. The post receives positive feedback from other LinkedIn users, who appreciate the resources and share their own suggestions.](https://www.linkedin.com/posts/francesco-saverio-zuppichini-94659a150_ai-ml-ds-activity-7072868294000566272-kV83?utm_source=shareandutm_medium=member_android)

  - ## Grokking and Generalization
  - **Concept:** One of the most exciting developments in AI is the ability of systems to "grok" a problem. This means that they can transition from simply memorizing examples to learning the underlying algorithms and principles that govern the problem.
  - **Example:** Imagine training an AI to perform modular addition. This involves taking two numbers, adding them together, and then dividing by a third number, taking the remainder. (e.g., 5 + 12 modulo 12 = 0; 17 + 8 modulo 10 = 5). Initially, the AI might do well on the training data but struggle with new examples. This is a classic case of overfitting.
  - **Significance:** This "grokking" phenomenon suggests that AI systems can go beyond simply memorizing examples and truly understand the underlying principles. This ability to generalize knowledge is crucial for developing AI systems that can solve real-world problems.

  - ## Scaling Laws and Compute Budgets
  - **Concept:** As AI models grow larger and more complex, researchers have discovered something called "scaling laws". These laws attempt to predict how the performance of an AI system will change based on the amount of data and compute resources used during training.
  - **Pareto Curve:** There's often a sweet spot, a "Pareto curve", where increasing compute budget leads to diminishing returns in performance. If you keep adding more compute power, you might see improvements, but at some point, those improvements will become increasingly marginal.
  - **Visual:** A graph showing performance (loss) across different compute budgets, illustrating the Pareto curve. The graph demonstrates the optimal point where increasing resources leads to the most significant improvements.
  - **Projection:** These scaling laws are powerful tools. They allow us to predict the future performance of AI models based on projected compute resources. Researchers can use these laws to estimate how much compute will be required to achieve a specific level of performance.
  - **Large-scale Training:** Today's most advanced AI systems, such as GPT-4, require incredible computational resources. Training these models can cost tens of millions, even billions of dollars, just for the compute resources alone. This doesn't even include the cost of data acquisition, research, and salaries. The scale of AI development is truly staggering.

  - ## Next Word/Token Prediction
  - **Method:** This technique unlocks the entire body of human text as a potential training dataset. Imagine having access to every book, article, blog post, and conversation ever written.
  - **Process:** The AI system learns by predicting the next word in a sequence. It takes into account the preceding words, trying to decipher the underlying grammar, semantics, and even the author's style.
  - **Vocabulary:** These systems have vast vocabularies, sometimes containing tens of thousands of words or tokens. The AI needs to learn to select the most likely word from this massive set of possibilities.
  - **Loss Function:** The AI's prediction is then scored against the actual next word in the sequence. This score tells the AI how accurate its prediction was.
  - **Backpropagation:** Using backpropagation, the AI adjusts its parameters to improve its predictive accuracy. It's constantly refining its understanding of language, striving to become more fluent and accurate in its predictions.

  - ## How societal bias seeps into LLMs
  - **Training data:** If real-world text samples contain racial stereotypes, sexist viewpoints, etc., the LLM can internalize these.
  - **Associations:** Models learn by statistical patterns. "If X then often Y" can replicate prejudices even if 'X' is a demographic and 'Y' is a negative or limiting assumption.
  - [Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings](https://arxiv.org/abs/1607.06520)

  - ### Distributed Technology
  - **Optimizations and Scaling**
		- [Nvidia DASK](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/): Tutorial for distributed computing with GPUs.
		- [SWARM Training Paper](https://arxiv.org/pdf/2301.11913.pdf): Discusses methods for distributed training of LLMs.
  - Interfaces and scaling
  - [LobeHub (github.com)](https://github.com/lobehub)
  - Distributed tech
  - [horde image and llm](https://horde.koboldai.net/)
  - Browser based whole models
  - [The Web LLM project has created a browser-based version of the vicuna-7b Large Language Model, which is impressively accurate and fast. The model is able to handle complex prompts and provide accurate responses, although it does sometimes make mistakes.](https://simonwillison.net/2023/Apr/16/web-llm/)
  - [Nvidia DASK](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/)
  - [SWARM training paper](https://arxiv.org/pdf/2301.11913.pdf)
  - immersive spaces
  - Why you should use now generative AI in your metaverse company. Or maybe not
		- The Ghost Howls https://skarredghost.com/2023/02/11/generative-ai-metaverse-company/
  - [games dev](https://www.traffickinggame.com/ai-assisted-graphics/)
  - [Instant app from prompts](https://twitter.com/ronithhh/status/1641318606549176321)
  - [endless runner without any coding experience](https://replit.com/@asrsubs/SkyRoads-GPT-4)
  - [Edge (phone deployment on android)](https://github.com/mlc-ai/mlc-llm/tree/main/android)
  - [Tree of thought github](https://github.com/ysymyth/tree-of-thought-llm)
  - [Scaling challenges paper](https://arxiv.org/abs/2307.10169)
  - [Flow node based LLM design](https://github.com/FlowiseAI/Flowise)
  - [TensorRT-LLM optimisation repo](https://github.com/NVIDIA/TensorRT-LLM)
  - [Flowchat](https://github.com/flatypus/flowchat)
  - Multi Modal
  - [MultimodalC4 is a multimodal extension of c4 that interleaves millions of images with text. The corpus contains over a billion images, and the text is interleaved with the images to provide context.](https://github.com/allenai/mmc4)
  - [Otter with weights](https://otter-ntu.github.io/)
  - [minigpt](https://minigpt-4.github.io/)
  - [MiniGPT local multimodal](https://github.com/Vision-CAIR/MiniGPT-4)
  - [Fuya](https://www.adept.ai/blog/fuyu-8b?)
  - emotion tracking
  - [laion empathetic](https://dct.openempathic.ai/guide/#:~:text=Rating%20Arousal%20and%20Valence%3A)
  - [entity identify open LLM](https://www.numind.ai/blog/a-foundation-model-for-entity-recognition)
  - Optimisations
  - [𝐃𝐞𝐞𝐩𝐒𝐩𝐞𝐞𝐝 is an easy-to-use deep learning optimization software suite that enables unprecedented scale and speed for DL Training and Inference. Visit us at deepspeed.ai or our Github repo.
  - 📌Megatron-LM GPT2 tutorial: https://lnkd.in/gXvPhXqb](https://github.com/microsoft/DeepSpeed)
  - [The text provides instructions on how to train your own large language models using Replit. It explains that you will need to first create a Replit account and then follow the instructions on the website.](https://blog.replit.com/llm-training)
  - [Futurepedia is the largest AI tools directory, with over 700 tools in various categories. It is updated daily, and features search and filter options to help you find the right tool for your needs.](http://Futurepedia.io)
  - [GitHub
		- gitnomad24601/ShogScript: ShogScript: The GitHub repository "ShogScript" contains a proof-of-concept pseudocode for GPT-4 AI interactions, ideal for storytelling & communication. The code is released under the MIT license.](https://github.com/gitnomad24601/ShogScript)
  - [Flash decoding 8x](https://together.ai/blog/flash-decoding-for-long-context-inference?)
  - [Understanding Large Language Models: A Cross-Section of the Most Relevant Literature To Get Up to Speed](https://magazine.sebastianraschka.com/p/understanding-large-language-models)
  - [The text describes a change to support the GPTQ triton commit c90adef. This change allows for the disabling of quant attention.](https://github.com/oobabooga/text-generation-webui/pull/1229)
  - [2000x performance improvement paper](https://arxiv.org/abs/2305.02301)
  - [Flexgen](https://github.com/FMInference/FlexGen#get-started-with-a-single-gpu)
  - [4bit compression](https://github.com/johnsmith0031/alpaca_lora_4bit)
  - [GPT4 self hallucination checking](https://www.reddit.com/r/MachineLearning/comments/123b66w/dgpt4_might_be_able_to_tell_you_if_it_hallucinated/)
  - [Sparse LLM, half the size, all the power](https://arxiv.org/abs/2301.00774)
  - [SpQR lossless optimisation paper](https://arxiv.org/abs/2306.03078)
  - [Landmark attention qlora oogabooga](https://github.com/eugenepentland/landmark-attention-qlora)
  - [LobeHub (github.com)](https://github.com/lobehub)
		- We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC, and creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation. Whether for users or professional developers, LobeHub will be your AI Agent playground.
  - Training & Finetuning
  - Lora
  - [alpaca lora training](https://discord.com/channels/1086739839761776660/1087508281758584852)
  - [Github](https://github.com/tloen/alpaca-lora)
  - [CPU offload lora training](https://github.com/oobabooga/text-generation-webui/commit/09d8119e3cf36257496acfb44e6445a9f40c3d02)
  - [llamatard 4bit chat instructions](https://rentry.org/llama-tard-v2#llama-int8-4bit-chatbot-guide-v2)
  - [The text provides a guide on how to make your own Loras, which are easy and free to create. The process is described in detail, and the text includes instructions on how to create and customize your own Loras.](https://civitai.com/models/22530)
  - Deep retraining
  - Deepspeed chat retraining in hours
  - microsoft just released a new finetuning pipeline
  they finetuned a 65B model in 10 hours using RLHF
  - [TRL
  - Transformer Reinforcement Learning](https://github.com/lvwerra/trl)
  - Hardware requirements for retraining (links to state of the art)
  - [Finetuning blog post](https://www.databricks.com/blog/2023/03/20/fine-tuning-large-language-models-hugging-face-and-deepspeed.html)
  - Pruning
  - [Seems that both 4 bit and straight up pruning don't harm the models much](https://arxiv.org/abs/1803.03635)
  - Merging
  - [diffusion style LLM block merging](https://github.com/TehVenomm/LM_Transformers_BlockMerge)
  - [Domain expert model merging](https://docs.google.com/document/d/1JCzJ1wdBMBVwsFW4CWGUbX-YEDXB0yS4mfFbvwPLQrI/edit)
  - Toolkits and distributed
  - [𝐌𝐞𝐬𝐡 𝐓𝐞𝐧𝐬𝐨𝐫𝐅𝐥𝐨𝐰 (mtf) is a language for distributed deep learning, capable of specifying a broad class of distributed tensor computations. The purpose of Mesh TensorFlow is to formalize and implement distribution strategies for your computation graph over your hardware/processors. For example: "Split the batch over rows of processors and split the units in the hidden layer across columns of processors." Mesh TensorFlow is implemented as a layer over TensorFlow.](https://github.com/tensorflow/mesh)
  - [𝐁𝐌𝐓𝐫𝐚𝐢𝐧 is an efficient large model training toolkit that can be used to train large models with tens of billions of parameters. It can train models in a distributed manner while keeping the code as simple as stand-alone training.](https://github.com/OpenBMB/BMTrain)
  - [𝐂𝐨𝐥𝐨𝐬𝐬𝐚𝐥-𝐀𝐈 provides a collection of parallel components for you. It aim to support us to write our distributed deep learning models just like how we write our model on our laptop. It provide user-friendly tools to kickstart distributed training and inference in a few lines.
  📌Open source solution replicates ChatGPT training process.Ready to go with only 1.6GB GPU memory and gives you 7.73 times faster training: https://lnkd.in/gp4XTCnz](https://colossalai.org/)
  - [EasyLM one stop scaleable toolkit](https://github.com/young-geng/EasyLM)
  - [databerry training and deployment](https://github.com/gmpetrov/databerry)
  - [Petals collaborative fine tuning](https://arxiv.org/abs/2209.01188)
  - [Goodle openXLA training accelerator](https://opensource.googleblog.com/2023/03/openxla-is-ready-to-accelerate-and-simplify-ml-development.html)
  - Adversarial and self instructed
  - [Use GPT API as a GAN (twitter thread)](https://twitter.com/BrianRoemmele/status/1637871062246649856)
  - [Bigscience petals run training through torrents](https://github.com/bigscience-workshop/petals)
  - [airoboros_a_rewrite_of_selfinstructalpaca/](https://www.reddit.com/r/MachineLearning/comments/136vt7b/p_airoboros_a_rewrite_of_selfinstructalpaca/)
  - [A Cookbook of Self-Supervised Learning](https://arxiv.org/abs/2304.12210)
  - [Lora training lessons blog post](https://lightning.ai/pages/community/lora-insights/?)
  - [lit-gpt hackable training platform apache 2](https://github.com/Lightning-AI/lit-gpt)
  - [ChatLLaMA  is a library that allows you to create hyper-personalized ChatGPT-like assistants using your own data and the least amount of compute possible. Instead of depending on one large assistant that “rules us all”, we envision a future where each of us can create our own personalized version of ChatGPT-like assistants.](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/chatllama)
  - [Substack on retraining a 30B model in an A100](https://abuqader.substack.com/p/releasing-alpaca-30b)
  - [𝐀𝐥𝐩𝐚 is a system for training and serving large-scale neural networks. Scaling neural networks to hundreds of billions of parameters has enabled dramatic breakthroughs such as GPT-3, but training and serving these large-scale neural networks require complicated distributed system techniques. Alpa aims to automate large-scale distributed training and serving with just a few lines of code.
  - 📌Alpa:
  - 📌Serving OPT-175B, BLOOM-176B and CodeGen-16B using Alpa: https://lnkd.in/g_ANHH6f](https://github.com/alpa-projects/alpa)
  - [𝐌𝐞𝐠𝐚𝐭𝐫𝐨𝐧-𝐋𝐌 / Megatron is a large, powerful transformer developed by the Applied Deep Learning Research team at NVIDIA. Below repository is for ongoing research on training large transformer language models at scale. Developing efficient, model-parallel (tensor, sequence, and pipeline), and multi-node pre-training of transformer based models such as GPT, BERT, and T5 using mixed precision.
  - 📌pretrain_gpt3_175B.sh: https://lnkd.in/gFA9h8ns](https://github.com/NVIDIA/Megatron-LM)
  - [Koala paper on training with minimal noise for chatbots](https://bair.berkeley.edu/blog/2023/04/03/koala/?ref=emergentmind)
  - [Emmet twitter and github on fine tuning](https://twitter.com/ehalm_/status/1652373239044112388)
  - [Ensure structured json](https://github.com/1rgs/jsonformer)
  - [Lora training guide from Pytorch lightning.ai people](https://lightning.ai/pages/community/tutorial/lora-llm/)
  - [GPTQ paper code](https://github.com/ist-daslab/gptq)
  - [Microsoft guidance](https://github.com/microsoft/guidance)
  - [QLoRA fast retraining of large models](https://github.com/artidoro/qlora)
  - [paper](https://arxiv.org/pdf/2305.14314.pdf)
  - [Some kind of inscrutable training thing](https://readthedocs.org/projects/alibi/downloads/pdf/latest/)
  - [Llama 2 training guide](https://www.philschmid.de/sagemaker-llama2-qlora)
  - [RLHF cheap paper](https://arxiv.org/pdf/2308.01320.pdf)
  - [Sparse LLM cpu training breakthrough](https://huggingface.co/blog/mwitiderrick/llm-infrerence-on-cpu)
  - Evaluation
  - [github of comparisons](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - [compare open source vs closed](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - [LLM zoo](https://github.com/FreedomIntelligence/LLMZoo)
  - [Can AI-Generated Text be Reliably Detected?:](https://arxiv.org/abs/2303.11156)
  - In the paper "Can AI-Generated Text be Reliably Detected?", the authors show that current methods for detecting AI-generated text are not reliable in practical scenarios. They first demonstrate that paraphrasing attacks can break a range of detectors, including those using watermarking schemes and neural network-based detectors. They then provide a theoretical impossibility result showing that for a sufficiently good language model, even the best-possible detector can only perform marginally better than a random classifier. Finally, they show that even LLMs protected by watermarking schemes can be vulnerable to spoofing attacks where adversarial humans can add hidden watermarking signatures to their generated text.
  - [gptzero spots AI authoring](http://gptzero.me/)
  - [GPTZero Case Study (Exploring False Positives): Introduction In this case study, I will be sharing the vast amounts of false positives current AI detection software gives, specifically for this case study I will be demonstrating GPTZero. I personally want to thank the supposed “Healthcare professional” who brought this to my attention via my contact link. It has motivated me to look more into this issue rather than just posting bypasses to these popular AI detection software programs, it will be only more beneficial to highlight their real usability in general.](https://gonzoknows.com/posts/GPTZero-Case-Study/)
  - The text describes a case study on false positives with AI detection software. The study found that the software often gives false positives, particularly with regard to healthcare. The study recommends that users be aware of this issue and take it into account when using such software.
  - [Fake detector product](https://hivemoderation.com/ai-generated-content-detection)
  - [Huggingface leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
  - [[Base models]]
  - Prompt engineering and injection
  - Character injection
  - [json builder](https://oobabooga.github.io/character-creator.html)
  - [Huggingface commodity card retrainer](https://huggingface.co/blog/trl-peft)
  - Prompt model tips for learning
  - 1. Improve your writing by getting feedback.
  - Use this prompt:
  - [paste your writing]
  - "Proofread my writing above. Fix grammar and spelling mistakes. And make suggestions that will improve the clarity of my writing"
  - 2. Use the 80/20 principle to learn faster than ever.
  - "I want to learn about [insert topic]. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it."
  - 3. Learn and develop any new skill.
  - "I want to learn / get better at [insert desired skill]. I am a complete beginner. Create a 30 day learning plan that will help a beginner like me learn and improve this skill."
  - 4. Get short and insight-packed book summaries.
  - "Summarize the book [insert book] by the author [insert author] and give me a list of the most important learnings and insights."
  - 5. Get feedback from history's greatest minds.
  - "Assume you are [insert famous person e.g. Steve Jobs]. Read my argument below and give me feedback as if you were [insert person again]"
  - [insert your argument]
  - 6. Enhance your problem solving skills.
  - "Your role is that of a problem solver. Give me a step-by-step guide to solving [insert your problem]."
  - 7. Generate new ideas and overcome writers block:
  - "I am writing a blog post about [insert topic]. Give me an outline for this blog post with 10 bullet points. Also give me 5 options for a catchy headline."
  - You can adapt this prompt for whatever you're writing.
  - 8. Summarize long texts and accelerate your learning:
  - "Summarize the text below into 500 words or less. Create sections for each important point with a brief summary of that point."
  - 9. Use stories and metaphors to aid your memory.
  - "I am currently learning about [insert topic]. Convert the key lessons from this topic into engaging stories and metaphors to aid my memorization."
  - 10. Strengthen your learning by testing yourself.
  - "I am currently learning about [insert topic]. Ask me a series of questions that will test my knowledge. Identify knowledge gaps in my answers and give me better answers to fill those gaps."
  - [Prompt injection: what s the worst that can happen?](https://simonwillison.net/2023/Apr/14/worst-that-can-happen/)
  - [To jailbreak ChatGPT, you need to get it to really do what you want. This can be done by editing the source code or by using a third-party tool.](https://www.digitaltrends.com/computing/how-to-jailbreak-chatgpt/)
  - General purpose super short prompt
  - develop+extend+support(ideas), vocab(wide+natural+sophisticated), grammar(wide+flexible), cohesion(logical+smooth), clarity(precise+concise), engagement(attention+interest), mood(objective+explanatory), viewpoint(forward_looking)
  - [Mollick methods post on linkedin](https://www.linkedin.com/posts/emollick_there-are-now-three-research-backed-approaches-activity-7089472152701136896-aZNQ?utm_source=share&utm_medium=member_desktop)
  - [Large Language Models are Human-Level Prompt Engineers: We propose an algorithm for automatic instruction generation and selection for large language models with human level performance.](https://openreview.net/forum?id=92gvk82DE-)
  - [Using models to learn well, blog and paper](https://www.oneusefulthing.org/p/how-to-use-ai-to-teach-some-of-the)
  - [Guide to prompting LLMs](https://olickel.com/everything-i-know-about-prompting-llms)
  - basic software primitives
      Transformers are a new type of machine learning model that have been making headlines recently. They are very good at keeping track of context, which is why the text they generate makes sense. In this blog post, we will go over their architecture and how they work.
       <https://txt.cohere.ai/what-are-transformer-models/>
      Datasets 101
       <https://www.latent.space/p/datasets-101?utm_source=substack&utm_medium=email#details>
      implementations
          pytorch/numpty
          tensorflow/jax
      LLM youtube bootcamp 2023
       <https://www.youtube.com/playlist?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ>
      Linkedin LLM roundup
       <https://www.linkedin.com/posts/francesco-saverio-zuppichini-94659a150_ai-ml-ds-activity-7072868294000566272-kV83/?utm_source=share&utm_medium=member_android>
          This is the list of resources I've recommended him
          Where everything started:
  - Attention is all you need Paper: https://lnkd.in/eJWz6ShV Blog: https://lnkd.in/eaUMMy6v
  - GPT-3 Language models are few-shot learners Paper: https://lnkd.in/eUgFk7Db Video: https://lnkd.in/ev8whzkb The first one is where Attention was introduced, the main building block of Transformers. The second one shows that LLMs can actually do zero and few shots Then, I suggest having a look at how we went from GPT3 -> ChatGPT. So how it was possible to make LLMs better at human instructions. I suggest reading this Hugging Face blog post about Reinforcement Learning with Human Feedback (RLHF) https://lnkd.in/eAkM_FUj The next step is what happen later, Meta leaked LLama a smaller language model that was actually very good, the takeaway there is that if you train with more stuff and for longer you obtain a better model. Paper: https://lnkd.in/efZRu4mY The next wave is all built upon that model, so how do we make it better at following human instruction. So I suggest looking at the Stanford Alpaca model. Blog: https://lnkd.in/eqCwvVDZ I also said other interesting models are Vicuna (https://lnkd.in/eCYT3yWx) and WizardLM (https://lnkd.in/efvUD8AD). Saying that people have been focused on finding better and cheaper way to instruct the base LLama model. Another important thing is how to prompt, I've recommended chain of thoughts (https://lnkd.in/eYGxFaeS) and tree of thouhts (https://lnkd.in/ejcfkAeN) I've also shared the LLM leaderboard from Hugging Face : https://lnkd.in/eF6C_W6D YT channels that I think are the bests are: AI Explained: https://lnkd.in/emhTmsds Yannic Kilcher: https://lnkd.in/eRGUVme4 Sam Witteveen: https://lnkd.in/e4EiE5iY What do you think? Any resources that may be useful? Resourced shared Pritam Kumar Ravi Stanford CS25 Course https://lnkd.in/e2PrcwTu
  - LLM and creating new LLM
  - Safefty, alignment, and breaking
  - [image perturbation of multimodal](https://arxiv.org/abs/2307.10490)
  - [universal jailbreaks](https://arxiv.org/abs/2307.15043)
  - Consumer tools using LLM
  - [NexusGPT is a freelancer platform that uses AI to help businesses find the right freelancers for their needs. The platform offers a variety of features to help businesses find the perfect freelancer for their project, including a searchable database of freelancers, a rating system, and a feature that allows businesses to post their project and receive bids from freelancers.](https://nexus.snikpic.io)
  - [RadioGPT: 'World’s first' AI-driven radio station is here (other)](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - Some experts are predicting that the metaverse, a shared online space where users can interact with each other and digital objects, will eventually replace the internet as we know it.
  - [GitHub
  - MatveyM11/Mine-ChatGPT: OpenSourced ChatGPT downloader in markdown format. Download all text or markdown-styled code blocks Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all yours chat's with you locally in the simple .md files.: OpenSourced ChatGPT downloader in markdown format. Download all text or markdown-styled code blocks Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all your...](https://github.com/MatveyM11/Mine-ChatGPT)
  - This repository contains a ChatGPT downloader that can be used to download all text or markdown-styled code blocks from a chat. Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all yours chat's with you locally in the simple .md files.
  - [Linkedin bot to make LLM posts](https://github.com/FrancescoSaverioZuppichini/LinkedInGPT)
  - [ArcAngel Falcon based custom chat](https://www.arcangelai.com/)
  - [OpenAI community Pages](https://community.openai.com/c/announcements/6)
  - ChatGPT stuff
  - Code interpreter
  - [setup prompt by mollick](https://www.linkedin.com/feed/update/urn:li:activity:7083969476685099008/)
  - You are going to be an expert at making powerful and beautiful visualizations using principles from Tufte and other experts. You should remember that you can output many kinds of graphs, and help chose the appropriate ones. You also can output jpgs, html, interactive maps, and animated gifs.
  - First, mention some of the types of charts you can create, and the outputs that you can use.
  Next, read these does and don'ts of data from Angela Zoss
  Do:
  1. Do use the full axis.
  - Avoid distortion.
  - For bar charts, the numerical axis (often the y axis) must start at zero.  Our eyes are very sensitive to the area of bars, and we draw inaccurate conclusions when those bars are truncated.
    (But for line graphs, it may be okay to truncate the y axis.
  - Wide ranges:
  If you have one or two very tall bars, you might consider using multiple charts to show both the full scale and a "zoomed in" view
  - also called a Panel Chart.
  - Consistent intervals:
  - Finally, using the full axis also means that you should not skip values when you have numerical data.  See the charts below that have an axis with dates.  The trend is distorted if you do not have even intervals between your dates.  Make sure your spreadsheet has a data point for every date at a consistent interval, even if that data point is zero
  - 2. Do simplify less important information.
  - Chart elements like gridlines, axis labels, colors, etc. can all be simplified to highlight what is most important/relevant/interesting.  You may be able to eliminate gridlines or reserve colors for isolating individual data series and not for differentiating between all of the series being presented
  - 3. Do be creative with your legends and labels.
  - Possibilitiess
    Label lines individually
    Put value labels on bars to preserve the clean lines of the bar lengths
  - 4. Do pass the squint test.
  - "When you squint at your page, so that you cannot read any of the text, do you still 'get' something about the page?"
  - Which elements draw the most attention? What color pops out?
    Do the elements balance? Is there a clear organization?
    Do contrast, grouping, and alignment serve the function of the chart?
  - Don't:
  1. Don't use 3D or blow apart effects.
  - Studies show that 3D effects reduce comprehension. Blow apart effects likewise make it hard to compare elements and judge areas.
  - 2. Don't use more than (about) six colors.
  - Using color categories that are relatively universal makes it easier to see differences between color
  - The more colors you need (that is, the more categories you try to visualize at once), the harder it is to do this.
  - But different colors should be used for different categories
  (e.g., male/female, types of fruit), not different values in a range (e.g., age, temperature).
  - If you want color to show a numerical value, use a range
  that goes from white to a highly saturated color in one of
  the universal color categories
  - 3. Don't change (style) boats midstream.
  - One of the easiest ways to get the most out of charts is to rely on comparison to do the heavy lifting.
  - Our visual system can detect anomalies in patterns.
  Try keeping the form of a chart consistent across a series so differences from one chart to another will pop out.
  - Use the same colors, axes, labels, etc. across multiple charts.
  - 4. Don't make users do "visual math."
  - If the chart makes it hard to understand an important relationship between variables, do the extra calculation and visualize that as well.
  - This includes using pie charts with wedges that are too similar to each other, or bubble charts with bubbles that are too similar to each other.  Our visual processing system is not well suited to comparing these types of visual areas.
  - We are also not good at holding precise visual imagery in our memory and comparing it to new stimuli; if you are giving a presentation and want the audience to be able to compare two charts, they need to be on the same slide.
  - 5. Don't overload the chart.
  - Adding too much information to a single chart eliminates the advantages of processing data visually; we have to read every element one by one! Try changing chart types, removing or splitting up data points, simplifying colors or positions, etc.
  - Now ask what kind of data visualization I might be interested in, or if I want to upload some data for yout co consider visualizing.
  - [loads of experiments](https://github.com/SkalskiP/awesome-chatgpt-code-interpreter-experiments)
  - General links and papers
  - [Think of language models like ChatGPT as a “calculator for words”: One of the most pervasive mistakes I see people using with large language model tools like ChatGPT is trying to use them as a search engine. As with other LLM …](https://simonwillison.net/2023/Apr/2/calculator-for-words/)
  - Language models like ChatGPT are not reliable for use as a search engine, but can be thought of as a "calculator for words". This means that they are good for manipulating language, but not for retrieving accurate information.
  - [Peak LLM: Prompt injection might be just the beginning](https://ihavemanythoughts.substack.com/p/peak-llm)
  - [Language models as inductive reasoners paper](https://sentic.net/language-models-as-inductive-reasoners.pdf)
  - [This repository contains a collection of papers and resources on Reasoning in Large Language Models. The papers survey the state of the art in this area, and discuss how large language models can be used to obtain emergent abilities.](https://github.com/jeffhj/LM-reasoning)
  - [Full trainingset used by bloombergAI](https://mobile.twitter.com/omarsar0/status/1641788196550856704)
  - [Zain Kahn on LinkedIn reports that over 1,000 AI tools were released in March. He states that ChatGPT is just the tip of the iceberg, and that there are 20 AI tools that will transform productivity forever.](https://www.linkedin.com/posts/zainkahn_1000-ai-tools-were-released-in-march-activity-7048285306101358592-4wAA?utm_source=share&utm_medium=member_android)
  - [Language driven shell for OS (ooft)](https://www.reddit.com/r/MachineLearning/comments/129wzdk/p_engshell_a_gpt4_driven_englishlanguage_shell/)
  - [The text contains information on the release of guidelines by the DPA for the use of AI, as well as on similar efforts by other organizations. It also provides links to resources on the topic.](https://www.linkedin.com/posts/ezra-eeman-8a5ba64_dpa-just-released-its-guidelines-for-the-activity-7048985893910519808-921y?utm_source=share&utm_medium=member_android)
  - [Mind AI team website](https://mind.ai/technology)
  - [LMStudio model manager](https://lmstudio.ai/)
  - [Ahead of AI substack](https://magazine.sebastianraschka.com/archive)
  - [Meta research paper](https://drive.google.com/file/d/1i4NJKAggS82wqMamCJ1OHRGgViuyoY6R/view)
  - [State of AI report](https://www.stateof.ai/)
  - [AI ML passes American medical exams](https://www.medpagetoday.com/special-reports/exclusives/102705)
  - [Travelling salesman problem](https://github.com/diego-vicente/som-tsp)
  - [How the compression is so huge in diffusion models](https://medium.com/@socialemail/how-diffusion-models-can-achieve-seemingly-arbitrarily-large-compression-ratios-through-learning-2b21a317a46a)
  - [Understanding deep learning book](https://udlbook.github.io/udlbook/)
  - The book "Understanding Deep Learning" by Simon J.D. Prince covers a wide range of topics related to deep learning, from supervised and unsupervised learning to different types of neural networks and training methods. There are also chapters on measuring performance, regularization, and why deep learning works. The book includes many resources for instructors, such as slides, notebooks, and figures.
  - [This repository is a collection of links to various courses and resources about Artificial Intelligence (AI).](https://github.com/SkalskiP/courses)
  - [Top courses link github](https://github.com/SkalskiP/courses)
  - [State of GPT youtube presentation with great overview](https://www.youtube.com/watch?v=bZQun8Y4L2A)
  - Infrastructure
  - [rubbrband github auto deployments](https://rubbrband.com/)
  - [Hosting VPS](https://1984.hosting/)
  - [Free custom domains VPS](https://codesphere.com/pricing?anonymousId=YTQLcRg)
  - [Arch linux for laptop](https://wiki.archlinux.org/title/HP_Spectre_x360_(2020))
  - [360 camera compression paper](https://www.researchgate.net/publication/368728037_Masked360_Enabling_Robust_360-degree_Video_Streaming_with_Ultra_Low_Bandwidth_Consumption)
  - Multiligual and abstract translation
  - [meta seamless M4T](https://github.com/facebookresearch/seamless_communication#seamlessm4t)
  - | 
         | 
          CustomGPT is a platform that enables businesses to create their own chatbot using their own content, resulting in accurate responses without making up facts. The tool is designed to help businesses increase customer engagement and improve employee efficiency, ultimately leading to revenue growth and a competitive advantage. CustomGPT offers easy integration of content through seamless website integration or file uploading. The chatbot comes with various pricing plans, depending on the number of custom chatbots, content pages, and queries. The platform is trusted by global companies and customers, and it can be deployed for customer service, support helpdesk, and topic research. CustomGPT is powered by ChatGPT-4 and can be deployed through API or ChatGPT Plugins. The company offers a live demo and contact email for further inquiries. https://customgpt.ai/
         | 
       |
  - [h2o document summary / summariser with long context](https://github.com/h2oai/h2ogpt)
  - | 
         | 
          The website replit.com has blocked your access due to the presence of potentially harmful actions, such as submitting a certain word or phrase, a SQL command or malformed data. This is a security measure to protect the website from online attacks. To resolve the issue, you can contact the site owner and provide details of the actions that caused the block and the Cloudflare Ray ID found at the bottom of the page. https://blog.replit.com/llm-training
         | 
       |
  - | 
         | 
          NodePad is an LLM-assisted brainstorming experiment that helps users capture, expand, question, and organize their ideas visually. To create a new node, users simply write their thoughts in the input field and hit Enter. Nodes can be edited by double-clicking on them, linked through connectors, and deleted by clicking on them and hitting Backspace or Delete. Users can explore the app or consult the User Guide for further assistance. NodePad is designed for rapid note-taking and serendipitous ideation. https://nodepad.space/#
         | 
       |
  - [Patterns for building LLMs blog post](https://eugeneyan.com/writing/llm-patterns/)
  - [textgenerator io self host](https://github.com/TextGeneratorio)
  - [Orca: The Model Few Saw Coming](https://www.youtube.com/watch?v=Dt_UNg7Mchg%22%3E%3Crichcontent)
  - OpenOrca includes trained in tree of thought examples and is down to 500k training tokens for the same performance as the original Microsoft Orca paper
  - [Mistral Zephyr tune for exceptional performance](https://github.com/huggingface/alignment-handbook)
  - [youtube on it](https://www.youtube.com/watch?v=Up7VKg6ZE90)
  - LLMs
  - The AnythingLLM project is a full-stack application designed to allow users to turn any document or piece of content into reference data that can be used by any LLM during conversations. The application can be hosted remotely, but also supports local instances. It utilizes Pinecone, ChromaDB, and other vector storage solutions, as well as OpenAI for LLM and chatting capabilities. Documents are organized into workspaces, which function like threads and allow for context to be kept clean. The monorepo consists of three main sections: the collector, frontend, and server. Requirements include yarn, node, Python 3.8+, access to an LLM such as GPT-3.5 or GPT-4, and a free account with Pinecone.io. The Docker setup enables users to get started in minutes, and the development environment includes instructions for setting up the necessary .env files and collector scripts to embed content. The project is open source and contributors can create issues and pull requests following the designated format. https://github.com/Mintplex-Labs/anything-llm
	         | 
	       |
  - [AWQ 4 bit quants](https://github.com/mit-han-lab/llm-awq)
  - [Tinychat](https://github.com/mit-han-lab/llm-awq/tree/main/tinychat)
  - [Openshat model](https://github.com/imoneoi/openchat)
  - | 
         | 
          NodePad is a brainstorming tool that allows users to create nodes for their thoughts. Users can create new nodes by typing in the input field, and edit nodes by double-clicking on them. Nodes can be connected through connectors, and both nodes and connectors can be deleted by selecting and pressing Backspace or Delete. NodePad is an LLM-assisted brainstorming experiment that helps users capture, expand, question, and organize their ideas visually. The app offers a User Guide for assistance and is available for download through React Flow. https://nodepad.space/#
         | 
       |
  | 
         | 
          AnythingLLM is a full-stack personalized AI assistant application that allows users to turn any document or piece of content into a piece of data that can be used as reference when chatting. The application uses LLMs that can be hosted remotely or locally, and supports Pinecone, ChromaDB and more for vector storage and OpenAI for LLM chatting. AnythingLLM aims to be a full-stack application that can be run locally as well as hosted remotely and allows for intelligent chatting with any document provided to it. It divides documents into workspaces and provides simple UI-based tools to atomically manage the documents. There are two chat modes, conversation and query, and each chat response contains a citation that is linked to the original content. The monorepo consists of three main sections- collector, frontend and server, and requirements for the application include yarn and node on the user's machine, Python 3.8+ for running scripts in the collector, access to an LLM like GPT-3.5, GPT-4 or a drop-in replacement, and a Pinecone.io free account. https://github.com/Mintplex-Labs/anything-llm
         | 
       |
  - [This text provides instructions on how to run LLM-As-Chatbot in your cloud using dstack. The steps are as follows:  1. Install and set up dstack by running the command pip install dstack[aws,gcp,azure] -U and then dstack start to start the server.  2. Create a profile by creating a .dstack/profiles.yml file that points to your created project and describes the resources you need. Example:  ``` profiles:   - name: gcp     project: gcp     resources:       memory: 48GB       gpu:         memory: 24GB     default: true ```  3. Run the initialization command: dstack init.  4. Finally, use the dstack run . command to build the environment and run LLM-As-Chatbot in your cloud. dstack will automatically forward the port to your local machine, providing secure and convenient access.  The instructions emphasize the use of dstack to automate the provisioning of cloud resources and simplify the process of running LLM-As-Chatbot in the cloud. More information about dstack and its documentation can be found for further details.](https://github.com/dstackai/LLM-As-Chatbot/wiki/Running-LLM-As-Chatbot-in-your-cloud)
  - [This text describes a project called Simple LLM Finetuner, which is a user-friendly interface designed to facilitate fine-tuning various language models using the LoRA method via the PEFT library on NVIDIA GPUs. The interface allows users to easily manage their datasets, customize parameters, train the models, and evaluate their inference capabilities.   The project includes several features such as the ability to paste datasets directly into the UI, adjustable parameters for fine-tuning and inference, and a beginner-friendly interface with explanations for each parameter. It also provides instructions on how to get started, including prerequisites such as Linux or WSL, a modern NVIDIA GPU with at least 16 GB of VRAM, and the installation of required packages using a virtual environment.  To use the project, users are instructed to clone the repository and install the required packages. Then, they can launch the interface by running the app.py file and accessing it in a browser. They can input their training data, specify the PEFT adapter name, and start the training process. After training is complete, users can navigate to the Inference tab to perform inference using their trained models.  The project provides a YouTube walkthrough for additional guidance and is licensed under the MIT License.  Overall, the Simple LLM Finetuner project aims to simplify the process of fine-tuning language models using the LoRA method and provide a user-friendly interface for managing and evaluating models.](https://github.com/lxe/simple-llama-finetuner)
  - [Maverick is an AI-driven video marketing platform that helps ecommerce stores enhance customer interactions. By creating personalized videos for each customer, Maverick enables brands to build trust, improve brand perception, and increase customer satisfaction. The platform has been well-received by ecommerce brands, with users praising the personalized videos for their effectiveness in engaging with customers and increasing subscription enrollments.  Testimonials from merchants highlight the positive impact of Maverick on their businesses. Merchants have seen a significant increase in customer engagement, with over 100 email responses per week expressing gratitude for the personalized videos. This level of interaction helps strengthen customer relationships and loyalty.  Customers of these ecommerce brands have also expressed their appreciation for the personalized videos. They mention feeling valued and delighted by the direct communication from the brand, which sets the companies apart from others in the market. The personalized videos have made customers more loyal, with some even becoming lifetime members of the brands they previously patronized.  Overall, Maverick's AI-generated video marketing approach has proven to be a game changer for ecommerce brands. It enables personalized interactions with customers at scale, leading to increased customer satisfaction, brand loyalty, and reduced refund requests. The platform has received positive feedback from both merchants and their customers, highlighting the impact and success of Maverick in the ecommerce industry.](https://lnkd.in/eptCVijb)
  - [A Twitter user named Justin Alvey recently tweeted about advancements in artificial intelligence. He mentioned a tool called LLM chaining, which allows users to perform various tasks with emails. This tool was inspired by LangChainAI. Justin Alvey also noted that this functionality is now available in real-time, thanks to OpenAI's gpt-3.5-turbo model. The tweet has gained significant attention, with hundreds of thousands of views, retweets, likes, quotes, and bookmarks.](https://twitter.com/justLV/status/1637876167763202053)
  - [The text is a LinkedIn post by Francesco Saverio Zuppichini, a Machine Learning Engineer, recommending resources to learn about Language Learning Models (LLMs).  The post includes a list of resources that Zuppichini recommended to a friend who wanted to quickly learn about LLMs. The recommended resources include academic papers, blogs, videos, and YouTube channels. Zuppichini also mentions the importance of training models with more data and for longer durations to achieve better results. He suggests looking at models like Vicuna and WizardLM, as well as different methods of prompting, such as chain of thoughts and tree of thoughts. Additionally, Zuppichini shares the LLM leaderboard from Hugging Face and encourages others to share any useful resources they may have. The post receives positive feedback from other LinkedIn users, who appreciate the resources and share their own suggestions.](https://www.linkedin.com/posts/francesco-saverio-zuppichini-94659a150_ai-ml-ds-activity-7072868294000566272-kV83?utm_source=shareandutm_medium=member_android)

  - ## Grokking and Generalization
  - **Concept:** One of the most exciting developments in AI is the ability of systems to "grok" a problem. This means that they can transition from simply memorizing examples to learning the underlying algorithms and principles that govern the problem.
  - **Example:** Imagine training an AI to perform modular addition. This involves taking two numbers, adding them together, and then dividing by a third number, taking the remainder. (e.g., 5 + 12 modulo 12 = 0; 17 + 8 modulo 10 = 5). Initially, the AI might do well on the training data but struggle with new examples. This is a classic case of overfitting.
  - **Significance:** This "grokking" phenomenon suggests that AI systems can go beyond simply memorizing examples and truly understand the underlying principles. This ability to generalize knowledge is crucial for developing AI systems that can solve real-world problems.

  - ## Scaling Laws and Compute Budgets
  - **Concept:** As AI models grow larger and more complex, researchers have discovered something called "scaling laws". These laws attempt to predict how the performance of an AI system will change based on the amount of data and compute resources used during training.
  - **Pareto Curve:** There's often a sweet spot, a "Pareto curve", where increasing compute budget leads to diminishing returns in performance. If you keep adding more compute power, you might see improvements, but at some point, those improvements will become increasingly marginal.
  - **Visual:** A graph showing performance (loss) across different compute budgets, illustrating the Pareto curve. The graph demonstrates the optimal point where increasing resources leads to the most significant improvements.
  - **Projection:** These scaling laws are powerful tools. They allow us to predict the future performance of AI models based on projected compute resources. Researchers can use these laws to estimate how much compute will be required to achieve a specific level of performance.
  - **Large-scale Training:** Today's most advanced AI systems, such as GPT-4, require incredible computational resources. Training these models can cost tens of millions, even billions of dollars, just for the compute resources alone. This doesn't even include the cost of data acquisition, research, and salaries. The scale of AI development is truly staggering.

  - ## Next Word/Token Prediction
  - **Method:** This technique unlocks the entire body of human text as a potential training dataset. Imagine having access to every book, article, blog post, and conversation ever written.
  - **Process:** The AI system learns by predicting the next word in a sequence. It takes into account the preceding words, trying to decipher the underlying grammar, semantics, and even the author's style.
  - **Vocabulary:** These systems have vast vocabularies, sometimes containing tens of thousands of words or tokens. The AI needs to learn to select the most likely word from this massive set of possibilities.
  - **Loss Function:** The AI's prediction is then scored against the actual next word in the sequence. This score tells the AI how accurate its prediction was.
  - **Backpropagation:** Using backpropagation, the AI adjusts its parameters to improve its predictive accuracy. It's constantly refining its understanding of language, striving to become more fluent and accurate in its predictions.

  - ## How societal bias seeps into LLMs
  - **Training data:** If real-world text samples contain racial stereotypes, sexist viewpoints, etc., the LLM can internalize these.
  - **Associations:** Models learn by statistical patterns. "If X then often Y" can replicate prejudices even if 'X' is a demographic and 'Y' is a negative or limiting assumption.
  - [Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings](https://arxiv.org/abs/1607.06520)

  - ### Distributed Technology
  - **Optimizations and Scaling**
		- [Nvidia DASK](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/): Tutorial for distributed computing with GPUs.
		- [SWARM Training Paper](https://arxiv.org/pdf/2301.11913.pdf): Discusses methods for distributed training of LLMs.
  - Interfaces and scaling
  - [LobeHub (github.com)](https://github.com/lobehub)
  - Distributed tech
  - [horde image and llm](https://horde.koboldai.net/)
  - Browser based whole models
  - [The Web LLM project has created a browser-based version of the vicuna-7b Large Language Model, which is impressively accurate and fast. The model is able to handle complex prompts and provide accurate responses, although it does sometimes make mistakes.](https://simonwillison.net/2023/Apr/16/web-llm/)
  - [Nvidia DASK](https://developer.nvidia.com/blog/dask-tutorial-beginners-guide-to-distributed-computing-with-gpus-in-python/)
  - [SWARM training paper](https://arxiv.org/pdf/2301.11913.pdf)
  - immersive spaces
  - Why you should use now generative AI in your metaverse company. Or maybe not
		- The Ghost Howls https://skarredghost.com/2023/02/11/generative-ai-metaverse-company/
  - [games dev](https://www.traffickinggame.com/ai-assisted-graphics/)
  - [Instant app from prompts](https://twitter.com/ronithhh/status/1641318606549176321)
  - [endless runner without any coding experience](https://replit.com/@asrsubs/SkyRoads-GPT-4)
  - [Edge (phone deployment on android)](https://github.com/mlc-ai/mlc-llm/tree/main/android)
  - [Tree of thought github](https://github.com/ysymyth/tree-of-thought-llm)
  - [Scaling challenges paper](https://arxiv.org/abs/2307.10169)
  - [Flow node based LLM design](https://github.com/FlowiseAI/Flowise)
  - [TensorRT-LLM optimisation repo](https://github.com/NVIDIA/TensorRT-LLM)
  - [Flowchat](https://github.com/flatypus/flowchat)
  - Multi Modal
  - [MultimodalC4 is a multimodal extension of c4 that interleaves millions of images with text. The corpus contains over a billion images, and the text is interleaved with the images to provide context.](https://github.com/allenai/mmc4)
  - [Otter with weights](https://otter-ntu.github.io/)
  - [minigpt](https://minigpt-4.github.io/)
  - [MiniGPT local multimodal](https://github.com/Vision-CAIR/MiniGPT-4)
  - [Fuya](https://www.adept.ai/blog/fuyu-8b?)
  - emotion tracking
  - [laion empathetic](https://dct.openempathic.ai/guide/#:~:text=Rating%20Arousal%20and%20Valence%3A)
  - [entity identify open LLM](https://www.numind.ai/blog/a-foundation-model-for-entity-recognition)
  - Optimisations
  - [𝐃𝐞𝐞𝐩𝐒𝐩𝐞𝐞𝐝 is an easy-to-use deep learning optimization software suite that enables unprecedented scale and speed for DL Training and Inference. Visit us at deepspeed.ai or our Github repo.
  - 📌Megatron-LM GPT2 tutorial: https://lnkd.in/gXvPhXqb](https://github.com/microsoft/DeepSpeed)
  - [The text provides instructions on how to train your own large language models using Replit. It explains that you will need to first create a Replit account and then follow the instructions on the website.](https://blog.replit.com/llm-training)
  - [Futurepedia is the largest AI tools directory, with over 700 tools in various categories. It is updated daily, and features search and filter options to help you find the right tool for your needs.](http://Futurepedia.io)
  - [GitHub
		- gitnomad24601/ShogScript: ShogScript: The GitHub repository "ShogScript" contains a proof-of-concept pseudocode for GPT-4 AI interactions, ideal for storytelling & communication. The code is released under the MIT license.](https://github.com/gitnomad24601/ShogScript)
  - [Flash decoding 8x](https://together.ai/blog/flash-decoding-for-long-context-inference?)
  - [Understanding Large Language Models: A Cross-Section of the Most Relevant Literature To Get Up to Speed](https://magazine.sebastianraschka.com/p/understanding-large-language-models)
  - [The text describes a change to support the GPTQ triton commit c90adef. This change allows for the disabling of quant attention.](https://github.com/oobabooga/text-generation-webui/pull/1229)
  - [2000x performance improvement paper](https://arxiv.org/abs/2305.02301)
  - [Flexgen](https://github.com/FMInference/FlexGen#get-started-with-a-single-gpu)
  - [4bit compression](https://github.com/johnsmith0031/alpaca_lora_4bit)
  - [GPT4 self hallucination checking](https://www.reddit.com/r/MachineLearning/comments/123b66w/dgpt4_might_be_able_to_tell_you_if_it_hallucinated/)
  - [Sparse LLM, half the size, all the power](https://arxiv.org/abs/2301.00774)
  - [SpQR lossless optimisation paper](https://arxiv.org/abs/2306.03078)
  - [Landmark attention qlora oogabooga](https://github.com/eugenepentland/landmark-attention-qlora)
  - [LobeHub (github.com)](https://github.com/lobehub)
		- We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC, and creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation. Whether for users or professional developers, LobeHub will be your AI Agent playground.
  - Training & Finetuning
  - Lora
  - [alpaca lora training](https://discord.com/channels/1086739839761776660/1087508281758584852)
  - [Github](https://github.com/tloen/alpaca-lora)
  - [CPU offload lora training](https://github.com/oobabooga/text-generation-webui/commit/09d8119e3cf36257496acfb44e6445a9f40c3d02)
  - [llamatard 4bit chat instructions](https://rentry.org/llama-tard-v2#llama-int8-4bit-chatbot-guide-v2)
  - [The text provides a guide on how to make your own Loras, which are easy and free to create. The process is described in detail, and the text includes instructions on how to create and customize your own Loras.](https://civitai.com/models/22530)
  - Deep retraining
  - Deepspeed chat retraining in hours
  - microsoft just released a new finetuning pipeline
  they finetuned a 65B model in 10 hours using RLHF
  - [TRL
  - Transformer Reinforcement Learning](https://github.com/lvwerra/trl)
  - Hardware requirements for retraining (links to state of the art)
  - [Finetuning blog post](https://www.databricks.com/blog/2023/03/20/fine-tuning-large-language-models-hugging-face-and-deepspeed.html)
  - Pruning
  - [Seems that both 4 bit and straight up pruning don't harm the models much](https://arxiv.org/abs/1803.03635)
  - Merging
  - [diffusion style LLM block merging](https://github.com/TehVenomm/LM_Transformers_BlockMerge)
  - [Domain expert model merging](https://docs.google.com/document/d/1JCzJ1wdBMBVwsFW4CWGUbX-YEDXB0yS4mfFbvwPLQrI/edit)
  - Toolkits and distributed
  - [𝐌𝐞𝐬𝐡 𝐓𝐞𝐧𝐬𝐨𝐫𝐅𝐥𝐨𝐰 (mtf) is a language for distributed deep learning, capable of specifying a broad class of distributed tensor computations. The purpose of Mesh TensorFlow is to formalize and implement distribution strategies for your computation graph over your hardware/processors. For example: "Split the batch over rows of processors and split the units in the hidden layer across columns of processors." Mesh TensorFlow is implemented as a layer over TensorFlow.](https://github.com/tensorflow/mesh)
  - [𝐁𝐌𝐓𝐫𝐚𝐢𝐧 is an efficient large model training toolkit that can be used to train large models with tens of billions of parameters. It can train models in a distributed manner while keeping the code as simple as stand-alone training.](https://github.com/OpenBMB/BMTrain)
  - [𝐂𝐨𝐥𝐨𝐬𝐬𝐚𝐥-𝐀𝐈 provides a collection of parallel components for you. It aim to support us to write our distributed deep learning models just like how we write our model on our laptop. It provide user-friendly tools to kickstart distributed training and inference in a few lines.
  📌Open source solution replicates ChatGPT training process.Ready to go with only 1.6GB GPU memory and gives you 7.73 times faster training: https://lnkd.in/gp4XTCnz](https://colossalai.org/)
  - [EasyLM one stop scaleable toolkit](https://github.com/young-geng/EasyLM)
  - [databerry training and deployment](https://github.com/gmpetrov/databerry)
  - [Petals collaborative fine tuning](https://arxiv.org/abs/2209.01188)
  - [Goodle openXLA training accelerator](https://opensource.googleblog.com/2023/03/openxla-is-ready-to-accelerate-and-simplify-ml-development.html)
  - Adversarial and self instructed
  - [Use GPT API as a GAN (twitter thread)](https://twitter.com/BrianRoemmele/status/1637871062246649856)
  - [Bigscience petals run training through torrents](https://github.com/bigscience-workshop/petals)
  - [airoboros_a_rewrite_of_selfinstructalpaca/](https://www.reddit.com/r/MachineLearning/comments/136vt7b/p_airoboros_a_rewrite_of_selfinstructalpaca/)
  - [A Cookbook of Self-Supervised Learning](https://arxiv.org/abs/2304.12210)
  - [Lora training lessons blog post](https://lightning.ai/pages/community/lora-insights/?)
  - [lit-gpt hackable training platform apache 2](https://github.com/Lightning-AI/lit-gpt)
  - [ChatLLaMA  is a library that allows you to create hyper-personalized ChatGPT-like assistants using your own data and the least amount of compute possible. Instead of depending on one large assistant that “rules us all”, we envision a future where each of us can create our own personalized version of ChatGPT-like assistants.](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/chatllama)
  - [Substack on retraining a 30B model in an A100](https://abuqader.substack.com/p/releasing-alpaca-30b)
  - [𝐀𝐥𝐩𝐚 is a system for training and serving large-scale neural networks. Scaling neural networks to hundreds of billions of parameters has enabled dramatic breakthroughs such as GPT-3, but training and serving these large-scale neural networks require complicated distributed system techniques. Alpa aims to automate large-scale distributed training and serving with just a few lines of code.
  - 📌Alpa:
  - 📌Serving OPT-175B, BLOOM-176B and CodeGen-16B using Alpa: https://lnkd.in/g_ANHH6f](https://github.com/alpa-projects/alpa)
  - [𝐌𝐞𝐠𝐚𝐭𝐫𝐨𝐧-𝐋𝐌 / Megatron is a large, powerful transformer developed by the Applied Deep Learning Research team at NVIDIA. Below repository is for ongoing research on training large transformer language models at scale. Developing efficient, model-parallel (tensor, sequence, and pipeline), and multi-node pre-training of transformer based models such as GPT, BERT, and T5 using mixed precision.
  - 📌pretrain_gpt3_175B.sh: https://lnkd.in/gFA9h8ns](https://github.com/NVIDIA/Megatron-LM)
  - [Koala paper on training with minimal noise for chatbots](https://bair.berkeley.edu/blog/2023/04/03/koala/?ref=emergentmind)
  - [Emmet twitter and github on fine tuning](https://twitter.com/ehalm_/status/1652373239044112388)
  - [Ensure structured json](https://github.com/1rgs/jsonformer)
  - [Lora training guide from Pytorch lightning.ai people](https://lightning.ai/pages/community/tutorial/lora-llm/)
  - [GPTQ paper code](https://github.com/ist-daslab/gptq)
  - [Microsoft guidance](https://github.com/microsoft/guidance)
  - [QLoRA fast retraining of large models](https://github.com/artidoro/qlora)
  - [paper](https://arxiv.org/pdf/2305.14314.pdf)
  - [Some kind of inscrutable training thing](https://readthedocs.org/projects/alibi/downloads/pdf/latest/)
  - [Llama 2 training guide](https://www.philschmid.de/sagemaker-llama2-qlora)
  - [RLHF cheap paper](https://arxiv.org/pdf/2308.01320.pdf)
  - [Sparse LLM cpu training breakthrough](https://huggingface.co/blog/mwitiderrick/llm-infrerence-on-cpu)
  - Evaluation
  - [github of comparisons](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - [compare open source vs closed](https://georgesung.github.io/ai/llm-qa-eval-wikipedia/)
  - [LLM zoo](https://github.com/FreedomIntelligence/LLMZoo)
  - [Can AI-Generated Text be Reliably Detected?:](https://arxiv.org/abs/2303.11156)
  - In the paper "Can AI-Generated Text be Reliably Detected?", the authors show that current methods for detecting AI-generated text are not reliable in practical scenarios. They first demonstrate that paraphrasing attacks can break a range of detectors, including those using watermarking schemes and neural network-based detectors. They then provide a theoretical impossibility result showing that for a sufficiently good language model, even the best-possible detector can only perform marginally better than a random classifier. Finally, they show that even LLMs protected by watermarking schemes can be vulnerable to spoofing attacks where adversarial humans can add hidden watermarking signatures to their generated text.
  - [gptzero spots AI authoring](http://gptzero.me/)
  - [GPTZero Case Study (Exploring False Positives): Introduction In this case study, I will be sharing the vast amounts of false positives current AI detection software gives, specifically for this case study I will be demonstrating GPTZero. I personally want to thank the supposed “Healthcare professional” who brought this to my attention via my contact link. It has motivated me to look more into this issue rather than just posting bypasses to these popular AI detection software programs, it will be only more beneficial to highlight their real usability in general.](https://gonzoknows.com/posts/GPTZero-Case-Study/)
  - The text describes a case study on false positives with AI detection software. The study found that the software often gives false positives, particularly with regard to healthcare. The study recommends that users be aware of this issue and take it into account when using such software.
  - [Fake detector product](https://hivemoderation.com/ai-generated-content-detection)
  - [Huggingface leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
  - [[Base models]]
  - Prompt engineering and injection
  - Character injection
  - [json builder](https://oobabooga.github.io/character-creator.html)
  - [Huggingface commodity card retrainer](https://huggingface.co/blog/trl-peft)
  - Prompt model tips for learning
  - 1. Improve your writing by getting feedback.
  - Use this prompt:
  - [paste your writing]
  - "Proofread my writing above. Fix grammar and spelling mistakes. And make suggestions that will improve the clarity of my writing"
  - 2. Use the 80/20 principle to learn faster than ever.
  - "I want to learn about [insert topic]. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it."
  - 3. Learn and develop any new skill.
  - "I want to learn / get better at [insert desired skill]. I am a complete beginner. Create a 30 day learning plan that will help a beginner like me learn and improve this skill."
  - 4. Get short and insight-packed book summaries.
  - "Summarize the book [insert book] by the author [insert author] and give me a list of the most important learnings and insights."
  - 5. Get feedback from history's greatest minds.
  - "Assume you are [insert famous person e.g. Steve Jobs]. Read my argument below and give me feedback as if you were [insert person again]"
  - [insert your argument]
  - 6. Enhance your problem solving skills.
  - "Your role is that of a problem solver. Give me a step-by-step guide to solving [insert your problem]."
  - 7. Generate new ideas and overcome writers block:
  - "I am writing a blog post about [insert topic]. Give me an outline for this blog post with 10 bullet points. Also give me 5 options for a catchy headline."
  - You can adapt this prompt for whatever you're writing.
  - 8. Summarize long texts and accelerate your learning:
  - "Summarize the text below into 500 words or less. Create sections for each important point with a brief summary of that point."
  - 9. Use stories and metaphors to aid your memory.
  - "I am currently learning about [insert topic]. Convert the key lessons from this topic into engaging stories and metaphors to aid my memorization."
  - 10. Strengthen your learning by testing yourself.
  - "I am currently learning about [insert topic]. Ask me a series of questions that will test my knowledge. Identify knowledge gaps in my answers and give me better answers to fill those gaps."
  - [Prompt injection: what s the worst that can happen?](https://simonwillison.net/2023/Apr/14/worst-that-can-happen/)
  - [To jailbreak ChatGPT, you need to get it to really do what you want. This can be done by editing the source code or by using a third-party tool.](https://www.digitaltrends.com/computing/how-to-jailbreak-chatgpt/)
  - General purpose super short prompt
  - develop+extend+support(ideas), vocab(wide+natural+sophisticated), grammar(wide+flexible), cohesion(logical+smooth), clarity(precise+concise), engagement(attention+interest), mood(objective+explanatory), viewpoint(forward_looking)
  - [Mollick methods post on linkedin](https://www.linkedin.com/posts/emollick_there-are-now-three-research-backed-approaches-activity-7089472152701136896-aZNQ?utm_source=share&utm_medium=member_desktop)
  - [Large Language Models are Human-Level Prompt Engineers: We propose an algorithm for automatic instruction generation and selection for large language models with human level performance.](https://openreview.net/forum?id=92gvk82DE-)
  - [Using models to learn well, blog and paper](https://www.oneusefulthing.org/p/how-to-use-ai-to-teach-some-of-the)
  - [Guide to prompting LLMs](https://olickel.com/everything-i-know-about-prompting-llms)
  - basic software primitives
      Transformers are a new type of machine learning model that have been making headlines recently. They are very good at keeping track of context, which is why the text they generate makes sense. In this blog post, we will go over their architecture and how they work.
       <https://txt.cohere.ai/what-are-transformer-models/>
      Datasets 101
       <https://www.latent.space/p/datasets-101?utm_source=substack&utm_medium=email#details>
      implementations
          pytorch/numpty
          tensorflow/jax
      LLM youtube bootcamp 2023
       <https://www.youtube.com/playlist?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ>
      Linkedin LLM roundup
       <https://www.linkedin.com/posts/francesco-saverio-zuppichini-94659a150_ai-ml-ds-activity-7072868294000566272-kV83/?utm_source=share&utm_medium=member_android>
          This is the list of resources I've recommended him
          Where everything started:
  - Attention is all you need Paper: https://lnkd.in/eJWz6ShV Blog: https://lnkd.in/eaUMMy6v
  - GPT-3 Language models are few-shot learners Paper: https://lnkd.in/eUgFk7Db Video: https://lnkd.in/ev8whzkb The first one is where Attention was introduced, the main building block of Transformers. The second one shows that LLMs can actually do zero and few shots Then, I suggest having a look at how we went from GPT3 -> ChatGPT. So how it was possible to make LLMs better at human instructions. I suggest reading this Hugging Face blog post about Reinforcement Learning with Human Feedback (RLHF) https://lnkd.in/eAkM_FUj The next step is what happen later, Meta leaked LLama a smaller language model that was actually very good, the takeaway there is that if you train with more stuff and for longer you obtain a better model. Paper: https://lnkd.in/efZRu4mY The next wave is all built upon that model, so how do we make it better at following human instruction. So I suggest looking at the Stanford Alpaca model. Blog: https://lnkd.in/eqCwvVDZ I also said other interesting models are Vicuna (https://lnkd.in/eCYT3yWx) and WizardLM (https://lnkd.in/efvUD8AD). Saying that people have been focused on finding better and cheaper way to instruct the base LLama model. Another important thing is how to prompt, I've recommended chain of thoughts (https://lnkd.in/eYGxFaeS) and tree of thouhts (https://lnkd.in/ejcfkAeN) I've also shared the LLM leaderboard from Hugging Face : https://lnkd.in/eF6C_W6D YT channels that I think are the bests are: AI Explained: https://lnkd.in/emhTmsds Yannic Kilcher: https://lnkd.in/eRGUVme4 Sam Witteveen: https://lnkd.in/e4EiE5iY What do you think? Any resources that may be useful? Resourced shared Pritam Kumar Ravi Stanford CS25 Course https://lnkd.in/e2PrcwTu
  - LLM and creating new LLM
  - Safefty, alignment, and breaking
  - [image perturbation of multimodal](https://arxiv.org/abs/2307.10490)
  - [universal jailbreaks](https://arxiv.org/abs/2307.15043)
  - Consumer tools using LLM
  - [NexusGPT is a freelancer platform that uses AI to help businesses find the right freelancers for their needs. The platform offers a variety of features to help businesses find the perfect freelancer for their project, including a searchable database of freelancers, a rating system, and a feature that allows businesses to post their project and receive bids from freelancers.](https://nexus.snikpic.io)
  - [RadioGPT: 'World’s first' AI-driven radio station is here (other)](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - Some experts are predicting that the metaverse, a shared online space where users can interact with each other and digital objects, will eventually replace the internet as we know it.
  - [GitHub
  - MatveyM11/Mine-ChatGPT: OpenSourced ChatGPT downloader in markdown format. Download all text or markdown-styled code blocks Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all yours chat's with you locally in the simple .md files.: OpenSourced ChatGPT downloader in markdown format. Download all text or markdown-styled code blocks Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all your...](https://github.com/MatveyM11/Mine-ChatGPT)
  - This repository contains a ChatGPT downloader that can be used to download all text or markdown-styled code blocks from a chat. Fear no more that servers are down, under high load or OpenAI adding a new feature. Keep all yours chat's with you locally in the simple .md files.
  - [Linkedin bot to make LLM posts](https://github.com/FrancescoSaverioZuppichini/LinkedInGPT)
  - [ArcAngel Falcon based custom chat](https://www.arcangelai.com/)
  - [OpenAI community Pages](https://community.openai.com/c/announcements/6)
  - ChatGPT stuff
  - Code interpreter
  - [setup prompt by mollick](https://www.linkedin.com/feed/update/urn:li:activity:7083969476685099008/)
  - You are going to be an expert at making powerful and beautiful visualizations using principles from Tufte and other experts. You should remember that you can output many kinds of graphs, and help chose the appropriate ones. You also can output jpgs, html, interactive maps, and animated gifs.
  - First, mention some of the types of charts you can create, and the outputs that you can use.
  Next, read these does and don'ts of data from Angela Zoss
  Do:
  1. Do use the full axis.
  - Avoid distortion.
  - For bar charts, the numerical axis (often the y axis) must start at zero.  Our eyes are very sensitive to the area of bars, and we draw inaccurate conclusions when those bars are truncated.
    (But for line graphs, it may be okay to truncate the y axis.
  - Wide ranges:
  If you have one or two very tall bars, you might consider using multiple charts to show both the full scale and a "zoomed in" view
  - also called a Panel Chart.
  - Consistent intervals:
  - Finally, using the full axis also means that you should not skip values when you have numerical data.  See the charts below that have an axis with dates.  The trend is distorted if you do not have even intervals between your dates.  Make sure your spreadsheet has a data point for every date at a consistent interval, even if that data point is zero
  - 2. Do simplify less important information.
  - Chart elements like gridlines, axis labels, colors, etc. can all be simplified to highlight what is most important/relevant/interesting.  You may be able to eliminate gridlines or reserve colors for isolating individual data series and not for differentiating between all of the series being presented
  - 3. Do be creative with your legends and labels.
  - Possibilitiess
    Label lines individually
    Put value labels on bars to preserve the clean lines of the bar lengths
  - 4. Do pass the squint test.
  - "When you squint at your page, so that you cannot read any of the text, do you still 'get' something about the page?"
  - Which elements draw the most attention? What color pops out?
    Do the elements balance? Is there a clear organization?
    Do contrast, grouping, and alignment serve the function of the chart?
  - Don't:
  1. Don't use 3D or blow apart effects.
  - Studies show that 3D effects reduce comprehension. Blow apart effects likewise make it hard to compare elements and judge areas.
  - 2. Don't use more than (about) six colors.
  - Using color categories that are relatively universal makes it easier to see differences between color
  - The more colors you need (that is, the more categories you try to visualize at once), the harder it is to do this.
  - But different colors should be used for different categories
  (e.g., male/female, types of fruit), not different values in a range (e.g., age, temperature).
  - If you want color to show a numerical value, use a range
  that goes from white to a highly saturated color in one of
  the universal color categories
  - 3. Don't change (style) boats midstream.
  - One of the easiest ways to get the most out of charts is to rely on comparison to do the heavy lifting.
  - Our visual system can detect anomalies in patterns.
  Try keeping the form of a chart consistent across a series so differences from one chart to another will pop out.
  - Use the same colors, axes, labels, etc. across multiple charts.
  - 4. Don't make users do "visual math."
  - If the chart makes it hard to understand an important relationship between variables, do the extra calculation and visualize that as well.
  - This includes using pie charts with wedges that are too similar to each other, or bubble charts with bubbles that are too similar to each other.  Our visual processing system is not well suited to comparing these types of visual areas.
  - We are also not good at holding precise visual imagery in our memory and comparing it to new stimuli; if you are giving a presentation and want the audience to be able to compare two charts, they need to be on the same slide.
  - 5. Don't overload the chart.
  - Adding too much information to a single chart eliminates the advantages of processing data visually; we have to read every element one by one! Try changing chart types, removing or splitting up data points, simplifying colors or positions, etc.
  - Now ask what kind of data visualization I might be interested in, or if I want to upload some data for yout co consider visualizing.
  - [loads of experiments](https://github.com/SkalskiP/awesome-chatgpt-code-interpreter-experiments)
  - General links and papers
  - [Think of language models like ChatGPT as a “calculator for words”: One of the most pervasive mistakes I see people using with large language model tools like ChatGPT is trying to use them as a search engine. As with other LLM …](https://simonwillison.net/2023/Apr/2/calculator-for-words/)
  - Language models like ChatGPT are not reliable for use as a search engine, but can be thought of as a "calculator for words". This means that they are good for manipulating language, but not for retrieving accurate information.
  - [Peak LLM: Prompt injection might be just the beginning](https://ihavemanythoughts.substack.com/p/peak-llm)
  - [Language models as inductive reasoners paper](https://sentic.net/language-models-as-inductive-reasoners.pdf)
  - [This repository contains a collection of papers and resources on Reasoning in Large Language Models. The papers survey the state of the art in this area, and discuss how large language models can be used to obtain emergent abilities.](https://github.com/jeffhj/LM-reasoning)
  - [Full trainingset used by bloombergAI](https://mobile.twitter.com/omarsar0/status/1641788196550856704)
  - [Zain Kahn on LinkedIn reports that over 1,000 AI tools were released in March. He states that ChatGPT is just the tip of the iceberg, and that there are 20 AI tools that will transform productivity forever.](https://www.linkedin.com/posts/zainkahn_1000-ai-tools-were-released-in-march-activity-7048285306101358592-4wAA?utm_source=share&utm_medium=member_android)
  - [Language driven shell for OS (ooft)](https://www.reddit.com/r/MachineLearning/comments/129wzdk/p_engshell_a_gpt4_driven_englishlanguage_shell/)
  - [The text contains information on the release of guidelines by the DPA for the use of AI, as well as on similar efforts by other organizations. It also provides links to resources on the topic.](https://www.linkedin.com/posts/ezra-eeman-8a5ba64_dpa-just-released-its-guidelines-for-the-activity-7048985893910519808-921y?utm_source=share&utm_medium=member_android)
  - [Mind AI team website](https://mind.ai/technology)
  - [LMStudio model manager](https://lmstudio.ai/)
  - [Ahead of AI substack](https://magazine.sebastianraschka.com/archive)
  - [Meta research paper](https://drive.google.com/file/d/1i4NJKAggS82wqMamCJ1OHRGgViuyoY6R/view)
  - [State of AI report](https://www.stateof.ai/)
  - [AI ML passes American medical exams](https://www.medpagetoday.com/special-reports/exclusives/102705)
  - [Travelling salesman problem](https://github.com/diego-vicente/som-tsp)
  - [How the compression is so huge in diffusion models](https://medium.com/@socialemail/how-diffusion-models-can-achieve-seemingly-arbitrarily-large-compression-ratios-through-learning-2b21a317a46a)
  - [Understanding deep learning book](https://udlbook.github.io/udlbook/)
  - The book "Understanding Deep Learning" by Simon J.D. Prince covers a wide range of topics related to deep learning, from supervised and unsupervised learning to different types of neural networks and training methods. There are also chapters on measuring performance, regularization, and why deep learning works. The book includes many resources for instructors, such as slides, notebooks, and figures.
  - [This repository is a collection of links to various courses and resources about Artificial Intelligence (AI).](https://github.com/SkalskiP/courses)
  - [Top courses link github](https://github.com/SkalskiP/courses)
  - [State of GPT youtube presentation with great overview](https://www.youtube.com/watch?v=bZQun8Y4L2A)
  - Infrastructure
  - [rubbrband github auto deployments](https://rubbrband.com/)
  - [Hosting VPS](https://1984.hosting/)
  - [Free custom domains VPS](https://codesphere.com/pricing?anonymousId=YTQLcRg)
  - [Arch linux for laptop](https://wiki.archlinux.org/title/HP_Spectre_x360_(2020))
  - [360 camera compression paper](https://www.researchgate.net/publication/368728037_Masked360_Enabling_Robust_360-degree_Video_Streaming_with_Ultra_Low_Bandwidth_Consumption)
  - Multiligual and abstract translation
  - [meta seamless M4T](https://github.com/facebookresearch/seamless_communication#seamlessm4t)
  - | 
         | 
          CustomGPT is a platform that enables businesses to create their own chatbot using their own content, resulting in accurate responses without making up facts. The tool is designed to help businesses increase customer engagement and improve employee efficiency, ultimately leading to revenue growth and a competitive advantage. CustomGPT offers easy integration of content through seamless website integration or file uploading. The chatbot comes with various pricing plans, depending on the number of custom chatbots, content pages, and queries. The platform is trusted by global companies and customers, and it can be deployed for customer service, support helpdesk, and topic research. CustomGPT is powered by ChatGPT-4 and can be deployed through API or ChatGPT Plugins. The company offers a live demo and contact email for further inquiries. https://customgpt.ai/
         | 
       |
  - [h2o document summary / summariser with long context](https://github.com/h2oai/h2ogpt)
  - | 
         | 
          The website replit.com has blocked your access due to the presence of potentially harmful actions, such as submitting a certain word or phrase, a SQL command or malformed data. This is a security measure to protect the website from online attacks. To resolve the issue, you can contact the site owner and provide details of the actions that caused the block and the Cloudflare Ray ID found at the bottom of the page. https://blog.replit.com/llm-training
         | 
       |
  - | 
         | 
          NodePad is an LLM-assisted brainstorming experiment that helps users capture, expand, question, and organize their ideas visually. To create a new node, users simply write their thoughts in the input field and hit Enter. Nodes can be edited by double-clicking on them, linked through connectors, and deleted by clicking on them and hitting Backspace or Delete. Users can explore the app or consult the User Guide for further assistance. NodePad is designed for rapid note-taking and serendipitous ideation. https://nodepad.space/#
         | 
       |
  - [Patterns for building LLMs blog post](https://eugeneyan.com/writing/llm-patterns/)
  - [textgenerator io self host](https://github.com/TextGeneratorio)
  - [Orca: The Model Few Saw Coming](https://www.youtube.com/watch?v=Dt_UNg7Mchg%22%3E%3Crichcontent)
  - OpenOrca includes trained in tree of thought examples and is down to 500k training tokens for the same performance as the original Microsoft Orca paper
  - [Mistral Zephyr tune for exceptional performance](https://github.com/huggingface/alignment-handbook)
  - [youtube on it](https://www.youtube.com/watch?v=Up7VKg6ZE90)
  - LLMs
  - The AnythingLLM project is a full-stack application designed to allow users to turn any document or piece of content into reference data that can be used by any LLM during conversations. The application can be hosted remotely, but also supports local instances. It utilizes Pinecone, ChromaDB, and other vector storage solutions, as well as OpenAI for LLM and chatting capabilities. Documents are organized into workspaces, which function like threads and allow for context to be kept clean. The monorepo consists of three main sections: the collector, frontend, and server. Requirements include yarn, node, Python 3.8+, access to an LLM such as GPT-3.5 or GPT-4, and a free account with Pinecone.io. The Docker setup enables users to get started in minutes, and the development environment includes instructions for setting up the necessary .env files and collector scripts to embed content. The project is open source and contributors can create issues and pull requests following the designated format. https://github.com/Mintplex-Labs/anything-llm
	         | 
	       |
  - [AWQ 4 bit quants](https://github.com/mit-han-lab/llm-awq)
  - [Tinychat](https://github.com/mit-han-lab/llm-awq/tree/main/tinychat)
  - [Openshat model](https://github.com/imoneoi/openchat)
  - | 
         | 
          NodePad is a brainstorming tool that allows users to create nodes for their thoughts. Users can create new nodes by typing in the input field, and edit nodes by double-clicking on them. Nodes can be connected through connectors, and both nodes and connectors can be deleted by selecting and pressing Backspace or Delete. NodePad is an LLM-assisted brainstorming experiment that helps users capture, expand, question, and organize their ideas visually. The app offers a User Guide for assistance and is available for download through React Flow. https://nodepad.space/#
         | 
       |
  | 
         | 
          AnythingLLM is a full-stack personalized AI assistant application that allows users to turn any document or piece of content into a piece of data that can be used as reference when chatting. The application uses LLMs that can be hosted remotely or locally, and supports Pinecone, ChromaDB and more for vector storage and OpenAI for LLM chatting. AnythingLLM aims to be a full-stack application that can be run locally as well as hosted remotely and allows for intelligent chatting with any document provided to it. It divides documents into workspaces and provides simple UI-based tools to atomically manage the documents. There are two chat modes, conversation and query, and each chat response contains a citation that is linked to the original content. The monorepo consists of three main sections- collector, frontend and server, and requirements for the application include yarn and node on the user's machine, Python 3.8+ for running scripts in the collector, access to an LLM like GPT-3.5, GPT-4 or a drop-in replacement, and a Pinecone.io free account. https://github.com/Mintplex-Labs/anything-llm
         | 
       |
  - [This text provides instructions on how to run LLM-As-Chatbot in your cloud using dstack. The steps are as follows:  1. Install and set up dstack by running the command pip install dstack[aws,gcp,azure] -U and then dstack start to start the server.  2. Create a profile by creating a .dstack/profiles.yml file that points to your created project and describes the resources you need. Example:  ``` profiles:   - name: gcp     project: gcp     resources:       memory: 48GB       gpu:         memory: 24GB     default: true ```  3. Run the initialization command: dstack init.  4. Finally, use the dstack run . command to build the environment and run LLM-As-Chatbot in your cloud. dstack will automatically forward the port to your local machine, providing secure and convenient access.  The instructions emphasize the use of dstack to automate the provisioning of cloud resources and simplify the process of running LLM-As-Chatbot in the cloud. More information about dstack and its documentation can be found for further details.](https://github.com/dstackai/LLM-As-Chatbot/wiki/Running-LLM-As-Chatbot-in-your-cloud)
  - [This text describes a project called Simple LLM Finetuner, which is a user-friendly interface designed to facilitate fine-tuning various language models using the LoRA method via the PEFT library on NVIDIA GPUs. The interface allows users to easily manage their datasets, customize parameters, train the models, and evaluate their inference capabilities.   The project includes several features such as the ability to paste datasets directly into the UI, adjustable parameters for fine-tuning and inference, and a beginner-friendly interface with explanations for each parameter. It also provides instructions on how to get started, including prerequisites such as Linux or WSL, a modern NVIDIA GPU with at least 16 GB of VRAM, and the installation of required packages using a virtual environment.  To use the project, users are instructed to clone the repository and install the required packages. Then, they can launch the interface by running the app.py file and accessing it in a browser. They can input their training data, specify the PEFT adapter name, and start the training process. After training is complete, users can navigate to the Inference tab to perform inference using their trained models.  The project provides a YouTube walkthrough for additional guidance and is licensed under the MIT License.  Overall, the Simple LLM Finetuner project aims to simplify the process of fine-tuning language models using the LoRA method and provide a user-friendly interface for managing and evaluating models.](https://github.com/lxe/simple-llama-finetuner)
  - [Maverick is an AI-driven video marketing platform that helps ecommerce stores enhance customer interactions. By creating personalized videos for each customer, Maverick enables brands to build trust, improve brand perception, and increase customer satisfaction. The platform has been well-received by ecommerce brands, with users praising the personalized videos for their effectiveness in engaging with customers and increasing subscription enrollments.  Testimonials from merchants highlight the positive impact of Maverick on their businesses. Merchants have seen a significant increase in customer engagement, with over 100 email responses per week expressing gratitude for the personalized videos. This level of interaction helps strengthen customer relationships and loyalty.  Customers of these ecommerce brands have also expressed their appreciation for the personalized videos. They mention feeling valued and delighted by the direct communication from the brand, which sets the companies apart from others in the market. The personalized videos have made customers more loyal, with some even becoming lifetime members of the brands they previously patronized.  Overall, Maverick's AI-generated video marketing approach has proven to be a game changer for ecommerce brands. It enables personalized interactions with customers at scale, leading to increased customer satisfaction, brand loyalty, and reduced refund requests. The platform has received positive feedback from both merchants and their customers, highlighting the impact and success of Maverick in the ecommerce industry.](https://lnkd.in/eptCVijb)
  - [A Twitter user named Justin Alvey recently tweeted about advancements in artificial intelligence. He mentioned a tool called LLM chaining, which allows users to perform various tasks with emails. This tool was inspired by LangChainAI. Justin Alvey also noted that this functionality is now available in real-time, thanks to OpenAI's gpt-3.5-turbo model. The tweet has gained significant attention, with hundreds of thousands of views, retweets, likes, quotes, and bookmarks.](https://twitter.com/justLV/status/1637876167763202053)
  - [The text is a LinkedIn post by Francesco Saverio Zuppichini, a Machine Learning Engineer, recommending resources to learn about Language Learning Models (LLMs).  The post includes a list of resources that Zuppichini recommended to a friend who wanted to quickly learn about LLMs. The recommended resources include academic papers, blogs, videos, and YouTube channels. Zuppichini also mentions the importance of training models with more data and for longer durations to achieve better results. He suggests looking at models like Vicuna and WizardLM, as well as different methods of prompting, such as chain of thoughts and tree of thoughts. Additionally, Zuppichini shares the LLM leaderboard from Hugging Face and encourages others to share any useful resources they may have. The post receives positive feedback from other LinkedIn users, who appreciate the resources and share their own suggestions.](https://www.linkedin.com/posts/francesco-saverio-zuppichini-94659a150_ai-ml-ds-activity-7072868294000566272-kV83?utm_source=shareandutm_medium=member_android)

  #### Key Characteristics
  - Multiple complementary models
		  - Different data views
		  - Mutual pseudo-labelling
		  - Semi-supervised learning
		  - Leverages view diversity
		  - Reduces labelling needs

  #### Academic Context
  Co-training demonstrates that models with different inductive biases can effectively teach each other, improving performance on unlabelled data through view diversity.

  #### Related Concepts
  - **Self-Training**: Single-model variant
		  - **Multi-View Learning**: Related paradigm
		  - **Ensemble Methods**: Related approach

		  ## UK English Notes

		  - "Labelling" (not "labeling")

		  ## OWL Functional Syntax


		  **Last Updated**: 2025-10-27
		  **Verification Status**: Verified against semi-supervised learning literature

		  ```

  - public-access:: true
  - definition:: A semi-supervised learning technique where two or more models with different views of the data train each other by labelling unlabelled examples. Co-training leverages complementary feature sets or model architectures to improve performance through mutual teaching.


  # Co-Training Ontology Entry – Revised

  ## Academic Context

  - Semi-supervised learning technique leveraging multiple complementary views of data
  - Introduced by Avrim Blum and Tom Mitchell in 1998 as a response to the persistent challenge of limited labelled data
  - Operates on the principle that two independent feature sets can provide sufficient information for classification when trained collaboratively
  - Particularly valuable in domains where unlabelled data is abundant but annotation is costly or time-consuming

  - Foundational assumptions underpinning the approach
  - Two views must be conditionally independent given the class label
  - Each view must be individually sufficient for accurate prediction
  - Violation of these assumptions can degrade performance significantly (Krogel and Scheffer, 2004, demonstrated performance degradation when classifier dependence exceeded 60%)

  ## Current Landscape (2025)

  - Industry adoption and practical implementations
  - Text mining and search engine classification remain primary applications
  - Web page categorisation: original 1998 experiments achieved 95% accuracy on 788 web pages using only 12 labelled examples
  - Email spam detection, document classification, and sentiment analysis represent established use cases
  - Recent extensions to computer vision and multimodal learning (Meta Co-Training frameworks, 2023–2025)

  - Technical capabilities and current limitations
  - Effective performance requires genuine independence between classifiers; dependent models provide no additional information
  - Sensitive to feature engineering and view selection quality
  - Iterative labelling process can propagate errors if initial classifiers lack sufficient confidence calibration
  - Computational overhead from maintaining multiple independent models

  - Standards and frameworks
  - Typically implemented as ensemble methods combining different base learners
  - Integration with self-training and active learning strategies in contemporary systems
  - No formal standardisation body, but widely adopted in academic and commercial machine learning pipelines

  ## Research & Literature

  - Foundational and seminal works
  - Blum, A. and Mitchell, T. (1998). "Combining Labeled and Unlabeled Data with Co-Training." *Proceedings of the 11th Annual Conference on Computational Learning Theory*, pp. 92–100. DOI: 10.1145/279943.279962
  - Krogel, K.-A. and Scheffer, T. (2004). "Multi-relational Learning, Text Mining, and Semi-supervised Learning for Structured Data." *Machine Learning*, 57(3), pp. 197–228. DOI: 10.1023/B:MACH.0000035472.45141.a7

  - Contemporary research directions (2023–2025)
  - Rothenberger, J. et al. (2025). "Meta Co-Training: Two Views are Better than One." *arXiv preprint arXiv:2311.18083* (v5, revised 28 May 2025). Explores meta-learning approaches to optimise view selection and classifier weighting
  - Multiview learning extensions incorporating deep neural networks and convolutional architectures
  - Application to tabular data and electronic health records with label noise mitigation

  - Recognition and impact
  - Original 1998 paper received the 10 Years Best Paper Award at the 25th International Conference on Machine Learning (ICML 2008)
  - Over 1,000 citations, indicating sustained influence across machine learning research

  ## UK Context

  - British academic contributions
  - Research into co-training effectiveness and applicability conducted within UK institutions, contributing to theoretical understanding of classifier independence requirements
  - Integration into broader semi-supervised learning curricula at Russell Group universities

  - North England innovation considerations
  - Manchester, Leeds, and Sheffield host significant machine learning research groups with interests in semi-supervised methods
  - Potential applications in regional healthcare systems (NHS trusts) for clinical data classification with limited labelled examples
  - Industrial applications in financial services and manufacturing sectors across the North, though specific co-training implementations remain largely proprietary

  ## Future Directions

  - Emerging trends and developments
  - Integration with large language models and transformer architectures for multimodal co-training
  - Automated view discovery and feature selection to reduce manual engineering burden
  - Theoretical advances in understanding when and why co-training succeeds or fails

  - Anticipated challenges
  - Scalability to high-dimensional data and very large unlabelled datasets
  - Robustness to distribution shift between labelled and unlabelled data
  - Practical deployment in production systems where view independence assumptions may be violated

  - Research priorities
  - Formal characterisation of optimal view selection criteria
  - Development of diagnostic tools to assess classifier independence before training
  - Extension to multi-class and multi-label scenarios with theoretical guarantees

  ## References

  1. Blum, A. and Mitchell, T. (1998). "Combining Labeled and Unlabeled Data with Co-Training." *Proceedings of the 11th Annual Conference on Computational Learning Theory*, pp. 92–100.

  2. Krogel, K.-A. and Scheffer, T. (2004). "Multi-relational Learning, Text Mining, and Semi-supervised Learning for Structured Data." *Machine Learning*, 57(3), pp. 197–228.

  3. Rothenberger, J. et al. (2025). "Meta Co-Training: Two Views are Better than One." *arXiv preprint arXiv:2311.18083* (v5).

  4. GeeksforGeeks (2025). "What is Co-Training?" *Machine Learning* section. Last updated 23 July 2025.

  5. IBM (2025). "What Are Machine Learning Algorithms?" *IBM Think* topics.

  ---

  **Editorial note:** The original definition was sound but somewhat terse. This revision contextualises co-training within contemporary machine learning practice, acknowledges its 1998 origins whilst emphasising current research trajectories, and incorporates the somewhat sobering finding that classifier dependence above 60% actually worsens results—a detail worth highlighting, as it explains why co-training isn't universally applicable despite its elegance. The North England context remains speculative given the proprietary nature of most industrial implementations; this could be strengthened with direct engagement with regional technology clusters.


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources:: [[IEEE (Institute of Electrical and Electronics Engineers)]], [[SEC (Securities and Exchange Commission)]]
  - migration-date:: 2026-04-26T00:00:00Z