import Tracker from '@openreplay/tracker';

let tracker: Tracker | null = null;

export const initOpenReplay = (): Tracker | null => {
  if (typeof window === 'undefined') return null;
  if (tracker) return tracker;

  const projectKey = import.meta.env.VITE_OPENREPLAY_KEY as string;
  if (!projectKey) {
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
  } catch (error) {
    console.error('OpenReplay initialization failed:', error);
    return null;
  }

  return tracker;
};
