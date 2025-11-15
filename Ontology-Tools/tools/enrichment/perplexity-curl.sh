#!/bin/bash
# Perplexity API wrapper using curl
# Usage: ./perplexity-curl.sh "<prompt>"

PROMPT="$1"

if [ -z "$PROMPT" ]; then
  echo "Error: No prompt provided"
  exit 1
fi

if [ -z "$PERPLEXITY_API_KEY" ]; then
  echo "Error: PERPLEXITY_API_KEY not set"
  exit 1
fi

# Create JSON payload
JSON_PAYLOAD=$(cat <<EOF
{
  "model": "sonar",
  "messages": [
    {
      "role": "system",
      "content": "You are a precise research assistant providing current, factual information with citations. Use UK English spelling. Format responses in markdown."
    },
    {
      "role": "user",
      "content": $(echo "$PROMPT" | jq -Rs .)
    }
  ],
  "temperature": 0.2,
  "max_tokens": 4000
}
EOF
)

# Call API
RESPONSE=$(curl -s -X POST "https://api.perplexity.ai/chat/completions" \
  -H "Authorization: Bearer ${PERPLEXITY_API_KEY}" \
  -H "Content-Type: application/json" \
  -d "$JSON_PAYLOAD")

# Extract content
echo "$RESPONSE" | jq -r '.choices[0].message.content // .error.message // "No response"'
