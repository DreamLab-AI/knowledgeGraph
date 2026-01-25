- ### OntologyBlock
  id:: power-supply-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7026
	- preferred-term:: Power Supply
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: A power supply unit (PSU) is an internal hardware component that converts alternating current (AC) from mains electricity into regulated low-voltage direct current (DC) required by computing equipment's internal components including motherboard, CPU, GPU, and storage devices. In data center contexts, power supply systems include redundant PSUs, uninterruptible power supplies (UPS), and power distribution units (PDUs).
	- maturity:: reviewed
	- belongsToDomain:: [[InfrastructureDomain]], [[Technology Domain]]
	- owl:class:: ngm:PowerSupply
	- owl:role:: Hardware

## Relationships
- relatedTo:: [[Computing Infrastructure]], [[Server Hardware]]
- partOf:: [[Data Center Infrastructure]], [[Computer Systems]]
- enables:: [[Continuous Operation]], [[System Reliability]]
- regulatedBy:: [[80 PLUS Certification]], [[Energy Efficiency Standards]]
- connectedTo:: [[Motherboard]], [[Storage Devices]], [[Graphics Cards]]

## PSU Functions

### Primary Functions
- **AC to DC Conversion**: Converts mains AC (110V/220V) to DC voltages (3.3V, 5V, 12V)
- **Voltage Regulation**: Maintains stable, consistent power delivery
- **Power Distribution**: Routes appropriate voltages to system components
- **Protection**: Overvoltage, overcurrent, and short-circuit protection

### DC Output Rails
| Rail | Typical Use |
|------|-------------|
| +12V | CPU, GPU, drives, fans |
| +5V | USB ports, SATA drives, some components |
| +3.3V | RAM, chipsets, some peripherals |
| -12V | Legacy components |
| +5VSB | Standby power for wake functions |

## Server and Data Center Power

### Server PSU Characteristics
- Designed for 24/7 continuous operation
- Higher efficiency ratings (90%+ typical)
- Hot-swappable capability
- Redundant configurations

### Redundancy Models
| Configuration | Description |
|---------------|-------------|
| N+1 | One spare PSU for failover |
| 2N | Fully redundant, two independent power paths |
| 2N+1 | Full redundancy plus one spare |

### Data Center Power Hierarchy
1. **Utility Power**: Main grid connection
2. **UPS Systems**: Battery backup for immediate protection
3. **Generators**: Extended backup during prolonged outages
4. **PDUs**: Power distribution to racks and equipment
5. **Server PSUs**: Final conversion for IT equipment

## PSU vs PDU

| Aspect | PSU | PDU |
|--------|-----|-----|
| Location | Inside computing device | In data center rack |
| Function | AC-DC conversion | Power distribution |
| Scope | Single device | Multiple devices |
| Features | Voltage regulation | Monitoring, switching, load balancing |

## Efficiency Standards

### 80 PLUS Certification Levels
| Certification | Efficiency at 50% Load |
|---------------|------------------------|
| 80 PLUS | 80% |
| Bronze | 85% |
| Silver | 88% |
| Gold | 90% |
| Platinum | 92% |
| Titanium | 94% |

Efficiency differences of 2% can significantly impact energy costs in large-scale data centers.

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with technical content
- **References**: 6 pages reference this concept
