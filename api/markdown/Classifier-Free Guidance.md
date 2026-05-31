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
  "vc:outboundWikilinks": [],
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
  "definition": "Classifier-Free Guidance (CFG) is a conditional generation technique for diffusion models that steers the denoising trajectory towards a specified condition (e.g., a text prompt) by computing a weighted extrapolation between a conditional score estimate and an unconditional score estimate produced by the same model. Unlike classifier guidance, which requires a separate differentiable classifier, CFG trains a single model jointly on conditional and unconditional objectives (using null conditioning with a fixed probability), eliminating the need for an auxiliary network whilst achieving superior sample fidelity and prompt adherence. The guidance scale hyperparameter controls the trade-off between sample diversity and condition alignment.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Classifier-Free Guidance (CFG) is a conditional generation technique for diffusion models that steers the denoising trajectory towards a specified condition (e.g., a text prompt) by computing a weighted extrapolation between a conditional score estimate and an unconditional score estimate produced by the same model. Unlike classifier guidance, which requires a separate differentiable classifier, CFG trains a single model jointly on conditional and unconditional objectives (using null conditioning with a fixed probability), eliminating the need for an auxiliary network whilst achieving superior sample fidelity and prompt adherence. The guidance scale hyperparameter controls the trade-off between sample diversity and condition alignment.

- ### Semantic Classification
  - owl-class:: classifier-free-guidance:Classifier-Free Guidance
  - owl-role:: Concept

- ### Relationships
  - uses [[Diffusion Model]]
  - uses [[Latent Diffusion]]
  - enables [[Image Generation]]
  - enables [[Text-to-Image]]
  - relatedTo [[Generative Model]]

- ### Content
  - Classifier-Free Guidance (CFG) solves a fundamental challenge in conditional diffusion model sampling: how to amplify the influence of the conditioning signal (e.g., a CLIP text embedding) on the generated output without requiring a separately trained classifier. During training, each conditioning input is randomly replaced with a null embedding (typically a zero vector or a special padding token) with probability p (commonly 10–20%), causing the model to learn both conditional and unconditional denoising. At inference, the guided score estimate is computed as: score_guided = score_unconditional + w * (score_conditional - score_unconditional), where w is the guidance scale.
  - The guidance scale w is the primary quality control hyperparameter: values of 1.0 produce unguided samples, values between 5 and 10 are typical for prompt-adherent high-quality images, and higher values (15+) produce over-saturated, artefact-prone samples. CFG is ubiquitous in the Latent Diffusion model ecosystem: Stable Diffusion, DALL-E 2, Imagen, and DeepFloyd IF all incorporate it. It is applied in the latent space for Latent Diffusion architectures, operating on the compressed latent representation decoded by a VAE rather than in pixel space, dramatically reducing compute.
  - Variants of CFG include negative prompting (specifying an unconditional guidance target other than null, allowing users to steer away from unwanted content) and dynamic guidance scales that vary across the denoising timestep schedule. ControlNet integrates CFG by adding spatial conditioning signals (depth maps, edge maps, pose skeletons) as additional conditioning inputs whilst preserving the CFG framework for prompt-based steering. Generative AI engineering practice increasingly treats CFG scale as a per-task hyperparameter tuned empirically or via reward model feedback.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
