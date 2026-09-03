import './Network.scss';

export default function Network() {
  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header__breadcrumb" style={{ visibility: 'hidden' }}>
          {/* Breadcrumb hidden on first-level pages */}
        </div>
        <div className="page-header__content">
          <div className="page-header__title-row">
            <h1 className="page-header__title">Network</h1>
          </div>
          <p className="page-header__description">
            Monitor and manage your network infrastructure, devices, and connectivity across all sites.
          </p>
        </div>
      </div>
    </div>
  );
}

// Made with Bob