import { Credentials } from '@carbon/icons-react';
import './Tools.scss';

const Tools = () => {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__breadcrumb">
          {/* Breadcrumb content can be added here */}
        </div>
        <div className="page-header__content">
          <div className="page-header__title-row">
            <h1 className="page-header__title">Tools</h1>
            <button className="page-header__action">
              <span>Manage Credentials</span>
              <Credentials size={16} />
            </button>
          </div>
          <p className="page-header__description">
            Manage and configure tools available to your AI agents
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;

// Made with Bob
