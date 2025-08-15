export interface AppStoreApp {
  trackId: number;
  trackName: string;
  description: string;
  artworkUrl512: string;
  artworkUrl100: string;
  averageUserRating: number;
  userRatingCount: number;
  price: number;
  formattedPrice: string;
  primaryGenreName: string;
  trackViewUrl: string;
  releaseDate: string;
  version: string;
  country: string;
  currency: string;
}

// Supported countries for your app
const SUPPORTED_COUNTRIES = [
  'us',    // United States
  'il',    // Israel (primary market for Hebrew)
  'de',    // Germany (your location)
  'gb',    // United Kingdom
  'ca',    // Canada
  'au'     // Australia
];

// Get user's country from browser
export function getUserCountry(): string {
  try {
    // Try to get from browser language/locale
    const locale = navigator.language || navigator.languages?.[0];
    if (locale) {
      const country = locale.split('-')[1]?.toLowerCase();
      if (country && SUPPORTED_COUNTRIES.includes(country)) {
        return country;
      }
    }
    
    // Fallback to US
    return 'us';
  } catch {
    return 'us';
  }
}

export async function fetchAppFromAppStore(appId: string, country?: string): Promise<AppStoreApp | null> {
  try {
    const targetCountry = country || getUserCountry();
    const response = await fetch(`https://itunes.apple.com/lookup?id=${appId}&country=${targetCountry}`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const app = data.results[0];
      return {
        trackId: app.trackId,
        trackName: app.trackName,
        description: app.description,
        artworkUrl512: app.artworkUrl512,
        artworkUrl100: app.artworkUrl100,
        averageUserRating: app.averageUserRating,
        userRatingCount: app.userRatingCount,
        price: app.price,
        formattedPrice: app.formattedPrice,
        primaryGenreName: app.primaryGenreName,
        trackViewUrl: app.trackViewUrl,
        releaseDate: app.releaseDate,
        version: app.version,
        country: targetCountry,
        currency: app.currency || 'USD'
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching app from App Store:', error);
    return null;
  }
}

export async function fetchMultipleApps(appIds: string[], country?: string): Promise<AppStoreApp[]> {
  const apps: AppStoreApp[] = [];
  
  for (const appId of appIds) {
    const app = await fetchAppFromAppStore(appId, country);
    if (app) {
      apps.push(app);
    }
  }
  
  return apps;
}

// Get app data from multiple countries for comparison
export async function fetchAppFromMultipleCountries(appId: string): Promise<Partial<AppStoreApp>[]> {
  const countries = ['us', 'il', 'de']; // Key markets
  const results: Partial<AppStoreApp>[] = [];
  
  for (const country of countries) {
    try {
      const app = await fetchAppFromAppStore(appId, country);
      if (app) {
        results.push({
          country: app.country,
          averageUserRating: app.averageUserRating,
          userRatingCount: app.userRatingCount,
          formattedPrice: app.formattedPrice,
          currency: app.currency
        });
      }
    } catch (error) {
      console.error(`Error fetching from ${country}:`, error);
    }
  }
  
  return results;
}
