'use client';
import { useState } from 'react';

export default function Connect() {
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const response = await fetch('/api/connect', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    if (response.ok) setDone(true);
    else alert('Something went wrong. Please check the form and try again.');
  }

  return <>
    <section className="page-head"><div className="wrap"><h1>Request peer connection</h1></div></section>
    <section><div className="wrap">
      {done ? <div className="form-card success"><h2>Request received</h2><p>A moderator will review your request before making contact.</p></div> :
      <form className="form-card" onSubmit={submit}>
        <div className="field"><label>Email</label><input type="email" name="email" required /></div>
        <div className="field"><label>Name or chosen name</label><input name="name" maxLength={80} required /></div>
        <div className="field"><label>What kind of connection would help?</label><select name="interest" required><option value="">Choose one</option><option>Moderated online peer group</option><option>One-to-one peer introduction</option><option>Volunteer information</option><option>Research or documentary participation</option></select></div>
        <div className="field"><label>Anything we should know?</label><textarea name="message" maxLength={2000} /></div>
        <label><input type="checkbox" name="consent" value="yes" required /> I consent to being contacted about this request.</label>
        <div className="actions"><button className="button">Send private request</button></div>
      </form>}
    </div></section>
  </>;
}
