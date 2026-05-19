- ### Definition
  - ### Primary Definition

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ActivationFunction
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - bridges-to:: [[Edge Computing]] (domain: ngm)

- ### Content
  - ### Primary Definition
  An **Activation Function** is a function applied to the weighted combination of all inputs to a neuron. Activation functions allow neural networks to learn complicated features in the data. They are typically non-linear.
  - ### Original Content
		- ```
  # Activation Function

  #### Related Concepts
  - **Neuron**: Contains activation function
		  - **Neural Network**: Composed of neurons with activations
		  - **Backpropagation** (AI-0043): Requires differentiable activations
		  - **Nonlinearity**: Activation functions introduce nonlinearity

		  ## Formal Ontology

		  <details>
		  <summary>Click to expand OntologyBlock</summary>

		  </details>

		  ## Standards Alignment

		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Clause 3.1.2 (Activation functions)

		  ### NIST AI RMF
		  - **Function**: MAP (Neural network components)

		  ## Related Terms
		  - **Neural Network**: Uses activation functions
		  - **Feedforward Neural Network** (AI-0031): Contains activation functions
		  - **Backpropagation** (AI-0043): Computes activation derivatives
		  - **Neuron**: Applies activation function

  #### References
  1. ISO/IEC 22989:2022 - Clause 3.1.2
		  2. NIST AI 100-3 - Technical terminology
		  3. Goodfellow et al. - "Deep Learning" - MIT Press, 2016 (Chapter 6)

		  ---

		  **Authority Score**: 0.95 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST

		  ```

  - #### Trust Beyond Misinformation
		- **Primary Trust Issue**: Expectations from institutions about their function and responsiveness, not just misinformation.
		- **Media Trust**: Questions around media trust and social media's role are secondary to larger institutional trust issues.

  - #### Trust Beyond Misinformation
		- **Primary Trust Issue**: Expectations from institutions about their function and responsiveness, not just misinformation.
		- **Media Trust**: Questions around media trust and social media's role are secondary to larger institutional trust issues.

  - # Business Functions
  - collapsed:: true
		- [Perplexity](https://www.perplexity.ai/)
		- Deep research.

  - #### Trust Beyond Misinformation
		- **Primary Trust Issue**: Expectations from institutions about their function and responsiveness, not just misinformation.
		- **Media Trust**: Questions around media trust and social media's role are secondary to larger institutional trust issues.
  ## Academic Context

  - Activation functions are mathematical functions applied to the output of individual neurons in artificial neural networks.
  - They introduce **non-linearity**, enabling networks to learn complex, non-linear relationships in data that linear models cannot capture.
  - This non-linearity is essential for tasks such as image recognition, natural language processing, and other sophisticated pattern recognition problems.
  - The output of a neuron is computed as the activation function applied to the weighted sum of inputs plus a bias term.
  - Formally: Output = ActivationFunction(Σ(Weight × Input) + Bias).
  - Activation functions are generally differentiable or piecewise differentiable, facilitating gradient-based optimisation methods like backpropagation.
  - Early foundational work established the universal approximation theorem, showing that neural networks with suitable activation functions can approximate any continuous function.
  - Pinkus (1999) demonstrated that activation functions need not be bounded to satisfy universal approximation, paving the way for unbounded functions like ReLU.

  ## Current Landscape (2025)

  - Activation functions remain a critical component in deep learning architectures, with several widely adopted types:
  - **Sigmoid**: Outputs between 0 and 1; historically popular but prone to vanishing gradients.
  - **Tanh**: Outputs between -1 and 1; zero-centred but still susceptible to gradient issues.
  - **ReLU (Rectified Linear Unit)**: Outputs zero for negative inputs and identity for positive inputs; computationally efficient and mitigates vanishing gradients.
  - Variants like Leaky ReLU, Parametric ReLU, and GELU address ReLU’s limitations such as dying neurons.
  - Industry adoption is extensive across sectors including finance, healthcare, and autonomous systems.
  - UK companies and research institutions integrate these functions into AI solutions, with notable activity in Manchester and Leeds AI hubs.
  - Technical limitations persist:
  - Vanishing and exploding gradients remain challenges in very deep networks.
  - Activation functions can affect convergence speed and model generalisation.
  - Frameworks such as TensorFlow, PyTorch, and ONNX standardise activation function implementations, ensuring interoperability and optimisation.

  ## Research & Literature

  - Key academic sources include:
  - Pinkus, A. (1999). *Approximation theory of the MLP model in neural networks*. Acta Numerica, 8, 143-195. DOI: 10.1017/S0962492900002833
  - Glorot, X., Bordes, A., & Bengio, Y. (2011). *Deep Sparse Rectifier Neural Networks*. Proceedings of the Fourteenth International Conference on Artificial Intelligence and Statistics (AISTATS), 315-323.
  - Hendrycks, D., & Gimpel, K. (2016). *Gaussian Error Linear Units (GELUs)*. arXiv:1606.08415.
  - Ongoing research explores:
  - Novel activation functions that balance computational efficiency with improved gradient flow.
  - Adaptive and learnable activation functions tailored to specific tasks.
  - Theoretical analysis of activation function properties in very deep and wide networks.

  ## UK Context

  - The UK is a significant contributor to activation function research and application, with universities such as the University of Manchester and University of Leeds hosting strong AI and machine learning groups.
  - North England innovation hubs, including Manchester’s AI Lab and Leeds’ Centre for AI, actively develop and deploy neural network models utilising advanced activation functions.
  - Regional case studies include collaborations between academia and industry in Newcastle focusing on healthcare diagnostics powered by deep learning models employing ReLU and its variants.

  ## Future Directions

  - Emerging trends:
  - Development of activation functions that dynamically adapt during training.
  - Integration of activation functions with neuromorphic computing and spiking neural networks.
  - Exploration of activation functions that improve robustness against adversarial attacks.
  - Anticipated challenges:
  - Balancing model complexity with computational cost.
  - Ensuring activation functions generalise well across diverse datasets and architectures.
  - Research priorities include:
  - Formalising theoretical guarantees for new activation functions.
  - Enhancing interpretability of neural network decisions via activation function analysis.
  - Expanding activation function design to quantum and hybrid classical-quantum neural networks.

  ## References

  1. Pinkus, A. (1999). Approximation theory of the MLP model in neural networks. *Acta Numerica*, 8, 143-195. https://doi.org/10.1017/S0962492900002833  
  2. Glorot, X., Bordes, A., & Bengio, Y. (2011). Deep Sparse Rectifier Neural Networks. *Proceedings of AISTATS*, 315-323.  
  3. Hendrycks, D., & Gimpel, K. (2016). Gaussian Error Linear Units (GELUs). arXiv:1606.08415.  
  4. Meegle. Activation Functions In Neural Networks. Retrieved 2025.  
  5. DataCamp. Introduction to Activation Functions in Neural Networks. Retrieved 2025.  
  6. Google Developers. Neural Networks: Activation Functions. Retrieved 2025.  
  7. Wikipedia contributors. Activation function. *Wikipedia*. Retrieved 2025.


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources:: [[ISO/IEC 22989:2022]], [[NIST AI RMF]]
  - migration-date:: 2026-04-26T00:00:00Z