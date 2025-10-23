import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Check for the session cookie
    const cookieStore = cookies();
    const session = cookieStore.get('github-session');
    
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Parse the session data
    const sessionData = JSON.parse(session.value);
    
    // Return the user data from the session
    return NextResponse.json({ 
      user: {
        id: sessionData.user.id,
        name: sessionData.user.name,
        email: sessionData.user.email,
        login: sessionData.user.login,
        avatar_url: sessionData.user.avatar_url,
        html_url: sessionData.user.html_url,
        bio: sessionData.user.bio,
        company: sessionData.user.company,
        location: sessionData.user.location,
        blog: sessionData.user.blog,
      }
    });
  } catch (error) {
    console.error('Session error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
