
Set-of-mark prompting is a visual-prompting technique that overlays an image with numbered or coloured marks on segmented regions so a multimodal language model can refer to and reason about specific elements by label. By grounding the model's references in explicit visual tokens, it sharply improves spatial grounding, visual question answering, and GUI element selection. It is a key enabler of vision-driven computer-use agents.

- ### Content
  - A segmentation model partitions the screenshot or image, each region receives a visible identifier, and the prompt instructs the model to answer or act in terms of those identifiers. This converts ambiguous pixel-space grounding into discrete symbolic choices, markedly improving the reliability with which agents click, type, and navigate user interfaces.

