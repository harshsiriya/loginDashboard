'use server';

export async function postUserDetails(api, userData) {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      cache: 'no-store',
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('API Error Response:', result);
      throw new Error(result.message || 'Login failed');
    }

    return result;
  } catch (error) {
    console.error('Network or server error:', error);
    throw new Error(error.message || 'Something went wrong');
  }
}
