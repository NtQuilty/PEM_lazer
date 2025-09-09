import Tracker from '@openreplay/tracker';

let tracker: Tracker | null = null;

export const initOpenReplay = (): Tracker | null => {
  if (typeof window === 'undefined') return null;
  if (tracker) return tracker;

  const projectKey = import.meta.env.VITE_OPENREPLAY_KEY as string;
  if (!projectKey) {
    console.warn('OpenReplay: VITE_OPENREPLAY_KEY not found');
    return null;
  }

  try {
    tracker = new Tracker({
      projectKey,
      obscureTextEmails: true,
      obscureTextNumbers: true,
      defaultInputMode: 0,
      respectDoNotTrack: true,
    });

    tracker.start();
    console.log('OpenReplay initialized successfully');
  } catch (error) {
    console.error('OpenReplay initialization failed:', error);
    return null;
  }

  return tracker;
};



