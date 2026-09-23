
Liveness detection is a set of techniques used during biometric capture to verify that the presented sample originates from a live, present human rather than a spoof such as a photograph, mask, recording or deepfake. It distinguishes genuine presentations from presentation attacks by analysing physiological signals, motion, texture and challenge responses, and is standardised under ISO/IEC 30107 as presentation attack detection. Liveness detection is essential to the integrity of remote identity verification, biometric authentication and onboarding flows.

- ### Overview
	- Liveness detection addresses the core weakness of biometrics: a captured face or fingerprint can be presented by an attacker.
	- Approaches split into passive methods, which require no user action, and active methods, which issue a challenge.
	- ISO/IEC 30107 formalises presentation attack detection and its evaluation metrics.
	- Modern systems combine multiple cues and increasingly rely on [[Deep Learning]] classifiers.
- ### Mechanisms
	- **Texture and reflectance analysis**: distinguishing genuine skin from printed or screen-rendered surfaces.
	- **Motion and depth cues**: detecting micro-movements, 3D structure and parallax that flat spoofs lack.
	- **Challenge-response**: prompting blinks, head turns or random expressions to defeat static attacks.
	- **Anti-spoof classification**: [[Convolutional Neural Network]] models trained on attack and genuine samples.
- ### Applications
	- Remote [[Know Your Customer]] onboarding for financial services.
	- Face unlock and [[Biometric Authentication]] on mobile devices.
	- Border control and high-assurance [[Access Control]].
	- [[Fraud Detection]] in account recovery and high-value transactions.
- ### Provenance

