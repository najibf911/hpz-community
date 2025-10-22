import ClientWelcome from "./ClientWelcome";

export default function WelcomePage({
  searchParams,
}: {
  searchParams: { return?: string; demo?: string };
}) {
  const returnTo = searchParams?.return || "/crew/dashboard";
  const demo = searchParams?.demo;
  return <ClientWelcome returnTo={returnTo} demo={demo ?? undefined} />;
}
