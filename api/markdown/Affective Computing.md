public:: true

# Affective Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:affective-computing",
  "@type": "Page",
  "vc:slug": "affective-computing",
  "title": "Affective Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:affective-computing",
  "@type": "Class",
  "label": "Affective Computing",
  "definition": "Affective computing is a branch of artificial intelligence and human-computer interaction concerned with systems that can recognise, interpret, process, and simulate human emotions and affective states. It draws on psychology, cognitive science, and machine learning to endow machines with emotional intelligence, enabling them to adapt their behaviour in response to detected user affect. The field encompasses technologies for emotion detection from facial expressions, speech, physiological signals, and body language, as well as methods for generating emotionally congruent responses.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sentiment-analysis", "label": "Sentiment Analysis"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:emotion-aware-interaction", "label": "Emotion Aware Interaction"},
      {"@id": "urn:ngm:class:emotional-analytics-engine", "label": "Emotional Analytics Engine"},
      {"@id": "urn:ngm:class:cognitive-feedback-interface", "label": "Cognitive Feedback Interface"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:emotional-intelligence", "label": "Emotional Intelligence"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Affective Computing]] is the discipline that equips computational systems with the capacity to detect, interpret, and respond to human [[Emotional Intelligence]], bridging [[Human Computer Interaction]] with [[Cognitive Science]] through techniques such as [[Sentiment Analysis]], [[Computer Vision]], and [[Deep Learning]].

- ### Relationships
  - Affective computing builds directly on [[Human Computer Interaction]] as its parent discipline while employing [[Sentiment Analysis]] and [[Computer Vision]] to decode emotional signals from text, face, and gesture. [[Deep Learning]] models underpin real-time affect recognition pipelines, and [[Natural Language Processing]] parses affective meaning from speech and text. These capabilities collectively enable [[Emotion Aware Interaction]] systems and [[Emotional Analytics Engine]] platforms that feed data into [[Cognitive Feedback Interface]] designs, while the field remains philosophically grounded in [[Cognitive Science]] and the broader study of [[Emotional Intelligence]].

- ### Content
  - Affective computing was formally established as a research field by Rosalind Picard at the MIT Media Lab in her 1997 book of the same name. Picard argued that human emotions play a central role in rational decision-making, learning, and communication, and that machines incapable of recognising or expressing affect would remain fundamentally limited in natural interaction. Early work focused on physiological signal processing — galvanic skin response, heart rate variability, and facial action coding — to infer discrete emotional categories such as happiness, sadness, anger, fear, surprise, and disgust.

  - Modern affective computing systems operate across multiple modalities. Computer vision pipelines analyse facial action units using convolutional neural networks trained on large-scale annotated datasets such as AffectNet and RAF-DB. Speech emotion recognition extracts prosodic features — pitch, tempo, energy — alongside deep acoustic embeddings. Multimodal fusion combines these streams with physiological sensor data from wearables and contextual cues from language to produce more robust affective state estimates. Valence-arousal dimensional models increasingly supplement discrete categorical emotion labels, offering finer-grained continuous representations of affective space.

  - The significance of affective computing spans education, healthcare, automotive safety, and entertainment. Intelligent tutoring systems that detect learner frustration and adjust difficulty in real time have demonstrated measurable gains in engagement and learning outcomes. Mental health applications monitor longitudinal affect trajectories, offering early-warning signals for depression and anxiety. Driver monitoring systems infer drowsiness and emotional distraction to trigger safety interventions. In entertainment and XR, emotionally responsive characters and adaptive narrative engines create personalised immersive experiences grounded in the user's detected affective state.

  - Through 2024-2025, large multimodal foundation models have dramatically expanded affective computing capabilities by pre-training on vast corpora of audio-visual-text data, enabling few-shot emotion recognition with minimal domain-specific labelling. Simultaneously, ethical scrutiny has intensified: concerns about consent, cultural bias in affect labels, and the potential for surveillance and manipulation have led to regulatory proposals in the EU AI Act classifying certain emotion-recognition applications as high-risk. The field is converging toward privacy-preserving on-device inference, standardised benchmarking, and participatory design frameworks that place affective data ownership with users.

