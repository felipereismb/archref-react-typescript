import { RouteProps as ReactDOMRouteProps } from 'react-router-dom';

export interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
