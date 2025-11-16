/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate Secret Santa assignments ensuring no one gets themselves
 */
export function generateAssignments(userIds: string[]): Map<string, string> {
  if (userIds.length < 2) {
    throw new Error('Need at least 2 participants for Secret Santa');
  }

  let attempts = 0;
  const maxAttempts = 100;

  while (attempts < maxAttempts) {
    const shuffled = shuffleArray(userIds);
    const assignments = new Map<string, string>();
    let valid = true;

    for (let i = 0; i < userIds.length; i++) {
      const giver = userIds[i];
      const receiver = shuffled[i];

      // Check if someone got themselves
      if (giver === receiver) {
        valid = false;
        break;
      }

      assignments.set(giver, receiver);
    }

    if (valid) {
      return assignments;
    }

    attempts++;
  }

  throw new Error('Failed to generate valid assignments after maximum attempts');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
