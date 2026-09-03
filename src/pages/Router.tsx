import './Router.scss';

export default function Router() {
  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header__breadcrumb" style={{ visibility: 'hidden' }}>
          {/* Breadcrumb hidden on first-level pages */}
        </div>
        <div className="page-header__content">
          <div className="page-header__title-row">
            <h1 className="page-header__title">Router</h1>
          </div>
          <p className="page-header__description">
            Manage router configurations, monitor performance, and optimize routing protocols across your network.
          </p>
        </div>
      </div>
    </div>
  );
}

// Made with Bob