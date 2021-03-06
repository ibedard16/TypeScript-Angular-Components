import * as clientServerDataSource from './clientServerDataSource/clientServerDataSource.service';
import * as dataPager from './dataPager/dataPager.service';
import * as dataServiceDataSource from './dataServiceDataSource/dataServiceDataSource.service';
import * as serverSideDataSource from './serverSideDataSource/serverSideDataSource.service';
import * as simpleDataSource from './simpleDataSource/simpleDataSource.service';
import * as smartDataSource from './smartDataSource/smartDataSource.service';
import * as events from './dataSourceEvents';
import * as dataSourceProcessor from './dataSourceProcessor.service';
import * as dataSourceBase from './dataSourceBase.service';
export { clientServerDataSource, dataPager, dataServiceDataSource, serverSideDataSource, simpleDataSource, smartDataSource, events, dataSourceProcessor, dataSourceBase };
export * from './dataSource';
export { IAsyncDataSource, IDataSetFunction } from './asyncDataSource.service';
export declare var moduleName: string;
