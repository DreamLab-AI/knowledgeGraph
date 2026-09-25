Speaker diarisation is the automated process of partitioning a continuous multi-speaker audio stream into temporally contiguous, speaker-homogeneous segments and assigning a speaker label to each segment, answering the question 'who spoke when?' without necessarily mapping labels to real-world identities. A canonical pipeline comprises voice activity detection, acoustic feature extraction, speaker embedding (via models such as x-vectors or ECAPA-TDNN), agglomerative or spectral clustering to group embeddings into speaker clusters, optional overlap detection, and a resegmentation or ViterBI refinement step. End-to-end neural approaches such as EEND (End-to-End Neural Diarisation) unify segmentation and assignment into a single sequence-labelling model capable of handling overlapping speech. Speaker diarisation is a foundational component in meeting transcription systems, clinical consultation recording, broadcast media indexing, and any dialogue-analytic pipeline that requires utterance attribution.

### Overview

- Speaker diarisation addresses the temporal partitioning problem: given a recording containing an unknown number of speakers, determine the time intervals during which each distinct voice is active. Unlike [[Speaker Recognition]], which asks *who is speaking*, diarisation asks only *how many speakers are present and when does each speak*.
- The task is complicated by overlapping speech (two speakers active simultaneously), variable recording conditions (telephone, far-field microphone arrays, broadcast audio), channel noise, reverberation, and code-switching. These factors motivate the adoption of [[Deep Learning]] embeddings over classical GMM/i-vector features.
- Performance is measured by the **Diarisation Error Rate (DER)**, which sums missed speech, false alarm speech, and speaker confusion fractions. A DER of 0% indicates perfect segmentation and assignment; typical production systems achieve 5–15% DER on challenging telephone or meeting corpora.
- The maturity of the field is **established**: diarisation has been researched since the NIST Rich Transcription (RT) evaluations of the early 2000s, and modern neural systems are deployed in commercial products (Google Meet, Microsoft Teams, Amazon Transcribe).

### Key Components

#### Voice Activity Detection (VAD)

- [[Voice Activity Detection]] segments the raw waveform into speech and non-speech regions, suppressing silence and background noise before further processing.
- Neural VAD models (e.g. Silero VAD, pyannote VAD) have largely replaced energy-threshold methods, achieving robust detection even under adverse noise.

#### Acoustic Feature Extraction

- [[Acoustic Feature Extraction]] converts raw audio frames (typically 25 ms windows) into feature representations such as Mel-frequency cepstral coefficients (MFCCs), filter-bank energies, or raw waveform embeddings.
- Filter-bank features fed into deep neural networks have supplanted handcrafted MFCCs in state-of-the-art systems.

#### Speaker Embedding

- [[Speaker Embedding]] networks map short audio segments to fixed-dimensional vectors (d-vectors, x-vectors, ECAPA-TDNN embeddings) that encode speaker identity.
- ECAPA-TDNN (Emphasised Channel Attention, Propagation and Aggregation — Time Delay Neural Network) consistently outperforms older x-vector architectures on speaker discriminability.
- Embeddings are trained with metric learning objectives (angular margin losses such as ArcFace or AAM-softmax) to maximise inter-speaker distance and minimise intra-speaker variance.

#### Clustering

- [[Spectral Clustering]] and agglomerative hierarchical clustering (AHC) are the dominant approaches for grouping embeddings into speaker clusters.
- AHC uses a similarity threshold or Bayesian Information Criterion (BIC) to determine the number of clusters; spectral clustering uses the eigenstructure of a similarity affinity matrix.
- Variational Bayesian Hidden Markov Models (VB-HMM) provide a probabilistic alternative, modelling speaker-change dynamics explicitly.

#### Overlap Detection

- [[Overlap Detection]] identifies frames where two or more speakers are simultaneously active—a necessary pre-processing step for neural diarisation systems that cannot inherently handle overlapping speech.
- Pyannote.audio includes a dedicated overlap detection module trained separately and integrated into the diarisation pipeline.

#### End-to-End Neural Diarisation (EEND)

- EEND models reformulate diarisation as a multi-label sequence classification problem; a [[Transformer Architecture]] (e.g. SA-EEND) processes the full utterance and outputs per-frame speaker-activity probabilities for each speaker.
- EEND-EDA (Encoder Decoder Attractors) handles a variable number of speakers via an attractor-based decoder, removing the fixed-speaker-count limitation of early EEND models.

### Applications and Use Cases

- **Meeting transcription**: Diarisation is a mandatory upstream component in systems that produce labelled meeting minutes (e.g. Microsoft Teams Premium Intelligent Recap, Otter.ai, Fireflies.ai). Combined with [[Automatic Speech Recognition]], it produces a speaker-labelled transcript.
- **Clinical consultation recording**: Medical note-taking systems (ambient clinical intelligence) use diarisation to attribute utterances to clinician and patient, enabling structured [[Clinical Note Generation]]. Nuance DAX, AWS HealthScribe, and similar platforms deploy diarisation at scale.
- **Broadcast media indexing**: Television and radio archives are segmented by speaker for search, subtitle attribution, and content analytics. Diarisation enables automatic speaker linking across episodes.
- **Forensic audio analysis**: Courts require attributed transcripts; diarisation provides a machine-generated segmentation that human analysts can verify, reducing the cost of manual transcription.
- **Call centre analytics**: Customer service recordings are diarised to separate agent and customer voices, enabling per-role sentiment analysis, compliance monitoring, and quality assurance.
- **Multimodal dialogue systems**: In embodied AI and social robotics, diarisation of microphone array input feeds into [[Dialogue Act Recognition]] and turn-management modules, enabling robots to track conversation participants.
- **Accessibility captioning**: Real-time diarisation combined with [[Real-time Transcription]] produces speaker-attributed captions for people who are deaf or hard of hearing in multi-speaker environments.

### Standards and Evaluation Context

- **NIST Rich Transcription (RT) evaluations** (2002–2009): The principal benchmarks that established DER as the community-standard metric and produced labelled corpora (RT-03, RT-04, RT-07) still used for comparison today.
- **DIHARD challenge**: A series of NIST-organised challenges (DIHARD I–III, 2018–2021) targeting diarisation "in the wild" across 11 distinct acoustic domains; introduced DiHARD corpus and collar-free DER measurement.
- **CHiME-6 / CHiME-7**: Challenges targeting far-field multi-channel meeting diarisation with array microphones, emphasising [[Noise Reduction]] and [[Signal Processing]] integration.
- **AMI Meeting Corpus**: Widely used research corpus of instrumented meeting recordings with manual speaker annotations, enabling reproducible evaluation.
- **pyannote.audio**: The dominant open-source toolkit; provides pre-trained models (VAD, embedding, diarisation), training pipelines, and standardised metrics. Versions 2.x and 3.x introduced EEND-based and clustering-free pipeline variants.
- **Diarisation Error Rate (DER)**: The canonical metric; DER = (missed speech + false alarm + speaker confusion) / total reference speech duration. A collar tolerance (e.g. ±250 ms) is optionally applied around speaker boundaries to account for annotation imprecision.
- **JER (Jaccard Error Rate)**: An alternative metric introduced in DIHARD that weights each speaker equally regardless of speaking time, reducing bias towards dominant speakers.

### Technical Considerations

- **Overlapping speech** is the primary source of DER: classical pipeline systems cannot assign a frame to two speakers simultaneously; EEND addresses this directly via multi-label output.
- **Number of speakers**: Most clustering-based systems require an estimate of the number of speakers; techniques include BIC stopping for AHC, or automatic selection of spectral cluster count from the eigenspectrum.
- **Domain mismatch**: Embeddings and VAD models trained on one domain (e.g. telephone speech) degrade on another (e.g. far-field meeting audio); domain adaptation and self-supervised pre-training (e.g. WavLM-based embeddings) mitigate this.
- **Real-time constraints**: Streaming diarisation (e.g. online AHC, incremental EEND) introduces a speaker-tracking latency trade-off; chunk-based inference with look-ahead buffering is the standard approach.
- **Privacy and data governance**: Recordings containing identifiable voices are personal data under GDPR and HIPAA, requiring appropriate consent and retention policies, particularly in clinical and legal contexts.

### Provenance

