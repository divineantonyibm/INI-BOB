import { FlowData } from '@carbon/icons-react';
import './Skills.scss';

export default function Skills() {
  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-header__breadcrumb" style={{ visibility: 'hidden' }}>
          {/* Breadcrumb hidden on first-level pages */}
        </div>
        <div className="page-header__content">
          <div className="page-header__title-row">
            <h1 className="page-header__title">Skills</h1>
            <button className="page-header__action">
              <span>Manage skills</span>
              <FlowData size={16} />
            </button>
          </div>
          <p className="page-header__description">
            Define and manage network automation skills, workflows, and intelligent operations capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}

// Made with Bob