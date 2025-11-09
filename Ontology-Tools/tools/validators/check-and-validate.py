#!/usr/bin/env python3
"""
Check for refactored ontologies and run validation if both exist
"""

import sys
import subprocess
from pathlib import Path

def main():
    base_path = Path("/home/devuser/workspace/project/Metaverse-Ontology/ontology")
    blockchain_path = base_path / "blockchain-ontology/schemas/blockchain-ontology-refactored.ttl"
    ai_path = base_path / "ai-grounded-ontology/schemas/ai-grounded-ontology-refactored.ttl"
    validator_path = Path("/home/devuser/workspace/project/Metaverse-Ontology/scripts/ontology-validator.py")

    print("Checking for refactored ontology files...")
    print(f"  Blockchain: {blockchain_path}")
    print(f"  AI-Grounded: {ai_path}")
    print()

    bc_exists = blockchain_path.exists()
    ai_exists = ai_path.exists()

    print(f"  Blockchain ontology: {'✓ EXISTS' if bc_exists else '✗ NOT FOUND'}")
    print(f"  AI-Grounded ontology: {'✓ EXISTS' if ai_exists else '✗ NOT FOUND'}")
    print()

    if bc_exists and ai_exists:
        print("Both ontologies found! Running validation...")
        print("=" * 80)
        result = subprocess.run([sys.executable, str(validator_path)])
        return result.returncode
    else:
        print("Waiting for refactoring agents to complete their work...")
        if not bc_exists:
            print("  - Still waiting for: Blockchain refactoring agent")
        if not ai_exists:
            print("  - Still waiting for: AI-Grounded refactoring agent")
        return 2  # Not ready yet

if __name__ == "__main__":
    sys.exit(main())
