interface PlanetaryNavigationQuery {
  planet: 'moon' | 'ganymede';
  feature: string;
}

interface APIResponse {
  localError?: 'inputTooShort' | 'inputTooLong';
  networkError?: string;
}

const isDev = import.meta.env.DEV;
const urlBase = isDev ? 'http://127.0.0.1:5100/projectp/api/' : 'https://efh.moe/projectp/api/';

interface PlanetaryNavigationResponse extends APIResponse {
  
  response?: {
    foundFeature: boolean;
    latitude: number;
    longitude: number;
    textResponse: string;
  }
}

/**
 *  Queries the Planetary Navigation Assistant API from the backend
 * @param input - The input query for the planetary navigation assistant
 * @returns A promise that resolves to the API response, or an error object. Make sure to check for localError and networkError in the response.
 */
export async function queryPlanetaryNavigationAssistant(input: PlanetaryNavigationQuery): Promise<PlanetaryNavigationResponse> {
  const apiRoute = `${urlBase}ai/planetary_navigation_assistant`

  if (input.feature.length < 3) return { localError: 'inputTooShort' }
  if (input.feature.length > 1000) return { localError: 'inputTooLong' }

  console.log('fetching', apiRoute, input);
  const response = await fetch(apiRoute, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  });

  if (!response.ok) {
    return { networkError: `Network error: ${response.status} ${response.statusText}` };
  }

  const data = JSON.parse(await response.json());
  return { response: { foundFeature: data.found_feature, latitude: data.latitude, longitude: data.longitude, textResponse: data.text_response } };
}

interface PlanetaryFeatureDescriptionQuery {
  planet: 'moon' | 'ganymede';
  feature: string;
}

interface PlanetaryFeatureDescriptionResponse extends APIResponse {
  response?: {
    description: string;
  }
}

/**
 * Queries the Planetary Feature Description API from the backend
 * @param input - The input query for the planetary feature description
 * @returns A promise that resolves to the API response, or an error object. Make sure to check for localError and networkError in the response.
 */
export async function queryPlanetaryFeatureDescription(input: PlanetaryFeatureDescriptionQuery): Promise<PlanetaryFeatureDescriptionResponse> {
  const apiRoute = `${urlBase}ai/planetary_feature_description_assistant`
  
  if (input.feature.length < 1) return { localError: 'inputTooShort' }
  if (input.feature.length > 100) return { localError: 'inputTooLong' }

  console.log('fetching', apiRoute, input);
  const response = await fetch(apiRoute, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  });

  if (!response.ok) {
    return { networkError: `Network error: ${response.status} ${response.statusText}` };
  }

  const data = await response.json();
  return { response: { description: JSON.parse(data).description } };
}
  