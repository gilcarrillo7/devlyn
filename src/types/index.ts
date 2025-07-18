interface Window {
  dataLayer: {
    push: (event: Record<string, any>) => void;
  };
}
