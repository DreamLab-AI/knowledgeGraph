iri:: http://narrativegoldmine.com/infrastructure#Android
uri:: urn:visionclaw:concept:infrastructure:android
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:android
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: android
content-hash:: sha256-12-50eb49a43944
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - android is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Android
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - #+BEGIN_EXPORT hiccup
  [:a {:href "https://www.frandroid.com/marques/google/1921321_google-pixel-9-ces-images-revelent-une-belle-amelioration"} [:img {:src "https://tse1.mm.bing.net/th?id=OIP.F9r4kUYF1wVVujkj8NTEIwHaEK&pid=Api", :alt "Google Pixel 9 : ces images révèlent une belle amélioration"}]]
  #+END_EXPORT
  If you're aiming to run large language models (LLMs) locally on your Pixel 9 Pro, several open-source frameworks on GitHub are tailored for Android devices. Given the Pixel 9 Pro's robust hardware, including the Tensor G4 chip and ample RAM, it's well-suited for on-device LLM inference. Here are some of the top frameworks to consider: ([NexaAI/Awesome-LLMs-on-device - GitHub](https://github.com/NexaAI/Awesome-LLMs-on-device?utm_source=chatgpt.com))
  - ---
  MLC LLM is a versatile framework designed for deploying LLMs across various platforms, including Android. It supports models like LLaMA, Mistral, and Gemma, optimized for mobile hardware using OpenCL. The framework offers an OpenAI-compatible API and provides comprehensive documentation for Android deployment.  ([Mlc-llm Local Llm On Android - Restackio](https://www.restack.io/p/mlc-llm-answer-local-llm-android-cat-ai?utm_source=chatgpt.com), [How to Install and Run LLMs Locally on Android Phones](https://beebom.com/how-run-llm-locally-mlc-chat-android-phones/?utm_source=chatgpt.com), [GitHub - mlc-ai/mlc-llm: Universal LLM Deployment Engine with ML ...](https://github.com/mlc-ai/mlc-llm?utm_source=chatgpt.com))
  **Pros:**
  - Broad model support with hardware acceleration.
  - Active community and detailed documentation.
  - OpenAI-compatible API facilitates integration. ([NexaAI/Awesome-LLMs-on-device - GitHub](https://github.com/NexaAI/Awesome-LLMs-on-device?utm_source=chatgpt.com), [7 Best LLM Tools To Run Models Locally (April 2025) - Unite.AI](https://www.unite.ai/best-llm-tools-to-run-models-locally/?utm_source=chatgpt.com))
  **Cons:**
  - Initial setup may require familiarity with Android development tools.
  ---
  This project demonstrates running native LLMs on Android devices. It supports models like DeepSeek-R1-Distill-Qwen, Qwen2.5-Instruct, and Llama-3.2-Instruct. The framework utilizes ONNX models optimized for Android, with quantization techniques to enhance performance.  ([GitHub - DakeQQ/Native-LLM-for-Android: Demonstration of running a ...](https://github.com/DakeQQ/Native-LLM-for-Android?utm_source=chatgpt.com), [Native-LLM-for-Android/Do_Quantize/Dynamic_Quant/q8_f32.py at ... - GitHub](https://github.com/DakeQQ/Native-LLM-for-Android/blob/main/Do_Quantize/Dynamic_Quant/q8_f32.py?utm_source=chatgpt.com))
  **Pros:**
  - Supports a variety of models tailored for mobile inference.
  - Includes scripts for model conversion and optimization.
  - Designed specifically for Android devices. ([GitHub - DakeQQ/Native-LLM-for-Android: Demonstration of running a ...](https://github.com/DakeQQ/Native-LLM-for-Android?utm_source=chatgpt.com))
  **Cons:**
  - May require manual model conversion and setup.
  - Less abstraction compared to other frameworks.
  ---
  mLLM focuses on fast multimodal LLMs optimized for mobile devices. It supports both text and image inputs, making it suitable for applications requiring multimodal capabilities.  ([GitHub - UbiquitousLearning/mllm: Fast Multimodal LLM on Mobile Devices](https://github.com/UbiquitousLearning/mLLM?utm_source=chatgpt.com))
  **Pros:**
  - Designed for multimodal inputs (text and images).
  - Optimized for mobile hardware.
  - Active development with a focus on performance. ([Orchestration Frameworks: Effortlessly Supercharge LLM Apps](https://datasciencedojo.com/blog/orchestration-frameworks/?utm_source=chatgpt.com))
  **Cons:**
  - May be more complex to integrate due to multimodal focus.
  - Documentation may be less comprehensive than other projects.
  ---
  While not a framework itself, this curated list provides a comprehensive overview of LLMs and related studies targeted at mobile and embedded hardware. It's a valuable resource for discovering tools, models, and techniques suitable for on-device LLM deployment.  ([awesome-mobile-llm:Awesome Mobile LLMs - GitCode](https://gitcode.com/gh_mirrors/aw/awesome-mobile-llm/overview?utm_source=chatgpt.com))
  **Pros:**
  - Extensive list of resources and projects.
  - Regularly updated with the latest developments.
  - Great starting point for exploring the mobile LLM landscape.
  **Cons:**
  - Being a curated list, it doesn't provide direct implementation code.
  ---
  **Recommendation:**
  For a balance between ease of use and performance, **MLC LLM** stands out due to its comprehensive documentation, broad model support, and active community. If you're looking for a more hands-on approach with specific model optimizations, **Native-LLM-for-Android** is a solid choice. For applications requiring multimodal capabilities, **mLLM** offers specialized support. ([GitHub - mlc-ai/mlc-llm: Universal LLM Deployment Engine with ML ...](https://github.com/mlc-ai/mlc-llm?utm_source=chatgpt.com), [Native-LLM-for-Android/Do_Quantize/Dynamic_Quant/q8_f32.py at ... - GitHub](https://github.com/DakeQQ/Native-LLM-for-Android/blob/main/Do_Quantize/Dynamic_Quant/q8_f32.py?utm_source=chatgpt.com), [GitHub - UbiquitousLearning/mllm: Fast Multimodal LLM on Mobile Devices](https://github.com/UbiquitousLearning/mLLM?utm_source=chatgpt.com))
  Feel free to explore these options based on your specific requirements and development experience.
  <!--EndFragment-->

  - ### 🔧 1.  [MLC LLM](https://github.com/mlc-ai/mlc-llm)
  - ### 📱 2.  [Native-LLM-for-Android](https://github.com/DakeQQ/Native-LLM-for-Android)
  - ### 🧠 3.  [mLLM](https://github.com/UbiquitousLearning/mLLM)
  - ### 📚 4.  [Awesome Mobile LLM](https://github.com/stevelaskaridis/awesome-mobile-llm)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
