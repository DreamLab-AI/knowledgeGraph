public:: true

# Moderation Tools
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:moderation-tools",
  "@type": "Page",
  "vc:slug": "moderation-tools",
  "title": "Moderation Tools",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:moderation-tools",
  "@type": "Class",
  "label": "Moderation Tools",
  "definition": "Moderation tools are software systems that detect, review, and act on user-generated content or behaviour that violates platform policies, combining automated classifiers, reporting queues, and human-review workflows. They enforce community standards by flagging, filtering, age-gating, or removing content and sanctioning accounts. In immersive and social platforms they increasingly cover real-time voice, spatial, and behavioural moderation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:metaverse-governance-and-safeguarding", "label": "Metaverse governance and safeguarding"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:community-standards", "label": "Community Standards"},
      {"@id": "urn:ngm:class:content-moderation-standards", "label": "Content Moderation Standards"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Moderation tools detect and act on policy-violating content and behaviour through automated and human review. They operationalise [[Community Standards]] and implement [[Content Moderation Standards]].
- ### Content
  - Pipelines pair ML classifiers (for hate speech, CSAM, spam) with triage queues that route uncertain cases to human reviewers, balancing scale against accuracy and false-positive harm. Real-time environments add live audio transcription, proximity controls, and rapid response actions to address harassment as it occurs.
