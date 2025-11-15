#!/usr/bin/env node
/**
 * Perplexity API Research Integration
 * Enriches ontology files with current information using Perplexity
 */

const https = require('https');
const fs = require('fs').promises;

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const API_URL = 'https://api.perplexity.ai/chat/completions';

async function queryPerplexity(prompt, model = 'sonar') {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are a precise research assistant providing current, factual information with citations. Use UK English spelling.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.2,
      max_tokens: 4000
    });

    const options = {
      hostname: 'api.perplexity.ai',
      port: 443,
      path: '/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          if (parsed.choices && parsed.choices[0]) {
            resolve(parsed.choices[0].message.content);
          } else {
            reject(new Error('Invalid response format'));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function enrichOntologyTerm(term, definition) {
  const prompt = `Research the current state of "${term}" (defined as: ${definition}).

Provide:
1. **Current Developments**: Latest trends, technologies, and innovations (2024-2025)
2. **Key Applications**: Real-world use cases and implementations
3. **Industry Standards**: Relevant international standards, frameworks, or specifications
4. **Academic Literature**: Recent papers, research, or authoritative sources (with full citations)
5. **Notable Examples**: Specific products, platforms, or organisations using this technology
6. **Future Outlook**: Emerging trends and expected developments

Use UK English spelling throughout. Format with markdown. Include hyperlinks to reputable sources.`;

  try {
    const enrichment = await queryPerplexity(prompt);
    return {
      success: true,
      content: enrichment,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

// CLI interface
if (require.main === module) {
  const term = process.argv[2];
  const definition = process.argv[3];

  if (!term || !definition) {
    console.error('Usage: node perplexity-research.js <term> <definition>');
    process.exit(1);
  }

  if (!PERPLEXITY_API_KEY) {
    console.error('Error: PERPLEXITY_API_KEY environment variable not set');
    process.exit(1);
  }

  enrichOntologyTerm(term, definition)
    .then(result => {
      console.log(JSON.stringify(result, null, 2));
    })
    .catch(error => {
      console.error('Error:', error.message);
      process.exit(1);
    });
}

module.exports = { queryPerplexity, enrichOntologyTerm };
