Clock recovery (clock and data recovery, CDR) is the physical-layer process by which a receiver extracts a synchronised timing reference from an incoming data stream that carries no separate clock signal. It uses phase-locked loops or oversampling to align sampling instants with the centre of each symbol, compensating for jitter and frequency offset between transmitter and receiver. It matters because correct sampling timing is essential for reliable symbol detection in serial communication links.

### Content

- CDR circuits typically employ a phase-locked loop that tracks data transitions, with line coding (such as 8b/10b) guaranteeing sufficient transition density for lock. Robust clock recovery tolerates jitter, drift, and bounded frequency offset, enabling embedded-clock serial standards like PCIe, SATA, and high-speed Ethernet.

