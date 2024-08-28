import runningIcon from '../../assets/icons/execution.png'
import stopIcon from '../../assets/icons/stop.png'
import failureIcon from '../../assets/icons/failure.png'
import unkownIcon from '../../assets/icons/unknown-status.png'
import startTimeIcon from '../../assets/icons/start.png'
import stopTimeIcon from '../../assets/icons/stop-watch.png'
import infoIcon from '../../assets/icons/info.png'
import nameIcon from '../../assets/icons/tag.png'
import groupIcon from '../../assets/icons/bookmarks.png'
import unknownIcon from '../../assets/icons/unknown-status.png'

export const getStatusColor = (status) => {
    switch (status) {
      case 'RUNNING':
        return 'green';
      case 'STOPPED':
        return 'gray';
      case 'FAILED':
        return 'red';
      default:
        return 'black';
    }
  };

export const getStatusIcon = (status) => {
    switch (status) {
        case 'RUNNING':
            return runningIcon;
        case 'STOPPED':
            return stopIcon;
        case 'FAILED':
            return failureIcon;
        default:
            return unkownIcon;
    }
}

export const getProcessDetails = (item, processor) => {
  switch (item) {
    case 'statename':
      return getStatusIcon(`${processor[item]}`);
    case 'start':
      return startTimeIcon;
    case 'stop':
      return stopTimeIcon;
    case 'description':
      return infoIcon;
    case 'name':
      return nameIcon;
    case 'group':
      return groupIcon;
    default:
      return unknownIcon; 
  }
}

export const getProcessorInfo = (item, processor) => {
  switch (item) {
    case 'statename':
      return `${processor[item]}`;
    case 'start':
      return new Date(`${processor[item]}` * 1000).toLocaleString();
    case 'stop':
      return new Date(`${processor[item]}` * 1000).toLocaleString();
    case 'description':
      return `${processor[item]}`;
    case 'name':
      return `${processor[item].replace(/_/g, " ").toUpperCase()}`;
    case 'group':
      return `${processor[item].replace(/_/g, " ").toUpperCase()}`;
    default:
      return 'unknown'; 
  }
}

export const getIconSpin = (status) => {
  switch (status) {
    case 'RUNNING':
      return true
    default:
      return false;
  }
}