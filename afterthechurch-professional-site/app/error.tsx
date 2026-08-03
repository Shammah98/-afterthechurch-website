"use client";

export default function ErrorPage({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="errorPage">
      <p className="eyebrow">Something went wrong</p>
      <h1>The page could not be loaded safely.</h1>
      <p>No form should be resubmitted automatically. You may try the page again.</p>
      <button className="button primary" type="button" onClick={reset}>
        Try Again
      </button>
    </section>
  );
}
