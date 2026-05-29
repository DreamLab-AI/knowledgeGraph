- ### Definition
  - Speaker diarisation is the automated process of segmenting a continuous audio stream into speaker-homogeneous regions and assigning a speaker label to each region, answering the question 'who spoke when?' without necessarily identifying the speakers by name. The pipeline typically comprises voice activity detection, acoustic feature extraction, speaker embedding (using models such as x-vectors or ECAPA-TDNN), agglomerative clustering or spectral clustering to group embeddings, and optional overlap detection. Speaker diarisation is a prerequisite component in meeting transcription, clinical consultation recording, and multiparty conversation analysis systems.

- ### Semantic Classification
  - owl-class:: speaker-diarisation:Speaker Diarisation
  - owl-role:: Concept

- ### Relationships
  - requires [[Audio Processing System]]
  - enables [[Meeting Transcription]]
  - enables [[Real-time Transcription]]
  - relatedTo [[Automatic Speech Recognition]]
  - relatedTo [[Natural Language Processing]]

- ### Content
  Speaker diarisation solves the temporal partitioning problem in multi-speaker audio: given a recording containing an unknown number of speakers, determine the time intervals during which each speaker is active. The task is distinct from speaker identification (matching a speaker to a known identity) and speaker verification (confirming whether a given speaker is who they claim to be), though diarisation outputs can feed into those tasks.

  Classical diarisation pipelines apply Gaussian mixture model (GMM) or i-vector features with agglomerative clustering guided by BIC-based stopping criteria. Modern end-to-end neural approaches—including EEND (End-to-End Neural Diarisation) and its variants—model diarisation as a sequence labelling problem using self-attention networks, enabling joint modelling of overlapping speech without explicit segmentation stages. Speaker embeddings from x-vector or ECAPA-TDNN networks have become the dominant acoustic representations due to their robustness to channel conditions and speaker variability.

  Speaker diarisation is a critical upstream component in automatic meeting minute generation, where the output is combined with Automatic Speech Recognition transcripts to produce labelled dialogue transcripts. It is also applied in broadcast media indexing, forensic audio analysis, and clinical note-taking systems where attributing utterances to specific speakers is necessary for legal or clinical validity. Error metrics include Diarisation Error Rate (DER), which accounts for missed speech, false alarm speech, and speaker confusion.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z