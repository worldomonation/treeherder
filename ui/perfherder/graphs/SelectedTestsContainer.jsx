import React from 'react';
import PropTypes from 'prop-types';
import { react2angular } from 'react2angular/index.es2015';
import {
  Container,
  // Row,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import perf from '../../js/perf';

export class SelectedTestsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { seriesList, addTestData } = this.props;
    console.log(seriesList);
    return (
      <Container className="graph-legend-table">
        {seriesList.length > 0 &&
          seriesList.map(series => (
            <div>
              <span className="close" onClick={() => {}}>
                <FontAwesomeIcon icon={faTimes} size="sm" title="" />
              </span>
              {/* style="border-left-color: {{series.blockColor}}" ng-class="{'series-inactive':!series.visible}" */}
              <div className="graph-legend">
                <a
                  href=""
                  id="test-name"
                  onClick={() =>
                    addTestData('addRelatedConfigs', series.signature)
                  }
                  title="Add related configurations"
                >
                  {series.name}
                </a>
                <br />
                {/* <a href="" id="project-name" ng-click="addTestData('addRelatedBranches', series.signature)" title="Add related branches">{{series.projectName}}</a><br/>
          <a href="" id="platform" ng-click="addTestData('addRelatedPlatform', series.signature)" title="Add related platforms">{{series.platform}}</a><br/> */}
              </div>
              {/* <p className="small signature">{series.signature}</p>
        <input title="Show/Hide series" type="checkbox" ng-model="series.visible" class="show-hide-check" ng-change="showHideSeries(series.signature)"> */}
            </div>
          ))}
      </Container>
    );
  }
}

// <!-- <table class="table table-bordered graph-legend-table">
// <tr ng-repeat="series in seriesList">
//   <td>
//     <button class="close" ng-click="removeSeries(series.projectName, series.signature)">
//       <span aria-hidden="true">&times;</span>
//       <span class="sr-only">Remove series</span>
//     </button>
//       <div class="graph-legend" style="border-left-color: {{series.blockColor}}" ng-class="{'series-inactive':!series.visible}">
//         <a href="" id="test-name" ng-click="addTestData('addRelatedConfigs', series.signature)" title="Add related configurations">{{series.name}}</a><br/>
//         <a href="" id="project-name" ng-click="addTestData('addRelatedBranches', series.signature)" title="Add related branches">{{series.projectName}}</a><br/>
//         <a href="" id="platform" ng-click="addTestData('addRelatedPlatform', series.signature)" title="Add related platforms">{{series.platform}}</a><br/>
//         <div class="signature"><small>{{series.signature}}</small></div>
//       </div>
//       <input title="Show/Hide series" type="checkbox" ng-model="series.visible" class="show-hide-check" ng-change="showHideSeries(series.signature)">
//   </td>
// </tr>
// </table> -->
SelectedTestsContainer.propTypes = {
  seriesList: PropTypes.arrayOf(PropTypes.shape({})),
  addTestData: PropTypes.func,
};

SelectedTestsContainer.defaultProps = {
  seriesList: undefined,
  addTestData: undefined,
};

perf.component(
  'selectedTestsContainer',
  react2angular(
    SelectedTestsContainer,
    ['seriesList', 'addTestData'],
    ['$stateParams', '$state'],
  ),
);

export default SelectedTestsContainer;
