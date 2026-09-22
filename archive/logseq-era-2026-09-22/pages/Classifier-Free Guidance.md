public:: true
alias:: Classifier Free Guidance

# classifier-free guidance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2357c26d415fb946894daa60ac98ec65e9f86a56b04c5461c492744c22bde967",
  "@type": "Page",
  "vc:slug": "classifier-free-guidance",
  "title": "classifier-free guidance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:latent-diffusion", "vc:label": "Latent Diffusion"},
    {"@id": "urn:visionflow:linked:score-function", "vc:label": "Score Function"},
    {"@id": "urn:visionflow:linked:variational-autoencoder", "vc:label": "Variational Autoencoder"},
    {"@id": "urn:visionflow:linked:text-to-image", "vc:label": "Text-to-Image"},
    {"@id": "urn:visionflow:linked:image-generation", "vc:label": "Image Generation"},
    {"@id": "urn:visionflow:linked:text-to-video-generation", "vc:label": "Text-to-Video Generation"},
    {"@id": "urn:visionflow:linked:audio-generation", "vc:label": "Audio Generation"},
    {"@id": "urn:visionflow:linked:denoising-diffusion-probabilistic-model", "vc:label": "Denoising Diffusion Probabilistic Model"},
    {"@id": "urn:visionflow:linked:conditioning-signal", "vc:label": "Conditioning Signal"},
    {"@id": "urn:visionflow:linked:score-based-generative-model", "vc:label": "Score-Based Generative Model"},
    {"@id": "urn:visionflow:linked:dropout", "vc:label": "Dropout"},
    {"@id": "urn:visionflow:linked:generative-model", "vc:label": "Generative Model"},
    {"@id": "urn:visionflow:linked:stable-diffusion", "vc:label": "Stable Diffusion"},
    {"@id": "urn:visionflow:linked:controlnet", "vc:label": "ControlNet"},
    {"@id": "urn:visionflow:linked:prompt-engineering", "vc:label": "Prompt Engineering"},
    {"@id": "urn:visionflow:linked:sampling", "vc:label": "Sampling"},
    {"@id": "urn:visionflow:linked:clip", "vc:label": "CLIP"},
    {"@id": "urn:visionflow:linked:generative-ai", "vc:label": "Generative AI"},
    {"@id": "urn:visionflow:linked:reinforcement-learning-from-human-feedback", "vc:label": "Reinforcement Learning from Human Feedback"},
    {"@id": "urn:visionflow:linked:reward-model", "vc:label": "Reward Model"},
    {"@id": "urn:visionflow:linked:classifier-guidance", "vc:label": "Classifier Guidance"},
    {"@id": "urn:visionflow:linked:unconditional-generation", "vc:label": "Unconditional Generation"},
    {"@id": "urn:visionflow:linked:generative-adversarial-network", "vc:label": "Generative Adversarial Network"},
    {"@id": "urn:visionflow:linked:flow-matching", "vc:label": "Flow Matching"},
    {"@id": "urn:visionflow:linked:autoregressive-model", "vc:label": "Autoregressive Model"},
    {"@id": "urn:visionflow:linked:attention-mechanism", "vc:label": "Attention Mechanism"},
    {"@id": "urn:visionflow:linked:stochastic-differential-equation", "vc:label": "Stochastic Differential Equation"},
    {"@id": "urn:visionflow:linked:markov-chain", "vc:label": "Markov Chain"},
    {"@id": "urn:visionflow:linked:diffusion-transformer", "vc:label": "Diffusion Transformer"},
    {"@id": "urn:visionflow:linked:dall-e-3", "vc:label": "DALL-E 3"},
    {"@id": "urn:visionflow:linked:guidance-scale", "vc:label": "Guidance Scale"},
    {"@id": "urn:visionflow:linked:null-conditioning", "vc:label": "Null Conditioning"},
    {"@id": "urn:visionflow:linked:noise-schedule", "vc:label": "Noise Schedule"},
    {"@id": "urn:visionflow:linked:negative-prompting", "vc:label": "Negative Prompting"},
    {"@id": "urn:visionflow:linked:conditional-generation", "vc:label": "Conditional Generation"},
    {"@id": "urn:visionflow:linked:spatial-computing", "vc:label": "Spatial Computing"},
    {"@id": "urn:visionflow:linked:u-net", "vc:label": "U-Net"},
    {"@id": "urn:visionflow:linked:knowledge-distillation", "vc:label": "Knowledge Distillation"},
    {"@id": "urn:visionflow:linked:score-distillation-sampling", "vc:label": "Score Distillation Sampling"},
    {"@id": "urn:visionflow:linked:neural-radiance-field", "vc:label": "Neural Radiance Field"},
    {"@id": "urn:visionflow:linked:multimodal-learning", "vc:label": "Multimodal Learning"},
    {"@id": "urn:visionflow:linked:bayesian-inference", "vc:label": "Bayesian Inference"},
    {"@id": "urn:visionflow:linked:energy-based-model", "vc:label": "Energy-Based Model"},
    {"@id": "urn:visionflow:linked:image-editing", "vc:label": "Image Editing"},
    {"@id": "urn:visionflow:linked:ai-governance", "vc:label": "AI Governance"},
    {"@id": "urn:visionflow:linked:content-authentication", "vc:label": "Content Authentication"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:classifier-free-guidance",
  "@type": "Class",
  "label": "Classifier-Free Guidance",
  "definition": "Classifier-Free Guidance (CFG) is a conditional generation technique for diffusion models that steers the denoising trajectory towards a specified condition by computing a weighted extrapolation between a conditional score estimate and an unconditional score estimate produced by the same single model. Unlike classifier guidance, which requires a separately trained differentiable classifier, CFG trains one network jointly on conditional and unconditional objectives by randomly replacing conditioning inputs with a null embedding during training. At inference, the guided score is: score_guided = score_unconditional + w * (score_conditional - score_unconditional), where w is the guidance scale hyperparameter controlling the trade-off between sample diversity and condition alignment. CFG has become the dominant conditioning mechanism across text-to-image, text-to-video, and audio generation systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:latent-diffusion",
        "label": "Latent Diffusion"
      },
      {
        "@id": "urn:ngm:class:score-function",
        "label": "Score Function"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:text-to-image",
        "label": "Text-to-Image"
      },
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      },
      {
        "@id": "urn:ngm:class:text-to-video-generation",
        "label": "Text-to-Video"
      },
      {
        "@id": "urn:ngm:class:audio-generation",
        "label": "Audio Generation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Denoising Diffusion Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:conditioning-signal",
        "label": "Conditioning Signal"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:score-based-generative-model",
        "label": "Score-Based Generative Model"
      },
      {
        "@id": "urn:ngm:class:dropout",
        "label": "Dropout Training"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      },
      {
        "@id": "urn:ngm:class:stable-diffusion-image-model",
        "label": "Stable Diffusion"
      },
      {
        "@id": "urn:ngm:class:control-net",
        "label": "ControlNet"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling Algorithm"
      },
      {
        "@id": "urn:ngm:class:clip",
        "label": "CLIP"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      },
      {
        "@id": "urn:ngm:class:reward-model",
        "label": "Reward Model"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cfg",
      "label": "CFG"
    },
    {
      "@id": "urn:ngm:class:guidance-without-a-classifier",
      "label": "Guidance Without a Classifier"
    }
  ],
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:classifier-free-guidance:a3b7f9c12e40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2357c26d415fb946894daa60ac98ec65e9f86a56b04c5461c492744c22bde967"
  },
  "vc:resolutions": [
    {"raw": "[[Diffusion Model]]", "resolved": "urn:visionflow:linked:diffusion-model", "kind": "ResolvedLink"},
    {"raw": "[[Latent Diffusion]]", "resolved": "urn:visionflow:linked:latent-diffusion", "kind": "ResolvedLink"},
    {"raw": "[[Score Function]]", "resolved": "urn:visionflow:linked:score-function", "kind": "ResolvedLink"},
    {"raw": "[[Variational Autoencoder]]", "resolved": "urn:visionflow:linked:variational-autoencoder", "kind": "ResolvedLink"},
    {"raw": "[[Text-to-Image]]", "resolved": "urn:visionflow:linked:text-to-image", "kind": "ResolvedLink"},
    {"raw": "[[Image Generation]]", "resolved": "urn:visionflow:linked:image-generation", "kind": "ResolvedLink"},
    {"raw": "[[Text-to-Video Generation]]", "resolved": "urn:visionflow:linked:text-to-video-generation", "kind": "ResolvedLink"},
    {"raw": "[[Audio Generation]]", "resolved": "urn:visionflow:linked:audio-generation", "kind": "ResolvedLink"},
    {"raw": "[[Denoising Diffusion Probabilistic Model]]", "resolved": "urn:visionflow:linked:denoising-diffusion-probabilistic-model", "kind": "ResolvedLink"},
    {"raw": "[[Conditioning Signal]]", "resolved": "urn:visionflow:linked:conditioning-signal", "kind": "ResolvedLink"},
    {"raw": "[[Score-Based Generative Model]]", "resolved": "urn:visionflow:linked:score-based-generative-model", "kind": "ResolvedLink"},
    {"raw": "[[Dropout]]", "resolved": "urn:visionflow:linked:dropout", "kind": "ResolvedLink"},
    {"raw": "[[Generative Model]]", "resolved": "urn:visionflow:linked:generative-model", "kind": "ResolvedLink"},
    {"raw": "[[Stable Diffusion]]", "resolved": "urn:visionflow:linked:stable-diffusion", "kind": "ResolvedLink"},
    {"raw": "[[ControlNet]]", "resolved": "urn:visionflow:linked:controlnet", "kind": "ResolvedLink"},
    {"raw": "[[Prompt Engineering]]", "resolved": "urn:visionflow:linked:prompt-engineering", "kind": "ResolvedLink"},
    {"raw": "[[Sampling]]", "resolved": "urn:visionflow:linked:sampling", "kind": "ResolvedLink"},
    {"raw": "[[CLIP]]", "resolved": "urn:visionflow:linked:clip", "kind": "ResolvedLink"},
    {"raw": "[[Generative AI]]", "resolved": "urn:visionflow:linked:generative-ai", "kind": "ResolvedLink"},
    {"raw": "[[Reinforcement Learning from Human Feedback]]", "resolved": "urn:visionflow:linked:reinforcement-learning-from-human-feedback", "kind": "ResolvedLink"},
    {"raw": "[[Reward Model]]", "resolved": "urn:visionflow:linked:reward-model", "kind": "ResolvedLink"},
    {"raw": "[[Classifier Guidance]]", "resolved": "urn:visionflow:linked:classifier-guidance", "kind": "ResolvedLink"},
    {"raw": "[[Unconditional Generation]]", "resolved": "urn:visionflow:linked:unconditional-generation", "kind": "ResolvedLink"},
    {"raw": "[[Generative Adversarial Network]]", "resolved": "urn:visionflow:linked:generative-adversarial-network", "kind": "ResolvedLink"},
    {"raw": "[[Flow Matching]]", "resolved": "urn:visionflow:linked:flow-matching", "kind": "ResolvedLink"},
    {"raw": "[[Autoregressive Model]]", "resolved": "urn:visionflow:linked:autoregressive-model", "kind": "ResolvedLink"},
    {"raw": "[[Attention Mechanism]]", "resolved": "urn:visionflow:linked:attention-mechanism", "kind": "ResolvedLink"},
    {"raw": "[[Stochastic Differential Equation]]", "resolved": "urn:visionflow:linked:stochastic-differential-equation", "kind": "ResolvedLink"},
    {"raw": "[[Markov Chain]]", "resolved": "urn:visionflow:linked:markov-chain", "kind": "ResolvedLink"},
    {"raw": "[[Diffusion Transformer]]", "resolved": "urn:visionflow:linked:diffusion-transformer", "kind": "ResolvedLink"},
    {"raw": "[[DALL-E 3]]", "resolved": "urn:visionflow:linked:dall-e-3", "kind": "ResolvedLink"},
    {"raw": "[[Guidance Scale]]", "resolved": "urn:visionflow:linked:guidance-scale", "kind": "ResolvedLink"},
    {"raw": "[[Null Conditioning]]", "resolved": "urn:visionflow:linked:null-conditioning", "kind": "ResolvedLink"},
    {"raw": "[[Noise Schedule]]", "resolved": "urn:visionflow:linked:noise-schedule", "kind": "ResolvedLink"},
    {"raw": "[[Negative Prompting]]", "resolved": "urn:visionflow:linked:negative-prompting", "kind": "ResolvedLink"},
    {"raw": "[[Conditional Generation]]", "resolved": "urn:visionflow:linked:conditional-generation", "kind": "ResolvedLink"},
    {"raw": "[[Spatial Computing]]", "resolved": "urn:visionflow:linked:spatial-computing", "kind": "ResolvedLink"},
    {"raw": "[[U-Net]]", "resolved": "urn:visionflow:linked:u-net", "kind": "ResolvedLink"},
    {"raw": "[[Knowledge Distillation]]", "resolved": "urn:visionflow:linked:knowledge-distillation", "kind": "ResolvedLink"},
    {"raw": "[[Score Distillation Sampling]]", "resolved": "urn:visionflow:linked:score-distillation-sampling", "kind": "ResolvedLink"},
    {"raw": "[[Neural Radiance Field]]", "resolved": "urn:visionflow:linked:neural-radiance-field", "kind": "ResolvedLink"},
    {"raw": "[[Multimodal Learning]]", "resolved": "urn:visionflow:linked:multimodal-learning", "kind": "ResolvedLink"},
    {"raw": "[[Bayesian Inference]]", "resolved": "urn:visionflow:linked:bayesian-inference", "kind": "ResolvedLink"},
    {"raw": "[[Energy-Based Model]]", "resolved": "urn:visionflow:linked:energy-based-model", "kind": "ResolvedLink"},
    {"raw": "[[Image Editing]]", "resolved": "urn:visionflow:linked:image-editing", "kind": "ResolvedLink"},
    {"raw": "[[AI Governance]]", "resolved": "urn:visionflow:linked:ai-governance", "kind": "ResolvedLink"},
    {"raw": "[[Content Authentication]]", "resolved": "urn:visionflow:linked:content-authentication", "kind": "ResolvedLink"}
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-21T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Classifier-Free Guidance (CFG) is a conditional generation technique for [[Diffusion Model]]s that steers the denoising trajectory towards a specified condition by computing a weighted extrapolation between a conditional [[Score Function]] estimate and an unconditional score estimate produced by the same single neural network. Introduced by Jonathan Ho and Tim Salimans in their 2022 paper "Classifier-Free Diffusion Guidance" (arXiv:2207.12598), it eliminates the need for a separately trained [[Classifier Guidance]] network by jointly training one model on both conditional and unconditional objectives through random null-conditioning dropout — a structured analogue to [[Dropout]] regularisation applied to the conditioning pathway. The [[Guidance Scale]] hyperparameter `w` linearly amplifies the difference between conditional and unconditional predictions, giving practitioners direct control over the trade-off between prompt adherence and sample diversity. At inference the guided score estimate is computed as: `score_guided(x, c) = score_unconditional(x) + w × (score_conditional(x, c) − score_unconditional(x))`, where `c` is the conditioning input (e.g. a text prompt encoded by [[CLIP]] or a T5 transformer encoder), `x` is the current noisy sample at timestep `t`, and `w ≥ 0` is the guidance scale. Setting `w = 0` recovers unconditional sampling; `w = 1` recovers conditional sampling; `w > 1` amplifies prompt adherence at the cost of reduced diversity and, at excessive values, causes over-saturation and mode collapse. The mathematical insight underlying CFG is that in [[Score-Based Generative Model]]s, the difference between the conditional score and the unconditional score is proportional to the gradient that a perfect Bayesian classifier would provide — meaning CFG implicitly approximates this classifier gradient without ever training one, bypassing the scaling difficulties and adversarial vulnerabilities of explicit [[Classifier Guidance]]. Implemented within [[Latent Diffusion]] architectures such as [[Stable Diffusion]], CFG operates on the compressed latent representation produced by a [[Variational Autoencoder]], reducing the dimensionality of the denoising problem by factors of 4–8× per spatial axis and enabling CFG to run efficiently on consumer-grade GPUs. The technique is now the foundational conditioning mechanism across virtually all production [[Text-to-Image]], [[Text-to-Video Generation]], and [[Audio Generation]] systems including Stable Diffusion SDXL, DALL-E 3, Imagen 3, Midjourney v6, Runway Gen-3, AudioLDM 2, and MusicLDM. Its extension via negative prompting — replacing the null embedding with an explicit negative condition vector — has given rise to [[Prompt Engineering]] discipline around steering generation away from unwanted attributes using the same CFG extrapolation formula. Post-2023 research has produced numerous CFG variants addressing known failure modes: dynamic guidance schedules that adapt `w` across the denoising timestep trajectory (β-CFG, Feedback Guidance), manifold-projection variants that constrain the guided trajectory to the data manifold (CFG-MP), and flow-matching adaptations (CFG-Zero*, CFG-ZeroStar) that correct systematic off-manifold drift in continuous-time formulations.

- ### Semantic Classification
  - owl-class:: ai:ClassifierFreeGuidance
  - owl-role:: Concept | GenerativeAITechnique | DiffusionConditioningMethod
  - owl-inferred:: ai:InferenceTimeTechnique, ai:ConditionalGenerationMethod, ai:ScoreBasedMethod, ai:PosteriorAmplificationMethod
  - belongs-to-domain:: [[Generative AI]]
  - implemented-in-layer:: [[Diffusion Model]], [[Latent Diffusion]]
  - related-standards:: [[AI Governance]], [[Content Authentication]]
  - theoretical-foundation:: [[Bayesian Inference]], [[Variational Inference]], [[Stochastic Differential Equation]]
  - conditioning-modalities:: [[CLIP]], [[Conditioning Signal]], [[Prompt Engineering]], [[Multimodal Learning]]

- ### Relationships
  - is-subclass-of:: [[Generative AI]], [[Score-Based Generative Model]], [[Conditional Generation]]
  - has-part:: [[Guidance Scale]], [[Null Conditioning]], [[Score Function]], [[Noise Schedule]], [[Negative Prompting]], [[Conditioning Signal]]
  - requires:: [[Denoising Diffusion Probabilistic Model]], [[Conditioning Signal]], [[Score-Based Generative Model]], [[Noise Schedule]], [[U-Net]]
  - enables:: [[Text-to-Image]], [[Image Generation]], [[Text-to-Video Generation]], [[Audio Generation]], [[Negative Prompting]], [[Prompt Engineering]], [[Score Distillation Sampling]], [[Image Editing]], [[Neural Radiance Field]]
  - implements:: [[Score-Based Generative Model]], [[Conditional Generation]], [[Bayesian Inference]]
  - depends-on:: [[Score-Based Generative Model]], [[Dropout]], [[Latent Diffusion]], [[Variational Autoencoder]], [[Attention Mechanism]], [[Markov Chain]], [[Stochastic Differential Equation]]
  - supports:: [[Spatial Computing]], [[Generative AI]], [[Reward Model]], [[AI Governance]], [[Content Authentication]], [[Multimodal Learning]]
  - uses:: [[Diffusion Model]], [[Latent Diffusion]], [[Score Function]], [[Null Conditioning]], [[Variational Autoencoder]], [[CLIP]], [[Sampling]], [[Attention Mechanism]], [[Diffusion Transformer]], [[Knowledge Distillation]]
  - contrasts-with:: [[Classifier Guidance]], [[Unconditional Generation]], [[Generative Adversarial Network]], [[Flow Matching]], [[Autoregressive Model]], [[Energy-Based Model]]
  - related-to:: [[Generative AI]], [[Stable Diffusion]], [[ControlNet]], [[Prompt Engineering]], [[Sampling]], [[CLIP]], [[Reinforcement Learning from Human Feedback]], [[Reward Model]], [[Stochastic Differential Equation]], [[Markov Chain]], [[Flow Matching]], [[DALL-E 3]], [[Diffusion Transformer]], [[Image Editing]], [[Multimodal Learning]], [[Neural Radiance Field]], [[Score Distillation Sampling]], [[Energy-Based Model]], [[Bayesian Inference]]
  - standardized-by:: [[Generative AI]]

- ### Content
  ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:GuidanceScale))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:NullConditioning))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:ScoreFunction))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:NoiseSchedule))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:ConditionalScoreEstimate))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:UnconditionalScoreEstimate))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:NegativePrompting))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:hasPart ai:GuidanceScoreExtrapolation))
    ```
  ## Dependency Relationships
    ```
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:requires ai:DenoisingDiffusionProbabilisticModel))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:requires ai:ConditioningSignal))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:requires ai:ScoreBasedGenerativeModel))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:requires ai:NoiseSchedule))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:dependsOn ai:LatentDiffusion))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:dependsOn ai:VariationalAutoencoder))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:dependsOn ai:Dropout))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:dependsOn ai:AttentionMechanism))
    ```
  ## Capability Relationships
    ```
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:enables ai:TextToImage))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:enables ai:TextToVideoGeneration))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:enables ai:AudioGeneration))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:enables ai:ImageGeneration))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:enables ai:NegativePrompting))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:enables ai:PromptEngineering))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:supports ai:SpatialComputing))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:supports ai:RewardModel))
    ```
  ## Implementation Relationships
    ```
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:implements ai:ScoreBasedGenerativeModel))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:implements ai:ConditionalGeneration))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:uses ai:DiffusionModel))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:uses ai:LatentDiffusion))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:uses ai:CLIP))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:uses ai:VariationalAutoencoder))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:uses ai:AttentionMechanism))
    ```
  ## Reduction Relationships
    ```
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:reducesTo ai:ConditionalSamplingMethod))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:reducesTo ai:ScoreExtrapolation))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:contrastsWith ai:ClassifierGuidance))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:contrastsWith ai:UnconditionalGeneration))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:contrastsWith ai:FlowMatching))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:bridgesTo ai:ReinforcementLearningFromHumanFeedback))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:bridgesTo ai:RewardModel))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:relatedTo ai:DiffusionTransformer))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:relatedTo ai:ControlNet))
    SubClassOf(ai:ClassifierFreeGuidance
      ObjectSomeValuesFrom(ai:relatedTo ai:StableDiffusion))
    ```

  ## About

  Classifier-Free Guidance was introduced in Jonathan Ho and Tim Salimans's NeurIPS 2021 Deep Generative Models Workshop paper "Classifier-Free Diffusion Guidance," circulated on arXiv (arXiv:2207.12598) in July 2022. The work responded to a practical limitation of [[Classifier Guidance]] (Dhariwal and Nichol, 2021), which required training a separate noise-corrupted image classifier alongside the generative model — a pipeline that was cumbersome to scale, prone to adversarial attacks on the classifier, and required separate training infrastructure for different conditioning modalities. Ho and Salimans observed that if the same [[Diffusion Model]] was trained jointly to produce both conditional predictions `p(x | c)` and unconditional predictions `p(x)` (achieved by randomly replacing the conditioning input `c` with a null embedding during training with probability `p ≈ 0.1–0.2`), then the difference between these two predictions at inference time was mathematically equivalent to the score gradient that a Bayesian classifier would provide — the key insight from [[Score-Based Generative Model]] theory that the log-likelihood gradient of a classifier equals the conditional score minus the unconditional score. By linearly extrapolating beyond the conditional prediction in the direction away from the unconditional prediction, the method could amplify conditioning adherence far beyond what standard conditional sampling achieves, without ever training an explicit classifier.

  The timing of the paper's widespread adoption was perfect: it appeared just as [[Stable Diffusion]] (Rombach et al., CVPR 2022, released publicly August 2022 via CompVis and Stability AI) was becoming the first open-source latent diffusion model capable of high-quality text-to-image generation. Stable Diffusion embedded CFG as a first-class inference parameter — the `guidance_scale` argument, defaulting to 7.5 — exposed in every major inference library and user interface. This made CFG the technique most users first encountered when exploring generative image models, and its trade-off between "creativity" (low `w`) and "prompt adherence" (high `w`) became central to the vocabulary of [[Prompt Engineering]] practice. Within eighteen months of Stable Diffusion's release, virtually every competing text-to-image system — DALL-E 2, Imagen, Midjourney, DeepFloyd IF, Kandinsky, and their successors — had adopted CFG or a variant as their conditioning mechanism.

  The deeper theoretical significance of CFG lies in its connection to [[Stochastic Differential Equation]] (SDE) frameworks for generative modelling. Yang Song et al.'s "Score-Based Generative Modeling through Stochastic Differential Equations" (ICLR 2021) unified DDPMs and NCSN-type score matching models as discretisations of a continuous SDE, enabling analysis of the trajectories of both the forward noising process and the learned reverse denoising process. In this framework, CFG appears as a modification of the reverse SDE drift term: the classifier gradient that standard SMLD/DDPM-based [[Classifier Guidance]] would add to the drift is approximated by the conditional-unconditional score difference. CFG is therefore not merely a heuristic trick but a principled approximation within the SDE framework, which explains its empirical robustness across a wide range of architectures and conditioning modalities. The SDE perspective also clarifies the relationship between CFG and [[Energy-Based Model]]s: the guided score can be interpreted as the score of an energy function that combines the generative prior with the conditioning signal, placing CFG within the family of energy-based sampling methods. From a [[Bayesian Inference]] standpoint, CFG implicitly approximates the posterior `p(x | c)` by amplifying the ratio `p(c | x) / Z` beyond standard conditional sampling, with the guidance scale controlling the temperature of this posterior concentration. This [[Bayesian Inference]] interpretation connects CFG to a rich theoretical tradition in probabilistic inference and helps explain why CFG generalises well across diverse conditioning modalities — text, class labels, audio features, depth maps, and chemical structure descriptors — without modification to the core extrapolation formula.

  The connection between CFG and [[Reinforcement Learning from Human Feedback]] (RLHF) has become increasingly important as alignment research has extended from language models into [[Generative AI]] systems. In RLHF-diffusion frameworks, a [[Reward Model]] trained on human aesthetic preference scores provides gradient signals that can be mixed with the standard CFG direction at inference time, enabling real-time alignment to human preferences without retraining the base generative model. Techniques such as DPO-Diffusion and AlignProp reformulate [[Reward Model]] gradients as CFG-compatible guidance vectors, while [[Reinforcement Learning from Human Feedback]] training pipelines (DDPO, DPOK) fine-tune the model weights themselves using reward signal backpropagated through the diffusion trajectory. This intersection between CFG conditioning methodology and alignment research represents one of the most active frontiers in [[Generative AI]] safety, with direct implications for [[AI Governance]] frameworks requiring that [[Text-to-Image]] and [[Text-to-Video Generation]] systems adhere to content policies and creative constraints expressed in natural language.

  The [[Content Authentication]] implications of CFG are also significant. The Coalition for Content Provenance and Authenticity (C2PA) standard — increasingly embedded in camera firmware, media platforms, and AI generation APIs — requires that guidance scale and conditioning parameters be logged in cryptographically signed manifests attached to AI-generated media. As of 2026, Adobe Firefly, Microsoft Designer, and major open-source [[Stable Diffusion]] distributions have begun embedding C2PA manifests in generated images, with guidance scale, model version, and conditioning prompt included as auditable metadata. This [[Content Authentication]] infrastructure is directly relevant to the UK AI Office's Code of Practice on AI Content, which specifies disclosure requirements for AI-generated images and videos distributed at scale.

  ## Formal Algorithm

  **Training procedure:**

  Given a dataset of condition-data pairs `(c, x)`, train a single score network `ε_θ(x_t, t, c)` with the following modifications:
  1. With probability `p_uncond` (typically 0.10–0.20), replace `c` with a fixed null embedding `∅` (zero vector or a learnable `[UNCOND]` token).
  2. Minimise the standard DDPM objective: `L = E[||ε - ε_θ(x_t, t, c)||²]` over both conditional and null-conditioned samples.
  3. The network thus learns `ε_θ(x_t, t, c)` ≈ conditional noise prediction, and `ε_θ(x_t, t, ∅)` ≈ unconditional noise prediction, from a single set of weights.

  **Inference procedure:**

  At each denoising timestep `t`:
  1. Compute `ε_uncond = ε_θ(x_t, t, ∅)` (unconditional forward pass).
  2. Compute `ε_cond = ε_θ(x_t, t, c)` (conditional forward pass with prompt `c`).
  3. Compute guided prediction: `ε_guided = ε_uncond + w × (ε_cond − ε_uncond)`.
  4. Use `ε_guided` in place of the raw network prediction for the denoising update step.

  This requires two forward passes through the model per denoising step (or one forward pass with a batch of two inputs), making it computationally more expensive than unconditional generation by a factor of approximately 2×, but this overhead is negligible relative to the quality benefit.

  **Negative prompting extension:**

  Replace the null embedding `∅` with an explicit negative condition `c_neg` (e.g. "blurry, low quality, watermark, deformed anatomy"):
  `ε_guided = ε_θ(x_t, t, c_neg) + w × (ε_θ(x_t, t, c_pos) − ε_θ(x_t, t, c_neg))`

  This steers the generation away from attributes described by `c_neg` while amplifying attributes described by `c_pos`, enabling precise fine-grained control over negative space without retraining.

  ## Components / Architecture

  **Guidance Scale (`w`):**
  - Controls the strength of condition amplification. Typical values: 5–12 for text-to-image; 3–7 for video generation (lower values preserve temporal coherence).
  - Values above 15–20 typically cause over-saturation, colour artefacts, and reduction in sample diversity (mode collapse towards the high-probability region under the conditional model).
  - Stable Diffusion defaults: `w = 7.5`; many community practitioners adjust per prompt complexity and style.

  **Null Conditioning Dropout:**
  - Probability `p` of replacing `c` with `∅` at training time: typically 10–20%.
  - Choice of null embedding matters: zero vector, a learnable padding token, or the embedding of an empty string all produce qualitatively similar but quantitatively different results.
  - A too-high `p` reduces conditional generation quality; a too-low `p` leaves the unconditional prediction undertrained, weakening CFG effectiveness.

  **Score Extrapolation:**
  - Linear extrapolation in score space: the guided score moves beyond the conditional score in the direction away from the unconditional score.
  - This is a form of score amplification: it concentrates the effective sampling distribution on the high-likelihood region under the conditional model.
  - Geometrically, the extrapolation moves the sampling trajectory in the direction of increasing `log p(c | x)`, the log-posterior probability of the condition given the sample.

  **Conditioning Encoder:**
  - Text prompts are typically encoded by [[CLIP]] ViT-L/14 ([[Stable Diffusion]] 1.x), OpenCLIP ViT-G/14 (Stable Diffusion XL), or T5-XXL text encoder (Imagen, DeepFloyd IF). The resulting [[Text Embedding]] vector serves as the conditioning signal `c` injected into the [[Diffusion Model]] backbone via cross-attention.
  - The choice of encoder critically determines what prompts the model can follow: [[CLIP]] excels at visual-semantic associations (trained via [[Self-Supervised Learning]] on image-text pairs); T5 excels at syntactic structure and compositional instructions.
  - Cross-[[Attention Mechanism]] layers within the [[Diffusion Model]] denoising backbone ([[U-Net]] or [[Diffusion Transformer]]) inject the encoded [[Text Embedding]] at each resolution scale, making the conditioning signal available at all levels of the denoising hierarchy.
  - In scientific applications — [[Protein Structure Prediction]], molecular property generation, climate model emulation — the [[Conditioning Signal]] is not a [[Text Embedding]] but rather a numerical feature vector encoding physical constraints; the CFG formula applies identically but guidance scales are calibrated to physical validity metrics rather than aesthetic preference scores.
  - The [[Attention Mechanism]] cross-attention between conditioning tokens and spatial feature maps is the primary mechanism by which CFG's guided score estimate steers the denoising backbone; in [[Diffusion Transformer]] architectures this cross-attention is distributed across all transformer layers, enabling richer conditioning than [[U-Net]]'s resolution-scale injection.

  **Latent Space Operation:**
  - In [[Latent Diffusion]] architectures, CFG operates on the VAE latent code (typically 64×64×4 for 512×512 images) rather than on raw pixel tensors.
  - The [[Variational Autoencoder]] encoder produces the latent representation; the decoder maps the denoised latent back to pixels.
  - Decoupling diffusion from the pixel domain reduces memory and compute requirements substantially, making CFG viable on consumer hardware.
  - The choice of [[Variational Autoencoder]] architecture critically affects CFG quality: higher-capacity VAEs (SD3's improved VAE, FLUX.1's 16-channel latent space) enable finer-grained latent representations that make CFG guidance more precise.

  **Knowledge Distillation for CFG:**
  - [[Knowledge Distillation]] techniques (consistency distillation, adversarial diffusion distillation, guidance distillation) compress the CFG-guided teacher model into a student that generates equivalent outputs in fewer steps or a single forward pass.
  - Latent Consistency Models (LCM) distil the CFG-guided consistency trajectory into 2–4 step generation. LCM-LoRA adapts this to arbitrary base models via lightweight fine-tuning, enabling fast CFG-equivalent generation without full retraining.
  - FLUX.1-schnell uses adversarial diffusion distillation trained on FLUX.1-dev (which is itself guidance-distilled from FLUX.1-pro), creating a two-stage distillation pipeline that compresses multi-step CFG generation into 1–4 steps at comparable quality.
  - Guidance distillation (FLUX.1-dev approach) differs from standard consistency distillation: rather than distilling the denoising trajectory, it trains the model to internalise the CFG extrapolation formula, accepting a [[Guidance Scale]] input as a conditioning signal rather than requiring two forward passes.

  ## Major Variants and Extensions

  **Standard CFG (Ho & Salimans 2022):**
  The original fixed-scale formulation `ε_guided = ε_uncond + w × (ε_cond − ε_uncond)`. All subsequent variants build on this baseline.

  **Negative Prompting:**
  Replaces the [[Null Conditioning]] embedding with an explicit negative condition vector. Requires no retraining and gives fine-grained control over negative space. Universally adopted in [[Stable Diffusion]] UIs including ComfyUI, A1111 WebUI, InvokeAI, and commercial APIs. The [[Prompt Engineering]] discipline of negative prompting has become sophisticated: practitioners chain multiple negative concepts, use negation syntax specific to different [[Conditioning Signal]] encoders ([[CLIP]] vs. T5), and apply negative prompt strengths at specific token positions to avoid unintended cross-token interactions.

  **Dynamic CFG (β-CFG, 2025):**
  Rather than using a fixed guidance scale throughout the denoising trajectory, β-CFG adapts the guidance strength over timesteps using a beta-distribution-shaped schedule. The intuition is that early timesteps (high [[Noise Schedule]] level) primarily determine global structure and benefit from strong guidance, while later timesteps (low noise level) determine fine-grained detail and benefit from lower guidance to avoid over-saturation. β-CFG demonstrated improved FID and [[CLIP]] scores relative to fixed-scale CFG with equivalent compute budget (gmum/beta-CFG, 2025).

  **Feedback Guidance (FBG, 2025):**
  Uses state-dependent coefficients to self-regulate guidance amounts based on the alignment quality of the current sample. A latent-space evaluator (e.g. a [[CLIP]] alignment score or a [[Reward Model]] preference evaluator) assesses generation quality at each step, and the guidance scale is adjusted via greedy search over candidate values. This produces unique guidance schedules per generated sample, addressing the pathology that constant guidance can harm diversity and induce memorisation in samples that don't require correction (arXiv:2509.16131, September 2025). The connection to [[Reinforcement Learning from Human Feedback]] is direct: Feedback Guidance applies the same principle of using a [[Reward Model]] to direct generation quality, but at inference time rather than during fine-tuning, enabling real-time alignment without modifying model weights.

  **Stage-wise CFG Analysis (2025):**
  Theoretical work characterised the dynamics of CFG sampling into three successive stages: Direction Shift (guidance accelerates movement towards the weighted mean of the conditional distribution), Mode Separation (inherited directional bias suppresses weaker modes), and Concentration (guidance amplifies within-mode contraction). This analysis explains both CFG's empirical effectiveness and its failure mode of mode collapse at high guidance scales, providing a mechanistic foundation for designing improved schedules (arXiv:2509.22007, September 2025).

  **CFG-Zero* and CFG-Zero★ (2025):**
  Improved CFG formulation for [[Flow Matching]] models that corrects systematic off-manifold drift caused by inaccuracies in the initial velocity estimate. Two corrections: an optimised scaling factor applied to the guidance direction, and zeroing out the first few steps of the ODE solver to prevent early-trajectory divergence. Demonstrated consistent improvement over standard CFG on [[Text-to-Image]] and [[Text-to-Video Generation]] tasks (arXiv:2503.18886, 2025). The mathematical basis is an analysis of the [[Stochastic Differential Equation]] governing early-step velocity estimation in [[Flow Matching]] models, showing that [[Gaussian Noise]] initialisation interacts poorly with the standard CFG extrapolation formula.

  **Manifold Projection CFG (CFG-MP, 2025):**
  Constrains the guided trajectory to remain on the data manifold by projecting the extrapolated score onto the manifold before applying the denoising update. Addresses the geometric problem that CFG extrapolation can move the trajectory outside the manifold of realistic images, producing artefacts. Uses a [[Self-Supervised Learning]]-trained manifold estimator to define the projection target. Shows significant improvements in HPSv2 and ImageReward scores and superior performance on fine-grained compositional tasks (arXiv:2601.21892, 2026).

  **Factored CFG (FCFG, 2025):**
  Decomposes the conditioning vector into independent factors (e.g. subject, style, spatial composition) and applies separate guidance scales to each factor, enabling targeted control over individual generation attributes without off-target amplification. The factored representation connects to [[Representation Learning]] research on disentangled latent spaces — if conditioning factors are encoded in independent subspaces, separate [[Guidance Scale]] values can be applied per factor without cross-factor interference. Research at Imperial College London (supported by UKRI) demonstrated that FCFG reduces attribute entanglement in complex multi-attribute prompts (arXiv:2506.14399, 2025).

  **ControlNet Integration:**
  [[ControlNet]] (Zhang et al., 2023) adds spatially conditioned control signals (depth maps, edge maps from [[Image Segmentation]], pose skeletons, semantic segmentation) as an additional conditioning branch layered over the CFG-conditioned backbone. The two conditioning signals — text via CFG and spatial structure via ControlNet — are compositionally compatible: the ControlNet's residual features are added to the main backbone's feature maps, while CFG continues to operate on the combined conditional and unconditional predictions. This architecture enables workflows where a [[Robotic Perception]] depth map or [[Image Segmentation]] mask specifies spatial layout while a text prompt via CFG specifies appearance attributes.

  **Semantic-Aware CFG:**
  Exploits cross-[[Attention Mechanism]] and self-attention maps within the diffusion backbone to segment latents into semantic regions and redistribute guidance strength spatially, yielding more uniform prompt adherence across complex scenes with multiple objects. These [[Attention Mechanism]] maps, when thresholded, provide token-to-region correspondence that can be used to apply per-region guidance scales, enabling precise control over multi-object scenes without requiring explicit [[Image Segmentation]] masks.

  ## Use Cases / Major Families

  **Text-to-Image Generation:**
  All major open-source and commercial text-to-image systems deploy CFG as their primary conditioning mechanism. [[Stable Diffusion]] (all versions: 1.x, 2.x, SDXL, SD3) exposes `guidance_scale` as a first-class user parameter. DALL-E 3 (OpenAI, 2023) uses a different backbone architecture but implements guidance-equivalent conditioning internally. Imagen 3 (Google DeepMind, 2024) uses cascaded diffusion with T5-XXL text encoding and CFG at each cascade stage. Practitioners routinely treat the guidance scale as the primary [[Prompt Engineering]] lever for controlling the creative latitude vs. accuracy trade-off.

  **Text-to-Video Generation:**
  CFG has been adapted to spatiotemporal [[Diffusion Model]]s operating over video latent representations. Runway Gen-3, Sora-class research models, CogVideoX, and AnimateDiff all apply CFG to spatiotemporal latent tensors. Lower guidance scales (3–7) are typically used in [[Text-to-Video Generation]] to preserve temporal coherence: at high guidance scales, per-frame over-saturation compounds into flickering artefacts across the temporal dimension. The Wan2.1 model (Alibaba, 2025) represents the first open-weight competitive text-to-video system with a [[Diffusion Transformer]] backbone and CFG, demonstrating that the same guidance principles that drive [[Text-to-Image]] quality transfer to video generation with appropriate temporal consistency regularisation.

  **Audio and Music Generation:**
  AudioLDM (Liu et al., 2023), AudioLDM 2 (2023), Stable Audio (Stability AI, 2023), and MusicLDM apply CFG to mel-spectrogram or waveform latent spaces conditioned on text descriptions, MIDI, or audio reference signals. The [[Latent Diffusion]] approach to [[Audio Generation]] mirrors the image domain: the audio waveform or spectrogram is encoded into a compact latent representation by a [[Variational Autoencoder]], the [[Diffusion Model]] denoises this latent conditioned via CFG, and the decoder reconstructs the audio output. The guidance-scale trade-off in [[Audio Generation]] mirrors image generation: low `w` produces more diverse but less prompt-adherent audio; high `w` produces tonally accurate but less musically interesting outputs. Selective CFG — applying guidance only to specific frequency bands or temporal regions — is an active research direction for fine-grained audio control (arXiv:2509.19668, 2025).

  **Spatial Computing and 3D Asset Generation:**
  CFG-enabled [[Text-to-Image]] pipelines feed [[Spatial Computing]] workflows for generating textures, skyboxes, material assets, and 3D asset previews. DreamFusion (Poole et al., 2022) pioneered [[Score Distillation Sampling]] (SDS) — a technique that uses CFG gradients from a 2D [[Diffusion Model]] to optimise 3D [[Neural Radiance Field]] representations, extending CFG's reach from 2D image synthesis to 3D geometry optimisation. In SDS, the CFG-guided score estimate provides a loss signal for optimising the NeRF parameters: the denoising network's prediction at each noisy render of the 3D scene, combined with the CFG guidance direction, indicates the direction in which the 3D geometry should be updated to make it more consistent with the text prompt. MVDiffusion and Zero-1-to-3 extended this to multi-view consistent 3D object generation, where CFG conditioning on camera pose angles enables consistent multi-view synthesis from a single image.

  **Scientific and Medical Imaging:**
  Conditional diffusion models with CFG are used in medical image synthesis (MRI super-resolution, histopathology data augmentation, CT denoising from sparse projections) where conditioning on structural or spectral features is critical for diagnostic validity. CFG enables these models to adhere precisely to anatomical constraints expressed in the conditioning signal while generating realistic tissue texture.

  **Reward-Guided Refinement:**
  CFG is combined with [[Reward Model]] signals from [[Reinforcement Learning from Human Feedback]] pipelines (RLHF-Diffusion, DPO-Diffusion, AlignProp) to align generative outputs with human aesthetic preferences at inference time. The reward model's gradient can be substituted for or added to the CFG guidance direction, enabling fine-grained alignment of generation quality to learned human preferences without retraining the base diffusion model.

  ## Academic Context

  The intellectual lineage of CFG spans three converging research threads. The first is denoising score matching and NCSN (Song & Ermon, 2019), which established that a [[Neural Network]] can be trained to approximate the [[Score Function]] of a data distribution via Stein score matching, and that samples can be generated by Langevin dynamics following the learned score. The second is [[Denoising Diffusion Probabilistic Model]]s (Ho et al., NeurIPS 2020), which connected score-matching models to a [[Markov Chain]] forward noising process and derived the simplified MSE training objective that made DDPMs computationally tractable. The third is the [[Classifier Guidance]] work (Dhariwal and Nichol, 2021) that first demonstrated strong conditioning in [[Diffusion Model]]s, establishing the empirical benchmark that CFG subsequently needed to match without using a separate classifier. The key theoretical connection between these threads — that the classifier [[Score Function]] gradient equals the conditional-unconditional score difference — was implicit in the score-matching literature but was made explicit and practically actionable by Ho and Salimans. The [[Noise Schedule]] (the sequence of noise levels `{σ_t}` or equivalently `{β_t}` for DDPM) determines the overall quality of the [[Score Function]] estimates and thus critically affects CFG effectiveness: linear schedules (original DDPM), cosine schedules (improved DDPM), and learned schedules (continuous DDPM) each interact differently with CFG guidance at different noise levels. [[Transfer Learning]] from large pretrained models into domain-specific [[Diffusion Model]]s via fine-tuning (DreamBooth, LoRA, textual inversion) interacts with CFG conditioning: the fine-tuning objective changes the relationship between the conditional and unconditional predictions, often requiring recalibration of the [[Guidance Scale]] for fine-tuned models.

  Key research groups shaping the field include Google Brain/Research (Ho, Salimans, Saharia, Fleet), UC Berkeley (Song, Ermon), Hugging Face (diffusers library development, including the canonical `diffusers` Python library that implements CFG in its `StableDiffusionPipeline.guidance_scale` parameter), CompVis/LMU Munich (Rombach, Esser, Ommer — [[Stable Diffusion]]), and a growing academic community producing CFG variants. The relationship between CFG and [[Variational Inference]] is theoretically important: the guided score can be understood as approximating the evidence lower bound gradient in a [[Generative Model]] that jointly models data and conditions. UK contributions include Oxford's Visual Geometry Group (collaborations on diffusion-based 3D synthesis and DreamFusion-style [[Score Distillation Sampling]]), Imperial College London's UKRI-funded research on Factored CFG (arXiv:2506.14399, 2025), and Cambridge computer vision groups working on [[Diffusion Model]]s for scientific data. The Edinburgh Machine Learning Research Group has published work on score-based models for structured data prediction — including protein structure, molecular property, and climate model outputs — that builds on CFG methodology, adapting the conditioning mechanism for physical constraints expressed as numerical feature vectors rather than text embeddings.

  The connection to [[Bayesian Inference]] theory is significant: CFG performs implicit posterior density estimation without ever explicitly training a posterior. This connects the technique to Bayes-optimal decision theory, [[Variational Inference]], and [[Energy-Based Model]] perspectives on [[Generative Model]]s — placing it in a rich theoretical context that continues to generate new insights and variants. The [[Markov Chain]] perspective emphasises that CFG modifies the stationary distribution of the reverse diffusion chain towards higher-probability regions under the conditional model; the [[Stochastic Differential Equation]] perspective shows this as a drift modification in the reverse SDE. Both perspectives are used in practice: discrete-time DDPM implementations use the [[Markov Chain]] view to justify per-step guidance application, while continuous-time [[Flow Matching]] implementations use the SDE/ODE view to design corrector steps and manifold projection techniques. The [[Sampling]] procedure — DDIM, PNDM, DPM-Solver, Euler ancestral, Heun — interacts with CFG because different [[Sampling]] schedules have different numerical error profiles that interact differently with the guidance amplification, making [[Sampling]] algorithm choice a practical hyperparameter alongside [[Guidance Scale]].

  ## Current Landscape (2026)

  CFG has become so deeply embedded in [[Generative AI]] production infrastructure that it is effectively invisible to end users — exposed only as the "creativity" or "prompt strength" slider in consumer-facing tools. As of 2026, every major [[Text-to-Image]] API (Stability AI, Replicate, Fal.ai, Adobe Firefly, Midjourney) exposes guidance scale as a parameter; ComfyUI — the dominant open-source workflow tool — treats CFG as a core node in every generation graph. Normalised Attention Guidance (NAG, 2025) represents a production-ready approach to restoring effective [[Negative Prompting]] in guidance-distilled models that run at fixed `w = 0` or `w = 1`, by intervening at the [[Attention Mechanism]] level rather than the score level — a significant development for practitioners using FLUX.1-schnell or other distilled models where standard CFG [[Negative Prompting]] is disabled. Meanwhile, the [[Dropout]] analogy in CFG training has inspired research into structured conditioning dropout schedules — systematically varying which aspects of the conditioning signal are dropped during training to produce more compositionally flexible models, analogous to how [[Dropout]] regularisation in classification networks improves generalisation to unseen feature combinations.

  The frontier of CFG research in 2025–2026 has shifted towards addressing its known failure modes rather than the core mechanism itself. Dynamic guidance schedules (β-CFG, Feedback Guidance) have demonstrated consistent quality improvements over fixed-scale CFG with no additional training cost. Manifold-projection methods (CFG-MP) address the off-manifold artefacts that appear at high guidance scales. Flow-matching adaptations (CFG-Zero*, CFG-ZeroStar) have become important as the field moves from DDPM-style discrete-time diffusion to continuous-time flow matching models — used in Stable Diffusion 3 (released March 2024), FLUX.1 (Black Forest Labs, 2024), and Wan2.1 (Alibaba, 2025). The Factored CFG work from Imperial College London (2025) addresses compositional generation challenges that become acute in complex multi-attribute prompts.

  The emergence of [[Diffusion Transformer]] (DiT) architectures — which replace the U-Net backbone with a [[Attention Mechanism]]-based transformer — has required revisiting CFG implementation details: the cross-attention conditioning structure differs from U-Net's additive injection, and guidance-scale calibration differs. FLUX.1, Stable Diffusion 3, and Wan2.1 all use DiT backbones with CFG, and the FLUX.1 family introduced "guidance distillation" — training a student model to mimic CFG-conditioned generation in a single forward pass without requiring two forward passes per step, dramatically reducing inference compute for common guidance scale values.

  The [[Reinforcement Learning from Human Feedback]] community has developed direct connections between CFG and reward model guidance: techniques like DPO-Diffusion and AlignProp reformulate reward model gradients as guidance-equivalent signals that can be mixed with CFG directions at inference time, enabling real-time alignment to learned human preferences. This bridges CFG methodology from its generative modelling origins into the alignment research literature, with implications for the governance of AI-generated content.

  ## UK Context

  UK academic contributions to [[Diffusion Model]] research and CFG specifically are significant across several institutions. Imperial College London's Computing department has produced directly relevant CFG methodology research: the Factored Classifier-Free Guidance paper (arXiv:2506.14399, 2025) was supported by the UKRI Impact Acceleration Account and addresses attribute entanglement in multi-condition generation — a practically important problem for professional creative tools. Imperial's Visual Computing group also works on [[Neural Radiance Field]]-based 3D generation methods that build on CFG-based [[Score Distillation Sampling]], as well as [[Representation Learning]] for visual foundation models used as conditioning encoders.

  The University of Oxford's Visual Geometry Group (VGG) has longstanding expertise in visual [[Representation Learning]] that connects to [[Diffusion Model]] applications. Oxford researchers have contributed to multi-view consistent 3D generation and diffusion-based scene understanding, areas where CFG conditioning is central. The Oxford Robotics Institute uses [[Diffusion Model]]-based synthesis for [[Data Augmentation]] in robotic perception training pipelines, where CFG enables conditioning on desired scene properties (object category, pose, lighting conditions) to generate targeted training examples.

  The University of Edinburgh's School of Informatics has active research in [[Score-Based Generative Model]]s for scientific data (protein structure, molecular design, climate modelling), where CFG-style conditional generation is an enabling technique. Cambridge's Machine Learning Group has published on [[Flow Matching]] and continuous normalising flow variants that intersect with CFG methodology, with the UKRI-funded Probabilistic AI Laboratory contributing theoretical analysis of CFG within the [[Stochastic Differential Equation]] framework.

  The Alan Turing Institute's Data Science and Artificial Intelligence programme engages with [[Generative AI]] safety and provenance — areas where CFG directly intersects with content authenticity frameworks. The C2PA (Coalition for Content Provenance and Authenticity) standard, increasingly relevant to AI-generated media in the UK regulatory landscape, requires metadata about generation parameters including [[Guidance Scale]] values to be embedded in generated media. The UK [[AI Governance]] framework's code of practice on [[Content Authentication]] for AI-generated media specifically references [[Text-to-Image]] system configuration as a required disclosure element.

  In commercial application, CFG-powered generation is embedded in the UK creative technology sector: London-based startups including Stability AI (originally UK-registered, founded by Emad Mostaque before his departure in 2023), Synthesia (AI [[Text-to-Video Generation]] for corporate training), and Wayve (autonomous driving simulation using [[Diffusion Model]]-generated synthetic environments) all utilise or build upon CFG methodology. The BBC Research & Development group has explored diffusion-based media content generation for programme production, examining how CFG guidance parameters interact with public service broadcasting content standards. In Northern England, Sheffield's advanced manufacturing sector has explored CFG-conditioned [[Image Generation]] for industrial design visualisation and CAD-to-image workflows, with [[Spatial Computing]] applications in collaborative design review. Manchester-based game development studios use CFG-enabled texture and [[Image Editing]] tools in production pipelines; the [[Neural Processing Unit]] ecosystem at ARM (Cambridge) supports efficient on-device deployment of distilled CFG-equivalent models for real-time content creation applications.

  ## Future Directions (2026–2030)

  The trajectory of CFG research and deployment through 2030 will be shaped by several converging forces.

  **Single-pass guidance distillation:** The dominant direction in inference efficiency is eliminating the double-forward-pass cost of CFG through [[Knowledge Distillation]] techniques. Consistency distillation, latent consistency models (LCM), and FLUX-style guidance distillation all aim to produce models that generate CFG-equivalent outputs in a single forward pass, halving inference compute and enabling real-time generation on mobile hardware. As of 2026, distilled 4-step CFG-equivalent generation is the dominant modality for production consumer applications; by 2030, single-step generation with guidance-equivalent quality is expected to become standard. The ARM (Cambridge) and Graphcore (Bristol) hardware ecosystems are investing in optimised inference kernels for distilled diffusion models, enabling on-device [[Text-to-Image]] generation on mobile [[Neural Processing Unit]] hardware.

  **Dynamic and learned guidance:** Research on dynamic guidance schedules (β-CFG, Feedback Guidance, stage-wise analysis) is converging on the view that optimal guidance schedules are sample-dependent and trajectory-dependent rather than fixed. Future systems will likely use lightweight evaluator models — analogous to [[Reward Model]]s in [[Reinforcement Learning from Human Feedback]] — to set per-step guidance scales in real time, replacing the fixed-`w` hyperparameter with a learned or adaptive schedule. The computational overhead of online feedback evaluation will decrease as evaluator distillation methods mature. [[Active Learning]] principles may be applied to guidance schedule search, selecting guidance values that maximally reduce uncertainty about generation quality.

  **Multimodal and compositional conditioning:** As [[Generative AI]] systems expand to condition on combinations of text, image, audio, video, depth, pose, and semantic segmentation inputs simultaneously, the CFG extrapolation formula must be generalised to handle multiple [[Conditioning Signal]]s with potentially conflicting guidance directions. Factored CFG and Joint CFG variants are early steps; more sophisticated compositional conditioning frameworks are expected to emerge, particularly as [[Diffusion Transformer]] architectures enable more flexible cross-[[Attention Mechanism]] over heterogeneous conditioning inputs. The [[Multimodal Learning]] community is developing principled methods for combining CFG guidance from independent conditioning modalities in a way that minimises attribute entanglement and cross-modal interference.

  **Flow matching as the canonical framework:** The field is shifting from DDPM-style discrete-time diffusion to continuous-time [[Flow Matching]] models (Lipman et al., 2022; Albergo & Vaitl, 2022), which offer straighter probability paths, faster [[Sampling]], and better-understood geometry. CFG formulations designed for [[Flow Matching]] (CFG-Zero*, CFG-MP) are maturing, and the theoretical analysis of CFG within the SDE/ODE framework is providing firmer mathematical foundations. By 2028, [[Flow Matching]] with adapted CFG is expected to be the dominant [[Generative Model]] paradigm for high-quality media generation. The [[Stochastic Differential Equation]] perspective on flow matching — which views it as an ODE with zero diffusion coefficient — provides a particularly clean derivation of why standard CFG fails and what corrections (CFG-Zero*) are needed.

  **Alignment and governance integration:** The regulatory environment for AI-generated content is hardening globally — the EU AI Act, the UK's AI and Intellectual Property Bill, and US executive orders on [[Content Authentication]] all require provenance and parameter traceability for AI-generated media. [[Guidance Scale]] is a key generation parameter that will be embedded in C2PA manifests; the diffusion community will need to develop standardised guidance parameter logging and disclosure practices. CFG's role in determining the "creativity vs. accuracy" trade-off will become a focus of content policy discussion as regulators grapple with deepfake detection and creative [[AI Governance]]. The [[Reinforcement Learning from Human Feedback]] community will play an increasing role in defining the alignment targets that CFG-guided systems are trained to satisfy, as preference [[Reward Model]]s become the mechanism by which democratic content standards are operationalised.

  **Scientific and industrial applications:** Beyond creative media, CFG-conditioned [[Diffusion Model]]s are expanding into protein structure generation (RFDiffusion's conditioning on binding pocket geometry is a CFG analogue using [[Score Distillation Sampling]]-equivalent gradients), molecular design, materials science, and climate model emulation. In these domains, the [[Conditioning Signal]] is a physical or chemical constraint rather than a text prompt, and [[Guidance Scale]] must be calibrated to physical validity rather than aesthetic preference — a research challenge that connects CFG methodology to the physical sciences. The Edinburgh Protein Data Bank and the Wellcome Sanger Institute are among UK institutions exploring CFG-conditioned diffusion for biological sequence and structure generation, extending the technique beyond media synthesis into fundamental scientific research.

  ## Key Terminology Glossary

  **Classifier-Free Guidance (CFG)** — The core technique: training a single model jointly on conditional and unconditional objectives via null-conditioning dropout, then at inference linearly extrapolating beyond the conditional score in the direction away from the unconditional score to amplify condition adherence.

  **Guidance Scale (w)** — The scalar hyperparameter controlling the strength of CFG amplification. `w = 0` gives unconditional generation; `w = 1` gives standard conditional generation; `w > 1` amplifies prompt adherence while reducing diversity. Typical values: 5–12 for text-to-image; 3–7 for video. The [[Guidance Scale]] is the primary user-facing control in all production [[Text-to-Image]] interfaces.

  **Null Conditioning** — The technique of replacing the conditioning input `c` with a fixed null token `∅` (zero vector or learnable `[UNCOND]` token) during training, with probability `p_uncond` (typically 10–20%). This trains the model to produce both conditional and unconditional predictions from a single set of weights, enabling CFG at inference without a separate classifier.

  **Score Function** — The gradient of the log probability density of data: ∇ₓ log p(x). In [[Score-Based Generative Model]]s, a neural network learns to approximate this gradient at multiple noise levels. CFG operates by combining conditional and unconditional score estimates. The score function is the mathematical object that [[Denoising Diffusion Probabilistic Model]]s implicitly learn via noise prediction.

  **Score Extrapolation** — The geometric operation in CFG: moving the effective sampling distribution in the direction that maximises `log p(c | x)` by linearly extrapolating beyond the conditional score. Geometrically, this concentrates mass on the high-likelihood region under the conditional model, trading diversity for condition adherence.

  **Negative Prompting** — An extension of CFG replacing the null embedding with an explicit negative condition vector `c_neg` describing undesired attributes. The guided prediction becomes: `ε_guided = ε_θ(x_t, t, c_neg) + w × (ε_θ(x_t, t, c_pos) − ε_θ(x_t, t, c_neg))`. Universally adopted in [[Stable Diffusion]] interfaces. Note: negative prompting is incompatible with guidance-distilled models (FLUX.1-schnell) that run at `w = 0` or `w = 1`.

  **Denoising Diffusion Probabilistic Model (DDPM)** — The backbone architecture on which standard CFG is applied. A [[Markov Chain]] forward process progressively adds Gaussian noise; a neural network (U-Net or [[Diffusion Transformer]]) learns to reverse this process. CFG is applied at each denoising step by mixing conditional and unconditional forward passes.

  **Latent Diffusion** — The architectural paradigm in which diffusion operates on compressed VAE latent codes rather than raw pixels. [[Latent Diffusion]] reduces the spatial resolution of the denoising problem by 4–8× per axis, making CFG computationally feasible on consumer hardware. Pioneered by Rombach et al. (2022) as the basis for [[Stable Diffusion]].

  **Guidance Distillation** — A technique for eliminating the two-forward-pass overhead of standard CFG by training a student model to mimic the CFG-conditioned teacher in a single forward pass. Used in FLUX.1-dev (Black Forest Labs, 2024). The distilled model accepts a guidance scale input and internalises the conditional-unconditional extrapolation during training, enabling single-pass inference. Distilled models are incompatible with standard negative prompting.

  **Flow Matching** — A continuous-time generative modelling framework that defines straight probability transport paths between noise and data distributions, enabling faster sampling and better geometry than DDPM-style discrete timesteps. Used in Stable Diffusion 3, FLUX.1, and Wan2.1. CFG variants for flow matching (CFG-Zero*, CFG-MP) correct systematic drift issues present in naive application of the standard CFG formula to flow matching trajectories.

  **CFG-Zero*** — An improved CFG formulation for [[Flow Matching]] models that applies an optimised scale factor to the guidance direction and zeros out the first few ODE solver steps to prevent early-trajectory divergence (Fan et al., 2025, arXiv:2503.18886). Demonstrated consistent improvement over standard CFG on FLUX, Stable Diffusion 3, and Wan2.1.

  **Score Distillation Sampling (SDS)** — A technique (DreamFusion, Poole et al., 2022) that uses CFG gradients from a 2D [[Diffusion Model]] to optimise a 3D representation (typically a [[Neural Radiance Field]]). The CFG guidance direction becomes a loss signal for 3D geometry, extending CFG's conditioning reach from 2D image synthesis to 3D asset generation.

  **Off-Manifold Drift** — A failure mode in CFG where the guided score extrapolation moves the denoising trajectory outside the data manifold, producing samples with artefacts (colour distortion, anatomical errors, texture inconsistencies). Most severe at high guidance scales and in flow matching models where the velocity field is more sensitive to deviations from the manifold. Addressed by CFG-MP (manifold projection) and CFG-Zero* (step scaling).

  **Mode Collapse** — In the context of CFG, the phenomenon where excessive guidance scale concentrates the sampling distribution on a single high-probability mode of the conditional distribution, reducing sample diversity. Stage-wise dynamics analysis (Park et al., 2025) characterises this as occurring primarily in the Mode Separation stage of the denoising trajectory, seeded by early Direction Shift dynamics.

  **ControlNet** — A conditioning architecture (Zhang et al., 2023) that adds spatially conditioned inputs (depth maps, edge maps, pose skeletons) as an additional conditioning branch over a CFG-conditioned backbone. Compatible with standard CFG: the text condition is handled by CFG while spatial structure is controlled by ControlNet's parallel branch injected into the backbone via residual addition.

  **Diffusion Transformer (DiT)** — A [[Diffusion Model]] architecture that replaces the traditional U-Net denoising backbone with a transformer using [[Attention Mechanism]] layers for conditioning injection. Used in FLUX.1, Stable Diffusion 3, Wan2.1, and the Sora-class models. Requires CFG re-calibration because cross-attention conditioning in DiT differs structurally from U-Net's additive injection.

  **Multimodal CFG** — Extension of CFG to generation conditioned simultaneously on multiple modalities (text + image + depth + pose). The guidance formula is generalised to handle a vector of conditioning signals; research into Factored CFG (Imperial College London, 2025) addresses attribute entanglement when multiple conditioning signals have conflicting guidance directions.

  **Bayesian Interpretation** — The theoretical foundation explaining why CFG works: in [[Score-Based Generative Model]] theory, the log-posterior gradient of a Bayesian classifier ∇ₓ log p(c | x) equals the conditional score minus the unconditional score (by Bayes' theorem and the definition of score functions). CFG thus performs implicit [[Bayesian Inference]] about the conditioning variable without ever explicitly training a posterior model.

  ## Research and Literature

  1. Ho, J. & Salimans, T. (2022). "Classifier-Free Diffusion Guidance." arXiv:2207.12598. *NeurIPS 2021 Workshop on Deep Generative Models.* (The foundational CFG paper introducing the method and the guidance scale extrapolation formula.)
  2. Ho, J., Jain, A. & Abbeel, P. (2020). "Denoising Diffusion Probabilistic Models." *NeurIPS 2020.* arXiv:2006.11239. (DDPM baseline on which CFG builds; introduces the simplified MSE training objective.)
  3. Song, Y., Sohl-Dickstein, J., Kingma, D.P., Kumar, A., Ermon, S. & Poole, B. (2021). "Score-Based Generative Modeling through Stochastic Differential Equations." *ICLR 2021.* arXiv:2011.13456. (Unified SDE framework explaining CFG's theoretical grounding.)
  4. Dhariwal, P. & Nichol, A. (2021). "Diffusion Models Beat GANs on Image Synthesis." *NeurIPS 2021.* arXiv:2105.05233. (Classifier guidance — the method CFG supersedes; established conditional diffusion as state of the art.)
  5. Song, Y. & Ermon, S. (2019). "Generative Modeling by Estimating Gradients of the Data Distribution." *NeurIPS 2019.* arXiv:1907.05600. (NCSN score-matching predecessor; provides score function foundations for CFG.)
  6. Rombach, R., Blattmann, A., Lorenz, D., Esser, P. & Ommer, B. (2022). "High-Resolution Image Synthesis with Latent Diffusion Models." *CVPR 2022.* arXiv:2112.10752. (Latent Diffusion Models / Stable Diffusion 1.x — first large-scale production deployment of CFG.)
  7. Saharia, C., Chan, W., Saxena, S. et al. (2022). "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Imagen)." *NeurIPS 2022.* arXiv:2205.11487. (Google Brain's Imagen; validates CFG with T5-based text conditioning at scale.)
  8. Zhang, L., Rao, A. & Agrawala, M. (2023). "Adding Conditional Control to Text-to-Image Diffusion Models (ControlNet)." *ICCV 2023.* arXiv:2302.05543. (ControlNet: spatial conditioning layer compatible with CFG backbones.)
  9. Esser, P., Kulal, S., Blattmann, A. et al. (2024). "Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (Stable Diffusion 3)." arXiv:2403.03206. (SD3 with DiT backbone and flow matching; CFG adaptation for continuous-time models.)
  10. Black Forest Labs (2024). "FLUX.1: Next-Generation Text-to-Image Diffusion." Technical Report, August 2024. (FLUX.1 introduces guidance distillation for single-pass CFG-equivalent generation.)
  11. Lipman, Y., Chen, R.T.Q., Ben-Hamu, H., Nickel, M. & Le, M. (2022). "Flow Matching for Generative Modeling." arXiv:2210.02747. (Flow matching framework; theoretical foundation for CFG-Zero* and CFG-MP variants.)
  12. Fan, W. et al. (2025). "CFG-Zero*: Improved Classifier-Free Guidance for Flow Matching Models." arXiv:2503.18886. (CFG variant correcting off-manifold drift in flow matching; demonstrated consistent improvement over standard CFG.)
  13. Choi, J. et al. (2025). "Improving Classifier-Free Guidance of Flow Matching via Manifold Projection (CFG-MP)." arXiv:2601.21892. (Manifold-projection CFG; significant improvements in HPSv2 and ImageReward on compositional tasks.)
  14. Zhang, Y. et al. (2025). "Dynamic Classifier-Free Diffusion Guidance via Online Feedback." arXiv:2509.16131. (Feedback Guidance; per-step adaptive guidance scale with CLIP/reward evaluator.)
  15. Sobczak, L. et al. (2025). "β-CFG: Dynamic Guidance for Text-to-Image Diffusion Models." GitHub:gmum/beta-CFG. (Beta-distribution-shaped guidance schedule; improved FID and CLIP score at equivalent compute.)
  16. Park, J. et al. (2025). "Stage-wise Dynamics of Classifier-Free Guidance in Diffusion Models." arXiv:2509.22007. (Theoretical characterisation of CFG dynamics into Direction Shift, Mode Separation, and Concentration stages.)
  17. Factored CFG Research Group (2025). "Factored Classifier-Free Guidance." arXiv:2506.14399. (UKRI/Imperial College London; FCFG for multi-attribute compositional generation.)
  18. Liu, H., Chen, Z., Yuan, Y. et al. (2023). "AudioLDM: Text-to-Audio Generation with Latent Diffusion Models." *ICML 2023.* arXiv:2301.12503. (CFG applied to audio generation via latent spectrogram diffusion.)
  19. Chen, H. et al. (2023). "MusicLDM: Enhancing Novelty in Text-to-Music Generation Using Beat-Synchronous Mixup Strategies." arXiv:2308.01546. (Music generation using CFG with latent diffusion.)
  20. Poole, B., Jain, A., Barron, J.T. & Mildenhall, B. (2022). "DreamFusion: Text-to-3D using 2D Diffusion (Score Distillation Sampling)." arXiv:2209.14988. (SDS — uses CFG gradients from a 2D model to optimise 3D NeRF representations; extends CFG beyond 2D generation.)
  21. Blattmann, A., Dockhorn, T., Kulal, S. et al. (2023). "Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets." arXiv:2311.15127. (Video diffusion with CFG adapted to temporal consistency.)
  22. Peebles, W. & Xie, S. (2023). "Scalable Diffusion Models with Transformers (DiT)." *ICCV 2023.* arXiv:2212.09748. (DiT architecture: transformer backbone replacing U-Net; requires CFG re-calibration in cross-attention conditioning.)
  23. Ruiz, N., Li, Y., Jampani, V. et al. (2023). "DreamBooth: Fine-Tuning Text-to-Image Diffusion Models for Subject-Driven Generation." *CVPR 2023.* arXiv:2208.12242. (Subject-driven fine-tuning; CFG interacts with DreamBooth conditioning for personalised generation.)
  24. Meng, C., He, Y., Song, Y. et al. (2022). "SDEdit: Guided Image Synthesis and Editing with Stochastic Differential Equations." *ICLR 2022.* arXiv:2108.01073. (SDEdit: CFG-compatible image editing via forward/reverse SDE cycles.)
  25. Brooks, T., Holynski, A. & Efros, A.A. (2023). "InstructPix2Pix: Learning to Follow Image Editing Instructions." *CVPR 2023.* arXiv:2211.09800. (Instruction-following image editing with dual CFG over instruction and image condition simultaneously.)
  26. Nichol, A., Dhariwal, P., Ramesh, A. et al. (2022). "GLIDE: Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion Models." *ICML 2022.* arXiv:2112.10741. (GLIDE: early large-scale CFG-conditioned text-to-image model from OpenAI.)
  27. Wan2.1 Team (2025). "Wan: Open and Advanced Large-Scale Video Generative Models." Alibaba Research. arXiv:2503.20314. (Wan2.1 open video generation model with DiT backbone and CFG; first open-weight competitive text-to-video model.)

- ### Provenance
  - sources:: Ho & Salimans (2022) arXiv:2207.12598; Rombach et al. (2022) Latent Diffusion Models; Zhang et al. (2023) ControlNet; Song et al. (2021) SDE framework; Dhariwal & Nichol (2021) Classifier Guidance; Fan et al. (2025) CFG-Zero* arXiv:2503.18886; Choi et al. (2025) CFG-MP arXiv:2601.21892; Zhang et al. (2025) Feedback Guidance arXiv:2509.16131; Sobczak et al. (2025) beta-CFG github:gmum/beta-CFG; Park et al. (2025) Stage-wise Dynamics arXiv:2509.22007; FCFG arXiv:2506.14399; Black Forest Labs FLUX.1 (2024); Esser et al. SD3 arXiv:2403.03206; WebSearch results June 2026
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
