import './comparison-table.css';
import { isMobile } from 'react-device-detect';

const MobileRow = ({ index, children, tableHeaders = [] }) => {
  const key = Object.keys(children)[0];
  const values = Object.values(children)[0];

  const isIncluded = (item) => values.includes(item);
  
  return (
    <div className="row">
      <div className="row__title t-upper">{ key.replace(/[_]/g, ' ') }</div>
      <div className="row__items" style={{ gridTemplateColumns: `repeat(${ tableHeaders.length }, 1fr)` }}>
     {
       tableHeaders.map((header, index) => (
         <div className="row__item" key={ index + 1 }>
           <div className="row__item--header t-upper">{ header }</div>
           <div className="row__item--icon">
              <svg className={ `${ isIncluded(header) ? '' : 'hidden' }` } xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" strokeWidth="2" d="M1 8.124L5.623 13 17 1"/></svg>
           </div>
         </div>
       ))
     }
     </div>
    </div>
  );
};

const Row = ({ index, children, tableHeaders = [] }) => {
  const key = Object.keys(children)[0];
  const values = Object.values(children)[0];

  return (
    <div className="row" style={{ gridTemplateColumns: `2fr repeat(${ tableHeaders.length - 1 }, 1fr)` }}> 
      <div className="row__item t-upper">{ key.replace(/[_]/g, ' ') }</div>
      {
          values.map((value, _index) => (
            <div className="row__item" key={ _index + 1 }>
                { value && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="none" stroke="#000" strokeWidth="2" d="M1 8.124L5.623 13 17 1"/></svg> }
            </div>
          ))
      }
    </div>
  );
};

export default function ComparisonTable({ title, headers = [], rowData = [] }) {
    return isMobile ? (
      <div className="table">
        <div className="table__headers">
                { headers.map((header, index) => index + 1 === 1 ? (<span key={ index + 1 } className="t-upper">{ header }</span>) : null) }
        </div>
        <div className="table__body">
          { rowData.map((data, index) => (<MobileRow key={ index + 1 } children={ data } tableHeaders={ headers.slice(1, headers.length)} index={ index } />)) }
        </div>
      </div>
    ) : (
        <div className="table">
            <div className="table__title">
                <h1 className="t-upper">{ title }</h1>
            </div>
            <div className="table__headers" style={{ gridTemplateColumns: `2fr repeat(${ headers.length - 1 }, 1fr)` }}>
                { headers.map((header, index) => (<span key={ index + 1 } className="t-upper">{ header }</span>)) }
            </div>
            <div className="table__body">
                { rowData.map((data, index) => (<Row key={ index + 1 } children={ data } tableHeaders={ headers.slice() } index={ index } />)) }
            </div>
        </div>
    );
}