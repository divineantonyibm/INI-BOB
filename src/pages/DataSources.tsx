import { Credentials, Add } from '@carbon/icons-react';
import { SideNavMenuItem, Search, Button } from '@carbon/react';
import './DataSources.scss';

export default function DataSources() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-header__breadcrumb" style={{ visibility: 'hidden' }}>
          {/* Breadcrumb hidden on first-level pages */}
        </div>
        <div className="page-header__content">
          <div className="page-header__title-row">
            <h1 className="page-header__title">Data Sources</h1>
            <button className="page-header__action">
              <span>Manage Credentials</span>
              <Credentials size={16} />
            </button>
          </div>
          <p className="page-header__description">
            Manage and connect data sources to power observations with the most relevant network data.
          </p>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content__left-panel">
          <div className="data-source-nav">
            <div className="data-source-nav__header">
              <p className="data-source-nav__label">Configured data source</p>
            </div>
            <div className="data-source-nav__items">
              <SideNavMenuItem isActive href="#">
                Mist AI <span className="data-source-nav__count">(3)</span>
              </SideNavMenuItem>
              <SideNavMenuItem href="#">
                IBM SevOne <span className="data-source-nav__count">(6)</span>
              </SideNavMenuItem>
            </div>
          </div>
        </div>
        <div className="page-content__right-container">
          <div className="data-source-toolbar">
            <Search
              size="md"
              placeholder="Search data sources"
              labelText="Search data sources"
              closeButtonLabelText="Clear search input"
              id="data-source-search"
              className="data-source-toolbar__search"
            />
            <Button
              kind="primary"
              renderIcon={Add}
              iconDescription="Add data source"
              className="data-source-toolbar__add-button"
            >
              Add data source
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob