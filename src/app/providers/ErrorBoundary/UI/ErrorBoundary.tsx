import { ErrorPage } from 'pages/ErrorPage';
import { Component, ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>  {
    public state: ErrorBoundaryState = {
        hasError: false,
    };
  
    static getDerivedStateFromError(_error: Error) {
        return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('From ErrorBoundary:', error, errorInfo);
    }
  
    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Suspense fallback=''>
                    <ErrorPage />
                </Suspense>
            );
        }
  
        return children;
    }
}
