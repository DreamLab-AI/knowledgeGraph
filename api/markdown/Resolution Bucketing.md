public:: true

# Resolution Bucketing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:resolution-bucketing",
  "@type": "Page",
  "vc:slug": "resolution-bucketing",
  "title": "Resolution Bucketing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:resolution-bucketing",
  "@type": "Class",
  "label": "Resolution Bucketing",
  "definition": "Resolution bucketing is a training-data preparation technique for diffusion and other image-generation models that groups training images into a fixed set of aspect-ratio and size buckets rather than forcing every image to a single square resolution. Each batch is drawn from a single bucket so images share dimensions, avoiding distortion from cropping or stretching while preserving GPU batching efficiency. It improves fidelity for non-square data and is a standard step in fine-tuning pipelines such as Kohya-based DreamBooth and LoRA training.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:kohya-dreambooth-and-similar", "label": "Kohya DreamBooth and Similar"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Resolution bucketing groups training images into aspect-ratio buckets so batches share dimensions without aggressive cropping, as implemented in [[Kohya DreamBooth and Similar]] fine-tuning toolchains.
- ### Content
  - By assigning each image to the nearest valid bucket and batching within buckets, the technique preserves composition and detail for portraits, landscapes, and other non-square inputs. This reduces aspect-ratio artefacts in the trained model while keeping memory layout uniform for efficient GPU throughput.
