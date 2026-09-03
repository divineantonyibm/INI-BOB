import { Document } from '@carbon/icons-react';
import './Documents.scss';

const Documents = () => {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__breadcrumb">
          {/* Breadcrumb content can be added here */}
        </div>
        <div className="page-header__content">
          <div className="page-header__title-row">
            <h1 className="page-header__title">Documents</h1>
          </div>
          <p className="page-header__description">
            Manage documents and knowledge base for your AI agents
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;

// Made with Bob
