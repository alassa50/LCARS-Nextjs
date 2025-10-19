// API Client utilities for various integrations

export interface APIRequestConfig {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  body?: any
}

export async function makeAPIRequest(config: APIRequestConfig) {
  try {
    const response = await fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
      body: config.body ? JSON.stringify(config.body) : undefined,
    })

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// GitHub API utilities
export async function fetchGitHubRepos(username: string, token?: string) {
  const headers: Record<string, string> = {}
  if (token) {
    headers['Authorization'] = `token ${token}`
  }

  return makeAPIRequest({
    url: `https://api.github.com/users/${username}/repos`,
    method: 'GET',
    headers,
  })
}

// OpenAI API utilities
export async function sendAIMessage(message: string, apiKey: string) {
  return makeAPIRequest({
    url: 'https://api.openai.com/v1/chat/completions',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    body: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    },
  })
}
