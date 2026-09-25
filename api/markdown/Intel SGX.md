Intel SGX (Software Guard Extensions) is a set of Intel processor instructions that create hardware-isolated memory regions called enclaves, protecting sensitive code and data from the operating system, hypervisor, and other privileged software on the same system, with remote attestation enabling third-party verification of enclave integrity.

### Semantic Classification

### Content

- Intel SGX, short for Software Guard Extensions, lets applications place sensitive code and data inside enclaves whose memory is encrypted and isolated from the operating system and other processes. Access is mediated by the processor.
- Remote attestation allows a third party to verify that an enclave is running expected code on genuine hardware. The technology supports confidential computing scenarios where data must remain protected during processing.

### Current Landscape (2026)

- Intel has repositioned SGX as a legacy, application-level enclave technology, steering confidential-computing customers toward Trust Domain Extensions (TDX), which protects whole VMs and became generally available on 5th-Gen Xeon "Emerald Rapids"; Xeon 6 with Performance-cores adds TDX Connect to extend confidentiality across GPUs, SmartNICs and storage.
- Cloud availability of SGX enclaves is contracting: Microsoft Azure announced in June 2025 that it will retire SGX-based DCsv2 confidential VMs by 30 June 2026, began restricting SGX VM capacity from 1 July 2025, and is migrating customers to DCasv5/DCasv6-class VMs backed by Intel TDX or AMD SEV-SNP.
- A wave of 2025 physical memory-bus interposition attacks broke SGX's confidentiality on real hardware: WireTap (Georgia Tech and Purdue) and Battering RAM (KU Leuven and Birmingham) targeted DDR4 3rd-Gen Xeon platforms, exploiting SGX's deterministic AES-XTS encryption to read enclave ciphertext and forge attestation.
- TEE.fail, disclosed on 28 October 2025 by researchers from Georgia Tech, Purdue and Synkhronix, is the first DDR5-based ciphertext attack, using a sub-$1,000 off-the-shelf interposer to extract cryptographic and ECDSA attestation keys from SGX, TDX and AMD SEV-SNP (with Ciphertext Hiding), and even to compromise NVIDIA GPU confidential computing via forged attestation.
- Intel's response (advisory INTEL-2025-10-28-001) reaffirmed that physical memory-interposer attacks remain out of scope for SGX and TDX, so no microcode or hardware mitigation is offered; AMD similarly declined to mitigate, leaving physical server security as the only defence.
- Real-world operators are exiting SGX: Phala Network announced in September 2025 that it is standing down all SGX workers and migrating exclusively to Intel TDX (DDR5) and NVIDIA Confidential Computing in direct response to WireTap.
- The open frontier as of 2026 is that deterministic, integrity-free memory encryption in current TEEs is fundamentally exposed to bus interposition; remote software-only side-channels (HECKLER, SIGY, TDXdown, PowSpectre) persist, and Intel continues to rely on Trusted Computing Base Recovery attestation and PCK-certificate reissuance (shared across SGX and TDX) as the operational patch path.

### References

- 1. TS2 Tech (2025). Trusted Execution Environment (TEE) Hardware News – June–July 2025. https://ts2.tech/en/trusted-execution-environment-tee-hardware-news-june-july-2025/
- 2. Georgia Tech, Purdue University & Synkhronix (2025). TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition. https://tee.fail/
- 3. BleepingComputer (2025). TEE.Fail attack breaks confidential computing on Intel, AMD, Nvidia CPUs. https://www.bleepingcomputer.com/news/security/teefail-attack-breaks-confidential-computing-on-intel-amd-nvidia-cpus/
- 4. Intel (2025). Security Announcement INTEL-2025-10-28-001 (TEE.fail). https://www.intel.com/content/www/us/en/security-center/announcement/intel-security-announcement-2025-10-28-001.html
- 5. Phala Network (2025). Phala Announces Strategic Transition Beyond SGX in Response to WireTap. https://phala.com/posts/response-to-wiretap-sgx-deprecation
- 6. The Hacker News (2025). New TEE.Fail Side-Channel Attack Extracts Secrets from Intel and AMD DDR5 Secure Enclaves. https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html

### Provenance

