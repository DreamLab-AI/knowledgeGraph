public:: true

# Diffusion Policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:diffusion-policy",
  "@type": "Page",
  "vc:slug": "diffusion-policy",
  "title": "Diffusion Policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:diffusion-policy",
  "@type": "Class",
  "label": "Diffusion Policy",
  "definition": "Diffusion Policy is a class of robot learning algorithms that represent robot action sequences as the output of a conditional denoising diffusion process, treating action prediction as iterative noise removal conditioned on sensor observations rather than as direct regression or classification. By leveraging the expressiveness of diffusion models to capture multi-modal action distributions, Diffusion Policy can represent one-to-many mappings from observation to action — a critical capability for dexterous manipulation tasks where multiple valid action trajectories exist. The approach, introduced by Chi et al. (2023), achieves state-of-the-art performance on imitation learning benchmarks and generalises across diverse manipulation settings.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-learning",
      "label": "Robot Learning"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:imitation-learning",
        "label": "Imitation Learning"
      },
      {
        "@id": "urn:ngm:class:flow-matching",
        "label": "Flow Matching"
      },
      {
        "@id": "urn:ngm:class:denoising-score-matching",
        "label": "Denoising Score Matching"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-manipulation",
        "label": "Robot Manipulation"
      },
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      },
      {
        "@id": "urn:ngm:class:embodied-ai",
        "label": "Embodied AI"
      },
      {
        "@id": "urn:ngm:class:dexterous-manipulation",
        "label": "Dexterous Manipulation"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Bimanual Robot Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:demonstration-data",
        "label": "Demonstration Data"
      },
      {
        "@id": "urn:ngm:class:proprioception",
        "label": "Proprioception"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:behavioural-cloning",
        "label": "Behavioural Cloning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:gaussian-mixture-model",
        "label": "Gaussian Mixture Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      },
      {
        "@id": "urn:ngm:class:score-based-generative-model",
        "label": "Score-Based Generative Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:generative-ai",
        "label": "Generative AI"
      },
      {
        "@id": "urn:ngm:class:vision-language-model",
        "label": "Vision-Language Model"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ddpm-robot-policy",
      "label": "DDPM Robot Policy"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Diffusion Policy]] applies conditional [[Diffusion Model]] denoising to [[Imitation Learning]] for robotics, iteratively refining noisy action sequences conditioned on visual observations to produce multi-modal [[Robot Manipulation]] trajectories that outperform direct regression baselines on dexterous contact-rich tasks.

- ### Relationships
  - Diffusion Policy inherits the expressive generative power of [[Diffusion Model|diffusion models]] and situates it within [[Imitation Learning]] from human demonstration data, enabling [[Robot Manipulation]] controllers that capture the full distribution of plausible actions rather than collapsing to a mode-averaging solution. It is closely related to [[Flow Matching]] as an alternative continuous-normalising-flow-based action generation approach. The learned policies execute via the [[End Effector]] of robot arms in settings ranging from laboratory [[Teleoperation]]-sourced demos to large-scale data collection for [[Embodied AI]] foundations.

- ### Content
  - Diffusion Policy was introduced by Cheng Chi, Siyuan Feng, Yilun Du, Zhenjia Xu, Eric Cousineau, Benjamin Burchfiel, and Shuran Song in a 2023 paper that demonstrated the limitations of regression-based behavioural cloning when action distributions are multi-modal. The core insight was that diffusion models, which had proven highly expressive for image and audio generation, could be repurposed as policy representations where the "noise" is in action space and the denoising network conditions on observation embeddings from cameras and proprioception sensors.

  - The training procedure collects demonstrations — typically via kinesthetic teaching or teleoperation — as (observation, action) pairs. A denoising network is trained to predict the noise added to ground-truth action sequences at varying noise levels (the standard DDPM/DDIM objective). At inference, the policy begins from Gaussian noise in action space and iteratively denoises it over K steps (typically 10-100), conditioned on the current observation, yielding a full action chunk representing a short-horizon trajectory. This chunk-based action prediction, inspired by the temporal consistency of diffusion outputs, also helps mitigate compounding errors relative to single-step behavioural cloning.

  - Diffusion Policy achieves strong empirical results on contact-rich manipulation benchmarks including push-T, robomimic, and real-world manipulation tasks involving deformable objects, granular materials, and multi-step assembly. It handles bimanual coordination and generalises across object poses and scene configurations with relatively modest data requirements (tens to hundreds of demonstrations). The CNN-based and transformer-based variants of the denoising network offer different trade-offs between inference speed and expressiveness. Consistency policies and flow matching reformulations have since been proposed to reduce the inference-time computational burden.

  - By 2024-2025 diffusion-based robot policies are central to the foundational robot learning agenda pursued by groups at Stanford, CMU, MIT, Columbia, and major industrial labs including Google DeepMind and Physical Intelligence (Pi). They are being scaled to vision-language-conditioned generalist robot systems, integrated with large vision-language models for instruction following, and deployed on humanoid platforms. [[Flow Matching]] as an alternative training objective is gaining traction for its simpler training dynamics and faster inference, and hardware-in-the-loop fine-tuning methods are making diffusion policies practical for manufacturing and logistics deployment.

