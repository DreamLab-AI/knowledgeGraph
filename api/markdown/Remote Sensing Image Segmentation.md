Remote sensing image segmentation is image segmentation applied to aerial and orbital imagery, commonly treated as a classification problem at pixel level.[^1][^2]

It narrows the general task by working on scenes whose pixels come from sensors and not from everyday photographs, and one conference paper calls semantic segmentation one of the important computer vision tasks for aerial imagery in resource surveys, disaster detection and urban planning.[^1] A preprint on the Segment Anything Model describes segmentation as an essential step for remote sensing image processing.[^2]

Recent work tests promptable models on this imagery. The preprint probed the Segment Anything Model across multi-scale datasets with bounding boxes, individual points and text descriptors as prompts, and reports that a one-shot adjustment improved accuracy and reduced the need for manual annotation.[^2] Labelled data remain a constraint because remote sensing datasets are often large and require significant resources for labeling.[^1]

That preprint also reports limitations with lower spatial resolution images.[^2] Only one conference paper and one preprint were retained, so the evidence does not establish benchmark accuracy for any named sensor, nor an agency definition of the term.

[^1]: ISPRS Annals, “Semantic Segmentation of Remote Sensing Imagery Using an Enhanced Encoder-Decoder Architecture”. https://isprs-annals.copernicus.org/articles/X-1-W1-2023/1015/2023/isprs-annals-X-1-W1-2023-1015-2023.pdf
[^2]: arXiv, “The Segment Anything Model (SAM) for Remote Sensing Applications: From Zero to One Shot”. https://arxiv.org/abs/2306.16623

