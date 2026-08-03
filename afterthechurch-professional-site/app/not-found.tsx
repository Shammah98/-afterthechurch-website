import Link from "next/link";

export default function NotFound() {
  return (
    <section className="errorPage">
      <p className="eyebrow">Page not found</p>
      <h1>This address does not lead to an available page.</h1>
      <p>
        The page may have moved, or a story may have been unpublished at the
        author’s request.
      </p>
      <div className="buttonRow">
        <Link className="button primary" href="/">Return Home</Link>
        <Link className="button secondary" href="/resources">Browse Resources</Link>
      </div>
    </section>
  );
}
