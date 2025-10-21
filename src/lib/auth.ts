export type Session = {
  role: "crew" | "admin";
  email: string;
};

export type CrewUser = {
  email: string;
  password: string;
  fullName?: string;
  username?: string;
  phoneNumber?: string;
  domisili?: string;
};

const CREW_USERS_KEY = "hpz_crew_users";
const SESSION_KEY = "hpz_session";

const isBrowser = () => typeof window !== "undefined" && typeof localStorage !== "undefined";

export function getCrewUsers(): CrewUser[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(CREW_USERS_KEY);
    return raw ? (JSON.parse(raw) as CrewUser[]) : [];
  } catch {
    return [];
  }
}

export function saveCrewUsers(users: CrewUser[]) {
  if (!isBrowser()) return;
  localStorage.setItem(CREW_USERS_KEY, JSON.stringify(users));
}

export function addCrewUser(user: CrewUser) {
  const users = getCrewUsers();
  // prevent duplicate email
  if (users.some((u) => u.email.toLowerCase() === user.email.toLowerCase())) {
    throw new Error("Email sudah terdaftar");
  }
  users.push(user);
  saveCrewUsers(users);
}

export function findCrewUser(email: string, password: string): CrewUser | undefined {
  const users = getCrewUsers();
  return users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
}

export function setSession(session: Session) {
  if (!isBrowser()) return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession(): Session | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  if (!isBrowser()) return;
  localStorage.removeItem(SESSION_KEY);
}

export const DEFAULT_ADMIN = {
  email: "admin@hpz.local",
  password: "admin123",
};
