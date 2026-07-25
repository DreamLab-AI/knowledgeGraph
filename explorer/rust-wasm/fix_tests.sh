#!/bin/bash
# Fix all Property structs in tests to include Phase 11 fields

FILE="tests/phase3_integration.rs"

# Add the three new fields before the closing brace of each Property struct
sed -i '/characteristics: PropertyCharacteristics {/,/},/{
    /},$/a\            inverse_of: None,\n            equivalent_to: vec![],\n            disjoint_with: vec![],
}' "$FILE"

echo "Fixed Property structs in $FILE"
