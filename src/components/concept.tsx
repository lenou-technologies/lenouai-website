export function ConceptPreview() {
  return (
    <figure className="concept" aria-label="Concept preview of the LeNou AI app interface, not a functional product">
      <div className="phone">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen" aria-hidden="true">
          <p className="cp-greet">Good morning</p>
          <p className="cp-title">Today, at a glance</p>
          <div className="cp-card cp-card-green">
            <span className="cp-label">This month</span>
            <span className="cp-big">Sample figures</span>
            <div className="cp-bars"><i style={{ height: '38%' }} /><i style={{ height: '62%' }} /><i style={{ height: '47%' }} /><i style={{ height: '80%' }} /><i style={{ height: '55%' }} /><i style={{ height: '33%' }} /></div>
          </div>
          <div className="cp-row"><span className="cp-check" />Review upcoming bills</div>
          <div className="cp-row"><span className="cp-check done" />Sort receipts</div>
          <div className="cp-row"><span className="cp-check" />Plan the week</div>
          <div className="cp-assist"><span className="cp-avatar">?</span><span>Your assistant, named by you</span></div>
        </div>
      </div>
      <figcaption className="concept-cap">Concept preview &middot; illustrative only &middot; no real data</figcaption>
    </figure>
  );
}
