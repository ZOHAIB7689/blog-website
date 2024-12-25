declare module '@sanity/asset-utils' {
  export function getImageDimensions(value: any): { width: number; height: number };
}

declare module '@sanity/image-url' {
  const urlBuilder: (config: any) => {
    image: (value: any) => {
      fit: (fitType: string) => {
        auto: (formatType: string) => {
          url: () => string;
        };
      };
    };
  };
  export default urlBuilder;
}
