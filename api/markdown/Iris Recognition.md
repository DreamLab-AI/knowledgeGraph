Iris recognition is a biometric identification technique that authenticates individuals from the intricate, epigenetically random texture of the iris, which is stable from early childhood and differs even between genetically identical twins. Near-infrared imaging, iris segmentation and Gabor-wavelet encoding — pioneered by John Daugman — produce a compact IrisCode compared via Hamming distance, delivering among the lowest false-match rates of any biometric and powering border control, national identity schemes such as India's Aadhaar, and proof-of-personhood systems.

### Semantic Classification

### Content

## Definition

**Iris recognition** identifies people by the texture of the iris — the coloured annulus of muscle surrounding the pupil. Iris patterns form through random morphogenesis in gestation, are essentially fixed from around one year of age, differ between a person's left and right eyes and between identical twins, and are protected behind the cornea, making them an unusually reliable biometric substrate. The canonical algorithm, developed by John Daugman at the University of Cambridge in the early 1990s, images the eye under near-infrared illumination (which reveals texture even in dark irises), segments the iris between pupillary and limbic boundaries, unwraps it into a normalised polar coordinate sheet (the rubber-sheet model), and applies 2D Gabor wavelet filters whose quantised phase responses form a 2,048-bit IrisCode.

Matching reduces to computing a Hamming distance between IrisCodes (with masking bits for eyelids, lashes and reflections, and rotation compensation for head tilt). Because the bits of different people's codes behave like independent coin flips, impostor distances cluster tightly around 0.5, giving extraordinarily low false-match rates — Daugman's analyses report odds of a false match below one in a billion at conservative thresholds. This statistical decisiveness is why iris recognition scales to one-to-many searches over hundreds of millions of enrolees, where [[Face Recognition]] and fingerprints require heavier disambiguation; its trade-offs are capture ergonomics (subject cooperation, specialised NIR cameras) and vulnerability at acquisition rather than matching (presentation attacks with printed or displayed irises, countered by liveness detection).

## Current Landscape

Deployed systems include the UAE's border-crossing watchlist (the first nationwide deployment), India's Aadhaar programme — the largest biometric system on Earth, using iris alongside fingerprints for over a billion residents — airport e-gates, and humanitarian cash-assistance registration by UNHCR. Standards such as ISO/IEC 19794-6 and 29794-6 govern iris image quality and interchange, and research continues on deep-learning segmentation and matching, iris recognition at a distance and on the move, and infant and post-mortem iris stability.

The most contested current deployment is [[Worldcoin]] (rebranded **World**), co-founded by Sam Altman, which uses custom "Orb" hardware to derive an iris-based proof-of-personhood credential (World ID) intended to distinguish humans from AI-generated accounts. In 2025–2026 it drew escalating enforcement from data-protection regulators worldwide, illustrating that the technique's precision cuts both ways for privacy:

- **Germany**: the Bavarian DPA (BayLDA), acting as lead supervisory authority, reprimanded the Worldcoin Foundation for storing iris codes as plaintext and, in a decision finalised in early 2025, ordered deletion of iris data and raised GDPR-compliance questions, prompting a pause for "station upgrades and regulatory review".
- **Brazil**: the ANPD, in early 2025, prohibited paying financial (crypto) incentives for iris enrolment under the LGPD, holding that payment vitiates the "free" consent required for sensitive data.
- **Thailand**: the PDPC (November 2025) ordered World to halt iris enrolment and delete records of some 1.2 million people; the **Philippines** banned the project in October 2025; and **Colombia's** SIC confirmed a permanent shutdown and deletion order (Resolution 45710 of June 2026, upholding its October 2025 sanction).
- Amid these bans, World continued to open new markets, launching Orb iris enrolment in Italy and reporting compliance with Kenyan regulators in early 2026.

  **Sources**:

- https://idtechwire.com/world-iris-biometrics-launches-in-italy-as-kenya-confirms-regulatory-compliance/
- https://www.edpb.europa.eu/system/files/2025-02/decision1594_0.pdf
- https://idtechwire.com/thailand-orders-worldcoin-to-halt-iris-scans-and-delete-biometric-data/

